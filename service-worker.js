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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","d4f267ffd85ba2a4be07df937c7e0d60"],["D:/Blog_my/blog/public/Gallery/comic/index.html","2b55ff47d71d561f58d65b1dda9f79be"],["D:/Blog_my/blog/public/Gallery/index.html","64461ffa863d2aae5f3b1bbd80b0005a"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","00774aa7cf9a4b04aaf08504a32a7bb5"],["D:/Blog_my/blog/public/about/index.html","45659dc2e2bb6f40de3562897c0e2527"],["D:/Blog_my/blog/public/archives/2020/07/index.html","fe3e85e486cf9462e54863276843c202"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","df7a0bcb5ca88330cb85463ec86bae52"],["D:/Blog_my/blog/public/archives/2020/08/index.html","a545bf53f9aa005fd73e0445c4e8110f"],["D:/Blog_my/blog/public/archives/2020/index.html","1520beff4260323f3b5dff91d1e4cfd8"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","55bacec5ede2664d651fb356ddd5f8a8"],["D:/Blog_my/blog/public/archives/index.html","f6e89be7828f411f3dc957ea56312189"],["D:/Blog_my/blog/public/archives/page/2/index.html","06473593b4412d61c8777434739b5bb9"],["D:/Blog_my/blog/public/article/18e57658.html","c653c9083e18d9c7220f2a75f11fbce6"],["D:/Blog_my/blog/public/article/1e64d194.html","77df087c7126e5b8d302d5021028fb06"],["D:/Blog_my/blog/public/article/21f50898.html","3814f597df4275350e76553a995aa8e1"],["D:/Blog_my/blog/public/article/234762cd.html","63d74cab6154e7eec224a789e32c2c87"],["D:/Blog_my/blog/public/article/2b97b46c.html","6cc4e7c6b8f6f20adf5a56416c7247c9"],["D:/Blog_my/blog/public/article/358ad26.html","f65f123c8de6e6fb32a10b88a68797bb"],["D:/Blog_my/blog/public/article/541a8071.html","c36a28a11510c45eeaa2ed63b18018c5"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a544d225c762013d1afbcac04a3108dd"],["D:/Blog_my/blog/public/article/5dcc92c.html","8cfcec8cd8ba8bc96f0cc4696a26ec6e"],["D:/Blog_my/blog/public/article/67da7762.html","dd2e4e391849049a7739d5ff0155930d"],["D:/Blog_my/blog/public/article/683f20fa.html","470073f544a4de00f8bc1ca8e4fd084e"],["D:/Blog_my/blog/public/article/7758c0ce.html","685064dc1133a9d9e6b388eecb1165e4"],["D:/Blog_my/blog/public/article/7a56c169.html","cd83e008fb8eac4235e08c9bd0c6846d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","f4359d94db2bdacbc72a83b2f4385273"],["D:/Blog_my/blog/public/article/c386a086.html","01d5597adb51baa7eb224e0de1f06394"],["D:/Blog_my/blog/public/article/e419ec53.html","1a1ef8d4b49c030abce9bcc5c0f9b726"],["D:/Blog_my/blog/public/categories/Android/index.html","9bc60a58c8086d13211aa4e09f2b8185"],["D:/Blog_my/blog/public/categories/index.html","985801fd8ecdeeb31882a90669e1a27d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","26f19bccebd2bc34ca5f6a48e923ef85"],["D:/Blog_my/blog/public/categories/后端云/index.html","025ed205aeec288f1f6ebbc50099f53f"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","49fb30a855d4cc9b93980d80e726402b"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","902ecdcde8bf10f1df5c77ec10bd9468"],["D:/Blog_my/blog/public/categories/百度云/index.html","0eaaaaaf9334e0e9ed559aba47830de3"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b452db348d1f6f00aa1080f88676583d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","aa241798e9c878fd09d1456ef67177ad"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","bbeca9c6c916e440854b650f65388505"],["D:/Blog_my/blog/public/music/index.html","1904a128d226a3671ed2b599d6a5ca9e"],["D:/Blog_my/blog/public/page/2/index.html","86c5070bc522d63fa6b806b2e2371a80"],["D:/Blog_my/blog/public/page/3/index.html","0d2e66d6efa531443600d86af2a3bdbb"],["D:/Blog_my/blog/public/tags/Android/index.html","8fc8c3b0f937eb9ae1848707bd6e7f10"],["D:/Blog_my/blog/public/tags/bmob/index.html","4961eb41d16452cf861d97ed201345a9"],["D:/Blog_my/blog/public/tags/coding/index.html","23c51a0699f4cac55742533b1696f020"],["D:/Blog_my/blog/public/tags/github/index.html","8a8be06b713f422badeb0fe763a95eb0"],["D:/Blog_my/blog/public/tags/hexo/index.html","b5b292879226029d183bb5632f849d63"],["D:/Blog_my/blog/public/tags/index.html","bfc4df21c8c2c65ec9fc04c87511acfd"],["D:/Blog_my/blog/public/tags/leetcode/index.html","3ede2ec16ef97eb8eb1e8a4d0bd5724b"],["D:/Blog_my/blog/public/tags/情感分析/index.html","20f88b103b2ea354bbc442d5a4fe23b5"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","bdd0d6242037d6741e15099439bb4de3"],["D:/Blog_my/blog/public/tags/登录注册/index.html","4a3e194a2e704d7f5b393255e35132a2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","c33ba62552239318448d809d505671eb"],["D:/Blog_my/blog/public/tags/笔记/index.html","a07b1111db6af19e9f9ee3bf2d584b36"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","877f7f2f40320b2ffc18431fb7848618"]];
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







