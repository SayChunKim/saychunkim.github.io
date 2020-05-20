/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  const singleRequire = name => {
    if (name !== 'require') {
      name = name + '.js';
    }
    let promise = Promise.resolve();
    if (!registry[name]) {
      
        promise = new Promise(async resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = name;
            document.head.appendChild(script);
            script.onload = resolve;
          } else {
            importScripts(name);
            resolve();
          }
        });
      
    }
    return promise.then(() => {
      if (!registry[name]) {
        throw new Error(`Module ${name} didn’t register its module`);
      }
      return registry[name];
    });
  };

  const require = (names, resolve) => {
    Promise.all(names.map(singleRequire))
      .then(modules => resolve(modules.length === 1 ? modules[0] : modules));
  };
  
  const registry = {
    require: Promise.resolve(require)
  };

  self.define = (moduleName, depsNames, factory) => {
    if (registry[moduleName]) {
      // Module is already loading or loaded.
      return;
    }
    registry[moduleName] = Promise.resolve().then(() => {
      let exports = {};
      const module = {
        uri: location.origin + moduleName.slice(1)
      };
      return Promise.all(
        depsNames.map(depName => {
          switch(depName) {
            case "exports":
              return exports;
            case "module":
              return module;
            default:
              return singleRequire(depName);
          }
        })
      ).then(deps => {
        const facValue = factory(...deps);
        if(!exports.default) {
          exports.default = facValue;
        }
        return exports;
      });
    });
  };
}
define("./service-worker.js",['./workbox-64f1e998'], function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/favicon.ico",
    "revision": "551d2f6a81e9dd40ff0dd481a8292658"
  }, {
    "url": "/fonts/fa-brands-400.14c590d1.eot",
    "revision": "14c590d124662eb50efa4c00f027b79c"
  }, {
    "url": "/fonts/fa-brands-400.3e1b2a65.woff2",
    "revision": "3e1b2a654a784ceb385157140b4ccd71"
  }, {
    "url": "/fonts/fa-brands-400.5e8aa9ea.ttf",
    "revision": "5e8aa9ea0ebcd2218178f554cdd8e6b0"
  }, {
    "url": "/fonts/fa-brands-400.df02c782.woff",
    "revision": "df02c782834b113d605d8329368737b4"
  }, {
    "url": "/fonts/fa-regular-400.285a9d2a.ttf",
    "revision": "285a9d2a28886ad64c4e45cbd733cf7c"
  }, {
    "url": "/fonts/fa-regular-400.5623624d.woff",
    "revision": "5623624dd1b017c66c29d1ac69cdcfa3"
  }, {
    "url": "/fonts/fa-regular-400.aa66d0e0.eot",
    "revision": "aa66d0e0e38c75666e98db33abae955e"
  }, {
    "url": "/fonts/fa-regular-400.ac21cac3.woff2",
    "revision": "ac21cac3f22cc9642f5af32e0c750797"
  }, {
    "url": "/fonts/fa-solid-900.3ded831d.woff",
    "revision": "3ded831d708bf90b2da86756551b5c1c"
  }, {
    "url": "/fonts/fa-solid-900.42e1fbd2.eot",
    "revision": "42e1fbd2cf655a0b44a2dfae9ca2f8c1"
  }, {
    "url": "/fonts/fa-solid-900.896e20e2.ttf",
    "revision": "896e20e26ad07dc63c9526ed814117e9"
  }, {
    "url": "/fonts/fa-solid-900.d6d8d5da.woff2",
    "revision": "d6d8d5da9214dc7d46b297672a602d55"
  }, {
    "url": "/img/fa-brands-400.a5a8a668.svg",
    "revision": "a5a8a66847a0fa86485fc5530a1fa6a9"
  }, {
    "url": "/img/fa-regular-400.88f0c5bd.svg",
    "revision": "88f0c5bd0da36b4a5d3cadbb793254cd"
  }, {
    "url": "/img/fa-solid-900.6c36adff.svg",
    "revision": "6c36adff85a9daa51869d2ce16609c9f"
  }, {
    "url": "/img/icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  }, {
    "url": "/img/icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  }, {
    "url": "/img/icons/android-chrome-maskable-192x192.png",
    "revision": "845a39478d0e2d4d5d32a092de2de250"
  }, {
    "url": "/img/icons/android-chrome-maskable-512x512.png",
    "revision": "2695f5feb66cdb0c6f09d0e415824cf9"
  }, {
    "url": "/img/icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  }, {
    "url": "/img/icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  }, {
    "url": "/img/icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  }, {
    "url": "/img/icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  }, {
    "url": "/img/icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  }, {
    "url": "/img/icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  }, {
    "url": "/img/icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  }, {
    "url": "/img/icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  }, {
    "url": "/img/icons/legacy/android-chrome-192x192.png",
    "revision": "a9f302492520c3cc0ef59a38080d2314"
  }, {
    "url": "/img/icons/legacy/android-chrome-512x512.png",
    "revision": "ce935f7828ed767429dd6868bac95e51"
  }, {
    "url": "/img/icons/legacy/android-chrome-maskable-192x192.png",
    "revision": "f43a496b8a30a5e65e1d88d43a65ab23"
  }, {
    "url": "/img/icons/legacy/android-chrome-maskable-512x512.png",
    "revision": "356a7e4ef41b7994a2aa22ce08376134"
  }, {
    "url": "/img/icons/legacy/apple-touch-icon-120x120.png",
    "revision": "0610202c65814d36c1f8e17cf5941b42"
  }, {
    "url": "/img/icons/legacy/apple-touch-icon-152x152.png",
    "revision": "1da4b1502d9afe7947e4c5fbc2c871ee"
  }, {
    "url": "/img/icons/legacy/apple-touch-icon-180x180.png",
    "revision": "498e290449a3df9581c9ec88ddaf76c2"
  }, {
    "url": "/img/icons/legacy/apple-touch-icon-60x60.png",
    "revision": "bbf3a085fe0073ed145cc05e7ec85034"
  }, {
    "url": "/img/icons/legacy/apple-touch-icon-76x76.png",
    "revision": "499ba924b1be257c12ff7a0b51c6e702"
  }, {
    "url": "/img/icons/legacy/apple-touch-icon.png",
    "revision": "07dcd1383f06cd65e851682e1dfccb68"
  }, {
    "url": "/img/icons/legacy/favicon-16x16.png",
    "revision": "17988228713b7247c279589edf5a5e7e"
  }, {
    "url": "/img/icons/legacy/favicon-32x32.png",
    "revision": "35fdec98a753266a2b778b2da5e8676b"
  }, {
    "url": "/img/icons/legacy/safari-pinned-tab.svg",
    "revision": "bf600dc219ab42fe9f4b5192fed158c9"
  }, {
    "url": "/img/icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  }, {
    "url": "/img/icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  }, {
    "url": "/img/icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  }, {
    "url": "/img/sc_logov2.bd3ed540.png",
    "revision": "bd3ed54062fdc82d4d90981fcfe2f3ef"
  }, {
    "url": "/img/sc_logov2_colored.84414cb8.png",
    "revision": "84414cb8e5558a90e81212cb0cf056a7"
  }, {
    "url": "/img/timeline/cover_spa.JPG",
    "revision": "62c056399f8dceedc38711b668c7e04b"
  }, {
    "url": "/img/timeline/fusionex_1.jpg",
    "revision": "fa15d13ee51f21ab2edb28396ed86d8b"
  }, {
    "url": "/img/timeline/gdg_2.jpg",
    "revision": "3cea277a67586c43f14bad0514323b9d"
  }, {
    "url": "/img/timeline/gdg_4.jpg",
    "revision": "106e8f5fb128683d6f5a0f4b861dd103"
  }, {
    "url": "/img/timeline/gsa_3.jpg",
    "revision": "e90ea22384bfd9dab8445260b3cde55e"
  }, {
    "url": "/img/timeline/havenice_6.jpg",
    "revision": "2ad5a7eeb3ac1f4188ed40377aae6e45"
  }, {
    "url": "/img/timeline/self_4.jpg",
    "revision": "b33e7c38cd85ad3e79a54db60e38ede1"
  }, {
    "url": "/img/timeline/xda_1.jpg",
    "revision": "d82f21d181d4458b83800db28a75e750"
  }, {
    "url": "/img/works/EstoreMHD.JPG",
    "revision": "2f95cb379564185530ad2a79f0a88045"
  }, {
    "url": "/img/works/coldstorage.jpg",
    "revision": "8d94b59a648a14f6a33397b61bd538eb"
  }, {
    "url": "/img/works/ioxKL2016.jpg",
    "revision": "6c3c4dc7b7e0f14c8a8b37a5022d11fc"
  }, {
    "url": "/img/works/mhd_estore.jpg",
    "revision": "c6e8ff78ec311b5f12944e50dc5bb802"
  }, {
    "url": "/index.html",
    "revision": "d0024f84c25517b22959f8f152bb333c"
  }, {
    "url": "/js/app.js",
    "revision": "d30fe11680da7d045743bcc96bbabd2e"
  }, {
    "url": "/robots.txt",
    "revision": "b6216d61c03e6ce0c9aea6ca7808f7ca"
  }], {});

});
//# sourceMappingURL=service-worker.js.map
