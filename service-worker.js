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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","5e4453ab09ab0c45d653aef2b54b6b66"],["D:/Blog_my/blog/public/Gallery/comic/index.html","f311caa154b7c51e38e23fa50d4c183b"],["D:/Blog_my/blog/public/Gallery/index.html","a74a30b56428ff0116cc0d65522f6212"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2692d1f0c317a368ab920c3605049e71"],["D:/Blog_my/blog/public/about/index.html","016850a65d0f094d2b689b199a2f8cc2"],["D:/Blog_my/blog/public/archives/2020/07/index.html","037a6dff8da0b8b1c48be30bf13a8f79"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","3e8978e33f7c437fa61da41fe72d176e"],["D:/Blog_my/blog/public/archives/2020/08/index.html","c9e21aeb64ab26f641f61be95db1608b"],["D:/Blog_my/blog/public/archives/2020/index.html","6deca08875b58bbdb81019733353ad15"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ea5be209385e2c80f5b487e1a8415c04"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","9175c4726e32498a38acef19a7058aa2"],["D:/Blog_my/blog/public/archives/index.html","a2f551170315bfef717068aecf546357"],["D:/Blog_my/blog/public/archives/page/2/index.html","f3135b2586dc88af38c86c4530cb067a"],["D:/Blog_my/blog/public/archives/page/3/index.html","911cd7787a0a4efe772de03286f6d5b6"],["D:/Blog_my/blog/public/article/1811f8b8.html","6857f1866e859c0043299e2c7c72e67d"],["D:/Blog_my/blog/public/article/18e57658.html","d52839319bb07041f3ac2997ec105351"],["D:/Blog_my/blog/public/article/1e64d194.html","0385b5376803ad96d1dd267bf6988e59"],["D:/Blog_my/blog/public/article/21f50898.html","c15b3f9828cece7b5a45c2294b32a64d"],["D:/Blog_my/blog/public/article/234762cd.html","6cd1a3b4dd0e2e1968390d21aa415630"],["D:/Blog_my/blog/public/article/2b97b46c.html","b623c2988b7c58cf5c1cccd34fb27fb4"],["D:/Blog_my/blog/public/article/358ad26.html","ab513a3adc0f5a38fb9c62f0e1e88b43"],["D:/Blog_my/blog/public/article/541a8071.html","77991c628c7a6ba3a29a4242c60d1744"],["D:/Blog_my/blog/public/article/54412d2c.html","dc553f7f3fbbbcf21eb50a9cc11e3e18"],["D:/Blog_my/blog/public/article/5c1827a.html","d42c14848de01b3fcd20cc0ea2fb6b1e"],["D:/Blog_my/blog/public/article/5d6f1d17.html","cb87a1f19ff6b9cbba57212cc489e8af"],["D:/Blog_my/blog/public/article/5dcc92c.html","6a5ad8a024155e68f57bf2c6a8edfb61"],["D:/Blog_my/blog/public/article/67da7762.html","69e177376f7591a3679dc55112956f3b"],["D:/Blog_my/blog/public/article/683f20fa.html","8afa0c3bbf2e5d2ec5c903e239070823"],["D:/Blog_my/blog/public/article/7758c0ce.html","7e9bcbd3d59c4e8af8cfcfd62463fa74"],["D:/Blog_my/blog/public/article/7a56c169.html","d23f66e654f1953084578e658b842323"],["D:/Blog_my/blog/public/article/7d561955.html","4b24ec9a60a9e551f3fb94f0c8e62695"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","21867ef4c3d3d782373cfca89c8e911f"],["D:/Blog_my/blog/public/article/c386a086.html","089f28f26caf914ed077b6e9f433ff68"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","dabdede94d156e7609f79cfd156b85f4"],["D:/Blog_my/blog/public/article/e419ec53.html","0426250bc60bbd1829035c887e188c1b"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","ade961dec8e66012cb429f6a468cfb05"],["D:/Blog_my/blog/public/categories/Android/index.html","99a682e95491a376b346c6f7486843b3"],["D:/Blog_my/blog/public/categories/index.html","3dc607aa4677f951ff3e00a8d528e370"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","8b690683da4d5a1b1f140d9447cbe637"],["D:/Blog_my/blog/public/categories/后端云/index.html","1d384080a2272244791d986b860f86b0"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","45d933a26c7aebc8c7cf20426cbe37f5"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","27178a042230962fa169538e1306fad6"],["D:/Blog_my/blog/public/categories/百度云/index.html","a72a6aff22defeb956e894d5eed64ddf"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","cda0055c6b9cca044a1a159b47d37d69"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","210583c7e2541088d9324182524f8728"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","217e17b73026a1ab74dec92e93c947a5"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","1438ef31ec74e77fae4cac5dd6e393a5"],["D:/Blog_my/blog/public/music/index.html","f5ac9b6caec2b2d2292ac82d93b3635c"],["D:/Blog_my/blog/public/page/2/index.html","fcc9ab89259965f23febdf2059528a5b"],["D:/Blog_my/blog/public/page/3/index.html","ea51328a591c75294b945f947b3e4b83"],["D:/Blog_my/blog/public/tags/Android/index.html","c3c29501bb63e739d8f28e7aa238be41"],["D:/Blog_my/blog/public/tags/bmob/index.html","edb5a0c4103c21a2a233f4e7515c3200"],["D:/Blog_my/blog/public/tags/coding/index.html","547efc060dbd6ff276755573bc0367c2"],["D:/Blog_my/blog/public/tags/github/index.html","5a65616f934448e1718d7fd826e1e803"],["D:/Blog_my/blog/public/tags/hexo/index.html","0355e60828023bbb4ba3bc9d102e773b"],["D:/Blog_my/blog/public/tags/index.html","86d3e62482e8230b5d3613e67e8625ea"],["D:/Blog_my/blog/public/tags/leetcode/index.html","54535e74900090df006510d5cd2a5f70"],["D:/Blog_my/blog/public/tags/情感分析/index.html","09ea8873440672d8d999896f4d0dc325"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","59d36b7c295caec4d0468a72f9bcf157"],["D:/Blog_my/blog/public/tags/登录注册/index.html","c328a2375fdd8c483a49a2909a0558ec"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","91427bbd59208d64c7db5a99c0f83d94"],["D:/Blog_my/blog/public/tags/笔记/index.html","ad4ecde9b2d79b46b90b0680563ce28c"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","6c24ac0c8686f71bfdc1689936041d3c"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","925a0ddccffdfda22f938f0037be84ac"]];
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







