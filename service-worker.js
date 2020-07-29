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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7efbba3285b0fd4b89a88c16c1abdf81"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3cfd37b0274b71e3f9f827f6b7c04fab"],["D:/Blog_my/blog/public/Gallery/index.html","c5d845e90979b108fac6f84f1aaa5790"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b07d06262f9ce75abaf7074aa22e1adc"],["D:/Blog_my/blog/public/about/index.html","e63e51530ed97dac4ab77e39f8d1c45f"],["D:/Blog_my/blog/public/archives/2020/07/index.html","75c6a0fd999237f492bb6e4c2493bf8d"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","a20d580e18090664a41c85d904f860d5"],["D:/Blog_my/blog/public/archives/2020/index.html","6871ea09370cebac222ce411c83bf167"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","40af2838b1d2272720aa2758adb4edf4"],["D:/Blog_my/blog/public/archives/index.html","e4dbc384c6d61fd6d046a8ee5f2ffafd"],["D:/Blog_my/blog/public/archives/page/2/index.html","f4830ef9701908bfcbd0d69bee08fbf1"],["D:/Blog_my/blog/public/article/1e64d194.html","9750b210de016997fbd4e1a5eeec27e6"],["D:/Blog_my/blog/public/article/21f50898.html","1ea16f7647f5c3003067b1d2137147af"],["D:/Blog_my/blog/public/article/234762cd.html","5913d9944fd951655ec371d105964040"],["D:/Blog_my/blog/public/article/2b97b46c.html","8c53b3e1b7621930e2fe99de00fd9f9a"],["D:/Blog_my/blog/public/article/358ad26.html","953c21d243c568d5cc4001f2f4350aaf"],["D:/Blog_my/blog/public/article/541a8071.html","5940f8a628355eca43afd71f16e8c8cc"],["D:/Blog_my/blog/public/article/5d6f1d17.html","fbb26f6bc5f6d118398bc40e393d5df9"],["D:/Blog_my/blog/public/article/67da7762.html","a1cc1211405545f530bc50e5d9f95cf5"],["D:/Blog_my/blog/public/article/683f20fa.html","bf3b13b106ef17f781722daac5f88ff1"],["D:/Blog_my/blog/public/article/7758c0ce.html","f4f11ab184418b0bede923c962fa2de6"],["D:/Blog_my/blog/public/article/7a56c169.html","a9553b510eaae0ec67b6e33ef21967b7"],["D:/Blog_my/blog/public/article/c386a086.html","8d371541728f3682238e8ab843d06bc8"],["D:/Blog_my/blog/public/categories/Android/index.html","febb858d80a42cc6e3bd05f980c9b853"],["D:/Blog_my/blog/public/categories/index.html","6db6d3bc9550ecdaca4fdda1983a9632"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","2fc8fb4f5fec9cb74cf5de09d5d00d0e"],["D:/Blog_my/blog/public/categories/后端云/index.html","9d82c94a4f1a5e503b016a642a59ceac"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","de070a7f9f789524c26be7e6f795f0dc"],["D:/Blog_my/blog/public/categories/百度云/index.html","0dab7d32c5078f5f0138ab2ac41fd0cf"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9dab13cf5c51b09f2d413d53fc77bbe8"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","2ddccbda354e9665fae24e3c4d39567c"],["D:/Blog_my/blog/public/css/touming.css","e7f4947792e82e01334d5cff8923688d"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","bbb7bf5050dc4b3da3578ed08cf848f7"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","ffffd6268e1cb279f778206e47430b52"],["D:/Blog_my/blog/public/music/index.html","20e51d2ee357e86ee22c4855795cf1cc"],["D:/Blog_my/blog/public/page/2/index.html","baf602546a94249294f49052488e1ff1"],["D:/Blog_my/blog/public/tags/Android/index.html","920654e12066d43b2bc4886ebe3c656f"],["D:/Blog_my/blog/public/tags/bmob/index.html","701f47d8883efc9157f3f7ae57548182"],["D:/Blog_my/blog/public/tags/coding/index.html","2a91d75a09bc066bc14030622cc6804e"],["D:/Blog_my/blog/public/tags/github/index.html","c040420ba3fb051ffe49c946d0cee583"],["D:/Blog_my/blog/public/tags/hexo/index.html","e77af41ae562199737475f5d1d89fb10"],["D:/Blog_my/blog/public/tags/index.html","ced49c3624c9156639554abf60f603a9"],["D:/Blog_my/blog/public/tags/leetcode/index.html","fcb0e8053681562ab428b73e915521b8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","8713e70ede292d0218c84187927f46c2"],["D:/Blog_my/blog/public/tags/登录注册/index.html","21a332b33f329306c10b0be38394d3b0"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","783499dd70425c3932cd6b3c1c51fa32"],["D:/Blog_my/blog/public/tags/笔记/index.html","60154ab87b24e9c12aba12a079982354"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7a7133026369a1f6c0bb874eba9313c1"]];
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







