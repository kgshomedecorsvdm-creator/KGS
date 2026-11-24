const crypto = require('crypto');
const URL = process.env.SUPABASE_URL || 'https://rgpkomngygapwjhnbgaf.supabase.co';
const ANON = process.env.SUPABASE_ANON_KEY || 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';
function invalid(message) { const e = new Error(message); e.status = 400; throw e; }
function secret() {
  const key = process.env.RAZORPAY2 || process.env.RAZORPAY_KEY_SECRET;
  if (!key) throw new Error('Payment gateway not configured');
  return key;
}
function equalHex(a, b) {
  return typeof b === 'string' && /^[a-f0-9]{64}$/.test(b) && crypto.timingSafeEqual(Buffer.from(a, 'hex'), Buffer.from(b, 'hex'));
}
function sign(payload) {
  const data = Buffer.from(JSON.stringify(payload)).toString('base64url');
  return data + '.' + crypto.createHmac('sha256', secret()).update('kgs-checkout-v1:' + data).digest('hex');
}
function verify(token) {
  if (typeof token !== 'string' || token.length > 100000) invalid('Invalid checkout');
  const parts = token.split('.');
  const mac = crypto.createHmac('sha256', secret()).update('kgs-checkout-v1:' + parts[0]).digest('hex');
  if (parts.length !== 2 || !equalHex(mac, parts[1])) invalid('Invalid checkout');
  let payload;
  try { payload = JSON.parse(Buffer.from(parts[0], 'base64url').toString()); } catch (_) { invalid('Invalid checkout'); }
  if (!payload || payload.version !== 1 || !Number.isFinite(payload.expires) || payload.expires < Date.now()) invalid('Checkout expired. Contact support if you have already paid.');
  return payload;
}
function validateItems(items) {
  if (!Array.isArray(items) || !items.length || items.length > 50) invalid('Invalid cart');
  const seen = new Set();
  items.forEach(item => {
    if (!item || typeof item.id !== 'string' || !/^[a-zA-Z0-9_-]{1,80}$/.test(item.id) || !Number.isSafeInteger(item.qty) || item.qty < 1 || item.qty > 100 || seen.has(item.id)) invalid('Invalid cart');
    seen.add(item.id);
  });
}
function shipping(input) {
  if (!input || typeof input !== 'object') invalid('Delivery details required');
  const result = {};
  for (const [key, max] of Object.entries({name: 120, phone: 10, address: 600, city: 100, state: 30, pincode: 6})) {
    if (typeof input[key] !== 'string') invalid('Invalid delivery details');
    const value = input[key].trim();
    if (!value || value.length > max || /[<>\x00-\x1f]/.test(value)) invalid('Invalid delivery details');
    result[key] = value;
  }
  if (!/^[6-9]\d{9}$/.test(result.phone) || !/^\d{6}$/.test(result.pincode) || result.state !== 'Tamil Nadu') invalid('Invalid delivery details');
  return result;
}
async function customer(req) {
  const header = req.headers.authorization;
  if (!header) return null;
  if (typeof header !== 'string' || !/^Bearer \S+$/.test(header)) { const e = new Error('Invalid session'); e.status = 401; throw e; }
  const response = await fetch(URL + '/auth/v1/user', { headers: { apikey: ANON, Authorization: header } });
  const user = await response.json();
  if (!response.ok || !user.id) { const e = new Error('Your session expired. Sign in again or continue as a guest.'); e.status = 401; throw e; }
  return user.id;
}
module.exports = { invalid, secret, equalHex, sign, verify, validateItems, shipping, customer };
