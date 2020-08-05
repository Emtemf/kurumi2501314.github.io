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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","49aeeade785503297df5209e3b648746"],["D:/Blog_my/blog/public/Gallery/comic/index.html","de6066b2c312a41adc4fa1222edd6aee"],["D:/Blog_my/blog/public/Gallery/index.html","6b1c511f3a20899a75849f803131b5c9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","d51dee44838941dbf2e63c2d2eca4594"],["D:/Blog_my/blog/public/about/index.html","01290076ee399700035ef3be8c35acfa"],["D:/Blog_my/blog/public/archives/2020/07/index.html","f7bd4f33693fa775010ad72b48874064"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","f25019ba24f2f93fe0b01b9ab4721efb"],["D:/Blog_my/blog/public/archives/2020/08/index.html","9ce5fa162485ec4353e1c2ad1cf18b65"],["D:/Blog_my/blog/public/archives/2020/index.html","44ae657dc02fef896e247396ecabb665"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","9da05c59003a75e96ebf7237ceb89cf1"],["D:/Blog_my/blog/public/archives/index.html","43d8e7fcf65a7a6a539c55b03a5106de"],["D:/Blog_my/blog/public/archives/page/2/index.html","7fff37e49a24435a5406128b5578ac64"],["D:/Blog_my/blog/public/article/18e57658.html","99095677f78d6ab743fc35de51407f67"],["D:/Blog_my/blog/public/article/1e64d194.html","aca5f5f14a428dc8a2d35b287b6f762b"],["D:/Blog_my/blog/public/article/21f50898.html","9580f6b92187ed877c848b8e2a1bb8e0"],["D:/Blog_my/blog/public/article/234762cd.html","b657cd19edfaf0625e95b44793b315c2"],["D:/Blog_my/blog/public/article/2b97b46c.html","d2ea095b5aed0e491c26309d811e712e"],["D:/Blog_my/blog/public/article/358ad26.html","b1f4d3753e84b777e53ff68586eb75a2"],["D:/Blog_my/blog/public/article/541a8071.html","16a46802206ada846f807dd1214774c1"],["D:/Blog_my/blog/public/article/5d6f1d17.html","682a6a79a9875cc8bf49a6130b3d31a8"],["D:/Blog_my/blog/public/article/5dcc92c.html","1f1cb2bf2ff9066e2f63bc93c35d86ad"],["D:/Blog_my/blog/public/article/67da7762.html","3f09e926711d457e8ee0e7b77f1ca453"],["D:/Blog_my/blog/public/article/683f20fa.html","1912b20e11bf05c665ddc4a8c2cec75e"],["D:/Blog_my/blog/public/article/7758c0ce.html","4f1c9c38dd62deb1adc6c30fafa61210"],["D:/Blog_my/blog/public/article/7a56c169.html","77b24c5d31a0c6f4402d02a9b6988d3b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a02360919d58d93f2796eefb8cc6d070"],["D:/Blog_my/blog/public/article/c386a086.html","f49cb3c5028dfcd6e3f043accb7b1c55"],["D:/Blog_my/blog/public/article/e419ec53.html","30c3f9e8d8cda67cece4900093eaca89"],["D:/Blog_my/blog/public/categories/Android/index.html","78e85147074ae7b46811b24f25c464bd"],["D:/Blog_my/blog/public/categories/index.html","1183f84701a8f508b56be6d96f3d5902"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","6b744e9a035c3b6ecd8ff6686f7da03c"],["D:/Blog_my/blog/public/categories/后端云/index.html","ef0e8f6280963bf288c30f43b55ba83d"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","b00919fb6ecb73c74ed3dc9d9e3a09cc"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","671657e172124a9d93d9d3479fd55d58"],["D:/Blog_my/blog/public/categories/百度云/index.html","c43c65935b93d70e72755eb68c3a0683"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","19ab48fca553a5e4f0e8d710adf934f1"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","a1b681edda70e11ac58754e0fbe78edd"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c82605b57acc46e86e50e65f29679d65"],["D:/Blog_my/blog/public/music/index.html","d0ab07e47bed3a81e7d74efc3beb5c3a"],["D:/Blog_my/blog/public/page/2/index.html","ba5f9e9458ffe01847ecc824da4f41b5"],["D:/Blog_my/blog/public/page/3/index.html","6cbe6ba16f4afcf0ffba4adac9669440"],["D:/Blog_my/blog/public/tags/Android/index.html","b18e62a7fa1102a8ee167554470a6668"],["D:/Blog_my/blog/public/tags/bmob/index.html","93a73d00d7dd5bebfb1c457b8b7db4b9"],["D:/Blog_my/blog/public/tags/coding/index.html","45dd91b88055f5fe5aabee361681a7ab"],["D:/Blog_my/blog/public/tags/github/index.html","3d323d0107860bc9bf8d62b69a22e99c"],["D:/Blog_my/blog/public/tags/hexo/index.html","bede42c005e8c5cc86e52741966c26ac"],["D:/Blog_my/blog/public/tags/index.html","0c2e6db104134edc5ab6c78f0779a009"],["D:/Blog_my/blog/public/tags/leetcode/index.html","049277b31b336b2aa9015a3f81c26a51"],["D:/Blog_my/blog/public/tags/情感分析/index.html","1a7ff6acc4704e9a313fdcf3dddabe5a"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","a79620c01a6c67cefaa533c91a13f664"],["D:/Blog_my/blog/public/tags/登录注册/index.html","5a324de264a019a39599d6a25cf60478"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","5f652ddfcb5cb40d9a829f59505c7bb9"],["D:/Blog_my/blog/public/tags/笔记/index.html","7add5dccd986a62e91051ea5a486674b"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","31e79266e3e8897f46ac52f4202fe15c"]];
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







