// ═══════════════════════════════════════════════════════════
// KGS HOME DÉCORS — Configuration
// Safe to commit — no secrets here. Resend key is stored in
// admin localStorage (set once via Admin → Settings).
// ═══════════════════════════════════════════════════════════
const KGS_CONFIG = {
  supabase: {
    url: 'https://rgpkomngygapwjhnbgaf.supabase.co',
    anonKey: 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P'
  },
  razorpay: {
    keyId: 'rzp_test_Sz5WpSTaS8ibXk', // publishable key — safe to commit
  },
  resend: {
    fromEmail: 'KGS Home Décors <orders@kgshomedecors.com>',
  },
  store: {
    name: 'KGS Home Décors',
    phone: '+919789182921',
    whatsapp: '919789182921',
    email: 'kgshomedecorsvdm@gmail.com',
    address: '185/G, Junction Road, near EB Office, Virudhachalam, Tamil Nadu – 606 001',
    currency: 'INR',
    freeDeliveryCity: 'Tamil Nadu',
    codMinOrder: 0,
    onlinePaymentMinOrder: 0,
  }
};

// ─── CDN Image Proxy ──────────────────────────────────────
// Rewrites Supabase Storage URLs to go through Vercel's CDN
// proxy (/cdn-images/…). This saves Supabase egress because
// Vercel caches the images on its global edge network.
// Non-Supabase URLs (or falsy values) are returned as-is.
const _SB_STORAGE_PREFIX = KGS_CONFIG.supabase.url + '/storage/v1/object/public/product-images/';
function cdnImg(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith(_SB_STORAGE_PREFIX)) {
    // Strip "https://" for wsrv.nl and apply optimization
    let cleanUrl = url.replace('https://', '');
    return 'https://wsrv.nl/?url=' + cleanUrl + '&output=webp&q=80';
  }
  return url;
}
