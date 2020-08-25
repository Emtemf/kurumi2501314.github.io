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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","ab58cdaaccbd47ad4fa41b4d2203865d"],["D:/Blog_my/blog/public/Gallery/comic/index.html","1cff198f756e8a3f1676ffa01dea2d59"],["D:/Blog_my/blog/public/Gallery/index.html","d1317b86bd13f4c5d862cec931dd10dd"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","253da98e081fa9cacc4257b6a543aae7"],["D:/Blog_my/blog/public/about/index.html","f674821002d9f88de9c5334c084f23da"],["D:/Blog_my/blog/public/archives/2020/07/index.html","2f691f23265db877ad83a6a59a65d2c4"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","17ff097de3ce4cd2a09659be41ce2d49"],["D:/Blog_my/blog/public/archives/2020/08/index.html","b877babe0b709ab268a9ef661259be12"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","1bd740c3072e5a13edd2c96329227c99"],["D:/Blog_my/blog/public/archives/2020/index.html","caa107a1236c5552faf92e069c2d1ba1"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","4a2cb589d211f6e330868c87d014f73d"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","5eefc4fefb4a1da61c430b905bdd387b"],["D:/Blog_my/blog/public/archives/index.html","3681da017554b586b086beedcf3462a1"],["D:/Blog_my/blog/public/archives/page/2/index.html","3f2a95a8c5ab8392ae6cfb282229d5de"],["D:/Blog_my/blog/public/archives/page/3/index.html","5de1ed98464945ad4a0be124bcd8a489"],["D:/Blog_my/blog/public/article/1811f8b8.html","55b16fb2154df60ec9d7e0593eceac00"],["D:/Blog_my/blog/public/article/18e57658.html","ab09c413a8ce0fcbfe569bb4b4a47c94"],["D:/Blog_my/blog/public/article/1e64d194.html","1569cf7e2830e4d7aa44eda112aef9e4"],["D:/Blog_my/blog/public/article/21f50898.html","277f1ccbbca11e739e399e4ed15f32e5"],["D:/Blog_my/blog/public/article/234762cd.html","16045867b84c854ccd3d41fdda3618ed"],["D:/Blog_my/blog/public/article/2b97b46c.html","1b6b688d137480e49fea4ed49194a11b"],["D:/Blog_my/blog/public/article/358ad26.html","dd6d675fd1aea7b79b4f77acdde22051"],["D:/Blog_my/blog/public/article/541a8071.html","9e930fa7d41579b365aca0343cacdba2"],["D:/Blog_my/blog/public/article/54412d2c.html","3333f155e07f529ff2c5968de8cc2de9"],["D:/Blog_my/blog/public/article/5c1827a.html","ae70fa1ba59bc0b23c5ce0b27d9946a3"],["D:/Blog_my/blog/public/article/5d6f1d17.html","c48747af870b1598bc49f75d43d021fd"],["D:/Blog_my/blog/public/article/5dcc92c.html","a993ea8573255bfe495e2104b720e251"],["D:/Blog_my/blog/public/article/67da7762.html","a9a64bfa235b55681f60680229c79ed2"],["D:/Blog_my/blog/public/article/683f20fa.html","8e52cf89d9db5a87ee904efa77dc3eb6"],["D:/Blog_my/blog/public/article/7758c0ce.html","8d89c82b4c690a77d58259319f7fddc2"],["D:/Blog_my/blog/public/article/7a56c169.html","ed2040e86080c5abd0ba197785a71088"],["D:/Blog_my/blog/public/article/7d561955.html","9c4f831932f09f165713007ddac376f5"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","ddf57b8cb625393831dea1d5ccfe4ea9"],["D:/Blog_my/blog/public/article/c386a086.html","1ac5925f5c1f86b04e3a8fffa4d492e7"],["D:/Blog_my/blog/public/article/d080f90f.html","7e0e11d29c38ae0f6ea106a363d4ad13"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","a05a6f11d841527a129860a16355a166"],["D:/Blog_my/blog/public/article/e21e4e82.html","5d0e47c42a2231bb01250c6b6ed2f781"],["D:/Blog_my/blog/public/article/e419ec53.html","e7f3de3cf0b787384290affc78d10eb1"],["D:/Blog_my/blog/public/article/eb0fc959.html","7c5836bc4e650e05ddc96d600269b6b5"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","dda3ae5b1b2060e08bce014597ab70ba"],["D:/Blog_my/blog/public/categories/Android/index.html","4cc087b5cf50355816a40fae6b3318a2"],["D:/Blog_my/blog/public/categories/index.html","035df5168bcdcaa5880d511f14d9b7dc"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","36a5924923afa1793041b0c9ff00d2b9"],["D:/Blog_my/blog/public/categories/后端云/index.html","66ab2afc59664018f8168214f42aa850"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7ea0fe4b03b463eaaa9d2fcb66e5e241"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","8eed06b92efeae5ee82e136cc3ee397d"],["D:/Blog_my/blog/public/categories/百度云/index.html","ff089149b156045cc50d2d4864b2a874"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","64c08a323a71ac68da64ab2850545ebd"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","af836b62853f49e148343c3cc4bf971c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","b98fa8a81205f7e9c180fec819b5040d"],["D:/Blog_my/blog/public/music/index.html","bcd5e769cfc954a9c2e9c79544ee8886"],["D:/Blog_my/blog/public/page/2/index.html","eb46b24e5273f0d50ce8c1f0f407b385"],["D:/Blog_my/blog/public/page/3/index.html","4b112dafccf530388a81995630231fe3"],["D:/Blog_my/blog/public/page/4/index.html","6786f31bde4ee479abffd077894be954"],["D:/Blog_my/blog/public/tags/Android/index.html","f73f2143a007ddf0a1709a8a6ac1413b"],["D:/Blog_my/blog/public/tags/bmob/index.html","7064c1551d60e6f5278d10819b9c7d8d"],["D:/Blog_my/blog/public/tags/coding/index.html","2335aa082ca61764b665748214390d32"],["D:/Blog_my/blog/public/tags/github/index.html","969ae7b7c05f2511ff9c7be5f84a6f1b"],["D:/Blog_my/blog/public/tags/hexo/index.html","df238e585c5d084214278d85f4469f84"],["D:/Blog_my/blog/public/tags/index.html","0790e770d54652e09f9b965406fae284"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7ad9eb5a6422f07b24cb0e1adb5253b3"],["D:/Blog_my/blog/public/tags/情感分析/index.html","3a8e33a365326e5c557404361a5fb965"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","47294253b009c34953f4b681810d5951"],["D:/Blog_my/blog/public/tags/登录注册/index.html","03e1739e40056aa8e1c3e46ed9de7b0a"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","6d1fb430c3f23f0184c5323257ab219a"],["D:/Blog_my/blog/public/tags/笔记/index.html","e5f7112230faab190c671bd0493e6b3d"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","bf9deaae876819d6e6ea39bc9956b7dc"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","d577b7968a692653e7ea0f3ccda6f61f"]];
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







