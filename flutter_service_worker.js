'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "93857-abstract-modular-cube-1.gif": "e71229549eb628ac2386e16ab5577c3a",
"assets/AssetManifest.json": "4738ef6bad46e6a0f222cd63a646a889",
"assets/assets/images/About%2520us/aboutusilus.png": "bf33f8452e8a2778992bf2b83e94c7f2",
"assets/assets/images/About%2520us/goalsilus.png": "282e0d8f687aaa5d1755b211cdb444c9",
"assets/assets/images/About%2520us/howweworkilus.png": "4d4f11b027c2133110a71c772d0f6012",
"assets/assets/images/Careers/careerilus.png": "06b9ed3fc793d4f874e4ac93d349208e",
"assets/assets/images/comunity.png": "593f4c3a2c27921c6d7e13b947123332",
"assets/assets/images/diallogo.png": "2ede0c0d2c7e135d1aec96d869777fa7",
"assets/assets/images/Facebook.png": "6db0ce1ee5960364b8d9fae952fb1ba7",
"assets/assets/images/googlelogo.png": "e78a27b1320426705c8bec4bc2b68ae8",
"assets/assets/images/Header%2520Logos/aamtspnlogo.png": "4bbbe0d35340094813f6bf441fb9b42f",
"assets/assets/images/Header%2520Logos/companylogo.png": "0057bf32d3572d580e6aca9f65b4f126",
"assets/assets/images/Header%2520Logos/headermenuicon.png": "fee3b55f99cad5f7189f77ad2f6461b4",
"assets/assets/images/Home/homeillus.gif": "b0115f174907639ba96666d0251570b5",
"assets/assets/images/Home/homepageilus.png": "d7b98c16c5f4b57febc26dea175cb342",
"assets/assets/images/Home/productilus.png": "6280dc8f129b40b47e9b412ac230e595",
"assets/assets/images/Home/websitebuilder.png": "cead15280c58b18f164b6d61ae3075a8",
"assets/assets/images/Instagram.png": "981d56fbca8f2e839de05980d8170145",
"assets/assets/images/Interests/Arts.png": "47236f96d791e86c6296afb36a883756",
"assets/assets/images/Interests/Coding.png": "3ebb4e1592a8478948f59750b47f3a5a",
"assets/assets/images/Interests/Metaverse.png": "e962dbc60aa27343ed1b09ae0f559520",
"assets/assets/images/Interests/Philosophy.png": "451d004b40004e6a2acd1b4f0b16ecd1",
"assets/assets/images/journzlogo.png": "cb17fdd74d5a077325ecc884e4842a79",
"assets/assets/images/Linkedin.png": "5ee884f84bcf2642ede59c97349c44c7",
"assets/assets/images/loginbackground.png": "a285eab0230f4151245f87434452b4c9",
"assets/assets/images/logo.png": "3d36af4338a9681de9345c7d27680051",
"assets/assets/images/maillogo.png": "52a782527194e30285be643759c052cb",
"assets/assets/images/Skills/C.png": "d74fc1b927feca6c71740f6bb1558db0",
"assets/assets/images/Skills/Canva.png": "6c0c0bb8c379f0eab04253bca8ad2b4e",
"assets/assets/images/Skills/Css3.png": "3ae334389eff6ab0119073fb94e75a6a",
"assets/assets/images/Skills/Dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/images/Skills/Figma.png": "b821cfd18069f48cb9734d718a403284",
"assets/assets/images/Skills/Firebase.png": "44f9a9bf124e83173e8e1cd5254b55ae",
"assets/assets/images/Skills/Flutter.png": "803eb94843ce42a24f43a2f4b8245945",
"assets/assets/images/Skills/Git.png": "cfa3726c55880f0a5592e5c71c32226d",
"assets/assets/images/Skills/Html.png": "c3f1d921e7a3c4a44355a8365c860b9b",
"assets/assets/images/Skills/Java.png": "56805e36184619d7c2ca74691406b742",
"assets/assets/images/Skills/Sql.png": "ae69daba639f7885251dcd1f0dd97985",
"assets/assets/images/Teams/personimag.png": "70f7030874f19687dd9d8c3b30251550",
"assets/assets/images/Teams/teamilus.png": "34863993130e48195fea166f5f92b478",
"assets/assets/images/Twitter.png": "d78aa94f377ad0d952b9fdc99c337084",
"assets/assets/images/Whatsapp.png": "646d1031ca1556a146cf5bb88dac58a6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "edfd61698035979eea3f562daf008ef1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "9f672f9b8c20b48c6c6a66d83bbfdb7d",
"icons/Icon-192.png": "7cf9127cdc2fc8ca8dc2834cf8673ad0",
"icons/Icon-512.png": "17b743caff34f389d3a6aebd78dd9597",
"index.html": "081aa8dc436e003968a37ad300fd7b7b",
"/": "081aa8dc436e003968a37ad300fd7b7b",
"main.dart.js": "73f47a720d8474c569ff153ce23abf4c",
"manifest.json": "e664b6d98a6e2b8be9f8f041bab2ca35",
"version.json": "72bef1bb95ff3b30ead8885df8cbf822"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
