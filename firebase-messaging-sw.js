// Import Firebase libraries
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getMessaging, onBackgroundMessage } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-messaging-sw.js";

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

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// Listen for background messages
onBackgroundMessage(messaging, (payload) => {
  console.log('[firebase-messaging-sw.js] Background message received:', payload);

  // Show notification
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/icon.png' // optional: your logo
  });
});
