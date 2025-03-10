self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/js/main.js',
        '/js/car-details.js',
        '/js/data.js',
        '/car-details.html',
        '/assets/other/TCM-ICON.png',
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
          if (event.request.url.includes('/assets/cars/') || event.request.url.includes('/assets/icons/')) {
            cache.put(event.request, fetchResponse.clone());
          }
          return fetchResponse;
        });
      });
    })
  );
});