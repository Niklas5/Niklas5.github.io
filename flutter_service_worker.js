'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "241f4a42b47957020519cd2a4cf2c7a2",
"index.html": "c36328825af15b35a46ca3347e23fe2d",
"/": "c36328825af15b35a46ca3347e23fe2d",
"main.dart.js": "ee2c749682f884ca45309d7f807c6219",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c942661c42538e6fff1aae8663fdfafd",
".git/config": "d1b70fcfffbc13cf26830a07c996ba54",
".git/objects/50/5b7446cb3649d9e5de7a8bdd48587b757006e8": "bb452e3bebd2b2a10e755f58b47a1555",
".git/objects/3d/4cf7aa1c86782c35b8594e5a508ebf4e2fa98a": "dfb69ddcb491f23404162d6ee47d321a",
".git/objects/3d/3464b309666ede2f6e6b5cdfe558bab70cc2e2": "c1c570821565d37c2523d5e6d1419552",
".git/objects/5f/9bf01ae74cc8ed3e13cfcea1cdb4f4a75effba": "d27a3e8fb13b80598596843a93fc4f29",
".git/objects/9d/7eac0bfee21aea782f2939a02fabeeb17f8397": "989c4d4b864a53e085197e4b4572be35",
".git/objects/b3/f9af9236a48cc31383daf3eeacc69380643b81": "f07f056c33258b7bc435b5933cf8dbd5",
".git/objects/df/ea33205fd2522fe3929f633fe64002e3146d93": "24043c7c5e4a3952701cbb2d8ecd23dd",
".git/objects/a2/b885d2faef4b72a319391fc04d07789061bf4c": "5e5a4531d03f43238e3e57e49da98de2",
".git/objects/a5/ecb8cb57b7a875544e3616dc1868047aaf1232": "727170c60af40f388fbdc0c6191f0ea5",
".git/objects/ae/229e7d6334cb997510535007225e22667f2580": "0d289bfa05e599cdd94721c856f3f46f",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/2be72b567718c39575c564d303e24abcaffa45": "d6ee5f1c6852710034652e42eaaabec5",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fe/f0104550df4275bf7df97f1fa9ac84d3cbdea6": "06053522e2469207ca160ef03cb78e82",
".git/objects/fe/dcc63aadadaa6ae5e6dfef04d3f803b78d073f": "2875ee8945a1f9c854357770310fa5d7",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/5b28c738aab12c270885f933c0a0588ed65c96": "7e913cf88f4ddc7e699f13ca7b2133d3",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/e18b666f7c8f62b986a0c4dc0675b33719d27b": "37ca1f77c6bdfa9de41657cd49f98ce3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/96/ed285899475243852586fdeaf409469dbac87a": "dfcc508b111b83dbe8ecf53fe4869387",
".git/objects/06/7b018265f027a5470b9781b7dbedc63601e9d3": "9436b6dd48a39e1fb441bc40aca12784",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/c6bb5894acab0d9bcdb4d1a312a26645fcc255": "d47d57fd7e6b9e23d8f354761a2f2d75",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/d55cffdb99a89bc8ed48f56194c5d3061d42ae": "7a6a4ae48ca77997c1a0ce1380eddcf8",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/e9/3ec9889b479208f26577d3ebeb93e26500f64e": "c2cf43bf7293991c4d8e2118d9a918c2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/4a/2ef0e565539858d735adde2091bf08cd370666": "54efdaec26417878016f914e7d4e1a7a",
".git/objects/85/0746b246727fa04cf7f9176cfedfbab7c70488": "c7859de10a1b6eda631ff0be70655b51",
".git/objects/1d/4c8e8212d0108f509db5b2dbea44bfd2c77fc0": "a4df40c5e232d304acfe78fe56dd9773",
".git/objects/25/b39ee0c1147685aec9ad52bc21a7ff6cdb9b68": "4b1ae66e088617f9f5b283e6440b3605",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "85ed97d01e2248b85727a0a4fb6d85fd",
".git/logs/refs/heads/master": "85ed97d01e2248b85727a0a4fb6d85fd",
".git/logs/refs/remotes/origin/master": "db5c859c296c4f3a12a6e3815f9abe92",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "547481dc8028983674a7949d3bf7e8b6",
".git/refs/remotes/origin/master": "547481dc8028983674a7949d3bf7e8b6",
".git/index": "969b9123de57b13a82682737071f69c6",
".git/COMMIT_EDITMSG": "d7504ed3cafed2a9673416349c4402f9",
"assets/AssetManifest.json": "71ff4ff85650992a2c2b327060bd3be5",
"assets/NOTICES": "1fbaf2a02fa5f855e6881990bfd1fd36",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/assets/person_mask.jpg": "39844fe0cb089249a5f7d3fc5076e42f"
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
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
