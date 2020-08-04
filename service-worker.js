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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","8894e6ce8dc6d907da753c79d1ec8d5d"],["D:/Blog_my/blog/public/Gallery/index.html","ae065564d5c831cc9b8b99681fc14687"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","3041627c6c9ddf09bc265615f5d34965"],["D:/Blog_my/blog/public/about/index.html","8af4f86998fd292382adb2434e2dd83a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","482770c7566d3f431ab9905259df1a52"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c23c2149d3773c6a887f77bcdad1e94c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","964d8ec22429616615941398fda649d7"],["D:/Blog_my/blog/public/archives/2020/index.html","9900c561549cd8258ae7d326cf0939ef"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","a57aa73f5c82e10943ba0a00c897a1d8"],["D:/Blog_my/blog/public/archives/index.html","c388dd956cc65be2db284ca56ba5e99d"],["D:/Blog_my/blog/public/archives/page/2/index.html","83d675d6b01451001b4f37d350d927fb"],["D:/Blog_my/blog/public/article/18e57658.html","ab72e5a78099743d6ce90daf16623b3b"],["D:/Blog_my/blog/public/article/1e64d194.html","49836c8a1f1de083818b6da6c9449492"],["D:/Blog_my/blog/public/article/21f50898.html","5dd979814d4400b4a68d84b6c7e9ad1e"],["D:/Blog_my/blog/public/article/234762cd.html","085be8615437b8855906ef2d95b4778d"],["D:/Blog_my/blog/public/article/2b97b46c.html","34318235d40e6bc5cda0057dea9cf610"],["D:/Blog_my/blog/public/article/358ad26.html","ebdcabf3032473cc1f57c940b8150487"],["D:/Blog_my/blog/public/article/541a8071.html","bc58a3fddeb941d0c1c8106ce67f0125"],["D:/Blog_my/blog/public/article/5d6f1d17.html","ce8ae2315a790f9468a8125b157f4d18"],["D:/Blog_my/blog/public/article/5dcc92c.html","a08d041dc9c5c592d45319ed1b1b066f"],["D:/Blog_my/blog/public/article/67da7762.html","67dba2bf05ccee9241ba373d638d9575"],["D:/Blog_my/blog/public/article/683f20fa.html","3fd24629e71a3add1d1b376d4114600e"],["D:/Blog_my/blog/public/article/7758c0ce.html","a50aade152d33a051696ce70c67afaec"],["D:/Blog_my/blog/public/article/7a56c169.html","290d043673f2d2ed8fff2932f9af32cf"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","d019f80ac03b8e990ee6b6b867407a2b"],["D:/Blog_my/blog/public/article/c386a086.html","61607368884220ae8f2a950afa7a6a30"],["D:/Blog_my/blog/public/article/e419ec53.html","d48526f1998fc7faf8636e45e6e2a13b"],["D:/Blog_my/blog/public/categories/Android/index.html","cb89b09590067f5eced43105d956d52c"],["D:/Blog_my/blog/public/categories/index.html","69ceb3782772ac2de2c3f5c0c4b50d97"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","790e7894a78f3dc4e02be71a24853ff2"],["D:/Blog_my/blog/public/categories/后端云/index.html","43e5fe1c0112095f76d97d103ac7505d"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","be0df544d713d5d165cffd9a0eac18b0"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","61fe42eb40deaad854d0bf8c7eef4a7a"],["D:/Blog_my/blog/public/categories/百度云/index.html","cae5f98c1ba61b4cbde1a09f26baaebe"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","c3c6aa1240a2e51f3a0e96292791cbdc"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","02d421f0635412b6287c2fd3d0879a08"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c0f1ae94b26b270b7f75fd3634c12e44"],["D:/Blog_my/blog/public/music/index.html","e3b3cb5ca32145409c029e6fada6038f"],["D:/Blog_my/blog/public/page/2/index.html","050fb4a32318e743a2d21c9fc1e2f2e1"],["D:/Blog_my/blog/public/page/3/index.html","11e81b22e9a0ab510ffae19405e7ea79"],["D:/Blog_my/blog/public/tags/Android/index.html","fb803e31ac7a82dcf6c9411a18949fbc"],["D:/Blog_my/blog/public/tags/bmob/index.html","940183004db0b7f6aa24876c5130e120"],["D:/Blog_my/blog/public/tags/coding/index.html","c8a88a796a58f7a4a866303366c0e8de"],["D:/Blog_my/blog/public/tags/github/index.html","c4619c718bbd120b1525a178aad03149"],["D:/Blog_my/blog/public/tags/hexo/index.html","27ab3844428dde277ac7725cdf778c23"],["D:/Blog_my/blog/public/tags/index.html","cfe67e7673660e598269a385f91a7f33"],["D:/Blog_my/blog/public/tags/leetcode/index.html","60d852fd265f1a12181a417d5cc13741"],["D:/Blog_my/blog/public/tags/情感分析/index.html","23fdf6751c040f3038a79adca4d98d47"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f71207f1751ea42da2d1eae14b5cfc81"],["D:/Blog_my/blog/public/tags/登录注册/index.html","469ca72557120c52c80e3e4b9da6bc61"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","3996648344242e844668711e116f0425"],["D:/Blog_my/blog/public/tags/笔记/index.html","83cd44df1e997dfc9023af62b2523d83"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","2ed3cc0e72df484110711360f3c6478a"]];
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







