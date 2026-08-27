document.addEventListener('DOMContentLoaded', function () {
  var cartHeader = document.getElementById('cart-header');
  var cartItemsContainer = document.getElementById('cart-items-container');
  var emptyCartMsg = document.getElementById('empty-cart-msg');
  var checkoutFormContainer = document.getElementById('checkout-form-container');
  var btnCheckout = document.getElementById('btn-checkout');
  var btnBackToCart = document.getElementById('btn-back-to-cart');
  var checkoutForm = document.getElementById('checkout-form');
  var paymentRadios = document.querySelectorAll('input[name="payment"]');
  var upiDetails = document.getElementById('upi-details');
  var elSubtotal = document.getElementById('summary-subtotal');
  var elDiscount = document.getElementById('summary-discount');
  var elShipping = document.getElementById('summary-shipping');
  var elTotal = document.getElementById('summary-total');
  var progressText = document.querySelector('.delivery-progress__text');
  var progressBar = document.querySelector('.delivery-progress__bar span');
  var progressCard = document.getElementById('delivery-progress-card');
  var currentView = 'cart';

  function renderCart() {
    var items = store.getCart();
    if (items.length === 0) {
      cartHeader.style.display = 'none';
      cartItemsContainer.style.display = 'none';
      checkoutFormContainer.style.display = 'none';
      emptyCartMsg.style.display = 'block';
      btnCheckout.disabled = true;
      btnCheckout.style.opacity = '0.5';
      if (progressCard) progressCard.style.display = 'none';
      var subtotalLabel = document.getElementById('subtotal-label');
      if (subtotalLabel) subtotalLabel.textContent = 'Subtotal';
      if (elSubtotal) elSubtotal.textContent = '\u20B90';
      if (elDiscount) elDiscount.textContent = '\u2014';
      if (elShipping) elShipping.textContent = 'FREE';
      if (elTotal) elTotal.textContent = '\u20B90';
      return;
    }
    emptyCartMsg.style.display = 'none';
    if (currentView === 'cart') {
      cartHeader.style.display = 'flex';
      cartItemsContainer.style.display = 'block';
    }
    btnCheckout.disabled = false;
    btnCheckout.style.opacity = '1';

    var html = '';
    var subtotal = 0;
    var totalOriginalPrice = 0;

    items.forEach(function (item) {
      var p = store.getProductById(item.id);
      if (!p) return;
      var linePrice = p.price * item.quantity;
      var lineOriginalPrice = (p.original_price || p.price) * item.quantity;
      subtotal += linePrice;
      totalOriginalPrice += lineOriginalPrice;
      html += '<div class="cart-item">' +
        '<div class="cart-item__img"><img src="' + p.image_url + '" alt="' + p.name + '"></div>' +
        '<div class="cart-item__info">' +
          '<div class="cart-item__cat">' + p.category + '</div>' +
          '<a href="product-detail.html?id=' + p.id + '" class="cart-item__name">' + p.name + '</a>' +
          '<div class="cart-item__actions">' +
            '<div class="cart-qty">' +
              '<button onclick="updateQty(\'' + p.id + '\',' + (item.quantity - 1) + ')">−</button>' +
              '<span>' + item.quantity + '</span>' +
              '<button onclick="updateQty(\'' + p.id + '\',' + (item.quantity + 1) + ')">+</button>' +
            '</div>' +
            '<button class="cart-item__remove" onclick="removeItem(\'' + p.id + '\')">Remove</button>' +
          '</div>' +
        '</div>' +
        '<div class="cart-item__price">' +
          '<div class="now">\u20B9' + linePrice.toLocaleString('en-IN') + '</div>' +
          (p.original_price > p.price ? '<div class="was">\u20B9' + lineOriginalPrice.toLocaleString('en-IN') + '</div>' : '') +
        '</div></div>';
    });
    cartItemsContainer.innerHTML = html;

    var discount = totalOriginalPrice - subtotal;
    var total = subtotal;

    if (progressCard) {
      progressCard.style.display = 'block';
      if (progressText) progressText.innerHTML = '<span><b style="color:#25D366">Free Delivery</b> across Tamil Nadu!</span>';
      if (progressBar) progressBar.style.width = '100%';
    }

    var subtotalLabel = document.getElementById('subtotal-label');
    if (subtotalLabel) subtotalLabel.textContent = 'Subtotal (' + items.length + ' item' + (items.length !== 1 ? 's' : '') + ')';
    if (elSubtotal) elSubtotal.textContent = '\u20B9' + subtotal.toLocaleString('en-IN');
    if (elDiscount) elDiscount.textContent = discount > 0 ? '-\u20B9' + discount.toLocaleString('en-IN') : '\u20B90';
    if (elShipping) elShipping.textContent = 'FREE';
    if (elTotal) elTotal.textContent = '\u20B9' + total.toLocaleString('en-IN');
  }

  window.updateQty = function (id, newQty) {
    if (newQty < 1) { store.removeFromCart(id); } else { store.updateCartQuantity(id, newQty); }
    renderCart();
  };
  window.removeItem = function (id) { store.removeFromCart(id); renderCart(); };

  function showCheckout() {
    currentView = 'checkout';
    cartHeader.style.display = 'none';
    cartItemsContainer.style.display = 'none';
    checkoutFormContainer.style.display = 'block';
    btnCheckout.innerHTML = 'Place Order <span class="material-symbols-outlined">lock</span>';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function showCart() {
    currentView = 'cart';
    cartHeader.style.display = 'flex';
    cartItemsContainer.style.display = 'block';
    checkoutFormContainer.style.display = 'none';
    btnCheckout.innerHTML = 'Proceed to Checkout <span class="material-symbols-outlined">arrow_forward</span>';
  }

  btnCheckout.addEventListener('click', function () {
    if (currentView === 'cart') {
      if (store.getCart().length > 0) showCheckout();
    } else {
      if (checkoutForm && checkoutForm.checkValidity()) {
        btnCheckout.innerHTML = 'Processing...';
        btnCheckout.disabled = true;
        setTimeout(function () {
          store.clearCart();
          window.location.href = 'order-confirmation.html';
        }, 1200);
      } else if (checkoutForm) {
        checkoutForm.reportValidity();
      }
    }
  });

  if (btnBackToCart) {
    btnBackToCart.addEventListener('click', function (e) { e.preventDefault(); showCart(); });
  }

  if (paymentRadios) {
    paymentRadios.forEach(function (radio) {
      radio.addEventListener('change', function (e) {
        if (!upiDetails) return;
        if (e.target.value === 'upi') {
          upiDetails.style.height = upiDetails.scrollHeight + 'px';
          upiDetails.style.opacity = '1';
          upiDetails.style.marginTop = '0px';
          upiDetails.style.marginBottom = '8px';
          upiDetails.style.padding = '20px';
        } else {
          upiDetails.style.height = '0px';
          upiDetails.style.opacity = '0';
          upiDetails.style.marginTop = '0px';
          upiDetails.style.marginBottom = '0px';
          upiDetails.style.padding = '0px';
          upiDetails.style.overflow = 'hidden';
        }
      });
    });
  }

  renderCart();
});
