var crypto = require('crypto');
var { rateLimit } = require('./_rate-limit');

var SUPABASE_URL = process.env.SUPABASE_URL || 'https://rgpkomngygapwjhnbgaf.supabase.co';
var SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';

// Fetches active products by id (public anon key). Returns { id: product } map.
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

// Recomputes trusted totals and builds the order_items rows from server prices.
// Returns { subtotal, shipping_fee, total, lineItems } or throws Error with code.
async function buildOrder(items, state) {
  if (!Array.isArray(items) || items.length === 0) throw new Error('items_empty');
  var ids = [];
  for (var i = 0; i < items.length; i++) {
    var it = items[i];
    if (!it || !it.id || !(it.qty > 0)) throw new Error('items_invalid');
    ids.push(it.id);
  }
  var products = await fetchProducts(ids);
  var subtotal = 0;
  var lineItems = [];
  for (var j = 0; j < items.length; j++) {
    var item = items[j];
    var prod = products[item.id];
    if (!prod || prod.is_active !== true) throw new Error('product_unavailable');
    var qty = Math.floor(item.qty);
    if (!(qty > 0)) throw new Error('items_invalid');
    var price = parseFloat(prod.price);
    subtotal += price * qty;
    lineItems.push({
      product_id: prod.id,
      product_name: prod.name,
      product_image: prod.image_url || '',
      quantity: qty,
      unit_price: price,
      total_price: price * qty
    });
  }
  var shipping_fee = 0;
  return { subtotal: subtotal, shipping_fee: shipping_fee, total: subtotal, lineItems: lineItems };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  var ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
  if (rateLimit(ip, 10, 60000)) return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  try {
    var body = req.body || {};
    var razorpay_order_id = body.razorpay_order_id;
    var razorpay_payment_id = body.razorpay_payment_id;
    var razorpay_signature = body.razorpay_signature;
    var items = body.items;
    var shipping = body.shipping || {};
    var customer_id = body.customer_id;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    var KEY_SECRET = process.env.RAZORPAY2 || process.env.RAZORPAY_KEY_SECRET;
    if (!KEY_SECRET) return res.status(500).json({ error: 'Payment gateway not configured' });

    // 1. Verify the signature FIRST. If it fails, insert nothing.
    var generated_signature = crypto
      .createHmac('sha256', KEY_SECRET)
      .update(razorpay_order_id + '|' + razorpay_payment_id)
      .digest('hex');
    if (generated_signature !== razorpay_signature) {
      return res.status(400).json({ success: false, error: 'Payment verification failed' });
    }

    // 2. Service-role key required to record the order (never trust the client).
    var SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!SERVICE_ROLE) {
      console.error('[KGS] SUPABASE_SERVICE_ROLE_KEY missing — cannot record order');
      return res.status(500).json({ error: 'Order recording not configured' });
    }

    // 3. Re-fetch prices and recompute totals server-side.
    var order;
    try {
      order = await buildOrder(items, shipping.state);
    } catch (e) {
      var msg = e && e.message;
      if (msg === 'product_fetch_failed') return res.status(500).json({ error: 'Could not verify product prices' });
      return res.status(400).json({ error: 'Invalid cart: ' + (msg || 'bad request') });
    }

    // 4. Insert the order with the service role (bypasses RLS).
    var orderRow = {
      customer_id: customer_id || null,
      shipping_name: shipping.name || null,
      shipping_phone: shipping.phone || null,
      shipping_address: shipping.address || null,
      shipping_city: shipping.city || null,
      shipping_state: shipping.state || null,
      shipping_pincode: shipping.pincode || null,
      payment_method: 'online',
      payment_status: 'paid',
      status: 'confirmed',
      razorpay_order_id: razorpay_order_id,
      razorpay_payment_id: razorpay_payment_id,
      subtotal: order.subtotal,
      shipping_fee: order.shipping_fee,
      total: order.total
    };

    var sbHeaders = {
      'apikey': SERVICE_ROLE,
      'Authorization': 'Bearer ' + SERVICE_ROLE,
      'Content-Type': 'application/json',
      'Prefer': 'return=representation'
    };

    var orderResp = await fetch(SUPABASE_URL + '/rest/v1/orders', {
      method: 'POST',
      headers: sbHeaders,
      body: JSON.stringify(orderRow)
    });
    var orderData = await orderResp.json();
    if (!orderResp.ok || !Array.isArray(orderData) || !orderData[0]) {
      console.error('[KGS] Order insert failed:', orderData);
      return res.status(500).json({ error: 'Could not record order' });
    }
    var saved = orderData[0];

    // 5. Insert the line items.
    var lineRows = order.lineItems.map(function (li) {
      return {
        order_id: saved.id,
        product_id: li.product_id,
        product_name: li.product_name,
        product_image: li.product_image,
        quantity: li.quantity,
        unit_price: li.unit_price,
        total_price: li.total_price
      };
    });
    var itemsResp = await fetch(SUPABASE_URL + '/rest/v1/order_items', {
      method: 'POST',
      headers: sbHeaders,
      body: JSON.stringify(lineRows)
    });
    if (!itemsResp.ok) {
      var itemsErr = await itemsResp.json();
      console.error('[KGS] Order items insert failed:', itemsErr);
      // Order header is already recorded; surface a partial-success error.
      return res.status(500).json({ error: 'Order recorded but items failed', order_number: saved.order_number });
    }

    return res.json({ success: true, order_number: saved.order_number, total: order.total });
  } catch (err) {
    console.error('[KGS] Verify payment exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
