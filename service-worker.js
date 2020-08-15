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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","5645d44875bc1d5e634f532f7098b254"],["D:/Blog_my/blog/public/Gallery/comic/index.html","b0b54a5b12b14516dc4a48704f532a04"],["D:/Blog_my/blog/public/Gallery/index.html","ec78ad55b43ad70ea59f21d3e0adc28a"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","3cb942293b21193d0b3425aba8e49b9b"],["D:/Blog_my/blog/public/about/index.html","a52e09de9a51ffa2b59f7bbf965967e3"],["D:/Blog_my/blog/public/archives/2020/07/index.html","05741598b227578054f32335b4fd8c8e"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","0117a60e01c9a5c31fa78f61d7995c9b"],["D:/Blog_my/blog/public/archives/2020/08/index.html","86bd75fa0a939d7afce81a547b29cc73"],["D:/Blog_my/blog/public/archives/2020/index.html","d8973b8f3cb8e73d442efaf61a4e4b82"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","2265517e8d173f9cfc393b7004843654"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","fc0affbf945dfec091319281244f6613"],["D:/Blog_my/blog/public/archives/index.html","50e97b8ca4807139c7c8db359f7cd2b7"],["D:/Blog_my/blog/public/archives/page/2/index.html","e28dff717f192e824b15375f3f406ec8"],["D:/Blog_my/blog/public/archives/page/3/index.html","ed1dad54153e83772af0700b73687546"],["D:/Blog_my/blog/public/article/1811f8b8.html","967fddf5d6a5b8aaa87a41ade4d1fdf6"],["D:/Blog_my/blog/public/article/18e57658.html","ab237eb160a67430f3d6d701031b4b8b"],["D:/Blog_my/blog/public/article/1e64d194.html","f084a3651b85758144607135e830f47b"],["D:/Blog_my/blog/public/article/21f50898.html","ca822d74da72eb7a2af9c3c1b8fbd92f"],["D:/Blog_my/blog/public/article/234762cd.html","eeb7cad52076df259edc10ee0725e86c"],["D:/Blog_my/blog/public/article/2b97b46c.html","4315e3910dd6429e7bdc0cf7ab4d3099"],["D:/Blog_my/blog/public/article/358ad26.html","3e5d375a0fffee913176e5afdaab7b31"],["D:/Blog_my/blog/public/article/541a8071.html","1943446c53cccde5dacefd22d8c52138"],["D:/Blog_my/blog/public/article/54412d2c.html","f97b5fb99651b4c97b54d3d640a09067"],["D:/Blog_my/blog/public/article/5c1827a.html","4a11f21b1bc944515394299ec17d4ff5"],["D:/Blog_my/blog/public/article/5d6f1d17.html","d71d1cb4dc93f271762ac9b3f479a52c"],["D:/Blog_my/blog/public/article/5dcc92c.html","ae7c45981fd7c7055447f08e7c158be6"],["D:/Blog_my/blog/public/article/67da7762.html","87f46c69dc00822b524d59c356cdbb53"],["D:/Blog_my/blog/public/article/683f20fa.html","f37562b0ae26318ba410d990b75f1f4f"],["D:/Blog_my/blog/public/article/7758c0ce.html","38ea7c903c29148c575894d75cae400f"],["D:/Blog_my/blog/public/article/7a56c169.html","bd7293e668e83c6248bcaa45bbe88dfd"],["D:/Blog_my/blog/public/article/7d561955.html","39576c8d7b2eb64b3f37d9ed3671e038"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","1e43e4ccdc420a6f701bbd93ff95455f"],["D:/Blog_my/blog/public/article/c386a086.html","4f4d416c54963fcebd570075c139d401"],["D:/Blog_my/blog/public/article/d080f90f.html","47fe398488164da925fc4c5a03fe2cac"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","d208cec40abb60790178666980a0e264"],["D:/Blog_my/blog/public/article/e21e4e82.html","7348c8c75ecd2aebc313a2e297dc9db0"],["D:/Blog_my/blog/public/article/e419ec53.html","2124b1e55149c54d5ead4c52d9fe5eb8"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","3dbdf38320115acd3148424fa0bab448"],["D:/Blog_my/blog/public/categories/Android/index.html","b751400f6509313f8313141899a0549a"],["D:/Blog_my/blog/public/categories/index.html","7903222b5e055235e5c31a03f4055d5f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","e78a996ee88b876047792151b2a3b856"],["D:/Blog_my/blog/public/categories/后端云/index.html","fb3c409aaff7fab7fbbc940381f3a5b9"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","ab46e78622f966bfad247353e09272b0"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","703b3b2880af7f0bf9af188d227e6717"],["D:/Blog_my/blog/public/categories/百度云/index.html","199e6aae6115209833e1b481bd7e5aae"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","48e64c31e5c7aa29e7ba558abb28467c"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","47b3254571bc636c730b9ff451526b40"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","29d81d93fa76c95d0bcaebb7300aacf4"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","3ed5fac30a3cc93e6064336d09094c94"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","51332c1842c19251c2df87b200f07ea9"],["D:/Blog_my/blog/public/music/index.html","5d99e9ae890548194f5020243c2b64b8"],["D:/Blog_my/blog/public/page/2/index.html","8c8c735fc7aac70f7066918038dd1aac"],["D:/Blog_my/blog/public/page/3/index.html","807ff4854957bcc4d551d51617d97309"],["D:/Blog_my/blog/public/page/4/index.html","e601b728f1e3e44aece7acbd7eff8eb0"],["D:/Blog_my/blog/public/tags/Android/index.html","78453bfa2cf51003e5d05706e2e6c8a3"],["D:/Blog_my/blog/public/tags/bmob/index.html","37b4050e878feea59a1a5582d05defb9"],["D:/Blog_my/blog/public/tags/coding/index.html","0b2e1e7d20fd2e14f7061d1c8425b94e"],["D:/Blog_my/blog/public/tags/github/index.html","f822f0710c781a2222a8d54166cdeeca"],["D:/Blog_my/blog/public/tags/hexo/index.html","768f6e4fd3127e3f34ae4eb2ac694a2e"],["D:/Blog_my/blog/public/tags/index.html","e45fa723880ff0c0910d21d47ec45d33"],["D:/Blog_my/blog/public/tags/leetcode/index.html","1992154aecad7f1531607467afd93cd2"],["D:/Blog_my/blog/public/tags/情感分析/index.html","ce506143cb5782bf2299a80998cff77b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","bf58c91294967e8156e8abc3514d563f"],["D:/Blog_my/blog/public/tags/登录注册/index.html","06a436ab410ed3123a7adb4c8c74db9c"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","42c839b9e1e4fb52a22e5f335911af4a"],["D:/Blog_my/blog/public/tags/笔记/index.html","4e49a617b4fba0aa56c86df088ca203e"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","bdff7398f95ebeb6cddb693a3b29e30f"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3011e4accfa1352d5bd1db63fd49adfe"]];
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







