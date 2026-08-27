/* ═══════════════════════════════════════════════════════════
   KGS Home Décors — Product Detail Page
   Reads ?handle= URL param, fetches from Supabase via store.js,
   populates PDP, handles qty, cart, sticky bar, WA link.
═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const WA_NUM = KGS_CONFIG.store.whatsapp;
  const fmt = n => '₹' + parseInt(n, 10).toLocaleString('en-IN');

  // ── URL helpers ───────────────────────────────────────────
  function getParam(key) {
    return new URLSearchParams(window.location.search).get(key);
  }

  // ── DOM refs ─────────────────────────────────────────────
  const elBadge       = document.getElementById('product-badge');
  const elMainImg     = document.getElementById('product-main-img');
  const elThumbs      = document.getElementById('product-thumbnails');
  const elCat         = document.getElementById('product-category');
  const elTitle       = document.getElementById('product-title');
  const elRating      = document.getElementById('product-rating');
  const elReviews     = document.getElementById('product-reviews');
  const elStkBadge    = document.getElementById('product-stock-badge');
  const elPriceNow    = document.getElementById('product-price-now');
  const elPriceWas    = document.getElementById('product-price-was');
  const elPriceSave   = document.getElementById('product-price-save');
  const elDesc        = document.getElementById('product-description');
  const elSold        = document.getElementById('product-sold');
  const elQtyValue    = document.getElementById('qty-value');
  const btnQtyMinus   = document.getElementById('qty-minus');
  const btnQtyPlus    = document.getElementById('qty-plus');
  const btnAddCart    = document.getElementById('btn-add-cart');
  const stickyBar     = document.querySelector('.pdp-sticky');
  const stickyTitle   = document.getElementById('sticky-title');
  const stickyImg     = document.getElementById('sticky-img');
  const stickyNow     = document.getElementById('sticky-price-now');
  const stickyWas     = document.getElementById('sticky-price-was');
  const btnStickyCart = document.getElementById('sticky-add-cart');
  const btnWA         = document.querySelector('.btn-wa-pdp');
  const relatedGrid   = document.getElementById('related-products-grid');

  let product = null;
  let qty = 1;

  // ── Populate PDP ──────────────────────────────────────────
  function populate(p) {
    product = p;
    document.title = `${p.title || p.name} | KGS Home Décors`;

    // Category
    if (elCat) elCat.textContent = p.productType || p.category || '';

    // Title
    if (elTitle) elTitle.textContent = p.title || p.name;

    // Badge
    const savings = p.compareAtPriceRange?.minVariantPrice?.amount;
    const price   = parseFloat(p.priceRange?.minVariantPrice?.amount || p.price || 0);
    const compare = parseFloat(savings || p.compare_at_price || 0);
    const pct     = compare > price ? Math.round(((compare - price) / compare) * 100) : 0;

    if (elBadge) {
      if (pct > 0) {
        elBadge.textContent = `${pct}% OFF`;
        elBadge.style.display = '';
      } else {
        elBadge.style.display = 'none';
      }
    }

    // Prices
    if (elPriceNow) elPriceNow.textContent = fmt(price);
    if (elPriceWas) {
      if (compare > price) {
        elPriceWas.textContent = fmt(compare);
        elPriceWas.style.display = '';
      } else {
        elPriceWas.style.display = 'none';
      }
    }
    if (elPriceSave) {
      if (compare > price) {
        elPriceSave.textContent = `Save ${fmt(compare - price)}`;
        elPriceSave.style.display = '';
      } else {
        elPriceSave.style.display = 'none';
      }
    }

    // Rating (if available)
    if (elRating && p.rating) elRating.textContent = parseFloat(p.rating).toFixed(1);
    if (elReviews && p.review_count) elReviews.textContent = p.review_count;

    // Stock badge
    if (elStkBadge) {
      const tags = p.tags || [];
      if (tags.includes('best-seller')) elStkBadge.textContent = 'Best Seller';
      else if (tags.includes('new')) elStkBadge.textContent = 'New Arrival';
      else if (tags.includes('staff-pick')) elStkBadge.textContent = 'Staff Pick';
      else elStkBadge.style.display = 'none';
    }

    if (elSold) {
      elSold.style.display = 'none';
    }

    // Description
    if (elDesc) {
      elDesc.textContent = p.descriptionHtml
        ? p.descriptionHtml.replace(/<[^>]*>/g, '')
        : (p.description || 'Handcrafted with premium materials and finished to export quality. Personally selected for the KGS showroom — every piece passes a hand-check before it ships.');
    }

    // Images
    const imgs = [];
    if (p.images?.edges?.length) {
      p.images.edges.forEach(e => { if (e?.node?.url) imgs.push(e.node.url); });
    } else if (p.image) {
      imgs.push(p.image);
    }

    if (imgs.length && elMainImg) {
      elMainImg.src = imgs[0];
      elMainImg.alt = p.title || p.name;
    }

    if (elThumbs && imgs.length > 0) {
      elThumbs.innerHTML = imgs.map((url, i) => `
        <div class="thumb-item" style="
          aspect-ratio:1;background:#F3EBDC;border-radius:10px;overflow:hidden;
          border:2px solid ${i === 0 ? '#1A1A1A' : 'transparent'};
          cursor:pointer;display:flex;align-items:center;justify-content:center;padding:8px;
          transition:border-color 200ms ease;"
          data-img="${url}" data-idx="${i}">
          <img src="${url}" alt="" style="max-width:100%;max-height:100%;object-fit:contain;"
               onerror="this.parentElement.style.display='none'">
        </div>`).join('');

      elThumbs.querySelectorAll('.thumb-item').forEach(th => {
        th.addEventListener('click', () => {
          const url = th.dataset.img;
          if (elMainImg) { elMainImg.src = url; }
          elThumbs.querySelectorAll('.thumb-item').forEach(t => t.style.borderColor = 'transparent');
          th.style.borderColor = '#1A1A1A';
        });
      });
    }

    // WhatsApp button
    const waText = encodeURIComponent(`Hi, I'm interested in ${p.title || p.name} - ${fmt(price)}`);
    const waHref = `https://wa.me/${WA_NUM}?text=${waText}`;
    const waBtn = document.querySelector('a[href*="wa.me"], a.btn-wa-pdp');
    if (waBtn) waBtn.href = waHref;

    // Add to cart button label
    updateCartBtn();

    // Sticky bar
    if (stickyTitle) stickyTitle.textContent = p.title || p.name;
    if (stickyImg && imgs.length) { stickyImg.src = imgs[0]; stickyImg.alt = p.title || p.name; }
    if (stickyNow) stickyNow.textContent = fmt(price);
    if (stickyWas && compare > price) stickyWas.textContent = fmt(compare);

    // Page title for related section
    loadRelated(p);
  }

  // ── Qty controls ─────────────────────────────────────────
  function updateCartBtn() {
    if (!btnAddCart || !product) return;
    const price = parseFloat(product.priceRange?.minVariantPrice?.amount || product.price || 0);
    btnAddCart.innerHTML = `<span class="material-symbols-outlined">shopping_bag</span> Add to Cart · ${fmt(price * qty)}`;
  }

  if (btnQtyMinus) {
    btnQtyMinus.addEventListener('click', () => {
      if (qty > 1) { qty--; if (elQtyValue) elQtyValue.textContent = qty; updateCartBtn(); }
    });
  }
  if (btnQtyPlus) {
    btnQtyPlus.addEventListener('click', () => {
      qty++;
      if (elQtyValue) elQtyValue.textContent = qty;
      updateCartBtn();
    });
  }

  // ── Add to cart ───────────────────────────────────────────
  async function handleAddCart(btn) {
    if (!product) return;
    btn.disabled = true;
    const orig = btn.innerHTML;
    btn.innerHTML = `<span class="material-symbols-outlined" style="animation:spin .8s linear infinite">autorenew</span> Adding…`;
    await addToCart(product.id, qty);
    btn.disabled = false;
    btn.innerHTML = `<span class="material-symbols-outlined">check</span> Added to Cart!`;
    setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; updateCartBtn(); }, 2000);
  }

  if (btnAddCart) btnAddCart.addEventListener('click', () => handleAddCart(btnAddCart));
  if (btnStickyCart) btnStickyCart.addEventListener('click', () => handleAddCart(btnStickyCart));

  // ── Sticky bar scroll ─────────────────────────────────────
  function initStickyBar() {
    if (!stickyBar || !btnAddCart) return;
    stickyBar.classList.remove('visible');

    const obs = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) {
        stickyBar.classList.add('visible');
      } else {
        stickyBar.classList.remove('visible');
      }
    }, { rootMargin: '-80px 0px 0px 0px' });

    obs.observe(btnAddCart);
  }

  // ── Related products ──────────────────────────────────────
  async function loadRelated(p) {
    if (!relatedGrid) return;
    try {
      const all = await initStore();
      const related = all
        .filter(x => x.id !== p.id && x.category === (p.productType || p.category))
        .slice(0, 4);

      if (related.length === 0) {
        // Fall back: any 4 other products
        const others = all.filter(x => x.id !== p.id).slice(0, 4);
        renderRelated(others);
      } else {
        renderRelated(related);
      }
    } catch (_) {}
  }

  function renderRelated(products) {
    if (!relatedGrid || !products.length) return;
    relatedGrid.innerHTML = products.map(p => {
      const href = `product-detail.html?handle=${encodeURIComponent(p.handle || p.id)}`;
      return `
        <div class="prod-card">
          <div class="prod-img">
            ${p.compare_at_price && p.compare_at_price > p.price
              ? `<span class="prod-badge prod-badge--warm">${Math.round(((p.compare_at_price - p.price) / p.compare_at_price) * 100)}% Off</span>` : ''}
            <button class="heart-btn" data-product-id="${p.id}" aria-label="Wishlist">
              <span class="material-symbols-outlined">favorite</span>
            </button>
            <a href="${href}" style="display:block;width:100%;height:100%">
              <img src="${p.image || 'assets/images/placeholder.svg'}" alt="${p.name}" loading="lazy"
                   onerror="this.src='assets/images/placeholder.svg'">
            </a>
          </div>
          <a href="${href}" class="prod-body" style="text-decoration:none">
            <div class="prod-cat">${p.category || ''}</div>
            <div class="prod-name">${p.name}</div>
          </a>
          <div class="prod-price">
            <span class="now">${fmt(p.price)}</span>
            ${p.compare_at_price && p.compare_at_price > p.price
              ? `<span class="was">${fmt(p.compare_at_price)}</span>` : ''}
          </div>
          <button class="prod-cta" data-product-id="${p.id}">
            <span class="material-symbols-outlined">shopping_bag</span> Add to Cart
          </button>
        </div>`;
    }).join('');

    // Bind related cart buttons
    relatedGrid.querySelectorAll('.prod-cta').forEach(btn => {
      btn.addEventListener('click', async () => {
        btn.disabled = true;
        await addToCart(btn.dataset.productId, 1);
        btn.disabled = false;
        btn.innerHTML = '<span class="material-symbols-outlined">check</span> Added!';
        setTimeout(() => {
          btn.innerHTML = '<span class="material-symbols-outlined">shopping_bag</span> Add to Cart';
        }, 1800);
      });
    });

    // Bind related heart buttons
    relatedGrid.querySelectorAll('.heart-btn').forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        const id = btn.dataset.productId;
        toggleWishlist(id);
        btn.classList.toggle('active', isWishlisted(id));
        const icon = btn.querySelector('.material-symbols-outlined');
        icon.style.fontVariationSettings = isWishlisted(id)
          ? "'FILL' 1,'wght' 300" : "'FILL' 0,'wght' 300";
      });
    });

    updateHeartIcons();
  }

  // ── Inject shared styles ──────────────────────────────────
  function injectStyles() {
    const s = document.createElement('style');
    s.textContent = `
      @keyframes spin { to { transform: rotate(360deg); } }
      #product-main-img { transition: opacity .3s ease; }
      #product-main-img.loading { opacity: .4; }
      .pdp-sticky { transition: transform 0.32s cubic-bezier(0.32,0.72,0,1); }
    `;
    document.head.appendChild(s);
  }

  // ── Init ──────────────────────────────────────────────────
  async function init() {
    injectStyles();
    updateCartBadge();
    updateWishlistBadge();
    initStickyBar();

    const handle = getParam('handle') || getParam('id');

    if (!handle) {
      // No handle — load first product from store
      try {
        const all = await initStore();
        if (all && all[0]) {
          // Minimal product shape for store.js initStore format
          const p = all[0];
          populate({
            id: p.id,
            title: p.name,
            handle: p.handle || p.id,
            productType: p.category,
            tags: p.tags || [],
            priceRange: { minVariantPrice: { amount: String(p.price) } },
            compareAtPriceRange: { minVariantPrice: { amount: String(p.compare_at_price || 0) } },
            images: { edges: [{ node: { url: p.image } }] },
            description: p.description,
            rating: p.rating,
            review_count: p.review_count,
          });
        }
      } catch (_) {}
      return;
    }

    try {
      const p = await fetchProductByHandle(handle);
      if (p) {
        populate(p);
      } else {
        // Handle not found — try initStore fallback
        const all = await initStore();
        const fallback = all.find(x => x.id === handle || x.handle === handle);
        if (fallback) {
          populate({
            id: fallback.id,
            title: fallback.name,
            handle: fallback.handle || fallback.id,
            productType: fallback.category,
            tags: fallback.tags || [],
            priceRange: { minVariantPrice: { amount: String(fallback.price) } },
            compareAtPriceRange: { minVariantPrice: { amount: String(fallback.compare_at_price || 0) } },
            images: { edges: [{ node: { url: fallback.image } }] },
            description: fallback.description,
          });
        } else {
          showNotFound();
        }
      }
    } catch (err) {
      console.error('KGS product.js: fetch failed', err);
      showNotFound();
    }
  }

  function showNotFound() {
    const main = document.querySelector('main');
    if (!main) return;
    main.innerHTML = `
      <div style="text-align:center;padding:120px 24px">
        <span class="material-symbols-outlined" style="font-size:56px;color:#C5A880;display:block;margin-bottom:20px">search_off</span>
        <h1 style="font-family:'Crimson Pro',serif;font-size:2rem;font-weight:500;margin-bottom:12px">Product not found</h1>
        <p style="color:#5E5B59;margin-bottom:32px">This product may be out of stock or no longer available.</p>
        <a href="product-listing.html" class="btn btn-dark">Browse All Products</a>
      </div>`;
  }

  document.addEventListener('DOMContentLoaded', init);
})();
