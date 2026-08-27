const KGS_CONFIG = {
  supabase: {
    url: 'https://rgpkomngygapwjhnbgaf.supabase.co',
    anonKey: 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P'
  },
  razorpay: {
    keyId: 'rzp_test_Sz5WpSTaS8ibXk',
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
    freeDelivery: true,
  }
};

const _SB_STORAGE_PREFIX = KGS_CONFIG.supabase.url + '/storage/v1/object/public/product-images/';
function cdnImg(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith(_SB_STORAGE_PREFIX)) {
    var cleanUrl = url.replace('https://', '');
    return 'https://wsrv.nl/?url=' + cleanUrl + '&output=webp&q=75&w=800';
  }
  return url;
}

