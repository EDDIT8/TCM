self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/TCM/',
        '/TCM/index.html',
        '/TCM/styles.css',
        '/TCM/js/main.js',
        '/TCM/js/car-details.js',
        '/TCM/js/data.js',
        '/TCM/car-details.html',
        '/TCM/assets/other/TCM-ICON.png',
        '/placeholder.svg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request).then(fetchResponse => {
        return caches.open('v1').then(cache => {
          // Cachear dinámicamente las imágenes de las carpetas cars e icons
          if (event.request.url.includes('TCM/assets/cars/') || event.request.url.includes('TCM/assets/icons/')) {
            cache.put(event.request, fetchResponse.clone());
          }
          return fetchResponse;
        });
      });
    })
  );
});