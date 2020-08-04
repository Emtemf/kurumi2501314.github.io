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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b39aad9bf8eabb860e066bcc66bcd108"],["D:/Blog_my/blog/public/Gallery/comic/index.html","e4eff3b0349ae80b67fb7a6c4c2072a7"],["D:/Blog_my/blog/public/Gallery/index.html","9722ebb11e355ee7c96052ddd0b1d971"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","72ca94af093a9e33a11f0323703b01cf"],["D:/Blog_my/blog/public/about/index.html","ef7a5197ba087fd140dbe8be92e34e4a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","fba8a72d51d632cf9bb6d21999b71a95"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b11cc67285214bd27c000a92ae7e0c67"],["D:/Blog_my/blog/public/archives/2020/08/index.html","e61dfbe37986af40c0b6c40292c501df"],["D:/Blog_my/blog/public/archives/2020/index.html","2a1d4fc7ff2ef34f430f7da1c831d646"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","be1d5b178804110faccd5743c99f1354"],["D:/Blog_my/blog/public/archives/index.html","5fe9d2c3b3f4b5b0cc30e4c4b42267cf"],["D:/Blog_my/blog/public/archives/page/2/index.html","6aab026b27bb705c88b0f202c420650d"],["D:/Blog_my/blog/public/article/18e57658.html","16eafca494d5935bb3c3d5988d5dd460"],["D:/Blog_my/blog/public/article/1e64d194.html","cbea5c9854b6e52b976189bf3ff5d293"],["D:/Blog_my/blog/public/article/21f50898.html","d7e26c438757ee45edec472b50f7671e"],["D:/Blog_my/blog/public/article/234762cd.html","e357266d338ce7480aa3df4e5f0c16fb"],["D:/Blog_my/blog/public/article/2b97b46c.html","a36b05ce00d33ff7f89e3d6211e94a27"],["D:/Blog_my/blog/public/article/358ad26.html","2e645fd9fa20df5741744de425d65c9a"],["D:/Blog_my/blog/public/article/541a8071.html","83d9889bddc2d9ca307fd3d639d324ad"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a9c04676a28da54b23bd51669e526f26"],["D:/Blog_my/blog/public/article/5dcc92c.html","b55d95376aebd1e86bc8f81f2448de71"],["D:/Blog_my/blog/public/article/67da7762.html","ec7fc5997bfa34de8caf1e715a3236f1"],["D:/Blog_my/blog/public/article/683f20fa.html","3aeef5e9db0eb7e5709ef1d3483c6a33"],["D:/Blog_my/blog/public/article/7758c0ce.html","006056efe91cea256bfebcd5483a8af5"],["D:/Blog_my/blog/public/article/7a56c169.html","25c1e7435f3de709fb184579465c1c89"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","b026bd8eb5a0dc6eb87e8641670b390a"],["D:/Blog_my/blog/public/article/c386a086.html","fc057ffa00f9fc15036116d39fa367c0"],["D:/Blog_my/blog/public/article/e419ec53.html","0b8242eb01e858c9b46ada6b04a3cbe4"],["D:/Blog_my/blog/public/categories/Android/index.html","ecbe5201a9a6c486a1ffaa524fd3a3a7"],["D:/Blog_my/blog/public/categories/index.html","d57368a8d08877f99881f8d1890ba572"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","250ea60d3ca681dc8eec72b6836c4504"],["D:/Blog_my/blog/public/categories/后端云/index.html","e7ef353bf9a501c0ef693007e899dd7c"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a9814935e596d680d29c52c37d561ac2"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","caab607864ca516b513a76ff108ee9b6"],["D:/Blog_my/blog/public/categories/百度云/index.html","994eb42777d2deca7307b5ad7fac4c97"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","404bb7aa9361ad3d553aa2262f063116"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","c8c1455388f8d63dce5102490b935128"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c5a8f5bee8413b3200949aa5aa8e2be7"],["D:/Blog_my/blog/public/music/index.html","883bb5bb55f9698362dbc64c20ebdcde"],["D:/Blog_my/blog/public/page/2/index.html","fe70e957c5d813301cf2e15673532405"],["D:/Blog_my/blog/public/page/3/index.html","9265aba3bc59860adce9c33e937588a1"],["D:/Blog_my/blog/public/tags/Android/index.html","7a9f86d49cb371b792b3b321608bbd6b"],["D:/Blog_my/blog/public/tags/bmob/index.html","104a8d5a7e9aa6444790cc676d32b053"],["D:/Blog_my/blog/public/tags/coding/index.html","875cceb924fcbff930b97a3fae9a74d5"],["D:/Blog_my/blog/public/tags/github/index.html","e9d0a5a59701403819a200bf38cfd0fe"],["D:/Blog_my/blog/public/tags/hexo/index.html","99de23e4aacbc0d08ad0e775458448cb"],["D:/Blog_my/blog/public/tags/index.html","78df9b5a84ccbcf114603f827607b718"],["D:/Blog_my/blog/public/tags/leetcode/index.html","2861f5427056bb7b84e45400def3211e"],["D:/Blog_my/blog/public/tags/情感分析/index.html","f502dd4996a8dda4af8ab98d6650b818"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0337c408acf198a49f331f27ad0b352a"],["D:/Blog_my/blog/public/tags/登录注册/index.html","449f6b4f75c48b5f12f885353a034d54"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","8a4d07566ec901c50e7b4a02facf1e1d"],["D:/Blog_my/blog/public/tags/笔记/index.html","1ec8a86573f9d7c9dc86987f03f13a21"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","11e572cd7a7af01088bf64e46490148f"]];
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







