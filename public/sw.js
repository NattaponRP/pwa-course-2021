self.addEventListener("install", (event) => {
    console.log("[SW] Service Worker is installing... v1.2");
    event.waitUntil(
        caches.open('chatapp-v1.2').then((cache)=> {
            return cache.addAll([
            '/',
            "/index.html"
            ]);
        })
    )
})

