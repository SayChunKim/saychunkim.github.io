if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise(async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()})),i.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},i=(i,r)=>{Promise.all(i.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(i)};self.define=(i,a,n)=>{r[i]||(r[i]=Promise.resolve().then(()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(a.map(i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}})).then(e=>{const i=n(...e);return r.default||(r.default=i),r})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/404/",revision:null},{url:"/awards/",revision:null},{url:"/contact/",revision:null},{url:"/css/app.3ac05c5c.css",revision:"4f434aed72fa0f91ed28f458e1120e24"},{url:"/en/awards/",revision:null},{url:"/en/interests/",revision:null},{url:"/en/keynotes/",revision:null},{url:"/en/skills/",revision:null},{url:"/en/timeline/",revision:null},{url:"/favicon.ico",revision:"551d2f6a81e9dd40ff0dd481a8292658"},{url:"/fonts/fa-brands-400.14c590d1.eot",revision:"14c590d124662eb50efa4c00f027b79c"},{url:"/fonts/fa-brands-400.3e1b2a65.woff2",revision:"3e1b2a654a784ceb385157140b4ccd71"},{url:"/fonts/fa-brands-400.5e8aa9ea.ttf",revision:"5e8aa9ea0ebcd2218178f554cdd8e6b0"},{url:"/fonts/fa-brands-400.df02c782.woff",revision:"df02c782834b113d605d8329368737b4"},{url:"/fonts/fa-regular-400.285a9d2a.ttf",revision:"285a9d2a28886ad64c4e45cbd733cf7c"},{url:"/fonts/fa-regular-400.5623624d.woff",revision:"5623624dd1b017c66c29d1ac69cdcfa3"},{url:"/fonts/fa-regular-400.aa66d0e0.eot",revision:"aa66d0e0e38c75666e98db33abae955e"},{url:"/fonts/fa-regular-400.ac21cac3.woff2",revision:"ac21cac3f22cc9642f5af32e0c750797"},{url:"/fonts/fa-solid-900.3ded831d.woff",revision:"3ded831d708bf90b2da86756551b5c1c"},{url:"/fonts/fa-solid-900.42e1fbd2.eot",revision:"42e1fbd2cf655a0b44a2dfae9ca2f8c1"},{url:"/fonts/fa-solid-900.896e20e2.ttf",revision:"896e20e26ad07dc63c9526ed814117e9"},{url:"/fonts/fa-solid-900.d6d8d5da.woff2",revision:"d6d8d5da9214dc7d46b297672a602d55"},{url:"/img/404.488fe83d.png",revision:"488fe83d1b5718e0b685a4aa93bb9104"},{url:"/img/fa-brands-400.a5a8a668.svg",revision:"5c3a0f907ec7c67eae0c5a87614d87ca"},{url:"/img/fa-regular-400.88f0c5bd.svg",revision:"251662c979749ba1b44cdb9708bb4c86"},{url:"/img/fa-solid-900.6c36adff.svg",revision:"0484f5dcefd7a51ad13451274f793357"},{url:"/img/icons/android-chrome-192x192.png",revision:"96af58c2f0e97825458acfdb21be615e"},{url:"/img/icons/android-chrome-512x512.png",revision:"c0a2f484dfd14671307726653f0b5ae8"},{url:"/img/icons/android-chrome-maskable-192x192.png",revision:"951430364adc64d56dee6246ace8d864"},{url:"/img/icons/android-chrome-maskable-512x512.png",revision:"f27ee03ba38d9bba10bffd61beb0cf39"},{url:"/img/icons/apple-touch-icon-120x120.png",revision:"d6939e50e618a4660bfaefc28c040824"},{url:"/img/icons/apple-touch-icon-152x152.png",revision:"2975ac0828256adb32566da8cebf9d00"},{url:"/img/icons/apple-touch-icon-180x180.png",revision:"57a985b2745cdcd07e3a37b5e3c3bb6d"},{url:"/img/icons/apple-touch-icon-60x60.png",revision:"f2a590c426d578c5704b51e2b34e2e06"},{url:"/img/icons/apple-touch-icon-76x76.png",revision:"2e277ec5ae1797a25e7e395a2fd20318"},{url:"/img/icons/apple-touch-icon.png",revision:"1b85276c847d7f985eea6963368767ab"},{url:"/img/icons/favicon-16x16.png",revision:"86539faede8329f5b5aad24b00c7ea70"},{url:"/img/icons/favicon-32x32.png",revision:"d52b398d94728ecc3a3c5bc675fb74d0"},{url:"/img/icons/legacy/android-chrome-192x192.png",revision:"96af58c2f0e97825458acfdb21be615e"},{url:"/img/icons/legacy/android-chrome-512x512.png",revision:"c0a2f484dfd14671307726653f0b5ae8"},{url:"/img/icons/legacy/android-chrome-maskable-192x192.png",revision:"951430364adc64d56dee6246ace8d864"},{url:"/img/icons/legacy/android-chrome-maskable-512x512.png",revision:"f27ee03ba38d9bba10bffd61beb0cf39"},{url:"/img/icons/legacy/apple-touch-icon-120x120.png",revision:"d6939e50e618a4660bfaefc28c040824"},{url:"/img/icons/legacy/apple-touch-icon-152x152.png",revision:"2975ac0828256adb32566da8cebf9d00"},{url:"/img/icons/legacy/apple-touch-icon-180x180.png",revision:"57a985b2745cdcd07e3a37b5e3c3bb6d"},{url:"/img/icons/legacy/apple-touch-icon-60x60.png",revision:"f2a590c426d578c5704b51e2b34e2e06"},{url:"/img/icons/legacy/apple-touch-icon-76x76.png",revision:"2e277ec5ae1797a25e7e395a2fd20318"},{url:"/img/icons/legacy/apple-touch-icon.png",revision:"1b85276c847d7f985eea6963368767ab"},{url:"/img/icons/legacy/favicon-16x16.png",revision:"86539faede8329f5b5aad24b00c7ea70"},{url:"/img/icons/legacy/favicon-32x32.png",revision:"d52b398d94728ecc3a3c5bc675fb74d0"},{url:"/img/icons/legacy/safari-pinned-tab.svg",revision:"b7115b168027051b59f69e7c696abefc"},{url:"/img/icons/msapplication-icon-144x144.png",revision:"6504e363131216fde92344454f3e455d"},{url:"/img/icons/mstile-150x150.png",revision:"b9f1fd600b666f93b964afa9e95c1be4"},{url:"/img/icons/safari-pinned-tab.svg",revision:"b7115b168027051b59f69e7c696abefc"},{url:"/img/timeline/cover_spa.JPG",revision:"492988eee4264adff9433c3b8cbac055"},{url:"/img/timeline/fusionex_1.jpg",revision:"fa15d13ee51f21ab2edb28396ed86d8b"},{url:"/img/timeline/gdg_2.jpg",revision:"3cea277a67586c43f14bad0514323b9d"},{url:"/img/timeline/gdg_4.jpg",revision:"106e8f5fb128683d6f5a0f4b861dd103"},{url:"/img/timeline/gsa_3.jpg",revision:"e90ea22384bfd9dab8445260b3cde55e"},{url:"/img/timeline/havenice_6.jpg",revision:"2ad5a7eeb3ac1f4188ed40377aae6e45"},{url:"/img/timeline/self_4.jpg",revision:"b33e7c38cd85ad3e79a54db60e38ede1"},{url:"/img/timeline/xda_1.jpg",revision:"d82f21d181d4458b83800db28a75e750"},{url:"/img/works/EstoreMHD.JPG",revision:"28b81dc23037592bb5156ef23fa87ece"},{url:"/img/works/Github_SCKim.jpg",revision:"131b8e37dee2482eaf5ca4704b69c84d"},{url:"/img/works/coldstorage.jpg",revision:"b4b15a68dc91ca6b5202797cb258fd13"},{url:"/img/works/ioxKL2016.jpg",revision:"c99091c65a94b18314060da881078408"},{url:"/img/works/mhd_estore.jpg",revision:"a719db4f008a1439d22ff3291e800dfc"},{url:"/index.html",revision:"0de14d5038995dd3b19ac2e41e54a741"},{url:"/interests/",revision:null},{url:"/ja/awards/",revision:null},{url:"/ja/interests/",revision:null},{url:"/ja/keynotes/",revision:null},{url:"/ja/skills/",revision:null},{url:"/ja/timeline/",revision:null},{url:"/js/app.2b94d880.js",revision:"9ddf79cf609babcf8954512c2cc77293"},{url:"/js/chunk-vendors.941e7b53.js",revision:"6ae8d835f14f0bd02bf154319d2bd01f"},{url:"/keynotes/",revision:null},{url:"/manifest.json",revision:"67ee2f350a1e09829293f330b634275a"},{url:"/pdfs/Devfest_KK _Polymer _ Packaging_Web_App_into_Mobile_Apps.pdf",revision:"1c249bc91e52a3c1dbf9a2b08e8f92eb"},{url:"/pdfs/Devfest_KK _Polymer_Packaging_Web_App_into_Mobile_Apps.pdf",revision:"1c249bc91e52a3c1dbf9a2b08e8f92eb"},{url:"/pdfs/Firebase_ A New_Future_for_Tackling_Back-End_Authentication.pdf",revision:"da8b6e9d2ccd777d64488c55a5641ebe"},{url:"/pdfs/KLJS_Introduction_to_PWA.pdf",revision:"7516ec53e1399d006cd70cde2621c302"},{url:"/pdfs/Payment_Request_API_MOSC.pdf",revision:"62a6ba04f363f85ac22acebcc7399763"},{url:"/precache-manifest.c80c5fa3a1e02143c0ad51fc684e85ae.js",revision:"c80c5fa3a1e02143c0ad51fc684e85ae"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/service-worker.js",revision:"24eedf83bfb6637f45353850239a343b"},{url:"/skills/",revision:null},{url:"/timeline/",revision:null},{url:"/zh-CN/awards/",revision:null},{url:"/zh-CN/interests/",revision:null},{url:"/zh-CN/keynotes/",revision:null},{url:"/zh-CN/skills/",revision:null},{url:"/zh-CN/timeline/",revision:null}],{})}));
//# sourceMappingURL=service-worker.js.map
