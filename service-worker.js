/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Blog_my/blog/public/404.html","3ca9bcab25116a6887576a98fd433317"],["D:/Blog_my/blog/public/Gallery/comic/index.html","437eb0d9255593b1e8e401a2053ca791"],["D:/Blog_my/blog/public/Gallery/index.html","b3b7f2ac507467f8ba3db5cea605e143"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","49baf65b3489ae898d906cee2db35111"],["D:/Blog_my/blog/public/about/index.html","dc75dfc300d5fe97fc4bb4adc6780c74"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1f3ce31866d48c4538ca83b28c075592"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","a22d8377c141d204eda0dfe653741ec0"],["D:/Blog_my/blog/public/archives/2020/08/index.html","564e7268466e14471fe669fe19df5ef0"],["D:/Blog_my/blog/public/archives/2020/index.html","7a69736c8cf80d5ab2976abd463d0791"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f68af0fc13470562ae254838f3d1f5ac"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","4197309b2675d9e52e7d65a434e0b1a1"],["D:/Blog_my/blog/public/archives/index.html","599cbb9498567b51a95f4ca7846bd9e9"],["D:/Blog_my/blog/public/archives/page/2/index.html","4c731acea228384fdbc3ed0736801382"],["D:/Blog_my/blog/public/archives/page/3/index.html","9049587291ac10d7e3d4593459fcd8d6"],["D:/Blog_my/blog/public/article/1811f8b8.html","a08e509502211d8b70329e0299af6761"],["D:/Blog_my/blog/public/article/18e57658.html","ea39397196799086a30390541e73eea6"],["D:/Blog_my/blog/public/article/1e64d194.html","ef0ba3f674211cfc683f9fa400c59b76"],["D:/Blog_my/blog/public/article/21f50898.html","498bb12cdc2c623fa501fe0cf04afc04"],["D:/Blog_my/blog/public/article/234762cd.html","39b777eff1756b9e9036b0ba9d15d0e7"],["D:/Blog_my/blog/public/article/2b97b46c.html","b785df3c86637ce973a9d31ffbcd112a"],["D:/Blog_my/blog/public/article/358ad26.html","c7d6309cde276471f43a3cc514ab550a"],["D:/Blog_my/blog/public/article/541a8071.html","efdaa8fa90c3a6bd07e2d4aaeaceaa02"],["D:/Blog_my/blog/public/article/54412d2c.html","34b667e49e8e64bcaebd4dc7039ab1af"],["D:/Blog_my/blog/public/article/5c1827a.html","78f9bad7bc979ccb572750dfd7f9ce02"],["D:/Blog_my/blog/public/article/5d6f1d17.html","ea93ae465048404f87742b91f7382cb9"],["D:/Blog_my/blog/public/article/5dcc92c.html","8ebf9d11c4390afec22337773256a151"],["D:/Blog_my/blog/public/article/67da7762.html","2135b60d57f7d2c4be165055abb9914b"],["D:/Blog_my/blog/public/article/683f20fa.html","7f69ceec303b6c08ad2a566ce4812b34"],["D:/Blog_my/blog/public/article/7758c0ce.html","149e0293de80eecf83fd3152c78bd125"],["D:/Blog_my/blog/public/article/7a56c169.html","08cb9be27a17b42b67398d1eecd1b251"],["D:/Blog_my/blog/public/article/7d561955.html","1dc7d8fca02d47a9a52065d5d3f973c4"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","d8a5dd801bace555a68ee934fc547500"],["D:/Blog_my/blog/public/article/c386a086.html","074326f1a04bdd0aab6bbb761a9ff047"],["D:/Blog_my/blog/public/article/d080f90f.html","f1c970139e99f8195221897eb42fdc21"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","43f86edf39131be287204914b0ef9ebe"],["D:/Blog_my/blog/public/article/e21e4e82.html","c521d566e82bfcbfab466c838cfb1f86"],["D:/Blog_my/blog/public/article/e419ec53.html","6251b8a5e2ec634b63faf0d6e49953ff"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","a910db0b2615b7ffd19533589564293b"],["D:/Blog_my/blog/public/categories/Android/index.html","2adc7bb2dd388065ca0dcd559e25eae4"],["D:/Blog_my/blog/public/categories/index.html","531ce90d4ea4596351fd1240ec4543ce"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","0c21933cbcab8002495fd10352945758"],["D:/Blog_my/blog/public/categories/后端云/index.html","654636fe5171af64093caa37156af5ee"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0a0c263f0a4de45dd59b767a2905e819"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","ca71fb12a157c8c058d863ad2f6bcc75"],["D:/Blog_my/blog/public/categories/百度云/index.html","d1e4d990b958bf6b8237e72470f65d47"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","ae31952562f7b0ca051acaaf73a9e73c"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","47b3254571bc636c730b9ff451526b40"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","9e093e28cc4eda608fecf989a9a64a6f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","3ed5fac30a3cc93e6064336d09094c94"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","130ef33d49cedfc69129ab9479820db3"],["D:/Blog_my/blog/public/music/index.html","b429d32eea3db08bf9e4ad537c0f21d8"],["D:/Blog_my/blog/public/page/2/index.html","99d38b1ff48ba4cc5af50ce171fdd075"],["D:/Blog_my/blog/public/page/3/index.html","aef40b6620a6975c179a449b4bba46fb"],["D:/Blog_my/blog/public/page/4/index.html","addb19376dcfbe9e4ff4c1f8a6d32e91"],["D:/Blog_my/blog/public/tags/Android/index.html","d52e626048379bab8e80ead9864d134e"],["D:/Blog_my/blog/public/tags/bmob/index.html","6dff596fde1afcbaa7ed32dc82724004"],["D:/Blog_my/blog/public/tags/coding/index.html","a89710c1411dca2f72cf327acaa42f3d"],["D:/Blog_my/blog/public/tags/github/index.html","7068fbb5b4870f950e74809bd9c77254"],["D:/Blog_my/blog/public/tags/hexo/index.html","6384234de7efbcb0d363153f155f336d"],["D:/Blog_my/blog/public/tags/index.html","f6ab83e247f9954b3598f1d5c625dbfe"],["D:/Blog_my/blog/public/tags/leetcode/index.html","abb73b65463f771bb0d35746d1e00e4e"],["D:/Blog_my/blog/public/tags/情感分析/index.html","6a3b2b5ffb18947bf3ce485b946ae3d4"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","59d0b6a82f2c244d41aab66418bb9c71"],["D:/Blog_my/blog/public/tags/登录注册/index.html","fb348f43c1daeb4a097e0a9f7838b5d6"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e451a947b14598f109b6cc65a683fe7a"],["D:/Blog_my/blog/public/tags/笔记/index.html","ee880d7ec3d57266cea20ece73638657"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","a4004159a5ad47a227faaea10b7b032b"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","ed86ebdcdb472b36a00071f937835020"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







