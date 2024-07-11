'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bcc742a871bcb31ad4fed0ed2682208b",
"index.html": "5c9f1b5f9950aaace122f6c9e01ffccf",
"/": "5c9f1b5f9950aaace122f6c9e01ffccf",
"main.dart.js": "e839a896a46f2b7b692348130073d4a9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "b778774bf20c389c7a5b817578da32bf",
"icons/Icon-192-white.png": "891a6aab505f82deaae0c19a38662b08",
"icons/Icon-192.png": "71df3c44beb4b28c5a70fa445914d80b",
"icons/Icon-maskable-192.png": "71df3c44beb4b28c5a70fa445914d80b",
"icons/Icon-maskable-512.png": "c6e78bac9b59a6eb2545d1da5345fb15",
"icons/Icon-512.png": "c6e78bac9b59a6eb2545d1da5345fb15",
"manifest.json": "94905e957a704c19951b92ba14f2a896",
".git/ORIG_HEAD": "295106ccfd97483a7d7eae68f6b4d17e",
".git/config": "740734ab428758a6e454d6aa49e3a944",
".git/objects/61/7edb50f00b3250ee87ea18949a5032723a5241": "929d8a44ce4b37555cedca8de8889d66",
".git/objects/0d/189fd0991b135900292d2a14494cbeceb17a37": "00e75c4d10babef45670d5867df7a03e",
".git/objects/50/a8471dfefc8c7fc5672bba414a5a7f17e87d44": "c3316f181e71aa8cd29aa027c0f2f0bf",
".git/objects/68/823fe4209c7b418177834748f54da146ea9149": "c857b263a498343de9a34c32c511f466",
".git/objects/3b/965a83f4ee837b73123edb1bceaf30b8bc54ae": "5e68df4fb498f579412cc0d1d1c0d253",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/3c/9628ecdea87e06da08fdc43d4eb708d2ccc729": "26e352b0f87322773d569aed253a5c29",
".git/objects/56/0521cb7f9fb67da6c77da6801b6c45460eb82e": "45782347df0f6a9395b654ba129bfdcc",
".git/objects/51/8af75babb316c6fffa505261486e576fb827d5": "c009e284b703a5f6ef9c3056026e599d",
".git/objects/58/dc322b2d54646d8658a26f932d06c601710e0a": "7c33d2fd546c3e302fe64aefe41517a4",
".git/objects/67/88cea874b6784e3f2f0c8ecf8f63c0d9ded70f": "2af9e26b75e97f1b7f95e252563295b0",
".git/objects/0b/be6cec3b4a26f90f34c0325e99c9ed82bdeee3": "aecd2ba44cd463a30da586cb017eb014",
".git/objects/93/7d46c2198e9d6b151ca567784f5e64cc8dcbf0": "e32528318d4aff2b0ae6c2faa3bb4cb0",
".git/objects/93/4be8b302ba10ec973c29ffb69a2973ea5f2ab9": "9274eea2e6c1c1d1194989fcbf09ca60",
".git/objects/93/90b684dd0cb2775a8215c424feeffbffa1ff6c": "06c30a1601422965915551e147d66f8f",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/94/af26cc75bfc6864dc736cf86408d11e6285fa3": "e636a6caf1c83d6f32386021dbcfd0c4",
".git/objects/94/3a8fc5698552a404437e59a53baf59da565c20": "dcb4217b56eb403d242ccbaa69312e59",
".git/objects/0e/ed9e39e57e528c6fc0002f4c82c8f555d9bf2f": "84f5a1da5cb7adb17ec449c0b01b85e6",
".git/objects/0e/f7230e79938a89da020e113dbe51567aee9230": "f7e045befaab55a5a05c46498edee99e",
".git/objects/5a/2d880f501f281384dea3428dbf70b233e6323f": "0ae91d4931163f9efd7b799362529e05",
".git/objects/5f/b84399b82c835e88ccae79154054f26a48fde2": "b82f9a7eeaaadbc484abd066b3b04874",
".git/objects/33/5caf3b3793275a4862b522fe97791b32eead06": "f13bebd8d82efe07e5d6ed30d90c3f43",
".git/objects/33/942a99237dda8f35b1870a7448e717d9ad35c6": "83771c0cf4f7b57cde4c9938c6025425",
".git/objects/05/872f578a154a9fb192026fbd438511481571d6": "f42f2907a48a7a8eb7346c7189c62508",
".git/objects/05/490a99ead0007e187e138b01070bc18b8fc081": "618403afee41c4f9a2b42244c4a27e39",
".git/objects/05/ba9b690ff89eb15e7e02bb4743f7022bc9d284": "34414357a2d97a6b87d34bb7683da569",
".git/objects/05/85c0cb0b0c8426693daea7cf7701eaad9236d0": "14774d20e5001bf77b6f24691a584e18",
".git/objects/9c/789a37b53d8916ca9d378d363dacb7ec708f0f": "2b9414d07b5cb34d104f2ce7aeeb583c",
".git/objects/a4/b1f1cd6cda8e4ca299c48c5e62e97151d96d35": "6cf38edc1cd3129248df70c70a664ca3",
".git/objects/b5/9cdbc1ab89d12a9e9795ca65ccf32ec2827144": "8e5124b238ed03ddf20d6917785a9ffb",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/d7/13de025473dfabf060d60d63d20c479debba85": "3cdc8c2aa18a109b8d1c93c2761c4af6",
".git/objects/be/908a7e0446e2b85374d604c44e13cd7f7dc832": "4a52cf54582eb78c6cde7a4b307636cf",
".git/objects/b4/66718d6c872518a6bc0143d65fd0a38c802ed1": "451682797ce28b915b79881b56aae4d2",
".git/objects/b4/c74576147502becd8ffa431b6afef6a79143e3": "72916e401d2a382e75700d6aa2b73e5f",
".git/objects/b4/2cab4a4da633a4719687b0ec0285eb1960618a": "32ffd76bced6f93f59ef3471a47dc3ce",
".git/objects/b4/a73b83e5efbcc18bc600b5043fcb525a72d522": "34eaba4957a38a4ff6c54904f7d0e9b5",
".git/objects/ae/ee8c89b033272102270000b2dda3b11eb068fd": "107be23325ef9818128d4c619df8ba5e",
".git/objects/d8/2a0efd2a352a15d71b777c0b813600b83e0367": "2bd6283e85badd8ddeec893a1a1ce01d",
".git/objects/ab/05ee4f35889298c4b8e24e1c8de3c89f8b8730": "e2a00ecd0ea9d043549efb9490f3df01",
".git/objects/e2/14ca546f70363751a6d3f73b4c7677fce68f96": "5d8623c234014bbbd683fa9ac2748001",
".git/objects/c0/de20adbe83cf03d75ded665aa9587abd5da5a6": "d7439b995bac49823b8c8e17a1e2f831",
".git/objects/ee/c7de2e4bf22736bd1f802255da0d5266420b37": "f52a75b1e1a4ed85197b73defd391dc6",
".git/objects/fc/d30b6a15e8050e7f9b24f416c1536ba259de16": "8f03f21690ba1440d7dd62576e1fddec",
".git/objects/fd/07ab8e3f7691b28011db15735c1fbef4cad11b": "07302aba158650ef3d9d1968c8d8cca2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/e9d96b8ee2d0f2abbdb1cf00ff5a28762971fa": "c9e5611dce750ff6ed7b0b3c03e42534",
".git/objects/f5/d8e032a306bb552a392683c644f9704af910c5": "691c1fe336c1926772e58b2cdc5f52ab",
".git/objects/e4/658dfb08da856dab913724a04d4b8c1468f7db": "29a3576f04f1c307afe3af0bf0475555",
".git/objects/fb/9db887fae4c99e713d0fa0c32dfe749200c3b6": "159942d0c7093d37a9364f1e224e3235",
".git/objects/ed/07fd3262190ea730f157b4132ae36dfd153352": "e5ddd9a8180483dad974335e16dda8e7",
".git/objects/c6/36ac1d56dedd8d7639090db9e11850f79af7f2": "0580ad688df79c346ec276776a8ab659",
".git/objects/ec/c8bbccff18b9f68d5d41da2fd88fdcb04c5d2c": "c49b2a8e5de24061f8c5734aada64542",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/cadc4148a943adf808f7243bd21de4240eb448": "e131d18929072d1f7218aeb8827c3e71",
".git/objects/27/4d8d42611ebed61fc1b3e543d205b367465734": "26c13f9f6395203d9721e91239f8334a",
".git/objects/4b/217086aa7bb6d2a11329dd1639090b2154296b": "25608430cd2d4c9f3322ce0018685d61",
".git/objects/7c/7d37ca2efd3d6180f2a6f1e614db142fc8d778": "062bb8b7c87417acef1bb1ffce3ecabf",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1f/c22329f4b879f583bf614007c77601028bad87": "24e32be8a154b1e31dcc9be057419aea",
".git/objects/80/ddf7d1409ae2e3e04aab68234992f1bc83d8eb": "564a76fd53907667cc8aecf6367db786",
".git/objects/74/3d28e118db98836ffc5e382e2cc4ddd1f0f41d": "f4aa609a153d3ba356d2185fc287aec4",
".git/objects/7b/11d0556300fe9d748ceb20ec7569d6ab03740c": "a494d79c5c497ac9a869e628c40fed59",
".git/objects/19/7f5b532274acbed132ac12282c6a95005e7cf7": "3fa80d82f45ef7bf020bc84815c22014",
".git/objects/26/54288161e40100362f891651bbdb4f163239e4": "e0957fdc5f478f4592faf671a6f18c4f",
".git/objects/75/6ba81de2ce2b4529d1b186c6842af87738af8f": "9cfcaa8070376129a066791ed818a530",
".git/objects/75/46993a99f6b23952564448cf564d8787902359": "16b2a79ab4375003a8cc2ddabcdf009b",
".git/objects/81/ac1b112351c05a9c3e2736d01ee714a2de23e9": "69a45733dc638a0acacc8014ba65d8d0",
".git/objects/72/2b6e0998613f3d494d8340f243c8250885fb7b": "88f6439fc6f43d11964016a7ad1e1f73",
".git/objects/44/31c6f02629a2e6a66b9ea3a7b499fbaad7f1d9": "f88fc2e0055c33dab9137516f8eb4995",
".git/objects/9f/e1396df8cdccdc471d303cadf6a5a806ae39d3": "ab021af0677f50d4129932616ec396da",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/5c/2e7612b6778661dd4f64cc2214be6b1b74d928": "30800b2f110b6060acf61f1da1d86522",
".git/objects/5c/74a771e41016f40d5814c24ca6efa24da84713": "0e42051c0e6a5e0f5c9a426fc5e2f4f4",
".git/objects/5d/13cdb0a2b5200020564a886d8c72137ad86fbf": "237a71fdd221810f2c8f411698f5f84c",
".git/objects/5d/6758c9f981d8418a86416ff39877cfa22b6bb9": "0396eca38ee92510eba303c56d68a390",
".git/objects/3f/8253ad4e3a53a43495acbe1157e699f1d7bc79": "ef6470afe714775bf4405175eb5bfe89",
".git/objects/30/c18216bbf867746150cc0b2e3765fadac977d2": "4d33c36c5baf9f44fa69b4b6d6e8acbf",
".git/objects/5b/2452acea59fc4cb8812588475d8955d67e630f": "1ff54a10006308d66645c506d6cc2d3b",
".git/objects/6d/a49384376a297a7b4fccdd5011ef859bcfe3e1": "bde37cf4901668f6561293f3db86f527",
".git/objects/6d/69e10d4caa06a92eecbf730bc6f320ed08b103": "d8669991db81285008e63add546e080a",
".git/objects/6c/e4609d82e6f7634ed04e1c619a737e7525c845": "dcb5730e7f332309bd8f2a225e904eed",
".git/objects/39/c95822cd1576b9aee27a498240f532ee87937e": "091f0caf63918f5953c946a35843cacc",
".git/objects/99/5203c477c9cff10b9f45925a1ecbd09a0a1ba5": "47cbd6d07b65c232eb681bb75c84f82d",
".git/objects/52/d0792cda8eea99c6263d37cb745da21ee9118c": "ee2bc422b5957c18103d206c615f6084",
".git/objects/55/f2843c9f94f7dad9902c9ac683f8fa8a0f32c3": "05b4a00ee48a64c512bd310548013054",
".git/objects/90/bc95c90fe9a586b2a1ae9a6b0286480c98c4f5": "84fa10360f39edd923df1dcd1b41818e",
".git/objects/bf/4252df4bad95f289da1c60be4d587404fb2495": "64ec1d23b149d3c2ca5778051a61804d",
".git/objects/d3/7a34096ff9ba3fbef13a5dc03be15b86984332": "db0014c8825a3160568d68377a87f793",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/daad15bddab49cca92cd63e58abb958771e9f3": "fd08b0909715c5992ea2753416740c17",
".git/objects/dc/5e94b9763815194186d453dd3c73f58f39c140": "ce243eb92d0e30cf395888aea9596cda",
".git/objects/a9/e558e3639fe2899c0685457a67237d3b8dc059": "74861f586900631e3e71cae754727b12",
".git/objects/d5/e994a03b29bd9bde62eec6654a766a1149f089": "1bc8443722b5bb844371121de18ac708",
".git/objects/d2/226d466572daf0429b001b51f023ea76aab952": "65fe1f8922d1e4ba1ce9caa0e2c256dd",
".git/objects/d2/6378ed57d4de1ab0be4fd110c1267a8663666f": "541708abce2cdea07984ddc635b6a1c7",
".git/objects/aa/194913e4ad99fd6fcfbf42271365670594f409": "58baa674b0572587992cf2c3d96a519f",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b7/12fb1c52f2286b84fb696c1b6f09d34ccadc88": "53cd5d6938901e24359e347696d6f46d",
".git/objects/b7/313444dc24a6b99b3f2be47b0b8c1dc3da81a0": "f3f1ed9b2883a91ae2ff25cd738ef4b4",
".git/objects/db/dbc5c9a8af30dfb5c50b7c6ac0a0dbd88a2372": "0f3faad5658406c006d1d638aebab3be",
".git/objects/a8/52b7efb6ff2c753fe41e5e33021e8db101ade4": "2b92e0ce61e89adc781753e49f37efe6",
".git/objects/a6/5f65a9e719c6920b65cff1b6b93f61de3b1912": "b1ea5b882e9c221b4e66b20af993b285",
".git/objects/b9/d4fa1705561e459d0dca25b4b022e41cd7393f": "ece25471bfede131cc0bf29419e2c2bd",
".git/objects/b9/115858ea034efbcc80ad644d3a85b39e1c048f": "4643a3b2c52930d28ac3022d4e5f5738",
".git/objects/a1/1ebe546046e85c58dbcb6f44f401c0519b55d5": "b34b8de6a1bb613477f4cf3a862ea534",
".git/objects/e1/f2af40552f04f02606d02f2ddf881bacd456a5": "8ddc0450fe7846e6be5b3fba3cecf388",
".git/objects/e1/e11a5d29a62277cfd466d067cc78d507472856": "7897869b91663230f90f4fe7d128eb50",
".git/objects/e1/8a40df3b1b0eb9a61edd992104cd07bcc43495": "5f88dba8827cc39c5a9edb0b0cbbfe32",
".git/objects/cc/7da2ff5ee47c5e9c1fdb106d26ab2b9ea39d0b": "165bcaaf639cacc4ea10d0f2feb5f749",
".git/objects/cc/73f3d40b02e1430e1883159ffbad60ce939eb9": "9e28d59b4eb1333691e930e26d43905e",
".git/objects/f0/46c96e4a45d3dd2bf45df7dfe0372a0a111736": "4524db5d33428a5a1bef2c24459f3980",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/f6/fedf3c6f9280735265b9b71a2aaa55152a6c8c": "6b80ed9369aa62fbe9e6dfa8461c51c2",
".git/objects/e9/17bca1812d9c3e633cb50aad50d4de5a797f26": "de3a047eb638f211af72fc902fc96735",
".git/objects/e9/d8774436b6e06ea2390ca7ca0d79722eb65445": "c633c0e11323e0c8a64b8ba8e91a2c34",
".git/objects/f1/be032b6d8740765e20124e701153ba2e323171": "7aef3594bb5395980ede99e775e2f76d",
".git/objects/f1/2f7f5955d18309ba77e27a43ce981e03ea5bfe": "7d94c6bf51b1d8468e1277b8686c4b40",
".git/objects/cb/e12d10b09ae78e139417d29b3a664cbda7d232": "dec33ea0e661d6022de6f5ed0b5df5a0",
".git/objects/e0/943157af0ea645ee54f0c317f92d4d6104abd2": "18a1f6d81e9fee8588c97fb3574754e8",
".git/objects/46/222a35b5239bb8c008100fac75a4b37d31157a": "e9e38abd0b484b7240d80a9b4bf89914",
".git/objects/2c/d333c2e102ce6a12159f00f6cb6f668fa3eaeb": "666d73a9aaff5c1d50ad834bdd3750c6",
".git/objects/83/56f2ff7d29c46dac29fbd32aabae4e53a9e40e": "e686133ca6e03cacaca3dbaadf266c72",
".git/objects/77/dec5f5c3b78ef9d6638a83da54b536ef5e5083": "78e6af34b60b10cd4ea3f85cdc1cc6ad",
".git/objects/84/845de949c3d7c43025f1dacc8719659f441b85": "0704318a741e237e05c0909865e71a10",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/24/50fb7e3ba493df6c8f3490c5c89aec4482b454": "d80539503f39d0977dd2c57ff7bbf561",
".git/objects/12/2ad3f04e29f8952e8fd73f0380646e85d767cc": "610962af7ed46d259c792d9a74ca0248",
".git/objects/1d/a363c0024d32e1955bdfd02908d8bcd1bb81b8": "01ef8801260fe66a8cd0b0e6ef2fb4a1",
".git/objects/1d/5787818895c9eff0f13a7a8dc145da9fa3b1ce": "e4165e504adab4aad2cf3b5132483387",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/76/728d5285816507904e4b4ce20c4783eb3b355b": "00c2e872be326fe7d6b6745b9a44850f",
".git/objects/1c/47109a767e91e994f53fa228f018d7e0d7c4d4": "0c7535cf56b41cd3cd55e20518f316b3",
".git/objects/1c/7a49d4e9e6ff0168a3a769cfc6ca1e4bfc42be": "b22640d869ed7d7eb3a38681f6a087a0",
".git/objects/82/21c3af18eb5976bbf440a99e1f07375980cf6a": "4b2a0d4d11e1203c34b9f5a18a1dde43",
".git/objects/49/97df3ddb210a1a01bb7bcbaf9d20fb72274fe5": "83f4bbef2ad4da95b0707e108dbec1d2",
".git/objects/40/4143a4e5e8d2b916bd4ccc850f6d4ff381fd7c": "21963ffdf80ac8d0ad1f2da28a142b70",
".git/objects/40/c6ccee0a843e7e5b54edde898fb6a4540f89eb": "aa352ef7edf8b724b64f2f48fb756884",
".git/objects/2e/037ba00cb49b7aaf8a87e051a297afdac0abf3": "8c72f8ca45f8fa16869e16b95d112c0f",
".git/objects/2b/f5a817390b66dbebeb768a765abed0a89fb6cb": "c185dcd4f38a9690bf0771d2fd11f163",
".git/objects/47/c70c2f4c8bb447bb2e40bdc1735eff70508fe1": "88e678d33b61e01af822a5ec421c1837",
".git/objects/8b/9633a55d32adf32baeb83cb396a58dafbad449": "10b38ebe8a4c223d5efc8f431c4ff021",
".git/objects/13/542826f7b700627609e3888fa5839cec360e3f": "408ab00892c96a174d34a58e1d7cfe6a",
".git/objects/7a/c69f1f167b46643fd920fa5fb1b7c734580491": "055546bca66d25b02b10be01041e5fe0",
".git/objects/14/8e732b3622c44e8450f71d3447c69c83ff1348": "067aeaae7604555bcf2dae611ddebbeb",
".git/objects/22/b933796dec5b2d87cb760a2b9b1ed9723d9794": "387546c8b50eee405dbc3b7d1a208675",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4452b531dc3fbe60e95c9dbace85da29",
".git/logs/refs/heads/main": "4452b531dc3fbe60e95c9dbace85da29",
".git/logs/refs/remotes/origin/main": "b378b51e843add6cf07d1fc6ce6898ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "295106ccfd97483a7d7eae68f6b4d17e",
".git/refs/remotes/origin/main": "295106ccfd97483a7d7eae68f6b4d17e",
".git/index": "39b4d83b7520dd1ce018501b88672ae9",
".git/COMMIT_EDITMSG": "9e413c7af7c17a33565a0fc309ba6905",
".git/FETCH_HEAD": "a5ed5243d74f53f358f3697d4889e0d1",
"assets/AssetManifest.json": "eadd26d0e6543dad8c2f505ba230c6ae",
"assets/NOTICES": "13cecb0aa14af251415c8c152e7241c3",
"assets/FontManifest.json": "7324a01be4357138b4ebd6b8c14b495b",
"assets/AssetManifest.bin.json": "376841f58bfb5ec577e7d1082e41e2aa",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/flutter_tabler_icons/assets/fonts/tabler-icons.ttf": "70298d91c61f7a9659dca51ec3b75ebd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a03e9710450cf2d2adce2749669065cd",
"assets/fonts/estedad/Estedad-Black.ttf": "dca3f1b4d46ef618678e2f8e1ade345a",
"assets/fonts/estedad/Estedad-ExtraLight.ttf": "00cd93523c1a4ba4f6622e41fd536ac3",
"assets/fonts/estedad/Estedad-SemiBold.ttf": "63492544fa9b1e29f2b43f0fd9d51da2",
"assets/fonts/estedad/Estedad-ExtraBold.ttf": "3992165233a3fa9f4854c44236575ca1",
"assets/fonts/estedad/Estedad-Thin.ttf": "997a0680ffcc0c2b8bd9c6a6d4bb2542",
"assets/fonts/estedad/Estedad-Medium.ttf": "969aabb0a8c4242554c0e694eedd11c6",
"assets/fonts/estedad/Estedad-Light.ttf": "26df9d134b9bfa3d67dacda1b34c3aa9",
"assets/fonts/estedad/Estedad-Regular.ttf": "381bf1cf1f550c6e19a074ad80261717",
"assets/fonts/estedad/Estedad-Bold.ttf": "73f179dc36128fa8d3360ff1b5792795",
"assets/fonts/iranyekan/IRANYekanExtraBlack.ttf": "42c80d421a06206fa60612782d8c4501",
"assets/fonts/iranyekan/IRANYekanRegular.ttf": "ffac8e68c30515e384f6d1866119a383",
"assets/fonts/iranyekan/IRANYekanThin.ttf": "a16b0b55cbfa6a02ff54d537ad5328ef",
"assets/fonts/iranyekan/IRANYekanLight.ttf": "54f4afb6b53b06c1db8092a70293cd90",
"assets/fonts/iranyekan/IRANYekanExtraBold.ttf": "6848ecb8fc8ee8dd61569bcacf96a440",
"assets/fonts/iranyekan/IRANYekanBold.ttf": "32122790bf8632ba09a620d8f3cc2ed4",
"assets/fonts/iranyekan/IRANYekanMedium.ttf": "f4afe6ad7a3e91864416f5c8a2bdbca5",
"assets/fonts/iranyekan/IRANYekanBlack.ttf": "4eb982a0a4d7b13bb76a8612c5a5266f",
"assets/fonts/MaterialIcons-Regular.otf": "b46e760cd492f46b3d0fe1ff01b2c570",
"assets/assets/main_arc.svg": "5766530f30f55b1d6fe55b412404a5a4",
"assets/assets/home.svg": "88695bcec3036d8d1f80cbbf9fd27a6d",
"assets/assets/logo-white.png": "874977b15f57e4e83a267ef021a87036",
"assets/assets/logo.png": "24a9c40a7ecb5627fce2318827d6ddbe",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
