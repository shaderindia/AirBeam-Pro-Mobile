// ponytail: stub so tailwind.config={} doesn't throw when CDN is unreachable
// In practice the app needs internet anyway (PeerJS signaling), so this is a graceful-degradation fallback
window.tailwind = window.tailwind || { config: {} };
