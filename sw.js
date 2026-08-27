var CACHE_NAME = 'kgs-v18';
var STATIC_ASSETS = [
  '/',
  '/assets/css/styles.css',
  '/assets/js/config.js',
  '/assets/js/store.js',
  '/assets/js/supabase-client.js',
  '/assets/js/catalog.js',
  '/assets/js/product.js',
  '/manifest.json'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(STATIC_ASSETS);
    }).then(function () {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_NAME; })
            .map(function (k) { return caches.delete(k); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function (e) {
  var url = new URL(e.request.url);

  if (url.pathname.startsWith('/api/')) {
    return;
  }

  if (e.request.destination === 'image') {
    e.respondWith(
      caches.open(CACHE_NAME).then(function (cache) {
        return cache.match(e.request).then(function (cached) {
          if (cached) return cached;
          return fetch(e.request).then(function (resp) {
            if (resp.ok) cache.put(e.request, resp.clone());
            return resp;
          }).catch(function () {
            return cached || new Response('', { status: 404 });
          });
        });
      })
    );
    return;
  }

  e.respondWith(
    fetch(e.request).then(function (resp) {
      if (resp.ok && e.request.method === 'GET') {
        var clone = resp.clone();
        caches.open(CACHE_NAME).then(function (cache) {
          cache.put(e.request, clone);
        });
      }
      return resp;
    }).catch(function () {
      return caches.match(e.request);
    })
  );
});
