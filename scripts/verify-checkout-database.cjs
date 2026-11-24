const { PGlite } = require('@electric-sql/pglite');
const fs = require('node:fs');
const assert = require('node:assert/strict');
(async () => {
  const db = new PGlite();
  await db.exec(`
    CREATE ROLE anon; CREATE ROLE authenticated; CREATE ROLE service_role;
    CREATE TABLE orders (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(), order_number serial, customer_id uuid,
      shipping_name text NOT NULL, shipping_phone text NOT NULL, shipping_address text NOT NULL,
      shipping_city text NOT NULL, shipping_state text NOT NULL, shipping_pincode text NOT NULL,
      subtotal numeric NOT NULL, shipping_fee numeric, total numeric NOT NULL,
      payment_method text, payment_status text, status text, razorpay_order_id text, razorpay_payment_id text
    );
    CREATE TABLE order_items (
      id uuid PRIMARY KEY DEFAULT gen_random_uuid(), order_id uuid REFERENCES orders(id), product_id uuid,
      product_name text NOT NULL, product_image text, quantity integer CHECK (quantity > 0), unit_price numeric, total_price numeric
    );
    GRANT INSERT ON orders, order_items TO anon, authenticated;
  `);
  await db.exec(fs.readFileSync('supabase/migrations/202611240001_secure_guest_checkout.sql', 'utf8'));
  const order = { customer_id: null, shipping_name: 'Guest', shipping_phone: '9876543210', shipping_address: '10 Main Road', shipping_city: 'Chennai', shipping_state: 'Tamil Nadu', shipping_pincode: '600001', subtotal: 200, shipping_fee: 0, total: 200, razorpay_order_id: 'order_test', razorpay_payment_id: 'pay_test' };
  const items = [{ product_id: '11111111-1111-4111-8111-111111111111', product_name: 'Lamp', quantity: 2, unit_price: 100, total_price: 200 }];
  const save = (o = order, i = items) => db.query('SELECT record_verified_checkout($1::jsonb, $2::jsonb) AS result', [JSON.stringify(o), JSON.stringify(i)]);
  const [first, second] = await Promise.all([save(), save()]);
  assert.deepEqual(first.rows, second.rows);
  assert.equal((await db.query('SELECT count(*)::int AS count FROM orders')).rows[0].count, 1);
  assert.equal((await db.query('SELECT count(*)::int AS count FROM order_items')).rows[0].count, 1);
  await assert.rejects(save({ ...order, razorpay_payment_id: 'pay_other' }), /Payment conflict/);
  await assert.rejects(save({ ...order, razorpay_order_id: 'order_other' }), /unique/);
  await assert.rejects(save({ ...order, razorpay_order_id: 'order_new', razorpay_payment_id: 'pay_new' }, [{ ...items[0], quantity: -1 }]), /check constraint/);
  assert.equal((await db.query('SELECT count(*)::int AS count FROM orders')).rows[0].count, 1, 'Failed items must roll back the order header');
  for (const role of ['anon', 'authenticated']) {
    await db.exec('SET ROLE ' + role);
    await assert.rejects(save(), /permission denied/);
    await assert.rejects(db.exec("INSERT INTO orders (shipping_name) VALUES ('forged')"), /permission denied/);
    await assert.rejects(db.exec("INSERT INTO order_items (product_name) VALUES ('forged')"), /permission denied/);
    await db.exec('RESET ROLE');
  }
  await db.exec('SET ROLE service_role');
  assert.equal((await save()).rows[0].result.order_number, first.rows[0].result.order_number);
  await db.close();
  console.log('PASS: migration, duplicate retries, payment conflicts, unique payment IDs, atomic rollback, blocked direct inserts and restricted RPC permissions.');
})().catch(e => { console.error(e); process.exitCode = 1; });
