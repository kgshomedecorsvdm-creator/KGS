const SB_STORE_URL = KGS_CONFIG.supabase.url + '/rest/v1';
const SB_STORE_KEY = KGS_CONFIG.supabase.anonKey;

function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function(c) { return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

async function sbFetch(endpoint) {
  try {
    const r = await fetch(`${SB_STORE_URL}${endpoint}`, {
      headers: { 'apikey': SB_STORE_KEY, 'Authorization': `Bearer ${SB_STORE_KEY}` }
    });
    if (!r.ok) { console.error('Store API error:', r.status, await r.text()); return []; }
    return await r.json();
  } catch (e) { console.error('Store fetch failed:', e); return []; }
}



let _cachedAllProducts = null;

async function initStore() {
  if (_cachedAllProducts) return _cachedAllProducts;
  let allData = [];
  let offset = 0;
  const limit = 1000;
  while (true) {
    const data = await sbFetch(`/products?is_active=eq.true&select=*&order=sort_order.asc,created_at.desc&limit=${limit}&offset=${offset}`);
    if (!data || data.length === 0) break;
    allData = allData.concat(data);
    if (data.length < limit) break;
    offset += limit;
  }

  _cachedAllProducts = allData.map(p => ({
    id: p.id,
    handle: p.handle,
    name: p.name,
    description: p.description,
    category: p.category,
    tags: p.tags || [],
    price: parseFloat(p.price),
    compare_at_price: p.compare_at_price ? parseFloat(p.compare_at_price) : null,
    image: cdnImg(p.image_url) || 'assets/images/placeholder.svg',
    images: (p.images || []).map(cdnImg),
    in_stock: p.in_stock,
    material: p.material
  }));
  return _cachedAllProducts;
}

async function fetchCollectionProducts(category) {
  let allData = [];
  let offset = 0;
  const limit = 1000;
  let baseQuery = '/products?is_active=eq.true&select=*&order=sort_order.asc';
  if (category && category.toLowerCase() !== 'all') {
    baseQuery += '&category=eq.' + encodeURIComponent(category);
  }

  while (true) {
    const data = await sbFetch(`${baseQuery}&limit=${limit}&offset=${offset}`);
    if (!data || data.length === 0) break;
    allData = allData.concat(data);
    if (data.length < limit) break;
    offset += limit;
  }

  return allData.map(p => ({
    id: p.id,
    handle: p.handle,
    name: p.name,
    price: parseFloat(p.price),
    compare_at_price: p.compare_at_price ? parseFloat(p.compare_at_price) : null,
    image: cdnImg(p.image_url) || 'assets/images/placeholder.svg'
  }));
}

async function fetchProductByHandle(handle) {
  const h = encodeURIComponent(handle);
  const data = await sbFetch(`/products?handle=eq.${h}&is_active=eq.true&select=*&limit=1`);
  if (!data || !data.length || !data[0]) return null;
  const p = data[0];
  return {
    id: p.id,
    title: p.name,
    handle: p.handle,
    descriptionHtml: p.description || '',
    productType: p.category,
    tags: p.tags || [],
    priceRange: { minVariantPrice: { amount: String(p.price) } },
    compareAtPriceRange: { minVariantPrice: { amount: String(p.compare_at_price || 0) } },
    images: { edges: [{ node: { url: cdnImg(p.image_url) } }, ...(p.images || []).map(u => ({ node: { url: cdnImg(u) } }))] },
    variants: { edges: [{ node: { id: p.id, availableForSale: p.in_stock, quantityAvailable: p.stock_quantity } }] },
    material: p.material
  };
}



function getLocalCart() {
  try { return JSON.parse(localStorage.getItem('kgs_cart')) || []; }
  catch (e) { return []; }
}
function saveLocalCart(cart) { localStorage.setItem('kgs_cart', JSON.stringify(cart)); }

async function addToCart(productId, quantity = 1) {
  let cart = getLocalCart();
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.quantity += quantity; }
  else {
    const products = await initStore();
    const p = products.find(x => x.id === productId);
    if (p) {
      cart.push({ id: p.id, handle: p.handle, name: p.name, price: p.price, image: p.image, quantity });
    }
  }
  saveLocalCart(cart);
  updateCartBadge();
  const toast = document.getElementById('cart-toast');
  if (toast) {
    const txt = document.getElementById('toast-text');
    if (txt) txt.innerText = 'Item added to cart';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
  }
}

