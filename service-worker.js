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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","91b1fe0f0610082edc92f46fdab02e0b"],["D:/Blog_my/blog/public/Gallery/comic/index.html","5b640104670133a2800bb1f670fcd8b4"],["D:/Blog_my/blog/public/Gallery/index.html","22650f34e1b0973f69aa39165e068bb9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","9264d397ad0e2e9b7f090dea08b59d1b"],["D:/Blog_my/blog/public/about/index.html","cd70c1b04d21e7d489db2f48218e709a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","f57624edf5763e913a3d52c7a1576ea8"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","0d2eb1fa901bb22c88be4c33f94869b4"],["D:/Blog_my/blog/public/archives/2020/08/index.html","68b92367bef61c225ebe56a03c4e2d6b"],["D:/Blog_my/blog/public/archives/2020/index.html","83aaf89dfc554373ad5e658fcca2fb86"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","d682d65cc90931ce63f434d38e7f1775"],["D:/Blog_my/blog/public/archives/index.html","7bfc490537925f8fddc71def617e9244"],["D:/Blog_my/blog/public/archives/page/2/index.html","a0374fc1dc7eea8f470003f9f8734244"],["D:/Blog_my/blog/public/article/18e57658.html","0f60cdc02b8a2bb392e7a1100f2a8361"],["D:/Blog_my/blog/public/article/1e64d194.html","451557eb3419f58b5f74e8ac90c2c32f"],["D:/Blog_my/blog/public/article/21f50898.html","8d348e0b01f7abbf35eb5e82d8dae4c3"],["D:/Blog_my/blog/public/article/234762cd.html","7a149fb8ffe2517a3dcb2c1aceba03bc"],["D:/Blog_my/blog/public/article/2b97b46c.html","12781d69911ff151d2179aa0e667c08a"],["D:/Blog_my/blog/public/article/358ad26.html","96ff2d7f4b624d6cc8ef20e20ac5032e"],["D:/Blog_my/blog/public/article/541a8071.html","06c1ef02428f713e4301530bf3e10e21"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3e0d4155641260c202741f396a3444cb"],["D:/Blog_my/blog/public/article/5dcc92c.html","6119e5d1aca8a725cfafe2e194fe4f25"],["D:/Blog_my/blog/public/article/67da7762.html","718b50a9b8e63bc0619fee2d42a7399d"],["D:/Blog_my/blog/public/article/683f20fa.html","03575a824d7ad8125bed39e081bfec84"],["D:/Blog_my/blog/public/article/7758c0ce.html","7faab64a6aca33b8eed1e496edba76cb"],["D:/Blog_my/blog/public/article/7a56c169.html","e8e572be25fccbebef67d820ee707f78"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","8d77e307d0d4265926bae2414096b5ae"],["D:/Blog_my/blog/public/article/c386a086.html","3fe14a54fe5cbbec6c6982b568d6853a"],["D:/Blog_my/blog/public/article/e419ec53.html","e9b18500d8de30c43fc952d32d327009"],["D:/Blog_my/blog/public/categories/Android/index.html","daa95ca82bf494e480975501fc818906"],["D:/Blog_my/blog/public/categories/index.html","a4449e51f62d54c1996bcee819468e8f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","668461654a0443aa475c0b513c21a115"],["D:/Blog_my/blog/public/categories/后端云/index.html","3bee616d7a0afbd6948dc9d00df5ca21"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","c672fe26959467210dd413fc7703631a"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","d06720b7854b96f3f4b860eb2b208981"],["D:/Blog_my/blog/public/categories/百度云/index.html","41980b2bd3eb350b7f459a507d669c49"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","55f8cd48ea28eb93c439587f6404faab"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1c4e02ae7adcf56a87024576105a822f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","9adf9c7b262d2e9aa2657fe250485c53"],["D:/Blog_my/blog/public/music/index.html","204f35e0bc44c2520f449587ee738d93"],["D:/Blog_my/blog/public/page/2/index.html","4fc3b0be1651337bb8e672efbc918fad"],["D:/Blog_my/blog/public/page/3/index.html","b4da13118a2d9094f1cfcd665069728c"],["D:/Blog_my/blog/public/tags/Android/index.html","ca30c628effd38142e7c0ab0e0790a26"],["D:/Blog_my/blog/public/tags/bmob/index.html","3c621cb795438c28234cd0394f76de17"],["D:/Blog_my/blog/public/tags/coding/index.html","7e54101a6ae3ae8949f81d900e6d46c2"],["D:/Blog_my/blog/public/tags/github/index.html","7ddb3007916e290d9074c35b5fea871e"],["D:/Blog_my/blog/public/tags/hexo/index.html","cbce3216eb5d077c2c18ab653b877e00"],["D:/Blog_my/blog/public/tags/index.html","4a9d03a075e88fe7c60992cb0079b4a3"],["D:/Blog_my/blog/public/tags/leetcode/index.html","b04c97b4c89fd91e8354e2da51e61854"],["D:/Blog_my/blog/public/tags/情感分析/index.html","75e489f5b77f054c83ba393d51e18180"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","8ce821958c315f924613c98bd3ed6680"],["D:/Blog_my/blog/public/tags/登录注册/index.html","4754f8142e5f13747682febb2f9cb5a4"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","aa9f16867b25196f54d8a3b532263eed"],["D:/Blog_my/blog/public/tags/笔记/index.html","234f4dc0afd92f261d0ae4822e83aa20"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","da230254175dacd1ae9c297c3ad308ce"]];
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







