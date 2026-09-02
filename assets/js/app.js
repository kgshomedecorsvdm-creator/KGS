"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

// ===== Razorpay lazy loader =================================================
// Perf: the Razorpay checkout script is no longer loaded on every page. We
// inject it on demand (when the Pay handler runs) and resolve once it's ready.
var _razorpayPromise = null;
function ensureRazorpay() {
  if (typeof window !== 'undefined' && window.Razorpay) return Promise.resolve(window.Razorpay);
  if (_razorpayPromise) return _razorpayPromise;
  _razorpayPromise = new Promise(function (resolve, reject) {
    var existing = document.querySelector('script[src*="checkout.razorpay.com"]');
    var done = function done() { return resolve(window.Razorpay); };
    if (existing) {
      if (window.Razorpay) return done();
      existing.addEventListener('load', done);
      existing.addEventListener('error', function () { _razorpayPromise = null; reject(new Error('Razorpay failed to load')); });
      return;
    }
    var s = document.createElement('script');
    s.src = 'https://checkout.razorpay.com/v1/checkout.js';
    s.async = true;
    s.onload = done;
    s.onerror = function () { _razorpayPromise = null; reject(new Error('Razorpay failed to load')); };
    document.head.appendChild(s);
  });
  return _razorpayPromise;
}

// ===== Extra Pages (Auth, Legal) ==================================
// Extra Pages added to the KGS Home Decor React App

function OrderTrackingPage(_ref_ot) {
  var orderId = _ref_ot.orderId;
  var onBack = _ref_ot.onBack;
  var _state_o = React.useState(null), order = _state_o[0], setOrder = _state_o[1];
  var _state_l = React.useState(true), loading = _state_l[0], setLoading = _state_l[1];

  React.useEffect(function() {
    if (orderId && typeof getOrderById === 'function') {
      getOrderById(orderId).then(function(data) {
        setOrder(data);
        setLoading(false);
      })["catch"](function() {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [orderId]);

  if (loading) return /*#__PURE__*/React.createElement("div", { className: "section container", style: { minHeight: '60vh', padding: '64px 20px', textAlign: 'center' } }, "Loading order details...");
  if (!order) return /*#__PURE__*/React.createElement("div", { className: "section container", style: { minHeight: '60vh', padding: '64px 20px', textAlign: 'center' } }, 
    /*#__PURE__*/React.createElement("h1", null, "Order Not Found"),
    /*#__PURE__*/React.createElement("p", null, "We couldn't find the order you're looking for."),
    /*#__PURE__*/React.createElement("button", { onClick: onBack, className: "btn btn-dark", style: { marginTop: '20px' } }, "Back to Account")    
  );

  var status = (order.status || 'pending').toLowerCase();
  var isCancelledOT = status === 'cancelled';
  var STATUS_STEPS = [
    { key: 'pending',           icon: 'receipt_long',    label: 'Order Placed',     desc: "We've received your order." },
    { key: 'confirmed',         icon: 'inventory_2',     label: 'Confirmed',         desc: "Your order has been confirmed." },
    { key: 'shipped',           icon: 'local_shipping',  label: 'Shipped',           desc: "Your order is on the way." },
    { key: 'out_for_delivery',  icon: 'delivery_dining', label: 'Out for Delivery',  desc: "Your order is out for delivery." },
    { key: 'delivered',         icon: 'home',            label: 'Delivered',         desc: "Order has been delivered." }
  ];
  var statusIndex = { pending: 0, confirmed: 1, shipped: 2, out_for_delivery: 3, out: 3, delivered: 4 }[status] !== undefined ? { pending: 0, confirmed: 1, shipped: 2, out_for_delivery: 3, out: 3, delivered: 4 }[status] : 0;

  return /*#__PURE__*/React.createElement("div", { className: "section container", style: { minHeight: '60vh', padding: '48px 20px' } },
    /*#__PURE__*/React.createElement("div", { style: { maxWidth: '800px', margin: '0 auto' } },
      /*#__PURE__*/React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' } },
        /*#__PURE__*/React.createElement("div", null,
          /*#__PURE__*/React.createElement("div", { className: "label-tag", style: { marginBottom: '8px' } }, "Track Order"),
          /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '32px' } }, "Order #" + String(order.id).slice(-5).toUpperCase())
        ),
        /*#__PURE__*/React.createElement("button", { onClick: onBack, className: "btn btn-ghost" }, "Back to Account")
      ),
      /*#__PURE__*/React.createElement("div", { style: { background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(26,26,26,0.06)', marginBottom: '32px' } },
        /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', fontWeight: 600, color: isCancelledOT ? '#B71C1C' : '#B89657', textTransform: 'uppercase', letterSpacing: '.05em', marginBottom: '24px' } }, "Status: " + status.toUpperCase()),
        isCancelledOT
          ? /*#__PURE__*/React.createElement("div", { style: { display: 'inline-block', padding: '8px 20px', borderRadius: '99px', background: '#FFEBEE', color: '#B71C1C', fontWeight: 700, fontSize: '14px', letterSpacing: '.04em' } }, "Order Cancelled")
          : /*#__PURE__*/React.createElement("div", { className: "tracking-timeline" },
            STATUS_STEPS.map(function(step, i) {
              var done = i <= statusIndex;
              var active = i === statusIndex;
              return /*#__PURE__*/React.createElement("div", { key: step.key, className: "tracking-step " + (done ? 'done' : (active ? 'active' : '')) },
                /*#__PURE__*/React.createElement("div", { className: "tracking-icon" }, /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined" }, done ? "check" : step.icon)),
                /*#__PURE__*/React.createElement("div", { className: "tracking-info" },
                  /*#__PURE__*/React.createElement("h4", null, step.label),
                  /*#__PURE__*/React.createElement("p", null, step.desc),
                  /*#__PURE__*/React.createElement("div", { className: "tracking-time" }, done ? (i === 0 ? new Date(order.created_at).toLocaleDateString() : 'Completed') : 'Pending')
                )
              );
            })
          )
      )
    )
  );
}

function CookieConsentBanner() {
  var _cs = React.useState(function() { return !!localStorage.getItem('kgs_cookie_consent'); });
  var consented = _cs[0], setConsented = _cs[1];
  if (consented) return null;
  var accept = function() { localStorage.setItem('kgs_cookie_consent', 'accepted'); setConsented(true); };
  return /*#__PURE__*/React.createElement("div", { style: { position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999, background: '#1A1A1A', color: '#fff', padding: '16px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', boxShadow: '0 -4px 24px rgba(0,0,0,0.18)' } },
    /*#__PURE__*/React.createElement("p", { style: { fontSize: '13px', color: 'rgba(255,255,255,0.82)', margin: 0, lineHeight: 1.6, maxWidth: '720px' } },
      "We use cookies and local storage to keep your cart, wishlist, and session active. By continuing you agree to our ",
      /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); if (window._kgsSetRoute) window._kgsSetRoute('cookie-policy'); accept(); }, style: { color: '#C5A880', textDecoration: 'underline' } }, "Cookie Policy"),
      " and ",
      /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); if (window._kgsSetRoute) window._kgsSetRoute('privacy'); accept(); }, style: { color: '#C5A880', textDecoration: 'underline' } }, "Privacy Policy"),
      "."
    ),
    /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '10px', flexShrink: 0 } },
      /*#__PURE__*/React.createElement("button", { onClick: accept, style: { background: '#B89657', color: '#fff', border: 'none', borderRadius: '8px', padding: '10px 22px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: '"Jost",sans-serif' } }, "Accept & Continue"),
      /*#__PURE__*/React.createElement("button", { onClick: accept, style: { background: 'transparent', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '8px', padding: '10px 16px', fontSize: '12px', cursor: 'pointer', fontFamily: '"Jost",sans-serif' } }, "Necessary Only")
    )
  );
}

function ResetPasswordPage(_ref_rp) {
  var onDone = _ref_rp.onDone;
  var _np = React.useState(''), newPwd = _np[0], setNewPwd = _np[1];
  var _cp = React.useState(''), confirmPwd = _cp[0], setConfirmPwd = _cp[1];
  var _ls = React.useState(false), loading = _ls[0], setLoading = _ls[1];
  var _err = React.useState(''), error = _err[0], setError = _err[1];
  var _ok = React.useState(false), done = _ok[0], setDone = _ok[1];
  var _sp = React.useState(false), showPwd = _sp[0], setShowPwd = _sp[1];
  var _sc = React.useState(false), showConfirmPwd = _sc[0], setShowConfirmPwd = _sc[1];

  var handleSubmit = function() {
    if (!newPwd || !confirmPwd) { setError('Please fill in both fields.'); return; }
    if (newPwd.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (newPwd !== confirmPwd) { setError('Passwords do not match.'); return; }
    setLoading(true); setError('');
    var sb = getSB();
    sb.auth.updateUser({ password: newPwd }).then(function(res) {
      if (res.error) { setError(_overrideErrorMessage(res.error.message || 'Failed to update password.')); setLoading(false); return; }
      setDone(true); setLoading(false);
      setTimeout(function() { onDone(); }, 2200);
    })['catch'](function(e) { setError(_overrideErrorMessage(e && e.message ? e.message : 'Something went wrong.')); setLoading(false); });
  };

  var inp = { width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' };

  return /*#__PURE__*/React.createElement("div", { className: "section", style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
    /*#__PURE__*/React.createElement("div", { style: { background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', textAlign: 'center' } },
      !done ? /*#__PURE__*/React.createElement(React.Fragment, null,
        /*#__PURE__*/React.createElement("div", { style: { width: 52, height: 52, background: 'rgba(184,150,87,0.10)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '24px', color: '#B89657' } }, "lock_reset")
        ),
        /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '30px', marginBottom: '8px', color: '#1A1A1A' } }, "Set New Password"),
        /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '32px' } }, "Choose a strong password for your account."),
        error && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', textAlign: 'left' } }, error),
        /*#__PURE__*/React.createElement("div", { style: { marginBottom: '16px', textAlign: 'left' } },
          /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "New Password"),
          /*#__PURE__*/React.createElement("div", { style: { position: 'relative' } },
            /*#__PURE__*/React.createElement("input", { type: showPwd ? "text" : "password", placeholder: "Min. 8 characters", value: newPwd, onChange: function(e) { setNewPwd(e.target.value); }, style: Object.assign({}, inp, { paddingRight: '46px' }) }),
            /*#__PURE__*/React.createElement("button", { type: "button", onClick: function() { setShowPwd(!showPwd); }, style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', padding: '4px', display: 'flex', alignItems: 'center' } },
              /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px' } }, showPwd ? "visibility_off" : "visibility")
            )
          )
        ),
        /*#__PURE__*/React.createElement("div", { style: { marginBottom: '24px', textAlign: 'left' } },
          /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "Confirm Password"),
          /*#__PURE__*/React.createElement("div", { style: { position: 'relative' } },
            /*#__PURE__*/React.createElement("input", { type: showConfirmPwd ? "text" : "password", placeholder: "Repeat password", value: confirmPwd, onChange: function(e) { setConfirmPwd(e.target.value); }, onKeyDown: function(e) { if (e.key === 'Enter') handleSubmit(); }, style: Object.assign({}, inp, { paddingRight: '46px' }) }),
            /*#__PURE__*/React.createElement("button", { type: "button", onClick: function() { setShowConfirmPwd(!showConfirmPwd); }, style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', padding: '4px', display: 'flex', alignItems: 'center' } },
              /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px' } }, showConfirmPwd ? "visibility_off" : "visibility")
            )
          )
        ),
        /*#__PURE__*/React.createElement("button", { onClick: handleSubmit, disabled: loading, className: "btn btn-dark", style: { width: '100%', padding: '16px', fontSize: '14px', opacity: loading ? 0.7 : 1 } }, loading ? "Updating..." : "Update Password")
      ) : /*#__PURE__*/React.createElement(React.Fragment, null,
        /*#__PURE__*/React.createElement("div", { style: { width: 64, height: 64, background: 'rgba(37,211,102,0.10)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '32px', color: '#25D366', fontVariationSettings: '"FILL" 1' } }, "check_circle")
        ),
        /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '26px', marginBottom: '12px', color: '#1A1A1A' } }, "Password Updated!"),
        /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px' } }, "Your password has been changed. Redirecting to your account...")
      )
    )
  );
}

function ConfirmEmailPage(_ref_ce) {
  var email = _ref_ce.email, onBack = _ref_ce.onBack;
  return /*#__PURE__*/React.createElement("div", { className: "section", style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
    /*#__PURE__*/React.createElement("div", { style: { background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', textAlign: 'center' } },
      /*#__PURE__*/React.createElement("div", { style: { width: 64, height: 64, background: 'rgba(184,150,87,0.10)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' } },
        /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '32px', color: '#B89657', fontVariationSettings: '"FILL" 1' } }, "mark_email_unread")
      ),
      /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '28px', marginBottom: '12px', color: '#1A1A1A' } }, "Check your inbox"),
      /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', lineHeight: 1.7, marginBottom: '8px' } },
        "We sent a confirmation link to"
      ),
      /*#__PURE__*/React.createElement("p", { style: { color: '#1A1A1A', fontSize: '14px', fontWeight: 600, marginBottom: '24px' } }, email),
      /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '13px', lineHeight: 1.7, marginBottom: '28px' } },
        "Click the link in the email to activate your account. Check your spam folder if you don't see it."
      ),
      /*#__PURE__*/React.createElement("button", { onClick: onBack, className: "btn btn-dark", style: { width: '100%', marginBottom: '12px' } }, "Back to Sign In"),
      /*#__PURE__*/React.createElement("p", { style: { color: '#9E9B98', fontSize: '12px' } }, "Wrong email? ", /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); onBack(); }, style: { color: '#B89657', fontWeight: 600 } }, "Register again"))
    )
  );
}

function _overrideErrorMessage(msg) {
  if (typeof msg !== 'string') return 'Something went wrong. Please try again.';
  if (msg.toLowerCase().indexOf('exceed_egress_quota') !== -1 || msg.toLowerCase().indexOf('restricted') !== -1) {
    return 'Account services are temporarily unavailable. Please try again later.';
  }
  return msg;
}

function ForgotPasswordPage(_ref_fp) {
  var onBack = _ref_fp.onBack;
  var _state_e = React.useState(''), email = _state_e[0], setEmail = _state_e[1];
  var _state_l = React.useState(false), loading = _state_l[0], setLoading = _state_l[1];
  var _state_err = React.useState(''), error = _state_err[0], setError = _state_err[1];
  var _state_s = React.useState(false), success = _state_s[0], setSuccess = _state_s[1];

  var handleSubmit = function() {
    if (!email) { setError('Please enter your email address.'); return; }
    setLoading(true); setError('');
    if (typeof resetPasswordForEmail === 'function') {
      resetPasswordForEmail(email).then(function() {
        setSuccess(true);
        setLoading(false);
      })["catch"](function(e) {
        var cleanMsg = _overrideErrorMessage(e && e.message ? e.message : String(e));
        setError(cleanMsg);
        setLoading(false);
      });
    } else {
      setError('Password reset feature is currently unavailable.');
      setLoading(false);
    }
  };

  return /*#__PURE__*/React.createElement("div", { className: "section", style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
    /*#__PURE__*/React.createElement("div", { style: { background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)', textAlign: 'center' } },
      !success ? /*#__PURE__*/React.createElement(React.Fragment, null,
        /*#__PURE__*/React.createElement("div", { style: { width: 52, height: 52, background: 'rgba(184,150,87,0.10)', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '24px', color: '#B89657' } }, "lock_reset")
        ),
        /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '30px', marginBottom: '8px', color: '#1A1A1A' } }, "Forgot Password?"),
        /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '32px' } }, "Enter your email address and we'll send you a secure link to reset your password."),
        error && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px', textAlign: 'left' } }, error),
        /*#__PURE__*/React.createElement("div", { style: { marginBottom: '24px', textAlign: 'left' } },
          /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "Email Address"),
          /*#__PURE__*/React.createElement("input", { type: "email", placeholder: "Enter your email", value: email, onChange: function(e) { setEmail(e.target.value); }, style: { width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' } })
        ),
        /*#__PURE__*/React.createElement("button", { onClick: handleSubmit, disabled: loading, className: "btn btn-dark", style: { width: '100%', padding: '16px', fontSize: '14px', marginBottom: '24px', opacity: loading ? 0.7 : 1 } }, loading ? "Sending..." : "Send Reset Link"),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: '13.5px', color: '#5E5B59' } },
          "Remembered it? ",
          /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); onBack(); }, style: { color: '#B89657', fontWeight: 600 } }, "Back to Sign In")
        )
      ) : /*#__PURE__*/React.createElement(React.Fragment, null,
        /*#__PURE__*/React.createElement("div", { style: { width: 64, height: 64, background: 'rgba(184,150,87,0.10)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '32px', color: '#B89657' } }, "mark_email_unread")
        ),
        /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '26px', marginBottom: '12px', color: '#1A1A1A' } }, "Check your inbox"),
        /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', lineHeight: 1.7, marginBottom: '28px' } }, "If an account exists for ", /*#__PURE__*/React.createElement("strong", null, email), ", you'll receive a reset link shortly."),
        /*#__PURE__*/React.createElement("button", { onClick: onBack, className: "btn btn-ghost", style: { width: '100%', marginBottom: '16px' } }, "Back to Sign In"),
        /*#__PURE__*/React.createElement("button", { onClick: function() { setSuccess(false); }, style: { background: 'none', border: 'none', fontSize: '13px', color: '#9E9B98', cursor: 'pointer' } }, "Try a different email")
      )
    )
  );
}

function AccountLoginPage(_ref) {
  var onRegister = _ref.onRegister,
    onLogin = _ref.onLogin,
    onForgot = _ref.onForgot;
  var _es = React.useState(''), email = _es[0], setEmail = _es[1];
  var _ps = React.useState(''), password = _ps[0], setPassword = _ps[1];
  var _ls = React.useState(false), loading = _ls[0], setLoading = _ls[1];
  var _err = React.useState(''), error = _err[0], setError = _err[1];
  var _sp = React.useState(false), showPwd = _sp[0], setShowPwd = _sp[1];

  var handleSubmit = function() {
    if (!email || !password) { setError('Please enter your email and password.'); return; }
    setLoading(true); setError('');
    onLogin(email, password)["catch"](function(e) {
      setError(_overrideErrorMessage(e && e.message ? e.message : 'Sign in failed. Check your credentials and try again.'));
      setLoading(false);
    });
  };

  var inputStyle = { width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' };

  return /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }
  }, /*#__PURE__*/React.createElement("div", {
    style: { background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }
  },
    /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '32px', marginBottom: '8px', color: '#1A1A1A' } }, "Welcome Back"),
    /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '32px' } }, "Sign in to see your orders and saved items."),
    error && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' } }, error),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '20px' } },
      /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "Email Address"),
      /*#__PURE__*/React.createElement("input", { type: "email", autoComplete: "email", placeholder: "Enter your email", value: email, onChange: function(e) { setEmail(e.target.value); }, style: inputStyle })
    ),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '24px' } },
      /*#__PURE__*/React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' } },
        /*#__PURE__*/React.createElement("label", { style: { fontSize: '12px', fontWeight: 600, color: '#5E5B59' } }, "Password"),
        /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); onForgot(); }, style: { fontSize: '12px', color: '#B89657', fontWeight: 500 } }, "Forgot?")
      ),
      /*#__PURE__*/React.createElement("div", { style: { position: 'relative' } },
        /*#__PURE__*/React.createElement("input", { type: showPwd ? "text" : "password", autoComplete: "current-password", placeholder: "Enter your password", value: password, onChange: function(e) { setPassword(e.target.value); }, onKeyDown: function(e) { if (e.key === 'Enter') handleSubmit(); }, style: Object.assign({}, inputStyle, { paddingRight: '46px' }) }),
        /*#__PURE__*/React.createElement("button", { type: "button", onClick: function() { setShowPwd(!showPwd); }, style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', padding: '4px', display: 'flex', alignItems: 'center' } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px' } }, showPwd ? "visibility_off" : "visibility")
        )
      )
    ),
    /*#__PURE__*/React.createElement("button", { onClick: handleSubmit, disabled: loading, className: "btn btn-dark", style: { width: '100%', padding: '16px', fontSize: '14px', marginBottom: '24px', opacity: loading ? 0.7 : 1 } }, loading ? "Signing in..." : "Sign In"),
    /*#__PURE__*/React.createElement("div", { style: { textAlign: 'center', fontSize: '13px', color: '#5E5B59' } },
      "Don't have an account? ",
      /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); onRegister(); }, style: { color: '#1A1A1A', fontWeight: 600 } }, "Create one")
    )
  ));
}

function AccountRegisterPage(_ref2) {
  var onLogin = _ref2.onLogin,
    onRegister = _ref2.onRegister;
  var _fn = React.useState(''), fullName = _fn[0], setFullName = _fn[1];
  var _es = React.useState(''), email = _es[0], setEmail = _es[1];
  var _ps = React.useState(''), password = _ps[0], setPassword = _ps[1];
  var _ls = React.useState(false), loading = _ls[0], setLoading = _ls[1];
  var _err = React.useState(''), error = _err[0], setError = _err[1];
  var _sp = React.useState(false), showPwd = _sp[0], setShowPwd = _sp[1];

  var handleSubmit = function() {
    if (!fullName || !email || !password) { setError('Please fill in all fields.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    setLoading(true); setError('');
    onRegister(email, password, fullName)["catch"](function(e) {
      setError(_overrideErrorMessage(e && e.message ? e.message : 'Registration failed. Please try again.'));
      setLoading(false);
    });
  };

  var inputStyle = { width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' };

  return /*#__PURE__*/React.createElement("div", {
    className: "section",
    style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }
  }, /*#__PURE__*/React.createElement("div", {
    style: { background: '#fff', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px', boxShadow: '0 20px 40px -10px rgba(0,0,0,0.05)' }
  },
    /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '32px', marginBottom: '8px', color: '#1A1A1A' } }, "Create Account"),
    /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '32px' } }, "Create an account to track your orders and save the things you like."),
    error && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' } }, error),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '20px' } },
      /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "Full Name"),
      /*#__PURE__*/React.createElement("input", { type: "text", autoComplete: "name", placeholder: "Enter your full name", value: fullName, onChange: function(e) { setFullName(e.target.value); }, style: inputStyle })
    ),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '20px' } },
      /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "Email Address"),
      /*#__PURE__*/React.createElement("input", { type: "email", autoComplete: "email", placeholder: "Enter your email", value: email, onChange: function(e) { setEmail(e.target.value); }, style: inputStyle })
    ),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '24px' } },
      /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px' } }, "Password"),
      /*#__PURE__*/React.createElement("div", { style: { position: 'relative' } },
        /*#__PURE__*/React.createElement("input", { type: showPwd ? "text" : "password", autoComplete: "new-password", placeholder: "Min. 8 characters", value: password, onChange: function(e) { setPassword(e.target.value); }, onKeyDown: function(e) { if (e.key === 'Enter') handleSubmit(); }, style: Object.assign({}, inputStyle, { paddingRight: '46px' }) }),
        /*#__PURE__*/React.createElement("button", { type: "button", onClick: function() { setShowPwd(!showPwd); }, style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', padding: '4px', display: 'flex', alignItems: 'center' } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px' } }, showPwd ? "visibility_off" : "visibility")
        )
      )
    ),
    /*#__PURE__*/React.createElement("button", { onClick: handleSubmit, disabled: loading, className: "btn btn-dark", style: { width: '100%', padding: '16px', fontSize: '14px', marginBottom: '24px', opacity: loading ? 0.7 : 1 } }, loading ? "Creating account..." : "Create Account"),
    /*#__PURE__*/React.createElement("div", { style: { textAlign: 'center', fontSize: '13px', color: '#5E5B59' } },
      "Already have an account? ",
      /*#__PURE__*/React.createElement("a", { href: "#", onClick: function(e) { e.preventDefault(); onLogin(); }, style: { color: '#1A1A1A', fontWeight: 600 } }, "Sign in")
    )
  ));
}

function AccountSettingsTab(_ref_st) {
  var user = _ref_st.user, displayName = _ref_st.displayName, onToast = _ref_st.onToast, onUpdateUser = _ref_st.onUpdateUser;
  var _sn = React.useState((user && user.user_metadata && user.user_metadata.full_name) || displayName || ''), settingsName = _sn[0], setSettingsName = _sn[1];
  var _sp2 = React.useState((user && user.user_metadata && user.user_metadata.phone) || ''), settingsPhone = _sp2[0], setSettingsPhone = _sp2[1];
  var _sl = React.useState(false), settingsSaving = _sl[0], setSettingsSaving = _sl[1];
  var _serr = React.useState(''), settingsErr = _serr[0], setSettingsErr = _serr[1];

  var handleUpdateProfile = function() {
    if (!settingsName.trim()) { setSettingsErr('Full name cannot be empty.'); return; }
    setSettingsSaving(true); setSettingsErr('');
    var sb = getSB();
    var updates = { data: { full_name: settingsName.trim() } };
    if (settingsPhone.trim()) updates.data.phone = settingsPhone.trim();
    sb.auth.updateUser(updates).then(function(res) {
      if (res.error) { setSettingsSaving(false); setSettingsErr(res.error.message || 'Update failed.'); return; }
      return sb.auth.getUser().then(function(fresh) {
        setSettingsSaving(false);
        if (fresh.data && fresh.data.user && typeof onUpdateUser === 'function') onUpdateUser(fresh.data.user);
        if (typeof onToast === 'function') onToast('Profile updated successfully', 'check_circle', '#25D366');
      });
    })["catch"](function(e) {
      setSettingsSaving(false);
      setSettingsErr(_overrideErrorMessage(e && e.message ? e.message : 'Update failed.'));
    });
  };

  var fieldStyle = { width: '100%', padding: '14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' };
  return /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '22px', marginBottom: '20px' } }, "My Profile"),
    /*#__PURE__*/React.createElement("div", { style: { background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(26,26,26,0.06)', maxWidth: '520px' } },
      settingsErr && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' } }, settingsErr),
      /*#__PURE__*/React.createElement("div", { style: { marginBottom: '20px' } },
        /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.04em' } }, "Email Address"),
        /*#__PURE__*/React.createElement("input", { type: "text", disabled: true, value: user.email, style: Object.assign({}, fieldStyle, { background: '#F9F9F9', color: '#767270', border: '1px solid rgba(26,26,26,0.1)' }) }),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: '11px', color: '#9E9B98', marginTop: '6px' } }, "Email cannot be changed")
      ),
      /*#__PURE__*/React.createElement("div", { style: { marginBottom: '20px' } },
        /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.04em' } }, "Full Name"),
        /*#__PURE__*/React.createElement("input", { type: "text", value: settingsName, onChange: function(e) { setSettingsName(e.target.value); }, style: fieldStyle })
      ),
      /*#__PURE__*/React.createElement("div", { style: { marginBottom: '32px' } },
        /*#__PURE__*/React.createElement("label", { style: { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.04em' } }, "Phone Number"),
        /*#__PURE__*/React.createElement("input", { type: "tel", placeholder: "Enter your phone number", value: settingsPhone, onChange: function(e) { setSettingsPhone(e.target.value); }, style: fieldStyle })
      ),
      /*#__PURE__*/React.createElement("button", { onClick: handleUpdateProfile, disabled: settingsSaving, className: "btn btn-dark", style: { padding: '12px 28px', opacity: settingsSaving ? 0.7 : 1 } }, settingsSaving ? "Saving..." : "Save Changes")
    )
  );
}

// ─── Helpers used across account tabs ───────────────────────────────────────
var STATUS_BADGE = {
  pending:     { bg: '#FFF8E1', color: '#F57F17', label: 'Pending' },
  confirmed:   { bg: '#E3F2FD', color: '#1565C0', label: 'Confirmed' },
  processing:  { bg: '#E3F2FD', color: '#1565C0', label: 'Processing' },
  shipped:     { bg: '#F3E5F5', color: '#6A1B9A', label: 'Shipped' },
  'out for delivery': { bg: '#FFF3E0', color: '#E65100', label: 'Out for Delivery' },
  out_for_delivery:   { bg: '#FFF3E0', color: '#E65100', label: 'Out for Delivery' },
  delivered:   { bg: '#E8F5E9', color: '#2E7D32', label: 'Delivered' },
  cancelled:   { bg: '#FFEBEE', color: '#B71C1C', label: 'Cancelled' }
};
function getStatusBadge(status) {
  var s = (status || 'pending').toLowerCase();
  return STATUS_BADGE[s] || { bg: '#F5F5F5', color: '#5E5B59', label: s.charAt(0).toUpperCase() + s.slice(1) };
}
var ORDER_STEPS = [
  { key: 'pending',   icon: 'receipt_long',    label: 'Order Placed' },
  { key: 'confirmed', icon: 'inventory_2',      label: 'Confirmed' },
  { key: 'shipped',   icon: 'local_shipping',   label: 'Shipped' },
  { key: 'out for delivery', icon: 'delivery_dining', label: 'Out for Delivery' },
  { key: 'delivered', icon: 'home',             label: 'Delivered' }
];
var STATUS_STEP_INDEX = { pending: 0, processing: 1, confirmed: 1, shipped: 2, 'out for delivery': 3, delivered: 4 };

// ─── Order Timeline stepper ──────────────────────────────────────────────────
function OrderTimeline(_ref_ot2) {
  var status = _ref_ot2.status;
  var s = (status || 'pending').toLowerCase();
  var currentIdx = STATUS_STEP_INDEX[s] !== undefined ? STATUS_STEP_INDEX[s] : (s === 'cancelled' ? -1 : 0);
  var isCancelled = s === 'cancelled';
  return /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'flex-start', gap: '0', margin: '20px 0 4px', overflowX: 'auto', paddingBottom: '4px' } },
    ORDER_STEPS.map(function(step, i) {
      var done = !isCancelled && i <= currentIdx;
      var active = !isCancelled && i === currentIdx;
      var isLast = i === ORDER_STEPS.length - 1;
      return /*#__PURE__*/React.createElement("div", { key: step.key, style: { display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: '60px' } },
        /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', width: '100%' } },
          i > 0 && /*#__PURE__*/React.createElement("div", { style: { flex: 1, height: '2px', background: done ? '#B89657' : 'rgba(26,26,26,0.1)', transition: 'background 0.3s' } }),
          /*#__PURE__*/React.createElement("div", { style: { width: 32, height: 32, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: isCancelled ? '#FFEBEE' : (done ? '#B89657' : 'rgba(26,26,26,0.07)'), border: active ? '2px solid #B89657' : '2px solid transparent', transition: 'all 0.3s' } },
            /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '15px', color: isCancelled ? '#B71C1C' : (done ? '#fff' : '#9E9B98'), fontVariationSettings: '"FILL" 1' } }, done ? 'check' : step.icon)
          ),
          !isLast && /*#__PURE__*/React.createElement("div", { style: { flex: 1, height: '2px', background: (!isCancelled && i < currentIdx) ? '#B89657' : 'rgba(26,26,26,0.1)' } })
        ),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: '10px', fontWeight: 600, color: done ? '#B89657' : '#9E9B98', textAlign: 'center', marginTop: '6px', lineHeight: 1.3, letterSpacing: '.02em' } }, step.label)
      );
    })
  );
}

