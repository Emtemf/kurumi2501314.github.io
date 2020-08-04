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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","bf429f54660380e6f9d273ecaa2cf521"],["D:/Blog_my/blog/public/Gallery/comic/index.html","12107bd0c859232971411a8e0f66cf09"],["D:/Blog_my/blog/public/Gallery/index.html","f651c145778bfa3d57a0e2d779a253f7"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","57db20fb57bdfbf5bf4049f5142eadc4"],["D:/Blog_my/blog/public/about/index.html","dd6812974fc78557d807b9052bfc9ba1"],["D:/Blog_my/blog/public/archives/2020/07/index.html","9f3bbe48c4164c58ddd573a004a058b2"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","1e33860341735888e4223090b61a292c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","e3cd44304e38144e7d2b8c03f83998d1"],["D:/Blog_my/blog/public/archives/2020/index.html","baddb81bac2933520e75659e0ccb1396"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","d1113c39e76f0f4e0e7187791eeccf25"],["D:/Blog_my/blog/public/archives/index.html","e4ad57835058ec1bbb9d1c61560d5334"],["D:/Blog_my/blog/public/archives/page/2/index.html","9082a075f4a29b6d040b4cf294212bf3"],["D:/Blog_my/blog/public/article/18e57658.html","951455322f33792733e5bffd9ab59eb3"],["D:/Blog_my/blog/public/article/1e64d194.html","3ea8d376a24e9eea804b1aab1decccfc"],["D:/Blog_my/blog/public/article/21f50898.html","3e9578278d1a8d9eed7da2df7aeb224a"],["D:/Blog_my/blog/public/article/234762cd.html","750d7ba30dfe0f28e355ceea3992b671"],["D:/Blog_my/blog/public/article/2b97b46c.html","9ace903a83c471667b03067aace63553"],["D:/Blog_my/blog/public/article/358ad26.html","8bebc291c6ea16a6f6691253743b0d3b"],["D:/Blog_my/blog/public/article/541a8071.html","807c2089409fad86e57653b66a000dd4"],["D:/Blog_my/blog/public/article/5d6f1d17.html","f479e662cadb438e37a352d5cd9b9c4a"],["D:/Blog_my/blog/public/article/5dcc92c.html","76b4e813407a159d4ae0d81f3663706d"],["D:/Blog_my/blog/public/article/67da7762.html","dec78a78811e191859fe3c84009f6dbd"],["D:/Blog_my/blog/public/article/683f20fa.html","a7df18cdbe8d5791268eb016843cb723"],["D:/Blog_my/blog/public/article/7758c0ce.html","1f0ec5612742332074a33fcaaa9b32aa"],["D:/Blog_my/blog/public/article/7a56c169.html","95c032a30ac3b5f9f63db64d6d1e2e1b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","6175cb40eae100ca7ae1e7725ab065fc"],["D:/Blog_my/blog/public/article/c386a086.html","c48ec014e859757bedaccfd69f00f035"],["D:/Blog_my/blog/public/article/e419ec53.html","6b2532ab3c22f5ea824511ae1e956da4"],["D:/Blog_my/blog/public/categories/Android/index.html","a2330b059ce69c666e034eab5992b607"],["D:/Blog_my/blog/public/categories/index.html","c353d3de5c34c20cf8856ec3567695e6"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","f33dec0848c2cd4d3d7345f7f34b6db8"],["D:/Blog_my/blog/public/categories/后端云/index.html","b6b7c2f121b7aedc72d0482d341cfec5"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","af56ed1e440c86a69b28d6041f752594"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","d5077761bbd3f0f318d70dfeb0b43279"],["D:/Blog_my/blog/public/categories/百度云/index.html","6263b410e486a8a5e8f5f349dff1eb53"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","91f1b9780affe8307f829a077b2b2fec"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","125e81c10b84500ffdd5b3f55e301434"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","91a588e0fb19fdd8211b58d1295f6871"],["D:/Blog_my/blog/public/music/index.html","37edf4779b3476daad8dfbcd33c0cc43"],["D:/Blog_my/blog/public/page/2/index.html","1b41603dd95625e6fc93e2d84430356b"],["D:/Blog_my/blog/public/page/3/index.html","e4b9efd37b113eeb96f34e7653eee386"],["D:/Blog_my/blog/public/tags/Android/index.html","8aab3c0ee6a344701c6aff78ff2840e5"],["D:/Blog_my/blog/public/tags/bmob/index.html","81a7f6b4db9fa5f10c52bd7b980803f5"],["D:/Blog_my/blog/public/tags/coding/index.html","8fbe19222f6188605ca256159aa5cde2"],["D:/Blog_my/blog/public/tags/github/index.html","74951b0c3534fdfde3f046da06aeac61"],["D:/Blog_my/blog/public/tags/hexo/index.html","b15f642c35f7161322c7eb185cc2e17a"],["D:/Blog_my/blog/public/tags/index.html","c25d45b93174932ff599fc5a23254351"],["D:/Blog_my/blog/public/tags/leetcode/index.html","17b7f9e7fe7d8d0ed4ce539e9fcfce84"],["D:/Blog_my/blog/public/tags/情感分析/index.html","ae4e39d107a36a6ba3c1d47066fc7c81"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","3f8d2a7465c524179e26e670cc0ff7b3"],["D:/Blog_my/blog/public/tags/登录注册/index.html","9b17df30ecfcb1591dbcef17f41a3ae2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","67889a29bb101cd2b799ca494acad6bf"],["D:/Blog_my/blog/public/tags/笔记/index.html","fac96c94fc17d20527ac8f77ee128cf6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","1587ddbdc36b27ca66f7a6c44a4088dd"]];
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







