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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","f734c56c37d541d9ec53d1ead83e19c5"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3de032fd3a5d296d7ca9b6d2900b9baa"],["D:/Blog_my/blog/public/Gallery/index.html","b6a70f44889f098f70d7819d2172fce6"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","be78515d9b8f0fb6ad73790b5a53bbb7"],["D:/Blog_my/blog/public/about/index.html","607b0593d8dd0831a2e7b07b6ec35690"],["D:/Blog_my/blog/public/archives/2020/07/index.html","2f1d05cdd32e7c36f6fc7f9722059ded"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6eadd4e4ef30f6758e50622dc8fdbf8a"],["D:/Blog_my/blog/public/archives/2020/08/index.html","8a05bb5af0027495d59d259dc875af86"],["D:/Blog_my/blog/public/archives/2020/index.html","c3f9394b088900f46828e15f8e11ea65"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","c4fdc78b4e537fd36769bbad6eae90f4"],["D:/Blog_my/blog/public/archives/index.html","0ece624393c182819f64448c9750c92e"],["D:/Blog_my/blog/public/archives/page/2/index.html","2040387c320f84e3c2681ec3bd27cb9b"],["D:/Blog_my/blog/public/article/18e57658.html","128f6a12aa2bedc904e255dec6301d6d"],["D:/Blog_my/blog/public/article/1e64d194.html","7e26d1def929809f0c71bde1329806ae"],["D:/Blog_my/blog/public/article/21f50898.html","0d54f5361524b1a12da13c30e02c79f8"],["D:/Blog_my/blog/public/article/234762cd.html","cda75fdc15368057b80c1ba05e008265"],["D:/Blog_my/blog/public/article/2b97b46c.html","73f9f79473ca3c82c15fc72db5f0f499"],["D:/Blog_my/blog/public/article/358ad26.html","763c3aff02ebb35a689a44419478f0b8"],["D:/Blog_my/blog/public/article/541a8071.html","e1492536301a239dd4e33d52262b804d"],["D:/Blog_my/blog/public/article/5c1827a.html","63b35c55c71009c340c4fe8d1129afba"],["D:/Blog_my/blog/public/article/5d6f1d17.html","95a9243fc6232aa3ee25c59b72327b13"],["D:/Blog_my/blog/public/article/5dcc92c.html","070b3691498d96dd266d3db6762fbe17"],["D:/Blog_my/blog/public/article/67da7762.html","3b16d8dc0864d55b20ecce5958222c92"],["D:/Blog_my/blog/public/article/683f20fa.html","febfed6075b9a5acf350c21157d45e17"],["D:/Blog_my/blog/public/article/7758c0ce.html","bd591f6baa85e6f022fac928f85da651"],["D:/Blog_my/blog/public/article/7a56c169.html","70f47cb10b170ed0fa3688bb94accfab"],["D:/Blog_my/blog/public/article/7d561955.html","acb48f1a5814ab405023e2f37ac0472c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","5c72f03e7a6e69b7f756d588314f308b"],["D:/Blog_my/blog/public/article/c386a086.html","50ede742c948f46ae2737874df3185f8"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","fe7e2bdd43ac13bdaa62f3e0646cafaa"],["D:/Blog_my/blog/public/article/e419ec53.html","f07f8b849c61abfd88058ae81dc60e10"],["D:/Blog_my/blog/public/bangumis/index.html","053e7a22ed4558346a9c421e497399ad"],["D:/Blog_my/blog/public/categories/Android/index.html","fa70d60a322e033d076f19d04eb1d154"],["D:/Blog_my/blog/public/categories/index.html","fdd554b1c5d07a656394b59ed9b85886"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","ae4a1de5b319bf840e3715a911c26f8d"],["D:/Blog_my/blog/public/categories/后端云/index.html","9e295b60242cf7b1084165ac36bdae52"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","2da0f45e5be0e4f0a3f3a94d0a434454"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","95e5abf37da4e8b33c22128a0951351f"],["D:/Blog_my/blog/public/categories/百度云/index.html","304892e114a5c13fe878c801d87acb08"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","76d20a2a19290f86c89f93f17a887c24"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","9207c52c814568850d4686d71bb6f38f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b954a37d14b0d40bafcbe34c45ef748c"],["D:/Blog_my/blog/public/music/index.html","cb206d7c7362b2e07577173be0ad263a"],["D:/Blog_my/blog/public/page/2/index.html","2e034a6cff17148dc052e7d37b84475d"],["D:/Blog_my/blog/public/page/3/index.html","db12ba76866806dce750988546c8fa59"],["D:/Blog_my/blog/public/tags/Android/index.html","e67f8d1c04ff848ba942534892b427ae"],["D:/Blog_my/blog/public/tags/bmob/index.html","ccd365ff2ae1b2baec54febda9fc6593"],["D:/Blog_my/blog/public/tags/coding/index.html","a35d3c09e59f432b62adb746d0af0ff2"],["D:/Blog_my/blog/public/tags/github/index.html","8baebdee196190c6f2c511f014ba387b"],["D:/Blog_my/blog/public/tags/hexo/index.html","e9ead7dc2caa40c6483c4473464d8730"],["D:/Blog_my/blog/public/tags/index.html","fe9e853eb48c7e4016e5e958013c27c1"],["D:/Blog_my/blog/public/tags/leetcode/index.html","19618467227bb04f8cebdaaed8c81867"],["D:/Blog_my/blog/public/tags/情感分析/index.html","bde3386ec4855da5cc5e63c4adf98278"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0bf357cee7c0f24a35cb8c7dd648251f"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b1f27719d5172b40690464fbf82892b8"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","533bdcccc66f68073a44054821131626"],["D:/Blog_my/blog/public/tags/笔记/index.html","3f745be8e28a5d3b5e24e643e2d360d6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","f12f1103f11f6d1c1461d1b11c938472"]];
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