// ─── Address Form ────────────────────────────────────────────────────────────
function AddressForm(_ref_af) {
  var initial = _ref_af.initial, onSave = _ref_af.onSave, onCancel = _ref_af.onCancel, saving = _ref_af.saving;
  var blank = { label: 'Home', full_name: '', phone: '', line1: '', line2: '', city: '', state: '', pincode: '', is_default: false };
  var init = initial || blank;
  var _fn = React.useState(init.full_name || ''), fname = _fn[0], setFname = _fn[1];
  var _ph = React.useState(init.phone || ''), phone = _ph[0], setPhone = _ph[1];
  var _l1 = React.useState(init.line1 || ''), line1 = _l1[0], setLine1 = _l1[1];
  var _l2 = React.useState(init.line2 || ''), line2 = _l2[0], setLine2 = _l2[1];
  var _ci = React.useState(init.city || ''), city = _ci[0], setCity = _ci[1];
  var _st = React.useState(init.state || ''), stateVal = _st[0], setStateVal = _st[1];
  var _pi = React.useState(init.pincode || ''), pincode = _pi[0], setPincode = _pi[1];
  var _lb = React.useState(init.label || 'Home'), label = _lb[0], setLabel = _lb[1];
  var _def = React.useState(init.is_default || false), isDef = _def[0], setIsDef = _def[1];
  var _err = React.useState(''), err = _err[0], setErr = _err[1];

  var fs = { width: '100%', padding: '12px 14px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box', background: '#fff' };
  var lb = { display: 'block', fontSize: '11px', fontWeight: 600, color: '#5E5B59', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '.04em' };

  var handleSave = function() {
    if (!fname.trim() || !phone.trim() || !line1.trim() || !city.trim() || !stateVal.trim() || !pincode.trim()) {
      setErr('Please fill all required fields.'); return;
    }
    setErr('');
    onSave({ label: label, full_name: fname.trim(), phone: phone.trim(), line1: line1.trim(), line2: line2.trim(), city: city.trim(), state: stateVal.trim(), pincode: pincode.trim(), is_default: isDef });
  };

  return /*#__PURE__*/React.createElement("div", { style: { background: '#FDFCFA', border: '1px solid rgba(197,168,128,0.3)', borderRadius: '12px', padding: '24px', marginBottom: '20px' } },
    err && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '10px 14px', borderRadius: '8px', marginBottom: '16px' } }, err),
    /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '10px', marginBottom: '16px' } },
      ['Home','Work','Other'].map(function(lbl) {
        return /*#__PURE__*/React.createElement("button", { key: lbl, type: "button", onClick: function() { setLabel(lbl); }, style: { padding: '6px 16px', borderRadius: '99px', border: '1px solid ' + (label === lbl ? '#B89657' : 'rgba(26,26,26,0.2)'), background: label === lbl ? '#B89657' : 'transparent', color: label === lbl ? '#fff' : '#5E5B59', fontSize: '12px', fontWeight: 600, cursor: 'pointer', fontFamily: '"Jost", sans-serif' } }, lbl);
      })
    ),
    /*#__PURE__*/React.createElement("div", { className: "addr-grid-2", style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' } },
      /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", { style: lb }, "Full Name *"), /*#__PURE__*/React.createElement("input", { type: "text", value: fname, onChange: function(e) { setFname(e.target.value); }, placeholder: "Full name", style: fs })),
      /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", { style: lb }, "Phone *"), /*#__PURE__*/React.createElement("input", { type: "tel", value: phone, onChange: function(e) { setPhone(e.target.value); }, placeholder: "10-digit mobile", style: fs }))
    ),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '14px' } }, /*#__PURE__*/React.createElement("label", { style: lb }, "Address Line 1 *"), /*#__PURE__*/React.createElement("input", { type: "text", value: line1, onChange: function(e) { setLine1(e.target.value); }, placeholder: "House no., Building, Street", style: fs })),
    /*#__PURE__*/React.createElement("div", { style: { marginBottom: '14px' } }, /*#__PURE__*/React.createElement("label", { style: lb }, "Address Line 2"), /*#__PURE__*/React.createElement("input", { type: "text", value: line2, onChange: function(e) { setLine2(e.target.value); }, placeholder: "Area, Landmark (optional)", style: fs })),
    /*#__PURE__*/React.createElement("div", { className: "addr-grid-3", style: { display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '16px' } },
      /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", { style: lb }, "City *"), /*#__PURE__*/React.createElement("input", { type: "text", value: city, onChange: function(e) { setCity(e.target.value); }, placeholder: "City", style: fs })),
      /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", { style: lb }, "State *"), /*#__PURE__*/React.createElement("input", { type: "text", value: stateVal, onChange: function(e) { setStateVal(e.target.value); }, placeholder: "State", style: fs })),
      /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", { style: lb }, "Pincode *"), /*#__PURE__*/React.createElement("input", { type: "text", value: pincode, onChange: function(e) { setPincode(e.target.value); }, placeholder: "6-digit", style: fs, maxLength: 6 }))
    ),
    /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' } },
      /*#__PURE__*/React.createElement("input", { type: "checkbox", id: "addr-def", checked: isDef, onChange: function(e) { setIsDef(e.target.checked); }, style: { width: '16px', height: '16px', accentColor: '#B89657', cursor: 'pointer' } }),
      /*#__PURE__*/React.createElement("label", { htmlFor: "addr-def", style: { fontSize: '13px', color: '#5E5B59', cursor: 'pointer', fontFamily: '"Jost", sans-serif' } }, "Set as default address")
    ),
    /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '12px' } },
      /*#__PURE__*/React.createElement("button", { onClick: handleSave, disabled: saving, className: "btn btn-dark", style: { padding: '10px 24px', fontSize: '13px', opacity: saving ? 0.7 : 1 } }, saving ? "Saving..." : "Save Address"),
      /*#__PURE__*/React.createElement("button", { onClick: onCancel, className: "btn btn-ghost", style: { padding: '10px 20px', fontSize: '13px' } }, "Cancel")
    )
  );
}

// ─── Addresses Tab ───────────────────────────────────────────────────────────
function AddressesTab(_ref_addr) {
  var user = _ref_addr.user, onToast = _ref_addr.onToast, onShop = _ref_addr.onShop, onUpdateUser = _ref_addr.onUpdateUser;
  var _addrs = React.useState(null), addresses = _addrs[0], setAddresses = _addrs[1];
  var _show = React.useState(false), showForm = _show[0], setShowForm = _show[1];
  var _edit = React.useState(null), editAddr = _edit[0], setEditAddr = _edit[1];
  var _sav = React.useState(false), saving = _sav[0], setSaving = _sav[1];

  // Load addresses from user_metadata on mount and when user changes
  React.useEffect(function() {
    setAddresses((user && user.user_metadata && user.user_metadata.addresses) || []);
  }, [user]);

  // Helper: persist updated array to user_metadata and refresh local state
  var persistAddresses = function(updatedArray, successMsg, successIcon, successColor) {
    var sb = getSB();
    if (!sb) { onToast('Not connected', 'error', '#C97840'); setSaving(false); return; }
    sb.auth.updateUser({ data: { addresses: updatedArray } }).then(function(res) {
      setSaving(false);
      if (res.error) { onToast('Failed to save address', 'error', '#C97840'); return; }
      setAddresses(updatedArray);
      if (typeof onUpdateUser === 'function') {
        sb.auth.getUser().then(function(fresh) {
          if (fresh.data && fresh.data.user) onUpdateUser(fresh.data.user);
        });
      }
      onToast(successMsg, successIcon, successColor);
    })["catch"](function() { setSaving(false); onToast('Something went wrong', 'error', '#C97840'); });
  };

  var handleSave = function(formData) {
    setSaving(true);
    var existing = (user && user.user_metadata && user.user_metadata.addresses) || [];
    var savedId = editAddr ? editAddr.id : null;
    var newAddr = Object.assign({ id: savedId || Date.now().toString() }, formData);
    var updatedArray;
    if (savedId) {
      updatedArray = existing.map(function(a) { return a.id === savedId ? newAddr : a; });
    } else {
      updatedArray = existing.concat([newAddr]);
    }
    // If new address is_default, clear default on all others
    if (formData.is_default) {
      updatedArray = updatedArray.map(function(a) {
        return Object.assign({}, a, { is_default: a.id === newAddr.id });
      });
    }
    // Sort: default first
    updatedArray.sort(function(a, b) { return (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0); });
    setShowForm(false); setEditAddr(null);
    persistAddresses(updatedArray, editAddr ? 'Address updated' : 'Address saved', 'check_circle', '#25D366');
  };

  var handleDelete = function(id) {
    if (!window.confirm('Delete this address?')) return;
    var existing = (user && user.user_metadata && user.user_metadata.addresses) || [];
    var updatedArray = existing.filter(function(a) { return a.id !== id; });
    persistAddresses(updatedArray, 'Address deleted', 'delete', '#9E9B98');
  };

  var handleSetDefault = function(id) {
    var existing = (user && user.user_metadata && user.user_metadata.addresses) || [];
    var updatedArray = existing.map(function(a) {
      return Object.assign({}, a, { is_default: a.id === id });
    });
    // Sort: default first
    updatedArray.sort(function(a, b) { return (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0); });
    persistAddresses(updatedArray, 'Default address updated', 'check_circle', '#B89657');
  };

  if (addresses === null) return /*#__PURE__*/React.createElement("div", { style: { padding: '40px', textAlign: 'center', color: '#5E5B59' } }, "Loading addresses...");

  return /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' } },
      /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '22px', margin: 0 } }, "Saved Addresses"),
      !showForm && /*#__PURE__*/React.createElement("button", { onClick: function() { setEditAddr(null); setShowForm(true); }, className: "btn btn-dark", style: { padding: '8px 18px', fontSize: '13px' } },
        /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '16px', marginRight: '6px', verticalAlign: 'middle' } }, "add"),
        "Add Address"
      )
    ),
    showForm && /*#__PURE__*/React.createElement(AddressForm, { initial: editAddr, onSave: handleSave, onCancel: function() { setShowForm(false); setEditAddr(null); }, saving: saving }),
    addresses.length === 0 && !showForm ? /*#__PURE__*/React.createElement("div", { style: { background: '#fff', borderRadius: '16px', padding: '48px 24px', textAlign: 'center', border: '1px dashed rgba(26,26,26,0.15)' } },
      /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '48px', color: '#C5A880', display: 'block', marginBottom: '16px' } }, "location_on"),
      /*#__PURE__*/React.createElement("div", { style: { fontSize: '17px', fontWeight: 500, marginBottom: '8px' } }, "No saved addresses"),
      /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '24px' } }, "Save your delivery address for faster checkout."),
      /*#__PURE__*/React.createElement("button", { onClick: function() { setShowForm(true); }, className: "btn btn-dark" }, "Add Your First Address")
    ) : /*#__PURE__*/React.createElement("div", null,
      addresses.map(function(addr) {
        return /*#__PURE__*/React.createElement("div", { key: addr.id, style: { background: '#fff', borderRadius: '12px', padding: '20px', marginBottom: '14px', border: '1px solid ' + (addr.is_default ? 'rgba(184,150,87,0.5)' : 'rgba(26,26,26,0.08)'), position: 'relative' } },
          addr.is_default && /*#__PURE__*/React.createElement("div", { style: { position: 'absolute', top: '14px', right: '14px', fontSize: '10px', fontWeight: 700, background: '#B89657', color: '#fff', padding: '3px 10px', borderRadius: '99px', letterSpacing: '.06em', textTransform: 'uppercase' } }, "Default"),
          /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '12px' } },
            /*#__PURE__*/React.createElement("div", { style: { width: 32, height: 32, borderRadius: '8px', background: 'rgba(184,150,87,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 } },
              /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '17px', color: '#B89657' } }, addr.label === 'Work' ? 'business' : (addr.label === 'Other' ? 'place' : 'home'))
            ),
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', fontWeight: 700, color: '#1A1A1A', marginBottom: '2px' } }, addr.label + " — " + addr.full_name),
              /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', color: '#5E5B59', lineHeight: 1.6 } },
                addr.line1, addr.line2 ? ', ' + addr.line2 : '', /*#__PURE__*/React.createElement("br", null),
                addr.city + ", " + addr.state + " — " + addr.pincode, /*#__PURE__*/React.createElement("br", null),
                /*#__PURE__*/React.createElement("span", { style: { color: '#9E9B98' } }, addr.phone)
              )
            )
          ),
          /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
            !addr.is_default && /*#__PURE__*/React.createElement("button", { onClick: function() { handleSetDefault(addr.id); }, style: { fontSize: '12px', padding: '5px 14px', borderRadius: '99px', border: '1px solid rgba(184,150,87,0.5)', background: 'transparent', color: '#B89657', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontWeight: 600 } }, "Set Default"),
            /*#__PURE__*/React.createElement("button", { onClick: function() { setEditAddr(addr); setShowForm(true); }, style: { fontSize: '12px', padding: '5px 14px', borderRadius: '99px', border: '1px solid rgba(26,26,26,0.15)', background: 'transparent', color: '#1A1A1A', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontWeight: 600 } }, "Edit"),
            /*#__PURE__*/React.createElement("button", { onClick: function() { handleDelete(addr.id); }, style: { fontSize: '12px', padding: '5px 14px', borderRadius: '99px', border: '1px solid rgba(183,28,28,0.2)', background: 'transparent', color: '#B71C1C', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontWeight: 600 } }, "Delete")
          )
        );
      })
    )
  );
}

// ─── Change Password Tab ─────────────────────────────────────────────────────
function ChangePasswordTab(_ref_cp) {
  var onToast = _ref_cp.onToast;
  var _np = React.useState(''), newPwd = _np[0], setNewPwd = _np[1];
  var _cp2 = React.useState(''), confPwd = _cp2[0], setConfPwd = _cp2[1];
  var _sn = React.useState(false), showNew = _sn[0], setShowNew = _sn[1];
  var _sc = React.useState(false), showConf = _sc[0], setShowConf = _sc[1];
  var _sav = React.useState(false), saving = _sav[0], setSaving = _sav[1];
  var _err = React.useState(''), err = _err[0], setErr = _err[1];

  var fs = { width: '100%', padding: '14px', paddingRight: '46px', border: '1px solid rgba(26,26,26,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: '"Jost", sans-serif', boxSizing: 'border-box' };
  var lb = { display: 'block', fontSize: '12px', fontWeight: 600, color: '#5E5B59', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.04em' };

  var handleSave = function() {
    setErr('');
    if (newPwd.length < 8) { setErr('Password must be at least 8 characters.'); return; }
    if (newPwd !== confPwd) { setErr('Passwords do not match.'); return; }
    setSaving(true);
    var sb = getSB();
    sb.auth.updateUser({ password: newPwd }).then(function(res) {
      setSaving(false);
      if (res.error) { setErr(res.error.message || 'Update failed.'); return; }
      setNewPwd(''); setConfPwd('');
      onToast('Password changed successfully', 'lock', '#B89657');
    })["catch"](function(e) { setSaving(false); setErr(_overrideErrorMessage(e && e.message ? e.message : 'Update failed.')); });
  };

  return /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '22px', marginBottom: '20px' } }, "Change Password"),
    /*#__PURE__*/React.createElement("div", { style: { background: '#fff', borderRadius: '16px', padding: '32px', border: '1px solid rgba(26,26,26,0.06)', maxWidth: '460px' } },
      err && /*#__PURE__*/React.createElement("div", { style: { background: 'rgba(201,120,64,0.08)', color: '#C97840', fontSize: '13px', padding: '12px 16px', borderRadius: '8px', marginBottom: '20px' } }, err),
      /*#__PURE__*/React.createElement("div", { style: { marginBottom: '20px' } },
        /*#__PURE__*/React.createElement("label", { style: lb }, "New Password"),
        /*#__PURE__*/React.createElement("div", { style: { position: 'relative' } },
          /*#__PURE__*/React.createElement("input", { type: showNew ? "text" : "password", value: newPwd, onChange: function(e) { setNewPwd(e.target.value); }, placeholder: "Min. 8 characters", style: fs }),
          /*#__PURE__*/React.createElement("button", { type: "button", onClick: function() { setShowNew(!showNew); }, style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', display: 'flex', alignItems: 'center' } },
            /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px' } }, showNew ? "visibility_off" : "visibility")
          )
        )
      ),
      /*#__PURE__*/React.createElement("div", { style: { marginBottom: '28px' } },
        /*#__PURE__*/React.createElement("label", { style: lb }, "Confirm Password"),
        /*#__PURE__*/React.createElement("div", { style: { position: 'relative' } },
          /*#__PURE__*/React.createElement("input", { type: showConf ? "text" : "password", value: confPwd, onChange: function(e) { setConfPwd(e.target.value); }, placeholder: "Re-enter password", style: fs }),
          /*#__PURE__*/React.createElement("button", { type: "button", onClick: function() { setShowConf(!showConf); }, style: { position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#9E9B98', display: 'flex', alignItems: 'center' } },
            /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px' } }, showConf ? "visibility_off" : "visibility")
          )
        )
      ),
      confPwd && newPwd !== confPwd && /*#__PURE__*/React.createElement("div", { style: { fontSize: '12px', color: '#C97840', marginTop: '-18px', marginBottom: '18px' } }, "Passwords don't match"),
      /*#__PURE__*/React.createElement("button", { onClick: handleSave, disabled: saving, className: "btn btn-dark", style: { padding: '12px 28px', opacity: saving ? 0.7 : 1 } }, saving ? "Saving..." : "Update Password")
    )
  );
}

// ─── Account Wishlist Tab ─────────────────────────────────────────────────────
function AccountWishlistTab(_ref_wl) {
  var wishlist = _ref_wl.wishlist, onAdd = _ref_wl.onAdd, onView = _ref_wl.onView, onWishToggle = _ref_wl.onWishToggle, onShop = _ref_wl.onShop;
  var items = PRODUCTS.filter(function(p) { return wishlist.map(String).includes(String(p.id)); });
  if (items.length === 0) return /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '22px', marginBottom: '20px' } }, "Wishlist"),
    /*#__PURE__*/React.createElement("div", { style: { background: '#fff', borderRadius: '16px', padding: '48px 24px', textAlign: 'center', border: '1px dashed rgba(26,26,26,0.15)' } },
      /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '48px', color: '#E8434A', display: 'block', marginBottom: '16px', fontVariationSettings: '"FILL" 1' } }, "favorite"),
      /*#__PURE__*/React.createElement("div", { style: { fontSize: '17px', fontWeight: 500, marginBottom: '8px' } }, "Your wishlist is empty"),
      /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '24px' } }, "Tap the heart on any product to save it here."),
      /*#__PURE__*/React.createElement("button", { onClick: onShop, className: "btn btn-dark" }, "Browse Products")
    )
  );
  return /*#__PURE__*/React.createElement("div", null,
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '22px', marginBottom: '20px' } }, "Wishlist (" + items.length + ")"),
    /*#__PURE__*/React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px' } },
      items.map(function(p) {
        return /*#__PURE__*/React.createElement("div", { key: p.id, style: { background: '#fff', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(26,26,26,0.08)' } },
          /*#__PURE__*/React.createElement("div", { style: { position: 'relative', aspectRatio: '1/1', overflow: 'hidden', cursor: 'pointer' }, onClick: function() { onView(p); } },
            /*#__PURE__*/React.createElement("img", { src: p.image, alt: p.name, style: { width: '100%', height: '100%', objectFit: 'cover' } }),
            /*#__PURE__*/React.createElement("button", { onClick: function(e) { e.stopPropagation(); e.currentTarget.blur(); onWishToggle(p.id); }, style: { position: 'absolute', top: '10px', right: '10px', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' } },
              /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '17px', color: '#E8434A', fontVariationSettings: '"FILL" 1' } }, "favorite")
            )
          ),
          /*#__PURE__*/React.createElement("div", { style: { padding: '12px' } },
            /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', fontWeight: 600, color: '#1A1A1A', marginBottom: '4px', lineHeight: 1.3 } }, p.name),
            /*#__PURE__*/React.createElement("div", { style: { fontSize: '14px', fontWeight: 700, color: '#B89657', marginBottom: '10px' } }, "₹" + p.price),
            /*#__PURE__*/React.createElement("button", { onClick: function() { onAdd(p); }, className: "btn btn-dark", style: { width: '100%', padding: '8px', fontSize: '12px' } }, "Add to Cart")
          )
        );
      })
    )
  );
}

// ─── Main Account Dashboard ───────────────────────────────────────────────────
function AccountDashboardPage(_ref3) {
  var onLogout = _ref3.onLogout,
    onShop = _ref3.onShop,
    onTrack = _ref3.onTrack,
    onToast = _ref3.onToast,
    onAdd = _ref3.onAdd,
    onView = _ref3.onView,
    onWishToggle = _ref3.onWishToggle,
    wishlist = _ref3.wishlist,
    user = _ref3.user,
    onUpdateUser = _ref3.onUpdateUser;

  var _state_t = React.useState('dashboard'), activeTab = _state_t[0], setActiveTab = _state_t[1];
  var _state_o = React.useState([]), orders = _state_o[0], setOrders = _state_o[1];
  React.useEffect(function() {
    setTimeout(function() {
      if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
      if (window._lenis) window._lenis.resize();
    }, 120);
  }, [activeTab]);
  var _state_l = React.useState(true), loading = _state_l[0], setLoading = _state_l[1];
  var _state_addrCount = React.useState(0), addrCount = _state_addrCount[0], setAddrCount = _state_addrCount[1];
  var _state_exp = React.useState(null), expandedOrder = _state_exp[0], setExpandedOrder = _state_exp[1];
  var _state_cancel = React.useState(null), cancellingId = _state_cancel[0], setCancellingId = _state_cancel[1];

  var toast = (typeof onToast === 'function') ? onToast : (window._kgsShowToast || function() {});
  var track = (typeof onTrack === 'function') ? onTrack : function(id) { window._kgsTrackingId = id; sessionStorage.setItem('kgs_tracking_id', id); if (window._kgsSetRoute) window._kgsSetRoute('order-tracking'); };

  var loadOrders = function() {
    if (typeof getMyOrders === 'function') {
      getMyOrders().then(function(data) {
        setOrders(data || []);
        setLoading(false);
      })["catch"](function() { setLoading(false); });
    } else { setLoading(false); }
  };

  React.useEffect(function() {
    loadOrders();
    // If a tab was requested globally (e.g. from announcement bar), consume it
    if (window._kgsAccountTab) {
      setActiveTab(window._kgsAccountTab);
      window._kgsAccountTab = null;
    }
    // fetch address count from user_metadata (no Supabase table query needed)
    var addrCount = ((user && user.user_metadata && user.user_metadata.addresses) || []).length;
    setAddrCount(addrCount);
  }, []);

  var displayName = (user && (user.user_metadata && user.user_metadata.full_name || user.email)) || 'there';
  var firstName = displayName.split(' ')[0];
  var initials = displayName.split(' ').map(function(w) { return w[0]; }).join('').slice(0, 2).toUpperCase();

  var handleCancelOrder = function(orderId) {
    if (!window.confirm('Cancel this order?')) return;
    setCancellingId(orderId);
    var sb = getSB();
    sb.from('orders').select('status').eq('id', orderId).single().then(function(r) {
      if (r.error || !r.data) { setCancellingId(null); toast('Could not verify order', 'error', '#C97840'); return; }
      var currentStatus = (r.data.status || '').toLowerCase();
      var cancellable = ['pending', 'confirmed'].indexOf(currentStatus) !== -1;
      if (!cancellable) {
        setCancellingId(null);
        toast('Order cannot be cancelled — it has already been shipped', 'error', '#C97840');
        return;
      }
      sb.from('orders').update({ status: 'cancelled' }).eq('id', orderId).then(function(res) {
        setCancellingId(null);
        if (res.error) { toast('Could not cancel order', 'error', '#C97840'); return; }
        toast('Order cancelled', 'cancel', '#9E9B98');
        setLoading(true); loadOrders();
      })["catch"](function() { setCancellingId(null); toast('Something went wrong', 'error', '#C97840'); });
    });
  };

  var renderDashboard = function() {
    var deliveredCount = orders.filter(function(o) { return o.status === 'delivered'; }).length;
    var activeCount = orders.filter(function(o) { return ['pending','confirmed','processing','shipped','out for delivery'].indexOf(o.status) !== -1; }).length;
    var stats = [
      { icon: 'receipt_long', label: 'Total Orders', value: loading ? '—' : orders.length, color: '#B89657' },
      { icon: 'check_circle', label: 'Delivered', value: loading ? '—' : deliveredCount, color: '#2E7D32' },
      { icon: 'local_shipping', label: 'Active', value: loading ? '—' : activeCount, color: '#1565C0' },
      { icon: 'location_on', label: 'Addresses', value: addrCount, color: '#6A1B9A' }
    ];
    return /*#__PURE__*/React.createElement("div", null,
      /*#__PURE__*/React.createElement("div", { style: { background: 'linear-gradient(135deg,#F9F4EC,#F2E8D6)', borderRadius: '16px', padding: '28px', marginBottom: '24px', border: '1px solid rgba(197,168,128,0.25)' } },
        /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', color: '#B89657', fontWeight: 600, letterSpacing: '.04em', textTransform: 'uppercase', marginBottom: '6px' } }, "Welcome back"),
        /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '28px', color: '#1A1A1A', marginBottom: '6px' } }, "Hello, " + firstName + "!"),
        /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px' } }, user.email)
      ),
      /*#__PURE__*/React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px,1fr))', gap: '12px', marginBottom: '28px' } },
        stats.map(function(stat) {
          return /*#__PURE__*/React.createElement("div", { key: stat.label, style: { background: '#fff', borderRadius: '12px', padding: '16px 14px', border: '1px solid rgba(26,26,26,0.07)', textAlign: 'center' } },
            /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '22px', color: stat.color, fontVariationSettings: '"FILL" 1', display: 'block', marginBottom: '8px' } }, stat.icon),
            /*#__PURE__*/React.createElement("div", { style: { fontSize: '22px', fontWeight: 700, color: '#1A1A1A', fontFamily: '"Crimson Pro", serif', lineHeight: 1 } }, stat.value),
            /*#__PURE__*/React.createElement("div", { style: { fontSize: '11px', color: '#9E9B98', marginTop: '4px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.04em' } }, stat.label)
          );
        })
      ),
      /*#__PURE__*/React.createElement("h3", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '18px', marginBottom: '14px', color: '#1A1A1A' } }, "Quick Actions"),
      /*#__PURE__*/React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px,1fr))', gap: '12px' } },
        [
          { icon: 'receipt_long', label: 'My Orders', tab: 'orders' },
          { icon: 'location_on', label: 'Addresses', tab: 'addresses' },
          { icon: 'manage_accounts', label: 'My Profile', tab: 'profile' },
          { icon: 'lock', label: 'Change Password', tab: 'password' }
        ].map(function(qa) {
          return /*#__PURE__*/React.createElement("button", { key: qa.tab, onClick: function() { setActiveTab(qa.tab); }, style: { display: 'flex', alignItems: 'center', gap: '10px', padding: '14px 16px', background: '#fff', border: '1px solid rgba(26,26,26,0.08)', borderRadius: '10px', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontSize: '13px', fontWeight: 600, color: '#1A1A1A', textAlign: 'left', transition: 'border-color 0.2s, box-shadow 0.2s' } },
            /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '18px', color: '#B89657' } }, qa.icon),
            qa.label
          );
        })
      )
    );
  };

  var renderOrders = function() {
    return /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '22px', marginBottom: '20px' } }, "My Orders"),
      loading ? /*#__PURE__*/React.createElement("div", { style: { padding: '40px', textAlign: 'center', color: '#5E5B59' } }, "Loading orders...") :
      orders.length === 0 ? /*#__PURE__*/React.createElement("div", { style: { background: '#fff', borderRadius: '16px', padding: '48px 24px', textAlign: 'center', border: '1px dashed rgba(26,26,26,0.15)' } },
        /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '52px', color: '#C5A880', display: 'block', marginBottom: '16px' } }, "inventory_2"),
        /*#__PURE__*/React.createElement("div", { style: { fontSize: '17px', fontWeight: 500, marginBottom: '8px' } }, "You haven't placed any orders yet"),
        /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px', marginBottom: '24px' } }, "Have a look around — there's plenty to browse."),
        /*#__PURE__*/React.createElement("button", { onClick: onShop, className: "btn btn-dark" }, "Start Shopping")
      ) : /*#__PURE__*/React.createElement("div", null,
        orders.map(function(order) {
          var badge = getStatusBadge(order.status);
          var isExpanded = expandedOrder === order.id;
          var isPending = (order.status || '').toLowerCase() === 'pending' || (order.status || '').toLowerCase() === 'confirmed';
          var isCancelled = (order.status || '').toLowerCase() === 'cancelled';
          return /*#__PURE__*/React.createElement("div", { key: order.id, style: { background: '#fff', borderRadius: '14px', marginBottom: '16px', border: '1px solid rgba(197,168,128,0.2)', overflow: 'hidden' } },
            // Order card header
            /*#__PURE__*/React.createElement("div", { style: { padding: '20px' } },
              /*#__PURE__*/React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' } },
                /*#__PURE__*/React.createElement("div", null,
                  /*#__PURE__*/React.createElement("div", { style: { fontSize: '11px', fontWeight: 700, color: '#9E9B98', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '4px' } }, "Order #" + String(order.id).slice(-8).toUpperCase()),
                  /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', color: '#5E5B59' } }, new Date(order.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }))
                ),
                /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: '10px' } },
                  /*#__PURE__*/React.createElement("div", { style: { fontSize: '20px', fontWeight: 700, color: '#1A1A1A', fontFamily: '"Crimson Pro", serif' } }, "₹" + (order.total || order.total_amount || 0)),
                  /*#__PURE__*/React.createElement("div", { style: { fontSize: '12px', fontWeight: 700, padding: '4px 12px', borderRadius: '99px', background: badge.bg, color: badge.color, letterSpacing: '.02em' } }, badge.label)
                )
              ),
              // Items thumbnails + names
              (order.order_items || []).length > 0 && /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '14px' } },
                (order.order_items || []).map(function(item, idx) {
                  return /*#__PURE__*/React.createElement("div", { key: idx, style: { flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', width: '72px' } },
                    /*#__PURE__*/React.createElement("img", { src: item.product_image || '', alt: item.product_name, style: { width: '64px', height: '64px', objectFit: 'cover', borderRadius: '8px', border: '1px solid rgba(26,26,26,0.07)' } }),
                    /*#__PURE__*/React.createElement("div", { style: { fontSize: '10px', color: '#5E5B59', textAlign: 'center', lineHeight: 1.2, maxWidth: '70px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' } }, item.product_name)
                  );
                })
              ),
              // Delivery address (if available)
              order.shipping_address && /*#__PURE__*/React.createElement("div", { style: { fontSize: '12px', color: '#9E9B98', display: 'flex', gap: '6px', alignItems: 'flex-start', marginBottom: '14px' } },
                /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '14px', marginTop: '1px' } }, "location_on"),
                /*#__PURE__*/React.createElement("span", null, order.shipping_address)
              ),
              // Action buttons
              /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: '10px', flexWrap: 'wrap' } },
                !isCancelled && /*#__PURE__*/React.createElement("button", { onClick: function() { track(order.id); }, className: "btn btn-ghost", style: { padding: '7px 16px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '5px' } },
                  /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '14px' } }, "local_shipping"),
                  "Track Order"
                ),
                /*#__PURE__*/React.createElement("button", { onClick: function() { setExpandedOrder(isExpanded ? null : order.id); }, style: { padding: '7px 16px', fontSize: '12px', borderRadius: '8px', border: '1px solid rgba(26,26,26,0.15)', background: 'transparent', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontWeight: 600, color: '#1A1A1A', display: 'flex', alignItems: 'center', gap: '5px' } },
                  /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '14px' } }, isExpanded ? "expand_less" : "expand_more"),
                  isExpanded ? "Hide Details" : "View Details"
                ),
                isPending && /*#__PURE__*/React.createElement("button", { onClick: function() { handleCancelOrder(order.id); }, disabled: cancellingId === order.id, style: { padding: '7px 16px', fontSize: '12px', borderRadius: '8px', border: '1px solid rgba(183,28,28,0.3)', background: 'transparent', cursor: 'pointer', fontFamily: '"Jost", sans-serif', fontWeight: 600, color: '#B71C1C', opacity: cancellingId === order.id ? 0.6 : 1 } },
                  cancellingId === order.id ? "Cancelling..." : "Cancel Order"
                ),
                (!isPending && !isCancelled && ['shipped','out_for_delivery','out for delivery','delivered'].indexOf((order.status || '').toLowerCase()) !== -1)
                  ? React.createElement('p', { style: { fontSize: '11px', color: '#9E9B98', margin: '4px 0 0', fontFamily: 'Jost, sans-serif' } }, 'Cancellation not available after shipment')
                  : null
              )
            ),
            // Expanded detail panel
            isExpanded && /*#__PURE__*/React.createElement("div", { style: { borderTop: '1px solid rgba(26,26,26,0.07)', padding: '20px', background: '#FDFCFA' } },
              !isCancelled && /*#__PURE__*/React.createElement(OrderTimeline, { status: order.status }),
              /*#__PURE__*/React.createElement("div", { style: { marginTop: '20px' } },
                /*#__PURE__*/React.createElement("div", { style: { fontSize: '12px', fontWeight: 700, color: '#9E9B98', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '12px' } }, "Order Items"),
                (order.order_items || []).map(function(item, idx) {
                  return /*#__PURE__*/React.createElement("div", { key: idx, style: { display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(26,26,26,0.06)' } },
                    /*#__PURE__*/React.createElement("img", { src: item.product_image || '', alt: item.product_name, style: { width: '52px', height: '52px', objectFit: 'cover', borderRadius: '8px', flexShrink: 0 } }),
                    /*#__PURE__*/React.createElement("div", { style: { flex: 1, minWidth: 0 } },
                      /*#__PURE__*/React.createElement("div", { style: { fontSize: '14px', fontWeight: 600, color: '#1A1A1A', marginBottom: '2px' } }, item.product_name),
                      /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', color: '#9E9B98' } }, "Qty: " + (item.quantity || 1))
                    ),
                    /*#__PURE__*/React.createElement("div", { style: { fontSize: '15px', fontWeight: 700, color: '#B89657' } }, "₹" + (item.total_price || item.unit_price * (item.quantity || 1) || 0))
                  );
                }),
                /*#__PURE__*/React.createElement("div", { style: { display: 'flex', justifyContent: 'flex-end', paddingTop: '12px', gap: '24px' } },
                  order.delivery_fee > 0 && /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', color: '#5E5B59' } }, "Delivery: ₹" + order.delivery_fee),
                  /*#__PURE__*/React.createElement("div", { style: { fontSize: '15px', fontWeight: 700, color: '#1A1A1A' } }, "Total: ₹" + (order.total || order.total_amount || 0))
                )
              )
            )
          );
        })
      )
    );
  };

  var renderContent = function() {
    if (activeTab === 'dashboard') return renderDashboard();
    if (activeTab === 'orders') return renderOrders();
    if (activeTab === 'addresses') return /*#__PURE__*/React.createElement(AddressesTab, { user: user, onToast: toast, onShop: onShop, onUpdateUser: onUpdateUser });
    if (activeTab === 'profile') return /*#__PURE__*/React.createElement(AccountSettingsTab, { user: user, displayName: displayName, onToast: toast, onUpdateUser: onUpdateUser });
    if (activeTab === 'password') return /*#__PURE__*/React.createElement(ChangePasswordTab, { onToast: toast });
    if (activeTab === 'wishlist') return /*#__PURE__*/React.createElement(AccountWishlistTab, { wishlist: wishlist, onAdd: onAdd, onView: onView, onWishToggle: onWishToggle, onShop: onShop });
    return null;
  };

  var NAV_ITEMS = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'orders', icon: 'receipt_long', label: 'My Orders' },
    { id: 'addresses', icon: 'location_on', label: 'Addresses' },
    { id: 'profile', icon: 'manage_accounts', label: 'My Profile' },
    { id: 'password', icon: 'lock', label: 'Password' },
    { id: 'wishlist', icon: 'favorite', label: 'Wishlist' }
  ];

  return /*#__PURE__*/React.createElement("div", { className: "section container account-page" },
    /*#__PURE__*/React.createElement("div", { className: "account-header" },
      /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 16 } },
        /*#__PURE__*/React.createElement("div", { style: { width: 52, height: 52, borderRadius: '50%', background: 'linear-gradient(135deg,#C5A880,#B89657)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: 18, flexShrink: 0 } }, initials),
        /*#__PURE__*/React.createElement("div", null,
          /*#__PURE__*/React.createElement("h1", { style: { fontFamily: '"Crimson Pro", serif', fontSize: '28px', color: '#1A1A1A', marginBottom: '2px' } }, "My Account"),
          /*#__PURE__*/React.createElement("p", { style: { color: '#5E5B59', fontSize: '14px' } }, "Welcome back, " + displayName + ".")
        )
      ),
      /*#__PURE__*/React.createElement("button", { onClick: onLogout, className: "btn btn-ghost", style: { padding: '10px 20px', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '6px' } },
        /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: '16px' } }, "logout"),
        "Sign Out"
      )
    ),
    /*#__PURE__*/React.createElement("div", { className: "account-grid" },
      /*#__PURE__*/React.createElement("nav", { className: "account-nav" },
        NAV_ITEMS.map(function(item) {
          return /*#__PURE__*/React.createElement("div", { key: item.id, className: "account-nav-item " + (activeTab === item.id ? 'active' : ''), onClick: function() { setActiveTab(item.id); } },
            /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined" }, item.icon),
            /*#__PURE__*/React.createElement("span", null, item.label)
          );
        }),
        /*#__PURE__*/React.createElement("div", { className: "account-nav-item", onClick: onLogout, style: { marginTop: '8px', color: '#B71C1C', opacity: 0.75 } },
          /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined" }, "logout"),
          /*#__PURE__*/React.createElement("span", null, "Sign Out")
        )
      ),
      /*#__PURE__*/React.createElement("div", { className: "account-main" }, renderContent())
    )
  );
}

