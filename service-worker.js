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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","43b77a0edfd9cf7c0370cb67b6515568"],["D:/Blog_my/blog/public/Gallery/comic/index.html","526e0fe0a73d12a14cc85db24e175260"],["D:/Blog_my/blog/public/Gallery/index.html","31e3bcc358450edc46e230c7c987ea6e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","71294e7e7511185a002d07d26f6495aa"],["D:/Blog_my/blog/public/about/index.html","9fb194479087b1948023e3b54bb823fe"],["D:/Blog_my/blog/public/archives/2020/07/index.html","c874a85d88eda22450b1c5766c69ac06"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","03c983d4bc86d0f74b19b4087532ebf5"],["D:/Blog_my/blog/public/archives/2020/08/index.html","f5cee3c40c0cc4138c6754dc5d7cbd1a"],["D:/Blog_my/blog/public/archives/2020/index.html","ea6af0d4e158d00c2bbbf2149dfcce39"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","4ad35a3c69239356c35a62eb457c7702"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","811e7c732965f8769c521e4415f20a04"],["D:/Blog_my/blog/public/archives/index.html","9206b7983fd109fa120e9c6a81c3e75b"],["D:/Blog_my/blog/public/archives/page/2/index.html","4ea22784fee28e76333f0e4b52b77d10"],["D:/Blog_my/blog/public/archives/page/3/index.html","8e7eddca9d0909ed7f4f53a91408ec41"],["D:/Blog_my/blog/public/article/1811f8b8.html","d77def6ee5915f69aad78385b25ddc49"],["D:/Blog_my/blog/public/article/18e57658.html","740234a79f0bf75e889de8957e061677"],["D:/Blog_my/blog/public/article/1e64d194.html","b5272cd61270021263a0d670761d8c1b"],["D:/Blog_my/blog/public/article/21f50898.html","815ded486bf4bd613fabff737e64e2bc"],["D:/Blog_my/blog/public/article/234762cd.html","296e528a4507b83f8a22779d3ed5989f"],["D:/Blog_my/blog/public/article/2b97b46c.html","1d540ca01e85112cf5edc4d9f4f6e2ba"],["D:/Blog_my/blog/public/article/358ad26.html","2f0f8906a24ded5ccca2eae6441fbfd3"],["D:/Blog_my/blog/public/article/541a8071.html","f87db2359b795e5fcf5f2a5683a3bcff"],["D:/Blog_my/blog/public/article/54412d2c.html","6d976f95b8ebdaa74a75d1d5a9249c09"],["D:/Blog_my/blog/public/article/5c1827a.html","bd90afef360eb596b6fc8d0a8fba48b4"],["D:/Blog_my/blog/public/article/5d6f1d17.html","d278ac0da920c3e7a028ce3b1405362d"],["D:/Blog_my/blog/public/article/5dcc92c.html","538895237d684ece239410643674a303"],["D:/Blog_my/blog/public/article/67da7762.html","c603e1453575e0c1bc17f21108e39e09"],["D:/Blog_my/blog/public/article/683f20fa.html","e8a86af353da511df2380431dbb452b6"],["D:/Blog_my/blog/public/article/7758c0ce.html","ca4dda258d438f7a5c56eeeb68642b2e"],["D:/Blog_my/blog/public/article/7a56c169.html","55019dbb97c91d2485d316f6360ea90f"],["D:/Blog_my/blog/public/article/7d561955.html","47a55983625f6ad3acd907fd91b09b5e"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a70c6852e3e325ae0a2559b6b566889c"],["D:/Blog_my/blog/public/article/c386a086.html","acacc4db81980eccd3182e397564dd35"],["D:/Blog_my/blog/public/article/d080f90f.html","eeb81cfd2abf56283614bef5a6aad290"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","e56206e48ccffd5b9f0db7ebd080603a"],["D:/Blog_my/blog/public/article/e21e4e82.html","53f08dcb69ce62b646e44b18dcfb4cf2"],["D:/Blog_my/blog/public/article/e419ec53.html","72c76b54f4ff4dd00e57df8ee8641168"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","69d3848a779762fa6e3d2ed0b721941d"],["D:/Blog_my/blog/public/categories/Android/index.html","102f8bc67f383129b4d41bdec75cf568"],["D:/Blog_my/blog/public/categories/index.html","bcf382dd2041ff6b7200b2840dee4a8d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","d43ac939e93459528ac4d8a3294de05a"],["D:/Blog_my/blog/public/categories/后端云/index.html","d9e719279601d2b04bb860ff4c0b2f7b"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","9886f40736c592cda23906e8b4374826"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","209f2350ba865181bc613c3e20c3852b"],["D:/Blog_my/blog/public/categories/百度云/index.html","c91a011b548da38fe78650e6902fe7b4"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","243967590e5cb7c6342d4e9e32b99034"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","29584382831410732e1a903b2bca882b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","426cf75c0d201655ee0f947fd7363eaa"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","82a269fd17438bc0df5269f9408c1e7b"],["D:/Blog_my/blog/public/music/index.html","b9a001b327ab30ce49b8feea014b807f"],["D:/Blog_my/blog/public/page/2/index.html","ba74c47ac8e1a9f3412be8d84c934b50"],["D:/Blog_my/blog/public/page/3/index.html","dd78fc57ae632dfbdefbf11e0aea6529"],["D:/Blog_my/blog/public/page/4/index.html","7d4a86a1f11b2afc022e4c866ae8c6a3"],["D:/Blog_my/blog/public/tags/Android/index.html","0eaa6a2d3598d0006897ea3a840817d0"],["D:/Blog_my/blog/public/tags/bmob/index.html","0d76abee875080d14c11b75bfd3ef018"],["D:/Blog_my/blog/public/tags/coding/index.html","eb0707d13db033a414ead495b62801fd"],["D:/Blog_my/blog/public/tags/github/index.html","749f4f8da61bec3841a53af2fb33a74a"],["D:/Blog_my/blog/public/tags/hexo/index.html","469e45cd1da0fcfae582240c21c62704"],["D:/Blog_my/blog/public/tags/index.html","9dde2a32f55909d99e5dfcffe3320389"],["D:/Blog_my/blog/public/tags/leetcode/index.html","dc536af7215ae68c5815c81d7797725e"],["D:/Blog_my/blog/public/tags/情感分析/index.html","4791353953a45bb5d7b9294ab626ef5f"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","c4f2878e12c47ab2cd4bb098181450ed"],["D:/Blog_my/blog/public/tags/登录注册/index.html","151d3da46edf11650e6098dc9429dc34"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","317add8fd570c3f0e41310531cf926b9"],["D:/Blog_my/blog/public/tags/笔记/index.html","cfc2820fb8dbe4e58d7f52a702b0a5d7"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","d341b086e3f9940c364ef0e4f1b6fe0b"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3a96e1a666b45f260dd1c0130172fe9d"]];
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







