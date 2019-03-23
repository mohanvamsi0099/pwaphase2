self.addEventListener("install",function(event){
event.waitUntil(
caches.open("version1").then(function(cache){
  return cache.addAll([
//      "./index.html",
//      "./css/form.css",
//      "./css/index.css",
//      "./css/resume.css",
// "./js/store.js",
//      "./js/get.js",
//      "./js/resume.js",
//      "./js/form.html",
//      "./js/index.html",
//      "./js/resume.html",
     // "./js/serviceworker"

  ]);
})
);
});
self.addEventListener("fetch",function(event){
  event.respondWith(
    caches.match(event.request).then(function(resp){
      return resp || fetch(event.request).then(
      function(response){
        caches.open("version1").then(function(cache){
          return cache.put(event.request,response.clone());

    })
  });
}));
});
