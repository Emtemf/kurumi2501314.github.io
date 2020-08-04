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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","6e079e05d09fcb94cdaf952b43a96b57"],["D:/Blog_my/blog/public/Gallery/comic/index.html","ba45be43bb714adc78058254f0c3fd53"],["D:/Blog_my/blog/public/Gallery/index.html","d05f10bebd3bb5b47e5f14a53daf1978"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b003dc89d1bee2a738e173190a14ffbe"],["D:/Blog_my/blog/public/about/index.html","094b7d889162d273df65bdf9d19c66b4"],["D:/Blog_my/blog/public/archives/2020/07/index.html","d7b4a5c780c920e012ebbc5fa9468f5a"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","4a831b4359f1712de13bce67fd63f951"],["D:/Blog_my/blog/public/archives/2020/08/index.html","b48e9cb76717f1c7e9cf0fafc5f287d8"],["D:/Blog_my/blog/public/archives/2020/index.html","29d86fce4240ed90bee18056ea0a7cf7"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","dd5b9c528f10c6e8be484b479d66b3e3"],["D:/Blog_my/blog/public/archives/index.html","5367fcd6fd5bcd011c5f1d4c6c998bad"],["D:/Blog_my/blog/public/archives/page/2/index.html","4fff433ad68ddc802a86903136808f37"],["D:/Blog_my/blog/public/article/18e57658.html","e3c97bcb7afee80bd6cfea22472c9202"],["D:/Blog_my/blog/public/article/1e64d194.html","88ce854923300f48f0b3a12ab3eabf4f"],["D:/Blog_my/blog/public/article/21f50898.html","0f3ec24d4672884e13e86f4b11f71b7c"],["D:/Blog_my/blog/public/article/234762cd.html","ab2185b776da283a05c7dcfe361b4a45"],["D:/Blog_my/blog/public/article/2b97b46c.html","26fdbea304a9fff08aa85413ffd29c58"],["D:/Blog_my/blog/public/article/358ad26.html","4ffbce409297666a1191d4587692e9c1"],["D:/Blog_my/blog/public/article/541a8071.html","46c56d2dbcebc59968aed4ba8dc11829"],["D:/Blog_my/blog/public/article/5d6f1d17.html","6b3b20d1da482c3d4910a45b8c7aa89a"],["D:/Blog_my/blog/public/article/5dcc92c.html","3d654a803d541bf57b83161151de6539"],["D:/Blog_my/blog/public/article/67da7762.html","7f42e88b68b64d1327d6fb6b28e0c71d"],["D:/Blog_my/blog/public/article/683f20fa.html","df2093cb784c00bf07b1875f6b603d44"],["D:/Blog_my/blog/public/article/7758c0ce.html","c8b5d29e1e94608cda1aadb8306a8176"],["D:/Blog_my/blog/public/article/7a56c169.html","9cafd2935af496605db7b08f15c26a78"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","cef477bf00c8823f5adb8681df0d661c"],["D:/Blog_my/blog/public/article/c386a086.html","11accf4899ce3588016b66d167029dd6"],["D:/Blog_my/blog/public/article/e419ec53.html","4c87c21632294f68b475df5b561cf445"],["D:/Blog_my/blog/public/categories/Android/index.html","ddaf7fdf0da9e1f4de0dabf25c54113d"],["D:/Blog_my/blog/public/categories/index.html","c22313e03971d2d0e0fd87caad804c52"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","47bd358fe6090130718cce865fea1bdc"],["D:/Blog_my/blog/public/categories/后端云/index.html","c4c87d5125bda95a6081d12d73c7c33c"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f116a83c47b909c425ca9b824fc0f280"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","5963c2a60b07962272ea5df40ffc07f4"],["D:/Blog_my/blog/public/categories/百度云/index.html","9627d7aa2f43c7f122711d2c0dc283db"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","466f2d6c12958e992789aaf26d9fa996"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1647e98d7b061b126124635ac64fa48f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","5682e175ab575f3d4cfbaf639eccbff8"],["D:/Blog_my/blog/public/music/index.html","67c3fa8944746b3fb5b6dc2dbb5c38f5"],["D:/Blog_my/blog/public/page/2/index.html","fdaa2fe0c704d83e02e30f4368a03e4e"],["D:/Blog_my/blog/public/page/3/index.html","a0dfc7df0a58dffd9206bbad386a885b"],["D:/Blog_my/blog/public/tags/Android/index.html","16880a703e13116b9b79a598e0868d7d"],["D:/Blog_my/blog/public/tags/bmob/index.html","537f3fa5409ef6d134299de36fe59709"],["D:/Blog_my/blog/public/tags/coding/index.html","ff63bd9288ba0191b740166164342057"],["D:/Blog_my/blog/public/tags/github/index.html","c6d82c8583be8880f12faf78fb760026"],["D:/Blog_my/blog/public/tags/hexo/index.html","2c210e78efa3789433c941e93e51da65"],["D:/Blog_my/blog/public/tags/index.html","3af222042410dd62a8a5cc5ea5c43868"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0c20c761f6f1bc7b95eda0b32ff4b3ae"],["D:/Blog_my/blog/public/tags/情感分析/index.html","7d0839551e65d2c95b0b300b746f1a31"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","b07c4ae862118c1fc90a30893ea30a3f"],["D:/Blog_my/blog/public/tags/登录注册/index.html","282d1180eed8fdf63b3218426c88d1f3"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","779e30045cfecb09dd53835051e9ffc2"],["D:/Blog_my/blog/public/tags/笔记/index.html","da1875139cb1ea5ed71279e55e3dfe66"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","8e86db41995a5e77b1de4e6118c16dfb"]];
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







