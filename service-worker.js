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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","d12e0ebe9250b0e502211da5351e423f"],["D:/Blog_my/blog/public/Gallery/comic/index.html","e8ce80c945e144f23844c3cbff5c623a"],["D:/Blog_my/blog/public/Gallery/index.html","0c0f1543159df75028f761f041b0c73e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","6456457a294f994bc9506f35f060bda1"],["D:/Blog_my/blog/public/about/index.html","54f19f9ad9ef2c08c14e08acecc509e3"],["D:/Blog_my/blog/public/archives/2020/07/index.html","5ff4ee1422fa22d84660e6245a076c73"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","059b37e46963f6f442f9d9e0cec3429e"],["D:/Blog_my/blog/public/archives/2020/08/index.html","79b1053b916387ef75e55c24d9a09f1f"],["D:/Blog_my/blog/public/archives/2020/index.html","0d7565c92cfd3de65133953a7745b57d"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f0bca883ceeca0eb727d3af3ba01ab0b"],["D:/Blog_my/blog/public/archives/index.html","9551fa9ac4aff9cb761588e48b1f381c"],["D:/Blog_my/blog/public/archives/page/2/index.html","619a3bcf34fa50f33528e51ac8841a43"],["D:/Blog_my/blog/public/article/18e57658.html","3922c7da4207aa9c8f3c0066aadc1472"],["D:/Blog_my/blog/public/article/1e64d194.html","af8b494da363b1599275b2c35d8ce13a"],["D:/Blog_my/blog/public/article/21f50898.html","a9e4b7b73af36551cd1d269a5ee8f5cf"],["D:/Blog_my/blog/public/article/234762cd.html","f10c806a4c2020c59cd1e5809f6609da"],["D:/Blog_my/blog/public/article/2b97b46c.html","b90e8f0e5861f41362e1579a2f8d9d47"],["D:/Blog_my/blog/public/article/358ad26.html","c5d3060f645993de3babf2b3bad8c9d6"],["D:/Blog_my/blog/public/article/541a8071.html","a8586c0291c4346093f1d617c1d63061"],["D:/Blog_my/blog/public/article/5d6f1d17.html","6758f5223adba5d360d4980259f84006"],["D:/Blog_my/blog/public/article/5dcc92c.html","9d96eb51a6d62e4cd9e885ea94d277c9"],["D:/Blog_my/blog/public/article/67da7762.html","5b0c05b29acadf235c0de84d95041497"],["D:/Blog_my/blog/public/article/683f20fa.html","8439455e397f032ee7fb1737c2a0b819"],["D:/Blog_my/blog/public/article/7758c0ce.html","51f5e0cdb5fe6aafdf2ca8dd5cd80742"],["D:/Blog_my/blog/public/article/7a56c169.html","23bfd14b2d7905cb6bdd5a7d74370626"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","327b057017f05e117482457d03f7e9c1"],["D:/Blog_my/blog/public/article/c386a086.html","d698303a3c551638412e6f12c408ea97"],["D:/Blog_my/blog/public/article/e419ec53.html","860b138f59dfab3829d48c68e2c1080e"],["D:/Blog_my/blog/public/categories/Android/index.html","51f53fdb3ec2a9dc0b92826ffe113adb"],["D:/Blog_my/blog/public/categories/index.html","e03340cee641dafc1ccef186ca55e134"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","03267bfb885a35aa3b0c36368169bd8c"],["D:/Blog_my/blog/public/categories/后端云/index.html","3e471fbeb0e7200b590b24a761529c07"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","604629177a45f8718ec1526f165077bc"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","39da4538bcd1a9c9262689f3d312a886"],["D:/Blog_my/blog/public/categories/百度云/index.html","09d7907db47183446d3078ffcb66cf18"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","a94934fe7ad62beb680f6bdd77a1c492"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","32d5a25371fc8c1b9e107b0c3748a685"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","61cbf3370647cc869e6e02bc68916969"],["D:/Blog_my/blog/public/music/index.html","a48339ff4e6128a033bbdc5404e71dc6"],["D:/Blog_my/blog/public/page/2/index.html","16dec4393b41382f6e7928314366d34a"],["D:/Blog_my/blog/public/page/3/index.html","36660f36f46863b92a1e169b11946a3e"],["D:/Blog_my/blog/public/tags/Android/index.html","d509888b4030445ef7f6cdc5ec22464e"],["D:/Blog_my/blog/public/tags/bmob/index.html","d033386ef91f021fa3077b43458cce6d"],["D:/Blog_my/blog/public/tags/coding/index.html","070ca18a7360eeba9e2cdf0f0db681ff"],["D:/Blog_my/blog/public/tags/github/index.html","9ac360d10c1601b92427e13d68f12e79"],["D:/Blog_my/blog/public/tags/hexo/index.html","8d0a500f017e6de993cfe388cd339cbf"],["D:/Blog_my/blog/public/tags/index.html","7a7525cc2c1c4b171d5ccfe91c2099a6"],["D:/Blog_my/blog/public/tags/leetcode/index.html","fcf155de6b0e48cf31054809b97119dd"],["D:/Blog_my/blog/public/tags/情感分析/index.html","adeb71ecf3dae4b061f3afbc7f48bb06"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","4eb3a31244535ea4998e61f1ed695f3c"],["D:/Blog_my/blog/public/tags/登录注册/index.html","abe6c5c021d830cf00ce0fd7d1383dc1"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","2a3b2b39ca068ab78600e2316b089569"],["D:/Blog_my/blog/public/tags/笔记/index.html","cbd1e36540e4f61da903f71331d75aaa"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","79f5486616e242a92b19ec807d34e0fc"]];
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







