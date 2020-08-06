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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","420ac150eec883f4c2729bd1623c9587"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3673eaccd74e91051bbbe39505e0d2ef"],["D:/Blog_my/blog/public/Gallery/index.html","c5fe2dbdee6a74894a18c90867e62a2c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2f44b4451ea2b0b73bfc37bea36b0bfc"],["D:/Blog_my/blog/public/about/index.html","57b8cfab096449aec0e11144a38f536b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","b0aa1232402c35a64805765922013213"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","5d572a2475a0541f09ad4481e8e41f9f"],["D:/Blog_my/blog/public/archives/2020/08/index.html","61f5a71748f101957974cd03d2f03e60"],["D:/Blog_my/blog/public/archives/2020/index.html","b056e95b8d5836429a2eb5d6b0c3f190"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e4e76202abf4c97b56c8c12be426ee33"],["D:/Blog_my/blog/public/archives/index.html","ce4405f7a9b92ab70cdd37b443dab90a"],["D:/Blog_my/blog/public/archives/page/2/index.html","8d790ce79c6a0869d03405601f91b786"],["D:/Blog_my/blog/public/article/18e57658.html","8fa62e1bd42a0dd7b603834e36d72a7b"],["D:/Blog_my/blog/public/article/1e64d194.html","62c1f771d5ea629d12f2d1a0aaa76fe8"],["D:/Blog_my/blog/public/article/21f50898.html","9853dc9bfac913c67a02ead0c61383d2"],["D:/Blog_my/blog/public/article/234762cd.html","5d66d09f86d5279e949fb6b9cea2c5e7"],["D:/Blog_my/blog/public/article/2b97b46c.html","74ccb454b47e83749ce6678890e0c7cc"],["D:/Blog_my/blog/public/article/358ad26.html","4748a0df11013a2f04d5af9b9493d695"],["D:/Blog_my/blog/public/article/541a8071.html","9a6be5efbdac7692b371034e97dbc5d5"],["D:/Blog_my/blog/public/article/5c1827a.html","3bad2d52a77c81ec886b959539c34e13"],["D:/Blog_my/blog/public/article/5d6f1d17.html","6d506c3a69eb59d0b070ebccc7f14a5a"],["D:/Blog_my/blog/public/article/5dcc92c.html","b0b670971092df6cb4e4cc6ed4b4742e"],["D:/Blog_my/blog/public/article/67da7762.html","c28eacd561ba7a32d30193233b5c78d4"],["D:/Blog_my/blog/public/article/683f20fa.html","76fc977572a63331c65972bde6c24859"],["D:/Blog_my/blog/public/article/7758c0ce.html","d107d36e0fd61884728aaba620ea43fd"],["D:/Blog_my/blog/public/article/7a56c169.html","cc0b18fc031760d161f279e7923048b0"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","1d2c0ce0a141378f58d4edf5c0ac838c"],["D:/Blog_my/blog/public/article/c386a086.html","fc1869583121b8ab8a4fc23d77e5cc4c"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","696ef8baf3c733a256c5bec27a9233af"],["D:/Blog_my/blog/public/article/e419ec53.html","3787807c47fb64372d5877821867e8f7"],["D:/Blog_my/blog/public/bangumis/index.html","1d606cba49486e5426af0f6f4e6f86d8"],["D:/Blog_my/blog/public/categories/Android/index.html","2553121846a6774a8a4123d8838c54de"],["D:/Blog_my/blog/public/categories/index.html","9182aed5ec006068486267472530135c"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","2338690a3c0e9965f872d5b7ebfdb0e7"],["D:/Blog_my/blog/public/categories/后端云/index.html","277559e0c943dd13d536f6fce27aa9b0"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f5164d59fa1b122b334918ea6fb90628"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","5e2f0cc5c33bf236804011e77c603d16"],["D:/Blog_my/blog/public/categories/百度云/index.html","30eaead3c140106db983c599b4243944"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","2594305f1270b56df0680830747525dc"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b641dc4229b51aae6e08b0ec0e1cc4c5"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","bfbd6c857d47ad83342abd5030b17884"],["D:/Blog_my/blog/public/music/index.html","d3ca0d66407820ed8694614aed0f11c4"],["D:/Blog_my/blog/public/page/2/index.html","ddf09a26fc991888c3cb3d0abbd3a8c0"],["D:/Blog_my/blog/public/page/3/index.html","138206f3249d880aad07da44db620231"],["D:/Blog_my/blog/public/tags/Android/index.html","a6584964db8277153ec5777d218e66a0"],["D:/Blog_my/blog/public/tags/bmob/index.html","f7af14e6ee6c9db84560e96a73bb16a4"],["D:/Blog_my/blog/public/tags/coding/index.html","1e8de57ad9b3786dfd06ab5ead867846"],["D:/Blog_my/blog/public/tags/github/index.html","10e1e9a66695525b18254d5cfcc70025"],["D:/Blog_my/blog/public/tags/hexo/index.html","3a99d0c6483b00473514db6126cb72cc"],["D:/Blog_my/blog/public/tags/index.html","292489c9525518fef95d4febf68112b5"],["D:/Blog_my/blog/public/tags/leetcode/index.html","64b2d15260c4269191d9a6d2cc7bda60"],["D:/Blog_my/blog/public/tags/情感分析/index.html","fcb92c5576bd0d9fd2e25312ba76bfb0"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","e84500e0001b17fd16506791a212f344"],["D:/Blog_my/blog/public/tags/登录注册/index.html","6ad1d3656e959f043cd8feeb908618c9"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a70934d879e3109faad5b20968758be0"],["D:/Blog_my/blog/public/tags/笔记/index.html","813ddd53764575d6bb474531c208f796"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","65b0d0e9d3764bad6d81224f16f1f802"]];
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







