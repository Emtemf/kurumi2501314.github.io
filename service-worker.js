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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","1ee1a39da2da15945235b816c464eb97"],["D:/Blog_my/blog/public/Gallery/comic/index.html","9e8fba6d0435fd7d62d297bee42270af"],["D:/Blog_my/blog/public/Gallery/index.html","a990b2e9e6068266ac7b98c1af1c3b2a"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","8b6b0fa2065c6e218e54edf5652b02c5"],["D:/Blog_my/blog/public/about/index.html","0b14b346f33c74787ef7890228b22484"],["D:/Blog_my/blog/public/archives/2020/07/index.html","56fe048828400bc83611d0659a000b6a"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","329e941493e1031e99c1a675160f5dea"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5d83598a03039e3afb353ba3080b847f"],["D:/Blog_my/blog/public/archives/2020/index.html","900ef5e55a33b930f11d22e43d78be70"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","35f54fe58584d88bd5fb4ce2e8b33585"],["D:/Blog_my/blog/public/archives/index.html","bd6f0eb38a1757fdc4dd59a76d330f05"],["D:/Blog_my/blog/public/archives/page/2/index.html","a0257101829f1f1e80737f207ab64906"],["D:/Blog_my/blog/public/article/18e57658.html","3f346b7604757cbb2d3e6f8eb36a325c"],["D:/Blog_my/blog/public/article/1e64d194.html","b92b57f87f44337e4e418d1c4f2bcdbb"],["D:/Blog_my/blog/public/article/21f50898.html","625c0616058ca24d15fd6f7509b01b62"],["D:/Blog_my/blog/public/article/234762cd.html","92a2331d382182f3948bdfe1304d622e"],["D:/Blog_my/blog/public/article/2b97b46c.html","0421095e8a81bd45b2beb067d8e2436f"],["D:/Blog_my/blog/public/article/358ad26.html","e8dd977f3053d90f1e579e965606c6e2"],["D:/Blog_my/blog/public/article/541a8071.html","f391e3a0282cd7b8aa8ea73e61f5a703"],["D:/Blog_my/blog/public/article/5d6f1d17.html","29610cefd4268ed2f00a908a96cf0816"],["D:/Blog_my/blog/public/article/5dcc92c.html","766d245c3bfcd5ec49040124d879f8d9"],["D:/Blog_my/blog/public/article/67da7762.html","d3b4eb559dfbea7b435ecc715d7d2b48"],["D:/Blog_my/blog/public/article/683f20fa.html","a129199f0f0e0fb8529677fba0b42c3d"],["D:/Blog_my/blog/public/article/7758c0ce.html","c3e2af50769e1d51a2e397791b2ef7d5"],["D:/Blog_my/blog/public/article/7a56c169.html","e945d9374593e70aa6171cca2bd89e33"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","e267c0d41e35249d67d1a85ebdfe9f54"],["D:/Blog_my/blog/public/article/c386a086.html","d635b12dad1c34e370aeeac3d05473b0"],["D:/Blog_my/blog/public/article/e419ec53.html","48f99b2ad06acd041091251d721771f7"],["D:/Blog_my/blog/public/categories/Android/index.html","8acad61e5899557fc1aa42e52730061f"],["D:/Blog_my/blog/public/categories/index.html","34d80980b6311ebf75c08b38c89e2695"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","529ded6997085eeaea65da79fb968a19"],["D:/Blog_my/blog/public/categories/后端云/index.html","606591325dfe7fe002ec4fafaccf47b2"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","1f6151e59b12653997df6e4d16f9ea59"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","9341e8380c061b2a858658ea5c5833c5"],["D:/Blog_my/blog/public/categories/百度云/index.html","6b4faa893320ed2f05065a0ccff1600e"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9381e723783a42398731c29d2828d0cd"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","e494ab2d671e32f3fb3deb1ef9fcd869"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","8d604f50b4cebd8d5efb733edac3af6c"],["D:/Blog_my/blog/public/music/index.html","afff813a31ac27d8fcfebfb400e5b7f6"],["D:/Blog_my/blog/public/page/2/index.html","43032a038b446176912dac08c7051a07"],["D:/Blog_my/blog/public/page/3/index.html","5e3f1a6670fc18335e60e1c596c62de8"],["D:/Blog_my/blog/public/tags/Android/index.html","92cd53ac5f13e39daa9f0c3147742c4d"],["D:/Blog_my/blog/public/tags/bmob/index.html","8bfa265fd7322bb13a6ce42ea07629fc"],["D:/Blog_my/blog/public/tags/coding/index.html","62b70bd8aa8374b8e9f8f62c0e5f0a70"],["D:/Blog_my/blog/public/tags/github/index.html","93694d6d5e6f8c727bd7f2b409a83b91"],["D:/Blog_my/blog/public/tags/hexo/index.html","c8e05337a16d03ae54fdf9ce60943f2c"],["D:/Blog_my/blog/public/tags/index.html","aa00debe1cda34634bfee9d1c64e8d77"],["D:/Blog_my/blog/public/tags/leetcode/index.html","882016c4ab2d8b0c3fd4258db566d6bb"],["D:/Blog_my/blog/public/tags/情感分析/index.html","1dd654a8a0e07405acaf635483d38998"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","2ee0c0715209cbe180b0a0159bc27b45"],["D:/Blog_my/blog/public/tags/登录注册/index.html","32d3aade6ec9463d3858d2cee0273c5c"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","89b10f8c899eafe0ee77f3df2d11891a"],["D:/Blog_my/blog/public/tags/笔记/index.html","6b30e57c2b2493d3481dc5a561410807"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","b11e107d532c1fd5227fb4e95eef5f9e"]];
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







