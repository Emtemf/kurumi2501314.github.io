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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","17221823b8dd58cd60eb14ffc42f67c3"],["D:/Blog_my/blog/public/Gallery/comic/index.html","16d21c4820652a45dc6d33c19a4eec3d"],["D:/Blog_my/blog/public/Gallery/index.html","e7a9cd594faebeaf663092e0f36b2f56"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","48a60901d6f43497d5c9c4ec48299170"],["D:/Blog_my/blog/public/about/index.html","86901c5da007c682b9f8172f3a0ff3a6"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1c9fb4b8f6512b0e8bb66e2f8c9a7d2e"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","2c920ab00255d8a7813bd468775c92a7"],["D:/Blog_my/blog/public/archives/2020/08/index.html","e9ce9dff2a0122dd85aa2be33ee6f6ab"],["D:/Blog_my/blog/public/archives/2020/index.html","752572e53ecf224692dffe8049be007d"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","38c34a117ee4ba7dda6ebd3b480f6647"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","ff6551f1e2268749d988ee1e0faeed62"],["D:/Blog_my/blog/public/archives/index.html","1cd37e9d0498dc92a08f03cc86565a4a"],["D:/Blog_my/blog/public/archives/page/2/index.html","b114dad2d54b734d6345c58952630881"],["D:/Blog_my/blog/public/archives/page/3/index.html","ec2cd92b6bd6a50539fe2d651a578594"],["D:/Blog_my/blog/public/article/1811f8b8.html","336324f359047f770083321d963db4e6"],["D:/Blog_my/blog/public/article/18e57658.html","9194f2abc99ee56f9b5b86e293907b94"],["D:/Blog_my/blog/public/article/1e64d194.html","5d44e1990e423c329745c5bb6242a424"],["D:/Blog_my/blog/public/article/21f50898.html","5f710b1f2c1231d27bde1ae08e73b9fe"],["D:/Blog_my/blog/public/article/234762cd.html","01e70c33430077693673f928e40bd65d"],["D:/Blog_my/blog/public/article/2b97b46c.html","0008dc8fd4fca1fb99fffdadbb30c042"],["D:/Blog_my/blog/public/article/358ad26.html","ed3827e4c72bffd81227f8aa1495d8e6"],["D:/Blog_my/blog/public/article/541a8071.html","2aa2faec8ac4467a19c19506f4d14e00"],["D:/Blog_my/blog/public/article/54412d2c.html","136f1cd2230d5e6cfe5fbfa5c1cc0c22"],["D:/Blog_my/blog/public/article/5c1827a.html","be7f4177165769f83f875ce587a5277f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","85db8d3c11e5e4ffdcca9a63b8c34858"],["D:/Blog_my/blog/public/article/5dcc92c.html","05dfdce45a9a0e61173eb2089bdc0f5a"],["D:/Blog_my/blog/public/article/67da7762.html","e9753290446298faded40fb5459fcaa7"],["D:/Blog_my/blog/public/article/683f20fa.html","b3a9503a52c7a2f02de3c53e37d19e5a"],["D:/Blog_my/blog/public/article/7758c0ce.html","0de41112a8d46ead3a3d9611058c8317"],["D:/Blog_my/blog/public/article/7a56c169.html","ec006dd381d13439dc6a03d8eea48ba8"],["D:/Blog_my/blog/public/article/7d561955.html","ab3497a0169ac72619d9fda6da289ed9"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","9a92212e2b084211a356f7bcc2913ae4"],["D:/Blog_my/blog/public/article/c386a086.html","025ee6f0bafe236b3a242669e04dd746"],["D:/Blog_my/blog/public/article/d080f90f.html","2fc2ea739d8af5ff708888e418042910"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","16246b4c779e20c6e04498bf72e12f8c"],["D:/Blog_my/blog/public/article/e21e4e82.html","0483cfc0bbd0b918dca47927735fc350"],["D:/Blog_my/blog/public/article/e419ec53.html","5a6dc6e1f7ec14d3f80a6609f6668578"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","b1e1f084adbfc408cb5ef4039d08d42a"],["D:/Blog_my/blog/public/categories/Android/index.html","801f8115c76ac1b7e30fdd55b23cadc1"],["D:/Blog_my/blog/public/categories/index.html","6ad416bd291edad5f2244ebe349fc3e2"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1ed5c3c44b85aed33eb344f97b3bdc54"],["D:/Blog_my/blog/public/categories/后端云/index.html","f601058cce283bd081364bec0604e4df"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","fb3a2f8006886c52732e4558ca51a4ca"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","3b3c55eec661497147c4e9954bf37938"],["D:/Blog_my/blog/public/categories/百度云/index.html","5fab302267c51c7e5e582cb4620e4c85"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9f8169a30ac28118acf9c93ea4c7e58a"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","64b633377f1b112a6b7624019747eb9e"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","599242a4682c7c6576fae1f3db261384"],["D:/Blog_my/blog/public/music/index.html","9dca749aec8c5e0aba7ae76ced514c64"],["D:/Blog_my/blog/public/page/2/index.html","668cf9f4f56039e4c844a0807e756162"],["D:/Blog_my/blog/public/page/3/index.html","6cbbc3ba74d23402cd596071d5447fed"],["D:/Blog_my/blog/public/page/4/index.html","6e480eaf2561bfbf36733876a193e530"],["D:/Blog_my/blog/public/tags/Android/index.html","e6643d4517128db17cb2fde77bc8430f"],["D:/Blog_my/blog/public/tags/bmob/index.html","f6e1aee611023728ff8e5fadf831669c"],["D:/Blog_my/blog/public/tags/coding/index.html","2be58363929238ca8246ac34b024f793"],["D:/Blog_my/blog/public/tags/github/index.html","f9f3174f9185747bdd2a4a378efcac75"],["D:/Blog_my/blog/public/tags/hexo/index.html","5eb5bf96a108cd521160673fb245cb78"],["D:/Blog_my/blog/public/tags/index.html","88dc6d1f7a8b73ca44311a126110201f"],["D:/Blog_my/blog/public/tags/leetcode/index.html","4e62fa7dc7d3a08e9c5841743d95257d"],["D:/Blog_my/blog/public/tags/情感分析/index.html","a9689dea7b7c675bbd8191472a455bcb"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","6ce7f6e72ab4e9e10c53014567c46467"],["D:/Blog_my/blog/public/tags/登录注册/index.html","dcaeb37c7cf643d8873a7f466676c106"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","6569a6bd117b0a718880883a16436b7d"],["D:/Blog_my/blog/public/tags/笔记/index.html","a1a1ebe5e3316b8cc3d980c7763d4b75"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","34d44e820809b417fae8e15be5f6fcff"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c7f8f22fb025e385a153c6fd0e508448"]];
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







