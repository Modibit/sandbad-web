'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "78ef8da397a019ce70a558ab70200d6b",
".git/config": "16468fb4e30673ffdccbb89c06369684",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "111c186e254f8084d635cb88104acdf3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "5d2afc42999e3dde8569bf52feccd7e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6795a966d45d7b233eff91afcc60d4ec",
".git/logs/refs/heads/main": "6795a966d45d7b233eff91afcc60d4ec",
".git/logs/refs/remotes/origin/HEAD": "a8e1924d3492acdea701d35572ddb300",
".git/logs/refs/remotes/origin/main": "08e4d221360c710dc7af4129c9bfed05",
".git/objects/04/63e9cc94982606d62f9779c19ed647451f3d82": "39e34383b016b3ea2c55cfd1d9430b24",
".git/objects/07/13315ebb800c2dbc146186e8a76113c5810fd2": "5460e8e723f869c2a18b4c17ab5fa8ed",
".git/objects/0d/c63722a379398e8a5c0eafeaea4ceb985924fd": "c67011992ffba33c821074650675c3ba",
".git/objects/13/436545119c03917872d4dbbd7a7e6937da86f6": "48aa4075ec98373e9d4a6581330c552f",
".git/objects/13/7019c52f929ee53aae01cbb4ab81f99703a536": "af3ec2c41035bfa1a5c6af85c1024b77",
".git/objects/1e/938d43b4d3b818fdc0dd994680e796e1b1d71b": "badefc32b9612f655eeaaf24d273798f",
".git/objects/47/40a233dfa4e114670565bd1df3cc76302bdb4c": "26888c0cc637aa7162f45eec98165adb",
".git/objects/47/6edbcb9b1652e5a8e3293c71d43dc1d843d409": "ddd39984124038cf7277fea76df31fc9",
".git/objects/54/33c6cbed0260e8dac3b6eb970684b3db72d08b": "60983b319354567f52fff1fd53276928",
".git/objects/60/25913637b2468a77c7f668e348154ed34fe482": "bd5956de8d00cdbc0748855e98b50db1",
".git/objects/62/2ba647ef24719385def5d21d39445262c99465": "87a6ea3fa180146ef5b96c334e944648",
".git/objects/6f/a9faaf269ff63cbbc73d49946f1a6612a478de": "8683625d532d0ea3e706ca5fa9fabb4a",
".git/objects/77/57f9a472ab8761e29b7e850d3030a34126df34": "76e3e74cb1d2e11f9d47f77760764d1f",
".git/objects/8c/9f5789fe4f2d1513acbf823383b8b8d0aff381": "8aa665b967a89c5bdbb47db60278d655",
".git/objects/9e/12e82830b050abf258f61a81925d8239f543a2": "1199f4a735b00c2724e6a7e371bd3a40",
".git/objects/9f/3d9142b9863dc58df72bd9fe7be56f9d85f965": "5627627c6101b6ae278e6f9d20c5dd59",
".git/objects/a4/17027258c38072895314aa4696a8eac17c210a": "47509d02de591200db7980fbdecfdaf0",
".git/objects/ab/cf0af0618db60e9d11df665e3fa06e54455582": "00d9d1dbf6d72d60f71cd290137f79a7",
".git/objects/b2/5ff98c4b4babf8cb6f7d811503b09daee788dc": "a0494beb3be7c32f3d553fe4c0585d44",
".git/objects/ba/64e4c86094f5ed35adc8fbea73b9320c5d78be": "fc508c0068714e629944965c35cda81c",
".git/objects/ba/99c708da6e0870b86759ac85df2aebfe841a16": "d30b8c0855e2a74482c608bc56857753",
".git/objects/be/d1e54454d9b646911631dc7b338fb2001fe993": "e4a0594d369ebdc70e05b2d22bcd5b82",
".git/objects/c9/83c88844f702c8dc2ad676ba6b1ede443850cf": "8a053f83219b7f148867376dbce5b9c9",
".git/objects/ce/708362faf6a8f6f5a78dd07b025b50e0d11654": "78ce29b5fb98a266e8ede919cf2f0c80",
".git/objects/e5/bb8ca4840bde9a8ef186355f2c44c730f79796": "a73d1862d84c542f348c4a21fa0e96e5",
".git/objects/ee/5baf34520aafdced018b976e216b4cab111a27": "4169d413a80a7f28da46338f49262a0e",
".git/objects/fc/db6ebc84b7f57a745281aa72b76915b5416f7b": "f33b82730ddc8841977dc56f7e75e4ff",
".git/objects/pack/pack-c10ee09a84117279dfcfbe39537d208b9ee5eb31.idx": "21a51aa0ec76168aa7dfd54923e95f40",
".git/objects/pack/pack-c10ee09a84117279dfcfbe39537d208b9ee5eb31.pack": "6eccd40ec62073d6eb4f91a21ddd6ebb",
".git/ORIG_HEAD": "cca4a8b8c41f034b96abe7e26d499f03",
".git/packed-refs": "95764f1fe66ad736faa76bf9c17ede19",
".git/refs/heads/main": "cca4a8b8c41f034b96abe7e26d499f03",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "cca4a8b8c41f034b96abe7e26d499f03",
"assets/AssetManifest.bin": "a03e9710450cf2d2adce2749669065cd",
"assets/AssetManifest.bin.json": "376841f58bfb5ec577e7d1082e41e2aa",
"assets/AssetManifest.json": "eadd26d0e6543dad8c2f505ba230c6ae",
"assets/assets/home.svg": "a861e3f5fffb4fda52021692df8a1665",
"assets/assets/logo-white.png": "874977b15f57e4e83a267ef021a87036",
"assets/assets/logo.png": "24a9c40a7ecb5627fce2318827d6ddbe",
"assets/assets/main_arc.svg": "00cc82398a11bd5d07db8dfe36534132",
"assets/FontManifest.json": "7324a01be4357138b4ebd6b8c14b495b",
"assets/fonts/estedad/Estedad-Black.ttf": "dca3f1b4d46ef618678e2f8e1ade345a",
"assets/fonts/estedad/Estedad-Bold.ttf": "73f179dc36128fa8d3360ff1b5792795",
"assets/fonts/estedad/Estedad-ExtraBold.ttf": "3992165233a3fa9f4854c44236575ca1",
"assets/fonts/estedad/Estedad-ExtraLight.ttf": "00cd93523c1a4ba4f6622e41fd536ac3",
"assets/fonts/estedad/Estedad-Light.ttf": "26df9d134b9bfa3d67dacda1b34c3aa9",
"assets/fonts/estedad/Estedad-Medium.ttf": "969aabb0a8c4242554c0e694eedd11c6",
"assets/fonts/estedad/Estedad-Regular.ttf": "381bf1cf1f550c6e19a074ad80261717",
"assets/fonts/estedad/Estedad-SemiBold.ttf": "63492544fa9b1e29f2b43f0fd9d51da2",
"assets/fonts/estedad/Estedad-Thin.ttf": "997a0680ffcc0c2b8bd9c6a6d4bb2542",
"assets/fonts/iranyekan/IRANYekanBlack.ttf": "4eb982a0a4d7b13bb76a8612c5a5266f",
"assets/fonts/iranyekan/IRANYekanBold.ttf": "32122790bf8632ba09a620d8f3cc2ed4",
"assets/fonts/iranyekan/IRANYekanExtraBlack.ttf": "42c80d421a06206fa60612782d8c4501",
"assets/fonts/iranyekan/IRANYekanExtraBold.ttf": "6848ecb8fc8ee8dd61569bcacf96a440",
"assets/fonts/iranyekan/IRANYekanLight.ttf": "54f4afb6b53b06c1db8092a70293cd90",
"assets/fonts/iranyekan/IRANYekanMedium.ttf": "f4afe6ad7a3e91864416f5c8a2bdbca5",
"assets/fonts/iranyekan/IRANYekanRegular.ttf": "ffac8e68c30515e384f6d1866119a383",
"assets/fonts/iranyekan/IRANYekanThin.ttf": "a16b0b55cbfa6a02ff54d537ad5328ef",
"assets/fonts/MaterialIcons-Regular.otf": "b46e760cd492f46b3d0fe1ff01b2c570",
"assets/NOTICES": "e754fd87b3cb12f169789eef52f092cd",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "70298d91c61f7a9659dca51ec3b75ebd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "b778774bf20c389c7a5b817578da32bf",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192-white.png": "891a6aab505f82deaae0c19a38662b08",
"icons/Icon-192.png": "71df3c44beb4b28c5a70fa445914d80b",
"icons/Icon-512.png": "c6e78bac9b59a6eb2545d1da5345fb15",
"icons/Icon-maskable-192.png": "71df3c44beb4b28c5a70fa445914d80b",
"icons/Icon-maskable-512.png": "c6e78bac9b59a6eb2545d1da5345fb15",
"index.html": "d645085629ab283d6a2ad03af3868cbc",
"/": "d645085629ab283d6a2ad03af3868cbc",
"main.dart.js": "401e4a1762aaa4101837b03a5499fc18",
"manifest.json": "127095b503d380cf6d9dcc5c81655cb3",
"version.json": "bcc742a871bcb31ad4fed0ed2682208b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
