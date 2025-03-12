self.addEventListener('install', event => {
  event.waitUntil(
  caches.open('v1').then(cache => {
    return Promise.allSettled([
      cache.add('/TCM/'),
      cache.add('/TCM/index.html'),
      cache.add('/TCM/styles.css'),
      cache.add('/TCM/js/main.min.js'),
      cache.add('/TCM/js/car-details.min.js'),
      cache.add('/TCM/js/data.min.js'),
      cache.add('/TCM/car-details.html'),
      cache.add('/TCM/assets/other/TCM-ICON.png'),
      cache.add('/placeholder.svg')
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