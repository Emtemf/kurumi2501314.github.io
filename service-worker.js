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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","c7f7f023d31276e8e8d06a716c3481fb"],["D:/Blog_my/blog/public/Gallery/comic/index.html","71542c6d8ea2c9c982911b86403a7723"],["D:/Blog_my/blog/public/Gallery/index.html","5817f8d90cbbfb2e80d4c1697dbfeb15"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2be9ff71b891e48612db9376eeed5a39"],["D:/Blog_my/blog/public/about/index.html","070ec002c307d4f19ca720706f44498a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","cba1bb9435baaf56f137dafa8714d353"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","53c06eb611de2b48f1546b4b81e36114"],["D:/Blog_my/blog/public/archives/2020/08/index.html","2d5e6528409acb4637149c032621a3fa"],["D:/Blog_my/blog/public/archives/2020/index.html","fb415bdd3bb383e33fba400a1d9d3bcc"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","417edf8dc3abb789ad589b8446d750cf"],["D:/Blog_my/blog/public/archives/index.html","074af7cae06c5ea36d02aee10434785e"],["D:/Blog_my/blog/public/archives/page/2/index.html","f6b1282b4a07c44db60141d261152a4d"],["D:/Blog_my/blog/public/article/18e57658.html","90e37129742edca31e989969d6ac6e63"],["D:/Blog_my/blog/public/article/1e64d194.html","263d2d19960f21b22e5fd296be8fdace"],["D:/Blog_my/blog/public/article/21f50898.html","d2083379ee7ecbe74e68afd067b7ca8c"],["D:/Blog_my/blog/public/article/234762cd.html","dc7fa6ca2c008cceb3914f46f7752eb5"],["D:/Blog_my/blog/public/article/2b97b46c.html","471ddd178dce0fa5274be5a5b8f21c9a"],["D:/Blog_my/blog/public/article/358ad26.html","1abf2aaaa7936b244703e0f23469f3b2"],["D:/Blog_my/blog/public/article/541a8071.html","760e57efa2177995317a8141be32a819"],["D:/Blog_my/blog/public/article/5d6f1d17.html","94d9e8650ef90205d28f5ee4f94128fa"],["D:/Blog_my/blog/public/article/5dcc92c.html","01c959373f519a476ff2df1eec0ce609"],["D:/Blog_my/blog/public/article/67da7762.html","68d6201d59cb9b97a624ae99433ab874"],["D:/Blog_my/blog/public/article/683f20fa.html","32fa01c7eb62753bc21c080d882a3b63"],["D:/Blog_my/blog/public/article/7758c0ce.html","185c26113caa24889c30f3b00a16b53f"],["D:/Blog_my/blog/public/article/7a56c169.html","2eb3a367bc852ce8d9b51b47d352ed9d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","09254acbc672c505b81b84c68900d37c"],["D:/Blog_my/blog/public/article/c386a086.html","3a1a2e1864acd061648af8762677622d"],["D:/Blog_my/blog/public/article/e419ec53.html","260f72cc6d009f16e9f1d4404975fcb8"],["D:/Blog_my/blog/public/categories/Android/index.html","69e2e6a6bc8ad68a97f27baf00ec28d8"],["D:/Blog_my/blog/public/categories/index.html","7f369199e1636f64ebc7d16a2b90eefe"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","54ea8d6d1987c71e7b13d670c582ccb8"],["D:/Blog_my/blog/public/categories/后端云/index.html","8e0454eb69c163c89f28c6aa7219dc11"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","cf003522ad61b7df2a501258399f2707"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","4ad34c153e32ff67486135fa7d2e0804"],["D:/Blog_my/blog/public/categories/百度云/index.html","5d2456e0846fdf6d77219e24e7695485"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","75df9dc732bf2f3163fb15767203734f"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","ab008cf1ddc620873872212561d90e94"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","46528d3bae4cde9c05b9997047eb156f"],["D:/Blog_my/blog/public/music/index.html","ad43f3cd8e84f9d7448824c725e8eb4c"],["D:/Blog_my/blog/public/page/2/index.html","9b7ea1a018b8cc74cad3a7c84fb86f19"],["D:/Blog_my/blog/public/page/3/index.html","dfa67e811d005e83430366a5a70adcf1"],["D:/Blog_my/blog/public/tags/Android/index.html","decf72be6b3af6af74bbc6a8635c9ffe"],["D:/Blog_my/blog/public/tags/bmob/index.html","5359d82f8899cf46bb00e4ada00c5651"],["D:/Blog_my/blog/public/tags/coding/index.html","447b9c0ac92c08f9639afb5855495619"],["D:/Blog_my/blog/public/tags/github/index.html","0d4bfb4e96e227794013c0f5ce2e8379"],["D:/Blog_my/blog/public/tags/hexo/index.html","cbdee67c6f556e900a71316ba60d39c2"],["D:/Blog_my/blog/public/tags/index.html","82dfaef10d4aa31ae69b919e954a18da"],["D:/Blog_my/blog/public/tags/leetcode/index.html","742dc9ebd22d6cd97b82c029e4c767b0"],["D:/Blog_my/blog/public/tags/情感分析/index.html","24d7483cc17f0cd02d2e21a186ddfca8"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","1ca267940e5ecfa2742c9bc1c5b8d7fb"],["D:/Blog_my/blog/public/tags/登录注册/index.html","67c16eaac0731ab47fa64965c7030cbc"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","851f9f7bff96d13037244dd2d14bfc20"],["D:/Blog_my/blog/public/tags/笔记/index.html","ed5afd13b7eaf43a2fd10ca8e4fb3e77"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3ccc7b0ef970b399cff3359e38752b1e"]];
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