function FAQPage() {
  var faqItem = function(q, a) {
    return /*#__PURE__*/React.createElement("details", { className: "faq-item", style: { borderBottom: '1px solid rgba(197,168,128,0.18)' } },
      /*#__PURE__*/React.createElement("summary", { style: { cursor: 'pointer', padding: '18px 0', fontWeight: 500, fontSize: '14.5px', color: 'var(--ink)', listStyle: 'none' } }, q),
      /*#__PURE__*/React.createElement("div", { style: { paddingBottom: '20px', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.75 } }, a)
    );
  };
  return /*#__PURE__*/React.createElement("main", null,
    /*#__PURE__*/React.createElement("section", { style: { background: '#F2E8D6', padding: '64px 0', textAlign: 'center' } },
      /*#__PURE__*/React.createElement("div", { className: "container" },
        /*#__PURE__*/React.createElement("h1", { className: "t-h1", style: { margin: '0 0 8px' } }, "Frequently Asked Questions"),
        /*#__PURE__*/React.createElement("p", { style: { fontSize: '14px', color: 'var(--muted)' } }, "Everything you need to know about shopping with KGS Home Décors.")
      )
    ),
    /*#__PURE__*/React.createElement("section", { style: { padding: '64px 0 80px', background: 'var(--base)' } },
      /*#__PURE__*/React.createElement("div", { className: "container", style: { maxWidth: '760px', margin: '0 auto' } },
        /*#__PURE__*/React.createElement("h2", { className: "t-h3", style: { borderBottom: '1px solid rgba(197,168,128,0.3)', paddingBottom: '12px', marginBottom: '16px' } }, "Orders & Delivery"),
        faqItem("How long does delivery take?", "We deliver free across Tamil Nadu; local Virudhachalam orders often arrive same or next day for most in-stock items."),
        faqItem("Do you offer free delivery?", "Yes! We offer free delivery on every order across Tamil Nadu — no minimum order value required."),
        /*#__PURE__*/React.createElement("h2", { className: "t-h3", style: { borderBottom: '1px solid rgba(197,168,128,0.3)', paddingBottom: '12px', marginTop: '48px', marginBottom: '16px' } }, "Returns & Refunds"),
        faqItem("What is your return policy?", "We accept returns within 7 days of delivery for items that are damaged, defective, or significantly different."),
        faqItem("How do I initiate a return?", "To start a return, contact us on WhatsApp or email us within 7 days of receiving your order.")
      )
    )
  );
}

function LegalPage(_ref4) {
  var title = _ref4.title,
    children = _ref4.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "section container",
    style: {
      maxWidth: '800px',
      padding: '64px 20px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '40px',
      color: '#1A1A1A',
      marginBottom: '40px',
      textAlign: 'center'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      color: '#5E5B59',
      fontSize: '16px',
      lineHeight: '1.8'
    }
  }, children));
}
function PrivacyPolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Privacy Policy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "When you shop with us, you share some personal details. Here’s exactly what we collect and why — short, plain, no jargon."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Information We Collect"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you make a purchase or create an account."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "How We Use Your Information"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: '24px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, "To process and fulfill your orders."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, "To communicate with you about your order status."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, "To send you promotional offers and updates (only if you opt-in).")));
}
function TermsPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Terms & Conditions"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "Using this site means you're okay with these terms. We've kept them short and honest."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Product Accuracy"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We keep prices and details as accurate as we can. If something's wrong — a typo, a stale price — we'll fix it and tell you before processing your order."));
}
function ReturnPolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Return & Refund Policy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We only accept replacement requests for items that are damaged or broken upon delivery."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Replacement Conditions"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "To be eligible for a replacement, you must provide an unboxing video clearly showing the damaged or broken item at the time of opening. Requests without an unboxing video will not be accepted."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "To raise a replacement request, contact our support team via WhatsApp with your order details and unboxing video."));
}
function ShippingPolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Shipping Policy"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We pack every order ourselves and ship within 24 hours on working days."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Delivery Times"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: '24px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Virudhachalam:"), " Same day or next day delivery."), /*#__PURE__*/React.createElement("li", {
    style: {
      marginBottom: '8px'
    }
  }, /*#__PURE__*/React.createElement("b", null, "Tamil Nadu:"), " 2-4 business days.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "Shipping is free for all orders across Tamil Nadu."));
}

function CookiePolicyPage() {
  return /*#__PURE__*/React.createElement(LegalPage, { title: "Cookie Policy" },
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "This website uses browser storage (cookies and localStorage) to give you the best shopping experience. Here is exactly what we store and why."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "What We Store"),
    /*#__PURE__*/React.createElement("ul", { style: { paddingLeft: '24px', marginBottom: '24px' } },
      /*#__PURE__*/React.createElement("li", { style: { marginBottom: '10px' } }, /*#__PURE__*/React.createElement("b", null, "kgs_cart:"), " Items in your shopping cart. Cleared automatically after checkout."),
      /*#__PURE__*/React.createElement("li", { style: { marginBottom: '10px' } }, /*#__PURE__*/React.createElement("b", null, "kgs_wish:"), " Your saved wishlist. Synced to your account when logged in."),
      /*#__PURE__*/React.createElement("li", { style: { marginBottom: '10px' } }, /*#__PURE__*/React.createElement("b", null, "kgs_tracking_id:"), " Your last order ID, used for the order tracking page. Stored in sessionStorage and cleared when you close the browser tab."),
      /*#__PURE__*/React.createElement("li", { style: { marginBottom: '10px' } }, /*#__PURE__*/React.createElement("b", null, "kgs_cookie_consent:"), " Stores whether you have accepted this cookie notice.")
    ),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "Analytics"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "We use Google Analytics to understand how visitors use our website (e.g. pages visited, time spent). This helps us improve your shopping experience. Google Analytics may set cookies on your device. No personally identifiable information is shared with Google Analytics. You can opt out at any time using the ", /*#__PURE__*/React.createElement("a", { href: "https://tools.google.com/dlpage/gaoptout", target: "_blank", rel: "noopener noreferrer", style: { color: '#B89657' } }, "Google Analytics Opt-out Browser Add-on"), "."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "How to Clear"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "You can clear all stored data at any time via your browser settings (Clear Site Data). Note: this will empty your cart and wishlist.")
  );
}

function DisclaimerPage() {
  return /*#__PURE__*/React.createElement(LegalPage, { title: "Disclaimer" },
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "Please read this disclaimer carefully before purchasing from KGS Home D\xe9cors."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "Product Colours & Appearance"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "Product images are photographed as accurately as possible, but actual colours may vary slightly due to screen calibration and lighting. We are not liable for minor colour or texture differences between product images and the delivered item."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "Pricing"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "All prices are in Indian Rupees (INR). We reserve the right to correct pricing errors before an order is confirmed. If an error is discovered after placement, we will contact you before processing."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "Delivery"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "Delivery timelines are estimates and may vary due to location, weather, or unforeseen circumstances. We are not liable for delays caused by third-party logistics providers or force majeure events."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "Limitation of Liability"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "KGS Home D\xe9cors shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or services. Our maximum liability is limited to the value of the specific order in question."),
    /*#__PURE__*/React.createElement("h2", { style: { fontFamily: '"Crimson Pro",serif', fontSize: '24px', color: '#1A1A1A', marginTop: '32px', marginBottom: '16px' } }, "Contact"),
    /*#__PURE__*/React.createElement("p", { style: { marginBottom: '24px' } }, "For any concerns, contact us at kgshomedecorsvdm@gmail.com or via WhatsApp before initiating any proceedings.")
  );
}

// Attach to window so Babel standalone finds it
window.AccountLoginPage = AccountLoginPage;
window.AccountRegisterPage = AccountRegisterPage;
window.AccountDashboardPage = AccountDashboardPage;
function PaymentOptionsPage() {
  return /*#__PURE__*/React.createElement(LegalPage, {
    title: "Payment Options"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: '24px'
    }
  }, "We offer secure and convenient payment methods for all your purchases at KGS Home Décors."), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro", serif',
      fontSize: '24px',
      color: '#1A1A1A',
      marginTop: '32px',
      marginBottom: '16px'
    }
  }, "Accepted Payment Methods"), /*#__PURE__*/React.createElement("ul", {
    style: {
      paddingLeft: '24px',
      marginBottom: '24px'
    }
  }, /*#__PURE__*/React.createElement("li", {
    style: { marginBottom: '8px' }
  }, /*#__PURE__*/React.createElement("strong", null, "UPI (Google Pay, PhonePe, Paytm, etc.)"), " - Fast and secure direct bank transfers."), /*#__PURE__*/React.createElement("li", {
    style: { marginBottom: '8px' }
  }, /*#__PURE__*/React.createElement("strong", null, "Credit & Debit Cards"), " - Visa, Mastercard, and Rupay cards are accepted via our secure gateway."), /*#__PURE__*/React.createElement("li", {
    style: { marginBottom: '8px' }
  }, /*#__PURE__*/React.createElement("strong", null, "Net Banking"), " - Direct transfers from all major Indian banks.")));
}

window.PrivacyPolicyPage = PrivacyPolicyPage;
window.TermsPage = TermsPage;
window.ReturnPolicyPage = ReturnPolicyPage;
window.ShippingPolicyPage = ShippingPolicyPage;
window.PaymentOptionsPage = PaymentOptionsPage;

// ===== NEXT SCRIPT BLOCK =====

var PRODUCTS = [{
  id: 'plant-banana',
  name: 'Large Artificial Banana Plant',
  category: 'Artificial Plants',
  price: 3200,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 84,
  sold: 31,
  stock: 9,
  image: 'assets/products/plant.png',
  badge: 'Popular',
  badgeKind: 'gold'
}, {
  id: 'flower-rose',
  name: 'Premium Rose Bouquet',
  category: 'Artificial Flowers',
  price: 1500,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 34,
  sold: 12,
  stock: 20,
  image: 'assets/products-real/flower-01.png',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'bag-tote',
  name: 'Handcrafted Leather Tote',
  category: 'Bags & Accessories',
  price: 4500,
  was: 5000,
  off: '10% OFF',
  rating: 4.8,
  reviews: 56,
  sold: 28,
  stock: 5,
  image: 'assets/products-real/bag-01.png',
  badge: null
}, {
  id: 'bottle-vintage',
  name: 'Vintage Glass Bottle',
  category: 'Bottles',
  price: 1200,
  was: null,
  off: null,
  rating: 4.6,
  reviews: 21,
  sold: 9,
  stock: 15,
  image: 'assets/products-real/bottle-01.png',
  badge: 'Staff Pick',
  badgeKind: 'gold'
}, {
  id: 'vase-ceramic',
  name: 'Designer Ceramic Vase',
  category: 'Vases & Décor',
  price: 1950,
  was: null,
  off: null,
  rating: 5.0,
  reviews: 42,
  sold: 18,
  stock: 14,
  image: 'assets/products/ceramic_vase.webp',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'fountain-tabletop',
  name: 'Indoor Tabletop Fountain',
  category: 'Fountains & Pooja',
  price: 2850,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 56,
  sold: 22,
  stock: 6,
  image: 'assets/products/fountain.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'gift-hamper',
  name: 'Luxury Festive Gift Hamper',
  category: 'Gifts & Hampers',
  price: 5500,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 88,
  sold: 45,
  stock: 8,
  image: 'assets/products-real/gift-01.png',
  badge: null
}, {
  id: 'sofa-3seater',
  name: '3-Seater Sofa - Fabric & Wood',
  category: 'Chairs & Sofas',
  price: 18500,
  was: 22000,
  off: '16% OFF',
  rating: 4.8,
  reviews: 124,
  sold: 38,
  stock: 4,
  image: 'assets/products/sofa.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'clock-brass',
  name: 'Antique Brass Wall Clock',
  category: 'Clocks',
  price: 1299,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 98,
  sold: 64,
  stock: 12,
  image: 'assets/products/clock.webp',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'lamp-table',
  name: 'Artisan Table Lamp',
  category: 'Lighting',
  price: 3400,
  was: null,
  off: null,
  rating: 4.6,
  reviews: 72,
  sold: 27,
  stock: 11,
  image: 'assets/products/table_lamp.webp',
  badge: null
}, {
  id: 'fan-vintage',
  name: 'Vintage Blower Fan',
  category: 'Blower Fans',
  price: 4200,
  was: null,
  off: null,
  rating: 4.8,
  reviews: 33,
  sold: 14,
  stock: 7,
  image: 'assets/products-real/fan-01.png',
  badge: null
}, {
  id: 'horse-statue',
  name: 'Decorative Horse Statue',
  category: 'Statues & Idols',
  price: 4250,
  was: 5500,
  off: '23% OFF',
  rating: 4.9,
  reviews: 168,
  sold: 52,
  stock: 3,
  image: 'assets/products/horse.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'wall-art-botanical',
  name: 'Botanical Wall Art Panel',
  category: 'Wall Frames',
  price: 1850,
  was: null,
  off: null,
  rating: 4.8,
  reviews: 113,
  sold: 41,
  stock: 18,
  image: 'assets/products/wall_decor.webp',
  badge: null
}, {
  id: 'wall-statue',
  name: 'Brass Wall Mount Statue',
  category: 'Wall Statues',
  price: 3800,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 45,
  sold: 19,
  stock: 6,
  image: 'assets/products-real/wall-statue-01.png',
  badge: null
}, {
  id: 'cushion-velvet',
  name: 'Velvet Throw Cushion Set',
  category: 'Vases & Décor',
  price: 1800,
  was: 2200,
  off: '18% OFF',
  rating: 4.8,
  reviews: 67,
  sold: 43,
  stock: 15,
  image: 'assets/products/ceramic_vase.webp',
  badge: 'Hot Deal',
  badgeKind: 'warm'
}, {
  id: 'lamp-floor',
  name: 'Rattan Floor Lamp',
  category: 'Lighting',
  price: 5200,
  was: null,
  off: null,
  rating: 4.9,
  reviews: 38,
  sold: 21,
  stock: 5,
  image: 'assets/products/table_lamp.webp',
  badge: 'New',
  badgeKind: 'ink'
}, {
  id: 'mirror-arched',
  name: 'Arched Gold Wall Mirror',
  category: 'Wall Frames',
  price: 7500,
  was: 9000,
  off: '17% OFF',
  rating: 4.9,
  reviews: 92,
  sold: 34,
  stock: 3,
  image: 'assets/products/wall_decor.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'pooja-thali',
  name: 'Handcrafted Brass Pooja Thali',
  category: 'Fountains & Pooja',
  price: 2200,
  was: null,
  off: null,
  rating: 5.0,
  reviews: 114,
  sold: 76,
  stock: 10,
  image: 'assets/products/fountain.webp',
  badge: 'Popular',
  badgeKind: 'gold'
}, {
  id: 'plant-monstera',
  name: 'Artificial Monstera Plant',
  category: 'Artificial Plants',
  price: 2800,
  was: null,
  off: null,
  rating: 4.7,
  reviews: 52,
  sold: 29,
  stock: 12,
  image: 'assets/products/plant.png',
  badge: 'Trending',
  badgeKind: 'ink'
}, {
  id: 'clock-wooden',
  name: 'Rustic Wooden Wall Clock',
  category: 'Clocks',
  price: 1850,
  was: 2100,
  off: '12% OFF',
  rating: 4.6,
  reviews: 44,
  sold: 31,
  stock: 8,
  image: 'assets/products/clock.webp',
  badge: null
}, {
  id: 'statue-ganesha',
  name: 'Brass Ganesha Idol',
  category: 'Statues & Idols',
  price: 3600,
  was: null,
  off: null,
  rating: 5.0,
  reviews: 201,
  sold: 88,
  stock: 7,
  image: 'assets/products/horse.webp',
  badge: 'Best Seller',
  badgeKind: 'gold'
}, {
  id: 'hamper-diwali',
  name: 'Premium Diwali Gift Set',
  category: 'Gifts & Hampers',
  price: 4200,
  was: null,
  off: null,
  rating: 4.8,
  reviews: 73,
  sold: 55,
  stock: 4,
  image: 'assets/products-real/gift-01.png',
  badge: 'Trending',
  badgeKind: 'ink'
}, {
  id: 'sofa-accent',
  name: 'Accent Armchair — Teal',
  category: 'Chairs & Sofas',
  price: 12500,
  was: 15000,
  off: '17% OFF',
  rating: 4.7,
  reviews: 58,
  sold: 22,
  stock: 2,
  image: 'assets/products/sofa.webp',
  badge: 'Hot Deal',
  badgeKind: 'warm'
}];
var CATEGORIES = [
  { id: 'artificial-plants',  label: 'Artificial Plants',   img: 'assets/categories/cat_artificial_plants_thumb.webp' },
  { id: 'artificial-flowers', label: 'Artificial Flowers',  img: 'assets/categories/cat_artificial_flowers_thumb.webp' },
  { id: 'bags-accessories',   label: 'Bags & Accessories',  img: 'assets/categories/cat_bags_accessories_thumb.webp' },
  { id: 'bottles',            label: 'Bottles',             img: 'assets/categories/cat_bottles_thumb.webp' },
  { id: 'vases-decor',        label: 'Vases & Décor',       img: 'assets/categories/cat_vases_decor_new_thumb.webp' },
  { id: 'fountains-pooja',    label: 'Fountains & Pooja',   img: 'assets/categories/cat_fountains_new_thumb.webp' },
  { id: 'gifts-hampers',      label: 'Gifts & Hampers',     img: 'assets/categories/cat_gifts_new_thumb.webp' },
  { id: 'chairs-sofas',       label: 'Chairs & Sofas',      img: 'assets/categories/cat_chairs_sofas_thumb.webp' },
  { id: 'clocks',             label: 'Clocks',              img: 'assets/categories/cat_clocks_new_thumb.webp' },
  { id: 'lighting',           label: 'Lighting',            img: 'assets/categories/cat_lighting_only_thumb.webp' },
  { id: 'blower-fans',        label: 'Blower Fans',         img: 'assets/categories/cat_blower_fans_thumb.webp' },
  { id: 'statues-idols',      label: 'Statues & Idols',     img: 'assets/categories/cat_statues_new_thumb.webp' },
  { id: 'wall-frames',        label: 'Wall Frames',         img: 'assets/categories/cat_wall_frames_new_thumb.webp' },
  { id: 'wall-statues',       label: 'Wall Statues',        img: 'assets/categories/cat_wall_statues_thumb.webp' },
];
var TESTIMONIALS = [{
  name: 'Priya Sharma',
  initial: 'P',
  stars: 5,
  quote: 'Ordered the tall marble vase and it arrived the next day, packed properly. Looks exactly like the photos. Will order again.',
  thumb: 'assets/lifestyle/showroom.webp'
}, {
  name: 'Rohit Verma',
  initial: 'R',
  stars: 5,
  quote: 'WhatsApped them about a sofa and got a reply in five minutes. Good people. The piece itself is solid — no wobble, good finish.',
  thumb: 'assets/lifestyle/room_zen.webp'
}, {
  name: 'Ananya Iyer',
  initial: 'A',
  stars: 5,
  quote: 'An incredibly premium selection right here in Virudhachalam. Went to the showroom on Junction Road and ended up buying three things I hadn\'t planned to.',
  thumb: 'assets/lifestyle/showroom_interior.webp'
}];
var IG_TILES = ['assets/lifestyle/premium_decor_bright.webp', 'assets/lifestyle/showroom_interior.png', 'assets/lifestyle/premium_decor_bright.png', 'assets/lifestyle/room_zen.webp', 'assets/lifestyle/showroom.webp', 'assets/lifestyle/showroom_interior.webp', 'assets/categories/cat_decor_thumb.webp', 'assets/categories/cat_lighting_thumb.webp', 'assets/categories/cat_plants_thumb.webp', 'assets/categories/cat_lifestyle_thumb.webp'];
var fmtPrice = function fmtPrice(n) {
  return '₹' + n.toLocaleString('en-IN');
};

// ─── Supabase Integration ────────────────────────────────────────────
var SB_URL = 'https://rgpkomngygapwjhnbgaf.supabase.co';
var SB_ANON = 'sb_publishable_UkDE7zfukrWeuSW2pZYjTQ_YpBFcs9P';
// Single shared Supabase client — avoids multiple GoTrueClient instances
var _sbClient = null;
function getSB() {
  if (!_sbClient && typeof window.supabase !== 'undefined') {
    try {
      _sbClient = window.supabase.createClient(SB_URL, SB_ANON);
    } catch (e) {
      console.error('[KGS] Failed to create Supabase client:', e);
    }
  }
  return _sbClient;
}
var _SB_IMG_PREFIX = SB_URL + '/storage/v1/object/public/product-images/';
function cdnImg(url) {
  if (!url || typeof url !== 'string') return url;
  if (url.startsWith(_SB_IMG_PREFIX)) {
    // Strip "https://" for wsrv.nl and apply optimization
    var cleanUrl = url.replace('https://', '');
    return 'https://wsrv.nl/?url=' + cleanUrl + '&output=webp&q=80';
  }
  return url;
}
var _TAG_BADGE = {
  'bestseller': { badge: 'Best Seller', badgeKind: 'gold' },
  'new-arrival': { badge: 'New', badgeKind: 'ink' },
  'featured': { badge: 'Featured', badgeKind: 'gold' },
  'trending': { badge: 'Trending', badgeKind: 'ink' },
  'hot-deal': { badge: 'Hot Deal', badgeKind: 'warm' },
  'popular': { badge: 'Popular', badgeKind: 'gold' }
};

var _CAT_SPLIT = {
  'vases-plants': [
    { key: 'Plant', target: 'artificial-plants', label: 'Artificial Plants' },
    { key: 'Flower', target: 'artificial-flowers', label: 'Artificial Flowers' },
    { key: 'Vase', target: 'vases-decor', label: 'Vases & Décor' }
  ],
  'decor': [
    { key: 'Flower', target: 'artificial-flowers', label: 'Artificial Flowers' },
    { key: 'Fountain', target: 'fountains-pooja', label: 'Fountains & Pooja' },
    { key: 'Pooja', target: 'fountains-pooja', label: 'Fountains & Pooja' },
    { key: 'Statue', target: 'statues-idols', label: 'Statues & Idols' },
    { key: 'Idol', target: 'statues-idols', label: 'Statues & Idols' },
    { key: 'Clock', target: 'clocks', label: 'Clocks' },
    { key: 'Fan', target: 'blower-fans', label: 'Blower Fans' },
    { key: 'Vase', target: 'vases-decor', label: 'Vases & Décor' }
  ],
  'lifestyle-accessories': [
    { key: 'Bag', target: 'bags-accessories', label: 'Bags & Accessories' },
    { key: 'Bottle', target: 'bottles', label: 'Bottles' },
    { key: 'Flask', target: 'bottles', label: 'Bottles' }
  ],
  'wall-decor': [
    { key: 'Statue', target: 'wall-statues', label: 'Wall Statues' },
    { key: 'Mount', target: 'wall-statues', label: 'Wall Statues' },
    { key: 'Frame', target: 'wall-frames', label: 'Wall Frames' }
  ],
  'furniture': [
    { key: '', target: 'chairs-sofas', label: 'Chairs & Sofas' }
  ],
  'gifts': [
    { key: '', target: 'gifts-hampers', label: 'Gifts & Hampers' }
  ],
  'lighting': [
    { key: '', target: 'lighting', label: 'Lighting' }
  ],
  'artificial-plants':  [{ key: '', target: 'artificial-plants',  label: 'Artificial Plants' }],
  'artificial-flowers': [{ key: '', target: 'artificial-flowers', label: 'Artificial Flowers' }],
  'bags-accessories':   [{ key: '', target: 'bags-accessories',   label: 'Bags & Accessories' }],
  'bottles':            [{ key: '', target: 'bottles',            label: 'Bottles' }],
  'vases-decor':        [{ key: '', target: 'vases-decor',        label: 'Vases & Décor' }],
  'fountains-pooja':    [{ key: '', target: 'fountains-pooja',    label: 'Fountains & Pooja' }],
  'gifts-hampers':      [{ key: '', target: 'gifts-hampers',      label: 'Gifts & Hampers' }],
  'chairs-sofas':       [{ key: '', target: 'chairs-sofas',       label: 'Chairs & Sofas' }],
  'clocks':             [{ key: '', target: 'clocks',             label: 'Clocks' }],
  'blower-fans':        [{ key: '', target: 'blower-fans',        label: 'Blower Fans' }],
  'statues-idols':      [{ key: '', target: 'statues-idols',      label: 'Statues & Idols' }],
  'wall-frames':        [{ key: '', target: 'wall-frames',        label: 'Wall Frames' }],
  'wall-statues':       [{ key: '', target: 'wall-statues',       label: 'Wall Statues' }]
};

function normalizeProduct(p) {
  var off = p.compare_at_price && parseFloat(p.compare_at_price) > parseFloat(p.price) ? Math.round((1 - parseFloat(p.price) / parseFloat(p.compare_at_price)) * 100) + '% OFF' : null;
  var badge = null, badgeKind = null;
  if (off) { badge = off; badgeKind = 'warm'; }
  if (Array.isArray(p.tags)) {
    for (var i = 0; i < p.tags.length; i++) {
      var tag = p.tags[i];
      if (_TAG_BADGE[tag]) {
        badge = _TAG_BADGE[tag].badge;
        badgeKind = _TAG_BADGE[tag].badgeKind;
        break;
      }
    }
  }
  var dbCat = p.category || '';
  var name = p.name || '';
  var finalLabel = dbCat;
  var finalId = dbCat;

  if (_CAT_SPLIT[dbCat]) {
    finalLabel = _CAT_SPLIT[dbCat][0].label;
    finalId = _CAT_SPLIT[dbCat][0].target;
    for (var j = 0; j < _CAT_SPLIT[dbCat].length; j++) {
      var rule = _CAT_SPLIT[dbCat][j];
      if (rule.key && name.toLowerCase().indexOf(rule.key.toLowerCase()) !== -1) {
        finalLabel = rule.label;
        finalId = rule.target;
        break;
      }
    }
  }

  return {
    id: p.id,
    name: p.name,
    category: finalLabel,
    categorySlug: finalId,
    price: parseFloat(p.price),
    was: p.compare_at_price ? parseFloat(p.compare_at_price) : null,
    off: off,
    stock: typeof p.stock_quantity === 'number' ? p.stock_quantity : (p.in_stock ? 10 : 0),
    image: cdnImg(p.image_url),
    images: Array.isArray(p.images) && p.images.length ? p.images.map(cdnImg) : (p.image_url ? [cdnImg(p.image_url)] : []),
    badge: badge,
    badgeKind: badgeKind
  };
}

function resetPasswordForEmail(email) {
  var sb = getSB();
  var redirectUrl = window.location.origin + window.location.pathname + '?reset=1';
  return sb.auth.resetPasswordForEmail(email, { redirectTo: redirectUrl }).then(function(res) {
    if (res.error) throw res.error;
    return res;
  });
}

function getMyOrders() {
  var sb = getSB();
  if (!sb) return Promise.resolve([]);
  return sb.auth.getUser().then(function(res) {
    var user = res.data && res.data.user;
    if (!user) return [];
    return sb.from('orders')
      .select('*, order_items(*)')
      .eq('customer_id', user.id)
      .order('created_at', { ascending: false })
      .then(function(r) {
        if (r.error) throw r.error;
        return r.data || [];
      });
  });
}