async function removeFromCart(productId) {
  let cart = getLocalCart().filter(i => i.id !== productId);
  saveLocalCart(cart);
  updateCartBadge();
}

async function updateCartLine(productId, quantity) {
  if (quantity <= 0) return removeFromCart(productId);
  let cart = getLocalCart();
  const item = cart.find(i => i.id === productId);
  if (item) item.quantity = quantity;
  saveLocalCart(cart);
  updateCartBadge();
}

async function getCart() {
  const items = getLocalCart();
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
  return {
    id: 'local',
    totalQuantity: items.reduce((s, i) => s + i.quantity, 0),
    cost: { totalAmount: { amount: String(total) } },
    lines: { edges: items.map(i => ({ node: {
      id: i.id, quantity: i.quantity,
      merchandise: { id: i.id, title: '', product: { title: i.name, handle: i.handle }, image: { url: i.image }, price: { amount: String(i.price) } }
    }})) }
  };
}

async function updateCartBadge() {
  const cart = getLocalCart();
  const count = cart.reduce((s, i) => s + i.quantity, 0);
  // Update visible badge
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    el.setAttribute('aria-hidden', 'true'); // count is read via link aria-label
  });
  // Update cart link accessible name so screen readers announce item count
  const label = count > 0
    ? `Cart, ${count} item${count !== 1 ? 's' : ''}`
    : 'Cart';
  document.querySelectorAll('a[href="cart-checkout.html"]').forEach(el => {
    el.setAttribute('aria-label', label);
  });
}


