var { rateLimit } = require('./_rate-limit');

var SUPABASE_URL = process.env.SUPABASE_URL || 'https://rgpkomngygapwjhnbgaf.supabase.co';
var SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';

// Fetches active products by id from Supabase and returns a { id: product } map.
// Throws on transport/HTTP error. Uses the public anon key (publishable).
async function fetchProducts(ids) {
  var inList = '(' + ids.map(function (id) { return '"' + String(id).replace(/"/g, '') + '"'; }).join(',') + ')';
  var url = SUPABASE_URL + '/rest/v1/products?select=id,price,name,image_url,is_active&id=in.' + encodeURIComponent(inList);
  var resp = await fetch(url, {
    headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + SUPABASE_ANON_KEY }
  });
  var rows = await resp.json();
  if (!resp.ok) {
    console.error('[KGS] Supabase product fetch error:', rows);
    throw new Error('product_fetch_failed');
  }
  var map = {};
  (rows || []).forEach(function (p) { map[p.id] = p; });
  return map;
}

// Recomputes the trusted subtotal/shipping/total from server-side prices.
// Returns { subtotal, shipping_fee, total } or throws Error with a code.
async function computeTotals(items, state) {
  if (!Array.isArray(items) || items.length === 0) throw new Error('items_empty');
  var ids = [];
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    if (!it || !it.id || !(it.qty > 0)) throw new Error('items_invalid');
    ids.push(it.id);
  }
  var products = await fetchProducts(ids);
  var subtotal = 0;
  for (var j = 0; j < items.length; j++) {
    var item = items[j];
    var prod = products[item.id];
    if (!prod || prod.is_active !== true) throw new Error('product_unavailable');
    var qty = Math.floor(item.qty);
    if (!(qty > 0)) throw new Error('items_invalid');
    subtotal += parseFloat(prod.price) * qty;
  }
  var shipping_fee = 0;
  var total = subtotal;
  return { subtotal: subtotal, shipping_fee: shipping_fee, total: total };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  var ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
  if (rateLimit(ip, 10, 60000)) return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  try {
    var body = req.body || {};
    var items = body.items;
    var state = body.state;
    var currency = body.currency || 'INR';
    var receipt = body.receipt || ('kgs_' + Date.now());

    var KEY_ID = process.env.RAZORPAY1 || process.env.RAZORPAY_KEY_ID;
    var KEY_SECRET = process.env.RAZORPAY2 || process.env.RAZORPAY_KEY_SECRET;
    if (!KEY_ID || !KEY_SECRET) return res.status(500).json({ error: 'Payment gateway not configured' });

    var totals;
    try {
      totals = await computeTotals(items, state);
    } catch (e) {
      var msg = e && e.message;
      if (msg === 'product_fetch_failed') return res.status(500).json({ error: 'Could not verify product prices' });
      return res.status(400).json({ error: 'Invalid cart: ' + (msg || 'bad request') });
    }

    var amountPaise = Math.round(totals.total * 100);
    if (amountPaise < 100) return res.status(400).json({ error: 'Order total too low' });

    var auth = Buffer.from(KEY_ID + ':' + KEY_SECRET).toString('base64');
    var response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: { 'Authorization': 'Basic ' + auth, 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amountPaise, currency: currency, receipt: receipt })
    });
    var data = await response.json();
    if (!response.ok) {
      console.error('[KGS] Razorpay create order error:', data);
      return res.status(500).json({ error: (data.error && data.error.description) || 'Failed to create order' });
    }
    return res.json({
      order_id: data.id,
      amount: data.amount,
      currency: data.currency,
      key: KEY_ID,
      total: totals.total,
      subtotal: totals.subtotal,
      shipping_fee: totals.shipping_fee
    });
  } catch (err) {
    console.error('[KGS] Create order exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
