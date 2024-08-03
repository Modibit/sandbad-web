'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "421a1137f8e2045357fc8c277e951b7e",
".git/config": "16468fb4e30673ffdccbb89c06369684",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "93d011ff0f0f5239c757e5e31cbe98a2",
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
".git/index": "2f688e2abf3032de292fcbbe921caa53",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ea57bbfdef991d457f893a69408c7bb",
".git/logs/refs/heads/main": "4ea57bbfdef991d457f893a69408c7bb",
".git/logs/refs/remotes/origin/HEAD": "a8e1924d3492acdea701d35572ddb300",
".git/logs/refs/remotes/origin/main": "4d325444b3151d09697f478cfd0af3ef",
".git/objects/02/89acd7ced0cba171329c503d38c0e8191073b7": "7579e22a4795a979b231c9c457af8591",
".git/objects/04/63e9cc94982606d62f9779c19ed647451f3d82": "39e34383b016b3ea2c55cfd1d9430b24",
".git/objects/07/13315ebb800c2dbc146186e8a76113c5810fd2": "5460e8e723f869c2a18b4c17ab5fa8ed",
".git/objects/07/262670ada1b1e4b2dfbaed3ab8c90e357bb935": "c26f52d33d182a873d1c4810a1bc405a",
".git/objects/08/414bcc156c505c1bcace4af8e3fe6e1a53aa15": "c3b0b4a63ffedae5768340772a4597b8",
".git/objects/0a/16f5cf7b207b5f959542b0e62bab30a9850db2": "335119a605db17e1ad71e5551b22402d",
".git/objects/0b/c82bdad7bd0a75ad1994cf86288469bdbe9166": "0b255d716559f157a745c63e5ba72808",
".git/objects/0b/ec94f2fd4d1b52f98dd922cada07efb17581e3": "1e3b8b685226362e6bb2d36b025377e6",
".git/objects/0c/6ad8233e2f0fee15e07942d35ea4e032eb713a": "21e895955d38255467fc18162133855d",
".git/objects/0d/c63722a379398e8a5c0eafeaea4ceb985924fd": "c67011992ffba33c821074650675c3ba",
".git/objects/13/436545119c03917872d4dbbd7a7e6937da86f6": "48aa4075ec98373e9d4a6581330c552f",
".git/objects/13/7019c52f929ee53aae01cbb4ab81f99703a536": "af3ec2c41035bfa1a5c6af85c1024b77",
".git/objects/17/85892fff8ce42838bf77e48ff0978a2612b7b3": "e2fbd1a11cfb14408903814f13d28e9c",
".git/objects/19/fc61471458f3115ffe14c385a6c1dc2c4853ea": "43f4bc3def29718d98cf061f52892e95",
".git/objects/1d/49c0849a1e4f7c11a395568f1d7f40e0103419": "9ff3baa7c216f85f1f23720117dee519",
".git/objects/1d/a6cfe6dacd7753f56c874327d815af8ca34f59": "282ed291d65ac256aaf4d9a7db48a5e5",
".git/objects/1e/938d43b4d3b818fdc0dd994680e796e1b1d71b": "badefc32b9612f655eeaaf24d273798f",
".git/objects/20/d3a14f0f2206425909666ed55efc36beec1f97": "cb0a9b64cb5ad0bd85e4de18625c12b4",
".git/objects/25/7140636b97bd2d3d89f3f49aa76f28427f7f30": "8643de1256a29056a621d7da4c54aeac",
".git/objects/27/d980a69017ae0ae0f86246cdab0f1c4e9f5663": "0301aacd130a375c6355fbb2279da66a",
".git/objects/28/028d565400978112a301bbc38993e4f501f33a": "9d1e29b955fc93273cccf60357d8eedd",
".git/objects/37/98dd67a886699e25d98569e31ca8f771efc8df": "08af8f11df7ee870a9d79ab98c09c3cd",
".git/objects/3b/9ab9d67e142f69333cc3061b6cfb77c148118b": "0eda52d009aa8903d1045ba23c0389d7",
".git/objects/43/8128091f28b2fb5e278178ca3360fade4cda8d": "0d4ced293b36d8c7e8a362ff4ef4f3ec",
".git/objects/43/b8eb7e5407ac572337a7b9509bc34b5fbe77da": "a72b69cf887046dddf0ec66dffcd678d",
".git/objects/44/2cae925971ba1b28740185638b7d8c7b665166": "306cea01c8164c69f07e8f4880bd78cd",
".git/objects/45/2d8e0b496680c111c02fe53e53012a0157cc39": "a09f844b8ad3d55ae48415dce71eb706",
".git/objects/46/c986ea95416f247a6c94e82de6881fa895acb3": "c5107f9d28f6b6238f050082646dd5cf",
".git/objects/47/40a233dfa4e114670565bd1df3cc76302bdb4c": "26888c0cc637aa7162f45eec98165adb",
".git/objects/47/6edbcb9b1652e5a8e3293c71d43dc1d843d409": "ddd39984124038cf7277fea76df31fc9",
".git/objects/52/3d34e1d7e454c3fa9aca14b5433c923b12123c": "bd361c274d967d56ecd1f508d1e57c7a",
".git/objects/54/33c6cbed0260e8dac3b6eb970684b3db72d08b": "60983b319354567f52fff1fd53276928",
".git/objects/58/a5211fbccd1b50cc9ea909a30cbb5dc23f85c1": "cd10aab3535aa25642a1deeda176d7f2",
".git/objects/5d/c731cdcd534e2a2ac6968f4640f7316a0917a3": "249b7073b9574e1749d72191de07fc0e",
".git/objects/60/25913637b2468a77c7f668e348154ed34fe482": "bd5956de8d00cdbc0748855e98b50db1",
".git/objects/62/2ba647ef24719385def5d21d39445262c99465": "87a6ea3fa180146ef5b96c334e944648",
".git/objects/64/6cbe101ac5579de1e101e3242a39cc6814457a": "7015f49d6cb8f85bc0e86cf6f062045b",
".git/objects/65/830d1bd9f624ea3adf35e91e8183decd77e4d2": "2aed7c1608f2bac4e93533f810461917",
".git/objects/6c/810c69ca34673c219264e2df8196936340b666": "6cb7a4ac4e986db9c55676dae2d7b308",
".git/objects/6d/b09001cbd4043fe0a1bf0aebf3a36fd6d166d5": "f15b207901e24c5faa19e54d5312ffa7",
".git/objects/6f/4d51eea44741d57c99c342f1adf99e2c8d8616": "d6e2c454b4f31ded0f3ce23a31f6f856",
".git/objects/6f/a9faaf269ff63cbbc73d49946f1a6612a478de": "8683625d532d0ea3e706ca5fa9fabb4a",
".git/objects/71/3ffb9e6f2b6f330efe0f214fd9d93271d34907": "ba0bffc774a91a07ccfaf051dde6c884",
".git/objects/77/57f9a472ab8761e29b7e850d3030a34126df34": "76e3e74cb1d2e11f9d47f77760764d1f",
".git/objects/78/64a4c4a771efb7e5ac27a0375a3b0678c32bd7": "e98e3dd32002493c33f0b6d9ce5c9449",
".git/objects/80/a2310e353763222468f817e8a236de1d05ba73": "e193871ca3923178e1f98010a3dee0eb",
".git/objects/8c/9f5789fe4f2d1513acbf823383b8b8d0aff381": "8aa665b967a89c5bdbb47db60278d655",
".git/objects/8e/75e37187d3fd52ea4e21dab706fe984cc96d7d": "fade48e043b1986c354b45d5c4576daa",
".git/objects/9d/c64b02327e832fb3936c3e8a49b7fc65b15385": "ddfcd353598435478371bc0ee563f80c",
".git/objects/9e/12e82830b050abf258f61a81925d8239f543a2": "1199f4a735b00c2724e6a7e371bd3a40",
".git/objects/9f/3d9142b9863dc58df72bd9fe7be56f9d85f965": "5627627c6101b6ae278e6f9d20c5dd59",
".git/objects/a0/7aff103c9f1e1a81971a217c605ed87be82572": "5ef3b94d86891615c19c5eb0e42481ff",
".git/objects/a0/eae846734675f4e6f6b63a5578fe9e47954bc7": "06f55288fdd78a609472ddb654e04d79",
".git/objects/a1/1f9afee67a4f66e4592ca68d4419c0a7ef95c8": "c3c9f1b98263b370b59ac8d0c2e74304",
".git/objects/a1/50924ac451b48de761b170e0dc7a635af7ac5a": "b32e582ad58603c3dd710f9d6691391a",
".git/objects/a4/17027258c38072895314aa4696a8eac17c210a": "47509d02de591200db7980fbdecfdaf0",
".git/objects/a4/88d6f70ab3b68c8436d99d1285e869fec43b6f": "fd87b099528eac70cc934876a46b618c",
".git/objects/a5/60871989ad6ce475b24be5ef18ecf76104ae36": "2a1bc9ef288989d414071c9f88ffaa50",
".git/objects/a7/a18ffeed2a3050bff836cb3d04e7e4a644e6b9": "f29339dac7378699f35e8e60aba4ad57",
".git/objects/a9/c2a36a745abdb19953bd79a767431f4a2d9cd4": "ab7e0955886c944ad5f8d4739510ba03",
".git/objects/aa/720e052676088eb95310ce9f61404a45ce3772": "374d980e5e703a182d833f64a1a76fa3",
".git/objects/ab/cf0af0618db60e9d11df665e3fa06e54455582": "00d9d1dbf6d72d60f71cd290137f79a7",
".git/objects/b2/5ff98c4b4babf8cb6f7d811503b09daee788dc": "a0494beb3be7c32f3d553fe4c0585d44",
".git/objects/b9/8f005da939a94be1786367bbd1345505d6575e": "2ac5a4273d26ae815372db3f2479773a",
".git/objects/ba/64e4c86094f5ed35adc8fbea73b9320c5d78be": "fc508c0068714e629944965c35cda81c",
".git/objects/ba/99c708da6e0870b86759ac85df2aebfe841a16": "d30b8c0855e2a74482c608bc56857753",
".git/objects/be/d1e54454d9b646911631dc7b338fb2001fe993": "e4a0594d369ebdc70e05b2d22bcd5b82",
".git/objects/c2/a816f042d4d4a6092df53a00a82b67235ee83b": "3c86e03e1d4503044a877676c9518caf",
".git/objects/c6/3df6814dbf7b1c934daef7ee93aa933161c317": "657d4c1b7ad8697d891cfa2f57710a56",
".git/objects/c6/fd7199e86a530d4cd0e1237abb811dc25e03e5": "5b82d6425763c57a7a4e512a69545ef5",
".git/objects/c8/7a308a053c49e714884f1e23305038497bdbc2": "45338ffb32dc9c5a33c70e8e74a08c1e",
".git/objects/c9/83c88844f702c8dc2ad676ba6b1ede443850cf": "8a053f83219b7f148867376dbce5b9c9",
".git/objects/ca/204327b7e22ca24f795a993a4405be8708ca54": "f895ffe9970651dbe11ce050c0911eeb",
".git/objects/cb/860ce2751f8f880ee54b374b78001ebe28865e": "1331996b454c20990082fa9bceb7e57c",
".git/objects/cd/132252251080904b73d2d295b9e41ad2e1834b": "9dcf872247f598340e3fd0126b430e10",
".git/objects/ce/708362faf6a8f6f5a78dd07b025b50e0d11654": "78ce29b5fb98a266e8ede919cf2f0c80",
".git/objects/d0/b316e08241e507b3bba4e9439bb6abdc6e4eaa": "4dd9ae0b3b72500ca61ca17067c2b195",
".git/objects/d9/17c1029a3b1dc155977291a430af4aa8db3b58": "d53df43807818c4de072aceea7f72455",
".git/objects/da/bd247a9549a9fe4e9f88e3103fab058f767cf0": "5b124af8d0dd3bd706389fe91e89152b",
".git/objects/dc/35b4a31025e3fb095397a44d919e4b620f0be6": "f6ea2e9379af95e369da37b2bcd551c1",
".git/objects/e1/9cf77e08d58a541bc220c52c3adc75e847d7e2": "ac0fca625388ca81db4f1d365ccbdfbb",
".git/objects/e5/bb8ca4840bde9a8ef186355f2c44c730f79796": "a73d1862d84c542f348c4a21fa0e96e5",
".git/objects/e9/100a50bc51c0d6c9e662ff6c4d4fe4e51b1db1": "4d0844340a7bb0dd316788412ba874ed",
".git/objects/ec/4caec508a3bc6c2291f44b7bcff10136a92d74": "a3494ce84390f85bc8d051477c3312fb",
".git/objects/ee/5baf34520aafdced018b976e216b4cab111a27": "4169d413a80a7f28da46338f49262a0e",
".git/objects/f0/ede3a87415227a450605683a46ab34d336b09d": "be4293ec253d28611ef1d808f369f1e0",
".git/objects/f7/15f684745f2258ab19c14e5231caeeeb331e38": "4da0ea36cf81721d95c051c1d3826e5d",
".git/objects/fc/db6ebc84b7f57a745281aa72b76915b5416f7b": "f33b82730ddc8841977dc56f7e75e4ff",
".git/objects/fd/f103e4211f0249e6c95bd2e90c90c1529501cd": "371024d2ff8cb45ba6f9f23e889b54de",
".git/objects/pack/pack-c10ee09a84117279dfcfbe39537d208b9ee5eb31.idx": "21a51aa0ec76168aa7dfd54923e95f40",
".git/objects/pack/pack-c10ee09a84117279dfcfbe39537d208b9ee5eb31.pack": "6eccd40ec62073d6eb4f91a21ddd6ebb",
".git/ORIG_HEAD": "bd1ae971bad8d873adce9c3977221a14",
".git/packed-refs": "95764f1fe66ad736faa76bf9c17ede19",
".git/refs/heads/main": "bd1ae971bad8d873adce9c3977221a14",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "bd1ae971bad8d873adce9c3977221a14",
"assets/AssetManifest.bin": "dbaa72b35b8d35aa1895b2add2d7ef57",
"assets/AssetManifest.bin.json": "9c917e2826a39dfee47a97613357686d",
"assets/AssetManifest.json": "3161be2137c83d1f8a0710fd496599cf",
"assets/assets/home.svg": "a861e3f5fffb4fda52021692df8a1665",
"assets/assets/logo-white.png": "874977b15f57e4e83a267ef021a87036",
"assets/assets/logo.png": "24a9c40a7ecb5627fce2318827d6ddbe",
"assets/assets/main_arc.svg": "00cc82398a11bd5d07db8dfe36534132",
"assets/FontManifest.json": "995cfbe81c5cd8b481e25d67c01b5624",
"assets/fonts/estedad/Estedad-Black.ttf": "dca3f1b4d46ef618678e2f8e1ade345a",
"assets/fonts/estedad/Estedad-Bold.ttf": "73f179dc36128fa8d3360ff1b5792795",
"assets/fonts/estedad/Estedad-ExtraBold.ttf": "3992165233a3fa9f4854c44236575ca1",
"assets/fonts/estedad/Estedad-ExtraLight.ttf": "00cd93523c1a4ba4f6622e41fd536ac3",
"assets/fonts/estedad/Estedad-Light.ttf": "26df9d134b9bfa3d67dacda1b34c3aa9",
"assets/fonts/estedad/Estedad-Medium.ttf": "969aabb0a8c4242554c0e694eedd11c6",
"assets/fonts/estedad/Estedad-Regular.ttf": "381bf1cf1f550c6e19a074ad80261717",
"assets/fonts/estedad/Estedad-SemiBold.ttf": "63492544fa9b1e29f2b43f0fd9d51da2",
"assets/fonts/estedad/Estedad-Thin.ttf": "997a0680ffcc0c2b8bd9c6a6d4bb2542",
"assets/fonts/MaterialIcons-Regular.otf": "b46e760cd492f46b3d0fe1ff01b2c570",
"assets/NOTICES": "52566908958db8a2a983e1da7ff55ea0",
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
"index.html": "86050ee30a05a848b398e5cb8c95202e",
"/": "86050ee30a05a848b398e5cb8c95202e",
"main.dart.js": "29498ea72cbbfa0d6197b2598d3ccc45",
"manifest.json": "127095b503d380cf6d9dcc5c81655cb3",
"version.json": "f96fba9d64215b1207d46bcf66c9a793"};
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
