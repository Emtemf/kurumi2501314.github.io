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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","541ccfed122ac1d0c750609eb22fcc23"],["D:/Blog_my/blog/public/Gallery/comic/index.html","f65f21da62fe742895432de0a24989ac"],["D:/Blog_my/blog/public/Gallery/index.html","a187d107e14c96294198a7d5783297de"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","e75ad8676c1fb8a995e060c42d58cba4"],["D:/Blog_my/blog/public/about/index.html","27a75b883fd8d00a64bf209999acc774"],["D:/Blog_my/blog/public/archives/2020/07/index.html","93ac1ded147938a91d11f943b30c3538"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","ca1445aa0e8ccc4a198365741b045e09"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5e6e349c6199adc0ee8af28cb6d6b888"],["D:/Blog_my/blog/public/archives/2020/index.html","0102de590f5b4140cbd55c1778d10b46"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f2d134719ef948465c34b125de22c69c"],["D:/Blog_my/blog/public/archives/index.html","d98acf8ef7fbc866ef9b15d688420fbd"],["D:/Blog_my/blog/public/archives/page/2/index.html","19651dc31d7609951fcde78470ff43fd"],["D:/Blog_my/blog/public/article/18e57658.html","537feafe01a512c6e58c6212267d5e28"],["D:/Blog_my/blog/public/article/1e64d194.html","6f704ed6063afe2d81c9bceb05f78cb2"],["D:/Blog_my/blog/public/article/21f50898.html","7b27ac762ea27e5e1de1212498d4ce46"],["D:/Blog_my/blog/public/article/234762cd.html","7947f019ea85384e785e33d5d84c7d2f"],["D:/Blog_my/blog/public/article/2b97b46c.html","ff52d7925ac8f1b578dbcfc247931706"],["D:/Blog_my/blog/public/article/358ad26.html","f824ea967a1d57ce640028009c0805e5"],["D:/Blog_my/blog/public/article/541a8071.html","3dcac58e3cc26301443007458421c565"],["D:/Blog_my/blog/public/article/5d6f1d17.html","f6f1f07ad2ca62080e73b96c9f20f69c"],["D:/Blog_my/blog/public/article/5dcc92c.html","9ad413aa7a490828fa072d95c10afacd"],["D:/Blog_my/blog/public/article/67da7762.html","8fe25a1947b2bc93c0bfa5e88872f587"],["D:/Blog_my/blog/public/article/683f20fa.html","7fa6cd3459bf5d147be1dc36572ffbfa"],["D:/Blog_my/blog/public/article/7758c0ce.html","3f901252c07664d2191e5dbe260b0130"],["D:/Blog_my/blog/public/article/7a56c169.html","1b1ba3427714d97aa7a8ae5bfc7b0633"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","561117fa4945524005c7d76c5eb1658c"],["D:/Blog_my/blog/public/article/c386a086.html","26ec8250ff133e0ce4ab7b8d8319d186"],["D:/Blog_my/blog/public/article/e419ec53.html","9ccd0b1aa5b3de6bd6e17d79b32cf976"],["D:/Blog_my/blog/public/categories/Android/index.html","f93f21b57e6051054c6931d7dde1d9de"],["D:/Blog_my/blog/public/categories/index.html","23df056cf1e94145de6dbc557dea68fe"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","8e41ea2663b12ea4abf939398cb0792b"],["D:/Blog_my/blog/public/categories/后端云/index.html","6a221ba193c8330bd6a4a06e4fd97248"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","9e3fb884b0f2b6c644427c4003306801"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","9f34c517854581458697e5c8494bd11a"],["D:/Blog_my/blog/public/categories/百度云/index.html","a52a8203134b199b147ccc124f311cf5"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","f5db9c4a6c49c4b36cc566bde503d98a"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","19f206ee1abfe80ad395f9fbb2a75c0e"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","e16586ab236d29fb002e1fc17199218e"],["D:/Blog_my/blog/public/music/index.html","aff4ab0c532361155491e31a9a932f89"],["D:/Blog_my/blog/public/page/2/index.html","c2a586eb1e2bff5c578863dffdbbbc61"],["D:/Blog_my/blog/public/page/3/index.html","4143db53faf63dcdf6216d9002af9e67"],["D:/Blog_my/blog/public/tags/Android/index.html","1b167c9d34189e31b2601294c75d65ac"],["D:/Blog_my/blog/public/tags/bmob/index.html","4ef75fda5b4fc06c10bd956d561673ec"],["D:/Blog_my/blog/public/tags/coding/index.html","0bc846927be6d74f7b34547b5b5977de"],["D:/Blog_my/blog/public/tags/github/index.html","4529a1aad9a12f4045a5a48cd3f86b3b"],["D:/Blog_my/blog/public/tags/hexo/index.html","3e74b00faba8f6378fb7125ac2165a05"],["D:/Blog_my/blog/public/tags/index.html","61e7d5089c40965691878807d5d95969"],["D:/Blog_my/blog/public/tags/leetcode/index.html","f8b94bca1c1cc1767f1e40bb9d119530"],["D:/Blog_my/blog/public/tags/情感分析/index.html","fdc06822d49ed878cfd6d931c3c8652c"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","32de826dd322140c59a46978afe4b008"],["D:/Blog_my/blog/public/tags/登录注册/index.html","4e40f873e471a6043cee9c3249104bfc"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","fbb93aa9401f4cc5e8b75df73b0b9947"],["D:/Blog_my/blog/public/tags/笔记/index.html","286fa5916f069e38d6bbc3140567e6bc"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","18610ef62a515ddb5a512f3bdcc90445"]];
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







