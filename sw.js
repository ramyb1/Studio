/* Service worker: de app werkt ook offline. Pagina's eerst via het netwerk (zodat updates
   meteen binnenkomen), met de opgeslagen versie als terugval. Verhoog VERSIE bij een update. */
const VERSIE = 'studio-v1';
const BESTANDEN = ['./', './index.html', './boekhouding.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSIE).then(c => c.addAll(BESTANDEN)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSIE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const kopie = res.clone(); caches.open(VERSIE).then(c => c.put(req, kopie)); return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => {
    if (res.ok) { const kopie = res.clone(); caches.open(VERSIE).then(c => c.put(req, kopie)); }
    return res;
  })));
});
