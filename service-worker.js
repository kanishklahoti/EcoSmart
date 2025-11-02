const CACHE_NAME = "ecosmart-v1";
const urlsToCache = [
  "https://kanishklahoti.github.io/EcoSmart/index.html",
  "https://kanishklahoti.github.io/EcoSmart/Aboutus.html",
  "https://kanishklahoti.github.io/EcoSmart/all-products.html",
  "https://kanishklahoti.github.io/EcoSmart/ecosmart.jpg"
];

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch Cached Files
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );

});

