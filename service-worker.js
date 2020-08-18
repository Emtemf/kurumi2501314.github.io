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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b2527a8935f58af9ceaabd2a4af3c17e"],["D:/Blog_my/blog/public/Gallery/comic/index.html","748281d2e4d85e8d8d851a0a134b771b"],["D:/Blog_my/blog/public/Gallery/index.html","6526c5545cb8cb6f77fc727a6bcfadc9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","bcf7c8eec2a021667760c2fe9d984d9e"],["D:/Blog_my/blog/public/about/index.html","58127a3feccf88f066c4374f7663ba2a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","68c3f82a5f556b5d1b8c4cce113d0705"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b609b1961eaf12d4ca70144bc3853254"],["D:/Blog_my/blog/public/archives/2020/08/index.html","1cb28314806cf6f4567e307114a03207"],["D:/Blog_my/blog/public/archives/2020/index.html","46844b6facb1e5a319d130b85addb76a"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","852c2aacef7715de1fbb7ea46b77af8d"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","b2b9e5d5e8b852fa6dfb4d542e220e87"],["D:/Blog_my/blog/public/archives/index.html","07d9f401dd0ba01fb786745f0c139f8f"],["D:/Blog_my/blog/public/archives/page/2/index.html","80a9ca7ccb9a310dde3fc36e92e51836"],["D:/Blog_my/blog/public/archives/page/3/index.html","dc453f338264453b4d632050abf301c4"],["D:/Blog_my/blog/public/article/1811f8b8.html","2fc236990b62d78d9fb4c00b8d7ce789"],["D:/Blog_my/blog/public/article/18e57658.html","0f2e89dbaee7dc4171d8d5833a086cee"],["D:/Blog_my/blog/public/article/1e64d194.html","bc2f1e1cc31cad912ced54e0b2a82c87"],["D:/Blog_my/blog/public/article/21f50898.html","54fd38b1d307838b98e9830ff8576e14"],["D:/Blog_my/blog/public/article/234762cd.html","c0edc80cbb3e38907fe53db89601fd45"],["D:/Blog_my/blog/public/article/2b97b46c.html","dbd16c3cb4ab451d0457ce03ccbd568d"],["D:/Blog_my/blog/public/article/358ad26.html","eb5d5462a57c8e456e5263e5b6615c99"],["D:/Blog_my/blog/public/article/541a8071.html","9854cade67c5aa6e07b069f924edf229"],["D:/Blog_my/blog/public/article/54412d2c.html","77f9104bdec24f3782dcdb020db35597"],["D:/Blog_my/blog/public/article/5c1827a.html","815c822625bf175f6c077cf97cfbdb62"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3d3ab9f5381b34c9355223e5faaba52a"],["D:/Blog_my/blog/public/article/5dcc92c.html","49cb8fa29c2c400aa922e33c085e4700"],["D:/Blog_my/blog/public/article/67da7762.html","2209a1a4bc955957d7b0a6a82a4ae661"],["D:/Blog_my/blog/public/article/683f20fa.html","7959f24e23685b8f0c0ead4bc3a94213"],["D:/Blog_my/blog/public/article/7758c0ce.html","2b5b60766041980839e0797d7c158526"],["D:/Blog_my/blog/public/article/7a56c169.html","1194fe7c920f8122b403a5456ea7df60"],["D:/Blog_my/blog/public/article/7d561955.html","10f98c4e10036e6b0fa19c4cdfcade90"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","bbed6f556cccc14c4d7bd95ba013c734"],["D:/Blog_my/blog/public/article/c386a086.html","dc315437588268d50a4adc6458853e71"],["D:/Blog_my/blog/public/article/d080f90f.html","8da6c5d3dccc6cfdbd913095f5edcf84"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","0a6db98f763267d694ac618c105b756e"],["D:/Blog_my/blog/public/article/e21e4e82.html","b0a67a4b9b7cdce2a09a9c97ca9ef8d8"],["D:/Blog_my/blog/public/article/e419ec53.html","08bdb27bbc12d32f547319a2013cbc29"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","092fe558caf5f012644ed5df33e15fc1"],["D:/Blog_my/blog/public/categories/Android/index.html","dd18a29d569e552fab6cba045557df86"],["D:/Blog_my/blog/public/categories/index.html","8348c6d82aded5f1f61bd78f4291588c"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","afcf6ea25f4f5e032904019af16a4117"],["D:/Blog_my/blog/public/categories/后端云/index.html","852d129f273aec386e9e1ef354a7b29c"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f19f76ba0f5ae6c69eb359de35ce808b"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0f30125a19c7a5d50ef20ec328aefd9f"],["D:/Blog_my/blog/public/categories/百度云/index.html","edc8138bfebef065d353b148cba0b758"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","0710217184bc00ee07ed7954851da3e6"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","5daab8bd63cb9fede331bb905cb59554"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","0e5202366b81d3bf6f4483ef60148be8"],["D:/Blog_my/blog/public/music/index.html","9dd336bb0a172478e9b3d37fedc0c382"],["D:/Blog_my/blog/public/page/2/index.html","a096e45769efaaea69ffa18197c9b49e"],["D:/Blog_my/blog/public/page/3/index.html","fd1ccba9ee9e54fb2c3d40d41a8c2811"],["D:/Blog_my/blog/public/page/4/index.html","1942e178508afa9a666bd34560068764"],["D:/Blog_my/blog/public/tags/Android/index.html","440bf534bf4a11186d2fed8c654d8cec"],["D:/Blog_my/blog/public/tags/bmob/index.html","64d36ebfa98d75b50957bb9ba3540071"],["D:/Blog_my/blog/public/tags/coding/index.html","ead1e2690158a926a0569d637e5e369c"],["D:/Blog_my/blog/public/tags/github/index.html","d5587439b9386e37d3f118726f22785a"],["D:/Blog_my/blog/public/tags/hexo/index.html","ea392506bb742d7ca8d510f9b510da5c"],["D:/Blog_my/blog/public/tags/index.html","d8363479f2fd98b4f4846c7d356414d6"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0767c6b0a330d9727be8ecd79d030d08"],["D:/Blog_my/blog/public/tags/情感分析/index.html","e212b0d850af6299a7572e8319358865"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","c00299c005c0bf0dee927eb0d30b7252"],["D:/Blog_my/blog/public/tags/登录注册/index.html","66055a6dd87de9e9e9fcf9b10140cee9"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","5ceacdee36453dc1bc4821c1fde5a6dc"],["D:/Blog_my/blog/public/tags/笔记/index.html","7570f726930bf377973d1d605671d732"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","b3bbcba070b3b4d49937cf971482cbac"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","86590504a9220d839ce19de6fb91ff22"]];
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