function getWishlist() {
  try { return JSON.parse(localStorage.getItem('kgs_wishlist')) || []; }
  catch (e) { return []; }
}
function saveWishlist(list) {
  localStorage.setItem('kgs_wishlist', JSON.stringify(list));
}
function toggleWishlist(productId) {
  let list = getWishlist();
  if (list.includes(productId)) {
    list = list.filter(id => id !== productId);
  } else {
    list.push(productId);
  }
  saveWishlist(list);
  updateWishlistBadge();
  updateHeartIcons();
}
function isWishlisted(productId) {
  return getWishlist().includes(productId);
}
function updateWishlistBadge() {
  const count = getWishlist().length;
  document.querySelectorAll('.wishlist-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
  });
}
function updateHeartIcons() {
  document.querySelectorAll('[data-product-id]').forEach(btn => {
    if (!btn.classList.contains('heart-btn')) return;
    const id = btn.getAttribute('data-product-id');
    if (isWishlisted(id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}


const KGS_FOLDER_MAP = {
  'statues':            'statues',
  'wall-frames':        'wall-frames',
  'clocks':             'clocks',
  'artificial-plants':  'ar-plants',
  'bags-accessories':   'bags-accessories',
  'furniture':          'chairs-sofas',
  'artificial-flowers': 'artificial-flowers',
  'vases':              'vases',
  'wall-statues':       'wall-statues',
  'gifts':              'gifts-toys',
  'bottles':            'bottles',
  'fountains':          'fountains',
  'appliances':         'blower-fan',
};

function filterProductsBySlug(products, slug) {
  if (!slug || slug === 'all') return products;
  const folder = KGS_FOLDER_MAP[slug];
  if (folder) {
    const byFolder = products.filter(p => (p.image || '').includes('/' + folder + '/'));
    if (byFolder.length > 0) return byFolder;
  }
  return products.filter(p => (p.category || '') === slug);
}


const formatINR = val => '₹' + parseInt(val, 10).toLocaleString('en-IN');

document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  if (typeof updateWishlistBadge === 'function') updateWishlistBadge();
  if (typeof updateHeartIcons === 'function') updateHeartIcons();
});


let kgsFuse = null;

async function doSearch(q) {
  const res = document.getElementById('search-results');
  const hint = document.getElementById('search-hint');
  if (!res) return;
  
  if (!q.trim()) {
    res.innerHTML = '';
    if (hint) hint.style.display = '';
    return;
  }
  if (hint) hint.style.display = 'none';
  
  if (!_cachedAllProducts) {
    res.innerHTML = '<p style="color:rgba(25,25,25,.6);font-size:13px;padding:12px 16px;">Loading products...</p>';
    await initStore();
    if (window.Fuse && _cachedAllProducts) {
      kgsFuse = new window.Fuse(_cachedAllProducts, { keys: ['name', 'category'], threshold: 0.3 });
    }
  }
  
  if (!kgsFuse) {
    res.innerHTML = '<p style="color:rgba(25,25,25,.6);font-size:13px;padding:12px 16px;">Search not available right now.</p>';
    return;
  }
  
  const matches = kgsFuse.search(q).map(r => r.item);
  if (matches.length === 0) {
    res.innerHTML = '<p style="color:rgba(25,25,25,.6);font-size:13px;padding:12px 16px;">No results. <a href="product-listing.html" class="text-warm underline">Browse all products &rarr;</a></p>';
  } else {
    res.innerHTML = matches.map(p => `
      <a href="product-detail.html?handle=${encodeURIComponent(p.handle)}" class="flex items-center justify-between p-3 border-b border-border hover:bg-tint transition-colors text-decoration-none">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 bg-tint border border-border shrink-0">
             <img src="${esc(p.image)}" alt="${esc(p.name)}" class="w-full h-full object-cover">
          </div>
          <div>
            <p class="text-ink text-[14px] font-medium">${esc(p.name)}</p>
            <p class="text-muted text-[10px] tracking-[.14em] uppercase mt-0.5">${esc(p.category || 'Product')}</p>
          </div>
        </div>
        <p class="text-warm text-[13px] font-semibold">₹${p.price.toLocaleString('en-IN')}</p>
      </a>`).join('');
  }
}

function openSearch() {
  const overlay = document.getElementById('search-overlay');
  if(overlay) overlay.style.display = 'flex';
  const input = document.getElementById('search-input');
  if(input) input.focus();
  document.body.style.overflow = 'hidden';
}

function closeSearch() {
  const overlay = document.getElementById('search-overlay');
  if(overlay) overlay.style.display = 'none';
  const input = document.getElementById('search-input');
  if(input) input.value = '';
  const res = document.getElementById('search-results');
  if(res) res.innerHTML = '';
  const hint = document.getElementById('search-hint');
  if(hint) hint.style.display = '';
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') {
    const overlay = document.getElementById('search-overlay');
    if(overlay && overlay.style.display === 'flex') closeSearch();
  }
});


function clearCart() {
  saveLocalCart([]);
  updateCartBadge();
}


const store = {
  getCart() {
    return getLocalCart();
  },
  getProductById(id) {
    if (_cachedAllProducts) {
      const catalogItem = _cachedAllProducts.find(p => p.id === id);
      if (catalogItem) return {
        id: catalogItem.id,
        name: catalogItem.name,
        category: catalogItem.category || '',
        image_url: catalogItem.image || 'assets/images/placeholder.webp',
        price: catalogItem.price,
        original_price: catalogItem.compare_at_price || null,
      };
    }
    const cart = getLocalCart();
    const item = cart.find(i => i.id === id);
    if (!item) return null;
    return {
      id: item.id,
      name: item.name,
      category: item.category || '',
      image_url: item.image || 'assets/images/placeholder.webp',
      price: item.price,
      original_price: item.compare_at_price || item.original_price || null,
    };
  },
  removeFromCart(id) { return removeFromCart(id); },
  updateCartQuantity(id, qty) { return updateCartLine(id, qty); },
  clearCart() { return clearCart(); },
};
