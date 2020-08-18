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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7b5c4ca2db4d3225f1ffda1aaee647a9"],["D:/Blog_my/blog/public/Gallery/comic/index.html","8854e4424b206d776af80efde76eee95"],["D:/Blog_my/blog/public/Gallery/index.html","17c9973975b17af1d9d813de49cdc276"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","3720eb85ef1ddf3df9ba8254ded3ed3c"],["D:/Blog_my/blog/public/about/index.html","2e65959950748275850a84749ba7f289"],["D:/Blog_my/blog/public/archives/2020/07/index.html","6797e68c1f071af011ea50db18adf582"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","af37f9d14de2ef9a024ccc072339940b"],["D:/Blog_my/blog/public/archives/2020/08/index.html","468d824c62060e5f2aef7f655d724391"],["D:/Blog_my/blog/public/archives/2020/index.html","05fb3f3353a59328cfed18f168a9db0b"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","fde8ba4e69e1a864e5687c0dc521c530"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","dcd57d883ac7a4081c4e7ed4a0603195"],["D:/Blog_my/blog/public/archives/index.html","7dabe9d180a798356dd2392bbaafe56c"],["D:/Blog_my/blog/public/archives/page/2/index.html","a0f22645a1c37653b5d0dd9bbfc4f254"],["D:/Blog_my/blog/public/archives/page/3/index.html","1f95d5d1246a8508d5ccb12443b7e4fe"],["D:/Blog_my/blog/public/article/1811f8b8.html","ab8930ce721f9584993c2ec0285c9ca3"],["D:/Blog_my/blog/public/article/18e57658.html","1283edbd4773ed800f7e8050cf6ecd8e"],["D:/Blog_my/blog/public/article/1e64d194.html","a8282ff2db39124f190f86e173e1b0a8"],["D:/Blog_my/blog/public/article/21f50898.html","fbef470b19ac509750edbe8657abb8f5"],["D:/Blog_my/blog/public/article/234762cd.html","92748428d984454e3b7feda944ecb3f1"],["D:/Blog_my/blog/public/article/2b97b46c.html","3573fb47fba92cfe00ac9968eac05e06"],["D:/Blog_my/blog/public/article/358ad26.html","60d93f541fe0d30d7705f1e4d0af63e5"],["D:/Blog_my/blog/public/article/541a8071.html","3fd98b576cd10b24899ecfe24a91ef36"],["D:/Blog_my/blog/public/article/54412d2c.html","013068939a96ba900ead7399d349a7bb"],["D:/Blog_my/blog/public/article/5c1827a.html","e5087d87cbad2f073ccfdb539ec1c949"],["D:/Blog_my/blog/public/article/5d6f1d17.html","eb69e71264245dfd71eed32c03743171"],["D:/Blog_my/blog/public/article/5dcc92c.html","ab8fdacb33630f168fedce240c031cc1"],["D:/Blog_my/blog/public/article/67da7762.html","7aad77c37c43f767e73f145c5f36b56f"],["D:/Blog_my/blog/public/article/683f20fa.html","c70383d943ade0565de4a0dcca3877c0"],["D:/Blog_my/blog/public/article/7758c0ce.html","fd863fa50a28d175b3052ddbad52f55a"],["D:/Blog_my/blog/public/article/7a56c169.html","6a92f84a2088a4535b14dcd681d8f577"],["D:/Blog_my/blog/public/article/7d561955.html","2624a90b321862215422344ceb5e7c8f"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","78174e238f5a596230f24bfc60761534"],["D:/Blog_my/blog/public/article/c386a086.html","4570eb8efee32b453478e9c651a5fe0c"],["D:/Blog_my/blog/public/article/d080f90f.html","38edd15db5f7a219d2be4bda2f1c262b"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","b10ff17a7e311065fb34e941e02c832e"],["D:/Blog_my/blog/public/article/e21e4e82.html","5dbbaa4d23db01610d47fd3de0dea5a7"],["D:/Blog_my/blog/public/article/e419ec53.html","54a35a12197db3ca59b607e072418f01"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","ecac08082904120264a0527a3460ac8f"],["D:/Blog_my/blog/public/categories/Android/index.html","0cb6e659f2ba89f9b7329e922f79d5ae"],["D:/Blog_my/blog/public/categories/index.html","2ffb2a7d5d531b38452215af8e7c35f7"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","b06dd676936ba4ad19af16b6f722ef9d"],["D:/Blog_my/blog/public/categories/后端云/index.html","57274a8bd63b28b47d5591051c74105f"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","e3af47abc6f8888e763756ef4ce5bde4"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0648af48964fe8c7273ad47bcefa478a"],["D:/Blog_my/blog/public/categories/百度云/index.html","6c2c012af172774fb579f536a6592d6e"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","ead9bb082a33c22356c55344fa5f4a9b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","23ba6daeeba73b6f51c2945ba4d168a8"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","f2dab57039831f4144f4c9389d4d7355"],["D:/Blog_my/blog/public/music/index.html","25ded0bbcca66c0fb7d5705e5bf9035c"],["D:/Blog_my/blog/public/page/2/index.html","fbd29c1d9d6b20f8a46bc15f536524ca"],["D:/Blog_my/blog/public/page/3/index.html","8b6d6e030cabe45f15969ad375ff2662"],["D:/Blog_my/blog/public/page/4/index.html","3d6661503023e71111ac5fe85afc9f6e"],["D:/Blog_my/blog/public/tags/Android/index.html","eba48db60dcb8bb9cc29b3638d27750b"],["D:/Blog_my/blog/public/tags/bmob/index.html","0256f23ea12fbf098cda05b3764eb260"],["D:/Blog_my/blog/public/tags/coding/index.html","51c9b1e9bfed223ef69d10ea9f65aeab"],["D:/Blog_my/blog/public/tags/github/index.html","835f2265e087c6005a89d72f41eaec2e"],["D:/Blog_my/blog/public/tags/hexo/index.html","08f991570b8d1b55509a239a94b4a118"],["D:/Blog_my/blog/public/tags/index.html","9667fd5bc39c4dbfc5a95d7208bbbd42"],["D:/Blog_my/blog/public/tags/leetcode/index.html","e2c0ef968cf815848585d12ab741d9d8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","46d53cb3ca1ca280f4da3e925c09dcb6"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","8f7e6eec57065a5dd7d0a57f2f3d5a2d"],["D:/Blog_my/blog/public/tags/登录注册/index.html","72a0e74d304e38d66728de1e309932d7"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","83276d8a60d9fc93c71b8c3c724a74f4"],["D:/Blog_my/blog/public/tags/笔记/index.html","147339eea43da0c607389118683a60e7"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","4c22d429723fe9a49cdd8756c61bec08"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","848267ea22a2a8edcc549f928f02e5fe"]];
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







