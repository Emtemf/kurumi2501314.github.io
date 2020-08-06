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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7246889363010e08b32641a90e934d3d"],["D:/Blog_my/blog/public/Gallery/comic/index.html","ce7c5f3144c0991e34a050b2bb7b3ed0"],["D:/Blog_my/blog/public/Gallery/index.html","fe71421d31bf178f4421c678f4f5173c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b7b623c771dae787d0a34cf4930e8e54"],["D:/Blog_my/blog/public/about/index.html","7774b24a3faf34754ac17a44ccd0323a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","68d9e365bc28e7ae4c4be042816748be"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6738d6890991ee762ae86268d7fb4565"],["D:/Blog_my/blog/public/archives/2020/08/index.html","599bb1c178ca0e4963f20afec4e63f07"],["D:/Blog_my/blog/public/archives/2020/index.html","3a02af624fe82dfbe593cc33df8ea5e6"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","d365a6807bed0019cc51738792218186"],["D:/Blog_my/blog/public/archives/index.html","5fe09baa3249179f6de56a07f9c2fe0f"],["D:/Blog_my/blog/public/archives/page/2/index.html","8a8e600f331c48a1d08c051671b590e0"],["D:/Blog_my/blog/public/article/18e57658.html","5963f6e4ec04c7621be1bd487abbe048"],["D:/Blog_my/blog/public/article/1e64d194.html","5df74274714de169bf75bc6895911e0c"],["D:/Blog_my/blog/public/article/21f50898.html","19d22fb05b1c5aa433a1b7e6ad88f260"],["D:/Blog_my/blog/public/article/234762cd.html","a07965ce8e05bbc16c00822b5f3b425f"],["D:/Blog_my/blog/public/article/2b97b46c.html","9b74d76fbf4fec3dc1f206d22ba0276f"],["D:/Blog_my/blog/public/article/358ad26.html","c67d736a83c8fc4f889dabe26592ae85"],["D:/Blog_my/blog/public/article/541a8071.html","73bda458a86d9009addd67a5670d7af3"],["D:/Blog_my/blog/public/article/5d6f1d17.html","d1f304df4b3468dc2b0192d0e74e0609"],["D:/Blog_my/blog/public/article/5dcc92c.html","ae687d47b4e9562a0caabd3c1f23334c"],["D:/Blog_my/blog/public/article/67da7762.html","99d8f75da809c4009d226c4276c5020b"],["D:/Blog_my/blog/public/article/683f20fa.html","c3dccba336c3587b256ebef0f4e00f7d"],["D:/Blog_my/blog/public/article/7758c0ce.html","e53cdf9aec58525e1cef6c9fcd4fa2c1"],["D:/Blog_my/blog/public/article/7a56c169.html","459ed328b39590f2668da295eb6a076a"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","8bab58e205eee2d1991b27388c192708"],["D:/Blog_my/blog/public/article/c386a086.html","29c93de493b18956b0d861547454a630"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","42b31cd23a11910e9b08009e2a3553e5"],["D:/Blog_my/blog/public/article/e419ec53.html","003d6ef2a88545aaac7881f18b61a91c"],["D:/Blog_my/blog/public/categories/Android/index.html","dec20b0dab5b079d7e5ddcb4934d104c"],["D:/Blog_my/blog/public/categories/index.html","1b71d9881793fe7f454c37a9a14ee294"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1bfda58ead692dae05a51121196238f6"],["D:/Blog_my/blog/public/categories/后端云/index.html","5b2c7e0134b626597b835ec42a7611f4"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","14b61a4388e499f6a5c2945fd9c56049"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","d760c004c6bdcef34d3b08a6fd9b33bf"],["D:/Blog_my/blog/public/categories/百度云/index.html","7f58898a77301e3a89f6fcdad202b0c7"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","629d2f9035656e27bd55acaacc5be9f4"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","0a24ec3c7642948beaf9cb7dde03a94c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","7728333336ddefb1b84eb3abef33f43e"],["D:/Blog_my/blog/public/music/index.html","ae71c1fb6e907e66d1539ed032caffbf"],["D:/Blog_my/blog/public/page/2/index.html","0a09e4d97783e4ea0b899f350f427bbd"],["D:/Blog_my/blog/public/page/3/index.html","d0977f39985115c68148a31563573464"],["D:/Blog_my/blog/public/tags/Android/index.html","bdd90625414f18fed7d64710b335cb6a"],["D:/Blog_my/blog/public/tags/bmob/index.html","05161c0b322c5d8ca482f0d1f87da5e7"],["D:/Blog_my/blog/public/tags/coding/index.html","d81a71814691f3ca63c082fb874695ef"],["D:/Blog_my/blog/public/tags/github/index.html","a460186dca73a147390ea93fbd3642c5"],["D:/Blog_my/blog/public/tags/hexo/index.html","bf895d8ea78fafac5301e009cf2560fd"],["D:/Blog_my/blog/public/tags/index.html","58b94ef2cbb673cb1388ca69c586d862"],["D:/Blog_my/blog/public/tags/leetcode/index.html","1ced7d11c56606fb68778d9250947c60"],["D:/Blog_my/blog/public/tags/情感分析/index.html","14911b26d1bf30f8be2f80b42d02e7b5"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","91b43c26893c1e3abccc44e77f149f3b"],["D:/Blog_my/blog/public/tags/登录注册/index.html","75581c6f3ba58598560492b795a6e6df"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","8654b71eb3f7e431831ec23a60ffc03d"],["D:/Blog_my/blog/public/tags/笔记/index.html","acdf175834e09c0c2ba7324598b76f72"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","a2c9603ab4d5f5eabe17a932c4a4943b"]];
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







