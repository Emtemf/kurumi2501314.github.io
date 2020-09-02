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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","d34bac157552a470af7df8c3a82bf6a0"],["D:/Blog_my/blog/public/Gallery/comic/index.html","803e425082de94b15f7cca7a8e400ab8"],["D:/Blog_my/blog/public/Gallery/index.html","0badc23e88da2fd9b69877a182e00945"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ed58da1ab671e5a659583b6054b25237"],["D:/Blog_my/blog/public/about/index.html","a42ebe9c05010aa65f6409d671a35995"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ce91bbb3ff2d1a83c736dbca2c2a6e89"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","5c1dacb21d9e106d44c9d3a9607636cb"],["D:/Blog_my/blog/public/archives/2020/08/index.html","e96c04d94cb51c2ec96a8a443c6e13cd"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","67e7bd1f6e39776c2975a65475f83c57"],["D:/Blog_my/blog/public/archives/2020/index.html","dc476199f22462a9f610a24698bb1f7c"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f38ae28d165b252176e9aea3acc87bcd"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","299f1b615901fbaad2dfaaa44a71d0a0"],["D:/Blog_my/blog/public/archives/index.html","9f902b97e31cb831a5d3d10205970958"],["D:/Blog_my/blog/public/archives/page/2/index.html","f9739f724613dffdb64c2f7842baff22"],["D:/Blog_my/blog/public/archives/page/3/index.html","6eb9049b9c4388a82bd55de06815ccb3"],["D:/Blog_my/blog/public/article/1811f8b8.html","e3a707dba4e5e193b785e9f6dd302f25"],["D:/Blog_my/blog/public/article/18e57658.html","3af7a649537d4d58d8cf5ff98f363c6c"],["D:/Blog_my/blog/public/article/1e64d194.html","840adbf63782444d7eee5dc342eebf1a"],["D:/Blog_my/blog/public/article/21f50898.html","e24e0608e62179822a9ee1e8b0f045e5"],["D:/Blog_my/blog/public/article/234762cd.html","ac1716b3274c268b5d0f76bf92810b6d"],["D:/Blog_my/blog/public/article/2b97b46c.html","a91b7b4e5e7b31b94824a2d56919b964"],["D:/Blog_my/blog/public/article/358ad26.html","8f28f4e3b47871bc4b72131c7e136107"],["D:/Blog_my/blog/public/article/541a8071.html","242b8f409add88486ea95fe15ea3ff06"],["D:/Blog_my/blog/public/article/54412d2c.html","d04d2fd04c07f2faf27fb18c68b1da70"],["D:/Blog_my/blog/public/article/5c1827a.html","1078fb328ea814e79799e0ec28fa0d5d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","e8928f3370477c07ba231c2dab855356"],["D:/Blog_my/blog/public/article/5dcc92c.html","eaffb004773f9cae14577a78a21a087f"],["D:/Blog_my/blog/public/article/67da7762.html","f2b785a8aa311a71bab322b4a13bde79"],["D:/Blog_my/blog/public/article/683f20fa.html","c39389a651033c67f88eb6b9c5bfcaca"],["D:/Blog_my/blog/public/article/7758c0ce.html","87eca3331c29be9b92c3216977611895"],["D:/Blog_my/blog/public/article/7a56c169.html","287376666286c5ff23c478a4d35b97f6"],["D:/Blog_my/blog/public/article/7d561955.html","cc474ed945000fb801d54d7c3184b24b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","dc061e4ef5554d66a7c1bfbe8970c59c"],["D:/Blog_my/blog/public/article/c386a086.html","8d3faffda47fb55ce694f909627629eb"],["D:/Blog_my/blog/public/article/d080f90f.html","91c08817e7493f2e71719c1aa7534f6b"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","a49b2541430c7c3e644c7c08b76fcd51"],["D:/Blog_my/blog/public/article/e21e4e82.html","91df63eccbe4dbbde7f3c1d8dda4609e"],["D:/Blog_my/blog/public/article/e419ec53.html","bfb98323fac1666efdcb1cda48c9a512"],["D:/Blog_my/blog/public/article/eb0fc959.html","b06a1719592177f5d9d7807dd98f8e21"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","8b67da364635a530f67959795c3811d3"],["D:/Blog_my/blog/public/categories/Android/index.html","ce8d6bdca75fd7c046348852bf8d3252"],["D:/Blog_my/blog/public/categories/index.html","c288b9e4afd8c98b1bde59754d9a4c6b"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","04315b21b668f52288eeafc5ea239dd5"],["D:/Blog_my/blog/public/categories/后端云/index.html","60a32f421bd8d7bd7ecdf56267c06fe5"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","4b1924cc32666b4839ff30f277566d50"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","311b8006324f1c5fff4e9ccbc4430ba8"],["D:/Blog_my/blog/public/categories/百度云/index.html","1aba511500164a1da8c93bc5e787be00"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","e5b735fbf63960ca020cd4fd50670113"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","601ee3b69030bb0adc9e0db8cde40ace"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","47b492abd5c48c8e1f692241b48995c9"],["D:/Blog_my/blog/public/music/index.html","6c476fb2f9761e6b74a26cf4184bfff0"],["D:/Blog_my/blog/public/page/2/index.html","f2a7aac6f636f518a16fa41ea67e70a1"],["D:/Blog_my/blog/public/page/3/index.html","f9dbf6c68410c47cafa004f0a702c375"],["D:/Blog_my/blog/public/page/4/index.html","b8737dec37009bfb08d39435e5099f4a"],["D:/Blog_my/blog/public/tags/Android/index.html","3e3b3ecea7c4e5fd4fe5651d3953cf07"],["D:/Blog_my/blog/public/tags/bmob/index.html","eb1c51a1b629a29b08884342a10f00ec"],["D:/Blog_my/blog/public/tags/coding/index.html","a6dbb4cbcae83798b914b47639a643d0"],["D:/Blog_my/blog/public/tags/github/index.html","e6dcbfd93cadaba9e81591f003092e00"],["D:/Blog_my/blog/public/tags/hexo/index.html","eb08053458e9e4111228fa7a879c193e"],["D:/Blog_my/blog/public/tags/index.html","8c61109640c77d2ab6fdfc89c35236c1"],["D:/Blog_my/blog/public/tags/leetcode/index.html","a861342b6bd0fd4f18d71fb4ed29bfd8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","c5fbba2efff5cd51f7f4ba066dbc130a"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f4bbcd833bced45309e62142b6e6aa95"],["D:/Blog_my/blog/public/tags/登录注册/index.html","9d8781a3841f33fea9accdb24757d6ef"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","ff24e6300b4fe19e5f0f74081b3dc96c"],["D:/Blog_my/blog/public/tags/笔记/index.html","c8b5f2b16c50aaa363838812f030b3b1"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","c893969dc3c171fa11789e2dfb4adbc4"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","03356d2985f86c44f58dff0f8242a74f"]];
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







