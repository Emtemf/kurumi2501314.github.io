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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","640f5a7ec50801f663b5b79a22bb984c"],["D:/Blog_my/blog/public/Gallery/comic/index.html","c1ff8a84b5c1ac97b03b1d05bc614c3f"],["D:/Blog_my/blog/public/Gallery/index.html","8ab6495d7a6cdd7d6aa4a7b424f42ea3"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","5712efe73a90deb1207b976e88b8ca3e"],["D:/Blog_my/blog/public/about/index.html","6d49f0a90590363ed099ee92ad1b6920"],["D:/Blog_my/blog/public/archives/2020/07/index.html","079778a05665d0e619d39f25f593e868"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","7c977914f1176f9ba8c4b199f576580f"],["D:/Blog_my/blog/public/archives/2020/index.html","a3cb400e5659c62149ca2eb3646a0574"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","59442be2bf45edef0bdf1d59a82d388b"],["D:/Blog_my/blog/public/archives/index.html","ff0def740f39a9a35bf54fea64ae7f56"],["D:/Blog_my/blog/public/archives/page/2/index.html","eb5c9dcac3435fc0797d79dccde35e97"],["D:/Blog_my/blog/public/article/1e64d194.html","f6ee1c7f8a7965177870cea3cff703a8"],["D:/Blog_my/blog/public/article/21f50898.html","045d1102af7c4a59f3777d3b5b2f9a71"],["D:/Blog_my/blog/public/article/234762cd.html","eeca3ad8def205055c5d023055d55fab"],["D:/Blog_my/blog/public/article/2b97b46c.html","153fb769eeef0eaabd7400cdddd2ad50"],["D:/Blog_my/blog/public/article/358ad26.html","4a2459e3c6614f321a124a4b8edd6c7c"],["D:/Blog_my/blog/public/article/541a8071.html","44de988a08405fad2b45ef3570fd2661"],["D:/Blog_my/blog/public/article/5d6f1d17.html","03e014d336d300db2a590de4ccc15b04"],["D:/Blog_my/blog/public/article/67da7762.html","8f356a14b127f75b7cb069f1f2edebf0"],["D:/Blog_my/blog/public/article/683f20fa.html","ce0cb2aa6e4f423d93cbd334cfabd4a7"],["D:/Blog_my/blog/public/article/7758c0ce.html","194c60f0965001eb17cd376f2a65544d"],["D:/Blog_my/blog/public/article/7a56c169.html","fa18582ac25ca3bde6a4c62d06c358ac"],["D:/Blog_my/blog/public/article/c386a086.html","9b5f4c70360ad081ddfbbef89d69fa70"],["D:/Blog_my/blog/public/categories/Android/index.html","485ba366eed369c05475ada482df5892"],["D:/Blog_my/blog/public/categories/index.html","0b5de9ed5ea173874912409f6a01fba8"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","57d7375a71147a0d15a4bf9ae8d6a1c6"],["D:/Blog_my/blog/public/categories/后端云/index.html","99d305776509589de8bfd76eec27195d"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","2958491e3d5f62c834d6636cad15f124"],["D:/Blog_my/blog/public/categories/百度云/index.html","4163ac1ddd6cf1ac3f396c60bccaada0"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","05358ec095dbaacd4c137127713a5a3c"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","2ddccbda354e9665fae24e3c4d39567c"],["D:/Blog_my/blog/public/css/touming.css","03ba2965fc83a6a97a9466b9e2e683aa"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","fc79c10d5f3b290ae5b5e8cd9da9bcc6"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","393f6d928063e5893741b5505839ee5a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","fe8a7159c557b4e582f4471b7dfc42b8"],["D:/Blog_my/blog/public/music/index.html","aee448201ecbbb79e4666a4184ab6b53"],["D:/Blog_my/blog/public/page/2/index.html","7c6a3c250c3fec3bdcfe674cdd81a9d8"],["D:/Blog_my/blog/public/tags/Android/index.html","7183814340aadca879e0a2418fb08e5e"],["D:/Blog_my/blog/public/tags/bmob/index.html","53fe0ec51e42be3856c4d881fea0a3e3"],["D:/Blog_my/blog/public/tags/coding/index.html","9caac39350199cf0a280a9f35287b7d9"],["D:/Blog_my/blog/public/tags/github/index.html","45ac340f0fde0da048d4ba90f0e499d0"],["D:/Blog_my/blog/public/tags/hexo/index.html","32e9f53cfc0849014199ac4c61bdf3c5"],["D:/Blog_my/blog/public/tags/index.html","87f3b845a34c7628dc5c7be6cc670c71"],["D:/Blog_my/blog/public/tags/leetcode/index.html","479396c53b1c4c9e52d1ce94a6ff68e1"],["D:/Blog_my/blog/public/tags/情感分析/index.html","546463e34b21920cf0a69969ae0f05d7"],["D:/Blog_my/blog/public/tags/登录注册/index.html","c85326b1770bd074743c8b24dfe80a06"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","957bcd87cfaceb1c177fe0b36ec584e6"],["D:/Blog_my/blog/public/tags/笔记/index.html","34953875438748a683f6c6707f82ccea"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7abc54ef91296d45b4d2e029c0f64326"]];
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







