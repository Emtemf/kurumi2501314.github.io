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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","6f18f265d3ccae085b7018e3b0ded4ab"],["D:/Blog_my/blog/public/Gallery/comic/index.html","08d158ca08e5ea0c2c8d81835cc8f5e4"],["D:/Blog_my/blog/public/Gallery/index.html","55dd0eaaa1215309f65dfcb5a2914ca0"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","68c055627f3b4a2560ddd3be260d9390"],["D:/Blog_my/blog/public/about/index.html","8f34bce03c725d9e1e0b7abdb6fda50d"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1519cb0cc53eca28fce439bbd30e38ae"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","de4c7710dcd1fd2edc251457a681b959"],["D:/Blog_my/blog/public/archives/2020/08/index.html","cd5bf257fc55307fb8ba934f7d654ec9"],["D:/Blog_my/blog/public/archives/2020/index.html","7ad11c0b249b27a95e58068e433416d2"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","c2acb671159b695663cda242adc6e14e"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","bccd02ac5e3ba5532d229d2f1f871001"],["D:/Blog_my/blog/public/archives/index.html","53b54b4370e247e945f60643967f77df"],["D:/Blog_my/blog/public/archives/page/2/index.html","a06c8ea6fbcac0838aa70137ac623662"],["D:/Blog_my/blog/public/archives/page/3/index.html","f346a7a7b95f93a05ad94e54687fd0dc"],["D:/Blog_my/blog/public/article/1811f8b8.html","6a46cbc66f2d8711f9295c3d5850b006"],["D:/Blog_my/blog/public/article/18e57658.html","48f65afd09e0359730ff968fad7d0057"],["D:/Blog_my/blog/public/article/1e64d194.html","43037b9c14ece61ebdef98ba82801289"],["D:/Blog_my/blog/public/article/21f50898.html","fc30064016839d12cb9179d12c4469fc"],["D:/Blog_my/blog/public/article/234762cd.html","96023694adc31b290aff866282b57153"],["D:/Blog_my/blog/public/article/2b97b46c.html","90a11ffb51fc891108b8c18a12a15b29"],["D:/Blog_my/blog/public/article/358ad26.html","a38272c895fe0809312106e125ef2bcf"],["D:/Blog_my/blog/public/article/541a8071.html","6d6bf989b4103f722bfd0b1d18959f43"],["D:/Blog_my/blog/public/article/54412d2c.html","57ee4afec2d5a2eed72cef1d12f4f5b0"],["D:/Blog_my/blog/public/article/5c1827a.html","26f6166d650040e01a11e373641cb119"],["D:/Blog_my/blog/public/article/5d6f1d17.html","c37033e000dd04d2b3253c8fa5a382a8"],["D:/Blog_my/blog/public/article/5dcc92c.html","46c1f800a9f4d873ffb2dec215cd0996"],["D:/Blog_my/blog/public/article/67da7762.html","e2691da6eaf942c215c809ee3eabc08a"],["D:/Blog_my/blog/public/article/683f20fa.html","f1daa298a153cc33281ca810fabb0d2d"],["D:/Blog_my/blog/public/article/7758c0ce.html","859e93b0833828b15bdecb44d072bc59"],["D:/Blog_my/blog/public/article/7a56c169.html","5ba43c0f4decf1195378efff157db7c1"],["D:/Blog_my/blog/public/article/7d561955.html","2a175e8a6373691a6fe99b07cff44c1c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","e6c2a764d02d35c6900058fb3786e5b5"],["D:/Blog_my/blog/public/article/c386a086.html","0544c89ce88addb023043d483f9b80ef"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","30662495b782a8f5b43532d51b485626"],["D:/Blog_my/blog/public/article/e419ec53.html","581416f7d33f4a8e9eb334257cb62ac3"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","e9741e0858c2aac0878a13d8ea609395"],["D:/Blog_my/blog/public/categories/Android/index.html","b6a3a746ab3737a2a01cb5dc2b078a00"],["D:/Blog_my/blog/public/categories/index.html","f14a3c4f63758b6ed72cbf0038172a56"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","cd53ec7e1d0696983209a1f9613fc102"],["D:/Blog_my/blog/public/categories/后端云/index.html","2fbab1e6a66ab13c3841ab65cabee8c2"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","620da9b4d76511bdebedf94ed7caab81"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","f1b44a9873758df562815047dd82cb24"],["D:/Blog_my/blog/public/categories/百度云/index.html","62faffee89190d90bdb4b07fe6ac99cd"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","faffcf3ebdb69055d3dcb75ce20dca2e"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","618627f0a96a1f5dd8b9b91ac34bc8a7"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b4f9a52b220a8bb74b2c7d9953cab1fa"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","8366eb2efda36f231bed5248b0d1413d"],["D:/Blog_my/blog/public/music/index.html","c2d92957154a7e4efc5d78d106ab0f1d"],["D:/Blog_my/blog/public/page/2/index.html","a4b5ffa9e0ddf331838a1e8db6650ac6"],["D:/Blog_my/blog/public/page/3/index.html","c92fd0d56cb7d89b31a7428ff9926732"],["D:/Blog_my/blog/public/tags/Android/index.html","593a99eba8f07b44956261582ea3a3bc"],["D:/Blog_my/blog/public/tags/bmob/index.html","5d1d55f86ad240ca19c6e7d1ffb02ad6"],["D:/Blog_my/blog/public/tags/coding/index.html","56fbe0b6d5c3f0ad8f9314bb9d76284e"],["D:/Blog_my/blog/public/tags/github/index.html","3192c44733b37a9a8be3a404f3bbdc46"],["D:/Blog_my/blog/public/tags/hexo/index.html","66466bda3a1b2bb239043fea33abf9a3"],["D:/Blog_my/blog/public/tags/index.html","886aa891f554ad7bcf2317c9233bc24b"],["D:/Blog_my/blog/public/tags/leetcode/index.html","635b68d499710190f8b6689dde48aef2"],["D:/Blog_my/blog/public/tags/情感分析/index.html","c174fe77b03ef18ebcb300e597463e92"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","ea446154ae068a73fa72c8794d59f90d"],["D:/Blog_my/blog/public/tags/登录注册/index.html","93fd3f87507df3ff910957bf92aca2d9"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e74de6bc9132bd0d745dcbd9d6098e43"],["D:/Blog_my/blog/public/tags/笔记/index.html","ae98ae68660f2c75328fc65042fe8339"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","a7562776fdcb88a47532908ff62aa843"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","aa2c825a20a45235501c14fa798cfce9"]];
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