function getOrderById(orderId) {
  var sb = getSB();
  if (!sb) return Promise.resolve(null);
  return sb.from('orders')
    .select('*, order_items(*)')
    .eq('id', orderId)
    .single()
    .then(function(r) {
      if (r.error) throw r.error;
      return r.data;
    });
}

    function fetchAllProductsFromSupabase() {
  return _fetchAllProductsFromSupabase.apply(this, arguments);
} // ===== Announcement bar =====================================================
function _fetchAllProductsFromSupabase() {
  _fetchAllProductsFromSupabase = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var sb, all, offset, batchSize, _yield$sb$from$select, data, error;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          sb = getSB();
          if (!sb) throw new Error('Supabase client not initialised — window.supabase unavailable');
          all = [], offset = 0, batchSize = 500;
        case 1:
          if (!true) {
            _context.n = 5;
            break;
          }
          _context.n = 2;
          return sb.from('products').select('id,name,category,price,compare_at_price,image_url,images,in_stock,stock_quantity,tags').eq('is_active', true).order('sort_order', {
            ascending: true
          }).order('created_at', {
            ascending: false
          }).range(offset, offset + batchSize - 1);
        case 2:
          _yield$sb$from$select = _context.v;
          data = _yield$sb$from$select.data;
          error = _yield$sb$from$select.error;
          if (!error) {
            _context.n = 3;
            break;
          }
          throw error;
        case 3:
          all = all.concat(data || []);
          if (!(!data || data.length < batchSize)) {
            _context.n = 4;
            break;
          }
          return _context.a(3, 5);
        case 4:
          offset += batchSize;
          _context.n = 1;
          break;
        case 5:
          return _context.a(2, all.map(normalizeProduct));
      }
    }, _callee);
  }));
  return _fetchAllProductsFromSupabase.apply(this, arguments);
}
function Announcement() {
  var MSGS = [{
    icon: 'local_shipping',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Free delivery'), ' across Tamil Nadu — every order, no minimum.')
  }, {
    icon: 'star',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Home d\u00e9cor \u0026 furniture we pick ourselves'), ' \u2014 and stand behind.')
  }, {
    icon: 'storefront',
    text: React.createElement(React.Fragment, null, 'Showroom on ', React.createElement('b', null, 'Junction Road'), " open daily \xB7 10\xA0AM\u2013\u200910\xA0PM")
  }, {
    icon: 'verified',
    text: React.createElement(React.Fragment, null, React.createElement('b', null, 'Every piece hand-checked'), ' at our showroom before it ships.')
  }, {
    icon: 'chat',
    text: React.createElement(React.Fragment, null, "WhatsApp us \u2014 a real person replies within ", React.createElement('b', null, "10\xA0minutes."))
  }];
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    idx = _React$useState2[0],
    setIdx = _React$useState2[1];
  var _React$useState3 = React.useState('in'),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    cls = _React$useState4[0],
    setCls = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    paused = _React$useState6[0],
    setPaused = _React$useState6[1];
  var _React$useState7 = React.useState(''),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    time = _React$useState8[0],
    setTime = _React$useState8[1];

  // Live IST clock
  React.useEffect(function () {
    var tick = function tick() {
      var ist = new Date(new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata'
      }));
      var h = ist.getHours(),
        m = ist.getMinutes();
      var hh = h % 12 || 12;
      var mm = String(m).padStart(2, '0');
      var ampm = h >= 12 ? 'PM' : 'AM';
      var open = h >= 10 && h < 22;
      setTime((open ? 'Open now' : "Opens 10\xA0AM") + " \xB7 " + hh + ':' + mm + "\xA0" + ampm);
    };
    tick();
    var t = setInterval(tick, 30000);
    return function () {
      return clearInterval(t);
    };
  }, []);

  // Auto-rotate with directional slide
  React.useEffect(function () {
    if (paused) return;
    var t = setInterval(function () {
      setCls('out-up');
      setTimeout(function () {
        setIdx(function (x) {
          return (x + 1) % MSGS.length;
        });
        setCls('out-down');
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return setCls('in');
          });
        });
      }, 460);
    }, 4500);
    return function () {
      return clearInterval(t);
    };
  }, [paused, idx]);
  var goTo = function goTo(n) {
    if (n === idx) return;
    setCls('out-up');
    setTimeout(function () {
      setIdx(n);
      setCls('out-down');
      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          return setCls('in');
        });
      });
    }, 400);
  };
  return React.createElement('div', {
    className: 'announce',
    onMouseEnter: function onMouseEnter() {
      return setPaused(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setPaused(false);
    }
  }, React.createElement('div', {
    className: 'container announce-bar'
  },
  // Left — live store status
  React.createElement('span', {
    className: 'announce-side'
  }, React.createElement('span', {
    className: 'material-symbols-outlined'
  }, 'storefront'), time || "Junction Road \xB7 Virudhachalam"),
  // Centre — rotating messages
  React.createElement('span', {
    className: 'announce-center'
  }, MSGS.map(function (m, n) {
    return React.createElement('span', {
      key: n,
      className: 'announce-msg ' + (n === idx ? cls : 'out-down')
    }, React.createElement('span', {
      className: 'material-symbols-outlined'
    }, m.icon), m.text);
  })),
  // Right — progress dots + links
  React.createElement('span', {
    className: 'announce-side announce-side--right'
  }, React.createElement('span', {
    className: 'announce-dots'
  }, MSGS.map(function (_, n) {
    return React.createElement('span', {
      key: n,
      className: 'announce-dot' + (n === idx ? ' active' : ''),
      onClick: function onClick() {
        return goTo(n);
      },
      style: {
        cursor: 'pointer'
      }
    });
  })), React.createElement('span', {
    className: 'announce-divider'
  }), React.createElement('a', {
    href: '#',
    onClick: function onClick(e) {
      e.preventDefault();
      window._kgsAccountTab = 'orders';
      if (window._kgsSetRoute) window._kgsSetRoute('account');
    }
  }, 'Track Order'), React.createElement('span', {
    className: 'announce-divider'
  }), React.createElement('a', {
    href: 'https://wa.me/919789182921',
    target: '_blank',
    rel: 'noreferrer'
  }, 'WhatsApp'))));
}

// ===== Nav ==================================================================
function Nav(_ref5) {
  var route = _ref5.route,
    setRoute = _ref5.setRoute,
    cart = _ref5.cart,
    wishlist = _ref5.wishlist,
    onSearch = _ref5.onSearch;
  var _React$useState9 = React.useState(false),
    _React$useState0 = _slicedToArray(_React$useState9, 2),
    menuOpen = _React$useState0[0],
    setMenuOpen = _React$useState0[1];
  var _React$useState1 = React.useState(false),
    _React$useState10 = _slicedToArray(_React$useState1, 2),
    scrolled = _React$useState10[0],
    setScrolled = _React$useState10[1];
  var _React$useState11 = React.useState(0),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    progress = _React$useState12[0],
    setProgress = _React$useState12[1];
  var lastY = React.useRef(0);
  React.useEffect(function () {
    var ticking = false;
    var onScroll = function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          var y = window.scrollY;
          var docH = document.documentElement.scrollHeight - window.innerHeight;

          // Scrolled pill state (tighten after 80px)
          setScrolled(y > 80);

          // Progress bar 0–100%
          setProgress(docH > 0 ? Math.min(100, y / docH * 100) : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return function () {
      return window.removeEventListener('scroll', onScroll);
    };
  }, []);
  React.useEffect(function () {
    setProgress(0);
  }, [route]);
  // a11y: Escape closes mobile nav; restore focus on close
  React.useEffect(function () {
    if (!menuOpen) return;
    var prevFocus = document.activeElement;
    var onKey = function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    var panel = document.querySelector('.mobile-nav-panel .mobile-nav-close');
    if (panel && panel.focus) try { panel.focus(); } catch (_e) {}
    return function () {
      document.removeEventListener('keydown', onKey);
      if (prevFocus && prevFocus.focus) try { prevFocus.focus(); } catch (_e2) {}
    };
  }, [menuOpen]);
  var link = function link(id, label) {
    return /*#__PURE__*/React.createElement("a", {
      className: 'nav-link' + (route === id ? ' active' : ''),
      onClick: function onClick(e) {
        e.preventDefault();
        setRoute(id);
      },
      href: kgsBuildPath(id)
    }, label);
  };
  var mobileLink = function mobileLink(id, label) {
    return /*#__PURE__*/React.createElement("div", {
      className: 'mobile-nav-link' + (route === id ? ' active' : ''),
      onClick: function onClick() {
        setRoute(id);
        setMenuOpen(false);
      }
    }, label);
  };
  var wrapCls = 'nav-wrap' + (scrolled ? ' nav--scrolled' : '');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: wrapCls
  }, /*#__PURE__*/React.createElement("div", {
    className: "container nav-bar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-progress",
    style: {
      width: progress + '%'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      setRoute('home');
    },
    className: "logo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark"
  }, "KGS"), /*#__PURE__*/React.createElement("span", {
    className: "sub"
  }, "Home D\xE9cors")), /*#__PURE__*/React.createElement("div", {
    className: "nav-links"
  }, link('home', 'Home'), link('shop', 'Shop'), link('about', 'About Us'), link('contact', 'Contact')), /*#__PURE__*/React.createElement("div", {
    className: "nav-actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    'aria-label': "Search",
    onClick: onSearch
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "search")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    'aria-label': "My account",
    onClick: function onClick() {
      return setRoute('account');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "person")), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    'aria-label': "Wishlist",
    onClick: function onClick() {
      return setRoute('wishlist');
    },
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "favorite"), wishlist > 0 && /*#__PURE__*/React.createElement("span", {
    className: "pip"
  }, wishlist)), /*#__PURE__*/React.createElement("button", {
    className: "icon-btn",
    'aria-label': "Cart",
    onClick: function onClick() {
      return setRoute('cart');
    },
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "shopping_bag"), cart > 0 && /*#__PURE__*/React.createElement("span", {
    className: "pip"
  }, cart)), /*#__PURE__*/React.createElement("button", {
    className: "hamburger-btn",
    'aria-label': "Open menu",
    onClick: function onClick() {
      return setMenuOpen(true);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "menu"))))), /*#__PURE__*/React.createElement("div", {
    className: 'mobile-nav' + (menuOpen ? ' open' : ''),
    role: "dialog",
    'aria-modal': "true",
    'aria-label': "Navigation menu"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mobile-nav-overlay",
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "mobile-nav-panel"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mobile-nav-close",
    'aria-label': "Close menu",
    onClick: function onClick() {
      return setMenuOpen(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    'aria-hidden': "true",
    className: "material-symbols-outlined"
  }, "close")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '1.3rem',
      color: '#1A1A1A',
      marginBottom: 8
    }
  }, "KGS Home D\xE9cors"), mobileLink('about', 'About Us'), mobileLink('contact', 'Contact'), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919789182921",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '12px 0',
      color: '#25D366',
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "WhatsApp Us"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      marginTop: 12,
      lineHeight: 1.6
    }
  }, "185/G Junction Rd", /*#__PURE__*/React.createElement("br", null), "Virudhachalam 606001", /*#__PURE__*/React.createElement("br", null), "10 AM \u2013 10 PM, every day")))));
}

// ===== Trust Strip ==========================================================
function TrustStrip() {
  var item = function item(icon, title, sub) {
    return /*#__PURE__*/React.createElement("div", {
      className: "trust-item"
    }, /*#__PURE__*/React.createElement("div", {
      className: "trust-icon"
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined"
    }, icon)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "trust-title"
    }, title), /*#__PURE__*/React.createElement("div", {
      className: "trust-sub"
    }, sub)));
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "trust-strip"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "trust-row"
  }, item('local_shipping', 'Free Delivery', 'Across Tamil Nadu.'), item('verified', 'Hand-Checked', 'We look at every piece before it ships.'), item('payments', 'Pay How You Like', 'UPI, card, or net banking.'), item('chat', 'Text Us Anytime', 'WhatsApp — we reply fast.'))));
}


// ===== Footer ================================================================
function Footer(_ref6) {
  var setRoute = _ref6.setRoute,
    setFilter = _ref6.setFilter;
  var col = function col(title, items) {
    return /*#__PURE__*/React.createElement("div", {
      className: "footer-col"
    }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("ul", null, items.map(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 3),
        label = _ref8[0],
        target = _ref8[1],
        slug = _ref8[2];
      var isHtml = target && target.endsWith('.html');
      return /*#__PURE__*/React.createElement("li", {
        key: label
      }, /*#__PURE__*/React.createElement("a", {
        href: isHtml ? target : (target ? kgsBuildPath(target) : "#"),
        onClick: function onClick(e) {
          if (isHtml) return;
          e.preventDefault();
          if (slug && setFilter) setFilter(slug);
          if (target && setRoute) setRoute(target);
          window.scrollTo(0, 0);
        }
      }, label));
    })));
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      if (setRoute) setRoute('home');
    },
    className: "logo",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "mark",
    style: {
      color: '#fff'
    }
  }, "KGS"), /*#__PURE__*/React.createElement("span", {
    className: "sub",
    style: {
      color: '#C5A880'
    }
  }, "Home D\xE9cors")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'rgba(255,255,255,0.55)',
      maxWidth: 260,
      lineHeight: 1.75
    }
  }, "Home d\xE9cor and furniture, hand-picked on Junction Road and delivered across Tamil Nadu."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'rgba(255,255,255,0.45)',
      marginTop: 10,
      lineHeight: 1.7
    }
  }, "185/G Junction Road", /*#__PURE__*/React.createElement("br", null), "Virudhachalam 606001", /*#__PURE__*/React.createElement("br", null), "Tamil Nadu"), /*#__PURE__*/React.createElement("div", {
    className: "footer-socials"
  },
  /* Instagram */
  /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/kgs_home_decor",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "Instagram"
  }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 24 24", width: 17, height: 17, fill: "currentColor" },
    /*#__PURE__*/React.createElement("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" })
  )),
  /* WhatsApp */
  /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919789182921",
    target: "_blank",
    rel: "noopener noreferrer",
    title: "WhatsApp"
  }, /*#__PURE__*/React.createElement("svg", { viewBox: "0 0 24 24", width: 17, height: 17, fill: "currentColor" },
    /*#__PURE__*/React.createElement("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" })
  )))), col('Shop', [
                ['Artificial Plants',  'shop', 'artificial-plants'],
                ['Artificial Flowers', 'shop', 'artificial-flowers'],
                ['Vases & Décor',      'shop', 'vases-decor'],
                ['Fountains & Pooja',  'shop', 'fountains-pooja'],
                ['Chairs & Sofas',     'shop', 'chairs-sofas'],
                ['Lighting',           'shop', 'lighting'],
                ['Gifts & Hampers',    'shop', 'gifts-hampers'],
                ['Statues & Idols',    'shop', 'statues-idols'],
                ['Wall Frames',        'shop', 'wall-frames'],
                ['Wall Statues',       'shop', 'wall-statues'],
              ]), col('Help', [['Shipping & Delivery', 'shipping'], ['Returns & Refunds', 'returns'], ['FAQ', 'faq'], ['Track Order', 'account-orders'], ['Payment Options', 'payment-options']]), col('Company', [['About Us', 'about'], ['Contact', 'contact']]),  /*#__PURE__*/React.createElement("div", {
    className: "footer-col"
  }, /*#__PURE__*/React.createElement("h4", null, "Talk to Us"), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "mail"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:kgshomedecorsvdm@gmail.com"
  }, "kgshomedecorsvdm@gmail.com")), /*#__PURE__*/React.createElement("li", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "call"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+919789182921"
  }, "+91 97891 82921")), /*#__PURE__*/React.createElement("li", {
    className: "info-line"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "schedule"), "Every day \xB7 10 AM \u2013 10 PM")), /*#__PURE__*/React.createElement("div", {
    className: "footer-pay",
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", null, "VISA"), /*#__PURE__*/React.createElement("span", null, "MC"), /*#__PURE__*/React.createElement("span", null, "UPI"), /*#__PURE__*/React.createElement("span", null, "AMEX")))),

  /*#__PURE__*/React.createElement("div", {
    className: "footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 KGS Home D\xE9cors. All Rights Reserved."), /*#__PURE__*/React.createElement("div", {
    className: "links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#", onClick: function(e) { e.preventDefault(); setRoute('privacy'); }
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#", onClick: function(e) { e.preventDefault(); setRoute('terms'); }
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("a", {
    href: "#", onClick: function(e) { e.preventDefault(); setRoute('shipping'); }
  }, "Shipping Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#", onClick: function(e) { e.preventDefault(); setRoute('returns'); }
  }, "Return Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#", onClick: function(e) { e.preventDefault(); setRoute('cookie-policy'); }
  }, "Cookie Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#", onClick: function(e) { e.preventDefault(); setRoute('disclaimer'); }
  }, "Disclaimer")))));
}

// ===== WhatsApp Float ========================================================
function WAFloat() {
  return /*#__PURE__*/React.createElement("a", {
    className: "wa-float",
    href: "https://wa.me/919789182921",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Chat on WhatsApp"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: { width: 24, height: 24, flexShrink: 0 }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  })), "Chat With Us");
}
Object.assign(window, {
  PRODUCTS: PRODUCTS,
  CATEGORIES: CATEGORIES,
  TESTIMONIALS: TESTIMONIALS,
  IG_TILES: IG_TILES,
  fmtPrice: fmtPrice,
  Announcement: Announcement,
  Nav: Nav,
  TrustStrip: TrustStrip,
  Footer: Footer,
  WAFloat: WAFloat
});

// ===== NEXT SCRIPT BLOCK =====

/* KGS Home Décors — Home page sections */

// ====== HERO ================================================================
function Hero(_ref9) {
  var onShop = _ref9.onShop,
    onSellers = _ref9.onSellers;
  var SLIDES = [{
    img: 'assets/lifestyle/showroom_interior.png',
    eyebrow: 'On Junction Road',
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Real pieces for ", /*#__PURE__*/React.createElement("em", null, "real homes"), ".", /*#__PURE__*/React.createElement("br", null), "Come find yours."),
    sub: 'Furniture, décor and gifts — picked by us, delivered free across Tamil Nadu.'
  }, {
    img: 'assets/lifestyle/premium_decor_bright.webp',
    eyebrow: 'New this week',
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "The piece that", /*#__PURE__*/React.createElement("br", null), "makes the ", /*#__PURE__*/React.createElement("em", null, "room"), "."),
    sub: 'Brass, ceramics, lamps and more — most of it we chose ourselves.'
  }, {
    img: 'assets/lifestyle/room_zen.webp',
    eyebrow: 'Heritage Pieces',
    headline: /*#__PURE__*/React.createElement(React.Fragment, null, "Made the way", /*#__PURE__*/React.createElement("br", null), "things were ", /*#__PURE__*/React.createElement("em", null, "made"), /*#__PURE__*/React.createElement("br", null), "to last."),
    sub: 'Brass. Stone. Slow craft. Every piece hand-checked before it ships.'
  }];
  var _React$useState13 = React.useState(0),
    _React$useState14 = _slicedToArray(_React$useState13, 2),
    i = _React$useState14[0],
    setI = _React$useState14[1];
  var s = SLIDES[i];
  var set = function set(n) {
    return setI((n + SLIDES.length) % SLIDES.length);
  };
  React.useEffect(function () {
    var t = setInterval(function () {
      return setI(function (x) {
        return (x + 1) % SLIDES.length;
      });
    }, 6500);
    return function () {
      return clearInterval(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-slides-indicator"
  }, SLIDES.map(function (_, idx) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: idx
    }, /*#__PURE__*/React.createElement("span", {
      className: idx === i ? 'active' : '',
      onClick: function onClick() {
        return set(idx);
      }
    }, String(idx + 1).padStart(2, '0')), idx < SLIDES.length - 1 && /*#__PURE__*/React.createElement("span", {
      className: "rule"
    }));
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "hero-eyebrow__dot"
  }), s.eyebrow), /*#__PURE__*/React.createElement("h1", null, s.headline), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub"
  }, s.sub), /*#__PURE__*/React.createElement("div", {
    className: "hero-ctas"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onShop
  }, "Browse the Collection", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-ghost",
    onClick: onSellers
  }, "See Best Sellers")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "14"), /*#__PURE__*/React.createElement("span", null, "Categories to browse")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats__divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Handpicked"), /*#__PURE__*/React.createElement("span", null, "D\u00e9cor & furniture")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats__divider"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Free"), /*#__PURE__*/React.createElement("span", null, "Delivery across Tamil Nadu"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-arrows",
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow",
    'aria-label': "Previous",
    style: {
      position: 'static',
      transform: 'none',
      boxShadow: '0 8px 18px -8px rgba(0,0,0,0.18)'
    },
    onClick: function onClick() {
      return set(i - 1);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "arrow_back")), /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow",
    'aria-label': "Next",
    style: {
      position: 'static',
      transform: 'none',
      boxShadow: '0 8px 18px -8px rgba(0,0,0,0.18)'
    },
    onClick: function onClick() {
      return set(i + 1);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "arrow_forward")))), /*#__PURE__*/React.createElement("div", {
    className: "hero-photo"
  }, /*#__PURE__*/React.createElement("img", {
    key: s.img,
    src: s.img,
    alt: "",
    fetchpriority: "high",
    decoding: "async",
    style: {
      animation: 'heroFade 700ms ease'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-floating-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#C5A880',
      fontSize: 20
    }
  }, "verified"), /*#__PURE__*/React.createElement("b", null, "Hand-checked"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5E5B59'
    }
  }, "Every piece, in-store")), /*#__PURE__*/React.createElement("div", {
    className: "hero-delivery-chip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_shipping"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Free across Tamil Nadu"), /*#__PURE__*/React.createElement("span", null, "Same-day local delivery")))));
}

// ====== CATEGORY GRID =======================================================
function CategoryGrid(_ref0) {
  var _onClick = _ref0.onClick;
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Browse"), /*#__PURE__*/React.createElement("h2", null, "What are you looking for?")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      _onClick();
    },
    className: "view-all"
  }, "View All ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward"))), /*#__PURE__*/React.createElement("div", {
    className: "cat-grid"
  }, CATEGORIES.map(function (c) {
    return /*#__PURE__*/React.createElement("div", {
      key: c.id,
      className: "cat-card",
      onClick: function onClick() {
        return _onClick(c.id);
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "cat-frame"
    }, /*#__PURE__*/React.createElement("img", {
      src: c.img,
      alt: c.label,
      loading: "lazy",
      decoding: "async",
      width: 400,
      height: 500
    })), /*#__PURE__*/React.createElement("div", {
      className: "cat-name"
    }, c.label));
  }))));
}

// ====== PRODUCT CARD ========================================================
function ProductCard(_ref1) {
  var p = _ref1.p,
    onAdd = _ref1.onAdd,
    onView = _ref1.onView,
    wishlisted = _ref1.wishlisted,
    onWishToggle = _ref1.onWishToggle;
  return /*#__PURE__*/React.createElement("div", {
    className: "prod-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-img",
    onClick: function onClick(e) {
      if (e.target.closest('.heart-btn')) return;
      onView(p);
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12,
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      zIndex: 3,
      alignItems: 'flex-start'
    }
  }, p.off && /*#__PURE__*/React.createElement("span", {
    className: "prod-off"
  }, p.off), (!p.stock || p.stock <= 0) && /*#__PURE__*/React.createElement("span", {
    className: "prod-off",
    style: { background: '#242424', color: '#fff' }
  }, "Sold Out")), /*#__PURE__*/React.createElement("button", {
    className: 'heart-btn' + (wishlisted ? ' active' : ''),
    onClick: function onClick(e) {
      e.stopPropagation(); e.currentTarget.blur();
      onWishToggle(p.id);
    },
    "aria-label": "Save to wishlist"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontVariationSettings: wishlisted ? "'FILL' 1, 'wght' 300" : "'FILL' 0, 'wght' 300",
      color: wishlisted ? '#C97840' : undefined
    }
  }, "favorite")), /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: p.name,
    loading: "lazy",
    decoding: "async",
    width: 400,
    height: 500
  }), /*#__PURE__*/React.createElement("div", {
    className: "prod-quick",
    onClick: function onClick(e) {
      e.stopPropagation(); e.currentTarget.blur();
      if (window._kgsQuickView) window._kgsQuickView(p);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "visibility"), " Quick View")), /*#__PURE__*/React.createElement("div", {
    className: "prod-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "prod-cat"
  }, p.category), /*#__PURE__*/React.createElement("a", {
    className: "prod-name",
    href: kgsBuildPath('product', p),
    style: { color: 'inherit', textDecoration: 'none', display: 'block' },
    onClick: function onClick(e) {
      e.preventDefault();
      onView(p);
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    className: "prod-price"
  }, /*#__PURE__*/React.createElement("span", {
    className: "now"
  }, fmtPrice(p.price)), p.was && /*#__PURE__*/React.createElement("span", {
    className: "was"
  }, fmtPrice(p.was))), /*#__PURE__*/React.createElement("button", {
    className: "prod-cta",
    disabled: !p.stock || p.stock <= 0,
    style: (!p.stock || p.stock <= 0) ? { opacity: 0.6, cursor: 'not-allowed', pointerEvents: 'none' } : {},
    onClick: function onClick() {
      if (p.stock > 0) return onAdd(p);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, (!p.stock || p.stock <= 0) ? "block" : "shopping_bag"), (!p.stock || p.stock <= 0) ? "Sold Out" : "Add to Cart"));
}

// ====== BEST SELLERS ========================================================
function BestSellers(_ref10) {
  var onAdd = _ref10.onAdd,
    onView = _ref10.onView,
    wishlist = _ref10.wishlist,
    onWishToggle = _ref10.onWishToggle,
    onShop = _ref10.onShop,
    productsReady = _ref10.productsReady,
    productsError = _ref10.productsError;
  var _React$useState15 = React.useState(0),
    _React$useState16 = _slicedToArray(_React$useState15, 2),
    start = _React$useState16[0],
    setStart = _React$useState16[1];
  var pool = React.useMemo(function () {
    // Prefer products tagged 'Best Seller'; fall back to all if < 8
    var tagged = PRODUCTS.filter(function (p) {
      return p.badge === 'Best Seller';
    });
    var base = tagged.length >= 8 ? tagged : _toConsumableArray(PRODUCTS);
    // Fisher-Yates proper shuffle
    var arr = _toConsumableArray(base);
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var _ref11 = [arr[j], arr[i]];
      arr[i] = _ref11[0];
      arr[j] = _ref11[1];
    }
    return arr;
  }, []); // empty deps: component remounts via key when Supabase loads, so shuffle is stable between renders
  if (!productsReady) return /*#__PURE__*/React.createElement("section", { id: "best-sellers", className: "section", style: { background: '#fff' } },
    /*#__PURE__*/React.createElement("div", { className: "container" },
      /*#__PURE__*/React.createElement("div", { style: { display: 'flex', gap: 20 } },
        [1,2,3,4].map(function(i) {
          return /*#__PURE__*/React.createElement("div", { key: i, style: { flex: 1, borderRadius: 16, overflow: 'hidden', background: 'linear-gradient(90deg,#F3EBDC 25%,#FAF6EF 50%,#F3EBDC 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.4s infinite', height: 320 } });
        })
      )
    )
  );
  if (productsError) return /*#__PURE__*/React.createElement("section", { id: "best-sellers", className: "section", style: { background: '#fff' } },
    /*#__PURE__*/React.createElement("div", { className: "container", style: { textAlign: 'center', padding: '40px 0', color: '#5E5B59' } },
      /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: 40, color: '#C5A880', display: 'block', marginBottom: 12 } }, "wifi_off"),
      /*#__PURE__*/React.createElement("p", { style: { fontSize: 15 } }, "Unable to load products. Please refresh the page.")
    )
  );
  var total = pool.length;
  var view = Array.from({
    length: 4
  }, function (_, k) {
    return pool[(start + k) % total];
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "best-sellers",
    className: "section",
    style: {
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "This week"), /*#__PURE__*/React.createElement("h2", null, "What's flying off the shelves")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      if (onShop) onShop();
    },
    className: "view-all"
  }, "View All ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward"))), /*#__PURE__*/React.createElement("div", {
    className: "carousel-wrap"
  }, /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow left",
    onClick: function onClick() {
      return setStart(function (s) {
        return (s - 1 + total) % total;
      });
    },
    "aria-label": "Previous"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chevron_left")), /*#__PURE__*/React.createElement("button", {
    className: "carousel-arrow right",
    onClick: function onClick() {
      return setStart(function (s) {
        return (s + 1) % total;
      });
    },
    "aria-label": "Next"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chevron_right")), /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-track"
  }, view.map(function (p, idx) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id + '-' + idx,
      p: p,
      onAdd: onAdd,
      onView: onView,
      wishlisted: wishlist.map(String).includes(String(p.id)),
      onWishToggle: onWishToggle
    });
  })))));
}

// ====== SHOWROOM VISIT BANNER ================================================
function PromoBanner(_ref12) {
  var onShop = _ref12.onShop;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "promo-banner",
    style: {
      background: 'linear-gradient(135deg, rgba(26,26,26,0.94) 0%, rgba(42,37,34,0.88) 50%, rgba(61,46,31,0.92) 100%), url("assets/lifestyle/showroom.webp") center/cover no-repeat',
      borderRadius: 24,
      padding: '72px 80px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 60,
      flexWrap: 'wrap',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 32px 64px -16px rgba(0, 0, 0, 0.25)',
      border: '1px solid rgba(255,255,255,0.06)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: '-10%',
      top: '-20%',
      width: 500,
      height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(184,150,87,0.18) 0%, transparent 60%)',
      filter: 'blur(40px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-5%',
      bottom: '-15%',
      width: 400,
      height: 400,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(184,150,87,0.12) 0%, transparent 60%)',
      filter: 'blur(30px)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      flex: '1 1 400px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(255,255,255,0.05)',
      backdropFilter: 'blur(12px)',
      borderRadius: 9999,
      padding: '8px 20px',
      marginBottom: 28,
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: 2,
      textTransform: 'uppercase',
      color: '#E8B58A',
      border: '1px solid rgba(255,255,255,0.1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "storefront"), "Showroom Experience"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Crimson Pro', serif",
      fontSize: 'clamp(2.5rem, 4vw, 3rem)',
      fontWeight: 400,
      lineHeight: 1.1,
      color: '#fff',
      marginBottom: 20,
      letterSpacing: '-0.02em'
    }
  }, "Come experience it ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      color: '#C5A880',
      fontStyle: 'italic',
      fontWeight: 300
    }
  }, "in person.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Jost', sans-serif",
      fontSize: 17,
      color: 'rgba(255,255,255,0.75)',
      lineHeight: 1.6,
      maxWidth: 460,
      marginBottom: 0,
      fontWeight: 300,
      letterSpacing: '0.01em'
    }
  }, "Open every day, 10 AM \u2013 10 PM on Junction Road, Virudhachalam.", /*#__PURE__*/React.createElement("br", null), "No appointment needed. Complimentary parking available.")), /*#__PURE__*/React.createElement("div", {
    className: "promo-btn-card",
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      flex: '0 0 auto',
      width: 320,
      background: 'rgba(255,255,255,0.03)',
      padding: '32px',
      borderRadius: 20,
      border: '1px solid rgba(255,255,255,0.08)',
      backdropFilter: 'blur(16px)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://maps.google.com",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-gold",
    style: {
      textDecoration: 'none',
      width: '100%',
      justifyContent: 'center',
      padding: '16px 0',
      fontSize: 14,
      letterSpacing: 0.5
    }
  }, "Get Directions", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "directions")), /*#__PURE__*/React.createElement("a", {
    href: "https://wa.me/919789182921?text=Hello%20KGS%20Home%20D%C3%A9cors,%20I%20would%20like%20to%20know%20more%20about%20your%20products.",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn",
    style: {
      background: 'rgba(255, 255, 255, 0.05)',
      color: '#fff',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      textDecoration: 'none',
      width: '100%',
      justifyContent: 'center',
      padding: '16px 0',
      fontSize: 14,
      letterSpacing: 0.5,
      transition: 'all 0.3s ease'
    },
    onMouseEnter: function onMouseEnter(e) {
      e.currentTarget.style.background = 'rgba(37, 211, 102, 0.15)';
      e.currentTarget.style.borderColor = '#25D366';
      e.currentTarget.style.color = '#25D366';
    },
    onMouseLeave: function onMouseLeave(e) {
      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
      e.currentTarget.style.color = '#fff';
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"
  })), "Chat on WhatsApp"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.7)',
      fontSize: 13,
      marginTop: 4,
      fontWeight: 400,
      fontFamily: "'Jost', sans-serif",
      letterSpacing: 0.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "call"), "+91 97891 82921")))));
}

