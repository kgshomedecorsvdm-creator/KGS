const assert = require('node:assert/strict');
const crypto = require('node:crypto');
process.env.RAZORPAY_KEY_ID = 'test-key';
process.env.RAZORPAY_KEY_SECRET = 'test-secret';
process.env.SUPABASE_SERVICE_ROLE_KEY = 'test-service';
const security = require('../api/_checkout-security');
const create = require('../api/create-order');
const verify = require('../api/verify-payment');
const shipping = { name: 'Guest', phone: '9876543210', address: '10 Main Road', city: 'Chennai', state: 'Tamil Nadu', pincode: '600001' };
const item = { id: '11111111-1111-4111-8111-111111111111', qty: 2 };
let ip = 0, calls = [], mode = {}, recorded;
global.fetch = async (url, options = {}) => {
  calls.push(url);
  const ok = data => ({ ok: true, json: async () => data });
  if (url.includes('/auth/v1/user')) return mode.invalidAuth ? { ok: false, json: async () => ({}) } : ok({ id: 'verified-user' });
  if (url.includes('/products?')) return ok([{ id: item.id, price: '199.99', name: 'Lamp', is_active: true }]);
  if (url.includes('/checkout_security_ready')) return ok(!mode.notReady);
  if (url.endsWith('/v1/orders')) { const b = JSON.parse(options.body); assert.equal(b.currency, 'INR'); assert.equal(b.amount, 39998); return ok({ id: 'order_test', amount: b.amount, currency: 'INR' }); }
  if (url.includes('/v1/payments/')) return ok({ id: 'pay_test', order_id: 'order_test', amount: 39998, currency: 'INR', status: 'captured', captured: true, amount_refunded: 0, ...mode.payment });
  if (url.includes('/record_verified_checkout')) { recorded = JSON.parse(options.body); return mode.recordFailure ? { ok: false } : ok({ order_number: 1001, total: 399.98 }); }
  throw Error('Unexpected network request');
};
async function request(handler, body, authorization) {
  let status = 200, data;
  await handler({ method: 'POST', body, headers: { 'x-forwarded-for': 'test-' + ++ip, ...(authorization ? { authorization } : {}) } }, { status(n) { status = n; return this; }, json(d) { data = d; return this; } });
  return { status, data };
}
(async () => {
  const guest = await request(create, { items: [item], shipping, currency: 'USD', customer_id: 'forged-user' });
  assert.equal(guest.status, 200);
  const snapshot = security.verify(guest.data.checkout_token);
  assert.equal(snapshot.customer_id, null);
  assert.equal(snapshot.amount, 39998);
  const member = await request(create, { items: [item], shipping, customer_id: 'forged-user' }, 'Bearer valid');
  assert.equal(security.verify(member.data.checkout_token).customer_id, 'verified-user');
  mode = { invalidAuth: true };
  assert.equal((await request(create, { items: [item], shipping }, 'Bearer bad')).status, 401);
  mode = { notReady: true }; calls = [];
  assert.equal((await request(create, { items: [item], shipping })).status, 500);
  assert.equal(calls.some(u => u.endsWith('/v1/orders')), false);
  mode = {};
  for (const items of [[], [item, item], [{ ...item, qty: -1 }], [{ ...item, qty: 1.5 }], [{ ...item, qty: '2' }], [{ ...item, qty: 101 }], [{ ...item, id: 'x),or(id)' }]]) {
    assert.equal((await request(create, { items, shipping })).status, 400);
  }
  assert.equal((await request(create, { items: [item], shipping: { ...shipping, phone: 'bad' } })).status, 400);
  const valid = { checkout_token: guest.data.checkout_token, razorpay_order_id: 'order_test', razorpay_payment_id: 'pay_test', razorpay_signature: crypto.createHmac('sha256', 'test-secret').update('order_test|pay_test').digest('hex') };
  assert.equal((await request(verify, { ...valid, customer_id: 'forged', shipping: { name: 'Attacker' }, items: [] })).status, 200);
  assert.equal(recorded.p_order.customer_id, null);
  assert.equal(recorded.p_order.shipping_name, 'Guest');
  assert.equal(recorded.p_items[0].quantity, 2);
  for (const body of [
    { ...valid, checkout_token: valid.checkout_token + 'a' },
    { ...valid, checkout_token: security.sign({ ...snapshot, expires: 0 }) },
    { ...valid, razorpay_signature: 'bad' },
    { ...valid, razorpay_order_id: 'order_other' },
    { ...valid, razorpay_payment_id: '../bad' }
  ]) { calls = []; assert.equal((await request(verify, body)).status, 400); assert.equal(calls.length, 0); }
  for (const payment of [{amount: 1}, {currency: 'USD'}, {order_id: 'order_other'}, {status: 'authorized', captured: false}, {amount_refunded: 10}]) {
    mode = {payment}; calls = []; assert.equal((await request(verify, valid)).status, 400);
    assert.equal(calls.some(u => u.includes('/record_verified_checkout')), false);
  }
  mode = {recordFailure: true};
  assert.equal((await request(verify, valid)).status, 500);
  console.log('PASS: verified identity, signed cart/address, amount/currency/capture checks, input limits, invalid sessions, token tampering/expiry, and fail-closed database errors.');
})().catch(e => { console.error(e); process.exitCode = 1; });
