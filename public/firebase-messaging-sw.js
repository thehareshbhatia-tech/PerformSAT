/* SEVA re-engagement push — Firebase Cloud Messaging service worker.
 *
 * Served at /firebase-messaging-sw.js. The re-engagement Cloud Function
 * (sendReEngagementNudges) sends DATA-ONLY messages; this worker renders the
 * notification in onBackgroundMessage (data-only avoids the double-notification
 * you get when a `notification` payload is also auto-displayed by the browser).
 *
 * The public Firebase config is passed as query params by
 * notificationService.registerPushServiceWorker so we can initializeApp without
 * templating this file at build time (these values already ship in the client
 * bundle, so nothing secret is exposed).
 */
/* eslint-disable no-undef */
/* global importScripts, firebase, clients */

importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

const params = new URL(self.location).searchParams;
const firebaseConfig = {
  apiKey: params.get('apiKey'),
  authDomain: params.get('authDomain'),
  projectId: params.get('projectId'),
  storageBucket: params.get('storageBucket'),
  messagingSenderId: params.get('messagingSenderId'),
  appId: params.get('appId'),
};

if (firebaseConfig.projectId && firebaseConfig.messagingSenderId) {
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    const data = payload.data || {};
    const title = data.title || 'SEVA';
    const options = {
      body: data.body || '',
      data: { url: data.url || '/course' },
      tag: data.tag || 'seva-reengagement',
      renotify: false,
    };
    return self.registration.showNotification(title, options);
  });
}

// Focus an existing SEVA tab (or open one) and route it to the nudge target.
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const url = (event.notification.data && event.notification.data.url) || '/course';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if ('focus' in client) {
          if ('navigate' in client) { client.navigate(url); }
          return client.focus();
        }
      }
      if (clients.openWindow) return clients.openWindow(url);
      return undefined;
    })
  );
});
