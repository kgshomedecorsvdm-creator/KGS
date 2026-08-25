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
// Rewrites Supabase Storage URLs through wsrv.nl CDN proxy.
// wsrv.nl fetches from Supabase ONCE, caches the resized
// WebP globally, and serves it to every visitor — massively
// cutting Supabase egress usage.
//
// w=800  → max 800px wide  (enough for any product card/modal)
// q=75   → 75% WebP quality (visually lossless, much smaller)
// output=webp → convert PNG/JPG → WebP on-the-fly
const _SB_STORAGE_PREFIX = KGS_CONFIG.supabase.url + '/storage/v1/object/public/product-images/';
function cdnImg(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith(_SB_STORAGE_PREFIX)) {
    let cleanUrl = url.replace('https://', '');
    return 'https://wsrv.nl/?url=' + cleanUrl + '&output=webp&q=75&w=800';
  }
  return url;
}
