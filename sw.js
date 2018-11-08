importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {

    const { strategies, routing, precaching, expiration } = workbox;

    const expirationPlugin = new expiration.Plugin({
        // Only cache requests for a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
        // Only cache 10 requests.
        maxEntries: 10,
    });

    precaching.precacheAndRoute([
  {
    "url": "android-chrome-192x192.8bcc7be4.png",
    "revision": "aa5d721ca57385472f7cc712298d80b0"
  },
  {
    "url": "android-chrome-512x512.bbf4b954.png",
    "revision": "1ee07b6e9a30d598ad4666dc71a9d78c"
  },
  {
    "url": "angular.4d96eab7.svg",
    "revision": "af3affa2ddc0c13d97af0caf6a9fbaff"
  },
  {
    "url": "apple-touch-icon.13efa8c3.png",
    "revision": "626681bc4a397ee45c4d6e36f97b9101"
  },
  {
    "url": "assets/cv/CV_ANIEL.en.pdf",
    "revision": "de4d3e17be8f75b9a2bc84705edc0d0a"
  },
  {
    "url": "assets/cv/CV_ANIEL.fr.pdf",
    "revision": "62d0fc37a8c859310e6eadfd430a3361"
  },
  {
    "url": "css.d0a533a2.svg",
    "revision": "7cf04d0372e99d19254cb0a75f95719c"
  },
  {
    "url": "down-arrow.d0582238.svg",
    "revision": "8c56c807a4daf5b59d5f061b1f7f9bd2"
  },
  {
    "url": "envelope.ebf5f186.svg",
    "revision": "b0cd6f198a9dd806b6cc52305dd98145"
  },
  {
    "url": "favicon-16x16.d782d84d.png",
    "revision": "7eab9ecb773aa8b7c6e6a811d03c01f9"
  },
  {
    "url": "favicon-32x32.14536bdd.png",
    "revision": "05dc1c03baed9230889e4c52a5b681a6"
  },
  {
    "url": "git.f771b043.png",
    "revision": "728ff5a8e44d74cd0f2359ef0a9ec88a"
  },
  {
    "url": "github.a75fda5c.svg",
    "revision": "561728587caee81968f536966d336093"
  },
  {
    "url": "hand.af202428.svg",
    "revision": "6161dcce7356eb27d11dcfa6691723dc"
  },
  {
    "url": "index.html",
    "revision": "8e52257a2ca336a7ecaa0873d58ba550"
  },
  {
    "url": "javascript.3999d0b2.svg",
    "revision": "68f97811d992b6def6b7894b0bfc7352"
  },
  {
    "url": "Karla-Bold.785495e3.ttf",
    "revision": "b45be274b8b65fc9c72b038d72486edd"
  },
  {
    "url": "language-picker.87bd7140.css",
    "revision": "b4e8fd103c4a147acd99bb42b3290761"
  },
  {
    "url": "light.84d6075c.css",
    "revision": "ac3303e5e38403afc55e741f99dc7af0"
  },
  {
    "url": "linkedin.ff7e9926.svg",
    "revision": "f83ede3f8a7db025d363234b896777d4"
  },
  {
    "url": "me.333c3858.svg",
    "revision": "7da5849782e10d7f748700b6ce150906"
  },
  {
    "url": "nativescript.cd77e9ea.svg",
    "revision": "e7f764b67580700d60067659a0e5787f"
  },
  {
    "url": "safari-pinned-tab.bc49f294.svg",
    "revision": "f5670cf00032abfd35b961603c5bd858"
  },
  {
    "url": "src.6691111a.js",
    "revision": "5d9e4d15717f64521ad0bcdb2a42cfce"
  },
  {
    "url": "style.df9c491c.css",
    "revision": "e61a389bf3d8040c293a057c5dd262fc"
  },
  {
    "url": "tippy.d96948c3.css",
    "revision": "6b8b3037832e9ddd5b9bcaa1d22b999b"
  },
  {
    "url": "tutorial.e27539b9.css",
    "revision": "0841ac8f4126db49044c2f20207463cc"
  },
  {
    "url": "twitter.9df1e252.svg",
    "revision": "2b0ba343bb727e0451c8dc592ecc7d2a"
  },
  {
    "url": "typescript.359eb395.svg",
    "revision": "bac16da7dbf83209f340c8658eca05e7"
  }
]);

    routing.registerRoute(
        // Cache JS files
        /.*\.js/,
        // Use cache but update in the background ASAP
        strategies.staleWhileRevalidate({
            // Use a custom cache name
            cacheName: 'js-cache'
        })
    );

    routing.registerRoute(
        // Cache CSS files
        /.*\.css/,
        strategies.staleWhileRevalidate({
            cacheName: 'css-cache',
        })
    );

    routing.registerRoute(
        // Cache image files
        /.*\.(?:png|jpg|jpeg|svg|gif)/,
        // Use cache first, network if it fails
        strategies.cacheFirst({
            cacheName: 'image-cache',
            plugins: [
                expirationPlugin
            ]
        })
    );

    routing.registerRoute(
        // Cache image files
        /.*\.pdf/,
        strategies.cacheFirst({
            cacheName: 'cv-cache',
            plugins: [
                expirationPlugin
            ]
        })
    );
}