// ====== TESTIMONIALS ========================================================
function Testimonials(_ref_t) {
  var onViewAll = _ref_t && _ref_t.onViewAll;
  var _React$useState17 = React.useState(false),
    _React$useState18 = _slicedToArray(_React$useState17, 2),
    showReviewModal = _React$useState18[0],
    setShowReviewModal = _React$useState18[1];
  var _revState = React.useState([]),
      displayReviews = _revState[0],
      setDisplayReviews = _revState[1];
  React.useEffect(function() {
    var sb = getSB();
    if (!sb) return;
    sb.from('store_reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .limit(6)
      .then(function(res) {
        if (!res.error && res.data && res.data.length > 0) {
          setDisplayReviews(res.data.map(function(r) {
            return {
              name: r.guest_name || 'Customer',
              initial: (r.guest_name || 'C')[0].toUpperCase(),
              stars: r.rating,
              quote: r.review_text,
              thumb: null
            };
          }));
        }
      });
  }, []);
  var _rn = React.useState(''), reviewName = _rn[0], setReviewName = _rn[1];
  var _rr = React.useState('5'), reviewRating = _rr[0], setReviewRating = _rr[1];
  var _rt = React.useState(''), reviewText = _rt[0], setReviewText = _rt[1];
  var _submitState = React.useState('idle'), submitState = _submitState[0], setSubmitState = _submitState[1];
  var _errMsg = React.useState(''), submitErr = _errMsg[0], setSubmitErr = _errMsg[1];

  var openReviewModal = function openReviewModal() {
    setShowReviewModal(true);
    setReviewName(''); setReviewRating('5'); setReviewText('');
    setSubmitState('idle'); setSubmitErr('');
  };
  var closeReviewModal = function closeReviewModal() {
    setShowReviewModal(false);
  };
  var handleSubmitReview = function handleSubmitReview(e) {
    e.preventDefault();
    if (!reviewName.trim() || !reviewText.trim()) {
      setSubmitErr('Please fill in your name and review.');
      return;
    }
    setSubmitState('loading');
    setSubmitErr('');
    var sb = getSB();
    if (!sb) { setSubmitState('idle'); setSubmitErr('Connection error. Please try again.'); return; }
    sb.from('store_reviews').insert({
      guest_name: reviewName.trim(),
      rating: parseInt(reviewRating) || 5,
      review_text: reviewText.trim(),
      is_approved: false
    }).then(function(res) {
      if (res.error) {
        console.error('[KGS] Review submit error:', res.error.message);
        setSubmitErr('Could not submit. Error: ' + res.error.message);
        setSubmitState('idle');
      } else {
        setSubmitState('success');
        setTimeout(function() { closeReviewModal(); setSubmitState('idle'); }, 2500);
      }
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Customer Stories"), /*#__PURE__*/React.createElement("h2", null, "What people say once they've moved in.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) { e.preventDefault(); openReviewModal(); },
    className: "view-all",
    style: { fontSize: 13 }
  }, "Write a Review ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined", style: { fontSize: 14 }
  }, "edit")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function(e) { e.preventDefault(); if (onViewAll) onViewAll(); },
    className: "view-all",
    style: { fontSize: 13 }
  }, "All Reviews ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined", style: { fontSize: 14 }
  }, "arrow_forward")))), displayReviews.length === 0
    ? /*#__PURE__*/React.createElement("p", { style: { color: '#9E9B98', fontSize: '15px', textAlign: 'center', padding: '40px 0' } }, "Customer reviews are on their way. Check back soon.")
    : /*#__PURE__*/React.createElement("div", {
        className: "testimonials-grid"
      }, displayReviews.map(function (t) {
        return /*#__PURE__*/React.createElement("div", {
          key: t.id || t.name,
          className: "testimonial"
        },
          /*#__PURE__*/React.createElement("div", { className: "quote-mark" }, "“"),
          /*#__PURE__*/React.createElement("div", { className: "quote" }, t.quote),
          /*#__PURE__*/React.createElement("div", { className: "head-row" },
            /*#__PURE__*/React.createElement("div", { className: "avatar" }, t.initial),
            /*#__PURE__*/React.createElement("div", null,
              /*#__PURE__*/React.createElement("div", { className: "name" }, t.name),
              /*#__PURE__*/React.createElement("div", { className: "stars" }, '★'.repeat(t.stars))
            )
          )
        );
      }))), showReviewModal && /*#__PURE__*/ReactDOM.createPortal(
    /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement("style", null, "\n        @keyframes premiumModalIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }\n        .kgs-modal-container { padding: 20px; }\n        .kgs-modal-card { padding: 40px; border-radius: 24px; }\n        .kgs-modal-title { font-size: 36px; }\n        .kgs-modal-close { top: 20px; right: 20px; }\n        @media (max-width: 500px) {\n          .kgs-modal-container { padding: 12px; }\n          .kgs-modal-card { padding: 24px; border-radius: 20px; }\n          .kgs-modal-title { font-size: 28px; }\n          .kgs-modal-close { top: 12px; right: 12px; }\n        }\n      "),
      /*#__PURE__*/React.createElement("div", {
        onClick: function(e){ if(e.target === e.currentTarget) closeReviewModal(); },
        className: "kgs-modal-container",
        style: {
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      },
        /*#__PURE__*/React.createElement("div", {
          className: "kgs-modal-card",
          style: {
            background: '#fff',
            width: '100%',
            maxWidth: '460px',
            position: 'relative',
            boxSizing: 'border-box',
            boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            animation: 'premiumModalIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }
        },
          /*#__PURE__*/React.createElement("button", {
            onClick:function(){ return closeReviewModal(); },
            className: "kgs-modal-close",
            style:{position:'absolute',background:'#F5F5F5',border:'none',cursor:'pointer',color:'#1A1A1A',fontSize:20,width:'36px',height:'36px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',transition:'all 0.2s'}
          }, "\xD7"),
          submitState === 'success'
            ? /*#__PURE__*/React.createElement("div", {style:{textAlign:'center',padding:'20px 0'}},
                /*#__PURE__*/React.createElement("span", {className:"material-symbols-outlined",style:{fontSize:64,color:'#1A1A1A',display:'block',marginBottom:24,fontVariationSettings:"'FILL' 1"}}, "check_circle"),
                /*#__PURE__*/React.createElement("h3", {className: "kgs-modal-title", style:{fontFamily:'"Crimson Pro",serif',marginBottom:12,color:'#1A1A1A'}}, "Review Submitted"),
                /*#__PURE__*/React.createElement("p", {style:{color:'#666',fontSize:16,lineHeight:1.5}}, "Thank you for your feedback! Your review is pending approval and will appear shortly.")
              )
            : /*#__PURE__*/React.createElement(React.Fragment, null,
                /*#__PURE__*/React.createElement("div", {style:{textAlign:'center',marginBottom:24}},
                  /*#__PURE__*/React.createElement("h3", {className: "kgs-modal-title", style:{margin:'0 0 12px 0',fontFamily:'"Crimson Pro",serif',fontWeight:500,color:'#1A1A1A'}}, "Write a Review"),
                  /*#__PURE__*/React.createElement("p", {style:{margin:0,color:'#666',fontSize:15}}, "Your feedback helps us improve and guides other customers.")
                ),
                /*#__PURE__*/React.createElement("form", {
                  onSubmit:handleSubmitReview,
                  style:{display:'flex',flexDirection:'column',gap:16}
                },
                  /*#__PURE__*/React.createElement("input", {type:"text",name:"_hp",style:{display:'none'},tabIndex:-1,autoComplete:'off',"aria-hidden":"true"}),
                  /*#__PURE__*/React.createElement("div", null,
                    /*#__PURE__*/React.createElement("label", {style:{display:'block',fontSize:13,fontWeight:600,letterSpacing:'0.03em',textTransform:'uppercase',marginBottom:8,color:'#444',fontFamily:'"Jost",sans-serif'}}, "Your Name"),
                    /*#__PURE__*/React.createElement("input", {type:"text",required:true,style:{width:'100%',padding:'14px 16px',border:'1px solid #E5E5E5',borderRadius:12,fontFamily:'"Jost",sans-serif',fontSize:15,background:'#F9F9F9',boxSizing:'border-box',outline:'none',transition:'border 0.2s'},placeholder:"Enter your name",name:"guest_name",value:reviewName,onChange:function(e){setReviewName(e.target.value);}})
                  ),
                  /*#__PURE__*/React.createElement("div", null,
                    /*#__PURE__*/React.createElement("label", {style:{display:'block',fontSize:13,fontWeight:600,letterSpacing:'0.03em',textTransform:'uppercase',marginBottom:8,color:'#444',fontFamily:'"Jost",sans-serif'}}, "Rating"),
                    /*#__PURE__*/React.createElement("select", {required:true,name:"rating",value:reviewRating,onChange:function(e){setReviewRating(e.target.value);},style:{width:'100%',padding:'14px 16px',border:'1px solid #E5E5E5',borderRadius:12,fontFamily:'"Jost",sans-serif',fontSize:15,background:'#F9F9F9',boxSizing:'border-box',outline:'none',cursor:'pointer',transition:'border 0.2s'}},
                      /*#__PURE__*/React.createElement("option",{value:"5"},"\u2605\u2605\u2605\u2605\u2605 (5 Stars)"),
                      /*#__PURE__*/React.createElement("option",{value:"4"},"\u2605\u2605\u2605\u2605\u2606 (4 Stars)"),
                      /*#__PURE__*/React.createElement("option",{value:"3"},"\u2605\u2605\u2605\u2606\u2606 (3 Stars)"),
                      /*#__PURE__*/React.createElement("option",{value:"2"},"\u2605\u2605\u2606\u2606\u2606 (2 Stars)"),
                      /*#__PURE__*/React.createElement("option",{value:"1"},"\u2605\u2606\u2606\u2606\u2606 (1 Star)")
                    )
                  ),
                  /*#__PURE__*/React.createElement("div", null,
                    /*#__PURE__*/React.createElement("label", {style:{display:'block',fontSize:13,fontWeight:600,letterSpacing:'0.03em',textTransform:'uppercase',marginBottom:8,color:'#444',fontFamily:'"Jost",sans-serif'}}, "Review"),
                    /*#__PURE__*/React.createElement("textarea", {required:true,rows:"4",style:{width:'100%',padding:'14px 16px',border:'1px solid #E5E5E5',borderRadius:12,fontFamily:'"Jost",sans-serif',fontSize:15,resize:'vertical',background:'#F9F9F9',boxSizing:'border-box',outline:'none',transition:'border 0.2s'},placeholder:"Tell us about your experience...",name:"review_text",value:reviewText,onChange:function(e){setReviewText(e.target.value);}})
                  ),
                  /*#__PURE__*/React.createElement("button", {type:"submit",style:{marginTop:4,width:'100%',padding:'16px',fontSize:15,fontWeight:600,letterSpacing:'0.02em',borderRadius:30,backgroundColor:'#1A1A1A',color:'#fff',border:'none',cursor:'pointer',fontFamily:'"Jost",sans-serif',transition:'background 0.2s'}}, submitState === 'loading' ? 'Submitting...' : 'Submit Review'),
                  submitErr ? /*#__PURE__*/React.createElement("p", {style:{color:'#D32F2F',fontSize:13,textAlign:'center',margin:0}}, submitErr) : null,
                  /*#__PURE__*/React.createElement("p", {style:{fontSize:12,color:'#999',textAlign:'center',marginTop:0}}, "Reviews are submitted to the admin portal for approval.")
                )
              )
        )
      )
    ),
    document.body
  ));
}


// ====== QUICK VIEW MODAL =====================================================
function QuickViewModal(_refQV) {
  var product = _refQV.product,
    onClose = _refQV.onClose,
    onAdd = _refQV.onAdd,
    onView = _refQV.onView;
  var _qvState = React.useState(1),
    _qvArr = _slicedToArray(_qvState, 2),
    qty = _qvArr[0],
    setQty = _qvArr[1];
  var cardRef = React.useRef(null);
  var prevFocus = React.useRef(null);

  React.useEffect(function () {
    if (!product) return;
    setQty(1);
    prevFocus.current = document.activeElement;
    var onKey = function onKey(e) {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    // Focus the modal card on open
    setTimeout(function () {
      if (cardRef.current) cardRef.current.focus();
    }, 0);
    return function () {
      document.removeEventListener('keydown', onKey);
      if (prevFocus.current && prevFocus.current.focus) {
        try { prevFocus.current.focus(); } catch (e) {}
      }
    };
  }, [product]);

  if (!product) return null;
  var p = product;
  var desc = p.description || p.desc || p.details || '';

  var label = {
    display: 'block', fontSize: 11, fontWeight: 700, letterSpacing: '.16em',
    textTransform: 'uppercase', color: '#C97840', fontFamily: '"Jost",sans-serif',
    marginBottom: 8
  };

  return /*#__PURE__*/ReactDOM.createPortal(
    /*#__PURE__*/React.createElement(React.Fragment, null,
      /*#__PURE__*/React.createElement("style", null, "\n        @keyframes premiumModalIn { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }\n        .kgs-qv-card { padding: 0; border-radius: 24px; }\n        .kgs-qv-grid { display: grid; grid-template-columns: 1fr 1fr; }\n        .kgs-qv-img { aspect-ratio: 1/1; }\n        .kgs-qv-pad { padding: 36px 36px 32px; }\n        @media (max-width: 640px) {\n          .kgs-qv-grid { grid-template-columns: 1fr; }\n          .kgs-qv-img { aspect-ratio: 4/3; }\n          .kgs-qv-pad { padding: 22px 22px 26px; }\n          .kgs-qv-card { border-radius: 20px; }\n        }\n      "),
      /*#__PURE__*/React.createElement("div", {
        onClick: function (e) { if (e.target === e.currentTarget) onClose(); },
        className: "kgs-modal-container",
        style: {
          position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
          zIndex: 999999, display: 'flex', alignItems: 'center',
          justifyContent: 'center', padding: 16
        }
      },
        /*#__PURE__*/React.createElement("div", {
          ref: cardRef,
          tabIndex: -1,
          role: "dialog",
          'aria-modal': "true",
          'aria-label': 'Quick view: ' + p.name,
          className: "kgs-qv-card",
          style: {
            background: '#FAF8F4', width: '100%', maxWidth: 760,
            position: 'relative', boxSizing: 'border-box',
            boxShadow: '0 24px 64px rgba(0,0,0,0.2)',
            animation: 'premiumModalIn 0.4s cubic-bezier(0.16,1,0.3,1)',
            maxHeight: '92vh', overflowY: 'auto', outline: 'none'
          }
        },
          /*#__PURE__*/React.createElement("button", {
            onClick: function () { return onClose(); },
            'aria-label': "Close quick view",
            style: { position: 'absolute', top: 16, right: 16, zIndex: 2, background: '#fff', border: 'none', cursor: 'pointer', color: '#1A1A1A', fontSize: 20, width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.12)', transition: 'all 0.2s' }
          }, "\xD7"),
          /*#__PURE__*/React.createElement("div", { className: "kgs-qv-grid" },
            /*#__PURE__*/React.createElement("div", { className: "kgs-qv-img", style: { overflow: 'hidden', background: '#F0ECE4' } },
              /*#__PURE__*/React.createElement("img", { src: p.image, alt: p.name, loading: "eager", decoding: "async", style: { width: '100%', height: '100%', objectFit: 'cover', display: 'block' } })
            ),
            /*#__PURE__*/React.createElement("div", { className: "kgs-qv-pad", style: { display: 'flex', flexDirection: 'column' } },
              p.category && /*#__PURE__*/React.createElement("div", { style: label }, p.category),
              /*#__PURE__*/React.createElement("h3", { style: { margin: '0 0 14px 0', fontFamily: '"Crimson Pro",serif', fontWeight: 500, fontSize: 28, lineHeight: 1.15, color: '#1A1A1A' } }, p.name),
              /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16 } },
                /*#__PURE__*/React.createElement("span", { style: { fontFamily: '"Crimson Pro",serif', fontSize: 26, fontWeight: 600, color: '#1A1A1A' } }, fmtPrice(p.price)),
                p.was && /*#__PURE__*/React.createElement("span", { style: { fontSize: 16, color: '#9E9A96', textDecoration: 'line-through' } }, fmtPrice(p.was))
              ),
              desc ? /*#__PURE__*/React.createElement("p", { style: { margin: '0 0 20px 0', fontSize: 14, lineHeight: 1.7, color: '#5E5B59', fontFamily: '"Jost",sans-serif' } }, desc) : null,
              /*#__PURE__*/React.createElement("div", { style: { fontSize: 12.5, color: '#5E5B59', marginBottom: 20, fontFamily: '"Jost",sans-serif' } }, "All taxes included \xB7 Free delivery across Tamil Nadu"),
              /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', marginBottom: 14 } },
                /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', border: '1px solid rgba(197,168,128,0.45)', borderRadius: 30, background: '#fff' } },
                  /*#__PURE__*/React.createElement("button", { onClick: function () { return setQty(function (q) { return Math.max(1, q - 1); }); }, 'aria-label': "Decrease quantity", style: { width: 40, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 20, color: '#1A1A1A', borderRadius: 30 } }, "−"),
                  /*#__PURE__*/React.createElement("span", { 'aria-live': "polite", style: { minWidth: 28, textAlign: 'center', fontFamily: '"Jost",sans-serif', fontSize: 15, fontWeight: 600, color: '#1A1A1A' } }, qty),
                  /*#__PURE__*/React.createElement("button", { onClick: function () { return setQty(function (q) { return q + 1; }); }, 'aria-label': "Increase quantity", style: { width: 40, height: 44, border: 'none', background: 'transparent', cursor: 'pointer', fontSize: 20, color: '#1A1A1A', borderRadius: 30 } }, "+")
                ),
                /*#__PURE__*/React.createElement("button", {
                  className: "btn btn-dark",
                  onClick: function () { onAdd(p, qty); onClose(); },
                  style: { flex: 1, padding: '14px 22px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }
                },
                  /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined" }, "shopping_bag"),
                  "Add to Cart"
                )
              ),
              /*#__PURE__*/React.createElement("button", {
                onClick: function () { onClose(); onView(p); },
                style: { background: 'none', border: 'none', cursor: 'pointer', color: '#B89657', fontFamily: '"Jost",sans-serif', fontSize: 13.5, fontWeight: 600, letterSpacing: '.02em', padding: '4px 0', textAlign: 'left', alignSelf: 'flex-start' }
              }, "View full details →")
            )
          )
        )
      )
    ),
    document.body
  );
}

// ====== INSTAGRAM ============================================================
function Instagram() {
  return /*#__PURE__*/React.createElement("section", {
    className: "section",
    style: {
      padding: '24px 0 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head",
    style: {
      marginBottom: 0,
      borderBottom: 'none',
      paddingBottom: 0,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Follow Along"), /*#__PURE__*/React.createElement("h2", null, "Follow us @kgs_home_decor"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#5E5B59',
      marginTop: 6
    }
  }, "Real pieces, real rooms, real showroom.")), /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/kgs_home_decor",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "btn btn-cream",
    style: {
      textDecoration: 'none'
    }
  }, "Open Instagram ", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "arrow_forward")))));
}

// ====== SHOWROOM ============================================================
function Showroom() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      borderRadius: 8,
      overflow: 'hidden',
      height: 480,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/lifestyle/showroom.webp",
    alt: "KGS Showroom",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'brightness(0.65)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      color: '#fff',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.24em',
      textTransform: 'uppercase',
      marginBottom: 12,
      color: 'rgba(255,255,255,0.8)'
    }
  }, "Virudhachalam"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      lineHeight: 1.1,
      marginBottom: 16
    }
  }, "Experience it in person."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'rgba(255,255,255,0.85)',
      maxWidth: 400,
      margin: '0 auto',
      lineHeight: 1.6
    }
  }, "Visit our showroom on Junction Road to feel the quality, texture, and scale of our pieces firsthand.")))));
}
Object.assign(window, {
  Hero: Hero,
  CategoryGrid: CategoryGrid,
  BestSellers: BestSellers,
  PromoBanner: PromoBanner,
  Testimonials: Testimonials,
  Instagram: Instagram,
  Showroom: Showroom,
  ProductCard: ProductCard
});

// ===== NEXT SCRIPT BLOCK =====

/* KGS Home Décors — Inner pages: Shop, ProductDetail, Cart, Checkout, OrderConfirmation, Wishlist, About, Contact */

// ===== SHARED SUMLINE =======================================================
function Sumline(_ref13) {
  var label = _ref13.label,
    value = _ref13.value,
    note = _ref13.note,
    bold = _ref13.bold;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      padding: '6px 0'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: bold ? 14 : 13,
      fontWeight: bold ? 600 : 400,
      color: bold ? '#1A1A1A' : '#5E5B59'
    }
  }, label), note && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: '#5E5B59'
    }
  }, note)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: bold ? '"Crimson Pro",serif' : 'Jost,sans-serif',
      fontWeight: 500,
      fontSize: bold ? '1.4rem' : 14,
      color: '#1A1A1A'
    }
  }, value));
}

// ===== SHOP PAGE ============================================================
function ShopPage(_ref14) {
  var filter = _ref14.filter,
    setFilter = _ref14.setFilter,
    onAdd = _ref14.onAdd,
    onView = _ref14.onView,
    wishlist = _ref14.wishlist,
    onWishToggle = _ref14.onWishToggle,
    productsReady = _ref14.productsReady,
    productsError = _ref14.productsError;
  var _React$useState19 = React.useState(1),
    _React$useState20 = _slicedToArray(_React$useState19, 2),
    page = _React$useState20[0],
    setPage = _React$useState20[1];
  var _React$useState21 = React.useState('default'),
    _React$useState22 = _slicedToArray(_React$useState21, 2),
    sort = _React$useState22[0],
    setSort = _React$useState22[1];
  React.useEffect(function () {
    setPage(1);
  }, [filter, sort]);

  // ── Mouse drag-to-scroll for filter pills on desktop ──
  // (Moved to global listener in KGSApp)
  var filtersTrackRef = React.useRef(null);
  var scrollFilters = function(dir) {
    if (filtersTrackRef.current) {
      filtersTrackRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
    }
  };

  if (!productsReady) return /*#__PURE__*/React.createElement("div", { style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, color: '#5E5B59' } },
    /*#__PURE__*/React.createElement("div", { style: { width: 40, height: 40, border: '3px solid rgba(184,150,87,0.2)', borderTopColor: '#B89657', borderRadius: '50%', animation: 'spin 0.8s linear infinite' } }),
    /*#__PURE__*/React.createElement("p", { style: { fontSize: 14, letterSpacing: '.04em' } }, "Loading products…")
  );
  if (productsError) return /*#__PURE__*/React.createElement("div", { style: { minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16, color: '#5E5B59', textAlign: 'center', padding: '0 24px' } },
    /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: 48, color: '#C5A880' } }, "wifi_off"),
    /*#__PURE__*/React.createElement("div", { style: { fontSize: 18, fontFamily: '"Crimson Pro",serif', color: '#1A1A1A' } }, "Products temporarily unavailable"),
    /*#__PURE__*/React.createElement("p", { style: { fontSize: 14, maxWidth: 320 } }, "Unable to load products. Please check your connection and try again."),
    /*#__PURE__*/React.createElement("button", { onClick: function() { window.location.reload(); }, className: "btn btn-dark", style: { marginTop: 8 } }, "Refresh")
  );
  var filtered = React.useMemo(function () {
    var list = filter === 'all' ? _toConsumableArray(PRODUCTS) : PRODUCTS.filter(function (p) {
      return (
        // Match by categorySlug (DB slug) first, then fallback to fuzzy label match
        p.categorySlug && p.categorySlug === filter || p.category.toLowerCase().replace(/[^a-z]/g, '').includes(filter.toLowerCase().replace(/[^a-z]/g, ''))
      );
    });
    if (sort === 'price-asc') list = list.sort(function (a, b) {
      return a.price - b.price;
    });else if (sort === 'price-desc') list = list.sort(function (a, b) {
      return b.price - a.price;
    });else if (sort === 'newest') list = list.filter(function (p) {
      return p.badge === 'New';
    }).concat(list.filter(function (p) {
      return p.badge !== 'New';
    }));else if (sort === 'bestsellers') list = list.filter(function (p) {
      return p.badge === 'Best Seller';
    }).concat(list.filter(function (p) {
      return p.badge !== 'Best Seller';
    }));
    return list;
  }, [filter, sort]);

  // Use DB category slugs from CATEGORIES array (ordered + labeled)
  var cats = ['all'].concat(_toConsumableArray(CATEGORIES.map(function (cat) {
    return cat.id;
  })));
  var ITEMS_PER_PAGE = 12;
  var totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  var paginatedProducts = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Shop"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '56px 0 36px',
      paddingTop: 'calc(56px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "The Collection"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 'clamp(1.6rem, 5vw, 3rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.018em',
      marginBottom: 8
    }
  }, "Our complete collection. ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#B89657',
      fontWeight: 400
    }
  }, "Find the one that's yours.")), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: 560,
      fontSize: 14,
      color: '#5E5B59',
      lineHeight: 1.8
    }
  }, "Everything you see here is in our showroom on Junction Road. Free delivery across Tamil Nadu."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '18px 0',
      borderBottom: '1px solid rgba(197,168,128,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: { display: 'flex', alignItems: 'center', position: 'relative' }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function() { scrollFilters(-1); },
    style: {
      flexShrink: 0, background: '#fff', border: '1px solid rgba(197,168,128,0.25)', 
      borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginRight: 12
    },
    title: "Scroll Left"
  }, /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: 20, color: '#1A1A1A' } }, "chevron_left")),
  /*#__PURE__*/React.createElement("div", {
    className: "shop-filters-track",
    style: { flex: 1 },
    ref: filtersTrackRef
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flexShrink: 0,
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#B89657',
      marginRight: 8
    }
  }, "Explore"), cats.map(function (c) {
    return /*#__PURE__*/React.createElement("button", {
      key: c,
      onClick: function onClick() {
        return setFilter(c);
      },
      style: {
        flexShrink: 0,
        padding: '10px 22px',
        background: filter === c ? '#1A1A1A' : '#FAF8F4',
        color: filter === c ? '#fff' : '#1A1A1A',
        border: '1px solid ' + (filter === c ? '#1A1A1A' : 'rgba(197,168,128,0.25)'),
        borderRadius: 9999,
        fontFamily: 'Jost,sans-serif',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '.15em',
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 300ms ease'
      }
    }, function () {
      if (c === 'all') return 'All (' + PRODUCTS.length + ')';
      var count = PRODUCTS.filter(function (p) {
        return p.categorySlug && p.categorySlug === c || p.category.toLowerCase().replace(/[^a-z]/g, '').includes(c.toLowerCase().replace(/[^a-z]/g, ''));
      }).length;
      var catLabel = CATEGORIES.find(function (cat) {
        return cat.id === c;
      });
      var displayLabel = catLabel ? catLabel.label : c.replace(/-/g, ' ').replace(/\b\w/g, function(ch) { return ch.toUpperCase(); });
      return displayLabel + (count ? ' (' + count + ')' : '');
    }());
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function() { scrollFilters(1); },
    style: {
      flexShrink: 0, background: '#fff', border: '1px solid rgba(197,168,128,0.25)', 
      borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
      cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', marginLeft: 12
    },
    title: "Scroll Right"
  }, /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: 20, color: '#1A1A1A' } }, "chevron_right")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '40px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 24,
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: '#5E5B59'
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1A1A1A'
    }
  }, filtered.length), " products", filter !== 'all' && /*#__PURE__*/React.createElement("span", null, " in ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#B89657'
    }
  }, filter))), /*#__PURE__*/React.createElement("select", {
    className: "sort-select",
    value: sort,
    onChange: function onChange(e) {
      return setSort(e.target.value);
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "default"
  }, "Sort: Featured"), /*#__PURE__*/React.createElement("option", {
    value: "bestsellers"
  }, "Best Sellers"), /*#__PURE__*/React.createElement("option", {
    value: "newest"
  }, "Newest First"), /*#__PURE__*/React.createElement("option", {
    value: "price-asc"
  }, "Price: Low to High"), /*#__PURE__*/React.createElement("option", {
    value: "price-desc"
  }, "Price: High to Low"))), filtered.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '60px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 44,
      color: '#C5A880'
    }
  }, "search_off"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 12,
      fontSize: '1.3rem'
    }
  }, "Nothing here for that filter."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 20
    }
  }, "Try a different category or browse everything."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: function onClick() {
      return setFilter('all');
    }
  }, "Show All")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "shop-grid"
  }, paginatedProducts.map(function (p) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: p.id,
      p: p,
      onAdd: onAdd,
      onView: onView,
      wishlisted: wishlist.map(String).includes(String(p.id)),
      onWishToggle: onWishToggle
    });
  })), totalPages > 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 8,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPage(function (p) {
        return Math.max(1, p - 1);
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    disabled: page === 1,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid rgba(197,168,128,0.4)',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: page === 1 ? 'not-allowed' : 'pointer',
      opacity: page === 1 ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "chevron_left")), Array.from({
    length: totalPages
  }, function (_, i) {
    return i + 1;
  }).map(function (num) {
    if (num === 1 || num === totalPages || num >= page - 1 && num <= page + 1) {
      return /*#__PURE__*/React.createElement("button", {
        key: num,
        onClick: function onClick() {
          setPage(num);
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        },
        style: {
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: 'none',
          background: page === num ? '#1A1A1A' : 'transparent',
          color: page === num ? '#fff' : '#1A1A1A',
          fontFamily: 'Jost,sans-serif',
          fontSize: 14,
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 200ms'
        }
      }, num);
    }
    if (num === page - 2 || num === page + 2) {
      return /*#__PURE__*/React.createElement("span", {
        key: num,
        style: {
          color: '#5E5B59',
          padding: '0 4px'
        }
      }, "...");
    }
    return null;
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      setPage(function (p) {
        return Math.min(totalPages, p + 1);
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    disabled: page === totalPages,
    style: {
      width: 40,
      height: 40,
      borderRadius: '50%',
      border: '1px solid rgba(197,168,128,0.4)',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: page === totalPages ? 'not-allowed' : 'pointer',
      opacity: page === totalPages ? 0.4 : 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "chevron_right")))))));
}

