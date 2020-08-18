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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","4ff2cbc84cae85285575302de5c5f111"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3e214f3483be3fcb0093f12352ad9dc7"],["D:/Blog_my/blog/public/Gallery/index.html","b75e93af0de892e0c24cd039e94eb54c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","87ebee4cfe6f241f9e68f3528decbf7b"],["D:/Blog_my/blog/public/about/index.html","11f48a0e87002aa38b0b9f40b90d1b0a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","40b2cdef363fe9ee5463d9c99f4b1350"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","8114adb70653570bea10f6f7eb4a7b9c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","85c31b5d73de44318c1fdec99e9c591d"],["D:/Blog_my/blog/public/archives/2020/index.html","e0753a67a14cd33bb16b709f017bea14"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","5487cc3685256a9ed63a727bf6d51237"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","c5012bcbdb37d6f3a55a8cecae39026a"],["D:/Blog_my/blog/public/archives/index.html","57c24866fa6e95e0a8c193fed5efc5b1"],["D:/Blog_my/blog/public/archives/page/2/index.html","7248add2ce394f37f595d863ee842356"],["D:/Blog_my/blog/public/archives/page/3/index.html","e02c4ebc83e18ed275052df7b911808a"],["D:/Blog_my/blog/public/article/1811f8b8.html","7ac8a5213612cdc1c689fba47c4cf1bb"],["D:/Blog_my/blog/public/article/18e57658.html","920f8efcee4e86e78a4a5dc623e47934"],["D:/Blog_my/blog/public/article/1e64d194.html","5800a60cc592f8b3e6c32832fc584229"],["D:/Blog_my/blog/public/article/21f50898.html","73cb94beb694d9fde670eb9cf2cccb89"],["D:/Blog_my/blog/public/article/234762cd.html","7bd94e7a01a57b57a8901c6529aff56f"],["D:/Blog_my/blog/public/article/2b97b46c.html","a74fe6847b5fb7acd4b216706a691cfb"],["D:/Blog_my/blog/public/article/358ad26.html","6bbda86fc2d958b279053d47d41f27e3"],["D:/Blog_my/blog/public/article/541a8071.html","4f1ae0a0a5e95a29f2ed762b9d9d2bc3"],["D:/Blog_my/blog/public/article/54412d2c.html","bbe0d8551ce5713e980f136127d168de"],["D:/Blog_my/blog/public/article/5c1827a.html","f7fa3983fc325e30183fa9f8fb053378"],["D:/Blog_my/blog/public/article/5d6f1d17.html","16fc764f617b6fbb7a110de1bf4dc8fb"],["D:/Blog_my/blog/public/article/5dcc92c.html","797a2f858686e888defabb1495fe386b"],["D:/Blog_my/blog/public/article/67da7762.html","a99db34bdabe38566572bbabc1c6c466"],["D:/Blog_my/blog/public/article/683f20fa.html","ff15dd199beac7e0f4401f8b02f124fe"],["D:/Blog_my/blog/public/article/7758c0ce.html","50c61fd3c13afc17646ea9a30427b452"],["D:/Blog_my/blog/public/article/7a56c169.html","8a1950c81abb983b0a9f9d6d7c5d7fd5"],["D:/Blog_my/blog/public/article/7d561955.html","b3da2f93758d46db48aa2dbf6ee5e63c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","8210731c25e8543105f402db8310dd8d"],["D:/Blog_my/blog/public/article/c386a086.html","542a93abe348e077ec57fd0e55dc4ec8"],["D:/Blog_my/blog/public/article/d080f90f.html","8d495d5e7202aff7ad0262c7055976af"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","84bb0b5f8ae2b2afcfd3a76a263d28fd"],["D:/Blog_my/blog/public/article/e21e4e82.html","7bde9c988c219d27c1df3c6c2da2d054"],["D:/Blog_my/blog/public/article/e419ec53.html","e6c203d0d732933c90164203f9d8f9b8"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","03d6768c2416b8ea3e7458331a62bf08"],["D:/Blog_my/blog/public/categories/Android/index.html","f74d2d3d1d948eea2eb2f5230d1330ae"],["D:/Blog_my/blog/public/categories/index.html","b618771aaaf2d3ee3b00194f975cefc4"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1459cd4e954dd8f7efb6fe240f78c359"],["D:/Blog_my/blog/public/categories/后端云/index.html","9a803694e183135f003bc20d4909b835"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","be614ade265af4afab4bd09a03ff2b50"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","1e336f60a33b3acb64d61c99aa5c8bac"],["D:/Blog_my/blog/public/categories/百度云/index.html","b4afdac2970c31bf585ccb549a43ef6f"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","5d15f033c94086b2e90084259c3036b6"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","82c8820669733ed233da7e01e3d74f99"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","47e492e412405b819d13bd696c31303f"],["D:/Blog_my/blog/public/music/index.html","2bd94f08b717176ed28ee9f89221513a"],["D:/Blog_my/blog/public/page/2/index.html","974158626484e4079e2d70391a14ef74"],["D:/Blog_my/blog/public/page/3/index.html","40fc84fa42a126798003845d0007140f"],["D:/Blog_my/blog/public/page/4/index.html","8d3b5905739b65aa7a8ded576eda0a05"],["D:/Blog_my/blog/public/tags/Android/index.html","0ab2ffa78bdbf412df9a82cdd288f490"],["D:/Blog_my/blog/public/tags/bmob/index.html","f917e55d61abf1e5d03bfc64b74cf1b4"],["D:/Blog_my/blog/public/tags/coding/index.html","7e8c0448c41d37efb1ddf19d0702291a"],["D:/Blog_my/blog/public/tags/github/index.html","10dc30c6af711b0d357f7e22f62bbd3f"],["D:/Blog_my/blog/public/tags/hexo/index.html","754e1dfe4eb44b23c0dd5da64767652c"],["D:/Blog_my/blog/public/tags/index.html","a926ca984c0af5bf99f0b406efac1260"],["D:/Blog_my/blog/public/tags/leetcode/index.html","4d0563ef23480626913ee9932cfc6d1d"],["D:/Blog_my/blog/public/tags/情感分析/index.html","921fe3cb8e74664170602457d167e0a6"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","fd1749479fb2bb25a75d3e3d6ba89888"],["D:/Blog_my/blog/public/tags/登录注册/index.html","c7e6702d43844e73ce8288cb1b7d4df7"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a79853ad1d4a45d0d9a4e26037bed28e"],["D:/Blog_my/blog/public/tags/笔记/index.html","fcf8643626c3880ccf7b3665e1170cb4"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","20749e5563ec01f9a63bd6ba2fa121e6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5f1e503a5bbdce8dc4b1e00bb4b328bd"]];
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







