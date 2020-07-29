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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","11c169834136959038fdd19fd2322e26"],["D:/Blog_my/blog/public/Gallery/comic/index.html","5a20e90bac78fccb6317ba2aaf91d07e"],["D:/Blog_my/blog/public/Gallery/index.html","6070958fcc0f541111d31b4a9d18fe56"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","8ade45368ed885e8ebd03fd8de87f86d"],["D:/Blog_my/blog/public/about/index.html","6b38fae4d33b78b8f0af6f133a3e56c0"],["D:/Blog_my/blog/public/archives/2020/07/index.html","d0b62ebc0e9c061c7c21398229bb2b14"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","295ff04fe550535c009ebd50d27f888f"],["D:/Blog_my/blog/public/archives/2020/index.html","2ce69734ceb13c33abb1bdaf1458f848"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","6bec0895aebf0327ac0484197d3fd874"],["D:/Blog_my/blog/public/archives/index.html","4971657b98b6e6a170d19349a56821a1"],["D:/Blog_my/blog/public/archives/page/2/index.html","60b2898e010207cd4dc915e82436fa6e"],["D:/Blog_my/blog/public/article/1e64d194.html","23e6c1ea35e71898dbb28a816c8db055"],["D:/Blog_my/blog/public/article/21f50898.html","d505116bbac3cfa6543e6c65b64a4c33"],["D:/Blog_my/blog/public/article/234762cd.html","0c12835c75d149edf190bbb318fa73b8"],["D:/Blog_my/blog/public/article/2b97b46c.html","6145b53551e5d8344c00ee7f9fee5a0b"],["D:/Blog_my/blog/public/article/358ad26.html","df7184b83181aedaf660aa97472580e8"],["D:/Blog_my/blog/public/article/541a8071.html","8541fda797d6a3d578157b2ed95d2d67"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a6a8d43cb2b74db708d40cdf8cba1b63"],["D:/Blog_my/blog/public/article/67da7762.html","f8ee04b7c685c5e98b601d275706bbe2"],["D:/Blog_my/blog/public/article/683f20fa.html","80f5176a8a401406fb2ed701fccf51f9"],["D:/Blog_my/blog/public/article/7758c0ce.html","759a37e0a30942e096cdfeb65e5ebb49"],["D:/Blog_my/blog/public/article/7a56c169.html","695cd1b7c23fab5f2383fa79b7035fec"],["D:/Blog_my/blog/public/article/c386a086.html","98b3005999d828c57864f8548a42f498"],["D:/Blog_my/blog/public/categories/Android/index.html","6ccd222651cfb264ab6fdb1a1122f459"],["D:/Blog_my/blog/public/categories/index.html","1aeb48e74f6a4db6f2986e6dd28e0d61"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","019ed4fd860495742a4bd515ee1aafb7"],["D:/Blog_my/blog/public/categories/后端云/index.html","1b6015a71369fa978ff97f93a7f5c07a"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0d7afa4e4334a691ef9d8511130d2d94"],["D:/Blog_my/blog/public/categories/百度云/index.html","dbdc948c196a42bee64eef8afb63051e"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9ce7d753f55f249647f868f0fec2026d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","2ddccbda354e9665fae24e3c4d39567c"],["D:/Blog_my/blog/public/css/touming.css","c733c8707336df28af63b6a9ded04a6a"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","f860cc71b4837363b1a721fb88a8f715"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b3b1d19a91adb341b9005bc1eb34ac20"],["D:/Blog_my/blog/public/music/index.html","2e09729a18b979f7bf772091d3cdea5f"],["D:/Blog_my/blog/public/page/2/index.html","981242744f9d6d5c7b4bdfca2ffd1c87"],["D:/Blog_my/blog/public/tags/Android/index.html","280a3cf8fb210f9afcd2ffe4ad254b55"],["D:/Blog_my/blog/public/tags/bmob/index.html","8f5d4e7cc06a8bc4458694204ace8b71"],["D:/Blog_my/blog/public/tags/coding/index.html","39279457b3b3699335837b7870f9cbbe"],["D:/Blog_my/blog/public/tags/github/index.html","6520a699be82285c268869c1bab34698"],["D:/Blog_my/blog/public/tags/hexo/index.html","6ef5afb92536cd5eecb08dc92f55067b"],["D:/Blog_my/blog/public/tags/index.html","9062daadc829dc7c642b4ebfbf1defc2"],["D:/Blog_my/blog/public/tags/leetcode/index.html","bcbec092282cf01b16e090af34b09bc8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","e2fc386dde2fa9c4f8608204f1809e95"],["D:/Blog_my/blog/public/tags/登录注册/index.html","78ac23000e1b6b66e2726805125b9e4c"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","285514db061c7805060c9eebdca64d52"],["D:/Blog_my/blog/public/tags/笔记/index.html","3d4b0210fc64bb171019be760591b21f"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","187958307412fe98b0ec5aafb87d51f7"]];
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