// ===== PRODUCT DETAIL =======================================================
function ProductDetail(_ref15) {
  var p = _ref15.p,
    _onAdd = _ref15.onAdd,
    onBack = _ref15.onBack,
    onView = _ref15.onView,
    wishlist = _ref15.wishlist,
    onWishToggle = _ref15.onWishToggle;
  var _React$useState23 = React.useState(1),
    _React$useState24 = _slicedToArray(_React$useState23, 2),
    qty = _React$useState24[0],
    setQty = _React$useState24[1];
  var _React$useState25 = React.useState(0),
    _React$useState26 = _slicedToArray(_React$useState25, 2),
    activeImg = _React$useState26[0],
    setActiveImg = _React$useState26[1];
  if (!p) return null;
  // Gallery: use p.images array if available, otherwise just the single image
  var gallery = Array.isArray(p.images) && p.images.length > 1 ? p.images : [p.image].filter(Boolean);
  var FREE_OVER = 5000;
  var lineTotal = p.price * qty;
  var toFree = Math.max(0, FREE_OVER - lineTotal);
  // Dynamic "You might also like" — same category, shuffled, with fallback
  var moreFromUs = React.useMemo(function () {
    // 1. Same category, exclude current product
    var sameCategory = PRODUCTS.filter(function (x) {
      return x.id !== p.id && (
        (x.categorySlug && p.categorySlug && x.categorySlug === p.categorySlug) ||
        x.category === p.category
      );
    });
    // 2. Fisher-Yates shuffle
    var shuffled = sameCategory.slice();
    for (var i = shuffled.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = shuffled[i]; shuffled[i] = shuffled[j]; shuffled[j] = tmp;
    }
    // 3. Take up to 2 from same category to guarantee variety
    var result = shuffled.slice(0, 2);
    
    // 4. Fill the rest (up to 4) from other categories
    var others = PRODUCTS.filter(function (x) {
      return x.id !== p.id && !result.some(function (r) { return r.id === x.id; });
    });
    for (var k = others.length - 1; k > 0; k--) {
      var jj = Math.floor(Math.random() * (k + 1));
      var t = others[k]; others[k] = others[jj]; others[jj] = t;
    }
    result = result.concat(others.slice(0, 4 - result.length));
    
    // 5. Shuffle the final 4 so the same-category items aren't always first
    for (var m = result.length - 1; m > 0; m--) {
      var n = Math.floor(Math.random() * (m + 1));
      var tmp2 = result[m]; result[m] = result[n]; result[n] = tmp2;
    }
    return result;
  }, [p.id]);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": 'Product / ' + p.name
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '18px 0',
      borderBottom: '1px solid rgba(197,168,128,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function onClick(e) {
      e.preventDefault();
      onBack();
    },
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#5E5B59',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_back"), "Back to Shop"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '56px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container pdp-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F3EBDC',
      border: '1px solid rgba(197,168,128,0.30)',
      borderRadius: 18,
      padding: 48,
      aspectRatio: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, p.off && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 18,
      left: 18,
      background: '#C97840',
      color: '#fff',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '.16em',
      padding: '6px 12px',
      borderRadius: 9999,
      textTransform: 'uppercase'
    }
  }, p.off), /*#__PURE__*/React.createElement("img", {
    src: gallery[activeImg],
    alt: p.name,
    style: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
      transition: 'opacity 220ms ease'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 10,
      marginTop: 14
    }
  }, gallery.map(function (src, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: idx,
      onClick: function onClick() {
        return setActiveImg(idx);
      },
      style: {
        aspectRatio: 1,
        background: '#F3EBDC',
        borderRadius: 10,
        overflow: 'hidden',
        border: idx === activeImg ? '2px solid #1A1A1A' : '1px solid rgba(197,168,128,0.30)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        transition: 'border-color 160ms ease'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: src,
      alt: "",
      loading: "lazy",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    }));
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#B89657',
      marginBottom: 12
    }
  }, p.category), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.4rem',
      lineHeight: 1.05,
      letterSpacing: '-0.018em',
      marginBottom: 16
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#1A1A1A',
      padding: '6px 14px',
      border: '1px solid rgba(26,26,26,0.16)',
      borderRadius: 9999
    }
  }, p.badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 14,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.6rem',
      letterSpacing: '-0.01em'
    }
  }, fmtPrice(p.price)), p.was && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: '#5E5B59',
      textDecoration: 'line-through'
    }
  }, fmtPrice(p.was)), p.was && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11.5,
      color: '#C97840',
      fontWeight: 700,
      letterSpacing: '.14em',
      textTransform: 'uppercase'
    }
  }, "Save ", fmtPrice(p.was - p.price))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#5E5B59',
      marginBottom: 22
    }
  }, "All taxes included \xB7 Free delivery"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 28,
      fontSize: 14.5,
      lineHeight: 1.8,
      color: '#5E5B59'
    }
  }, "Every product in our collection is hand-selected and imported. For a closer look, a live product demonstration, or a video call walkthrough \u2014 WhatsApp us and we'll guide you personally."), /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_shipping"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Free delivery"), /*#__PURE__*/React.createElement("span", null, "Across Tamil Nadu"))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "verified_user"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Hand-checked"), /*#__PURE__*/React.createElement("span", null, "Inspected at our showroom"))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-trust__item"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "Secure checkout"), /*#__PURE__*/React.createElement("span", null, "UPI \xB7 Cards")))),
/*#__PURE__*/React.createElement("div", {
  style: { marginTop: 28 }
},
/*#__PURE__*/React.createElement("div", {
  style: { display: 'flex', gap: 12, marginBottom: 14 }
},
/*#__PURE__*/React.createElement("div", {
  style: { display: 'flex', alignItems: 'center', background: '#FAF6EF', border: '1.5px solid rgba(197,168,128,0.35)', borderRadius: 14, flexShrink: 0 }
},
/*#__PURE__*/React.createElement("button", {
  onClick: function onClick() { return setQty(Math.max(1, qty - 1)); },
  style: { width: 48, height: 56, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#7A6340', fontWeight: 300, lineHeight: 1 }
}, "\u2212"),
/*#__PURE__*/React.createElement("span", {
  style: { width: 34, textAlign: 'center', fontWeight: 700, fontSize: 16, color: '#1A1A1A', fontFamily: "'Jost',sans-serif" }
}, qty),
/*#__PURE__*/React.createElement("button", {
  onClick: function onClick() { return setQty(qty + 1); },
  style: { width: 48, height: 56, background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#7A6340', fontWeight: 300, lineHeight: 1 }
}, "+")),
/*#__PURE__*/React.createElement("button", {
  disabled: !p.stock || p.stock <= 0,
  style: Object.assign({ flex: 1, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: 'linear-gradient(135deg, #C9A96E 0%, #B89657 55%, #9A7A3E 100%)', color: '#fff', border: 'none', borderRadius: 14, fontSize: 14, fontWeight: 700, fontFamily: "'Jost',sans-serif", letterSpacing: '.03em', cursor: 'pointer', boxShadow: '0 8px 28px -8px rgba(184,150,87,0.75)', transition: 'all 240ms cubic-bezier(0.25,1,0.5,1)' }, (!p.stock || p.stock <= 0) ? { opacity: 0.6, cursor: 'not-allowed', filter: 'grayscale(1)' } : {}),
  onClick: function onClick() { if (p.stock > 0) return _onAdd(p, qty); }
},
/*#__PURE__*/React.createElement("span", {
  className: "material-symbols-outlined",
  style: { fontSize: 18 }
}, (!p.stock || p.stock <= 0) ? "block" : "shopping_bag"), (!p.stock || p.stock <= 0) ? "Sold Out" : ("Add to Cart \xB7 " + fmtPrice(lineTotal)))),
/*#__PURE__*/React.createElement("button", {
  disabled: !p.stock || p.stock <= 0,
  onClick: function onClick() { if (p.stock > 0) { _onAdd(p, qty); window._kgsSetRoute('checkout'); } },
  style: Object.assign({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: '#14110C', color: '#EDE3D4', border: 'none', borderRadius: 14, fontSize: 13.5, fontWeight: 600, fontFamily: "'Jost',sans-serif", letterSpacing: '.10em', textTransform: 'uppercase', cursor: 'pointer', padding: '16px 24px', marginBottom: 12, boxShadow: '0 6px 24px -8px rgba(20,17,12,0.55)', transition: 'all 240ms cubic-bezier(0.25,1,0.5,1)' }, (!p.stock || p.stock <= 0) ? { opacity: 0.6, cursor: 'not-allowed' } : {})
},
/*#__PURE__*/React.createElement("span", {
  className: "material-symbols-outlined",
  style: { fontSize: 18 }
}, "north_east"), "Buy Now"),
/*#__PURE__*/React.createElement("button", {
  style: { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, background: '#25D366', color: '#fff', border: 'none', borderRadius: 14, cursor: 'pointer', padding: '14px 24px', boxShadow: '0 6px 24px -6px rgba(37,211,102,0.55)', transition: 'all 240ms cubic-bezier(0.25,1,0.5,1)' },
  onClick: function onClick() { return window.open('https://wa.me/919789182921?text=' + encodeURIComponent('Hi! I want more details about: ' + p.name), '_blank'); }
},
/*#__PURE__*/React.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "22", height: "22", fill: "#fff", style: { flexShrink: 0 }
}, /*#__PURE__*/React.createElement("path", {
  d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
})),
/*#__PURE__*/React.createElement("div", { style: { textAlign: 'left' } },
/*#__PURE__*/React.createElement("div", { style: { fontSize: 15, fontWeight: 700, fontFamily: "'Jost',sans-serif", letterSpacing: '.02em', lineHeight: 1.2 } }, "WhatsApp Us for More Details"),
/*#__PURE__*/React.createElement("div", { style: { fontSize: 11.5, fontWeight: 400, fontFamily: "'Jost',sans-serif", opacity: 0.7, marginTop: 2 } }, "We reply within 10 minutes")))))))
, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '64px 0 80px',
      borderTop: '1px solid rgba(197,168,128,0.20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "label-tag"
  }, "Goes Well With"), /*#__PURE__*/React.createElement("h2", null, "You might also like"))), /*#__PURE__*/React.createElement("div", {
    className: "best-sellers-track"
  }, moreFromUs.map(function (rp) {
    return /*#__PURE__*/React.createElement(ProductCard, {
      key: rp.id,
      p: rp,
      onAdd: function onAdd(prod) {
        return _onAdd(prod, 1);
      },
      onView: onView || function() {},
      wishlisted: wishlist && wishlist.map(String).includes(String(rp.id)),
      onWishToggle: onWishToggle
    });
  })))), /*#__PURE__*/React.createElement("div", {
    className: "pdp-sticky"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container pdp-sticky-inner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.image,
    alt: "",
    style: {
      width: 44,
      height: 44,
      borderRadius: 8,
      objectFit: 'cover',
      background: '#F3EBDC'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 15,
      color: '#1A1A1A',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, p.name))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 22,
      color: '#1A1A1A',
      lineHeight: 1
    }
  }, fmtPrice(lineTotal)), p.was && qty === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      textDecoration: 'line-through'
    }
  }, fmtPrice(p.was))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: '1px solid rgba(26,26,26,0.16)',
      borderRadius: 9999
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(Math.max(1, qty - 1));
    },
    style: {
      width: 34,
      height: 40,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      textAlign: 'center',
      fontSize: 13,
      fontWeight: 500
    }
  }, qty), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setQty(qty + 1);
    },
    style: {
      width: 34,
      height: 40,
      background: 'none',
      border: 'none',
      cursor: 'pointer'
    }
  }, "+")), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: function onClick() {
      return _onAdd(p, qty);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "shopping_bag"), "Add to Cart")))));
}

// ===== CART PAGE ============================================================
function CartPage(_ref16) {
  var cart = _ref16.cart,
    onChangeQty = _ref16.onChangeQty,
    onRemove = _ref16.onRemove,
    onCheckout = _ref16.onCheckout,
    onBack = _ref16.onBack,
    onTerms = _ref16.onTerms,
    onReturns = _ref16.onReturns;
  var items = cart.map(function (ci) {
    return _objectSpread(_objectSpread({}, ci), {}, {
      product: PRODUCTS.find(function (p) {
        return p.id === ci.id;
      })
    });
  }).filter(function (ci) {
    return ci.product;
  });
  var subtotal = items.reduce(function (s, ci) {
    return s + ci.product.price * ci.qty;
  }, 0);
  var total = subtotal;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Cart"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.6rem',
      letterSpacing: '-0.015em'
    }
  }, "Your Cart"), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, items.length === 0 ? 'Nothing in here yet.' : items.length + ' item' + (items.length > 1 ? 's' : '') + ' · ' + fmtPrice(subtotal) + ' subtotal'))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '48px 0 96px'
    },
    className: items.length > 0 ? 'cart-section-bottom' : ''
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 48,
      color: '#C5A880'
    }
  }, "shopping_bag"), /*#__PURE__*/React.createElement("h3", {
    style: {
      marginTop: 12,
      fontSize: '1.4rem'
    }
  }, "Your cart is empty."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 24
    }
  }, "Browse the collection and pick a few things you like."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onBack
  }, "Go to Shop")) : /*#__PURE__*/React.createElement("div", {
    className: "cart-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 14,
      overflow: 'hidden'
    }
  }, items.map(function (ci, idx) {
    return /*#__PURE__*/React.createElement("div", {
      key: ci.id,
      className: "cart-item-row",
      style: {
        borderBottom: idx < items.length - 1 ? '1px solid rgba(197,168,128,0.20)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 104,
        height: 104,
        background: '#F3EBDC',
        borderRadius: 10,
        overflow: 'hidden',
        padding: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ci.product.image,
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 9.5,
        fontWeight: 600,
        color: '#B89657',
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        marginBottom: 4
      }
    }, ci.product.category), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 17,
        color: '#1A1A1A',
        marginBottom: 8
      }
    }, ci.product.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: '#5E5B59',
        marginBottom: 10,
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        fontSize: 14,
        color: '#25D366'
      }
    }, "check_circle"), "In stock \xB7 ships within 24 hours"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(26,26,26,0.16)',
        borderRadius: 9999
      }
    }, /*#__PURE__*/React.createElement("button", {
      'aria-label': "Decrease quantity",
      onClick: function onClick() {
        return onChangeQty(ci.id, Math.max(1, ci.qty - 1));
      },
      style: {
        minWidth: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }, "\u2212"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        textAlign: 'center',
        fontSize: 12.5,
        fontWeight: 500
      }
    }, ci.qty), /*#__PURE__*/React.createElement("button", {
      'aria-label': "Increase quantity",
      onClick: function onClick() {
        return onChangeQty(ci.id, ci.qty + 1);
      },
      style: {
        minWidth: 44,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }
    }, "+")), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onRemove(ci.id);
      },
      style: {
        minHeight: 44,
        padding: '0 8px',
        background: 'none',
        border: 'none',
        color: '#5E5B59',
        fontSize: 10,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        fontWeight: 600,
        cursor: 'pointer'
      }
    }, "Remove"))), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 20
      }
    }, fmtPrice(ci.product.price * ci.qty)), ci.product.was && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#5E5B59',
        textDecoration: 'line-through'
      }
    }, fmtPrice(ci.product.was * ci.qty))));
  })), /*#__PURE__*/React.createElement("div", {
    className: "cart-badges"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Secure checkout"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "verified_user"), "Hand-checked"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "payments"), "UPI \xB7 Cards"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 14,
      padding: 26,
      position: 'sticky',
      top: 96
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 18
    }
  }, "Order Summary"), /*#__PURE__*/React.createElement(Sumline, {
    label: "Subtotal",
    value: fmtPrice(subtotal)
  }), /*#__PURE__*/React.createElement(Sumline, {
    label: "Delivery",
    value: 'Free',
    note: 'Across Tamil Nadu'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#F3EBDC',
      borderRadius: 10,
      padding: 12,
      marginTop: 12,
      fontSize: 12,
      color: '#5E5B59',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#B89657',
      fontSize: 18
    }
  }, "schedule"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: '#1A1A1A'
    }
  }, "2\u20134 days"), " across Tamil Nadu. Same-day delivery in Virudhachalam.")), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(197,168,128,0.30)',
      marginTop: 14,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement(Sumline, {
    label: "Total",
    value: fmtPrice(total),
    bold: true
  })), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    style: {
      width: '100%',
      marginTop: 20
    },
    onClick: onCheckout
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Proceed to Checkout"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#5E5B59',
      textAlign: 'center',
      marginTop: 12
    }
  }, "By placing the order you agree to our", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function(e) { e.preventDefault(); if(onTerms) onTerms(); },
    style: {
      color: '#1A1A1A',
      textDecoration: 'underline'
    }
  }, "Terms"), ' ', "and", ' ', /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: function(e) { e.preventDefault(); if(onReturns) onReturns(); },
    style: {
      color: '#1A1A1A',
      textDecoration: 'underline'
    }
  }, "Return Policy"), "."))))), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta__info"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta__label"
  }, "Total"), /*#__PURE__*/React.createElement("div", {
    className: "cart-mobile-cta__total"
  }, fmtPrice(total))), /*#__PURE__*/React.createElement("button", {
    className: "cart-mobile-cta__btn",
    onClick: onCheckout
  }, "Checkout", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_forward"))));
}

// ===== CHECKOUT PAGE ========================================================
function CheckoutPage(_ref17) {
  var cart = _ref17.cart,
    onPlaceOrder = _ref17.onPlaceOrder,
    onBack = _ref17.onBack,
    user = _ref17.user;
  var items = cart.map(function (ci) {
    return _objectSpread(_objectSpread({}, ci), {}, {
      product: PRODUCTS.find(function (p) {
        return p.id === ci.id;
      })
    });
  }).filter(function (ci) {
    return ci.product;
  });
  var subtotal = items.reduce(function (s, ci) {
    return s + ci.product.price * ci.qty;
  }, 0);
  // Pre-fill from saved default address in user_metadata
  var _defaultAddr = (user && user.user_metadata && user.user_metadata.addresses && user.user_metadata.addresses.find(function(a) { return a.is_default; })) || (user && user.user_metadata && user.user_metadata.addresses && user.user_metadata.addresses[0]) || null;
  var _React$useState27 = React.useState({
      name: (_defaultAddr && _defaultAddr.full_name) || '',
      phone: (_defaultAddr && _defaultAddr.phone) || '',
      address: _defaultAddr ? (_defaultAddr.line1 + (_defaultAddr.line2 ? ', ' + _defaultAddr.line2 : '')) : '',
      city: (_defaultAddr && _defaultAddr.city) || '',
      state: (_defaultAddr && _defaultAddr.state) || 'Tamil Nadu',
      pincode: (_defaultAddr && _defaultAddr.pincode) || '',
      saveAddress: true
    }),
    _React$useState28 = _slicedToArray(_React$useState27, 2),
    form = _React$useState28[0],
    setForm = _React$useState28[1];
  var _React$useState31 = React.useState({}),
    _React$useState32 = _slicedToArray(_React$useState31, 2),
    errors = _React$useState32[0],
    setErrors = _React$useState32[1];
  var _React$useState33 = React.useState(false),
    _React$useState34 = _slicedToArray(_React$useState33, 2),
    processing = _React$useState34[0],
    setProcessing = _React$useState34[1];

  // Tamil Nadu only — delivery is always free.
  var isFreeDelivery = true;
  var delivery = 0;
  var total = subtotal + (delivery || 0);

  var update = function update(k, v) {
    return setForm(function (f) {
      return _objectSpread(_objectSpread({}, f), {}, _defineProperty({}, k, v));
    });
  };
  var validate = function validate() {
    var e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim()) {
      e.phone = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      e.phone = 'Enter a valid 10-digit Indian mobile number';
    }
    if (!form.address.trim()) e.address = 'Delivery address is required';
    if (!form.city.trim()) e.city = 'City is required';
    if (!form.pincode.trim()) {
      e.pincode = 'PIN code is required';
    } else if (!/^\d{6}$/.test(form.pincode.trim())) {
      e.pincode = 'Enter a valid 6-digit PIN code';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  var handleSubmit = function handleSubmit(ev) {
    ev.preventDefault();
    if (processing) return;
    if (validate()) onPlaceOrder(form, delivery, setProcessing);
  };
  var inputStyle = function inputStyle(k) {
    return {
      padding: '12px 18px',
      fontFamily: 'Jost,sans-serif',
      fontSize: 14,
      color: '#1A1A1A',
      background: errors[k] ? 'rgba(192,57,43,0.04)' : '#FAFAF8',
      border: '1px solid ' + (errors[k] ? '#C0392B' : 'rgba(197,168,128,0.35)'),
      borderRadius: 10,
      outline: 'none',
      width: '100%',
      transition: 'border-color 200ms'
    };
  };
  var errMsg = function errMsg(k) {
    return errors[k] ? React.createElement('span', {
      style: {
        fontSize: 11,
        color: '#C0392B',
        marginTop: 4,
        display: 'block',
        letterSpacing: '.02em'
      }
    }, errors[k]) : null;
  };
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Checkout"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '36px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#5E5B59',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 16
    }
  }, "arrow_back"), "Back to Cart"), /*#__PURE__*/React.createElement("div", {
    className: "checkout-steps",
    style: {
      maxWidth: 400
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__dot done"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 15
    }
  }, "check")), /*#__PURE__*/React.createElement("span", {
    className: "checkout-step__label"
  }, "Cart")), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__line done"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__dot active"
  }, "2"), /*#__PURE__*/React.createElement("span", {
    className: "checkout-step__label active"
  }, "Delivery")), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__line"
  }), /*#__PURE__*/React.createElement("div", {
    className: "checkout-step"
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-step__dot pending"
  }, "3"), /*#__PURE__*/React.createElement("span", {
    className: "checkout-step__label"
  }, "Payment"))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: 'clamp(1.8rem,4vw,2.6rem)',
      letterSpacing: '-0.015em',
      marginTop: 16
    }
  }, "Almost there."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 6,
      fontSize: 14
    }
  }, "Fill in your address and pick how you'd like to pay."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '48px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    className: "checkout-wrap"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "checkout-form-section",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h3", null, "Delivery details"), 
  (user && user.user_metadata && user.user_metadata.addresses && user.user_metadata.addresses.length > 0) && /*#__PURE__*/React.createElement("div", {
    style: { display: 'flex', gap: '12px', overflowX: 'auto', marginBottom: '20px', paddingBottom: '4px', msOverflowStyle: 'none', scrollbarWidth: 'none' }
  }, user.user_metadata.addresses.map(function(addr) {
    var isSelected = form.address && form.address.includes(addr.line1);
    return /*#__PURE__*/React.createElement("div", {
      key: addr.id,
      onClick: function() {
        setForm({
          name: addr.full_name || '',
          phone: addr.phone || '',
          address: addr.line1 + (addr.line2 ? ', ' + addr.line2 : ''),
          city: addr.city || '',
          state: addr.state || 'Tamil Nadu',
          pincode: addr.pincode || ''
        });
        setErrors({});
      },
      style: {
        minWidth: '160px',
        padding: '12px 16px',
        border: '1px solid ' + (isSelected ? '#B89657' : 'rgba(26,26,26,0.12)'),
        background: isSelected ? 'rgba(184,150,87,0.04)' : '#fff',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        position: 'relative'
      }
    }, 
      /*#__PURE__*/React.createElement("div", { style: { fontSize: '13px', fontWeight: 600, marginBottom: '2px', color: isSelected ? '#1A1A1A' : '#5E5B59' } }, addr.label || 'Saved Address'),
      /*#__PURE__*/React.createElement("div", { style: { fontSize: '12px', color: '#9E9B98', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' } }, addr.line1),
      isSelected && /*#__PURE__*/React.createElement("span", {
        className: "material-symbols-outlined",
        style: { position: 'absolute', top: '12px', right: '12px', fontSize: '16px', color: '#B89657', fontVariationSettings: '"FILL" 1' }
      }, "check_circle")
    );
  })),
  /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "Full name"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    "aria-invalid": !!errors.name,
    style: inputStyle('name'),
    placeholder: "Your full name",
    value: form.name,
    onChange: function onChange(e) {
      return update('name', e.target.value);
    }
  }), errors.name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.name)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "Phone (WhatsApp)"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('phone'),
    placeholder: "Enter your phone number",
    type: "tel",
    value: form.phone,
    onChange: function onChange(e) {
      return update('phone', e.target.value);
    }
  }), errors.phone && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.phone)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "Address line 1"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('address'),
    placeholder: "Door no., Street name",
    value: form.address,
    onChange: function onChange(e) {
      return update('address', e.target.value);
    }
  }), errors.address && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.address)), /*#__PURE__*/React.createElement("div", {
    className: "form-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "City"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('city'),
    placeholder: "Your city",
    value: form.city,
    onChange: function onChange(e) {
      return update('city', e.target.value);
    }
  }), errors.city && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.city)), /*#__PURE__*/React.createElement("div", {
    className: "form-field"
  }, /*#__PURE__*/React.createElement("label", null, "State"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: _objectSpread(_objectSpread({}, inputStyle('state')), {}, {
      background: 'rgba(197,168,128,0.10)',
      color: '#1A1A1A',
      cursor: 'not-allowed'
    }),
    value: "Tamil Nadu",
    readOnly: true,
    "aria-readonly": "true",
    title: "We deliver only within Tamil Nadu"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 4,
      fontSize: 11,
      color: '#5E5B59'
    }
  }, "For other states, contact us through WhatsApp."))), /*#__PURE__*/React.createElement("div", {
    className: "form-field",
    style: {
      maxWidth: 200
    }
  }, /*#__PURE__*/React.createElement("label", null, "Pincode"), /*#__PURE__*/React.createElement("input", {
    className: "form-input",
    style: inputStyle('pincode'),
    placeholder: "6-digit pincode",
    maxLength: 6,
    value: form.pincode,
    onChange: function onChange(e) {
      return update('pincode', e.target.value);
    }
  }), errors.pincode && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: '#C0392B'
    }
  }, errors.pincode)), /*#__PURE__*/React.createElement("div", {
    className: "form-group",
    style: { display: 'flex', alignItems: 'center', marginTop: '16px', gap: '8px' }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    id: "saveAddressCheck",
    checked: form.saveAddress !== false,
    onChange: function(e) { return update('saveAddress', e.target.checked); },
    style: { accentColor: 'var(--gold)', width: '16px', height: '16px', cursor: 'pointer' }
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "saveAddressCheck",
    style: { margin: 0, cursor: 'pointer', fontSize: '14px', color: 'var(--text)' }
  }, "Save this address for future orders")))), /*#__PURE__*/React.createElement("div", {
    className: "checkout-summary"
  }, /*#__PURE__*/React.createElement("h3", null, "Your order"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 18
    }
  }, items.map(function (ci) {
    return /*#__PURE__*/React.createElement("div", {
      key: ci.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        background: '#F3EBDC',
        borderRadius: 8,
        overflow: 'hidden',
        flexShrink: 0,
        padding: 6,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ci.product.image,
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#1A1A1A',
        lineHeight: 1.25,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, ci.product.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: '#5E5B59',
        marginTop: 2
      }
    }, "Qty: ", ci.qty)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 15,
        color: '#1A1A1A',
        flexShrink: 0
      }
    }, fmtPrice(ci.product.price * ci.qty)));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(197,168,128,0.25)',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement(Sumline, {
    label: "Subtotal",
    value: fmtPrice(subtotal)
  }), /*#__PURE__*/React.createElement(Sumline, {
    label: "Delivery",
    value: 'FREE',
    note: 'Free delivery across Tamil Nadu'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(197,168,128,0.25)',
      marginTop: 10,
      paddingTop: 10
    }
  }, /*#__PURE__*/React.createElement(Sumline, {
    label: "Total",
    value: fmtPrice(total),
    bold: true
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-dark",
    disabled: processing,
    style: {
      width: '100%',
      marginTop: 20,
      padding: '16px 26px',
      opacity: processing ? 0.7 : 1,
      cursor: processing ? 'not-allowed' : 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), processing ? 'Processing...' : 'Pay ' + fmtPrice(total)), /*#__PURE__*/React.createElement("div", {
    className: "checkout-trust"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "lock"), "Secure payment", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(26,26,26,0.20)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "local_shipping"), "Across Tamil Nadu", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(26,26,26,0.20)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "verified"), "Hand-checked")))))));
}

// ===== ORDER CONFIRMATION ===================================================
function OrderConfirmationPage(_ref18) {
  var cart = _ref18.cart,
    onKeepShopping = _ref18.onKeepShopping,
    orderNumber = _ref18.orderNumber;
  var orderNum = orderNumber || 'KGS-' + Math.floor(10000 + Math.random() * 90000);
  var items = cart.map(function (ci) {
    return _objectSpread(_objectSpread({}, ci), {}, {
      product: PRODUCTS.find(function (p) {
        return p.id === ci.id;
      })
    });
  }).filter(function (ci) {
    return ci.product;
  });
  var total = items.reduce(function (s, ci) {
    return s + ci.product.price * ci.qty;
  }, 0);
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Order Confirmation"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '64px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "order-confirm-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined order-confirm-icon",
    style: {
      fontVariationSettings: '"FILL" 1, "wght" 300'
    }
  }, "check_circle"), /*#__PURE__*/React.createElement("h1", null, "Your order is placed."), /*#__PURE__*/React.createElement("div", {
    className: "order-num"
  }, "Order #", orderNum), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#5E5B59',
      lineHeight: 1.85,
      maxWidth: 500,
      margin: '0 auto 28px'
    }
  }, "We'll WhatsApp you the tracking link. It usually ships within 24 hours \u2014 if there's any delay, we'll let you know first."), items.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid rgba(197,168,128,0.25)',
      borderRadius: 16,
      padding: 24,
      maxWidth: 500,
      margin: '0 auto 32px',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#8E7449',
      marginBottom: 16
    }
  }, "What you ordered"), items.map(function (ci) {
    return /*#__PURE__*/React.createElement("div", {
      key: ci.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        paddingBottom: 12,
        borderBottom: '1px solid rgba(197,168,128,0.15)',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 46,
        height: 46,
        background: '#F3EBDC',
        borderRadius: 8,
        overflow: 'hidden',
        flexShrink: 0,
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: ci.product.image,
      alt: "",
      style: {
        maxWidth: '100%',
        maxHeight: '100%',
        objectFit: 'contain'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#1A1A1A'
      }
    }, ci.product.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11.5,
        color: '#5E5B59'
      }
    }, "Qty: ", ci.qty)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: 14,
        color: '#1A1A1A'
      }
    }, fmtPrice(ci.product.price * ci.qty)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 13
    }
  }, "Total paid"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '1.2rem'
    }
  }, fmtPrice(total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onKeepShopping
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "storefront"), "Keep Shopping"), /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    style: {
      background: '#25D366',
      borderColor: '#25D366',
      color: '#fff',
      textDecoration: 'none'
    },
    href: 'https://wa.me/919789182921?text=Hi, my order number is ' + orderNum + '. Can I get a tracking update?'
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "WhatsApp to Track"))))));
}

// ===== WISHLIST PAGE ========================================================
function WishlistPage(_ref19) {
  var wishlist = _ref19.wishlist,
    onAdd = _ref19.onAdd,
    onView = _ref19.onView,
    onWishToggle = _ref19.onWishToggle,
    onShop = _ref19.onShop;
  var items = PRODUCTS.filter(function (p) {
    return wishlist.map(String).includes(String(p.id));
  });
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Wishlist"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '56px 0 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.28em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "Saved Items"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.8rem',
      lineHeight: 1.05,
      letterSpacing: '-0.018em'
    }
  }, "Things you saved."), items.length > 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: 8
    }
  }, items.length, " item", items.length !== 1 ? 's' : '', " saved"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '48px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, items.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "wishlist-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "favorite"), /*#__PURE__*/React.createElement("h3", null, "Nothing saved yet."), /*#__PURE__*/React.createElement("p", null, "Browse the collection and tap the heart on anything you like. It'll show up here."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onShop
  }, "Browse the Collection")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "wishlist-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 20
    }
  }, items.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(ProductCard, {
      p: p,
      onAdd: onAdd,
      onView: onView,
      wishlisted: wishlist.map(String).includes(String(p.id)),
      onWishToggle: onWishToggle
    }));
  }))))));
}

