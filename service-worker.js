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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","c1b51c2e3345ebc297fc5297d9f5cc3d"],["D:/Blog_my/blog/public/Gallery/comic/index.html","9278532deffa2732a2850fc9ee564bd8"],["D:/Blog_my/blog/public/Gallery/index.html","f663c8622e6e70a13ca3d4ca363d914a"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2de3fd1d94804e3dc52adfe9e07eb20c"],["D:/Blog_my/blog/public/about/index.html","d112d3875b12cfd9cc82ea8008a74f1a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","330459beae9269e262ba6239086a9770"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","9f39cdc80502bedbea89c003ec259ab8"],["D:/Blog_my/blog/public/archives/2020/08/index.html","1558872db6281d8d2c4e3d77b1826467"],["D:/Blog_my/blog/public/archives/2020/index.html","d1d00410efbd3f906c6043e1cdf631a7"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ffc74014aa793aded91c875f34ac9a25"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","ff8be9e145e2117f6928b83ff6d42c8f"],["D:/Blog_my/blog/public/archives/index.html","e462887f94da38794c7b88d16aa2a600"],["D:/Blog_my/blog/public/archives/page/2/index.html","e86b85d109e76cda864947fdbbd49a16"],["D:/Blog_my/blog/public/archives/page/3/index.html","7622ee6430b92b644f6c87b9a82719c3"],["D:/Blog_my/blog/public/article/1811f8b8.html","ca42fa96b68c329eb6e4591ce17adb06"],["D:/Blog_my/blog/public/article/18e57658.html","c0664f5c60ed543e8784cd7384a05a58"],["D:/Blog_my/blog/public/article/1e64d194.html","745bec1caa5a0b88250bb9a1222c4e6e"],["D:/Blog_my/blog/public/article/21f50898.html","c05840cef20cd2ec704416fb336d2725"],["D:/Blog_my/blog/public/article/234762cd.html","4584c03c8a34a39ad3eaeedbc3b074ff"],["D:/Blog_my/blog/public/article/2b97b46c.html","276e759b0cdee0a6969a61bf9c02581f"],["D:/Blog_my/blog/public/article/358ad26.html","7eb284e68ef187bfd6f0593971dc6e51"],["D:/Blog_my/blog/public/article/541a8071.html","9c2011f601fc0d56db775f685c99ec95"],["D:/Blog_my/blog/public/article/54412d2c.html","872ad8ded011f97fb84714f507a473e3"],["D:/Blog_my/blog/public/article/5c1827a.html","99d9deb7d9a566ebd5bb74865e75baa8"],["D:/Blog_my/blog/public/article/5d6f1d17.html","7b5e0957ddeb76dccd320a0764d5cca8"],["D:/Blog_my/blog/public/article/5dcc92c.html","4c0cfb26da07798db4feade0ec8d8ca2"],["D:/Blog_my/blog/public/article/67da7762.html","23a0a771cb145114286ba186114b539e"],["D:/Blog_my/blog/public/article/683f20fa.html","db5ffa9ff41e4598d581fb60de5cfb77"],["D:/Blog_my/blog/public/article/7758c0ce.html","6557afef5965e6c61aac7997f5eed083"],["D:/Blog_my/blog/public/article/7a56c169.html","4e5656f96a2101d13b8fd4e08c7c705f"],["D:/Blog_my/blog/public/article/7d561955.html","ad2e698f6c747e735ea3fc3ac195eb02"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","91b654a2204e43ba42610192f3a0f202"],["D:/Blog_my/blog/public/article/c386a086.html","691da1d75e212c030858a4bb7f22856e"],["D:/Blog_my/blog/public/article/d080f90f.html","840688c7514376f4937df9df2bf181de"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","ffcff47d8305536cf6d43f4c668780af"],["D:/Blog_my/blog/public/article/e21e4e82.html","f2e5342268aa0791c181e2dbd77e4b8d"],["D:/Blog_my/blog/public/article/e419ec53.html","95f877d61f2ef4e837826c9cbdb76b10"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","8de48648e1e6d83b1a42634781cd0e17"],["D:/Blog_my/blog/public/categories/Android/index.html","ef5235424a45a007f21f457005a2b812"],["D:/Blog_my/blog/public/categories/index.html","be13b7a73ee7adc91c2f872b0983730d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","fad313364bb987d990672973bdf0e6f6"],["D:/Blog_my/blog/public/categories/后端云/index.html","a5340c76cc8ac60892bbf60be190f2ff"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","fba0e663cf29ce480f663eb1763ee1f8"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","13e4220714a9debb2a488759b717cffa"],["D:/Blog_my/blog/public/categories/百度云/index.html","eaa5c4f5cf4ef83244de8f18f325a1e0"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","c35e75b0dab3b18ac84121d0f427b4c5"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","7ef84b72b286eeb95b3c32dfc777dffc"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","415a5140f523890e54e6b0f1d89c2790"],["D:/Blog_my/blog/public/music/index.html","d211762c4decc0fd449b3b16869a91dd"],["D:/Blog_my/blog/public/page/2/index.html","3b5531a9594c58c333153edd31de5803"],["D:/Blog_my/blog/public/page/3/index.html","5bbccbb803b9c65cc7d932e89a4f6a44"],["D:/Blog_my/blog/public/page/4/index.html","1d49f524be996af07e1fa471fef9126e"],["D:/Blog_my/blog/public/tags/Android/index.html","5254ec725d8876339b0e430f9cece355"],["D:/Blog_my/blog/public/tags/bmob/index.html","d8e2dd18336b521f6721bbcf3544efe0"],["D:/Blog_my/blog/public/tags/coding/index.html","770962f175f87942ed1a9f193b63403d"],["D:/Blog_my/blog/public/tags/github/index.html","36662d9710e6a5fcb7615d8b8ff56cfd"],["D:/Blog_my/blog/public/tags/hexo/index.html","888d6fb58d1ea4c06159064aa1a96b66"],["D:/Blog_my/blog/public/tags/index.html","fa48348885b322aab7b27d734ae0e77a"],["D:/Blog_my/blog/public/tags/leetcode/index.html","367268be64534625e9f4b8f543deaaed"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b82f99a18ce143a7bd7d7be277fc1010"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","7d7b3e59312b57c214028e64cbe71177"],["D:/Blog_my/blog/public/tags/登录注册/index.html","3ecbd5b5ef6cd2d90b95844a38895387"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","8c89a333c15090b1b74d2fe34eafa9fd"],["D:/Blog_my/blog/public/tags/笔记/index.html","b5a7d969f64e28e413c90738b3ae6850"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","7ba790cd683c7471c0d6fe9c152c73db"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","0a03f25d4ddb0ef42b25f260977de324"]];
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







