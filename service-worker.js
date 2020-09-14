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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","8cb074c490745f726bef411b16492603"],["D:/Blog_my/blog/public/Gallery/comic/index.html","fd95b33f7e641cd33867944ae012ee75"],["D:/Blog_my/blog/public/Gallery/index.html","2fd75963f0bc59f94c3ba491dde1d778"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","99177f3c029c4e85caf7d429fa170a66"],["D:/Blog_my/blog/public/about/index.html","39903cb705986e86c9cbd8de4c6fa1ab"],["D:/Blog_my/blog/public/archives/2020/07/index.html","468b22ef567ef117058a9886c16f7937"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","0be8fe2434ac9aa175705268a0eabf83"],["D:/Blog_my/blog/public/archives/2020/08/index.html","b61c564cd20eb4f9305af354201b1a5c"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","142de98e19f7ca42865f2776a9423903"],["D:/Blog_my/blog/public/archives/2020/09/index.html","b15dbcedc3587b747560aa5297bd4b38"],["D:/Blog_my/blog/public/archives/2020/index.html","2ff0bf70427eb6a570ed3b9bcd6dff9b"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","06b41ff9e7b43e8102b569c7253a9213"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","12475c38d819b218214bf7066e2e0081"],["D:/Blog_my/blog/public/archives/index.html","a4b0fcbd158fee1a9bde7f62549479a9"],["D:/Blog_my/blog/public/archives/page/2/index.html","e8845410c020235f4449f42419d4b4ec"],["D:/Blog_my/blog/public/archives/page/3/index.html","d8e35cdd4577ca39245c8901539c3654"],["D:/Blog_my/blog/public/article/1811f8b8.html","af6e2d54d319cdee22f0fca70f26b768"],["D:/Blog_my/blog/public/article/18e57658.html","e1ff5190a8887ae6c34f4bc2b1b80267"],["D:/Blog_my/blog/public/article/1e64d194.html","50ede5a2b916ae2dddca1ba447a48716"],["D:/Blog_my/blog/public/article/21f50898.html","74a8a54e0227458eb92f6600d8589cd7"],["D:/Blog_my/blog/public/article/234762cd.html","4f1e1473c4314821ea3b2c81175016b0"],["D:/Blog_my/blog/public/article/2b97b46c.html","b1ed98b8c5e090d11bc44023b2b49307"],["D:/Blog_my/blog/public/article/358ad26.html","d9dddd215ee5a2ff9425902d8a2c22c4"],["D:/Blog_my/blog/public/article/541a8071.html","ee1b1e0619ae819b62afb8e036188ec1"],["D:/Blog_my/blog/public/article/54412d2c.html","f19a5d9842f0c4bf86c8e7639d142ea5"],["D:/Blog_my/blog/public/article/5c1827a.html","75be237c25d596a72ece57e593fcd83e"],["D:/Blog_my/blog/public/article/5d6f1d17.html","e3da6e206f5eb309250d57a095ac8ba1"],["D:/Blog_my/blog/public/article/5dcc92c.html","1ea6ded490ff3ce7a22a4ec16817b86a"],["D:/Blog_my/blog/public/article/67da7762.html","ceaf2c6988911f95acb1877195a8869b"],["D:/Blog_my/blog/public/article/683f20fa.html","0cbfd50431b566674a5c9dcfbc25ec9a"],["D:/Blog_my/blog/public/article/7758c0ce.html","ea4cfab94f0be0d3f4bb031d3d5301f5"],["D:/Blog_my/blog/public/article/7a56c169.html","f3f175829c5ce34e3ff9f85aa9d77328"],["D:/Blog_my/blog/public/article/7d561955.html","b8659ede368058a25d216200df31b240"],["D:/Blog_my/blog/public/article/a0595b99.html","f44471705df48f6e0bb8af11ca299133"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","3b17e2f6b7f365ebfec247e7c6e01957"],["D:/Blog_my/blog/public/article/c386a086.html","60f1d9dde44c583104f978afdc33f0ee"],["D:/Blog_my/blog/public/article/d080f90f.html","110c9c26741febeaa66d70f0166aa085"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","1016870a29220069ef0ad1f51f6f056c"],["D:/Blog_my/blog/public/article/e21e4e82.html","1efc052de30057bef3b74ec5de81be22"],["D:/Blog_my/blog/public/article/e419ec53.html","990ea0d63ae4d42224d061f7dcd31410"],["D:/Blog_my/blog/public/article/eb0fc959.html","6c66617dd195b30af25bed0184c7684b"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","07ac8882ad8b99f88910fd4f337731d0"],["D:/Blog_my/blog/public/categories/Android/index.html","e73584bc6cadede970004ee497ac4d7f"],["D:/Blog_my/blog/public/categories/index.html","ace39807ca277a1303725fb0cf773ed0"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","991bbf280ff8b17562f945f190c0c018"],["D:/Blog_my/blog/public/categories/后端云/index.html","beebfb7869c9264ada6508cf5becdc76"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","282c011a1de40c57cd67e0c42460dd45"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","fde899eee1c31d36c5391c3648bb33b4"],["D:/Blog_my/blog/public/categories/百度云/index.html","d0fa49807cbeda4c294fd656d663dbae"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","bf9e0e7efe976eecaf9f726c020f436b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万.png","4811c011db61997b750f8d40c6bf7f07"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","ba47ee28e65ea242972d68e1add93935"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","5a415f2de0a53c2fc7e52f138b96d8db"],["D:/Blog_my/blog/public/music/index.html","35a3a842c304192c18df0da8b3062e54"],["D:/Blog_my/blog/public/page/2/index.html","10c9915acadb7a100a54848b2a936daf"],["D:/Blog_my/blog/public/page/3/index.html","7432df7ff67b58b473fc3b1ab9bae016"],["D:/Blog_my/blog/public/page/4/index.html","b90580caf9590d1bfc25c548e836296b"],["D:/Blog_my/blog/public/tags/Android/index.html","f6f72c5338a4d4250400441b4c0ae1fc"],["D:/Blog_my/blog/public/tags/bmob/index.html","37f05f3d0fd964b15e8b28e46a033dd9"],["D:/Blog_my/blog/public/tags/coding/index.html","72391fdfc2a72f01370c45e6fa47811a"],["D:/Blog_my/blog/public/tags/github/index.html","5d7607c9f98061b389c28b373fe62320"],["D:/Blog_my/blog/public/tags/hexo/index.html","3981beca80d5065a0fd47810e3d9cd53"],["D:/Blog_my/blog/public/tags/index.html","d96526d8a988bf60d8c65258ac071302"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0d3692cb8a2e9d9e6cf3ed2897684662"],["D:/Blog_my/blog/public/tags/情感分析/index.html","4c7e9d48a9dfeae044e12ab76088a22c"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","ba1af7798e045efa18bea6c0f215287c"],["D:/Blog_my/blog/public/tags/登录注册/index.html","855fe70a9118c5f8d0d0630e1d145ddc"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","133465a560c2998c48dba1e5feb8feee"],["D:/Blog_my/blog/public/tags/笔记/index.html","3e32d3c820fa2f02096e52727287030d"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","1ace953d5d47b435f105a8fbbaedddcf"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","f97e2b83004afd9446794d04d5764eed"]];
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







