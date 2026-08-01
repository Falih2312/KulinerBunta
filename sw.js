/* Service Worker for KulinerBunta.id - Progressive Web App (GitHub Pages Normalized v1.0.1) */
const CACHE_NAME = 'kulinerbunta-v1.0.1';

// Base scope determination (works on domain root AND subfolders like /KulinerBunta/)
const getScopePath = () => {
  try {
    return new URL(self.registration.scope).pathname;
  } catch (e) {
    return './';
  }
};

const SCOPE_PATH = getScopePath();

const RELATIVE_ASSETS = [
  'index.html',
  'app-pembeli/index.html',
  'app-merchant/index.html',
  'app-kurir/index.html',
  'app-admin/index.html',
  'offline.html',
  'manifest.json',
  'css/icon-192.png',
  'css/icon-512.png',
  'css/styles.css',
  'js/app.js'
];

const ASSETS_TO_CACHE = [
  SCOPE_PATH,
  ...RELATIVE_ASSETS.map(asset => SCOPE_PATH + (SCOPE_PATH.endsWith('/') ? '' : '/') + asset)
];

// Install Event — Cache Core Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching assets for scope:', SCOPE_PATH);
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event — Clean Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[ServiceWorker] Removing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event — Network First with Offline Fallback
self.addEventListener('fetch', (event) => {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match(event.request) || caches.match(SCOPE_PATH + 'offline.html') || caches.match(SCOPE_PATH + 'index.html');
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request).then((networkResponse) => {
        if (event.request.method === 'GET' && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      if (event.request.headers && event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
        return caches.match(SCOPE_PATH + 'offline.html');
      }
    })
  );
});