// ===== ALL REVIEWS PAGE =====================================================
function AllReviewsPage(_ref_ar) {
  var onBack = _ref_ar.onBack;
  var _rev = React.useState([]), reviews = _rev[0], setReviews = _rev[1];
  var _load = React.useState(true), loading = _load[0], setLoading = _load[1];

  React.useEffect(function() {
    var sb = getSB();
    if (!sb) { setLoading(false); return; }
    sb.from('store_reviews')
      .select('*')
      .eq('is_approved', true)
      .order('created_at', { ascending: false })
      .then(function(res) {
        if (!res.error && res.data) setReviews(res.data);
        setLoading(false);
      }).catch(function() { setLoading(false); });
  }, []);

  return /*#__PURE__*/React.createElement("div", { className: "section container", style: { minHeight: '60vh', padding: '48px 20px' } },
    /*#__PURE__*/React.createElement("button", {
      onClick: onBack,
      className: "btn btn-ghost",
      style: { marginBottom: 32, display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13 }
    }, /*#__PURE__*/React.createElement("span", { className: "material-symbols-outlined", style: { fontSize: 16 } }, "arrow_back"), "Back"),
    /*#__PURE__*/React.createElement("div", { className: "section-head", style: { marginBottom: 36 } },
      /*#__PURE__*/React.createElement("div", null,
        /*#__PURE__*/React.createElement("div", { className: "label-tag" }, "Customer Stories"),
        /*#__PURE__*/React.createElement("h2", null, "All Reviews")
      )
    ),
    loading
      ? /*#__PURE__*/React.createElement("div", { style: { textAlign: 'center', color: '#5E5B59', padding: '60px 0' } }, "Loading reviews…")
      : reviews.length === 0
        ? /*#__PURE__*/React.createElement("div", { style: { textAlign: 'center', color: '#5E5B59', padding: '60px 0' } }, "No reviews yet. Be the first to write one!")
        : /*#__PURE__*/React.createElement("div", { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 } },
            reviews.map(function(r) {
              return /*#__PURE__*/React.createElement("div", {
                key: r.id,
                style: { background: '#fff', borderRadius: 18, padding: 28, boxShadow: '0 8px 24px -8px rgba(60,40,15,0.10)' }
              },
                /*#__PURE__*/React.createElement("div", { style: { fontFamily: '"Crimson Pro",serif', fontSize: 48, lineHeight: 1, color: '#C5A880', opacity: 0.5, marginBottom: 8 } }, "“"),
                /*#__PURE__*/React.createElement("div", { style: { fontFamily: '"Crimson Pro",serif', fontStyle: 'italic', fontSize: 17, lineHeight: 1.65, color: '#1A1A1A', marginBottom: 16 } }, r.review_text),
                /*#__PURE__*/React.createElement("div", { style: { display: 'flex', alignItems: 'center', gap: 10, paddingTop: 14, borderTop: '1px solid rgba(197,168,128,0.25)' } },
                  /*#__PURE__*/React.createElement("div", { style: { width: 34, height: 34, borderRadius: '50%', background: '#E8D9BE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: '"Crimson Pro",serif', fontWeight: 500, color: '#6B4F1F', fontSize: 15 } }, (r.guest_name || 'C')[0].toUpperCase()),
                  /*#__PURE__*/React.createElement("div", null,
                    /*#__PURE__*/React.createElement("div", { style: { fontWeight: 600, fontSize: 12.5, color: '#1A1A1A' } }, r.guest_name || 'Customer'),
                    /*#__PURE__*/React.createElement("div", { style: { color: '#B89657', fontSize: 10, letterSpacing: '.16em', marginTop: 2 } }, '★'.repeat(r.rating || 5))
                  )
                )
              );
            })
          )
  );
}

// ===== ABOUT PAGE ===========================================================
function AboutPage(_ref20) {
  var onShop = _ref20.onShop;
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("section", {
    className: "about-hero-section",
    style: {
      background: '#F2E8D6',
      padding: '80px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 720,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 16
    }
  }, "Virudhachalam \xB7 Junction Road"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '3rem',
      lineHeight: 1.08,
      letterSpacing: '-0.018em',
      marginBottom: 20
    }
  }, "Good things for the home,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#B89657',
      fontWeight: 400
    }
  }, "right here in town.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "KGS Home D\xE9cors started with one small shop on Junction Road and a simple idea — sell the kind of furniture and d\xE9cor we'd actually want in our own homes, and treat people the way we'd want to be treated."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container about-story-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-story-img",
    style: {
      aspectRatio: '4/5',
      overflow: 'hidden',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/lifestyle/showroom_interior.webp",
    alt: "KGS showroom interior",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.22em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "Our Story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.3rem',
      lineHeight: 1.1,
      marginBottom: 22
    }
  }, "Built on Junction Road.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: '#B89657',
      fontWeight: 400
    }
  }, "Here every day.")), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 16,
      fontSize: 14.5,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "When we started, we had a small space and a few hundred pieces. We'd travel to pick things ourselves \u2014 Rajasthan for brass, Pune for ceramics, local artisans for handmade pieces. If we wouldn't put it in our own home, we didn't stock it."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 16,
      fontSize: 14.5,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "We have 500+ pieces on the floor at any time, a team that genuinely loves what we sell, and customers who keep coming back. We deliver across Tamil Nadu, and we still answer the WhatsApp ourselves."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 28,
      fontSize: 14.5,
      lineHeight: 1.85,
      color: '#5E5B59'
    }
  }, "If you're ever in Virudhachalam, come in. We're open every day from 10 to 10. No appointment needed."), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-dark",
    onClick: onShop
  }, "Browse the Collection", /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "arrow_forward"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "about-stats-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 28
    }
  }, [{
    num: '500+',
    label: 'Pieces in stock',
    sub: 'Every single one checked before it goes on the floor.'
  }, {
    num: 'Loved',
    label: 'By families in Virudhachalam',
    sub: 'And we reply to every review we get.'
  }, {
    num: '100%',
    label: 'Hand-Checked Quality',
    sub: 'Every piece inspected at our showroom before it reaches you.'
  }, {
    num: 'Free',
    label: 'Delivery across Tamil Nadu',
    sub: 'Every order, no minimum.'
  }].map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.num,
      className: "about-stat-card",
      style: {
        background: 'rgba(255,255,255,0.75)',
        borderRadius: 18,
        padding: '32px 28px',
        border: '1px solid rgba(197,168,128,0.30)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: '"Crimson Pro",serif',
        fontWeight: 500,
        fontSize: '2.4rem',
        color: '#1A1A1A',
        marginBottom: 6
      }
    }, card.num), /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 600,
        fontSize: 13,
        color: '#1A1A1A',
        marginBottom: 6
      }
    }, card.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12.5,
        color: '#5E5B59',
        lineHeight: 1.65
      }
    }, card.sub));
  })))));
}

// ===== CONTACT PAGE =========================================================
function ContactPage() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Contact"
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#F2E8D6',
      padding: '72px 0',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container",
    style: {
      maxWidth: 680,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 600,
      letterSpacing: '.26em',
      textTransform: 'uppercase',
      color: '#7A5C1E',
      marginBottom: 14
    }
  }, "Say Hello"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontWeight: 500,
      fontSize: '2.8rem',
      letterSpacing: '-0.015em',
      marginBottom: 16
    }
  }, "Talk to us like a neighbour."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: '#5E5B59',
      lineHeight: 1.8
    }
  }, "No bots. No ticket numbers. We're in the shop every day \u2014 WhatsApp us, call us, or drop in."))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#FAF8F4',
      padding: '56px 0 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "container contact-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: '"Crimson Pro",serif',
      fontSize: 24,
      marginBottom: 8
    }
  }, "Reach us directly"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: '#5E5B59',
      lineHeight: 1.7,
      marginBottom: 24
    }
  }, "Call, WhatsApp, or email \u2014 whichever suits you. We answer personally, every day."),
  /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    icon: 'call',
    eyebrow: 'Call us',
    primary: '+91 97891 82921',
    href: 'tel:+919789182921'
  }, {
    icon: 'mail',
    eyebrow: 'Email',
    primary: 'kgshomedecorsvdm@gmail.com',
    href: 'mailto:kgshomedecorsvdm@gmail.com'
  }].map(function (row) {
    return /*#__PURE__*/React.createElement("a", {
      key: row.eyebrow,
      href: row.href,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        padding: '16px 20px',
        background: '#fff',
        border: '1px solid rgba(197,168,128,0.3)',
        borderRadius: 14,
        textDecoration: 'none',
        color: 'inherit'
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: '#C5A880',
        fontSize: 24,
        flexShrink: 0
      }
    }, row.icon), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '.2em',
        textTransform: 'uppercase',
        color: '#5E5B59',
        marginBottom: 3
      }
    }, row.eyebrow), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 16,
        color: '#1A1A1A',
        fontWeight: 500
      }
    }, row.primary)));
  })),
  /*#__PURE__*/React.createElement("a", {
    className: "btn btn-gold",
    style: {
      background: '#25D366',
      borderColor: '#25D366',
      color: '#fff',
      textDecoration: 'none',
      marginTop: 18,
      width: '100%',
      justifyContent: 'center'
    },
    href: "https://wa.me/919789182921"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined"
  }, "chat"), "Chat on WhatsApp"),
  /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 22,
      borderTop: '1px solid rgba(197,168,128,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: '#C5A880',
      fontSize: 24,
      flexShrink: 0,
      marginTop: 2
    }
  }, "location_on"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10.5,
      fontWeight: 700,
      letterSpacing: '.2em',
      textTransform: 'uppercase',
      color: '#5E5B59',
      marginBottom: 5
    }
  }, "Visit the showroom"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      color: '#1A1A1A',
      lineHeight: 1.7
    }
  }, "185/G, Junction Road, near EB Office,", /*#__PURE__*/React.createElement("br", null), "Virudhachalam, Tamil Nadu \u2013 606 001"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent('185/G, Junction Road, near EB Office, Virudhachalam, Tamil Nadu \u2013 606 001'),
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 10,
      fontSize: 13,
      fontWeight: 600,
      color: '#C97840',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 18
    }
  }, "directions"), "Get directions"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [{
    icon: 'schedule',
    title: 'Open daily',
    body: 'Every day · 10:00 AM – 10:00 PM. Free parking out front.'
  }, {
    icon: 'local_shipping',
    title: 'Free delivery',
    body: 'Free delivery across Tamil Nadu — every order, no minimum.'
  }, {
    icon: 'verified',
    title: 'Hand-checked',
    body: 'Every piece inspected at our showroom before it leaves.'
  }].map(function (card) {
    return /*#__PURE__*/React.createElement("div", {
      key: card.title,
      style: {
        display: 'flex',
        gap: 16,
        padding: '18px 20px',
        background: '#fff',
        border: '1px solid rgba(197,168,128,0.25)',
        borderRadius: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined",
      style: {
        color: '#C5A880',
        fontSize: 22,
        flexShrink: 0,
        marginTop: 2
      }
    }, card.icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 10.5,
        fontWeight: 700,
        letterSpacing: '.18em',
        textTransform: 'uppercase',
        color: '#1A1A1A',
        marginBottom: 5
      }
    }, card.title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13.5,
        color: '#5E5B59',
        lineHeight: 1.65
      }
    }, card.body)));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 220,
      background: 'url(assets/lifestyle/showroom_interior.webp) center/cover',
      borderRadius: 14
    }
  })))));
}
Object.assign(window, {
  ShopPage: ShopPage,
  ProductDetail: ProductDetail,
  CartPage: CartPage,
  CheckoutPage: CheckoutPage,
  OrderConfirmationPage: OrderConfirmationPage,
  WishlistPage: WishlistPage,
  AboutPage: AboutPage,
  ContactPage: ContactPage,
  Sumline: Sumline
});

// ===== SEARCH DRAWER ========================================================
function SearchDrawer(_ref21) {
  var open = _ref21.open,
    onClose = _ref21.onClose,
    onView = _ref21.onView;
  var _React$useState37 = React.useState(''),
    _React$useState38 = _slicedToArray(_React$useState37, 2),
    query = _React$useState38[0],
    setQuery = _React$useState38[1];
  var inputRef = React.useRef(null);
  React.useEffect(function () {
    if (open) {
      setQuery('');
      setTimeout(function () {
        return inputRef.current && inputRef.current.focus();
      }, 360);
      var scrollY = window.scrollY;
      document.body.style.top = '-' + scrollY + 'px';
      document.body.classList.add('search-open');
      if (window._lenis) window._lenis.stop();
    } else {
      var scrollY = parseFloat(document.body.style.top || '0') * -1;
      document.body.classList.remove('search-open');
      document.body.style.top = '';
      if (window._lenis) window._lenis.start();
      if (scrollY) window.scrollTo(0, scrollY);
    }
    // a11y: global Escape closes the search overlay while open
    var onKey = null;
    if (open) {
      onKey = function onKey(e) {
        if (e.key === 'Escape') onClose();
      };
      document.addEventListener('keydown', onKey);
    }
    return function () {
      document.body.classList.remove('search-open');
      document.body.style.top = '';
      if (window._lenis) window._lenis.start();
      if (onKey) document.removeEventListener('keydown', onKey);
    };
  }, [open]);
  var results = React.useMemo(function () {
    if (!query.trim()) return [];
    var q = query.toLowerCase();
    return PRODUCTS.filter(function (p) {
      return p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.categorySlug && p.categorySlug.includes(q);
    }).slice(0, 12);
  }, [query]);

  // Popular tags = actual category labels from DB
  var popular = CATEGORIES.length > 0 ? CATEGORIES.map(function (cat) {
    return cat.label;
  }) : ['Wall Décor', 'Décor', 'Vases', 'Furniture', 'Gifts', 'Lighting'];
  return /*#__PURE__*/React.createElement("div", {
    className: 'search-overlay' + (open ? ' open' : ''),
    role: "dialog",
    'aria-modal': "true",
    'aria-label': "Search products"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-overlay__bg",
    onClick: onClose
  }), /*#__PURE__*/React.createElement("div", {
    className: "search-panel", "data-lenis-prevent": "true"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true"
  }, "search"), /*#__PURE__*/React.createElement("input", {
    ref: inputRef,
    className: "search-input",
    'aria-label': "Search products, categories",
    placeholder: "Search products, categories\u2026",
    value: query,
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    onKeyDown: function onKeyDown(e) {
      return e.key === 'Escape' && onClose();
    }
  }), query && /*#__PURE__*/React.createElement("button", {
    className: "search-clear",
    'aria-label': "Clear search",
    onClick: function onClick() {
      return setQuery('');
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    'aria-hidden': "true",
    style: {
      fontSize: 18
    }
  }, "close")), /*#__PURE__*/React.createElement("button", { className: "search-clear", 'aria-label': "Close search", onClick: onClose, style: { marginLeft: "4px" } }, /*#__PURE__*/React.createElement("span", { style: { fontSize: "12px", fontWeight: 600, color: "#5E5B59" } }, "Cancel"))), query.trim() === '' ? /*#__PURE__*/React.createElement("div", {
    className: "search-popular"
  }, /*#__PURE__*/React.createElement("div", {
    className: "search-popular__label"
  }, "Popular Searches"), /*#__PURE__*/React.createElement("div", {
    className: "search-popular__tags"
  }, popular.map(function (tag) {
    return /*#__PURE__*/React.createElement("button", {
      key: tag,
      className: "search-tag",
      onClick: function onClick() {
        return setQuery(tag);
      }
    }, tag);
  }))) : results.length === 0 ? /*#__PURE__*/React.createElement("div", {
    className: "search-empty"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      fontSize: 36,
      color: '#C5A880',
      display: 'block',
      marginBottom: 10
    }
  }, "search_off"), "No results for \"", /*#__PURE__*/React.createElement("b", null, query), "\"", /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 12.5,
      color: '#8E7449'
    }
  }, "Try a different keyword or browse categories")) : /*#__PURE__*/React.createElement("div", {
    className: "search-results", "data-lenis-prevent": "true", onWheel: function(e){ e.stopPropagation(); e.currentTarget.blur(); }, onTouchStart: function(e){ e.stopPropagation(); e.currentTarget.blur(); }, onTouchMove: function(e){ e.stopPropagation(); e.currentTarget.blur(); }
  }, results.map(function (p) {
    return /*#__PURE__*/React.createElement("div", {
      key: p.id,
      className: "search-result-item",
      onClick: function onClick() {
        onView(p);
        onClose();
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "search-result-img"
    }, /*#__PURE__*/React.createElement("img", {
      src: p.image,
      alt: p.name,
      loading: "lazy"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "search-result-cat"
    }, p.category), /*#__PURE__*/React.createElement("div", {
      className: "search-result-name"
    }, p.name)), /*#__PURE__*/React.createElement("div", {
      className: "search-result-price"
    }, fmtPrice(p.price)));
  })))));
}

// ===== MOBILE BOTTOM NAVIGATION =============================================
function MobileBottomNav(_ref22) {
  var route = _ref22.route,
    setRoute = _ref22.setRoute,
    cartCount = _ref22.cartCount,
    wishlistCount = _ref22.wishlistCount,
    onSearch = _ref22.onSearch;
  var items = [{
    id: 'home',    icon: 'home',          label: 'Home'
  }, {
    id: 'search',  icon: 'search',        label: 'Search'
  }, {
    id: 'shop',    icon: 'storefront',    label: 'Shop'
  }, {
    id: 'wishlist',icon: 'favorite',      label: 'Wishlist'
  }, {
    id: 'cart',    icon: 'shopping_bag',  label: 'Cart'
  }, {
    id: 'account', icon: 'person',        label: 'Account'
  }];
  return /*#__PURE__*/React.createElement("nav", {
    className: "mobile-bottom-nav",
    "aria-label": "Main navigation"
  }, items.map(function (it) {
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      className: 'mobile-bottom-nav__item' + (route === it.id ? ' active' : ''),
      onClick: function onClick() {
        return it.id === 'search' ? onSearch() : setRoute(it.id);
      },
      "aria-label": it.label
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-symbols-outlined"
    }, it.icon),
    it.id === 'cart' && cartCount > 0 && /*#__PURE__*/React.createElement("span", {
      className: "mobile-bottom-nav__pip"
    }, cartCount > 9 ? '9+' : cartCount),
    it.id === 'wishlist' && wishlistCount > 0 && /*#__PURE__*/React.createElement("span", {
      className: "mobile-bottom-nav__pip"
    }, wishlistCount > 9 ? '9+' : wishlistCount),
    /*#__PURE__*/React.createElement("span", null, it.label));
  }));
}
Object.assign(window, {
  SearchDrawer: SearchDrawer,
  MobileBottomNav: MobileBottomNav
});

// ===== NEXT SCRIPT BLOCK =====

/* KGS Home Décors — App root: routing + global state */

function Toast(_ref23) {
  var msg = _ref23.msg,
    show = _ref23.show,
    icon = _ref23.icon,
    iconColor = _ref23.iconColor,
    iconFill = _ref23.iconFill;
  return /*#__PURE__*/React.createElement("div", {
    className: 'toast ' + (show ? 'toast--in' : 'toast--out')
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-symbols-outlined",
    style: {
      color: iconColor || '#25D366',
      fontVariationSettings: '"FILL" ' + (iconFill !== undefined ? iconFill : 1)
    }
  }, icon || "check_circle"), /*#__PURE__*/React.createElement("span", null, msg));
}
/* ============================================================================
   SEO ROUTING + METADATA  (History API, canonical URLs, per-route meta, JSON-LD)
   ========================================================================== */
var KGS_BASE = 'https://www.kgshomedecors.com';
var KGS_DEFAULT_IMG = KGS_BASE + '/assets/images/icon-512.png';

// route -> static path (product handled separately)
var KGS_ROUTE_PATH = {
  home: '/',
  shop: '/shop',
  cart: '/cart',
  checkout: '/checkout',
  'order-confirmation': '/order-confirmation',
  wishlist: '/wishlist',
  account: '/account',
  login: '/login',
  register: '/register',
  reviews: '/reviews',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
  returns: '/returns',
  shipping: '/shipping'
};
// path (first segment) -> route, for parsing the URL on load / popstate
var KGS_PATH_ROUTE = (function () {
  var m = {};
  Object.keys(KGS_ROUTE_PATH).forEach(function (r) {
    m[KGS_ROUTE_PATH[r]] = r;
  });
  return m;
})();

var KGS_UUID_RE = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/i;

function kgsSlugify(str) {
  return String(str || '')
    .toLowerCase()
    .normalize('NFKD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 70);
}

// Build the URL path for a route (+ optional product object)
function kgsBuildPath(route, product) {
  if (route === 'product' && product && product.id) {
    var s = kgsSlugify(product.name);
    return '/product/' + (s ? s + '-' + product.id : product.id);
  }
  if (KGS_ROUTE_PATH.hasOwnProperty(route)) return KGS_ROUTE_PATH[route];
  return '/';
}

// Extract a product id from a /product/<slug-or-id> segment
function kgsProductIdFromSeg(seg) {
  if (!seg) return null;
  var dec = '';
  try { dec = decodeURIComponent(seg); } catch (e) { dec = seg; }
  var m = dec.match(KGS_UUID_RE);
  if (m) return m[0];
  return dec; // fallback: whole segment is the id
}

// Parse location.pathname -> { route, productId }
function kgsParsePath(pathname) {
  var path = (pathname || '/').replace(/\/+$/, '') || '/';
  if (path.indexOf('/product/') === 0 || path === '/product') {
    var seg = path.slice('/product/'.length);
    return { route: 'product', productId: kgsProductIdFromSeg(seg) };
  }
  if (KGS_PATH_ROUTE.hasOwnProperty(path)) {
    return { route: KGS_PATH_ROUTE[path], productId: null };
  }
  // unknown path -> home (no blank screen)
  return { route: 'home', productId: null };
}

// --- per-route metadata ----------------------------------------------------
function kgsSetMeta(selector, attr, attrName, value, content) {
  var el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, attrName);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
  return el;
}
function kgsSetLink(rel, href) {
  var el = document.head.querySelector('link[rel="' + rel + '"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  return el;
}

var KGS_META = {
  home: { title: 'KGS Home Décors — Furniture & Home Décor, Virudhachalam', desc: 'KGS Home Décors — furniture, wall art, lighting & gifting in Virudhachalam. Free delivery across Tamil Nadu. Open daily 10 AM–10 PM.' },
  shop: { title: 'Shop — KGS Home Décors', desc: 'Browse 500+ home décor pieces — furniture, lighting, wall art, vases, clocks & gifting. Free delivery across Tamil Nadu from KGS Home Décors, Virudhachalam.' },
  reviews: { title: 'Customer Reviews — KGS Home Décors', desc: 'Read what customers across Tamil Nadu say about KGS Home Décors furniture and home décor.' },
  about: { title: 'About — KGS Home Décors', desc: 'KGS Home Décors in Virudhachalam — curated furniture and home décor with free delivery across Tamil Nadu.' },
  contact: { title: 'Contact — KGS Home Décors', desc: 'Visit KGS Home Décors at 185/G Junction Road, Virudhachalam, or call +91 97891 82921. Open daily 10 AM–10 PM.' },
  cart: { title: 'Your Cart — KGS Home Décors', desc: 'Review the items in your KGS Home Décors cart.' },
  checkout: { title: 'Checkout — KGS Home Décors', desc: 'Securely complete your KGS Home Décors order.' },
  'order-confirmation': { title: 'Order Confirmed — KGS Home Décors', desc: 'Thank you for shopping with KGS Home Décors.' },
  wishlist: { title: 'Wishlist — KGS Home Décors', desc: 'Your saved KGS Home Décors favourites.' },
  account: { title: 'My Account — KGS Home Décors', desc: 'Manage your KGS Home Décors account and orders.' },
  login: { title: 'Sign In — KGS Home Décors', desc: 'Sign in to your KGS Home Décors account.' },
  register: { title: 'Create Account — KGS Home Décors', desc: 'Create a KGS Home Décors account.' },
  privacy: { title: 'Privacy Policy — KGS Home Décors', desc: 'How KGS Home Décors collects and uses your information.' },
  terms: { title: 'Terms & Conditions — KGS Home Décors', desc: 'Terms and conditions for using KGS Home Décors.' },
  returns: { title: 'Returns & Refunds — KGS Home Décors', desc: 'Returns and refunds policy for KGS Home Décors.' },
  shipping: { title: 'Shipping & Delivery — KGS Home Décors', desc: 'Shipping and delivery information — free delivery across Tamil Nadu from KGS Home Décors.' }
};

function kgsInjectProductLd(product, url, image, desc) {
  var node = document.getElementById('kgs-ld-product');
  if (!node) {
    node = document.createElement('script');
    node.type = 'application/ld+json';
    node.id = 'kgs-ld-product';
    document.head.appendChild(node);
  }
  var data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: image ? [image] : undefined,
    description: desc,
    category: product.category || undefined,
    brand: { '@type': 'Brand', name: 'KGS Home Décors' },
    offers: {
      '@type': 'Offer',
      price: (typeof product.price === 'number' && !isNaN(product.price)) ? product.price : undefined,
      priceCurrency: 'INR',
      availability: (product.stock && product.stock > 0) ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: url
    }
  };
  node.textContent = JSON.stringify(data);

  var crumb = document.getElementById('kgs-ld-breadcrumb');
  if (!crumb) {
    crumb = document.createElement('script');
    crumb.type = 'application/ld+json';
    crumb.id = 'kgs-ld-breadcrumb';
    document.head.appendChild(crumb);
  }
  crumb.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: KGS_BASE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Shop', item: KGS_BASE + '/shop' },
      { '@type': 'ListItem', position: 3, name: product.name, item: url }
    ]
  });
}
function kgsRemoveProductLd() {
  var node = document.getElementById('kgs-ld-product');
  if (node) node.parentNode.removeChild(node);
  var crumb = document.getElementById('kgs-ld-breadcrumb');
  if (crumb) crumb.parentNode.removeChild(crumb);
}

// Update document.title, description, canonical, OG/Twitter + Product JSON-LD
function kgsUpdateHead(route, product) {
  var path = kgsBuildPath(route, product);
  var url = KGS_BASE + path;
  var title, desc, image = KGS_DEFAULT_IMG, ogType = 'website';

  if (route === 'product' && product && product.id) {
    title = product.name + ' — KGS Home Décors';
    var priceTxt = (typeof product.price === 'number' && !isNaN(product.price)) ? ('₹' + product.price.toLocaleString('en-IN')) : '';
    desc = product.name + (product.category ? ' — ' + product.category : '') +
      (priceTxt ? '. ' + priceTxt : '') + '. Free delivery across Tamil Nadu from KGS Home Décors.';
    if (product.image) image = product.image;
    ogType = 'product';
  } else {
    var m = KGS_META[route] || KGS_META.home;
    title = m.title;
    desc = m.desc;
  }

  document.title = title;
  kgsSetMeta('meta[name="description"]', 'name', 'description', desc, desc);
  kgsSetLink('canonical', url);

  kgsSetMeta('meta[property="og:title"]', 'property', 'og:title', null, title);
  kgsSetMeta('meta[property="og:description"]', 'property', 'og:description', null, desc);
  kgsSetMeta('meta[property="og:type"]', 'property', 'og:type', null, ogType);
  kgsSetMeta('meta[property="og:url"]', 'property', 'og:url', null, url);
  kgsSetMeta('meta[property="og:image"]', 'property', 'og:image', null, image);
  kgsSetMeta('meta[property="og:site_name"]', 'property', 'og:site_name', null, 'KGS Home Décors');

  kgsSetMeta('meta[name="twitter:card"]', 'name', 'twitter:card', null, 'summary_large_image');
  kgsSetMeta('meta[name="twitter:title"]', 'name', 'twitter:title', null, title);
  kgsSetMeta('meta[name="twitter:description"]', 'name', 'twitter:description', null, desc);
  kgsSetMeta('meta[name="twitter:image"]', 'name', 'twitter:image', null, image);

  if (route === 'product' && product && product.id) {
    kgsInjectProductLd(product, url, image, desc);
  } else {
    kgsRemoveProductLd();
  }
}

