// Import Firebase scripts (for messaging)
importScripts('https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging.js');

// Initialize Firebase in service worker
const firebaseConfig = {
  apiKey: "AIzaSyCd0TFYRUhffPg2Tn65JJBUxXFb8pk_a_M",
  authDomain: "ecosmart-a378d.firebaseapp.com",
  projectId: "ecosmart-a378d",
  storageBucket: "ecosmart-a378d.firebasestorage.app",
  messagingSenderId: "79350875818",
  appId: "1:79350875818:web:6b31281560b9b7ddb5b2d3",
  measurementId: "G-D374S054J8"
};

firebase.initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object
const messaging = firebase.messaging();

// Handle background messages
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);

  const notificationTitle = payload.notification?.title || "EcoSmart Notification";
  const notificationOptions = {
    body: payload.notification?.body || "Check your EcoSmart dashboard!",
    icon: '/EcoSmart/ecosmart.jpg' // your logo
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

// Optional: handle notification click
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/')); // open homepage/dashboard
});
