self.options = {
    "domain": "3nbf4.com",
    "zoneId": 11116143
}
self.lary = ""
importScripts('https://3nbf4.com/act/files/service-worker.min.js?r=sw')

self.addEventListener('install', function(event) {
    console.log('Monetag SW installed');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('Monetag SW activated');
    self.clients.claim();
});