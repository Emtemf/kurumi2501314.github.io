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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","56d35f9a0008d783b0d7911e48e08ac7"],["D:/Blog_my/blog/public/Gallery/comic/index.html","17b2c6aa3b73e2bc11d93338a8721307"],["D:/Blog_my/blog/public/Gallery/index.html","bd0c4a6d9b67db9331552a2cbb84907e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b342cb8e5dda5134f105b4eda76d64b6"],["D:/Blog_my/blog/public/about/index.html","b7d8b522b30e5824949fe3cb57069973"],["D:/Blog_my/blog/public/archives/2020/07/index.html","5677951a486accff4716f79554df1415"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","1483a110d74d8d3de0d424ddaebb584d"],["D:/Blog_my/blog/public/archives/2020/08/index.html","885d106482aa833e2daf2565c53c5c3b"],["D:/Blog_my/blog/public/archives/2020/index.html","ee2e1b3c12a810f4410e86c705b92e6d"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","54aa2a78597edb8ecd1ce94cca245cb0"],["D:/Blog_my/blog/public/archives/index.html","ff9b3122bcb4b26f879e82aed22f78a6"],["D:/Blog_my/blog/public/archives/page/2/index.html","8b3ad7a3e825df0535c5796bf8a21755"],["D:/Blog_my/blog/public/article/18e57658.html","f7369b4d8aecdaa5b49c810799d45b1f"],["D:/Blog_my/blog/public/article/1e64d194.html","954ecfed2aaf9fefd96c995fd17635c6"],["D:/Blog_my/blog/public/article/21f50898.html","e445cb07b597292de6419d90d8543a45"],["D:/Blog_my/blog/public/article/234762cd.html","2bbab6d60004f947cec24ca87d0e4b1a"],["D:/Blog_my/blog/public/article/2b97b46c.html","a3745391e1b236c5c9c0205a1bea52ec"],["D:/Blog_my/blog/public/article/358ad26.html","5896eb3d93a9581bb9f8cfed6bc69106"],["D:/Blog_my/blog/public/article/541a8071.html","964a3cfdb98982fda61c0ab5c2290d7f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","26905418dfca61ceabb6e7814ccc63e5"],["D:/Blog_my/blog/public/article/5dcc92c.html","ef80c4eb7625b83f8a889b4170e5777d"],["D:/Blog_my/blog/public/article/67da7762.html","d2e925ec2baca6fbfa600bcb8082f2b5"],["D:/Blog_my/blog/public/article/683f20fa.html","eda5f2679ddd7b5366d66aa424327185"],["D:/Blog_my/blog/public/article/7758c0ce.html","3aa08b96071b14994d1ddab0e406c300"],["D:/Blog_my/blog/public/article/7a56c169.html","c7bb8332208b73034f330c04d049ef68"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","9bd03a8aa0f0a16bd603caa1eb130752"],["D:/Blog_my/blog/public/article/c386a086.html","0c1c1498627545c6137db32145cd2a3c"],["D:/Blog_my/blog/public/article/e419ec53.html","e9295d04fdc2b3fde71defe35adc4df0"],["D:/Blog_my/blog/public/categories/Android/index.html","f344cbc0ef3cef2e14535fb7c43ef4ed"],["D:/Blog_my/blog/public/categories/index.html","2b912d9880ad9b07a17d020aace4f267"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","680a047c6cef9b10a9ebd7b4dfc8bca5"],["D:/Blog_my/blog/public/categories/后端云/index.html","a4e7b171205105b23b3ddea918ea888d"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0857ef3a99d4d48e105f0901e20e1aba"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","62ca37816fcd03a9200ff9f3a6cbda05"],["D:/Blog_my/blog/public/categories/百度云/index.html","a79a7065984bade84ab7ddc36b9c784b"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","57657528dce4afe426db6560c7532dfa"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","ce756a19b82d77839aff5fec72b26e5b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c5681516d306956c9ce58ef9da3415e3"],["D:/Blog_my/blog/public/music/index.html","35412d8ec15742f0ab0ff0abc070400b"],["D:/Blog_my/blog/public/page/2/index.html","52edaa8bd04ffd0b4d3e3d3a537f1026"],["D:/Blog_my/blog/public/page/3/index.html","a47fa24510a9e29e4c4f531577309385"],["D:/Blog_my/blog/public/tags/Android/index.html","9cbb158605d7b8013f39c5daaacf74c5"],["D:/Blog_my/blog/public/tags/bmob/index.html","29b2cb31b69720a0c8134caa44779e90"],["D:/Blog_my/blog/public/tags/coding/index.html","a27029f95fab106f7f0ea6ad863ef1c0"],["D:/Blog_my/blog/public/tags/github/index.html","54ac58a9704f88bcfc81dc7c00fc96ad"],["D:/Blog_my/blog/public/tags/hexo/index.html","2afe2d6910d17c12f972c30cde83b271"],["D:/Blog_my/blog/public/tags/index.html","37498e8e600661efd52e99275a84fabe"],["D:/Blog_my/blog/public/tags/leetcode/index.html","fb78b8f7fa218263731cb5ef93a4813a"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b7826a9d29e2b7e4a0f8de7d1e11cf1b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","006635a5c2fea83415f5e74a80147a4b"],["D:/Blog_my/blog/public/tags/登录注册/index.html","05408f5eb81a8400b361f87c2e1fea71"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e1118b6c8c06524652abdab6331e5d2d"],["D:/Blog_my/blog/public/tags/笔记/index.html","b0f5a192db414a01ae44bb1ee7ca0b19"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","8e6ba39a37b922274c0d8aea709baecf"]];
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







