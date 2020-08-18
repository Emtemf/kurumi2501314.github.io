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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","52c3cebf1b0ac2e6692a6358066751fb"],["D:/Blog_my/blog/public/Gallery/comic/index.html","b5f3876f46809555ea3c4e91488b6357"],["D:/Blog_my/blog/public/Gallery/index.html","52c5c84cc889210c0126c5f5e2860898"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","cc29b77031fb73173a2d3dcedac25852"],["D:/Blog_my/blog/public/about/index.html","973b02aaaa96038830dcf2e66a387692"],["D:/Blog_my/blog/public/archives/2020/07/index.html","b079b7578f97804da3905d9e9e7a0ca4"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","64862e31d0d96b41c167b5ce5e8fae7c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","e9e70235a487620e4e5fbccdee02e315"],["D:/Blog_my/blog/public/archives/2020/index.html","e859c410db30a6d501d2bb799fdedd00"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e2be9f06e4f1bd79adb14d9b0089a07c"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","2d18dabd3d04b2d5d6080285aaaa8e4a"],["D:/Blog_my/blog/public/archives/index.html","0c0e6ccb48ffbddb4f9f64a32ad2ab14"],["D:/Blog_my/blog/public/archives/page/2/index.html","6614c3116e53941eb37304af7e2b4153"],["D:/Blog_my/blog/public/archives/page/3/index.html","c33a5d4a44e91f2039ae8fd1b8d87799"],["D:/Blog_my/blog/public/article/1811f8b8.html","8f2a80b7b75558c9e7a486f0a1832f91"],["D:/Blog_my/blog/public/article/18e57658.html","d00d6903d2dd8d56577deb54af6bd23e"],["D:/Blog_my/blog/public/article/1e64d194.html","f7889f0fb6607e51213a0a09da673d94"],["D:/Blog_my/blog/public/article/21f50898.html","788e853e394a18f8ce15c89aff9908d0"],["D:/Blog_my/blog/public/article/234762cd.html","6812b9b19178183de6b665986eb608ee"],["D:/Blog_my/blog/public/article/2b97b46c.html","b8ff991819f02eb5a83c3215abb5280b"],["D:/Blog_my/blog/public/article/358ad26.html","2608f49a9bffbc8ad8c973631dd190a3"],["D:/Blog_my/blog/public/article/541a8071.html","7d3d50ad26111198086e1bdeb9c7075b"],["D:/Blog_my/blog/public/article/54412d2c.html","34abd645caf67b6bb4efb8be62997ed9"],["D:/Blog_my/blog/public/article/5c1827a.html","763caf4b39c1e205bbce75e8d3beef28"],["D:/Blog_my/blog/public/article/5d6f1d17.html","b17b8a50f0e83d564a01e9b5fec251a8"],["D:/Blog_my/blog/public/article/5dcc92c.html","634b347fcc9fbe358b76d2d8934c3abe"],["D:/Blog_my/blog/public/article/67da7762.html","ab7bf141af19f04ed5948009f265189e"],["D:/Blog_my/blog/public/article/683f20fa.html","640a3acfa975180ce0c266311fc3aeee"],["D:/Blog_my/blog/public/article/7758c0ce.html","78af93b47a00c4934e8ef461c115871d"],["D:/Blog_my/blog/public/article/7a56c169.html","2fa0f1bcff2ccacb3fccc4dd2987be62"],["D:/Blog_my/blog/public/article/7d561955.html","b6eff2d36a56d074920de5e77f04f043"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","b53278f1a9233b1aceb7c2fc4e4131c0"],["D:/Blog_my/blog/public/article/c386a086.html","d8ab7705fe101cbd7d09491951f109f9"],["D:/Blog_my/blog/public/article/d080f90f.html","1f2535128e49d7097d3d560e872aa1cc"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","11d1905f1746ee833fe6a5fccf44f9c0"],["D:/Blog_my/blog/public/article/e21e4e82.html","d63737a2d27d390b8f727f38a568a2a8"],["D:/Blog_my/blog/public/article/e419ec53.html","26cffda9f469a11fac76833b86bf3a6a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","2c4b67a0e0f88d04c99319be5097e799"],["D:/Blog_my/blog/public/categories/Android/index.html","6ec7f6814793693077070f07dc9f6089"],["D:/Blog_my/blog/public/categories/index.html","ed215c679fa7680f0c6ffb47cc5e3dd5"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","ddc64705f8cca7c7dca6e9fa8047f4e2"],["D:/Blog_my/blog/public/categories/后端云/index.html","0114668c6b47b1795e3ec4de1843eb21"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f33ae679de6cdf9eaaadb63fb2a07c7e"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","6499ce21a32df8a942562a8c642f5672"],["D:/Blog_my/blog/public/categories/百度云/index.html","806d8cd32fea49fe051b3289a0ed222f"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9020a1cfbc27b1969639e84f72e322b1"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","4ba9b43fd1519a1c85b2f39e81029cac"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","f6ef2de6da98d2a929b3f432524677b4"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","073f09fb9a094a4690252b54b8180bb1"],["D:/Blog_my/blog/public/music/index.html","e6864bff5b3fb618fe44df278df1eb80"],["D:/Blog_my/blog/public/page/2/index.html","afcaf02c0d5dc95365afd8dc1803cfc7"],["D:/Blog_my/blog/public/page/3/index.html","5b41ef9a24836a32e7619607f1df131c"],["D:/Blog_my/blog/public/page/4/index.html","392d8c722690e60a6725284c7d532b50"],["D:/Blog_my/blog/public/tags/Android/index.html","dcff0c8a1137741c2a83d1e7c3a2df0b"],["D:/Blog_my/blog/public/tags/bmob/index.html","8792830daf690ca3c372dd7f2502877e"],["D:/Blog_my/blog/public/tags/coding/index.html","8cb70ae07895cc2a8ea17255f05f8029"],["D:/Blog_my/blog/public/tags/github/index.html","70110452da32517c6c2a7b2fb9492451"],["D:/Blog_my/blog/public/tags/hexo/index.html","f8224b6421cb68e491926dfccd73813b"],["D:/Blog_my/blog/public/tags/index.html","9e60f6b8741e774e7805890fa54de487"],["D:/Blog_my/blog/public/tags/leetcode/index.html","71239ba65c35086883a5acdb083ddf4b"],["D:/Blog_my/blog/public/tags/情感分析/index.html","30eba9e81a761ca647ec8ec9fab01ed5"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","c150599772a35763d004ea8d90b5a756"],["D:/Blog_my/blog/public/tags/登录注册/index.html","3c6184ea9313d45e7a45903e2835df07"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","3162bf89d5be0fdbe41aa7660c961a06"],["D:/Blog_my/blog/public/tags/笔记/index.html","9ae99c9103227efc1d748c5a8c23a89d"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","006c31e9233bd1037dc319930a034835"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","2f788ae4c14d93c45448d6eb619600de"]];
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







