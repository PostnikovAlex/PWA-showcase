// Service Worker
const cacheName = "my-first-pwa-v1";
const RUNTIME_CACHE = 'runtime-cache-example-website';

const filesToCache = [
  "/",
  "/catalog",
  "index.html",
  "./js/index.js",
  "./styles/styles.css"
];

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');


self.addEventListener("install", event => {
  console.log("[ServiceWorker**] Install");
  if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
  } else {
    console.log(`Boo! Workbox didn't load 😬`);
  }

  self.addEventListener("activate", event => {
    console.log("[ServiceWorker**] Install");

  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log("[ServiceWorker**] Caching app shell");
      return cache.addAll(filesToCache);
    })
  );
});

