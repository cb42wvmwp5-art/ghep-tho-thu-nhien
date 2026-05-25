const CACHE_NAME = 'ghepho-app-v1';
const urlsToCache = [
'./',
'./index.html',
'./manifest.json'
];
// Cài đặt service worker và lưu cache các file cần thiết
self.addEventListener('install', event => {
event.waitUntil(
caches.open(CACHE_NAME)
.then(cache => {
console.log('Opened cache');
return cache.addAll(urlsToCache);
})
);
});
// Trả về file từ cache nếu có, nếu không thì tải từ mạng
self.addEventListener('fetch', event => {
event.respondWith(
caches.match(event.request)
.then(response => {
// Cache hit - return response
if (response) {
return response;
}
return fetch(event.request);
})
);
});
