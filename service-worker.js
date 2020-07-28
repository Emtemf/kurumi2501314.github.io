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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","c1b5da1be4797fcec0b661b482b5e3a1"],["D:/Blog_my/blog/public/Gallery/comic/index.html","df9dc5f9cebc539da703c540762b2a27"],["D:/Blog_my/blog/public/Gallery/index.html","51a7a9fcd5fb170cbfd49cacb6da1bdf"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","d56f2c5a4e76a558c4ed3a8520c0e458"],["D:/Blog_my/blog/public/about/index.html","1824c12a52266c008479bb7b1dec9f3f"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1ad7e65d2fd577bd4d9789d2552c31e3"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","27004497f7b3054b625a49a5634093a0"],["D:/Blog_my/blog/public/archives/2020/index.html","e3729fd960553074edc7680db19848da"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","7a52136c0a1b1290e324470fd09b1ea4"],["D:/Blog_my/blog/public/archives/index.html","b8d3d490e0998340b995c76d31163496"],["D:/Blog_my/blog/public/archives/page/2/index.html","553bfd4470acd1ad7a827f9c16842661"],["D:/Blog_my/blog/public/article/1e64d194.html","504545b28c482117a14dedd10301e746"],["D:/Blog_my/blog/public/article/234762cd.html","816f77c8831e791fa656a4611290b22e"],["D:/Blog_my/blog/public/article/2b97b46c.html","79f7ed54524b9d60c95426ccb681f431"],["D:/Blog_my/blog/public/article/358ad26.html","e149da952e4155cc4d50681a6683d378"],["D:/Blog_my/blog/public/article/541a8071.html","1da8be1ecb646fbc2d642e019cca14bd"],["D:/Blog_my/blog/public/article/5d6f1d17.html","4f1c43d068975fca1660750a7c577208"],["D:/Blog_my/blog/public/article/67da7762.html","2801042341cd336b9b82e84b6b4bfdf9"],["D:/Blog_my/blog/public/article/683f20fa.html","735fa1ec0b18278b54263818f74739dc"],["D:/Blog_my/blog/public/article/7758c0ce.html","fd5746182f4d71828ab3baf805ad5044"],["D:/Blog_my/blog/public/article/7a56c169.html","892a4e3e86aebc1285f63c61b8a892bc"],["D:/Blog_my/blog/public/article/c386a086.html","766ffcc21b3dd3cf9325e12abe3202df"],["D:/Blog_my/blog/public/categories/Android/index.html","dd047182732a8a190951d7b8af0ab054"],["D:/Blog_my/blog/public/categories/index.html","4623628c42afb4c585497dc229679024"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","5cac267443efd0c67c32fb6d86a1d893"],["D:/Blog_my/blog/public/categories/后端云/index.html","a2d321eb7064861fe78b3ba749385012"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a14663e08f2bb5dde2fade89d159261f"],["D:/Blog_my/blog/public/categories/百度云/index.html","d2b5ec3e4d2dd1add812c91df2f63ca4"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b0a39cb6744ec2bd40918c185edd7027"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","2ddccbda354e9665fae24e3c4d39567c"],["D:/Blog_my/blog/public/css/touming.css","03ba2965fc83a6a97a9466b9e2e683aa"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","2ec549fa63748a2a7b7e7475c570968b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","393f6d928063e5893741b5505839ee5a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b84eb5ffa6b3d53d3a617d63dbc0483c"],["D:/Blog_my/blog/public/music/index.html","bd29c561a35c3af1e9b1cc77510b0d0e"],["D:/Blog_my/blog/public/page/2/index.html","ba7b3859f497c44af99495c09bc91831"],["D:/Blog_my/blog/public/tags/Android/index.html","ff15f894479a7bd8c5cb408b7a091f4f"],["D:/Blog_my/blog/public/tags/bmob/index.html","1b49c45a863f014590ea5a90d6383aed"],["D:/Blog_my/blog/public/tags/coding/index.html","c115c3852f433cd87f73288ae4b1781a"],["D:/Blog_my/blog/public/tags/github/index.html","092e3b0548fb36efb759883248ecc957"],["D:/Blog_my/blog/public/tags/hexo/index.html","9dd282cd85a06d49181e64a2899d2ba0"],["D:/Blog_my/blog/public/tags/index.html","4f3b264439bd5620802ea6c8e7b83339"],["D:/Blog_my/blog/public/tags/leetcode/index.html","cc837ecdcb41dee96ecc7bfa61b25487"],["D:/Blog_my/blog/public/tags/情感分析/index.html","c0d7d3bfa3e661cbad1c36d82c1e1b0c"],["D:/Blog_my/blog/public/tags/登录注册/index.html","d9ff6695f02710ca3ed4f672d90f7c44"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","d92b834c4c015de72a68ecf703af21b4"],["D:/Blog_my/blog/public/tags/笔记/index.html","6e81a59436fc17b5911a9c44369d7afa"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","bf1ea1c4edb619343054ea511b357a8a"]];
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







