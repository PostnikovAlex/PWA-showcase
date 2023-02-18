// Service Worker
const cacheName = 'my-first-pwa-v2';
const RUNTIME_CACHE = 'runtime-cache-example-website';

const filesToCache = ['/', '/catalog', 'index.html', './js/index.js', './styles/styles.css'];

// importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

self.addEventListener('install', event => {
  console.log('[ServiceWorker**] Install');
  if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker**] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

// workbox.routing.registerRoute(
//   /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.ExpirationPlugin({
//         // Only cache 60 images.
//         maxEntries: 20,
//         purgeOnQuotaError: true
//       })
//     ]
//   })
// );

// self.addEventListener("fetch", async event => {
// );

// async function cacheFirst(request) {
//   const cached = await caches.match(request);
//   return cached ?? (await fetch(request));
// }
