(function () {
  'use strict';

  const WA = KGS_CONFIG.store.whatsapp;

  // ── DOM refs ─────────────────────────────────────────────
  const grid     = document.getElementById('product-grid');
  const loader   = document.getElementById('catalog-loader');
  const filterBar = document.querySelector('[data-filter-bar]');

  let allProducts  = [];
  let activeFilter = 'all';

  // ── Helpers ───────────────────────────────────────────────
  function fmt(n) {
    return '₹' + parseInt(n, 10).toLocaleString('en-IN');
  }

  function pct(orig, now) {
    if (!orig || orig <= now) return 0;
    return Math.round(((orig - now) / orig) * 100);
  }

  function badgeHtml(p) {
    if (p.badge) {
      const cls = p.badge === 'New' ? 'prod-badge--ink' : 'prod-badge--gold';
      return '<span class="prod-badge ' + cls + '">' + esc(p.badge) + '</span>';
    }
    const d = pct(p.compare_at_price, p.price);
    if (d >= 10) return `<span class="prod-badge prod-badge--warm">${d}% Off</span>`;
    return '';
  }

  function ratingHtml(p) {
    if (!p.rating) return '';
    const stars = '★'.repeat(Math.round(p.rating)) + '☆'.repeat(5 - Math.round(p.rating));
    return `<div class="prod-rating">
      <span class="stars">${stars}</span>
      <span><b style="color:#1A1A1A">${p.rating.toFixed(1)}</b>${p.review_count ? ` · ${p.review_count} reviews` : ''}</span>
    </div>`;
  }

  function cardHtml(p) {
    const href   = `product-detail.html?handle=${encodeURIComponent(p.handle || p.id)}`;
    const wishlisted = isWishlisted(p.id) ? 'active' : '';
    const fillSet = wishlisted ? `style="font-variation-settings:'FILL' 1,'wght' 300"` : '';

    return `
      <div class="prod-card" data-category="${esc((p.category || '').toLowerCase())}">
        <div class="prod-img">
          ${badgeHtml(p)}
          <button class="heart-btn ${wishlisted}" data-product-id="${esc(p.id)}" aria-label="Add to wishlist">
            <span class="material-symbols-outlined" ${fillSet}>favorite</span>
          </button>
          <a href="${href}" class="prod-img-link" aria-label="${esc(p.name)}">
            <img src="${esc(p.image || 'assets/images/placeholder.svg')}"
                 alt="${esc(p.name)}" loading="lazy"
                 onerror="this.src='assets/images/placeholder.svg'">
          </a>
          <button class="prod-quick" data-id="${esc(p.id)}" aria-label="Quick view ${esc(p.name)}">
            <span class="material-symbols-outlined">visibility</span> Quick View
          </button>
        </div>
        <a href="${href}" class="prod-body" style="text-decoration:none">
          <div class="prod-cat">${esc(p.category || '')}</div>
          <div class="prod-name">${esc(p.name)}</div>
          ${ratingHtml(p)}
        </a>
        <div class="prod-price">
          <span class="now">${fmt(p.price)}</span>
          ${p.compare_at_price && p.compare_at_price > p.price
            ? `<span class="was">${fmt(p.compare_at_price)}</span>
               <span class="off">${pct(p.compare_at_price, p.price)}% off</span>`
            : ''}
        </div>
        <button class="prod-cta" data-product-id="${esc(p.id)}">
          <span class="material-symbols-outlined">shopping_bag</span> Add to Cart
        </button>
      </div>`;;
  }

  // ── Render ────────────────────────────────────────────────
  function render(products) {
    if (!grid) return;
    if (!products || products.length === 0) {
      grid.innerHTML = `
        <div style="grid-column:1/-1;text-align:center;padding:80px 0">
          <span class="material-symbols-outlined" style="font-size:48px;color:#C5A880;display:block;margin-bottom:16px">inventory_2</span>
          <h3 style="font-family:'Crimson Pro',serif;font-size:22px;font-weight:500;margin-bottom:8px">No products found</h3>
          <p style="color:#5E5B59;font-size:14px;margin-bottom:24px">Try a different category or <a href="product-listing.html" style="color:#B89657;text-decoration:underline">view all</a>.</p>
        </div>`;
      return;
    }
    grid.innerHTML = products.map(cardHtml).join('');
    bindCardEvents();
  }

  function showSkeleton(count) {
    if (!grid) return;
    grid.innerHTML = Array(count).fill(`
      <div class="prod-card" style="pointer-events:none">
        <div class="prod-img" style="background:linear-gradient(90deg,#F3EDE4 25%,#EDE5D8 50%,#F3EDE4 75%);background-size:200% 100%;animation:shimmer 1.4s infinite;"></div>
        <div class="prod-body">
          <div style="height:10px;background:#F3EDE4;border-radius:9999px;width:40%;margin-bottom:10px;"></div>
          <div style="height:16px;background:#F3EDE4;border-radius:9999px;width:75%;margin-bottom:6px;"></div>
          <div style="height:14px;background:#F3EDE4;border-radius:9999px;width:55%;"></div>
        </div>
        <div class="prod-price"><span style="height:18px;background:#F3EDE4;border-radius:9999px;width:80px;display:inline-block;"></span></div>
        <div style="margin:0 16px 16px;height:44px;background:#F3EDE4;border-radius:9999px;"></div>
      </div>`).join('');
  }

  // ── Filter UI ─────────────────────────────────────────────
  function buildFilters(products) {
    const bar = document.querySelector('.filter-buttons');
    if (!bar) return;

    const cats = ['all', ...new Set(
      products.map(p => (p.category || '').trim()).filter(Boolean)
    )].slice(0, 8);

    bar.innerHTML = cats.map(c => {
      const label = c === 'all' ? 'All Pieces' : c;
      const active = c === 'all' ? 'data-active' : '';
      return `<button class="filter-btn${c === 'all' ? ' active' : ''}" data-category="${c}" ${active}>${label}</button>`;
    }).join('');

    bar.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeFilter = btn.dataset.category;
        bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyFilter();
      });
    });
  }

  function applyFilter() {
    const filtered = activeFilter === 'all'
      ? allProducts
      : allProducts.filter(p =>
          (p.category || '').toLowerCase() === activeFilter.toLowerCase()
        );
    render(filtered);
  }

  // ── Card event binding ────────────────────────────────────
  function bindCardEvents() {
    // Add to cart
    grid.querySelectorAll('.prod-cta').forEach(btn => {
      btn.addEventListener('click', async (e) => {
        e.stopPropagation();
        const id = btn.dataset.productId;
        btn.disabled = true;
        btn.innerHTML = '<span class="material-symbols-outlined" style="animation:spin .8s linear infinite">autorenew</span> Adding…';
        await addToCart(id, 1);
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined">check</span> Added!';
        setTimeout(() => {
          btn.innerHTML = '<span class="material-symbols-outlined">shopping_bag</span> Add to Cart';
        }, 1800);
      });
    });

    // Wishlist hearts
    grid.querySelectorAll('.heart-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const id = btn.dataset.productId;
        toggleWishlist(id);
        const icon = btn.querySelector('.material-symbols-outlined');
        if (isWishlisted(id)) {
          btn.classList.add('active');
          icon.style.fontVariationSettings = "'FILL' 1,'wght' 300";
        } else {
          btn.classList.remove('active');
          icon.style.fontVariationSettings = "'FILL' 0,'wght' 300";
        }
      });
    });

    // Quick View — navigate to PDP
    grid.querySelectorAll('.prod-quick').forEach(el => {
      const id = el.dataset.id;
      el.addEventListener('click', () => {
        const p = allProducts.find(x => x.id === id);
        if (!p) return;
        window.location.href = `product-detail.html?handle=${encodeURIComponent(p.handle || p.id)}`;
      });
      el.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') el.click();
      });
    });
  }

  // ── Toast & cart badge ─────────────────────────────────────
  function injectToast() {
    if (document.getElementById('cart-toast')) return;
    const t = document.createElement('div');
    t.id = 'cart-toast';
    t.innerHTML = `
      <span class="material-symbols-outlined" style="color:#25D366;font-size:18px">check_circle</span>
      <span id="toast-text">Item added to cart</span>`;
    t.style.cssText = `
      position:fixed;bottom:96px;left:50%;transform:translateX(-50%) translateY(16px);
      background:#1A1A1A;color:#fff;padding:12px 22px;border-radius:9999px;
      font-family:'Jost',sans-serif;font-size:13px;font-weight:500;
      display:none;align-items:center;gap:10px;z-index:200;
      box-shadow:0 10px 32px -8px rgba(0,0,0,0.35);
      transition:opacity .25s ease,transform .25s ease;opacity:0`;
    t.classList.add('cart-toast-el');
    document.body.appendChild(t);

    // Style for show state
    const s = document.createElement('style');
    s.textContent = `
      .cart-toast-el.show{display:flex!important;opacity:1!important;transform:translateX(-50%) translateY(0)!important}
      @keyframes shimmer{to{background-position:-200% 0}}
      @keyframes spin{to{transform:rotate(360deg)}}
      .filter-btn{
        padding:8px 18px;border:1px solid rgba(26,26,26,0.20);
        background:transparent;color:#1A1A1A;
        font-family:'Jost',sans-serif;font-size:10.5px;font-weight:600;
        letter-spacing:.18em;text-transform:uppercase;cursor:pointer;
        border-radius:9999px;transition:all 200ms ease;
      }
      .filter-btn.active,.filter-btn:hover{background:#1A1A1A;color:#fff;border-color:#1A1A1A}
      .prod-img-link{display:block;width:100%;height:100%}
    `;
    document.head.appendChild(s);
  }

  // ── Init ──────────────────────────────────────────────────
  async function init() {
    injectToast();
    showSkeleton(8);
    updateCartBadge();

    try {
      allProducts = await initStore();
    } catch (err) {
      console.error('KGS catalog: failed to load products', err);
      allProducts = [];
    }

    if (!allProducts || allProducts.length === 0) {
      render([]);
      return;
    }

    buildFilters(allProducts);
    render(allProducts);
    updateHeartIcons();
  }

  document.addEventListener('DOMContentLoaded', init);
})();
