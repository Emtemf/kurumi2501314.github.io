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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","c3d4f4af5476d403f0a16239c9073d06"],["D:/Blog_my/blog/public/Gallery/comic/index.html","7a76291bc339b2bd699cb0805ceb439a"],["D:/Blog_my/blog/public/Gallery/index.html","e5bed7d9506ae375690331ac5a4388df"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","7eee4ab4323907aa3d313eb1d4a29c87"],["D:/Blog_my/blog/public/about/index.html","4b808760eba834ecac0578ddcfcde5c1"],["D:/Blog_my/blog/public/archives/2020/07/index.html","cf83114273ce191047a27ed7a2bff729"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","60c48af0d3d223f0cd66075952fd87db"],["D:/Blog_my/blog/public/archives/2020/08/index.html","72c40a1dbdfaa88497f01682a898d669"],["D:/Blog_my/blog/public/archives/2020/index.html","17f2ee42e952b2f263279acd3297b0eb"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","775d21dcd7079fa61fe25cfb906b1b9d"],["D:/Blog_my/blog/public/archives/index.html","53d4244a5ff14b6849e33a8ddd6b06f1"],["D:/Blog_my/blog/public/archives/page/2/index.html","a1223b97c6aeba7b877d23797bd22efb"],["D:/Blog_my/blog/public/article/18e57658.html","23e72175876d94b572210e2437c41581"],["D:/Blog_my/blog/public/article/1e64d194.html","46f052cc37bbcb17613f38ae77360f06"],["D:/Blog_my/blog/public/article/21f50898.html","c3815ff87ae7c19fd38ff630dc45f7b4"],["D:/Blog_my/blog/public/article/234762cd.html","b807f940f97dcaf8262881f9dc3887d0"],["D:/Blog_my/blog/public/article/2b97b46c.html","2efad274e4a79366268643421375ceb9"],["D:/Blog_my/blog/public/article/358ad26.html","3f8304dc186f653adbc2e569eb74fb56"],["D:/Blog_my/blog/public/article/541a8071.html","1a9dcd1138903c3930d05ab4aab94f6a"],["D:/Blog_my/blog/public/article/5d6f1d17.html","c21ace4b9ff73cb7b63c8ea49f66f5ac"],["D:/Blog_my/blog/public/article/5dcc92c.html","60106e077c045b39ced8dce43f56b0cd"],["D:/Blog_my/blog/public/article/67da7762.html","0abae2adba1d55d60be4a6689be78ec3"],["D:/Blog_my/blog/public/article/683f20fa.html","f7034d05a8eabc304992b94b4cf1dc51"],["D:/Blog_my/blog/public/article/7758c0ce.html","d4a5daf71be7ee29c392b2a7423ff76e"],["D:/Blog_my/blog/public/article/7a56c169.html","1c5bea139cde741f5e1cd0068f99daf6"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a566d175e301287d9ba1fef16fe9413d"],["D:/Blog_my/blog/public/article/c386a086.html","c5f0f3a0b4a1384b7110c9c0aebcdd2c"],["D:/Blog_my/blog/public/article/e419ec53.html","174ae82b11ca9de0b071a0f4e0074442"],["D:/Blog_my/blog/public/categories/Android/index.html","9425e3e70e6f79da35240d775d758d6d"],["D:/Blog_my/blog/public/categories/index.html","715e61a61005e4bc41eb999108ef7470"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","c167186415cd70283997c85845b557bf"],["D:/Blog_my/blog/public/categories/后端云/index.html","403981223d72f13e7e5768da970c6ffc"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7156a0eed6174a25c56a1df505ac5a1c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","23a50a6664a39e08f5d132b58de208cb"],["D:/Blog_my/blog/public/categories/百度云/index.html","9830be3d03deacba61aed92918804d46"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","93ff4553e835bd8f9857e2e6c59e8678"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b3b064e3c58ba3f119b1347f5bec658a"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","aabf6f5e9fcbad24de636dc1c11c7925"],["D:/Blog_my/blog/public/music/index.html","7858ca6ceb183566483d76670ed60930"],["D:/Blog_my/blog/public/page/2/index.html","ef74dccfb58c48e49e8cfc3093a46f9d"],["D:/Blog_my/blog/public/page/3/index.html","3a3d0214f882cf478b61a8fec4423eed"],["D:/Blog_my/blog/public/tags/Android/index.html","2213c6eefb6fda64baf23df7adcd0899"],["D:/Blog_my/blog/public/tags/bmob/index.html","4a205f1d600c85baac4db162b1e0de29"],["D:/Blog_my/blog/public/tags/coding/index.html","ccd510fa923022602ecf8bc4853c692f"],["D:/Blog_my/blog/public/tags/github/index.html","1c3ee8b4229b9f6253eb44b3c4159b64"],["D:/Blog_my/blog/public/tags/hexo/index.html","b64458f436d0c200cca7a425e4ecb0d1"],["D:/Blog_my/blog/public/tags/index.html","b68f85cb5604ef7ab0201267c2fbd2f9"],["D:/Blog_my/blog/public/tags/leetcode/index.html","cdeff0c40b93c5ccb5327e96e0ba91ea"],["D:/Blog_my/blog/public/tags/情感分析/index.html","07020c50981c2d08525ffca2ad79ed93"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","21743dcfc2da86c5e08dbeb6e4247506"],["D:/Blog_my/blog/public/tags/登录注册/index.html","90092ef1176585f7683a6381f453ca24"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","29064f8ec5df14dc7e14139d770efea7"],["D:/Blog_my/blog/public/tags/笔记/index.html","dca24e4ace1920ef9ff168a4611788f8"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3b65f3678e32d08cb337c720e9d8916a"]];
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







