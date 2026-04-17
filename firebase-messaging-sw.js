importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAto1rStOr4AqGRCT7aw0d_zh-BdRmA9MM",
  authDomain: "doctor-app-b5f5d.firebaseapp.com",
  projectId: "doctor-app-b5f5d",
  storageBucket: "doctor-app-b5f5d.firebasestorage.app",
  messagingSenderId: "217908180939",
  appId: "1:217908180939:web:7645d7bddc2d59c868e84e"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log("Background message received ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "icon1.png"
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});