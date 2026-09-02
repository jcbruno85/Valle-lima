const CACHE_NAME = 'coina-cache-v3';
const urlsToCache = [
  './',
  './index.html',
  './app.js',
  './data.json',
  './manifest.json',
  'https://cdn.tailwindcss.com',
  'https://img.icons8.com/color/48/citrus.png'
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  self.skipWaiting(); // Fuerza al Service Worker entrante a activarse inmediatamente
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Abriendo caché de la Web App Coina v3...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación y limpieza de cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    self.clients.claim().then(() => { // Permite que controle las páginas abiertas de inmediato
      const cacheWhitelist = [CACHE_NAME];
      return caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              console.log('Eliminando caché antigua:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      });
    })
  );
});

// Estrategia NETWORK-FIRST con Fallback a CACHÉ (Ideal para desarrollo y actualizaciones rápidas en celulares)
self.addEventListener('fetch', event => {
  // Solo procesar peticiones GET internas o CDNs conocidos
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Si la respuesta de red es correcta (status 200), la clonamos y guardamos en caché
        if (response && response.status === 200) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
        }
        return response;
      })
      .catch(() => {
        // FALLBACK: Si no hay señal o falla la red, servimos directamente desde la caché local
        return caches.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            return cachedResponse;
          }
          console.warn('Petición fallida sin conexión y sin caché para:', event.request.url);
        });
      })
  );
});
