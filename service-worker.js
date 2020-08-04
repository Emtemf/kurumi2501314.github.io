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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","8e08ab06f5bad0a7f452abc6784195ae"],["D:/Blog_my/blog/public/Gallery/comic/index.html","ccb566181bd54a8d74bbdc14257a6ace"],["D:/Blog_my/blog/public/Gallery/index.html","13b4178ecc5b3d947ff9d21660aaeaab"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","04c33794387847f255f2f35b3d3b751c"],["D:/Blog_my/blog/public/about/index.html","86dc1ba117e7203fe3218f3a0d5b4d0d"],["D:/Blog_my/blog/public/archives/2020/07/index.html","7024fe59fe67b9d1a108930a8d85a5e1"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","800c3985a0ce3368e75b796558e2042d"],["D:/Blog_my/blog/public/archives/2020/08/index.html","ab75c05086f4b65f97a5e0f4ffd0cccd"],["D:/Blog_my/blog/public/archives/2020/index.html","1277e3c3da726cb16721197f9b9cb882"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e37b44684dbbba34894bce14f245119b"],["D:/Blog_my/blog/public/archives/index.html","d10874508d36a4102ede32505d2b5b04"],["D:/Blog_my/blog/public/archives/page/2/index.html","0a4de65d8a6ff6e23c206b596093ff50"],["D:/Blog_my/blog/public/article/18e57658.html","1702c777d9780597041b0828f9e9a5d5"],["D:/Blog_my/blog/public/article/1e64d194.html","53b1cabebcb6c45cd9ef0b3a1228fbee"],["D:/Blog_my/blog/public/article/21f50898.html","4aaca6baff5388ec263a0c558cda7fa1"],["D:/Blog_my/blog/public/article/234762cd.html","4106239243da0a8947d635b1f7df191d"],["D:/Blog_my/blog/public/article/2b97b46c.html","10620879e45c51c73e8d04ae9e95688d"],["D:/Blog_my/blog/public/article/358ad26.html","d9cc1637ec334edc780fb956730979e4"],["D:/Blog_my/blog/public/article/541a8071.html","ad1de9f03a53851e9eea6b89543d9695"],["D:/Blog_my/blog/public/article/5d6f1d17.html","88e57a3f909634a085afeec6b75a3a20"],["D:/Blog_my/blog/public/article/5dcc92c.html","8e95954d8374ab1f058b64cc6ef4cc97"],["D:/Blog_my/blog/public/article/67da7762.html","f8dbf8db2423b62d42a8403e7da48d8c"],["D:/Blog_my/blog/public/article/683f20fa.html","6a1260dec92a2c2a048234a92752aeaf"],["D:/Blog_my/blog/public/article/7758c0ce.html","8f0a54f59b41c2f4fb422ec3ea3b4c47"],["D:/Blog_my/blog/public/article/7a56c169.html","8f058c0cc246007daccb8bac5b56f15b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","ad65b2b0cc362be5004b882e76ee3516"],["D:/Blog_my/blog/public/article/c386a086.html","239c6a375bf62ac5d1817a86189c66cd"],["D:/Blog_my/blog/public/article/e419ec53.html","c360b8f41cc5d989fed529fd01e24257"],["D:/Blog_my/blog/public/categories/Android/index.html","7cf134a272e69b433c72b75362246c2f"],["D:/Blog_my/blog/public/categories/index.html","879017c5966014f87ec949851a5cf95d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","aa810a1b6326a795a8a0085a7443e141"],["D:/Blog_my/blog/public/categories/后端云/index.html","390e26ea7c9a9edda0894790245f0631"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0ba35fc44a95938fa7446900b0bcd2b4"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","60e843aa2961308921732c00cc7efa13"],["D:/Blog_my/blog/public/categories/百度云/index.html","d515ab8cb4d270669fb1a8459c30fccd"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","d47bf9f6dd6bdfbfa5e2ea8114cd1cbf"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","8d9c428162cbf897a49a72c0512261ed"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","57f96edb19443f638fb3f09f62c4ccb1"],["D:/Blog_my/blog/public/music/index.html","91df0491b5aab9960a0ed09c08d750f9"],["D:/Blog_my/blog/public/page/2/index.html","a4518a8f38b4c6267bb3286d173bb790"],["D:/Blog_my/blog/public/page/3/index.html","959f62a88d2f8e5cbd2efdd39190cf93"],["D:/Blog_my/blog/public/tags/Android/index.html","bfc71d668c81ae42a8b7bf621388170e"],["D:/Blog_my/blog/public/tags/bmob/index.html","904aebaf28f8375e63cb80d54332b9c0"],["D:/Blog_my/blog/public/tags/coding/index.html","a154218dbed1cb9a522404c35bcdab71"],["D:/Blog_my/blog/public/tags/github/index.html","23e7c09cf83d2c2f7fa556fbc12d0355"],["D:/Blog_my/blog/public/tags/hexo/index.html","59d997ee45a01a36ae021b3e38c0da27"],["D:/Blog_my/blog/public/tags/index.html","03d7268b892b3cae9fc23fc37390e10d"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7cd39d582bf2dea20ce07a2100e103bb"],["D:/Blog_my/blog/public/tags/情感分析/index.html","a68012ae4df5be9cb0c52ab8a2810460"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","1891ccce7163b480b93b8d05a3f38dea"],["D:/Blog_my/blog/public/tags/登录注册/index.html","9bbc2207cde42c81b080bf53191bfd8e"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a4ef105a6e04b8f2e8b9b42ab2d5faf4"],["D:/Blog_my/blog/public/tags/笔记/index.html","e49ef603f6ae237f6951e8d5f4e2a623"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","b8d834955cd9dc6699a67e9c932f22b1"]];
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







