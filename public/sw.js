if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,r,n)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(r.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=n(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-432e0d0b"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/bc757513ae5f41cb278320da9098ebee4d973da0.eb62e695ea14086e5524.js",revision:"b6a7574de6f7e5d52d774efd4a054982"},{url:"/_next/static/chunks/df34a4feaa5e4db3c859f1a0fba6dcae8f0e76da.f45d5edcfa22eb9d1e07.js",revision:"73ba922e45439839432d43e0e45be116"},{url:"/_next/static/chunks/framework.c6faae2799416a6da8e8.js",revision:"a07dacbb502f5257565ceb7d460e71e6"},{url:"/_next/static/gq58CIh7MC0HCqhUY5ZXA/_buildManifest.js",revision:"fb96ae7926f5104f50f0cf1b3a23a9b5"},{url:"/_next/static/gq58CIh7MC0HCqhUY5ZXA/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/gq58CIh7MC0HCqhUY5ZXA/pages/_app.js",revision:"4a20d04f8d7632c45e80ed9d6afb7fee"},{url:"/_next/static/gq58CIh7MC0HCqhUY5ZXA/pages/_error.js",revision:"e8d6ef586da259ada3e1086fe5aeda95"},{url:"/_next/static/gq58CIh7MC0HCqhUY5ZXA/pages/index.js",revision:"648708504fb7d680f16e278f8005138d"},{url:"/_next/static/runtime/main-2e8cabeb5384fc002ce1.js",revision:"2f2c51b9bc66921eab2271209c4ea2a3"},{url:"/_next/static/runtime/polyfills-788051cc5ba9cb123111.js",revision:"a0ea5f96a4be5b35ba9bd515ec22017d"},{url:"/_next/static/runtime/webpack-c212667a5f965e81e004.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo-gh.svg",revision:"e3a0c31390db72fd374570f4a57c56b0"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"559e0d07c7e68a9819b40179a63bda84"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));