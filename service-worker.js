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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","99c9110f3893b90d45454002eba9b4d4"],["D:/Blog_my/blog/public/Gallery/comic/index.html","c7cb637ac8b382bf5a592a7594305da9"],["D:/Blog_my/blog/public/Gallery/index.html","561d03d37cba3a402fcf5c5b60f8a3f7"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","d88b36ee118c935e067cda422c78e58f"],["D:/Blog_my/blog/public/about/index.html","7c047d7dd6859ee485539292fd7118a3"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ed4e271fa6e7b7dfe671920d0e370d49"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","5b48ef4e12cf0c0bab2dd4ca0a121c20"],["D:/Blog_my/blog/public/archives/2020/08/index.html","d13fb85c5b5f6952caab9c0ac5147165"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","04c9091afbd078e0fdb006fd9c478744"],["D:/Blog_my/blog/public/archives/2020/09/index.html","16179c2447ed49e7c953968d05727562"],["D:/Blog_my/blog/public/archives/2020/10/index.html","af61b913ede3703e9459f6f87079fc74"],["D:/Blog_my/blog/public/archives/2020/index.html","8337e8b5c866e265a4d8c3cdd59bb103"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","4c1cf7ba88426e264bd3ea8ac80f8797"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","8f43d7e78ff9f1bdddeab5bebe25b236"],["D:/Blog_my/blog/public/archives/index.html","c8b527351b68b637dddcd76149a3a997"],["D:/Blog_my/blog/public/archives/page/2/index.html","9e46d8692f14102dc6cc0c0c64f389df"],["D:/Blog_my/blog/public/archives/page/3/index.html","dc797ad7a84bb9075b56c89c653841d2"],["D:/Blog_my/blog/public/article/1811f8b8.html","f42b720e28cf4ac443a1081b065a29c3"],["D:/Blog_my/blog/public/article/18e57658.html","75a6b3d721e0c665d27f254e2ee8a11c"],["D:/Blog_my/blog/public/article/1e64d194.html","b4b56a438f5f9a7b5e54ff8653dfbcc5"],["D:/Blog_my/blog/public/article/21f50898.html","fffaa42ca8392faad48657fcff949d5c"],["D:/Blog_my/blog/public/article/234762cd.html","a86303ad65315172564f9f3bdb9812f9"],["D:/Blog_my/blog/public/article/2b97b46c.html","71bfaa4822a071a4529cafa06d930169"],["D:/Blog_my/blog/public/article/358ad26.html","ffd69eeba81338bb34d24823f6efe11c"],["D:/Blog_my/blog/public/article/4de36022.html","0b61cedb00f7ee0e04188a78aed18c5e"],["D:/Blog_my/blog/public/article/541a8071.html","4783f154fcef699fa2c8622232d553ec"],["D:/Blog_my/blog/public/article/54412d2c.html","605b2d925b68ea46033c3a6578d133d3"],["D:/Blog_my/blog/public/article/5c1827a.html","7bf694c907dda9d06ddc1339842f50c7"],["D:/Blog_my/blog/public/article/5d6f1d17.html","14b1b3cb4eda6e0fb5d330e121f522e8"],["D:/Blog_my/blog/public/article/5dcc92c.html","2edea91b542fa38685d169f52da2398a"],["D:/Blog_my/blog/public/article/67da7762.html","ff133e1e0078580cbc495aa685c17ffd"],["D:/Blog_my/blog/public/article/683f20fa.html","a8db5e9ac4e913b1dcfa61cf5ecd2f34"],["D:/Blog_my/blog/public/article/76783ca1.html","a960dbdee8c21f90d7f68d801595c647"],["D:/Blog_my/blog/public/article/7758c0ce.html","73074ac8783e4d1ee3599543c94a43c9"],["D:/Blog_my/blog/public/article/7a56c169.html","cf6aab0990ca6cb4055cfef84efdf126"],["D:/Blog_my/blog/public/article/7d561955.html","6f88f66e998155979b0117b2b9246a61"],["D:/Blog_my/blog/public/article/a0595b99.html","601ace345a8daecee6b0a59d0ab9bdb6"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","24357cf3f38a0ae05d0001d9b9abeec1"],["D:/Blog_my/blog/public/article/c386a086.html","83ef8d462d33f48c1e77866862e2c807"],["D:/Blog_my/blog/public/article/d080f90f.html","8a5ba00d4bf42f57b926ff9eb3272916"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","8dc21b68a200e64d4158e870f257ce9b"],["D:/Blog_my/blog/public/article/e21e4e82.html","f4df78e1011e5672589abaa8bcfe5079"],["D:/Blog_my/blog/public/article/e419ec53.html","f0b939cfa890e3f2c65162291c597748"],["D:/Blog_my/blog/public/article/e4efebfa.html","3d41fee315cf10eb9cb5b8e9eefa89f8"],["D:/Blog_my/blog/public/article/eb0fc959.html","65575d16b4c76e6dd032c5f5ef753d74"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","da0ce80894c15075f0be81ce4a326715"],["D:/Blog_my/blog/public/categories/Android/index.html","7f61a2349a62e914d32f027b7e22a7ad"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","afecb87507f02bfee350c94f1be508ad"],["D:/Blog_my/blog/public/categories/index.html","594206f63b559fbfd79fdb08feddd288"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","2f773fc6194030d7df38458ed1c08326"],["D:/Blog_my/blog/public/categories/后端云/index.html","574c46f684bcd81cc260d07749915ed1"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","1bb152eb956df78440291360a45e5b8c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","3a336d8b2b5cc2483752ad6edb92465a"],["D:/Blog_my/blog/public/categories/百度云/index.html","12cbba024c72f32121450c7ad581ab92"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","3afa2f1cbc635263343d032041eed13d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","4f1df373e99cc6954adf0fa119e3841b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","b98455372f749942619ced7834684df8"],["D:/Blog_my/blog/public/music/index.html","190bb694b9661f25875c64baa2e6f803"],["D:/Blog_my/blog/public/page/2/index.html","0a6cc32941809f3628a358523610ff9c"],["D:/Blog_my/blog/public/page/3/index.html","cc7fa66f79d8b0334b7b793575384e98"],["D:/Blog_my/blog/public/page/4/index.html","a2a1acab7dc702f9bea694964cdf8233"],["D:/Blog_my/blog/public/tags/Android/index.html","5021ec3ad4adb9037ec87f1615dd022a"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","22bddbd823e31986fc836ae32196093f"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","fa5af9099a678e16d253c0daf2af3f08"],["D:/Blog_my/blog/public/tags/bmob/index.html","ff1c6dff230f7328406114f5dd4b1321"],["D:/Blog_my/blog/public/tags/coding/index.html","7e5a1a0a7f9ab5531858e8cd31c6cdac"],["D:/Blog_my/blog/public/tags/github/index.html","61858dddcdf1772bba291c2a587ed122"],["D:/Blog_my/blog/public/tags/hexo/index.html","1f30fb9e3441e7642028fd3878119555"],["D:/Blog_my/blog/public/tags/index.html","71430255f1bd7abd710da37c49b5ac06"],["D:/Blog_my/blog/public/tags/leetcode/index.html","2502567b0c6c63f394ec7e420d43fc4d"],["D:/Blog_my/blog/public/tags/情感分析/index.html","c6577e315be5a9880f6b7e33c7cfb20a"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","09123b8014f1cb56c5f60c0e94f6e817"],["D:/Blog_my/blog/public/tags/登录注册/index.html","edb0c09985888a0fcb86184ecb2216e0"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","2c47c59a8611c0c9fbf0c23988909ff2"],["D:/Blog_my/blog/public/tags/笔记/index.html","13f03b73b269bbc3a123161c96dc3083"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","de15440ab108f534dbbabe48c1bb3990"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","4e4c80d4bcd54807ece52ffb239c1825"]];
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







