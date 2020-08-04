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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","261bcf1212a5c400b6f267594f217406"],["D:/Blog_my/blog/public/Gallery/comic/index.html","988bcb7914c31e79cce6244a8667afc1"],["D:/Blog_my/blog/public/Gallery/index.html","aaf994379355c7596c931af9b5182c41"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","73d3c810534457b2ea3bcf4d6c611aef"],["D:/Blog_my/blog/public/about/index.html","f07cff335bdd10b31635fd05c3ec2650"],["D:/Blog_my/blog/public/archives/2020/07/index.html","396b5e4615422d1d87d8deefb73666a6"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","752bdb4c7f0b8728dd48f07d7f0204ea"],["D:/Blog_my/blog/public/archives/2020/08/index.html","7ebe3bcf49e94161caf22cc0ca1166d2"],["D:/Blog_my/blog/public/archives/2020/index.html","112d03873615a62d3bdcb253a1048716"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","1816343a9ce2df86a46ca2906dab407b"],["D:/Blog_my/blog/public/archives/index.html","d5a1f8f042f5d7be1486060b9ff674ab"],["D:/Blog_my/blog/public/archives/page/2/index.html","1962d2764c19f1e5096c426250c5c786"],["D:/Blog_my/blog/public/article/18e57658.html","c89f508542ba7754a0e6900ebd963fd8"],["D:/Blog_my/blog/public/article/1e64d194.html","b8370922022bfa8c9e973cee5b903bb6"],["D:/Blog_my/blog/public/article/21f50898.html","411a41375aece384e1d8b2b12243102c"],["D:/Blog_my/blog/public/article/234762cd.html","e7455db80bc5eda1471ac66fa971eb67"],["D:/Blog_my/blog/public/article/2b97b46c.html","365350fb2174b37716bb413d3324606b"],["D:/Blog_my/blog/public/article/358ad26.html","285c33a3151fe869b00519ed9b9517c8"],["D:/Blog_my/blog/public/article/541a8071.html","ccef7fdcba8cb8fac4764ce2c55fbe6b"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3bfcb7a2dd3902cd1993a3264e403aa5"],["D:/Blog_my/blog/public/article/5dcc92c.html","59e13afe71a91963a258d8aa35858f16"],["D:/Blog_my/blog/public/article/67da7762.html","6ee5f44b80bc6bf8c6d708b33fe06aa5"],["D:/Blog_my/blog/public/article/683f20fa.html","a505a156352d91db5ea174ebbec2e5e4"],["D:/Blog_my/blog/public/article/7758c0ce.html","ff0cdac833676090d5a0b8608fc04b54"],["D:/Blog_my/blog/public/article/7a56c169.html","e945d9374593e70aa6171cca2bd89e33"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","74aab7e6aef4b99f57dce9350b6dfd6d"],["D:/Blog_my/blog/public/article/c386a086.html","7789ffcac5ccddd3ab95a843f01303aa"],["D:/Blog_my/blog/public/article/e419ec53.html","d9fa9cc9f4961cfebc5f1eddb2046f5b"],["D:/Blog_my/blog/public/categories/Android/index.html","68957ed57cc44a2c12c880b9d0bcd2d2"],["D:/Blog_my/blog/public/categories/index.html","30ecd2e92b61ace23985705e4c11008a"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","8bc94658e1f32d912fefc82f85a4d068"],["D:/Blog_my/blog/public/categories/后端云/index.html","108fb093048162576ec591fd723e4197"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","d1b867ef3057a5f98a3c8780495753e9"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","50e8ce59740080e0b8fc1e867c1e6ccb"],["D:/Blog_my/blog/public/categories/百度云/index.html","01161ce25b6956b7ef23e443f2e2d56f"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","38add2e6bd2e4a7d2732aa3ed764e192"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b1fbf7a5fb56696fae764a1be7cae1bd"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","fdc8b6dfb34ddd7204e8bd0a62a33230"],["D:/Blog_my/blog/public/music/index.html","d3e9dee8f5f020c7a5b7f07d65795058"],["D:/Blog_my/blog/public/page/2/index.html","2d335856cb97b4c465f36d5feefec31a"],["D:/Blog_my/blog/public/page/3/index.html","c3cec12acae56513899786e490ae2b3c"],["D:/Blog_my/blog/public/tags/Android/index.html","bdf1fabad018f2d25e0b2a8fadbc5e3b"],["D:/Blog_my/blog/public/tags/bmob/index.html","e94fe2699db66928294241eda37584db"],["D:/Blog_my/blog/public/tags/coding/index.html","5f63a68e858348f8a6fbbd756c4456f0"],["D:/Blog_my/blog/public/tags/github/index.html","cbc9097fe91e2e05a786ce840d203d3b"],["D:/Blog_my/blog/public/tags/hexo/index.html","0cec2441c69a0032ce8a22e07cf9413f"],["D:/Blog_my/blog/public/tags/index.html","666659c90a08d744b3a45b907ce8ff2e"],["D:/Blog_my/blog/public/tags/leetcode/index.html","49e1897da6a64d30d2655485718e1538"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b5abf44b421257deb8c3a55ccd85d4f5"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","d7dbd3dd449d72e865a67487b252eaad"],["D:/Blog_my/blog/public/tags/登录注册/index.html","1cd50df913c3158353bc231083265b57"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","96027a7b5436de89516999afd4706696"],["D:/Blog_my/blog/public/tags/笔记/index.html","9360f5dd9dc6eddecf56ce3daf37e327"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","ab52b63480fa3e0bcaeba4d154557b8f"]];
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







