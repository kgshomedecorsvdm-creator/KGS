var { rateLimit } = require('./_rate-limit');

var SUPABASE_URL = process.env.SUPABASE_URL || 'https://rgpkomngygapwjhnbgaf.supabase.co';
var SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';

var STATUSES_TO_NOTIFY = ['confirmed', 'packed', 'shipped', 'out for delivery', 'delivered', 'cancelled'];

// HTML-escapes user-controlled strings (product names, customer name).
function esc(s) {
  return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
}

// Builds the order-status email subject + HTML. Ported verbatim (look-for-look)
// from the old client-side buildOrderEmailTemplate so the design is unchanged.
function buildOrderEmailTemplate(order, status) {
  var orderNum = 'KGS-' + (order.order_number || String(order.id).slice(0, 8).toUpperCase());
  var firstName = (order.customer_name || 'Valued Customer').split(' ')[0];
  var total = '₹' + Number(order.total).toLocaleString('en-IN');
  var msgs = {
    confirmed: { subject: 'Order ' + orderNum + ' Confirmed — KGS Home Décors', badge: 'Confirmed', headline: 'Your order is confirmed', body: 'Thank you! Our team is carefully preparing your order for dispatch.' },
    packed: { subject: 'Order ' + orderNum + ' Packed — KGS Home Décors', badge: 'Packed', headline: 'All packed and ready', body: 'Your order has been securely packed and will be dispatched very soon.' },
    shipped: { subject: 'Your Order is on Its Way — KGS Home Décors', badge: 'Shipped', headline: 'Your order is shipped', body: 'Great news — your order has been dispatched and is on its way to you. Log in to track your order live.' },
    'out for delivery': { subject: 'Your Order Arrives Today — KGS Home Décors', badge: 'Out for Delivery', headline: 'Out for delivery', body: 'Your order is out for delivery and should reach you today. Please be available to receive it.' },
    delivered: { subject: 'Order ' + orderNum + ' Delivered — KGS Home Décors', badge: 'Delivered', headline: 'Delivered — enjoy!', body: 'Your order has been delivered. We hope you love your new décor. If anything is not right, reach us on WhatsApp immediately.' },
    cancelled: { subject: 'Order ' + orderNum + ' Cancelled — KGS Home Décors', badge: 'Cancelled', headline: 'Your order has been cancelled', body: 'Your order has been cancelled. If you have questions or feel this was a mistake, please contact us on WhatsApp and we will sort it out.' }
  };
  var m = msgs[status];
  if (!m) return null;
  var itemsHtml = (order.order_items || []).map(function (i) {
    return '\n    <tr>\n' +
      '      <td style="padding:10px 0;border-bottom:1px solid #F0EDE8;font-size:14px;color:#1A1A1A;">' + esc(i.product_name) + '</td>\n' +
      '      <td style="padding:10px 0;border-bottom:1px solid #F0EDE8;font-size:13px;color:#5E5B59;text-align:center;">&times;' + i.quantity + '</td>\n' +
      '      <td style="padding:10px 0;border-bottom:1px solid #F0EDE8;font-size:14px;font-weight:600;color:#B89657;text-align:right;">&#8377;' + Number(i.total_price).toLocaleString('en-IN') + '</td>\n' +
      '    </tr>';
  }).join('');
  var badgeColor = status === 'cancelled' ? '#C97840' : status === 'delivered' ? '#25803A' : '#B89657';
  var html = '<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>\n' +
'<body style="margin:0;padding:0;background:#FAF8F4;font-family:Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">\n' +
'<div style="max-width:540px;margin:0 auto;padding:32px 16px;">\n' +
'  <div style="text-align:center;padding:32px 0 28px;border-bottom:1px solid #E8E2D9;">\n' +
'    <div style="font-family:Georgia,serif;font-size:28px;font-weight:700;color:#1A1A1A;letter-spacing:-0.01em;">KGS</div>\n' +
'    <div style="font-size:9px;font-weight:700;letter-spacing:0.26em;text-transform:uppercase;color:#B89657;margin-top:4px;">Home D&eacute;cors</div>\n' +
'  </div>\n' +
'  <div style="padding:32px 0 24px;text-align:center;">\n' +
'    <div style="display:inline-block;background:' + badgeColor + ';color:#fff;font-size:10.5px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;padding:5px 16px;border-radius:20px;margin-bottom:18px;">' + m.badge + '</div>\n' +
'    <h1 style="font-family:Georgia,serif;font-size:26px;font-weight:400;color:#1A1A1A;margin:0 0 14px;letter-spacing:-0.01em;">' + m.headline + '</h1>\n' +
'    <p style="font-size:14.5px;color:#5E5B59;line-height:1.65;margin:0;">Hi ' + esc(firstName) + ', ' + m.body + '</p>\n' +
'  </div>\n' +
'  <div style="background:#fff;border:1px solid #E8E2D9;border-radius:14px;padding:24px;margin-bottom:24px;">\n' +
'    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">\n' +
'      <tr>\n' +
'        <td style="padding-bottom:16px;border-bottom:1px solid #F0EDE8;text-align:left;vertical-align:top;">\n' +
'          <div style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#9E9B98;margin-bottom:4px;">Order</div>\n' +
'          <div style="font-size:15px;font-weight:600;color:#1A1A1A;">' + orderNum + '</div>\n' +
'        </td>\n' +
'        <td style="padding-bottom:16px;border-bottom:1px solid #F0EDE8;text-align:right;vertical-align:top;">\n' +
'          <div style="font-size:10px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#9E9B98;margin-bottom:4px;">Total</div>\n' +
'          <div style="font-size:15px;font-weight:600;color:#B89657;">' + total + '</div>\n' +
'        </td>\n' +
'      </tr>\n' +
'    </table>\n' +
'    ' + (itemsHtml ? '<table style="width:100%;border-collapse:collapse;">' + itemsHtml + '</table>' : '') + '\n' +
'  </div>\n' +
'  <div style="text-align:center;margin-bottom:32px;">\n' +
'    <a href="https://www.kgshomedecors.com" style="display:inline-block;background:#1A1A1A;color:#fff;font-size:13px;font-weight:600;letter-spacing:0.04em;padding:13px 36px;border-radius:8px;text-decoration:none;">Track Your Order</a>\n' +
'  </div>\n' +
'  <div style="text-align:center;padding-top:24px;border-top:1px solid #E8E2D9;">\n' +
'    <p style="font-size:12px;color:#9E9B98;margin:0 0 8px;">Questions? WhatsApp us at <a href="https://wa.me/919789182921" style="color:#B89657;text-decoration:none;">+91 97891 82921</a></p>\n' +
'    <p style="font-size:11px;color:#C5BFB8;margin:0;">KGS Home D&eacute;cors &middot; Junction Road, Virudhachalam, Tamil Nadu</p>\n' +
'  </div>\n' +
'</div>\n' +
'</body></html>';
  return { subject: m.subject, html: html };
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  var ip = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '';
  if (rateLimit(ip, 5, 60000)) return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  try {
    var body = req.body || {};
    var orderId = body.orderId;
    var status = body.status;

    // 1. Extract the caller's Supabase access token from the Authorization header.
    var authHeader = req.headers['authorization'] || req.headers['Authorization'] || '';
    var token = authHeader.indexOf('Bearer ') === 0 ? authHeader.slice(7) : '';
    if (!token) return res.status(401).json({ error: 'Not authenticated' });

    // 2a. Resolve the token to a user via Supabase auth.
    var userResp = await fetch(SUPABASE_URL + '/auth/v1/user', {
      headers: { 'apikey': SUPABASE_ANON_KEY, 'Authorization': 'Bearer ' + token }
    });
    if (userResp.status !== 200) return res.status(401).json({ error: 'Not authenticated' });
    var user = await userResp.json();
    var email = user && user.email;
    if (!email) return res.status(401).json({ error: 'Not authenticated' });

    // 2b. Verify the user is an admin (service-role read of admin_users).
    var SERVICE_ROLE = process.env.SUPABASE_SERVICE_ROLE_KEY;
    if (!SERVICE_ROLE) {
      console.error('[KGS] SUPABASE_SERVICE_ROLE_KEY missing — cannot verify admin');
      return res.status(500).json({ error: 'Server not configured' });
    }
    var sbHeaders = { 'apikey': SERVICE_ROLE, 'Authorization': 'Bearer ' + SERVICE_ROLE };
    var adminResp = await fetch(
      SUPABASE_URL + '/rest/v1/admin_users?select=email&email=eq.' + encodeURIComponent(email),
      { headers: sbHeaders }
    );
    var adminRows = await adminResp.json();
    if (!adminResp.ok || !Array.isArray(adminRows) || adminRows.length === 0) {
      return res.status(403).json({ error: 'Not authorized' });
    }

    // 3. Resend must be configured (key lives only in Vercel env).
    var RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!RESEND_API_KEY) return res.status(500).json({ error: 'Email not configured' });

    // 4. Only notify for the supported statuses.
    if (STATUSES_TO_NOTIFY.indexOf(status) === -1) return res.json({ skipped: true });
    if (!orderId) return res.status(400).json({ error: 'Missing orderId' });

    // 5. Fetch the order + items and the customer email (service role).
    var orderResp = await fetch(
      SUPABASE_URL + '/rest/v1/orders?id=eq.' + encodeURIComponent(orderId) + '&select=*,order_items(*)',
      { headers: sbHeaders }
    );
    var orderRows = await orderResp.json();
    if (!orderResp.ok || !Array.isArray(orderRows) || !orderRows[0]) {
      console.error('[KGS] Order fetch failed:', orderRows);
      return res.status(404).json({ error: 'Order not found' });
    }
    var order = orderRows[0];

    var customerEmail = null;
    if (order.customer_id) {
      var custResp = await fetch(
        SUPABASE_URL + '/rest/v1/customers?id=eq.' + encodeURIComponent(order.customer_id) + '&select=email',
        { headers: sbHeaders }
      );
      var custRows = await custResp.json();
      if (custResp.ok && Array.isArray(custRows) && custRows[0]) customerEmail = custRows[0].email;
    }
    if (!customerEmail) return res.json({ skipped: 'no_email' });

    // 6. Build the email.
    var tmpl = buildOrderEmailTemplate(order, status);
    if (!tmpl) return res.json({ skipped: true });

    // 7. Send via Resend.
    var sendResp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + RESEND_API_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'KGS Home Décors <orders@kgshomedecors.com>',
        to: [customerEmail],
        reply_to: 'kgshomedecorsvdm@gmail.com',
        subject: tmpl.subject,
        html: tmpl.html
      })
    });
    if (sendResp.ok) return res.json({ success: true });
    var sendErr = await sendResp.text();
    console.error('[KGS] Resend send error:', sendResp.status, sendErr);
    return res.status(502).json({ error: 'Email send failed' });
  } catch (err) {
    console.error('[KGS] send-order-email exception:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
