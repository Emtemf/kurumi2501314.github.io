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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","4a95b111a3288e9c5791f496b982e9fa"],["D:/Blog_my/blog/public/Gallery/index.html","5d98d540ebb72d434e3e4e8dc676eaf9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1f1c4e3f4796e3fa367c4f2a865e8648"],["D:/Blog_my/blog/public/about/index.html","6ed778a68f5bab92f86a1b3c06df4a1c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","273912b3346774d1b9d1d843625cd743"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","37b618e35c1a1a31d12b04e317d27ac0"],["D:/Blog_my/blog/public/archives/2020/08/index.html","0e23d13c1651ecfe4668c779a0ee734f"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","28991ebd7da5fd683f018574ddc1d306"],["D:/Blog_my/blog/public/archives/2020/09/index.html","d832138d273782654850342be17d8772"],["D:/Blog_my/blog/public/archives/2020/10/index.html","74440a02e3f2f0fcc0ba5949ad83f7b7"],["D:/Blog_my/blog/public/archives/2020/index.html","d5713c21bee574b8cf514fbb8df320f8"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","50a54346a8912e7b212bd632ed082fd4"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","b023650879d03630861f79ff74a01008"],["D:/Blog_my/blog/public/archives/2021/01/index.html","ba8b2cbf73eafdb0d9996cd257a30865"],["D:/Blog_my/blog/public/archives/2021/index.html","08beb8a2d28da5502d1f95e23764f6a2"],["D:/Blog_my/blog/public/archives/index.html","af094c922b03ecd00cc11c504bda36a1"],["D:/Blog_my/blog/public/archives/page/2/index.html","1c064585a4156f94cc2f82b4e7afa165"],["D:/Blog_my/blog/public/archives/page/3/index.html","5af2fb17be193acfa85be8dbc5c832ba"],["D:/Blog_my/blog/public/article/1811f8b8.html","ea155aff0c214a16360b1a0b80c73a66"],["D:/Blog_my/blog/public/article/18e57658.html","a28b35b23c9c67bd51313585586f5878"],["D:/Blog_my/blog/public/article/1e64d194.html","eb584191c7a4de44c3468ad1ed1b9cd1"],["D:/Blog_my/blog/public/article/21f50898.html","420a489a4b8b31640ddbbf3c5504e405"],["D:/Blog_my/blog/public/article/234762cd.html","7b81f331dd13c14f84bb110924be6445"],["D:/Blog_my/blog/public/article/2b97b46c.html","c5f9f606f0f496ac496865f30a3b162e"],["D:/Blog_my/blog/public/article/358ad26.html","632fbb5d11d3c64cec4244f8ca552e33"],["D:/Blog_my/blog/public/article/4de36022.html","5424ee96a2a15cff06be6d576548adf7"],["D:/Blog_my/blog/public/article/541a8071.html","47c90ad98a7bd1610a2fd7f3ea8a6220"],["D:/Blog_my/blog/public/article/54412d2c.html","82b435906587a8f7c676571e95e212ef"],["D:/Blog_my/blog/public/article/5c1827a.html","2df0ffd5873148dc2395b08ad0a277ef"],["D:/Blog_my/blog/public/article/5d6f1d17.html","d7f1bfc1e238becd05c9fcdc848b8001"],["D:/Blog_my/blog/public/article/5dcc92c.html","f74ab3c0cd53925cc2aad6e08ab5cca9"],["D:/Blog_my/blog/public/article/67da7762.html","4b2b35ef3b1fc2b6a6c6654b08c3de2d"],["D:/Blog_my/blog/public/article/683f20fa.html","b0d3f293dddcd8435e8fe46560c0df2d"],["D:/Blog_my/blog/public/article/76783ca1.html","83856834975286c9751428455b79fbb0"],["D:/Blog_my/blog/public/article/7758c0ce.html","8d160bda15388063824ab3a658b59c79"],["D:/Blog_my/blog/public/article/7a56c169.html","bf1c19c58b340a809a14cff16dbc38c0"],["D:/Blog_my/blog/public/article/7d561955.html","b7269316cbe6939143a38bb3405f30e5"],["D:/Blog_my/blog/public/article/a0595b99.html","87fff4048390d448b913dcb3994c2804"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","efc8ad36375e870c0944d746864aa634"],["D:/Blog_my/blog/public/article/be7f81a3.html","851e1e566e03bff47b3968bd3097f633"],["D:/Blog_my/blog/public/article/c386a086.html","506fdf9dbb00d18989ee2ce55457cf40"],["D:/Blog_my/blog/public/article/c9c0e075.html","31f371cddbcc90eed868bc24a26a8022"],["D:/Blog_my/blog/public/article/d080f90f.html","c231ea7f1ed44b7df7f86cf27d8adf93"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","35e6a30cf108a0673d5ee17bb237fbbc"],["D:/Blog_my/blog/public/article/e21e4e82.html","cbe04877e8257fefc6d049fe826e8c07"],["D:/Blog_my/blog/public/article/e419ec53.html","0eab6f28875e2b0c91db52c4ab2efd93"],["D:/Blog_my/blog/public/article/e4efebfa.html","64a82ea9a31ef766d870fdfd8bdf9962"],["D:/Blog_my/blog/public/article/eb0fc959.html","75fe06cdcdb603b796a04e70c52e62f0"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","3baf552ee8e1e0501dc62e859b411189"],["D:/Blog_my/blog/public/categories/Android/index.html","392998d39d2725088a14e7a35f173a9e"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","043fbb3c0dbdcdfcd2a4dd06889b5d68"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","4b27121201f008c240d2aff2dcf92ee1"],["D:/Blog_my/blog/public/categories/index.html","c337d537fcd96fdee5e8cc43ddc05f5c"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","a9eec5c7e12af022ae6fc2ce22f17c43"],["D:/Blog_my/blog/public/categories/后端云/index.html","fa4ef33a7577ca59a3825c3515a42cee"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","78b551c9c1c022c25f005184fd503d33"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","528ab2f8f50ce16ac9748d8fe35f4689"],["D:/Blog_my/blog/public/categories/百度云/index.html","78d7b3fc32cc7e157ecd4fc876ccbd39"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","4bb6ea4869e261bfa410ea24847345cc"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","b03ce1502489f379d210a20133c23b35"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","9e2f91a64d2397502fdb99e61642fe62"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","e2b8c6fcb40205cb064a7b1bcf2192f8"],["D:/Blog_my/blog/public/music/index.html","7a98797fd206854c8f748aa91e794ea8"],["D:/Blog_my/blog/public/page/2/index.html","52cf0a900a078b6166208c74a68d9301"],["D:/Blog_my/blog/public/page/3/index.html","123cce0010a7060ddd899e4e047a73b3"],["D:/Blog_my/blog/public/page/4/index.html","d7d87ac19f3c9fc2cbcd48c8b73c198e"],["D:/Blog_my/blog/public/page/5/index.html","5d67ecf9bb9b2bda0d6eef58a9a33aba"],["D:/Blog_my/blog/public/tags/Android/index.html","f902dc137059a2c291aaca88530ff1c0"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","427a24c19de00c07c6b94877eba41554"],["D:/Blog_my/blog/public/tags/Java/index.html","2a124da630080ee30de653f86f6c36e0"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","6976f83cd5c34edf55457cf955a5f474"],["D:/Blog_my/blog/public/tags/bmob/index.html","574034af683724f21026fe8cffc263a7"],["D:/Blog_my/blog/public/tags/coding/index.html","7b370c096ecb3c42654a0f481e03a2f5"],["D:/Blog_my/blog/public/tags/github/index.html","840e95822baf5580e3416b3ef82e9df1"],["D:/Blog_my/blog/public/tags/hexo/index.html","43f2b93979c6bdc9a753083d25b017f2"],["D:/Blog_my/blog/public/tags/index.html","652595c5ec93512478d4e141f28a0161"],["D:/Blog_my/blog/public/tags/leetcode/index.html","3885f57bcb62a48953a1eaaefd390da2"],["D:/Blog_my/blog/public/tags/情感分析/index.html","a631e42e7d0e99948bcc9eae0dbf11cf"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f180cbdf5900246431fc9d92871de2ba"],["D:/Blog_my/blog/public/tags/登录注册/index.html","eda7cd22b937a3abc99d18aed07aeeb1"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","0e97643948fc0b43fb5cac9a1c77f30f"],["D:/Blog_my/blog/public/tags/笔记/index.html","240a02d4032f3550f68d22b307c5764d"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","138c40b86a1b059f7dc8c188855ec460"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","cc2dfe8182f42902e5bc61e09106d1d3"]];
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







