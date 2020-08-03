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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","3d72aa2c0d9f36f5e053daec6d17297a"],["D:/Blog_my/blog/public/Gallery/comic/index.html","ada46e347afb9a3c87723c6e7b95c14c"],["D:/Blog_my/blog/public/Gallery/index.html","c877893f4ff0f1c64c4dca725bbe8529"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","8c0819ec1ec477d3b04af8bd3f284f45"],["D:/Blog_my/blog/public/about/index.html","1bc8030a1d12fa3301f68ef675974884"],["D:/Blog_my/blog/public/archives/2020/07/index.html","752e0ec9b90e4390888d46598eb64d72"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","7d14114511e4e66d4edecabdac08d052"],["D:/Blog_my/blog/public/archives/2020/08/index.html","1f5542a589e7e52f6db384f593aa5480"],["D:/Blog_my/blog/public/archives/2020/index.html","2477602f5f1b90cd0e5cb192eaaab512"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","58d76f800e0c40ac32a2b61f365817f0"],["D:/Blog_my/blog/public/archives/index.html","7389abac04f0103c148e59a2b517c88c"],["D:/Blog_my/blog/public/archives/page/2/index.html","cbb1753829ccc48123bec8f623f06f35"],["D:/Blog_my/blog/public/article/18e57658.html","f7369b4d8aecdaa5b49c810799d45b1f"],["D:/Blog_my/blog/public/article/1e64d194.html","954ecfed2aaf9fefd96c995fd17635c6"],["D:/Blog_my/blog/public/article/21f50898.html","e445cb07b597292de6419d90d8543a45"],["D:/Blog_my/blog/public/article/234762cd.html","2bbab6d60004f947cec24ca87d0e4b1a"],["D:/Blog_my/blog/public/article/2b97b46c.html","a3745391e1b236c5c9c0205a1bea52ec"],["D:/Blog_my/blog/public/article/358ad26.html","5896eb3d93a9581bb9f8cfed6bc69106"],["D:/Blog_my/blog/public/article/541a8071.html","964a3cfdb98982fda61c0ab5c2290d7f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","26905418dfca61ceabb6e7814ccc63e5"],["D:/Blog_my/blog/public/article/5dcc92c.html","ef80c4eb7625b83f8a889b4170e5777d"],["D:/Blog_my/blog/public/article/67da7762.html","d2e925ec2baca6fbfa600bcb8082f2b5"],["D:/Blog_my/blog/public/article/683f20fa.html","eda5f2679ddd7b5366d66aa424327185"],["D:/Blog_my/blog/public/article/7758c0ce.html","3aa08b96071b14994d1ddab0e406c300"],["D:/Blog_my/blog/public/article/7a56c169.html","c7bb8332208b73034f330c04d049ef68"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","9bd03a8aa0f0a16bd603caa1eb130752"],["D:/Blog_my/blog/public/article/c386a086.html","0c1c1498627545c6137db32145cd2a3c"],["D:/Blog_my/blog/public/article/e419ec53.html","e9295d04fdc2b3fde71defe35adc4df0"],["D:/Blog_my/blog/public/categories/Android/index.html","20c80429b90306a1bfa35484d54c8e93"],["D:/Blog_my/blog/public/categories/index.html","e232b6f688515d01e0b147c531370161"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","fe8aae239b6201d61c0eb1b3892c808c"],["D:/Blog_my/blog/public/categories/后端云/index.html","136e939121dee3842e8ec8c7aa885bd0"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7d6d408d4ac267260479619af7b54395"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","ee4ce8ad9a3b55c96d1cf01cb461cd28"],["D:/Blog_my/blog/public/categories/百度云/index.html","1830bbe468d4504d05476dcbb2c0f20b"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","fa9b4e8d2f9d1ed0b5b3dfb732ed8f3b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","620ee101353df678a1ac64e2e0065cf9"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","383f4b2e727a15bf4ee5eb55e1d20f90"],["D:/Blog_my/blog/public/music/index.html","5c1e5485f78f75978481516e4befbdd2"],["D:/Blog_my/blog/public/page/2/index.html","b015423c6b95ba41acd019a49c1514d7"],["D:/Blog_my/blog/public/page/3/index.html","fa0914fa427db8cb5f62b1f4c0949172"],["D:/Blog_my/blog/public/tags/Android/index.html","bcf946c791e6a20d03acf85aad9a457f"],["D:/Blog_my/blog/public/tags/bmob/index.html","bd3311b580607b671195157eb0c9e256"],["D:/Blog_my/blog/public/tags/coding/index.html","e1ad062eab0383f4270011b0a14db8af"],["D:/Blog_my/blog/public/tags/github/index.html","8aea78c0b3e5107941194b38cb786f52"],["D:/Blog_my/blog/public/tags/hexo/index.html","0db7be19307a0f4eefe49e90c7bb673c"],["D:/Blog_my/blog/public/tags/index.html","88a1c97fa49fc58991dc28ac43307aae"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7e72386c11d867aeb4c408d2a9ee120c"],["D:/Blog_my/blog/public/tags/情感分析/index.html","111f18516f520ec10a561733baff2933"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","04fb68f544704a076121c4652eea1204"],["D:/Blog_my/blog/public/tags/登录注册/index.html","7f3cacaa25b98d3e59d832c354a0ab09"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","cb99e900198c629114c803c671882312"],["D:/Blog_my/blog/public/tags/笔记/index.html","b9f37c68e021dba01a000152b5d9a3d6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3892d9562b834dadce8bd12716dc9ede"]];
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







