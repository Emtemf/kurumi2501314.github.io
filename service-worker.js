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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","f4991158fe3e09995ce40254058699cf"],["D:/Blog_my/blog/public/Gallery/comic/index.html","dbf2cbff19f67f3fa124215f8c47c371"],["D:/Blog_my/blog/public/Gallery/index.html","2afe333b3249d549db7cad6d6b9f45f4"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","e55c393d0b68efbb2c0f4b987758e3e1"],["D:/Blog_my/blog/public/about/index.html","7e5597be6eb08b767e21a65f5a194750"],["D:/Blog_my/blog/public/archives/2020/07/index.html","f6c6c554625e1867e142d42be86a728c"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","95e5aedbec7b661d344e3943afc91756"],["D:/Blog_my/blog/public/archives/2020/08/index.html","633f74b220de8e37bb0bcedb0b4f78f1"],["D:/Blog_my/blog/public/archives/2020/index.html","5525718a1b819148b06d5b8e56685f9a"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","5c6b9a5057a5b458cc1444af11ea867c"],["D:/Blog_my/blog/public/archives/index.html","54266624534a47290802badd8d27816e"],["D:/Blog_my/blog/public/archives/page/2/index.html","daa0ba00b0cd8fdfc212664446855863"],["D:/Blog_my/blog/public/article/18e57658.html","91a56b33d2f4f267c9bca5d8ad8e7df0"],["D:/Blog_my/blog/public/article/1e64d194.html","0642ec53ee0ea3ff7fa1758ed4b430c1"],["D:/Blog_my/blog/public/article/21f50898.html","69ba93b5138619be14f61d1c26fbbc8d"],["D:/Blog_my/blog/public/article/234762cd.html","0c6db037cf5b2d47de8ab164fc62faac"],["D:/Blog_my/blog/public/article/2b97b46c.html","8da6b7ec58c7d705cbbb93846c6cfee3"],["D:/Blog_my/blog/public/article/358ad26.html","9cb2abdbb7fee8c4d76058f877c9cd38"],["D:/Blog_my/blog/public/article/541a8071.html","15a08136ca188d2786d041f495142f40"],["D:/Blog_my/blog/public/article/5c1827a.html","ac5a184475fbb9be14f674f3c3bd6ac1"],["D:/Blog_my/blog/public/article/5d6f1d17.html","122865b723b4e07ab4aca55ad24ed489"],["D:/Blog_my/blog/public/article/5dcc92c.html","c08f23f17890e01e02f82f5b6c638dfd"],["D:/Blog_my/blog/public/article/67da7762.html","20da8b1b2ec63360ccdc4c75ddfd88ba"],["D:/Blog_my/blog/public/article/683f20fa.html","2fc5c1da1608463412d3b5026e268ec9"],["D:/Blog_my/blog/public/article/7758c0ce.html","a20ab62101b92fec7fede517b61444f5"],["D:/Blog_my/blog/public/article/7a56c169.html","e82c34eae24d1a65b591afa337e14ced"],["D:/Blog_my/blog/public/article/7d561955.html","e81d3033bfc206b8be1e1bda9b36cb58"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","ebfba156532ccd03baff14c19084d792"],["D:/Blog_my/blog/public/article/c386a086.html","7601a6ae35d89509accb78085cdcd04e"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","1b34c30ddda5d35545a813085b5493f7"],["D:/Blog_my/blog/public/article/e419ec53.html","c8700f5ba0f8d9ab747f4aa41744f3e0"],["D:/Blog_my/blog/public/bangumis/index.html","d83376fb93dac4a1d28a58cb380d2e2e"],["D:/Blog_my/blog/public/categories/Android/index.html","5d983a7aa6376593d7c04a62f63da41e"],["D:/Blog_my/blog/public/categories/index.html","9cbe004dac69ba64a33671d1d0acde4d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","d649cd154e2d151cf76b2f993dfda539"],["D:/Blog_my/blog/public/categories/后端云/index.html","cdbd96899ac2fa68f7bd2e7ff0cec139"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","c2afe15bac4930d2c34c8214b88facc4"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","a211cd561a6214077e44ec8cd955c162"],["D:/Blog_my/blog/public/categories/百度云/index.html","f00bd4da092c2fc1499d074d5336bd6a"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","1ec5cbd2401f6167364bd175418c8894"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","cb53de19a665dfc8ad06ec52aa5fa7a0"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","91b170b81c9183a199e92d74e726f471"],["D:/Blog_my/blog/public/music/index.html","4569370975242519c8c5d69e26eeebe1"],["D:/Blog_my/blog/public/page/2/index.html","a0106e803b7cd3d06736b360b5c7340d"],["D:/Blog_my/blog/public/page/3/index.html","1519899baffc4477924c308facc88c0c"],["D:/Blog_my/blog/public/tags/Android/index.html","aea258a47f6ebf92000223de3daaca56"],["D:/Blog_my/blog/public/tags/bmob/index.html","c7275e5370e4aae68c85713db41b0806"],["D:/Blog_my/blog/public/tags/coding/index.html","b08616373bcee3fdb972fb94bcb224c3"],["D:/Blog_my/blog/public/tags/github/index.html","94e6af7a9d74e86fc23932c00a930dee"],["D:/Blog_my/blog/public/tags/hexo/index.html","18917eb83ba26b520e832bae60a94840"],["D:/Blog_my/blog/public/tags/index.html","196444e66e2f044e54cfeb429efaaeb2"],["D:/Blog_my/blog/public/tags/leetcode/index.html","cfe9cf04e197745ec48bea85c99b385d"],["D:/Blog_my/blog/public/tags/情感分析/index.html","60a328f9d3b380dd18f4ce9daf323589"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0764711ca95310b9c5015a75be492a72"],["D:/Blog_my/blog/public/tags/登录注册/index.html","c83c62c26e9215f169c0f3a7cec89633"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","cab3e44bcd7619d315e407bf92fac22e"],["D:/Blog_my/blog/public/tags/笔记/index.html","bc5d06c43fe47a2d30f90d5b4abe5a72"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","33a922855c477555564f50549382b027"]];
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







