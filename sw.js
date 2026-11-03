// Service worker minimal : permet d'installer l'outil comme une application.
// Il ne met rien en cache : la page est toujours chargée à jour depuis GitHub.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {});