function App() {
  var _React$useState39 = React.useState(function () {
      var init = kgsParsePath(window.location.pathname);
      return init.route;
    }),
    _React$useState40 = _slicedToArray(_React$useState39, 2),
    route = _React$useState40[0],
    setRoute = _React$useState40[1];
  var _React$useState41 = React.useState('all'),
    _React$useState42 = _slicedToArray(_React$useState41, 2),
    filter = _React$useState42[0],
    setFilter = _React$useState42[1];
  var _React$useState43 = React.useState(function () {
      try {
        return JSON.parse(localStorage.getItem('kgs_cart') || '[]');
      } catch (_unused) {
        return [];
      }
    }),
    _React$useState44 = _slicedToArray(_React$useState43, 2),
    cart = _React$useState44[0],
    setCart = _React$useState44[1];
  var _React$useState45 = React.useState(function () {
      try {
        return JSON.parse(localStorage.getItem('kgs_wish') || '[]');
      } catch (_unused2) {
        return [];
      }
    }),
    _React$useState46 = _slicedToArray(_React$useState45, 2),
    wishlist = _React$useState46[0],
    setWish = _React$useState46[1];
  var _React$useState47 = React.useState(null),
    _React$useState48 = _slicedToArray(_React$useState47, 2),
    viewing = _React$useState48[0],
    setView = _React$useState48[1];
  var _React$useState49 = React.useState({
      msg: '',
      show: false
    }),
    _React$useState50 = _slicedToArray(_React$useState49, 2),
    toast = _React$useState50[0],
    setToast = _React$useState50[1];
  // Preserve cart through checkout so confirmation can show it
  var _React$useState51 = React.useState([]),
    _React$useState52 = _slicedToArray(_React$useState51, 2),
    lastCart = _React$useState52[0],
    setLastCart = _React$useState52[1];
  // Preserve the real saved order_number so confirmation page shows the actual record
  var _React$useState51b = React.useState(null),
    _React$useState52b = _slicedToArray(_React$useState51b, 2),
    lastOrderNumber = _React$useState52b[0],
    setLastOrderNumber = _React$useState52b[1];
  // Search state
  var _React$useState53 = React.useState(false),
    _React$useState54 = _slicedToArray(_React$useState53, 2),
    searchOpen = _React$useState54[0],
    setSearchOpen = _React$useState54[1];
  // Supabase live products (replaces hardcoded PRODUCTS after fetch)
  var _React$useState55 = React.useState(false),
    _React$useState56 = _slicedToArray(_React$useState55, 2),
    productsReady = _React$useState56[0],
    setProductsReady = _React$useState56[1];
  var _React$useState57 = React.useState(false),
    _React$useState58 = _slicedToArray(_React$useState57, 2),
    productsError = _React$useState58[0],
    setProductsError = _React$useState58[1];
  // Auth state
  var _authUser = React.useState(null),
    currentUser = _authUser[0],
    setCurrentUser = _authUser[1];
  var _authLoad = React.useState(true),
    authLoading = _authLoad[0],
    setAuthLoading = _authLoad[1];
  var _React$useReducer = React.useReducer(function (x) {
      return x + 1;
    }, 0),
    _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
    _forceUpdate = _React$useReducer2[1];
  // ─── SEO routing refs ────────────────────────────────────────────────
  // When true, the next [route]/[viewing] effect skips pushState (it was
  // triggered by popstate / initial parse, not a user navigation).
  var _kgsSkipPush = React.useRef(false);
  // Product id parsed from a deep link / popstate, awaiting PRODUCTS load.
  var _kgsPendingProductId = React.useRef(null);
  // Parse the initial URL once so the first render uses the correct route.
  var _kgsInitial = React.useRef(null);
  if (_kgsInitial.current === null) {
    _kgsInitial.current = kgsParsePath(window.location.pathname);
    // The first [route] effect runs from the parsed initial URL, not a click,
    // so it must NOT push a duplicate history entry.
    _kgsSkipPush.current = true;
    if (_kgsInitial.current.route === 'product') {
      _kgsPendingProductId.current = _kgsInitial.current.productId || null;
    }
  }
  React.useEffect(function () {
    var MAX_RETRIES = 20;
    var RETRY_DELAY_MS = 500;
    var CDN_WAIT_MS = 1000;
    var attemptFetch = function(attemptsLeft, isAutoRecovery) {
      if (!getSB()) {
        if (attemptsLeft > 1) {
          setTimeout(function() { attemptFetch(attemptsLeft - 1, isAutoRecovery); }, CDN_WAIT_MS);
        } else {
          if (!isAutoRecovery) {
            setTimeout(function() { attemptFetch(MAX_RETRIES, true); }, 5000);
          } else {
            PRODUCTS = [];
            setProductsReady(true);
            setProductsError(true);
          }
        }
        return;
      }
      fetchAllProductsFromSupabase().then(function (live) {
        if (live && live.length > 0) {
          PRODUCTS = live;
          setCart(function (prev) {
            return prev.filter(function (ci) {
              return PRODUCTS.some(function (p) { return p.id === ci.id; });
            });
          });
          setProductsReady(true);
          _forceUpdate();
        } else {
          if (attemptsLeft > 1) {
            setTimeout(function() { attemptFetch(attemptsLeft - 1, isAutoRecovery); }, RETRY_DELAY_MS);
          } else {
            if (!isAutoRecovery) {
              setTimeout(function() { attemptFetch(MAX_RETRIES, true); }, 5000);
            } else {
              PRODUCTS = [];
              setProductsReady(true);
              setProductsError(true);
            }
          }
        }
      })["catch"](function () {
        if (attemptsLeft > 1) {
          setTimeout(function() { attemptFetch(attemptsLeft - 1, isAutoRecovery); }, RETRY_DELAY_MS);
        } else {
          if (!isAutoRecovery) {
            setTimeout(function() { attemptFetch(MAX_RETRIES, true); }, 5000);
          } else {
            PRODUCTS = [];
            setProductsReady(true);
            setProductsError(true);
          }
        }
      });
    };
    attemptFetch(MAX_RETRIES, false);
  }, []);

  // ─── Auth session check ──────────────────────────────────────────────
  React.useEffect(function() {
    if (typeof window.supabase === 'undefined') { setAuthLoading(false); return; }
    var sb = getSB();
    sb.auth.getSession().then(function(res) {
      var session = res.data && res.data.session;
      var u = session ? session.user : null;
      setCurrentUser(u);
      if (u && u.user_metadata && u.user_metadata.wishlist) {
        var serverWish = u.user_metadata.wishlist.map(String);
        setWish(function(prev) {
          var merged = Array.from(new Set([].concat(_toConsumableArray(prev.map(String)), _toConsumableArray(serverWish))));
          return merged;
        });
      }
      setAuthLoading(false);
    });
    var listener = sb.auth.onAuthStateChange(function(_event, session) {
      var u = session ? session.user : null;
      setCurrentUser(u);
      if (_event === 'PASSWORD_RECOVERY') {
        setRoute('reset-password');
      }
      if (u && u.user_metadata && u.user_metadata.wishlist) {
        var serverWish = u.user_metadata.wishlist.map(String);
        setWish(function(prev) {
          var merged = Array.from(new Set([].concat(_toConsumableArray(prev.map(String)), _toConsumableArray(serverWish))));
          return merged;
        });
      }
    });
    return function() {
      if (listener && listener.data && listener.data.subscription) {
        listener.data.subscription.unsubscribe();
      }
    };
  }, []);

  // ── Global Mouse Drag-to-Scroll for horizontal tracks ──
  React.useEffect(function () {
    var isDown = false, startX, scrollLeft, slider, moved = false;
    var onMouseDown = function(e) {
      var track = e.target.closest('.shop-filters-track, .best-sellers-track, .ig-grid, .account-nav');
      if (!track) return;
      if (e.button !== 0) return; // Only left mouse
      isDown = true; moved = false; slider = track;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollBehavior = 'auto';
    };
    var onMouseMove = function(e) {
      if (!isDown || !slider) return;
      e.preventDefault();
      var x = e.pageX - slider.offsetLeft;
      var walk = (x - startX) * 1.5;
      if (Math.abs(x - startX) > 4) moved = true;
      slider.scrollLeft = scrollLeft - walk;
    };
    var onMouseUp = function(e) {
      if (!isDown || !slider) return;
      isDown = false;
      slider.style.scrollBehavior = 'smooth';
    };
    var onClickCapture = function(e) {
      if (moved) {
        e.preventDefault(); e.stopPropagation(); moved = false;
      }
    };
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('click', onClickCapture, true);
    return function () {
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('click', onClickCapture, true);
    };
  }, []);

  // ─── GSAP Animation System ──────────────────────────────────────────
  // Skills: gsap-core · gsap-timeline · gsap-scrolltrigger · gsap-react
  //         gsap-performance · gsap-plugins · gsap-utils · gsap-frameworks
  React.useEffect(function () {
    // a11y: honour prefers-reduced-motion — skip all GSAP entrance/scroll
    // animations and instead force every animated element to its final
    // VISIBLE state so nothing stays hidden. Also stop Lenis smooth scroll.
    var prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      try { if (window._lenis) window._lenis.stop(); } catch (_lz) {}
      var reveal = function reveal() {
        document.querySelectorAll('.reveal').forEach(function (el) {
          el.classList.add('visible');
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
        // Elements GSAP would have faded in from opacity:0 (set in CSS/inline)
        document.querySelectorAll('.hero-photo, .hero-eyebrow, .hero h1, .hero-sub, .hero-ctas .btn, .hero-stats, .hero-slides-indicator, .hero-floating-chip, .hero-delivery-chip, .trust-item, .section-head, .best-sellers-track .prod-card, .cat-card, .why-card, .testimonial, .ig-tile, footer').forEach(function (el) {
          el.style.opacity = '1';
          el.style.transform = 'none';
        });
      };
      reveal();
      // Re-apply after React paints subsequent route content
      var rt = setTimeout(reveal, 100);
      var rt2 = setTimeout(reveal, 600);
      return function () { clearTimeout(rt); clearTimeout(rt2); };
    }
    // GSAP/ScrollTrigger are loaded with `defer`, so they may not be defined
    // yet when this effect first runs. Poll until they're ready, then run the
    // animation setup. If they never load, content still shows (it's revealed
    // by CSS defaults / the .reveal fallback below).
    var ctx;
    var timer = null;
    var pollId = null;
    var disposed = false;

    var startGsap = function startGsap() {
    // Kill all existing ScrollTriggers when route changes (gsap-react cleanup)
    ScrollTrigger.getAll().forEach(function (t) {
      return t.kill();
    });
    setTimeout(function () {
      return ScrollTrigger.refresh();
    }, 500);
    setTimeout(function () {
      return ScrollTrigger.refresh();
    }, 2000);
    if (route !== 'home') return;
    timer = setTimeout(function () {
      ctx = gsap.context(function () {
        // ── 0. Global Reveal Trigger ──────────────────────────────────
        // Ensures all .reveal elements become visible on scroll
        gsap.utils.toArray('.reveal').forEach(function (el) {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            onEnter: function onEnter() {
              return el.classList.add('visible');
            },
            once: true
          });
        });

        // ── 1. Hero Entrance Timeline (gsap-core + gsap-timeline) ──────
        // Performance: only transform + opacity (gsap-performance rule)
        var heroEl = document.querySelector('.hero');
        if (heroEl) {
          var tl = gsap.timeline({
            defaults: {
              ease: 'power3.out',
              duration: 0.7
            }
          });
          tl.fromTo('.hero-eyebrow', {
            y: 22
          }, {
            y: 0,
            opacity: 1,
            duration: 0.55
          }).fromTo('.hero h1', {
            y: 38
          }, {
            y: 0,
            opacity: 1,
            duration: 0.85,
            ease: 'power4.out'
          }, '-=0.25').fromTo('.hero-sub', {
            y: 22
          }, {
            y: 0,
            opacity: 1,
            duration: 0.6
          }, '-=0.5').fromTo('.hero-ctas .btn', {
            y: 20
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.13,
            duration: 0.5
          }, '-=0.4').fromTo('.hero-stats', {
            y: 16
          }, {
            y: 0,
            opacity: 1,
            duration: 0.5
          }, '-=0.3').fromTo('.hero-slides-indicator', {
            x: -12
          }, {
            x: 0,
            opacity: 1,
            duration: 0.5
          }, '-=0.6')
          // Hero photo scales in — gsap-timeline position param
          .fromTo('.hero-photo', {
            scale: 1.06
          }, {
            scale: 1,
            opacity: 1,
            duration: 1.1,
            ease: 'power2.out'
          }, 0.1)
          // Floating chip pops in last
          .fromTo('.hero-floating-chip, .hero-delivery-chip', {
            scale: 0.88,
            opacity: 0,
            y: 10
          }, {
            scale: 1,
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.55,
            ease: 'back.out(1.6)'
          }, '-=0.5');
        }

        // ── 2. Trust Strip (gsap-scrolltrigger stagger) ───────────────
        var trustStrip = document.querySelector('.trust-strip');
        if (trustStrip) {
          gsap.fromTo('.trust-item', {
            y: 28
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            scrollTrigger: {
              trigger: trustStrip,
              start: 'top 88%',
              once: true
            }
          });
        }

        // ── 3. Section headings — staggered reveal (gsap-scrolltrigger) ─
        document.querySelectorAll('.section-head').forEach(function (el) {
          gsap.fromTo(el, {
            y: 32
          }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true
            }
          });
        });

        // ── 4. Best Sellers cards — stagger (gsap-scrolltrigger) ──────
        var bsTrack = document.querySelector('.best-sellers-track');
        if (bsTrack) {
          gsap.fromTo('.best-sellers-track .prod-card', {
            y: 44
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.09,
            duration: 0.65,
            scrollTrigger: {
              trigger: bsTrack,
              start: 'top 82%',
              once: true
            }
          });
        }

        // ── 5. Category grid — scale+fade stagger (gsap-utils.toArray) ─
        var catGrid = document.querySelector('.cat-grid');
        if (catGrid) {
          // gsap-utils: toArray for safe NodeList handling
          var cats = gsap.utils.toArray('.cat-card');
          gsap.fromTo(cats, {
            y: 30,
            opacity: 0,
            scale: 0.94
          }, {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.055,
            duration: 0.55,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: catGrid,
              start: 'top 83%',
              once: true
            }
          });
        }

        // ── 6. Why-KGS cards — cascade (gsap-timeline + scrolltrigger) ─
        var whyGrid = document.querySelector('.why-grid');
        if (whyGrid) {
          gsap.fromTo('.why-card', {
            y: 40
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.11,
            duration: 0.65,
            scrollTrigger: {
              trigger: whyGrid,
              start: 'top 82%',
              once: true
            }
          });
        }

        // ── 7. Promo/offer banner parallax scrub (gsap-scrolltrigger) ──
        var promoPhoto = document.querySelector('.promo-photo img');
        if (promoPhoto) {
          gsap.to(promoPhoto, {
            yPercent: -14,
            ease: 'none',
            scrollTrigger: {
              trigger: '.promo',
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8 // gsap-scrolltrigger: scrub for buttery parallax
            }
          });
        }

        // ── 8. Promo copy entrance (gsap-timeline) ────────────────────
        var promoSection = document.querySelector('.promo-copy');
        if (promoSection) {
          var promoTl = gsap.timeline({
            scrollTrigger: {
              trigger: '.promo',
              start: 'top 78%',
              once: true
            }
          });
          promoTl.fromTo('.promo-eyebrow', {
            x: -20
          }, {
            x: 0,
            opacity: 1,
            duration: 0.5
          }).fromTo('.promo-headline', {
            y: 30
          }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power4.out'
          }, '-=0.2').fromTo('.promo-cta-row .btn, .promo-cta-row a', {
            y: 18
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.5
          }, '-=0.3');
        }

        // ── 9. Testimonials stagger (gsap-scrolltrigger) ──────────────
        var testimonialSection = document.querySelector('.testimonials-wrap, [class*="testimonial"]');
        if (testimonialSection) {
          gsap.fromTo('.testimonial', {
            y: 36
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.14,
            duration: 0.65,
            scrollTrigger: {
              trigger: testimonialSection,
              start: 'top 82%',
              once: true
            }
          });
        }

        // ── 10. Instagram grid — fast stagger (gsap-utils) ────────────
        var igGrid = document.querySelector('.ig-grid');
        if (igGrid) {
          var tiles = gsap.utils.toArray('.ig-tile');
          gsap.fromTo(tiles, {
            opacity: 0,
            scale: 0.92
          }, {
            opacity: 1,
            scale: 1,
            stagger: 0.04,
            duration: 0.45,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: igGrid,
              start: 'top 85%',
              once: true
            }
          });
        }


        // ── 12. Footer entrance (gsap-scrolltrigger) ──────────────────
        var footer = document.querySelector('.footer');
        if (footer) {
          gsap.fromTo(footer, {
            y: 24
          }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: footer,
              start: 'top 92%',
              once: true
            }
          });
        }


      }); // end gsap.context
    }, (function() {
      // First load: wait for loader to start fading (2000ms)
      // Subsequent home navigations: fire quickly (50ms, loader already gone)
      var loader = document.getElementById('kgs-loader');
      return loader && loader.style.display !== 'none' ? 2000 : 50;
    })()); // wait for React render / loader
    }; // end startGsap

    // Wait for the deferred GSAP libs to be available, then run.
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      startGsap();
    } else {
      var waited = 0;
      pollId = setInterval(function () {
        waited += 60;
        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
          clearInterval(pollId); pollId = null;
          if (!disposed) startGsap();
        } else if (waited > 8000) {
          // Give up gracefully — ensure .reveal content is visible regardless.
          clearInterval(pollId); pollId = null;
          document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
        }
      }, 60);
    }

    return function () {
      disposed = true;
      if (pollId) clearInterval(pollId);
      if (timer) clearTimeout(timer);
      if (ctx) ctx.revert(); // gsap-react: full cleanup including ScrollTriggers
    };
  }, [route]);
  var cartCount = cart.reduce(function (s, c) {
    return s + c.qty;
  }, 0);
  React.useEffect(function () {
    try {
      localStorage.setItem('kgs_cart', JSON.stringify(cart));
    } catch (_unused3) {}
  }, [cart]);
  React.useEffect(function () {
    try {
      localStorage.setItem('kgs_wish', JSON.stringify(wishlist));
    } catch (_unused4) {}
  }, [wishlist]);
  var showToast = function showToast(msg, icon, iconColor, iconFill) {
    setToast({ msg: msg, show: true, icon: icon || null, iconColor: iconColor || null, iconFill: iconFill !== undefined ? iconFill : 1 });
    setTimeout(function () {
      return setToast(function (t) {
        return _objectSpread(_objectSpread({}, t), {}, { show: false });
      });
    }, 2200);
  };
  // Expose globally so any deeply nested component can fire a toast
  window._kgsShowToast = showToast;
  var handleAdd = function handleAdd(p) {
    var qty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    setCart(function (prev) {
      var ex = prev.find(function (c) {
        return c.id === p.id;
      });
      if (ex) return prev.map(function (c) {
        return c.id === p.id ? _objectSpread(_objectSpread({}, c), {}, {
          qty: c.qty + qty
        }) : c;
      });
      return [].concat(_toConsumableArray(prev), [{
        id: p.id,
        qty: qty
      }]);
    });
    showToast('Added to cart');
  };
  var handleView = function handleView(p) {
    setView(p);
    setRoute('product');
    window.scrollTo(0, 0);
    setTimeout(function() {
      if (window._lenis) { window._lenis.scrollTo(0, { immediate: true }); }
      else { window.scrollTo(0, 0); }
    }, 0);
  };
  var _qvAppState = React.useState(null),
    _qvAppArr = _slicedToArray(_qvAppState, 2),
    quickViewProduct = _qvAppArr[0],
    setQuickViewProduct = _qvAppArr[1];
  window._kgsQuickView = setQuickViewProduct;
  var handleWishToggle = function handleWishToggle(id) {
    var sId = String(id);
    setWish(function (prev) {
      var prevS = prev.map(String);
      var alreadyIn = prevS.includes(sId);
      var adding = !alreadyIn;
      var newList = adding ? [].concat(_toConsumableArray(prevS), [sId]) : prevS.filter(function (x) { return x !== sId; });

      if (currentUser && typeof window.supabase !== 'undefined') {
        getSB().auth.updateUser({ data: { wishlist: newList } })['catch'](function() {});
      }

      setTimeout(function() {
        showToast(adding ? 'Added to wishlist' : 'Removed from wishlist', 'favorite', adding ? '#E8434A' : '#9E9E9E', adding ? 1 : 0);
      }, 0);

      return newList;
    });
  };
  var handleLogin = function handleLogin(email, password) {
    var sb = getSB();
    return sb.auth.signInWithPassword({ email: email, password: password }).then(function(res) {
      if (res.error) throw res.error;
      setCurrentUser(res.data.user);
      setRoute('account');
    });
  };
  var handleRegister = function handleRegister(email, password, fullName) {
    var sb = getSB();
    return sb.auth.signUp({ email: email, password: password, options: { data: { full_name: fullName } } }).then(function(res) {
      if (res.error) throw res.error;
      if (res.data.session) {
        setCurrentUser(res.data.user);
        setRoute('account');
      } else {
        window._kgsConfirmEmail = email;
        setRoute('confirm-email');
      }
    });
  };
  var handleLogout = function handleLogout() {
    var sb = getSB();
    return sb.auth.signOut().then(function() {
      setCurrentUser(null);
      setRoute('home');
    });
  };
  var handleCheckout = function handleCheckout() {
    setRoute('checkout');
  };
  // Expose setRoute globally for components without prop access (Announcement bar)
  window._kgsSetRoute = setRoute;
  var handlePlaceOrder = function handlePlaceOrder(formData, deliveryFee, setProcessing) {
    var cartSnapshot = _toConsumableArray(cart);
    // Cart line items sent to the server as {id, qty}. The server looks up the
    // REAL price for each id — the client never sends prices or an amount, so a
    // tampered cart can no longer change the charged total.
    var orderItems = cartSnapshot.map(function(ci) {
      return { id: ci.id, qty: ci.qty };
    });
    // Shipping payload the server stores against the order (address is composed
    // the same way the old client-side insert did, for data consistency).
    var shippingPayload = {
      name: formData.name,
      phone: formData.phone,
      address: formData.address + ', ' + formData.city + ', Tamil Nadu - ' + formData.pincode,
      city: formData.city,
      state: 'Tamil Nadu',
      pincode: formData.pincode
    };

    var sb = getSB();

    if (sb && currentUser) {
      setProcessing(true);
      fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: orderItems,
          state: shippingPayload.state,
          currency: 'INR',
          receipt: 'kgs_' + Date.now()
        })
      }).then(function(r) {
        return r.json().then(function(data) {
          return { ok: r.ok, data: data };
        });
      }).then(function(_ref) {
        var ok = _ref.ok, data = _ref.data;
        if (!ok || data.error) {
          console.error('[KGS] create-order failed:', data && data.error);
          setProcessing(false);
          showToast('Unable to start payment right now. Please try again later or contact us on WhatsApp.', 'error', '#C97840');
          return;
        }
        ensureRazorpay().then(function (Razorpay) {
        var rzp = new Razorpay({
          key: data.key,
          amount: data.amount,
          currency: data.currency,
          order_id: data.order_id,
          name: 'KGS Home Décors',
          description: 'Order payment',
          image: 'https://www.kgshomedecors.com/assets/images/icon-512.png',
          prefill: {
            name: formData.name,
            email: (currentUser && currentUser.email) || '',
            contact: formData.phone
          },
          theme: { color: '#C97840' },
          handler: function handler(response) {
            // The server verifies the signature, re-fetches real prices, and
            // records the order with the service role. The client no longer
            // writes to Supabase, so a fake "paid" order cannot be inserted.
            fetch('/api/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                items: orderItems,
                shipping: shippingPayload,
                customer_id: currentUser.id
              })
            }).then(function(r) {
              return r.json().then(function(data) {
                return { ok: r.ok, data: data };
              });
            }).then(function(_ref2) {
              var ok2 = _ref2.ok, data = _ref2.data;
              if (ok2 && data && data.success === true && data.order_number != null) {
                // Auto-save address
                if (currentUser && currentUser.user_metadata && formData.saveAddress !== false) {
                  var existingAddresses = currentUser.user_metadata.addresses || [];
                  var isMatch = existingAddresses.some(function(a) {
                    return a.line1 === formData.address && a.city === formData.city && a.pincode === formData.pincode;
                  });
                  if (!isMatch) {
                    var newAddr = {
                      id: Date.now().toString(),
                      full_name: formData.name,
                      phone: formData.phone,
                      line1: formData.address,
                      line2: '',
                      city: formData.city,
                      state: formData.state || 'Tamil Nadu',
                      pincode: formData.pincode,
                      label: existingAddresses.length === 0 ? 'Home' : 'Recent Address',
                      is_default: existingAddresses.length === 0
                    };
                    var updatedAddresses = existingAddresses.concat([newAddr]);
                    if (newAddr.is_default) {
                      updatedAddresses = updatedAddresses.map(function(a) {
                        return Object.assign({}, a, { is_default: a.id === newAddr.id });
                      });
                    }
                    updatedAddresses.sort(function(a, b) { return (b.is_default ? 1 : 0) - (a.is_default ? 1 : 0); });
                    sb.auth.updateUser({ data: { addresses: updatedAddresses } }).then(function(res) {
                      if (!res.error) {
                        console.log('[KGS] Address auto-saved');
                        if (res.data && res.data.user && typeof setCurrentUser === 'function') {
                          setCurrentUser(res.data.user);
                        }
                      }
                    });
                  }
                }

                setLastCart(cartSnapshot);
                setLastOrderNumber('KGS-' + data.order_number);
                setCart([]);
                setProcessing(false);
                setRoute('order-confirmation');
                window.scrollTo(0, 0);
              } else {
                console.error('[KGS] Payment verification/recording failed:', data && data.error);
                setProcessing(false);
                showToast('Payment could not be verified. If money was deducted, please contact us on WhatsApp with your payment ID.', 'error', '#C97840');
              }
            }).catch(function(err) {
              console.error('[KGS] verify-payment request failed:', err);
              setProcessing(false);
              showToast('Payment could not be verified. If money was deducted, please contact us on WhatsApp with your payment ID.', 'error', '#C97840');
            });
          },
          modal: {
            ondismiss: function ondismiss() {
              setProcessing(false);
              showToast('Payment cancelled.', 'info');
            }
          }
        });
        rzp.open();
        }).catch(function(err) {
          console.error('[KGS] Razorpay load failed:', err);
          setProcessing(false);
          showToast('Unable to start payment right now. Please check your connection and try again.', 'error', '#C97840');
        });
      }).catch(function(err) {
        console.error('[KGS] create-order request failed:', err);
        setProcessing(false);
        showToast('Unable to start payment right now. Please try again later or contact us on WhatsApp.', 'error', '#C97840');
      });
    } else {
      // No signed-in user (or Supabase unavailable): do NOT fake-confirm an
      // order or clear the cart. Ask the user to log in so the order can be
      // paid for and saved against their account.
      setProcessing(false);
      showToast('Please log in to place your order.', 'info');
      setRoute('login');
      window.scrollTo(0, 0);
    }
  };
  React.useEffect(function () {
    if (window._lenis) {
      window._lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [route]);

  // ─── SEO: History API + per-route metadata ───────────────────────────
  // popstate (back/forward): update route/product WITHOUT pushing history.
  React.useEffect(function () {
    var onPop = function onPop(e) {
      var parsed = (e.state && e.state.route) ? e.state : kgsParsePath(window.location.pathname);
      _kgsSkipPush.current = true; // the [route] effect must not re-push
      if (parsed.route === 'product') {
        _kgsPendingProductId.current = parsed.productId || null;
        var found = parsed.productId
          ? PRODUCTS.find(function (p) { return String(p.id) === String(parsed.productId); })
          : null;
        if (found) { setView(found); _kgsPendingProductId.current = null; }
        setRoute('product');
      } else {
        _kgsPendingProductId.current = null;
        setRoute(parsed.route);
      }
    };
    window.addEventListener('popstate', onPop);
    // Seed history state for the initial entry so the first Back works.
    try {
      history.replaceState(
        { route: route, productId: (viewing && viewing.id) || null },
        '',
        window.location.pathname + window.location.search
      );
    } catch (_e) {}
    return function () { window.removeEventListener('popstate', onPop); };
  }, []);

  // On every route/product change: update <head> and sync the URL.
  React.useEffect(function () {
    kgsUpdateHead(route, route === 'product' ? viewing : null);
    var path = kgsBuildPath(route, route === 'product' ? viewing : null);
    if (_kgsSkipPush.current) {
      _kgsSkipPush.current = false; // navigation came from popstate/initial — don't push
      return;
    }
    var current = window.location.pathname.replace(/\/+$/, '') || '/';
    var target = path.replace(/\/+$/, '') || '/';
    if (current === target) return; // avoid duplicate history entries
    try {
      history.pushState(
        { route: route, productId: (route === 'product' && viewing) ? viewing.id : null },
        '',
        path
      );
    } catch (_e) {}
  }, [route, viewing]);

  // Deep-link / popstate: once PRODUCTS load, resolve a pending product id.
  React.useEffect(function () {
    if (!productsReady) return;
    if (route === 'product' && !viewing && _kgsPendingProductId.current) {
      var id = _kgsPendingProductId.current;
      var found = PRODUCTS.find(function (p) { return String(p.id) === String(id); });
      _kgsPendingProductId.current = null;
      if (found) {
        _kgsSkipPush.current = true; // selecting it shouldn't push a new entry
        setView(found);
      } else {
        setRoute('shop'); // unknown product -> shop, no crash/blank
      }
    } else if (route === 'product' && !viewing && !_kgsPendingProductId.current) {
      // Landed on /product with no id resolvable -> shop.
      setRoute('shop');
    }
  }, [productsReady, route, viewing]);

  // Render current page body
  var body = null;
  if (route === 'home') {
    body = /*#__PURE__*/React.createElement("div", {
      "data-screen-label": "Home"
    }, /*#__PURE__*/React.createElement(Hero, {
      onShop: function onShop() {
        return setRoute('shop');
      },
      onSellers: function onSellers() {
        var el = document.getElementById('best-sellers');
        if (el) {
          var y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(TrustStrip, null)), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(CategoryGrid, {
      onClick: function onClick(slug) {
        if (slug) setFilter(slug);
        setRoute('shop');
        window.scrollTo(0, 0);
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(BestSellers, {
      key: 'bs-' + productsReady,
      onAdd: handleAdd,
      onView: handleView,
      wishlist: wishlist,
      onWishToggle: handleWishToggle,
      productsReady: productsReady,
      productsError: productsError,
      onShop: function onShop() {
        return setRoute('shop');
      }
    })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(Testimonials, { onViewAll: function() { return setRoute('reviews'); } })), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(Instagram, null)), /*#__PURE__*/React.createElement("div", {
      className: "reveal"
    }, /*#__PURE__*/React.createElement(Showroom, null)));
  } else if (route === 'shop') {
    body = /*#__PURE__*/React.createElement(ShopPage, {
      key: 'shop-' + productsReady,
      filter: filter,
      setFilter: setFilter,
      onAdd: handleAdd,
      onView: handleView,
      wishlist: wishlist,
      onWishToggle: handleWishToggle,
      productsReady: productsReady,
      productsError: productsError
    });
  } else if (route === 'product') {
    body = /*#__PURE__*/React.createElement(ProductDetail, {
      key: viewing && viewing.id,
      p: viewing,
      onAdd: handleAdd,
      onBack: function onBack() {
        return setRoute('shop');
      },
      onView: handleView,
      wishlist: wishlist,
      onWishToggle: handleWishToggle
    });
  } else if (route === 'cart') {
    body = /*#__PURE__*/React.createElement(CartPage, {
      cart: cart,
      onChangeQty: function onChangeQty(id, qty) {
        return setCart(function (prev) {
          return prev.map(function (c) {
            return c.id === id ? _objectSpread(_objectSpread({}, c), {}, {
              qty: qty
            }) : c;
          });
        });
      },
      onRemove: function onRemove(id) {
        return setCart(function (prev) {
          return prev.filter(function (c) {
            return c.id !== id;
          });
        });
      },
      onCheckout: handleCheckout,
      onBack: function onBack() {
        return setRoute('shop');
      },
      onTerms: function onTerms() {
        return setRoute('terms');
      },
      onReturns: function onReturns() {
        return setRoute('returns');
      }
    });
  } else if (route === 'checkout') {
    if (!currentUser) {
      setRoute('login');
      body = /*#__PURE__*/React.createElement("div", { style: { minHeight: '60vh' } });
    } else {
      body = /*#__PURE__*/React.createElement(CheckoutPage, {
        cart: cart,
        user: currentUser,
        onPlaceOrder: handlePlaceOrder,
        onBack: function onBack() { return setRoute('cart'); }
      });
    }
  } else if (route === 'order-confirmation') {
    body = /*#__PURE__*/React.createElement(OrderConfirmationPage, {
      cart: lastCart,
      orderNumber: lastOrderNumber,
      onKeepShopping: function onKeepShopping() {
        return setRoute('shop');
      }
    });
  } else if (route === 'wishlist') {
    body = /*#__PURE__*/React.createElement(WishlistPage, {
      wishlist: wishlist,
      onAdd: handleAdd,
      onView: handleView,
      onWishToggle: handleWishToggle,
      onShop: function onShop() {
        return setRoute('shop');
      }
    });
  } else if (route === 'reviews') {
    body = /*#__PURE__*/React.createElement(AllReviewsPage, {
      onBack: function() { return setRoute('home'); }
    });
  } else if (route === 'about') {
    body = /*#__PURE__*/React.createElement(AboutPage, {
      onShop: function onShop() {
        return setRoute('shop');
      }
    });
  } else if (route === 'contact') {
    body = /*#__PURE__*/React.createElement(ContactPage, null);
  } else if (route === 'faq') {
    body = /*#__PURE__*/React.createElement(FAQPage, null);
  } else if (route === 'privacy') {
    body = /*#__PURE__*/React.createElement(PrivacyPolicyPage, null);
  } else if (route === 'terms') {
    body = /*#__PURE__*/React.createElement(TermsPage, null);
  } else if (route === 'shipping') {
    body = /*#__PURE__*/React.createElement(ShippingPolicyPage, null);
  } else if (route === 'returns') {
    body = /*#__PURE__*/React.createElement(ReturnPolicyPage, null);
  } else if (route === 'cookie-policy') {
    body = /*#__PURE__*/React.createElement(CookiePolicyPage, null);
  } else if (route === 'disclaimer') {
    body = /*#__PURE__*/React.createElement(DisclaimerPage, null);
  } else if (route === 'payment-options') {
    body = /*#__PURE__*/React.createElement(PaymentOptionsPage, null);
  } else if (route === 'account-orders') {
    window._kgsAccountTab = 'orders';
    setRoute('account');
    body = /*#__PURE__*/React.createElement("div", { style: { minHeight: '60vh' } });
  } else if (route === 'account') {

    if (authLoading) {
      body = /*#__PURE__*/React.createElement("div", { style: { minHeight: '60vh' } });
    } else if (!currentUser) {
      setRoute('login');
      body = /*#__PURE__*/React.createElement("div", { style: { minHeight: '60vh' } });
    } else {
      body = /*#__PURE__*/React.createElement(AccountDashboardPage, {
        onLogout: handleLogout,
        onShop: function() { setRoute("shop"); },
        onTrack: function(id) { window._kgsTrackingId = id; sessionStorage.setItem('kgs_tracking_id', id); setRoute("order-tracking"); },
        onToast: showToast,
        onAdd: handleAdd,
        onView: handleView,
        onWishToggle: handleWishToggle,
        wishlist: wishlist,
        user: currentUser,
        onUpdateUser: setCurrentUser
      });
    }
  } else if (route === 'order-tracking') {
    body = /*#__PURE__*/React.createElement(OrderTrackingPage, {
      orderId: window._kgsTrackingId || sessionStorage.getItem('kgs_tracking_id'),
      onBack: function() { setRoute('account'); }
    });
  } else if (route === 'reset-password') {
    body = /*#__PURE__*/React.createElement(ResetPasswordPage, {
      onDone: function() { setRoute('account'); }
    });
  } else if (route === 'confirm-email') {
    body = /*#__PURE__*/React.createElement(ConfirmEmailPage, {
      email: window._kgsConfirmEmail || '',
      onBack: function() { setRoute('login'); }
    });
  } else if (route === 'forgot-password') {
    body = /*#__PURE__*/React.createElement(ForgotPasswordPage, {
      onBack: function() { setRoute('login'); }
    });
  } else if (route === 'login') {
    body = /*#__PURE__*/React.createElement(AccountLoginPage, {
      onRegister: function onRegister() { return setRoute('register'); },
      onLogin: handleLogin,
      onForgot: function() { setRoute('forgot-password'); }
    });
  } else if (route === 'register') {
    body = /*#__PURE__*/React.createElement(AccountRegisterPage, {
      onLogin: function onLogin() { return setRoute('login'); },
      onRegister: handleRegister
    });
  } else if (route === 'privacy') {
    body = /*#__PURE__*/React.createElement(PrivacyPolicyPage, null);
  } else if (route === 'terms') {
    body = /*#__PURE__*/React.createElement(TermsPage, null);
  } else if (route === 'returns') {
    body = /*#__PURE__*/React.createElement(ReturnPolicyPage, null);
  } else if (route === 'shipping') {
    body = /*#__PURE__*/React.createElement(ShippingPolicyPage, null);
  } else if (route === 'cookie-policy') {
    body = /*#__PURE__*/React.createElement(CookiePolicyPage, null);
  } else if (route === 'disclaimer') {
    body = /*#__PURE__*/React.createElement(DisclaimerPage, null);
  } else {
    body = /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: '60vh'
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", { "data-route": route }, /*#__PURE__*/React.createElement(Announcement, null), /*#__PURE__*/React.createElement(Nav, {
    route: route,
    setRoute: setRoute,
    cart: cartCount,
    wishlist: wishlist.length,
    onSearch: function onSearch() {
      return setSearchOpen(true);
    }
  }), /*#__PURE__*/React.createElement("main", {
    className: "page-body"
  }, body), ['cart', 'checkout', 'order-confirmation', 'account', 'login', 'register', 'order-tracking', 'forgot-password', 'reset-password', 'confirm-email'].indexOf(route) === -1 && /*#__PURE__*/React.createElement(Footer, {
    setRoute: setRoute,
    setFilter: setFilter
  }), /*#__PURE__*/React.createElement(WAFloat, null), /*#__PURE__*/React.createElement(CookieConsentBanner, null), /*#__PURE__*/React.createElement(Toast, {
    msg: toast.msg,
    show: toast.show,
    icon: toast.icon,
    iconColor: toast.iconColor,
    iconFill: toast.iconFill
  }), /*#__PURE__*/React.createElement(SearchDrawer, {
    open: searchOpen,
    onClose: function onClose() {
      return setSearchOpen(false);
    },
    onView: function onView(p) {
      handleView(p);
    }
  }), /*#__PURE__*/React.createElement(MobileBottomNav, {
    route: route,
    setRoute: setRoute,
    cartCount: cartCount,
    wishlistCount: wishlist.length,
    onSearch: function onSearch() {
      return setSearchOpen(true);
    }
  }), quickViewProduct && /*#__PURE__*/React.createElement(QuickViewModal, {
    product: quickViewProduct,
    onClose: function onClose() { setQuickViewProduct(null); },
    onAdd: handleAdd,
    onView: handleView
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));






















