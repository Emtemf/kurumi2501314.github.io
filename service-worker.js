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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","3896f5be7ada483a73f58b0c2b1d6b77"],["D:/Blog_my/blog/public/Gallery/comic/index.html","009ca33d19ad4dd13654c11e110b48ae"],["D:/Blog_my/blog/public/Gallery/index.html","ba310d090c1b9f2fceb21da8b5716bd9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","414766d11d2d2cc28e982e0d321fcd87"],["D:/Blog_my/blog/public/about/index.html","ba97dfb846e380dfae04f1735021112a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","298597c45d9bb341b6e1898c998e8b0d"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","52c2eb19410143da18b1da5171e2eedb"],["D:/Blog_my/blog/public/archives/2020/08/index.html","f1b23516549585ddf174eb0272368c57"],["D:/Blog_my/blog/public/archives/2020/index.html","98fc5045054c77e10a22167b172e9ee2"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","67c56e25c77653ea0f11ea0a2d77bcc2"],["D:/Blog_my/blog/public/archives/index.html","521b56d3733e35aca676c00482885da7"],["D:/Blog_my/blog/public/archives/page/2/index.html","bb7de391625d80825c7605980bdbe048"],["D:/Blog_my/blog/public/article/18e57658.html","50e732a77502daf84d325d06a84c7c65"],["D:/Blog_my/blog/public/article/1e64d194.html","ba28832f5635138eb1d868ae2225c5c1"],["D:/Blog_my/blog/public/article/21f50898.html","5d6067c6102173618fd853c90b0140d1"],["D:/Blog_my/blog/public/article/234762cd.html","3115521915c73c8f156c54e177618d01"],["D:/Blog_my/blog/public/article/2b97b46c.html","a4ef140bbd7ff2467564a02c478f668a"],["D:/Blog_my/blog/public/article/358ad26.html","0b773ba8510f5ad7962fdede2a610ad5"],["D:/Blog_my/blog/public/article/541a8071.html","ab39d348ada047f18ae11133671875cd"],["D:/Blog_my/blog/public/article/5d6f1d17.html","cd02ca2440981e19110e1854447f705e"],["D:/Blog_my/blog/public/article/5dcc92c.html","6316f3822da295c0ae0fd897f6326d2f"],["D:/Blog_my/blog/public/article/67da7762.html","d89b36730f352b06c330a1e59fe269dc"],["D:/Blog_my/blog/public/article/683f20fa.html","df196bfad72278fef35a1b20eb08c76d"],["D:/Blog_my/blog/public/article/7758c0ce.html","9bd3400300f9f1a15befdec18e64fc79"],["D:/Blog_my/blog/public/article/7a56c169.html","06a85128f35cdbacf2244537c749f42f"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","511d50e9f5887eaea632c18c09821e40"],["D:/Blog_my/blog/public/article/c386a086.html","c6a15b37598db531f57afcaf7afd99ab"],["D:/Blog_my/blog/public/categories/Android/index.html","30e80b7127b32a576acc30f869a7eeae"],["D:/Blog_my/blog/public/categories/index.html","a92e4d5a4a31fd7fd1265ce1f08273b3"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","14772c60f4abf3eea70c6218165c0d80"],["D:/Blog_my/blog/public/categories/后端云/index.html","8e8806fdbb6083797affe1c98a940d75"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","dc42448a96ede5fe3086cc15591701b1"],["D:/Blog_my/blog/public/categories/百度云/index.html","08825230a10641c719f73b6b909f1edc"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","129b3ac4615c60a5cc438a6b6bbde5e3"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","807180e3dea37538bb71f79bf7651b92"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","836f808780a4196f28ff8cc3da4f6f23"],["D:/Blog_my/blog/public/music/index.html","1a6072ddfcb849e8249601a7e7267908"],["D:/Blog_my/blog/public/page/2/index.html","5b275e65fb1dbb3c7254f9394807d3b1"],["D:/Blog_my/blog/public/page/3/index.html","9cb516367b5518cb10e7d7ef0fe368a5"],["D:/Blog_my/blog/public/tags/Android/index.html","706cb4c69b638332df014dd6d36b373e"],["D:/Blog_my/blog/public/tags/bmob/index.html","cb5fe10dee4d1213528b8b3ecebd4818"],["D:/Blog_my/blog/public/tags/coding/index.html","16a8adf2ceb265bff17a71420b2a10fb"],["D:/Blog_my/blog/public/tags/github/index.html","5e93224718dea527d600a40d51f32a86"],["D:/Blog_my/blog/public/tags/hexo/index.html","bb03b24b9700a21aa2c11ffb6d03badb"],["D:/Blog_my/blog/public/tags/index.html","ee26decea5cb14c107877da306adcb55"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7869f5a10cfb28bc839a703d90a5f37c"],["D:/Blog_my/blog/public/tags/情感分析/index.html","1effc9021da14b67ae9170be99cfb6ee"],["D:/Blog_my/blog/public/tags/登录注册/index.html","fce7ee3aa82cb484521aa21f7017fee2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","92ad919529acbc9c9d11ce0354aa5aa2"],["D:/Blog_my/blog/public/tags/笔记/index.html","20f319f2fce01dd8c5db44b7f87d0345"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","d962ddfb56ed6f7bb872344741fff72a"]];
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







