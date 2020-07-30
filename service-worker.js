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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7545c8a51f34c668fac6be8398214095"],["D:/Blog_my/blog/public/Gallery/comic/index.html","869b28c69900ecf9e10223728b607330"],["D:/Blog_my/blog/public/Gallery/index.html","1f23c418307f11f77c0da3d596d7a8c7"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","4f5b180ef0ad540cdcc45cecf79e39fc"],["D:/Blog_my/blog/public/about/index.html","0d57d53b58d1cf444797bfd5be59b049"],["D:/Blog_my/blog/public/archives/2020/07/index.html","2575a55d75df7db8305a26558f8a6d18"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6435a565f40a771956ebab06b9bc1898"],["D:/Blog_my/blog/public/archives/2020/index.html","5a6e8c230a2203f3fa53b2286ec8234e"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","2f0a6f037daa7ca5bc9218a4bfc59206"],["D:/Blog_my/blog/public/archives/index.html","61a7acafce3bcbbbbac1a8e1a642ee9a"],["D:/Blog_my/blog/public/archives/page/2/index.html","596ec028bcc190327bcc6b69d796b42c"],["D:/Blog_my/blog/public/article/18e57658.html","bf60b978ffc0b6fdd006c731283ae18c"],["D:/Blog_my/blog/public/article/1e64d194.html","f8ae87065d497eb89bbaade33fb67073"],["D:/Blog_my/blog/public/article/21f50898.html","0b5417f798053275b2d4fdce89cd37fd"],["D:/Blog_my/blog/public/article/234762cd.html","dc296f661c1333a62638d06e93ca3344"],["D:/Blog_my/blog/public/article/2b97b46c.html","d4d689c582fccdeef76689a9d6366566"],["D:/Blog_my/blog/public/article/358ad26.html","1c0f3b562c1625780dd3bdf804f3782c"],["D:/Blog_my/blog/public/article/541a8071.html","cb75971df24ced6bb1255c5a0d38cfb1"],["D:/Blog_my/blog/public/article/5d6f1d17.html","7eb2a378f946604e153c785918f98834"],["D:/Blog_my/blog/public/article/67da7762.html","fe9bf8a314f084417133589a87471180"],["D:/Blog_my/blog/public/article/683f20fa.html","18a6c93c0038d0beb5eb58d287e98c33"],["D:/Blog_my/blog/public/article/7758c0ce.html","e356be277fb4c09d776eb7413dbeae04"],["D:/Blog_my/blog/public/article/7a56c169.html","48229a3632bde81d156aad97cc560d20"],["D:/Blog_my/blog/public/article/c386a086.html","eefaa1cc87ce75ae216ace5130f48217"],["D:/Blog_my/blog/public/categories/Android/index.html","1efb02b6bbfbb2ff16f6b7b0e7386be1"],["D:/Blog_my/blog/public/categories/index.html","e7c79e6b825af402b7953cec902f65cf"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","503dd007231bd48b4b9761c701032395"],["D:/Blog_my/blog/public/categories/后端云/index.html","36dc1c4c51441673578e717310fb629b"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","fac0907a5f63be9ecddc28cd2edce931"],["D:/Blog_my/blog/public/categories/百度云/index.html","fae640928f95ebae445990f7e0050b10"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9749bf2febf7648ea2719a01a2d85e7b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","9f62f3975aef51331dd8f618aac64e7c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","fc90a1288cd9c1fe814591a68c95ebc4"],["D:/Blog_my/blog/public/music/index.html","9c97b0c602df3fea06f55a2b9f38d313"],["D:/Blog_my/blog/public/page/2/index.html","92332e74ba38f2fb041cf0e32f792e7a"],["D:/Blog_my/blog/public/tags/Android/index.html","f1f665f694b8e22a7ecba9b7f9b937d3"],["D:/Blog_my/blog/public/tags/bmob/index.html","ed6db49a8839ba1f2fd3508f1b2c9ae7"],["D:/Blog_my/blog/public/tags/coding/index.html","1bc7883e50e6c3f43d06e40ad6bcee67"],["D:/Blog_my/blog/public/tags/github/index.html","83c51195270ac918cb6415522eafca90"],["D:/Blog_my/blog/public/tags/hexo/index.html","025e577a699420e87a448db557149978"],["D:/Blog_my/blog/public/tags/index.html","027f212f970d82817a79f92c35aaeb41"],["D:/Blog_my/blog/public/tags/leetcode/index.html","434b9cdbc1b29689b584b4b618ecb685"],["D:/Blog_my/blog/public/tags/情感分析/index.html","30b5cecc2e6957d02cd19ff7291bc517"],["D:/Blog_my/blog/public/tags/登录注册/index.html","31f2559029a8f61a763064853904f3bc"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e9df7ae21d14a80e920727b41378c0fa"],["D:/Blog_my/blog/public/tags/笔记/index.html","97eb6ee24f969d79e9abe888531413be"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","424c12adcca9ec86c4a225576168af2e"]];
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







