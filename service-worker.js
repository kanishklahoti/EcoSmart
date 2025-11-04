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

// ===== Add Push Notification Support =====
self.addEventListener('push', function(event) {
  // event.data.json() contains the payload sent from server
  const data = event.data ? event.data.json() : {};
  const title = data.title || "EcoSmart Notification";
  const options = {
    body: data.body || "You have a new update!",
    icon: "https://kanishklahoti.github.io/EcoSmart/ecosmart.jpg",
    badge: "https://kanishklahoti.github.io/EcoSmart/ecosmart.jpg",
    data: data.url || "/" // optional: click action URL
  };
  
  event.waitUntil(self.registration.showNotification(title, options));
});

// Optional: handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  const urlToOpen = event.notification.data || "/";
  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(windowClients => {
      for (let client of windowClients) {
        if (client.url === urlToOpen && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
