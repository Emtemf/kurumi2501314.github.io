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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","d84b4a41bcc8681f342a1ff1f785dad3"],["D:/Blog_my/blog/public/Gallery/comic/index.html","84fd479c0aa65fc9e533fee2f613f8e7"],["D:/Blog_my/blog/public/Gallery/index.html","83eac7ed2f17529342a337907b3d778b"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ed1686ce282073eed1adadb5155a7e5b"],["D:/Blog_my/blog/public/about/index.html","49a4b7c63e880d74ad3399c791f184f7"],["D:/Blog_my/blog/public/archives/2020/07/index.html","fcb45015c8b53c606ed61cf4a38b1371"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","a79db86faa1c4195024e30b458d1d471"],["D:/Blog_my/blog/public/archives/2020/08/index.html","52270fa64a45b53c3dcbc61ecb936ca1"],["D:/Blog_my/blog/public/archives/2020/index.html","1cfe69d7411778ca0072efe5b534c9af"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","9de9a1cfb9fdeff260d4a3abd4170e23"],["D:/Blog_my/blog/public/archives/index.html","dfa77b7b860eaf2695284798e3cd3c07"],["D:/Blog_my/blog/public/archives/page/2/index.html","bc3e185a63d77a58c721692b2a6b1721"],["D:/Blog_my/blog/public/article/18e57658.html","01fed1dbea2fc508e99212d114b0ab78"],["D:/Blog_my/blog/public/article/1e64d194.html","70837048278928ebaac6431a289da15c"],["D:/Blog_my/blog/public/article/21f50898.html","c3ad72f5327bd09ec8d3cf46f36010b0"],["D:/Blog_my/blog/public/article/234762cd.html","891b89f3f08edc8e3f4a4e1d11b6bb70"],["D:/Blog_my/blog/public/article/2b97b46c.html","2823b5e20641c1ba23b01ab5d394b165"],["D:/Blog_my/blog/public/article/358ad26.html","dec420b27bb15908e46f7c8e99157706"],["D:/Blog_my/blog/public/article/541a8071.html","93d728c650d83b83d8beedc2b06f9a5d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","95684465e74ceb6b680ba5d5dd99e8be"],["D:/Blog_my/blog/public/article/5dcc92c.html","b5b82e5d9d50f5e20953555a759bdfdc"],["D:/Blog_my/blog/public/article/67da7762.html","32b817170e0419eead7d88e1aa5b530f"],["D:/Blog_my/blog/public/article/683f20fa.html","8927d098beb10016017e0528bc45309f"],["D:/Blog_my/blog/public/article/7758c0ce.html","2561664869e8c93613db6682e9f2f1ec"],["D:/Blog_my/blog/public/article/7a56c169.html","de506cccabf3afb2912e23233f2079f1"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","40fd9dd6e2cb42b569fdd24ff25194e0"],["D:/Blog_my/blog/public/article/c386a086.html","86b4efbe4acce4f82f09b24a1eb71da7"],["D:/Blog_my/blog/public/article/e419ec53.html","70af23583a867db2b87f57e2a70a1e10"],["D:/Blog_my/blog/public/categories/Android/index.html","882d47dcdb272c11328eb0dcd2046574"],["D:/Blog_my/blog/public/categories/index.html","1b1668ce1a986bc7da8b8bbab99fe340"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","03f7c0ed86433edfa5a65d5641119b44"],["D:/Blog_my/blog/public/categories/后端云/index.html","280762bfa38856d4da9254d7505bdca8"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","e95d5fbf9f4b4c4c89143d3d9ba08094"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","01d48df9cc82fa664e3e8093e4c1cced"],["D:/Blog_my/blog/public/categories/百度云/index.html","35aee9f28b90688878b6c1652ea20772"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","64d5228b0d528866ce135c7895d75a58"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","565465d6d0b4d1f1cfb133e894c0274a"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","473c0c600203bb940e1b914294555627"],["D:/Blog_my/blog/public/music/index.html","306e4a98569b4b308b2b5f94de9c1714"],["D:/Blog_my/blog/public/page/2/index.html","6747a6eedce1d79b2c4731a931532d94"],["D:/Blog_my/blog/public/page/3/index.html","ebcdafdfc7ca039309570768fcf2e706"],["D:/Blog_my/blog/public/tags/Android/index.html","de141cd6a014cf408cd44d373e3a4591"],["D:/Blog_my/blog/public/tags/bmob/index.html","4ffa1a9decdd42f07819c29e768aad43"],["D:/Blog_my/blog/public/tags/coding/index.html","70267a135b7b66074922cfc0328f7c40"],["D:/Blog_my/blog/public/tags/github/index.html","e06991eda58ca1b2bd904763c768c65d"],["D:/Blog_my/blog/public/tags/hexo/index.html","00d2eeccdd95d706215930903d65153c"],["D:/Blog_my/blog/public/tags/index.html","680016a90bd491a14dddabcf8d984282"],["D:/Blog_my/blog/public/tags/leetcode/index.html","92c600a021a9df81235d373c9225930f"],["D:/Blog_my/blog/public/tags/情感分析/index.html","590fd4248555afe1121c301bcbe2e845"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0d3c12196728fcfb1f695757ff987c2e"],["D:/Blog_my/blog/public/tags/登录注册/index.html","51724b761dc0c651bf7b0b4565f4f21b"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e1cb153b99b130384a013e71dd459f6f"],["D:/Blog_my/blog/public/tags/笔记/index.html","c434d604651f8def2c54d6a6a6f7c428"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","4cf273863c48b670798edf9209d09f81"]];
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







