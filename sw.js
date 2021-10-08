var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/home/estiloindex.css',
  '/povos indígenas e populações tradicionais/conteudo.html',
  '/povos indígenas e populações tradicionais/style1.css',
  '/floresta e domínio amazônico/style1.css',
  '/Educação Ambiental/style1.css',
  '/Educação Ambiental/conteudo.html',
  '/Arte e Reciclagem/style1.css',
  '/Arte e Reciclagem/conteudo.html',
  '/main.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});