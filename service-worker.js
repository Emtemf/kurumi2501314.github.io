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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","0d28c5c397ef432de2fe33daa597f80d"],["D:/Blog_my/blog/public/Gallery/comic/index.html","1d487dae6857aa380f81a4c5ddebb2d2"],["D:/Blog_my/blog/public/Gallery/index.html","e8e9d60f008314f0fe4a31527a221249"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","57d108ec30c3f06690369a417b75ccba"],["D:/Blog_my/blog/public/about/index.html","6e99595186436ed641bc017afceb3905"],["D:/Blog_my/blog/public/archives/2020/07/index.html","97e6dd236adf8c90aab88c068ecf4e54"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","2c895fa4a54b58895e23ae833db05b8f"],["D:/Blog_my/blog/public/archives/2020/08/index.html","fa1dad907987ebfb944a7a7c976b9d09"],["D:/Blog_my/blog/public/archives/2020/index.html","375765e483f62ada5609becc11ce7fd6"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f26eab4d115ea1275e621fc038d8302f"],["D:/Blog_my/blog/public/archives/index.html","ae716b61c606f25c8721f66786ca4e4e"],["D:/Blog_my/blog/public/archives/page/2/index.html","ee9bce0e6b680d7c527b6ad13eca91ae"],["D:/Blog_my/blog/public/article/18e57658.html","70c9ac4535b84a677ec3fcb2643259ca"],["D:/Blog_my/blog/public/article/1e64d194.html","fbe4f1939f0fce8e799a7964f1a8ab99"],["D:/Blog_my/blog/public/article/21f50898.html","74b111a40013dd817a52e1e30e4ad3a6"],["D:/Blog_my/blog/public/article/234762cd.html","9904d31507f1aec019de9541524eea00"],["D:/Blog_my/blog/public/article/2b97b46c.html","92b056fa9d97248d3823fe19dc2bee01"],["D:/Blog_my/blog/public/article/358ad26.html","bb7e27f4ae53c79c0f95250544f7d9a2"],["D:/Blog_my/blog/public/article/541a8071.html","905eb86a76aa2b5943065af0f3d6176a"],["D:/Blog_my/blog/public/article/5d6f1d17.html","b5ff4ffaaca0326b0046b0ae8a30ba14"],["D:/Blog_my/blog/public/article/5dcc92c.html","501b9463a0d300f6a858bd8a226105de"],["D:/Blog_my/blog/public/article/67da7762.html","9335cb07618c53d7938f274b14a0f9ec"],["D:/Blog_my/blog/public/article/683f20fa.html","cc4df3a207b265f0ab9beb789c9c469a"],["D:/Blog_my/blog/public/article/7758c0ce.html","565a6f27d0c838be839c8098d0a1b4f3"],["D:/Blog_my/blog/public/article/7a56c169.html","ba21e364d646c32117f9ea58460a2f13"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","0c2645ef9820b8716cdabfcdfb725447"],["D:/Blog_my/blog/public/article/c386a086.html","7875441912687bd591771927a3c3edc0"],["D:/Blog_my/blog/public/article/e419ec53.html","565322e10ce3a49b5df919c1d2fd16b2"],["D:/Blog_my/blog/public/categories/Android/index.html","599ebdf0ed7a2eaecabcfe3e9188fb5c"],["D:/Blog_my/blog/public/categories/index.html","57ab4ff9b40478f1d8dca912ae91a7f9"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","e3e21bb5cb399ab03983ba9d58539ba4"],["D:/Blog_my/blog/public/categories/后端云/index.html","2a3c44bfcbc0051baf532b3938993783"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","06c289a6c5ae1c1d55bb0f267bfc9843"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","5bfe26e86ff2215910e25c92f62f0329"],["D:/Blog_my/blog/public/categories/百度云/index.html","4b9b47e76700604d4eb47a84db343d10"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","7105369f52b439e799ccc9ccde0a6266"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","d28efb790e6bb7d2ccd221014b58c86c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","42a7824b2d88996fbe56fb1af152fead"],["D:/Blog_my/blog/public/music/index.html","78e87fa8815fcf2a92076e499c1839be"],["D:/Blog_my/blog/public/page/2/index.html","7861f2d1e01bb16f87d1bd041ac7b9f8"],["D:/Blog_my/blog/public/page/3/index.html","b8625995a3abf42d63cf57c8c69dc6ac"],["D:/Blog_my/blog/public/tags/Android/index.html","14de9ca39d320b00cbde2f73e7eee77a"],["D:/Blog_my/blog/public/tags/bmob/index.html","81fbe9e01a8991b3e8ba831f8fb1ef03"],["D:/Blog_my/blog/public/tags/coding/index.html","1a73f6502fa1035af718e2c590b09cfa"],["D:/Blog_my/blog/public/tags/github/index.html","f7beb1aa0363d6f190e311591193350e"],["D:/Blog_my/blog/public/tags/hexo/index.html","1a10ff279845d9c3fd86942475147cd8"],["D:/Blog_my/blog/public/tags/index.html","9d37d063ab48d8e618fd348365dd8353"],["D:/Blog_my/blog/public/tags/leetcode/index.html","74b15af5cc79ec8bcaeb72696f793239"],["D:/Blog_my/blog/public/tags/情感分析/index.html","ae6e2469dc64aaa67d7237de50874d4a"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0baf56b315dd0a10c1e7c88c0d8d0726"],["D:/Blog_my/blog/public/tags/登录注册/index.html","e2e52b0aceb644f8fcbfe63a10d81218"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","c39265ab64f0bcb855b4ddabd6715913"],["D:/Blog_my/blog/public/tags/笔记/index.html","d0465fb0d3a9a3bb115888ae954a0998"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","1b4494e698143dfcc352ca9397a57c5f"]];
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







