importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

// 1. Initialize the Firebase Engine
firebase.initializeApp({
  apiKey: "AIzaSyAto1rStOr4AqGRCT7aw0d_zh-BdRmA9MM",
  authDomain: "doctor-app-b5f5d.firebaseapp.com",
  projectId: "doctor-app-b5f5d",
  storageBucket: "doctor-app-b5f5d.firebasestorage.app",
  messagingSenderId: "217908180939",
  appId: "1:217908180939:web:7645d7bddc2d59c868e84e"
});

// 2. Start the listener (Firebase automatically handles 'notification' payloads!)
const messaging = firebase.messaging();