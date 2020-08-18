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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","6b3aca347af29bd8343c4f60947117f0"],["D:/Blog_my/blog/public/Gallery/comic/index.html","771e35f5de82e0433cb0228fbbc91543"],["D:/Blog_my/blog/public/Gallery/index.html","22e679e005143e571d1b7c640597b8a3"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","203598834a016becbc49ab4cc3571499"],["D:/Blog_my/blog/public/about/index.html","537fe6c6c007bc52a479cdb3c9e0a44d"],["D:/Blog_my/blog/public/archives/2020/07/index.html","e0a167d3b7673c8e61c26683ee9e93a1"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b54e42b38534a060dcf5847ecfa49bdf"],["D:/Blog_my/blog/public/archives/2020/08/index.html","6d235c1bb17d9f585b7792c27efaf453"],["D:/Blog_my/blog/public/archives/2020/index.html","a13b9995fde4ebd6dd3c4787ee537a31"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e41a5fcd23fc0a4399351ebbbf9a9ad4"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","9de61ce766d5f8e5decccca246395623"],["D:/Blog_my/blog/public/archives/index.html","817a9ca0a5da9f948d61666b1595f8bd"],["D:/Blog_my/blog/public/archives/page/2/index.html","69eec47588b91ecbd1ff77fdab46ae1b"],["D:/Blog_my/blog/public/archives/page/3/index.html","e96e9f96ce2a20a9c6c8ab1f4d6b91ab"],["D:/Blog_my/blog/public/article/1811f8b8.html","9f2eb4530967caa1f52ed16738eb6844"],["D:/Blog_my/blog/public/article/18e57658.html","e879ffa6e524dddbe6f2a9e7496caaa3"],["D:/Blog_my/blog/public/article/1e64d194.html","bac1954eb4085047ae9369b3fc071084"],["D:/Blog_my/blog/public/article/21f50898.html","afa5caaf7b6f6cf15bd3b769cb551776"],["D:/Blog_my/blog/public/article/234762cd.html","4f78c364421d638dfdce125d8ff52285"],["D:/Blog_my/blog/public/article/2b97b46c.html","f798d7f98736947163270a2bc261bf0f"],["D:/Blog_my/blog/public/article/358ad26.html","2db7958a636bdfd4f88334b829869c01"],["D:/Blog_my/blog/public/article/541a8071.html","e70a3bc60e6d7e78e879133120da9fef"],["D:/Blog_my/blog/public/article/54412d2c.html","66b2c3806576afab848323320dfa8c59"],["D:/Blog_my/blog/public/article/5c1827a.html","fdf0fcbb6fbecaddc3a6f0fbc71218fb"],["D:/Blog_my/blog/public/article/5d6f1d17.html","19f930aad82b607c981f23d47eb21861"],["D:/Blog_my/blog/public/article/5dcc92c.html","4d3b9fedd6a485a1bcfbbd60aee1cb4a"],["D:/Blog_my/blog/public/article/67da7762.html","5f4ffc4d7c12e396a4f317ddbc40504f"],["D:/Blog_my/blog/public/article/683f20fa.html","0733ea2029db9ca3a0877b58662a04c9"],["D:/Blog_my/blog/public/article/7758c0ce.html","4d0d398d68e04bf720ebac98e568261f"],["D:/Blog_my/blog/public/article/7a56c169.html","dc72c56117e0570fe2895cafc3628ce8"],["D:/Blog_my/blog/public/article/7d561955.html","0cf52e786488c3bf355bfd9c5a60461f"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","2af0f6270e75853a61c8d304e485e1fc"],["D:/Blog_my/blog/public/article/c386a086.html","2636ff02a0de11b928950b11c51c9f93"],["D:/Blog_my/blog/public/article/d080f90f.html","efdac325ee5a79fe253851dbc39a665d"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","a2a4bd53d712acc229c99c32954f8a14"],["D:/Blog_my/blog/public/article/e21e4e82.html","f74a8cad9f25fe7bf618c1592629bcb7"],["D:/Blog_my/blog/public/article/e419ec53.html","31530f57ba6f416d767bde886bbf01f0"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","23fdf1606eaad00bb4393e769aad882a"],["D:/Blog_my/blog/public/categories/Android/index.html","ee88ed1ed4595edba59c212d889c95a5"],["D:/Blog_my/blog/public/categories/index.html","706854a985c29c2d7a7966cc7f820c1b"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","c8a78a4c9336f8c8f9007044cb70f93a"],["D:/Blog_my/blog/public/categories/后端云/index.html","e7da442d6ad737b975c26063227acae3"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","2bd6ec41b0320fafbecc1b7fba6be113"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","b52aa0514be64ab00860fbf08cc54be3"],["D:/Blog_my/blog/public/categories/百度云/index.html","c9bbba66a596ea9908c1e9c5f2ed7e8c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","6c80624b5ce6e15956a684a5a6a3ab02"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1e85dcc481dd31e920ffc0053dadb254"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","254303c251352415c540b6bb508e95a1"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","5f0870fef85342215359b0d7350b1ffc"],["D:/Blog_my/blog/public/music/index.html","bc44df6a716e0112f387b78da56a620a"],["D:/Blog_my/blog/public/page/2/index.html","42588673f8bfe3cbf6ec93fa7b99721e"],["D:/Blog_my/blog/public/page/3/index.html","1bf1724ca3ed56a5b6ca0e38999aa871"],["D:/Blog_my/blog/public/page/4/index.html","cab3dac39bcc708a6bad6caa9f7d7e1d"],["D:/Blog_my/blog/public/tags/Android/index.html","707ec18ae1aa40b4e85adcadda555579"],["D:/Blog_my/blog/public/tags/bmob/index.html","5e27ec22c7ac53d73e479b92de0df5c3"],["D:/Blog_my/blog/public/tags/coding/index.html","21d3ef423bb00b631b5da4a2c6ad5738"],["D:/Blog_my/blog/public/tags/github/index.html","a31e96e82be5511a158165e0c9eb86a7"],["D:/Blog_my/blog/public/tags/hexo/index.html","2d9adc66e394ea6f9c4c6065a9ad7ff8"],["D:/Blog_my/blog/public/tags/index.html","dfa413c220a3de8f68603083ff9dcdb6"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7ca6e52e6fbdc487175b291e877b4422"],["D:/Blog_my/blog/public/tags/情感分析/index.html","4cfdda0cadce39f4ffcdb8785a9bff9e"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","69f51aa8ad0be772191076b0a70b2503"],["D:/Blog_my/blog/public/tags/登录注册/index.html","60727fa99a4db4a2e41cb71813842323"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","c44c6d495b84297ca7e15b4cf5c8bc91"],["D:/Blog_my/blog/public/tags/笔记/index.html","4965d587f4297b9c1d1f57bf546d4867"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","3c2858264937d7c94fdf354343cc2fb4"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3fe6989f461bd6f8b79a8088c071ebd9"]];
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







