const CACHE_NAME = 'v1.0.3'; // Cambia el nombre de la caché para forzar la actualización
const ASSETS_TO_CACHE = [
  '/TCM/',
  '/TCM/index.html',
  '/TCM/styles.min.css',
  '/TCM/js/main.min.js',
  '/TCM/js/car-details.min.js',
  '/TCM/js/data.min.js', // Asegúrate de incluir la versión actualizada
  '/TCM/car-details.html',
  '/TCM/assets/other/TCM-ICON.png',
  '/placeholder.svg'
];

// Evento de instalación
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Evento de activación: elimina cachés antiguas
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Eliminando caché antigua:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Evento de fetch: servir desde la caché o desde la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (event.request.url.includes('data.min.js')) {
        return fetch(event.request);
      }
      return (
        response ||
        fetch(event.request).then(fetchResponse => {
          return caches.open(CACHE_NAME).then(cache => {
            // Cachear dinámicamente las imágenes de las carpetas cars e icons
            if (
              event.request.url.includes('TCM/assets/cars/') ||
              event.request.url.includes('TCM/assets/icons/')
            ) {
              cache.put(event.request, fetchResponse.clone());
            }
            return fetchResponse;
          });
        })
      );
    })
  );
});