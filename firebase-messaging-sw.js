importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyDdCxvQw_oIgf-Jfmrw3oLhx236Ydaxs6w",
  authDomain: "ecosmart-b4613.firebaseapp.com",
  projectId: "ecosmart-b4613",
  storageBucket: "ecosmart-b4613.firebasestorage.app",
  messagingSenderId: "1032334615608",
  appId: "1:1032334615608:web:25ad6d59ca342ad637b2cd",
  measurementId: "G-YL1QP7C4G5"
});

const messaging = firebase.messaging();

// Background notification handler
messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/ecosmart.jpg"
  });
});
