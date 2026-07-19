// Service worker minimal, ajouté le 19/07/2026 pour rendre Harmonize installable
// (PWA) sur téléphone/ordinateur. Volontairement, il NE MET RIEN EN CACHE : un
// souci réel a déjà eu lieu (voir le commentaire en haut de index.html, 13/07/2026)
// où un téléphone gardait une ANCIENNE version de l'app en cache après une mise à
// jour. On ne veut surtout pas réintroduire ce risque. Ce service worker sert
// uniquement à remplir la condition technique "il existe un service worker actif"
// nécessaire à l'installation — chaque requête part toujours au réseau en priorité.
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
