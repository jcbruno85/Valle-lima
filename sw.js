const CACHE_NAME = 'coina-cache-v2';
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
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Abriendo caché de la Web App Coina v2...');
        return cache.addAll(urlsToCache);
      })
  );
});

// Activación y limpieza de cachés antiguas
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Eliminando caché antigua:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptación de peticiones de red para servir desde caché (Offline First)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Retornar recurso cacheado
        if (response) {
          return response;
        }
        
        // Si no está en caché, intentar red
        return fetch(event.request).then(
          response => {
            // Verificar respuesta válida
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clonar respuesta para guardar en caché
            var responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // Si falla red y no hay caché, retornar mensaje vacío o fallback
          console.log('Petición fallida en modo desconectado para:', event.request.url);
        });
      })
  );
});