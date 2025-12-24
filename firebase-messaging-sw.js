importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

// 🔧 初始化 Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDiKFn8YPLS4-yrK-HQqnh9pZPV60ezpEA",
  authDomain: "travel-75a0b.firebaseapp.com",
  projectId: "travel-75a0b",
  storageBucket: "travel-75a0b.firebasestorage.app",
  messagingSenderId: "845355172496",
  appId: "1:845355172496:web:f3f08334329f73865e4e15",
});

// 🔔 初始化 Messaging
const messaging = firebase.messaging();

// 背景通知處理
messaging.onBackgroundMessage(function (payload) {
  console.log('收到背景通知:', payload);
  const notificationTitle = payload.notification.title || '行程提醒';
  const notificationOptions = {
    body: payload.notification?.body || '新的行程通知',
    icon: '/icons/Icon-192.png', 
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
