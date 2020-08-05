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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b3b25130fc68a4db94170651b8c23c2e"],["D:/Blog_my/blog/public/Gallery/comic/index.html","bc276bf60dda9b8ec8d043afeb00dd30"],["D:/Blog_my/blog/public/Gallery/index.html","02e15379cd0f5060c4335f20715e4900"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","46b39d54702abf5a2b01a40e285e345d"],["D:/Blog_my/blog/public/about/index.html","b15913c731e6ba31fbf54c185880cde8"],["D:/Blog_my/blog/public/archives/2020/07/index.html","228bd5ebea815938e8697c1c57d527dc"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b12197b99ea90fd65abb4c44c28f36d8"],["D:/Blog_my/blog/public/archives/2020/08/index.html","c9641d3262030b2b95033c9bd574e9c9"],["D:/Blog_my/blog/public/archives/2020/index.html","46d278050bdafdf1beecd0bc41c9aafe"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","2994a1fc276ff4682009ac1d8793d3dc"],["D:/Blog_my/blog/public/archives/index.html","299713b75d70c2d1e1cbfe047cfc9fc3"],["D:/Blog_my/blog/public/archives/page/2/index.html","ce9d2385d4390b9d8611f0ae4cc72c36"],["D:/Blog_my/blog/public/article/18e57658.html","7e768e09e8802ee2209d3ea86672c28f"],["D:/Blog_my/blog/public/article/1e64d194.html","dabfdba9987c8dd9f1e9178ae2721325"],["D:/Blog_my/blog/public/article/21f50898.html","06ae64ab7b5d9c78d0514b6ee320c842"],["D:/Blog_my/blog/public/article/234762cd.html","98d093b35cd0de695c65c5efc76abcdf"],["D:/Blog_my/blog/public/article/2b97b46c.html","4cee5ce4c1993d50e91e96ca88c8357b"],["D:/Blog_my/blog/public/article/358ad26.html","d68029bcf7f395a8125cb565445c48d4"],["D:/Blog_my/blog/public/article/541a8071.html","d9bca5dbb314ccf84c16e490a1f82bc5"],["D:/Blog_my/blog/public/article/5d6f1d17.html","0c85caa10e2df8f5b5d1f4cb1e326c58"],["D:/Blog_my/blog/public/article/5dcc92c.html","c658374fc8a5a55d9e7e395dff80608f"],["D:/Blog_my/blog/public/article/67da7762.html","a4d403f57bf2ebc874d780a575f16dcb"],["D:/Blog_my/blog/public/article/683f20fa.html","fd3b80132a5ef2d94ba8b360427a16ce"],["D:/Blog_my/blog/public/article/7758c0ce.html","628d6071219a921a1f239dec0252c2de"],["D:/Blog_my/blog/public/article/7a56c169.html","c2e134d7fb5eb3df7d96dc7212b72af3"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","c95ed216c92984f500dc5fff3c4ea518"],["D:/Blog_my/blog/public/article/c386a086.html","9f123e44963588dcddb86bd3c3940c8f"],["D:/Blog_my/blog/public/article/e419ec53.html","289eed51c817de0f43d7e143d0efac39"],["D:/Blog_my/blog/public/categories/Android/index.html","b5bef786da232ef80314d6856da439ac"],["D:/Blog_my/blog/public/categories/index.html","e9e1bf0aec1fed27d7b2b1c2208ed2c5"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","0d8943f1dcd01c5fbbfda83bee120d81"],["D:/Blog_my/blog/public/categories/后端云/index.html","f8a54f20f7551a9017b17aca2c1dd8db"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","bf4901fd71cc83c7cd4bb46de555ea7a"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","d375a073389e0fd46c3d87a9fbacf66b"],["D:/Blog_my/blog/public/categories/百度云/index.html","c4fc33777508a041fc2f0bfa5663a171"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","930d34d20353c96afa5a7d43d5df8823"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","5cd2dd6ff65cf1f0f5833372fcb94bd1"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","7c43448078341a1399daa5f1cbea1f5d"],["D:/Blog_my/blog/public/music/index.html","63bf68ff58ff2716a2120d1f626618e9"],["D:/Blog_my/blog/public/page/2/index.html","41c57b1b04dbf10b97ac12d25b0109d1"],["D:/Blog_my/blog/public/page/3/index.html","e31d80d2bc8c9d92d6d248dbc63a5f74"],["D:/Blog_my/blog/public/tags/Android/index.html","693277a8e7b58e9a6a9befa11548313f"],["D:/Blog_my/blog/public/tags/bmob/index.html","8cd18e63c98749701289009896e14bd6"],["D:/Blog_my/blog/public/tags/coding/index.html","5d99a39237bd8a14a15da987004f9da7"],["D:/Blog_my/blog/public/tags/github/index.html","647f690e03ffbe6960b9fbedda4415c9"],["D:/Blog_my/blog/public/tags/hexo/index.html","f9688062a50a9ecdac11d6a866bd0978"],["D:/Blog_my/blog/public/tags/index.html","dbbba30f98a89e5747604dbc88d41cc7"],["D:/Blog_my/blog/public/tags/leetcode/index.html","9e60ad8aee10b13de3b4dc4ed0f12167"],["D:/Blog_my/blog/public/tags/情感分析/index.html","e43be614b0e972bb26029d1005d969d0"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","c950dfacab5d6a5508914fdddf025e40"],["D:/Blog_my/blog/public/tags/登录注册/index.html","932acaa3407b963cfb17ce048327567b"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","cdfd74f972cf06a0ededc43699d91c15"],["D:/Blog_my/blog/public/tags/笔记/index.html","cc2b5f283ae287bab11657480035894e"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7cb2744eb016ec47c7ac64d083bce433"]];
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







