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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","f2736a0fef9122a6e77081be233aa744"],["D:/Blog_my/blog/public/Gallery/comic/index.html","12c74c4e460ab5fb25dd32ef830680db"],["D:/Blog_my/blog/public/Gallery/index.html","45bc328d1107f5a32f71dca4a86681e6"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","08be4d670cac98fcdffdf38899309e99"],["D:/Blog_my/blog/public/about/index.html","ce231051530a68fabc6fc51006fac518"],["D:/Blog_my/blog/public/archives/2020/07/index.html","96bf58ed69ffe8e2808f919fc59797c1"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c2e4e5c764477de8ef914711b47e519c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","870620e52fc9d19ff8969f90662a930b"],["D:/Blog_my/blog/public/archives/2020/index.html","08739d311db3e6b8375ff25b2cc01f31"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","a35b6c9936b6a21bd7c50b33bf870a26"],["D:/Blog_my/blog/public/archives/index.html","ee5bd440ef2b93b19265de2de85e1494"],["D:/Blog_my/blog/public/archives/page/2/index.html","d36bc4dec27006b461b546fc9050ef83"],["D:/Blog_my/blog/public/article/18e57658.html","cd675d43a1b5e42402eb501debbbb751"],["D:/Blog_my/blog/public/article/1e64d194.html","b799d6ea8e6cc9793fc4fca18e499a31"],["D:/Blog_my/blog/public/article/21f50898.html","3a17506d5427e9c9f6fc574da6d33bcb"],["D:/Blog_my/blog/public/article/234762cd.html","3282c7428a13bbb164b8e196adf3f7a9"],["D:/Blog_my/blog/public/article/2b97b46c.html","64aa374c55198b8b55ee918a230a839c"],["D:/Blog_my/blog/public/article/358ad26.html","9d9f20ff8ec8b84db7167ce48663502c"],["D:/Blog_my/blog/public/article/541a8071.html","d7fae85cb7a2b0f6f4324de15821902f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","8beaabe670f41fc884cb84fb9f40d21b"],["D:/Blog_my/blog/public/article/5dcc92c.html","488eac5774d1c10ad551fd9048ba938a"],["D:/Blog_my/blog/public/article/67da7762.html","8aa41853dc1ff23cd28cf397397e9c7a"],["D:/Blog_my/blog/public/article/683f20fa.html","faf73f8d2c8f357d65bfd5ca37756445"],["D:/Blog_my/blog/public/article/7758c0ce.html","077edacd8e379f4676b6d5741ca8e8e9"],["D:/Blog_my/blog/public/article/7a56c169.html","412e9c3173642779a06490a07145892d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","ae86bb6c470376b7976124cc565dfe32"],["D:/Blog_my/blog/public/article/c386a086.html","6760171db0b0bc92f0ef44afccabba48"],["D:/Blog_my/blog/public/article/e419ec53.html","e0417457bd28ea043a47921b910cf50c"],["D:/Blog_my/blog/public/categories/Android/index.html","e39fab3447ead946a47e2380cb58d4e8"],["D:/Blog_my/blog/public/categories/index.html","a7baa14a4f099e7476fa835d36a158b0"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","24c5c6d479067b7b29ac8e8731eb984b"],["D:/Blog_my/blog/public/categories/后端云/index.html","726d530cc9740f16142493dc33c35582"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f323c92e8c47f5d835cf56addabe6e6c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","f8b0748c1b73c0d971e614c7db7d4de2"],["D:/Blog_my/blog/public/categories/百度云/index.html","19fcf28a4c87bbea713cd55a6b14f0a1"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","51375b86e111cc745f5a02550a99a074"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","96560bca0950e1ab9b36505a4edaf368"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","502a3388435a2ca96cbfc0f8ebcd87ee"],["D:/Blog_my/blog/public/music/index.html","9d540e9ca97801b2632b9c9aa70df0c7"],["D:/Blog_my/blog/public/page/2/index.html","d79d5cf8d081aa7e060e48bddcb8cb61"],["D:/Blog_my/blog/public/page/3/index.html","e0e5a1e033217933ae899e9544f0fb4f"],["D:/Blog_my/blog/public/tags/Android/index.html","9c2a0e1eaa2fe48674351ecf1c674e08"],["D:/Blog_my/blog/public/tags/bmob/index.html","1f7b65d57154ba688b2b705ff7af6f66"],["D:/Blog_my/blog/public/tags/coding/index.html","d8f7efb4b5518209e87ca1f7136b3ce2"],["D:/Blog_my/blog/public/tags/github/index.html","1c0a64f08cdf64ccf9a2be83ec9df68c"],["D:/Blog_my/blog/public/tags/hexo/index.html","dc90a3797dd148e8fed8ac80bb5cb9f9"],["D:/Blog_my/blog/public/tags/index.html","2a15b5380d71a0560c1c735d84354e7b"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7a17c8881921637d35de97928c7a6a51"],["D:/Blog_my/blog/public/tags/情感分析/index.html","af0a6737f6fa2ac6857d39df3a2353c8"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","d89fa088de08b97bed6e1be5caf76a00"],["D:/Blog_my/blog/public/tags/登录注册/index.html","a3d11d03273d7c5accf2cce002c72419"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","29f4c43b4db860bc9a140bfedac6e38c"],["D:/Blog_my/blog/public/tags/笔记/index.html","42d45df92c1e80582546fae80736ee56"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","85cf7ad34fd4928a1afbd992e594e3b7"]];
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







