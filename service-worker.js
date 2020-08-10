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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b49325b0a90599b07aa6bf12d9af8160"],["D:/Blog_my/blog/public/Gallery/comic/index.html","97f6b0fe1a5d0c07feca946d9204ca1a"],["D:/Blog_my/blog/public/Gallery/index.html","14a28ecbe63842939efa1707180bef4c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1ca788eea129ab6fe45c922f228200cf"],["D:/Blog_my/blog/public/about/index.html","f9fb786f5b3f22b7be595a43a097131d"],["D:/Blog_my/blog/public/archives/2020/07/index.html","dd99edc9f31429bf8ea442fb205608b5"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","0a7a312af7797a3f8a34362d052ebd52"],["D:/Blog_my/blog/public/archives/2020/08/index.html","0fb138ecc474f32dd96d64f6f920d638"],["D:/Blog_my/blog/public/archives/2020/index.html","5de0512012dfb0df084b47906261bf6f"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","57a558f0d27ebb91cfb85243fe27426e"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","b4e39fad2aa5f31ca2b7d1ac8b425bc6"],["D:/Blog_my/blog/public/archives/index.html","2f67dab2b84f6869a6aa71322ba0087e"],["D:/Blog_my/blog/public/archives/page/2/index.html","1edc66fbd633586f5fc38cd3d1f025c2"],["D:/Blog_my/blog/public/archives/page/3/index.html","31f5cfab98fbb1eda10bb99087326ed1"],["D:/Blog_my/blog/public/article/1811f8b8.html","80697eafff3b2e5cd55bd9f054e7ef65"],["D:/Blog_my/blog/public/article/18e57658.html","f657e3f4f6e5eca9a247362801d441c1"],["D:/Blog_my/blog/public/article/1e64d194.html","f4923aa45d95b10e10822fe597a89154"],["D:/Blog_my/blog/public/article/21f50898.html","ebee93ffa0918e76e278e26d39fadee9"],["D:/Blog_my/blog/public/article/234762cd.html","e0bd3e1cb3a23b7ae1fe13a42c2e5329"],["D:/Blog_my/blog/public/article/2b97b46c.html","9c79d1c6f0cebc6962efa73c091ccafa"],["D:/Blog_my/blog/public/article/358ad26.html","a20305ccb73161e68c4031b82f3edeb2"],["D:/Blog_my/blog/public/article/541a8071.html","8de5380d10d3432df1f51d844090ab1c"],["D:/Blog_my/blog/public/article/54412d2c.html","ea2fc1686c6f753e8faa124be3349251"],["D:/Blog_my/blog/public/article/5c1827a.html","be39534cc9798eec9f1ebc9baf3b989f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","bc81fe24b7c803f7def6f99bfbc5d16a"],["D:/Blog_my/blog/public/article/5dcc92c.html","33c4d4a356fe5a7220e547eb4c9d314b"],["D:/Blog_my/blog/public/article/67da7762.html","2aeacac21af2b7d5378d364f54e66245"],["D:/Blog_my/blog/public/article/683f20fa.html","18acb6ec8a9a09826da55b9e0e66b7a8"],["D:/Blog_my/blog/public/article/7758c0ce.html","88f92cecea2e331449db62e1530cd095"],["D:/Blog_my/blog/public/article/7a56c169.html","cac04ec81379d933cea768cbbbbf397f"],["D:/Blog_my/blog/public/article/7d561955.html","72396eddbf78e0f5e9189e463cfe6f58"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","e23416427b3f1f508c32b8daf69c186b"],["D:/Blog_my/blog/public/article/c386a086.html","2472dbb29271f6cf7e1612bce43f7b54"],["D:/Blog_my/blog/public/article/d080f90f.html","c52f31664daecd3c538065c191a79f85"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","d1283c1e6c8a2c7909ef0618b50d0fc9"],["D:/Blog_my/blog/public/article/e21e4e82.html","8007e3d249de480193e0f11831223776"],["D:/Blog_my/blog/public/article/e419ec53.html","994552d89be558053dec0cf43535a08a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","62eb82390e789810140e31c17c553392"],["D:/Blog_my/blog/public/categories/Android/index.html","d1adb3852f73fd83e49b6d8c55457cf6"],["D:/Blog_my/blog/public/categories/index.html","89e08c794fb122dd6feff2d9301b3f61"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","cd6b4cb78944344337112ed8735332ca"],["D:/Blog_my/blog/public/categories/后端云/index.html","4da8ea864a10927a10ffa821083e2f96"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","8b7be73ed3f5173303d9ad1f61c70261"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","5f499017d62f14d364c1401cff8195c2"],["D:/Blog_my/blog/public/categories/百度云/index.html","69e600deb13093dcfa20caf6b97b0621"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","7c7d6c492bcc94e233f981d5a45d8edd"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","0d73560ace7fc2a638b74654cc6ab177"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","047e1c481a86dee7f7e316e887703620"],["D:/Blog_my/blog/public/music/index.html","5892edb0a1fde7662fe0b7b9684bb1f8"],["D:/Blog_my/blog/public/page/2/index.html","90ca35b9c9d64c6f91c2811b81f3b848"],["D:/Blog_my/blog/public/page/3/index.html","817affd05eadeee17116977edbe556c9"],["D:/Blog_my/blog/public/page/4/index.html","97194eb2d13d4e713553338dbfbdd7e5"],["D:/Blog_my/blog/public/tags/Android/index.html","79f9fdd48d3f88c280e1da9e812a3fa7"],["D:/Blog_my/blog/public/tags/bmob/index.html","365e0c12c1a874631fbfb0fc92140edb"],["D:/Blog_my/blog/public/tags/coding/index.html","486c19f11e930e7b525defa4aec61a50"],["D:/Blog_my/blog/public/tags/github/index.html","6c524185b1d4482293da3ca44fb04120"],["D:/Blog_my/blog/public/tags/hexo/index.html","ccdb2e65c94daa5d8a231726ec9550e6"],["D:/Blog_my/blog/public/tags/index.html","99ac361e89f85c7000d2983bd3cf4e04"],["D:/Blog_my/blog/public/tags/leetcode/index.html","687f77641503baa3ba24eb64ed19e191"],["D:/Blog_my/blog/public/tags/情感分析/index.html","7ec8eadf67b5cb11b9c3838bb8f7678d"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f30c2a00aa6a8c501e7c285c2cb96b52"],["D:/Blog_my/blog/public/tags/登录注册/index.html","5dd43fa492c105831f2445010c4834b2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","2ea471b4ed32608821aee35aeeb4c158"],["D:/Blog_my/blog/public/tags/笔记/index.html","2e33d47923fcbfc1beba2e4e3a295461"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","df1ee232c1060e665534c9fb6693b4e4"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","9e7d76cd89168e8470835c180320eb76"]];
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







