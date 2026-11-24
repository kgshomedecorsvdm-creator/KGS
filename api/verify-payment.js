const crypto = require('crypto');
const { rateLimit } = require('./_rate-limit');
const security = require('./_checkout-security');
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://rgpkomngygapwjhnbgaf.supabase.co';

module.exports = async function(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (rateLimit(req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '', 10, 60000)) return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  try {
    const body = req.body || {};
    const checkout = security.verify(body.checkout_token);
    const orderId = body.razorpay_order_id, paymentId = body.razorpay_payment_id;
    if (typeof orderId !== 'string' || !/^order_[a-zA-Z0-9]+$/.test(orderId) ||
        typeof paymentId !== 'string' || !/^pay_[a-zA-Z0-9]+$/.test(paymentId) || orderId !== checkout.order_id) security.invalid('Invalid payment');
    const signature = crypto.createHmac('sha256', security.secret()).update(orderId + '|' + paymentId).digest('hex');
    if (!security.equalHex(signature, body.razorpay_signature)) security.invalid('Payment verification failed');
    const keyId = process.env.RAZORPAY1 || process.env.RAZORPAY_KEY_ID;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!keyId || !serviceKey) throw new Error('Payment configuration missing');
    const response = await fetch('https://api.razorpay.com/v1/payments/' + paymentId, {
      headers: { Authorization: 'Basic ' + Buffer.from(keyId + ':' + security.secret()).toString('base64') }
    });
    if (!response.ok) throw new Error('Payment lookup failed');
    const payment = await response.json();
    if (payment.id !== paymentId || payment.order_id !== checkout.order_id || payment.amount !== checkout.amount ||
        payment.currency !== 'INR' || payment.status !== 'captured' || payment.captured !== true || payment.amount_refunded !== 0) {
      security.invalid('Payment is not confirmed. Contact support with your payment ID if money was deducted.');
    }
    const s = checkout.shipping, totals = checkout.totals;
    const record = {
      customer_id: checkout.customer_id, shipping_name: s.name, shipping_phone: s.phone,
      shipping_address: s.address, shipping_city: s.city, shipping_state: s.state, shipping_pincode: s.pincode,
      subtotal: totals.subtotal, shipping_fee: totals.shipping_fee, total: totals.total,
      razorpay_order_id: orderId, razorpay_payment_id: paymentId
    };
    // Atomic and idempotent across simultaneous serverless requests.
    const savedResponse = await fetch(SUPABASE_URL + '/rest/v1/rpc/record_verified_checkout', {
      method: 'POST', headers: { apikey: serviceKey, Authorization: 'Bearer ' + serviceKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ p_order: record, p_items: totals.lineItems })
    });
    if (!savedResponse.ok) throw new Error('Order recording failed');
    const saved = await savedResponse.json();
    if (!saved || saved.order_number == null) throw new Error('Invalid order response');
    return res.json({ success: true, order_number: saved.order_number, total: saved.total });
  } catch (error) {
    console.error('[KGS] Checkout verification:', error.message);
    return res.status(error.status || 500).json({ error: error.status ? error.message : 'Unable to confirm order. Contact support with your payment ID.' });
  }
};
