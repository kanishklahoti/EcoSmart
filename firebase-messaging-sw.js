// Use importScripts for SW
importScripts('https://www.gstatic.com/firebasejs/12.6.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging-compat.js');

// Initialize Firebase
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
  console.log('[firebase-messaging-sw.js] Background message received:', payload);

  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png'
  });
});
