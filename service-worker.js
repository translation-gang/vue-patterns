/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "735776f72b9a12b8802328a274bcbce7"
  },
  {
    "url": "assets/css/0.styles.a3e46cac.css",
    "revision": "9ef0b64d28ee499977311b72130ba5b3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7c26cd00.js",
    "revision": "8b869ac0ce41bad495586c180d5dacd9"
  },
  {
    "url": "assets/js/11.15c9e816.js",
    "revision": "726072ce70cf4db8650c7295e8770575"
  },
  {
    "url": "assets/js/12.aac6003e.js",
    "revision": "b7c873ee325bb8f76791621718a92cc9"
  },
  {
    "url": "assets/js/13.a8522495.js",
    "revision": "3343ee29c31bbfe8ad6f7d47361e9689"
  },
  {
    "url": "assets/js/14.7d64550b.js",
    "revision": "3e5976b3eb87012490de21999c25e790"
  },
  {
    "url": "assets/js/15.3f16450c.js",
    "revision": "0e2d229b346611901d7300ffc460454f"
  },
  {
    "url": "assets/js/16.9d1d8ed5.js",
    "revision": "184c5484c9c3a68c8e43db62d84287b3"
  },
  {
    "url": "assets/js/17.bab10368.js",
    "revision": "31fc6f397409e51b19ca18f91fb83c54"
  },
  {
    "url": "assets/js/18.481ab2d7.js",
    "revision": "8c882873ba270b52587079bd867a12c2"
  },
  {
    "url": "assets/js/19.6f054d7c.js",
    "revision": "27f742614467d7409564efcba3614fc0"
  },
  {
    "url": "assets/js/2.178aa6c2.js",
    "revision": "2014c261c578f3061f13f24cf3464593"
  },
  {
    "url": "assets/js/20.89c26700.js",
    "revision": "bc000c529d4955793e16ef4dea41e5eb"
  },
  {
    "url": "assets/js/21.7dfdbf24.js",
    "revision": "b238aaf84478ce4733e2a1b40493f5c4"
  },
  {
    "url": "assets/js/22.5666af86.js",
    "revision": "5427601ea2b158e52016131e4ad74a11"
  },
  {
    "url": "assets/js/3.733b4fc2.js",
    "revision": "3e2946e5d44e5d93f2cb5a8bf8510bae"
  },
  {
    "url": "assets/js/4.98d3bb88.js",
    "revision": "566a3f4576cbda10a33b041d1f80a79f"
  },
  {
    "url": "assets/js/5.427abb1a.js",
    "revision": "52f587d3083b65bea6d3187fd1929a66"
  },
  {
    "url": "assets/js/6.7c5a61a4.js",
    "revision": "782e34c4416b02c25a819738f35462a9"
  },
  {
    "url": "assets/js/7.3aacbec8.js",
    "revision": "e78f7d642192aa492d8caa8677ebdf85"
  },
  {
    "url": "assets/js/8.96b7b19a.js",
    "revision": "5594f14e1abb81cdbd3b9fb8afa4b779"
  },
  {
    "url": "assets/js/9.0c267817.js",
    "revision": "b20ea851a91da325b77b2e2660719d9c"
  },
  {
    "url": "assets/js/app.2fd59e67.js",
    "revision": "c2b8459013a23d4e92c43a9d2c7dfa9f"
  },
  {
    "url": "icons/android-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/android-icon-192x192.png",
    "revision": "b0d517030a965c4b7f98f24e2b5415ce"
  },
  {
    "url": "icons/android-icon-36x36.png",
    "revision": "ce1f6fc73c4beff021d4ceccb94671f6"
  },
  {
    "url": "icons/android-icon-48x48.png",
    "revision": "6041d37258923a0f5bed736ccd885a5f"
  },
  {
    "url": "icons/android-icon-72x72.png",
    "revision": "11a8afbc5d9f4bc10114c74246c9e849"
  },
  {
    "url": "icons/android-icon-96x96.png",
    "revision": "cb504e491e70597af0261cbbcb78b2a8"
  },
  {
    "url": "icons/apple-icon-114x114.png",
    "revision": "a15689d1a60d96f81a9ff1194930975c"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "f20d4422b750fcdd2c96046da813e701"
  },
  {
    "url": "icons/apple-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "cbda5626bfcf66615f90e6a9ff78333c"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "eb7c5ef78c76740395c665dfb54f99f4"
  },
  {
    "url": "icons/apple-icon-57x57.png",
    "revision": "670df00471999c0ee43995c91a6f31b9"
  },
  {
    "url": "icons/apple-icon-60x60.png",
    "revision": "e04ebe51d4c68d86dcb2fe96abd7548e"
  },
  {
    "url": "icons/apple-icon-72x72.png",
    "revision": "11a8afbc5d9f4bc10114c74246c9e849"
  },
  {
    "url": "icons/apple-icon-76x76.png",
    "revision": "6a134cf3a30a5abc95756e40533aee9d"
  },
  {
    "url": "icons/apple-icon-precomposed.png",
    "revision": "4e1ccf073355d07b399c64702f576f90"
  },
  {
    "url": "icons/apple-icon.png",
    "revision": "4e1ccf073355d07b399c64702f576f90"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "d960221622ef741e94d94594a2002ff7"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "97262e1be19354f0db0c013c1823d674"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "cb504e491e70597af0261cbbcb78b2a8"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "4028d709022600cbac9d41668815c50a"
  },
  {
    "url": "icons/ms-icon-150x150.png",
    "revision": "ce5742fa510bdd5d9875b4cc5953d235"
  },
  {
    "url": "icons/ms-icon-310x310.png",
    "revision": "5cec2130d8b4b2524d356f08b663e0ec"
  },
  {
    "url": "icons/ms-icon-70x70.png",
    "revision": "0e920f4e15ee53318b93ae959a6e4989"
  },
  {
    "url": "index.html",
    "revision": "5ecc94930309376db3bd5544110e0d37"
  },
  {
    "url": "learn-vue-logo.png",
    "revision": "377227e84682319c70fa353280fb8deb"
  },
  {
    "url": "patterns/index.html",
    "revision": "156f66830b44baae6928010a0edac10c"
  },
  {
    "url": "ru/index.html",
    "revision": "d1b5263287f8da86c9c1f0a942b14d5d"
  },
  {
    "url": "ru/patterns/index.html",
    "revision": "91d786880629fbd4b4076e76de26afad"
  },
  {
    "url": "ru/sponsors/index.html",
    "revision": "e6abaab8fc9446238f8020ea761d4810"
  },
  {
    "url": "ru/translations/index.html",
    "revision": "15104d59a1dd5bf3e74506b2bbb488e0"
  },
  {
    "url": "ru/useful-links/index.html",
    "revision": "11c0c35a5a24c7a983a2c316176e993e"
  },
  {
    "url": "sponsors/index.html",
    "revision": "c88bcef547110741ccccb476149accc8"
  },
  {
    "url": "translations/index.html",
    "revision": "f95230a39396ec9e135ee84309ad3d77"
  },
  {
    "url": "useful-links/index.html",
    "revision": "61075fcaa8cc3733829d21e65a559d8d"
  },
  {
    "url": "vue-patterns-hero.png",
    "revision": "2a63731bd05e1fad9cbd8a0834b46858"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
