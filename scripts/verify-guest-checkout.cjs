const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('assets/js/app.js', 'utf8');
const handler = source.slice(source.indexOf('  var handlePlaceOrder ='), source.indexOf('  React.useEffect', source.indexOf('  var handlePlaceOrder =')));
const flush = async () => { for (let i = 0; i < 12; i++) await new Promise(setImmediate); };

async function checkPayment(user, outcome) {
  const requests = [], routes = [], carts = [], processing = [];
  let gateway, savedAddresses = 0;
  const context = {
    currentUser: user, cart: [{ id: 'product-1', qty: 2 }],
    _toConsumableArray: a => [...a],
    getSB: () => user ? { auth: { getSession: async () => ({ data: { session: { access_token: 'test-session' } } }), updateUser: async () => { savedAddresses++; return {}; } } } : null,
    fetch: async (url, options) => {
      requests.push({ url, body: JSON.parse(options.body), headers: options.headers });
      return { ok: url.includes('create-order') ? outcome !== 'create-error' : outcome !== 'verify-error', json: async () => url.includes('create-order')
        ? { order_id: 'gateway-order', amount: 20000, currency: 'INR', key: 'test', checkout_token: 'signed-checkout' }
        : { success: outcome !== 'verify-error', order_number: 123 } };
    },
    ensureRazorpay: async () => function(options) { gateway = options; this.open = () => {}; },
    setLastCart: () => {}, setLastOrderNumber: () => {}, setCart: c => carts.push(c),
    setRoute: r => routes.push(r), setCurrentUser: () => {}, showToast: () => {},
    window: { scrollTo: () => {} }, console: { error: () => {}, log: () => {} }
  };
  vm.createContext(context);
  vm.runInContext(handler, context);
  context.handlePlaceOrder({ name: 'Guest', phone: '9876543210', address: '10 Main Road', city: 'Chennai', pincode: '600001' }, 0, v => processing.push(v));
  await flush();
  assert.equal(requests[0].url, '/api/create-order');
  if (outcome === 'create-error') {
    assert.equal(gateway, undefined);
  } else if (outcome === 'cancel') {
    gateway.modal.ondismiss();
  } else {
    gateway.handler({ razorpay_order_id: 'gateway-order', razorpay_payment_id: 'payment', razorpay_signature: 'signature' });
    await flush();
    assert.equal(requests[1].body.checkout_token, 'signed-checkout');
    assert.equal(requests[1].body.customer_id, undefined);
    assert.equal(requests[0].body.shipping.phone, '9876543210');
    assert.equal(requests[0].headers.Authorization, user ? 'Bearer test-session' : undefined);
  }
  assert.equal(routes.includes('login'), false);
  assert.equal(processing.at(-1), false);
  assert.equal(carts.length, outcome === 'success' ? 1 : 0);
  assert.equal(routes.includes('order-confirmation'), outcome === 'success');
  assert.equal(savedAddresses, user && outcome === 'success' ? 1 : 0);
}

(async () => {
  for (const user of [null, { id: 'account-1', email: 'test@example.com', user_metadata: {} }]) {
    for (const outcome of ['success', 'cancel', 'create-error', 'verify-error']) await checkPayment(user, outcome);
  }
  // Exercise the actual checkout route with no authenticated user.
  const route = source.split("} else if (route === 'checkout') {")[1].split("} else if (route === 'order-confirmation') {")[0];
  const context = { currentUser: null, cart: [], CheckoutPage: 'CheckoutPage', handlePlaceOrder() {}, setRoute() { throw Error('Unexpected redirect'); }, React: { createElement: (type, props) => ({ type, props }) } };
  vm.createContext(context);
  vm.runInContext(route, context);
  assert.equal(context.body.type, 'CheckoutPage');
  assert.equal(context.body.props.user, null);
  console.log('PASS: guest checkout route; guest and account payment success, cancellation, creation failure, verification failure.');
})().catch(error => { console.error(error); process.exitCode = 1; });
