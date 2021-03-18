'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
    ".idea/modules.xml": "9e76b956e97dbf7d14a4b3d83c8c2375",
    ".idea/web.iml": "c5824d95348e32b80a039f88b729eb70",
    ".idea/workspace.xml": "b8ebdd606eef14c3f6f6a5a5aa7e8e34",
    "assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
    "assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
    "assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
    "assets/NOTICES": "734ebfb39f2c9d90789ac1f84203b88d",
    "assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
    "assets/packages/flutter_feather_icons/fonts/feather.ttf": "c96dc22ca29a082af83cce866d35cebc",
    "assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
    "assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
    "assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
    "CNAME": "5c704cf9746d76e27949a42858fa5fb0",
    "favicon.png": "c346b0176d37c8af6055f93c93b6ed4d",
    "icons/Icon-192.png": "4693ba833c3c7fe21e069a425ad5cf68",
    "icons/Icon-512.png": "2786a256a429625e43a2f5061d0498b0",
    "index.html": "79a6b4473367e1a3bb41e074b9c11b60",
    "/": "79a6b4473367e1a3bb41e074b9c11b60",
    "main.dart.js": "a5c32ca6dda4b6453a279520bb5ebf76",
    "main.dart.js_1.part.js": "82b0ecdf22f4f33c0b3ef88ff1c7d592",
    "manifest.json": "092bf39b4c8d55931584f31fdbe666e0",
    "version.json": "96ab7eefe96e9df7e9b412da53aaf780"
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
self.addEventListener("activate", function (event) {
    return event.waitUntil(async function () {
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
        .then((cache) => {
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
