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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","1ef984f19848d42bf9f92f637cfced40"],["D:/Blog_my/blog/public/Gallery/comic/index.html","640a8cdc7c03eca30ea430c6e19772ca"],["D:/Blog_my/blog/public/Gallery/index.html","34de6c51f7d34cccfbb9010c8c9d9122"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b22e7778510b2561a4d1f336ca0b2cd9"],["D:/Blog_my/blog/public/about/index.html","4f02101393e4a10b91d30a9bebfcb2f8"],["D:/Blog_my/blog/public/archives/2020/07/index.html","867a8d9608dac08611cee6a87128248a"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","83f5ab404aed7ab39b7ebb24c43c5ea4"],["D:/Blog_my/blog/public/archives/2020/08/index.html","94d267d717b495a65290da4cd27e948c"],["D:/Blog_my/blog/public/archives/2020/index.html","90c196cb59ec7bfbfb2579e69858de21"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","41727c79bbfd3ea029ca8454567dc6e0"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","e785de196ce9d343a9f9dd45c8942f7e"],["D:/Blog_my/blog/public/archives/index.html","ba7a881a00b4d14fa8a28b232c4e139c"],["D:/Blog_my/blog/public/archives/page/2/index.html","94ed569af1f2b418272b3cbfcc2f88cf"],["D:/Blog_my/blog/public/archives/page/3/index.html","44cd7e849ca964c4422f73161272a309"],["D:/Blog_my/blog/public/article/1811f8b8.html","dbed31676dc87c127cbb2ea22381419a"],["D:/Blog_my/blog/public/article/18e57658.html","b370cae511fb3f13df667dade85210aa"],["D:/Blog_my/blog/public/article/1e64d194.html","213bd99909ea74193d32a18f736bb1b8"],["D:/Blog_my/blog/public/article/21f50898.html","d809dc930565781e4df0720d17722954"],["D:/Blog_my/blog/public/article/234762cd.html","eac931208bcb4f1882fb8208597beff2"],["D:/Blog_my/blog/public/article/2b97b46c.html","e2735758fe4a1addecda067d21a53c26"],["D:/Blog_my/blog/public/article/358ad26.html","023e67eb221a4801601184bb4750e04d"],["D:/Blog_my/blog/public/article/541a8071.html","46d292e7c01e7f3e63eafbda5dff6789"],["D:/Blog_my/blog/public/article/54412d2c.html","00ba423add8e634ded98e6a12f54a9be"],["D:/Blog_my/blog/public/article/5c1827a.html","607f3a3b2778ee7dd37b78a3a7b4f0a3"],["D:/Blog_my/blog/public/article/5d6f1d17.html","e6c13ec03916282a7160721b142d96f3"],["D:/Blog_my/blog/public/article/5dcc92c.html","bb98ffd8536d63cda4db74538048a201"],["D:/Blog_my/blog/public/article/67da7762.html","a24fc00fc4b8916067f8c04ba657209e"],["D:/Blog_my/blog/public/article/683f20fa.html","0bff89f652d64e664c4a49bed85d9af4"],["D:/Blog_my/blog/public/article/7758c0ce.html","5abc8ffe6bbf53e1f53cce6a2b79b2df"],["D:/Blog_my/blog/public/article/7a56c169.html","baab847e4cd62e25e046ed2aa8f59bab"],["D:/Blog_my/blog/public/article/7d561955.html","20e81b4669ba984a66c545b7439d0950"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a6af5961c34d75dae2f2fec1d6e1c598"],["D:/Blog_my/blog/public/article/c386a086.html","401074f80c082fefb2e9de8687c19fb2"],["D:/Blog_my/blog/public/article/d080f90f.html","99060464574baddf6b83e953012180e4"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","77104add747c9cc7b7362c651fdeccb1"],["D:/Blog_my/blog/public/article/e21e4e82.html","fa18890fd23b48a74245ef393f4c461a"],["D:/Blog_my/blog/public/article/e419ec53.html","79f778fe85af3d557eb8a9c1d6c50224"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","751fc47959c176fc73493dba3817584f"],["D:/Blog_my/blog/public/categories/Android/index.html","a93d53193d43a4b80c3bd7e850787bda"],["D:/Blog_my/blog/public/categories/index.html","9608b78227b75b28955d53348cf5b03d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","9f9fc4f4abd2b8cbe9b84ccbd82002ce"],["D:/Blog_my/blog/public/categories/后端云/index.html","38e0ad81e636a25c43f1815cd0369a55"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","137d4af168473a5da32d73ec1ed355f6"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","58b7c65458a90a15012fad8568cd700c"],["D:/Blog_my/blog/public/categories/百度云/index.html","59c6e14e8d0285eec9ff91724b217415"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","30690c713ac6ea23f10ab63eaa3e7484"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","95583c2180b6ad30da1bd8c1a9c18b5d"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","f6ef2de6da98d2a929b3f432524677b4"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","281975013c76b7ea74049489c5aef649"],["D:/Blog_my/blog/public/music/index.html","7a7e3300abd6660d1fe19878cea36644"],["D:/Blog_my/blog/public/page/2/index.html","8334ff02ee6fd9efd246fc3c66372f86"],["D:/Blog_my/blog/public/page/3/index.html","413af4fa52a4d0727b2aec83532f46d3"],["D:/Blog_my/blog/public/page/4/index.html","cc11e4d575ab2a71c1a0ca4bc4c4c801"],["D:/Blog_my/blog/public/tags/Android/index.html","bf3daae3ba5a9eb9c903d84b4faca9dc"],["D:/Blog_my/blog/public/tags/bmob/index.html","27be3d62bf9d3e32a799e8538271f96d"],["D:/Blog_my/blog/public/tags/coding/index.html","dcf50c8ad4104396098ba7f5c6676d39"],["D:/Blog_my/blog/public/tags/github/index.html","7041a47a97aa59bc2aa41172264e3d20"],["D:/Blog_my/blog/public/tags/hexo/index.html","fab34c7a6341ce23089651fa6ec21a6c"],["D:/Blog_my/blog/public/tags/index.html","4f49f36b69de9e6e5ca8f6a9c5e89d1b"],["D:/Blog_my/blog/public/tags/leetcode/index.html","4173385933b8064ebbaec9e97544fca6"],["D:/Blog_my/blog/public/tags/情感分析/index.html","17d70869ff7109ce6b4c0f7db63a86be"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","a9b86a2bbc8e0b3a16e9b01a9df537dc"],["D:/Blog_my/blog/public/tags/登录注册/index.html","0fc889438f75211258003f48293ed177"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","dff1dc1fe1127dd667ef4f055aded27d"],["D:/Blog_my/blog/public/tags/笔记/index.html","f44bb09927563e86897c207e8cb7b5e2"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","e0e4648d968ba833ad0ccde9841c0576"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","a00892f5b6dc070cc8002ece911364ca"]];
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







