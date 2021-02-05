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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","789f8a538493ef3c6755301b54706146"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3c83a1b421fad05a732387741c496da9"],["D:/Blog_my/blog/public/Gallery/index.html","55c4d4c894d10c44d02df9a776539461"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2119a9d668266fe1b71f6802fabc2793"],["D:/Blog_my/blog/public/about/index.html","c91c4b9ea33ce313d672e71d1049553c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1d88d6bdcde1b05f0adc371c8e0eef8e"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","1d63d7db451f9aeb784587e02b2fd2ce"],["D:/Blog_my/blog/public/archives/2020/08/index.html","73ed2145a847594830d17997e9d43748"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","42d0e2e5f5801464e2778639718d3f7d"],["D:/Blog_my/blog/public/archives/2020/09/index.html","4319e488d4c20d5fa6d465bd21984690"],["D:/Blog_my/blog/public/archives/2020/10/index.html","ee7f54d407742385081071c7b10c0100"],["D:/Blog_my/blog/public/archives/2020/index.html","6dbada5a151b9eb9805ba5ad5ea95b03"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","09ab8b7c480daec7238eb505f02b1101"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","2d32eafceee3ba82694f01923dc64922"],["D:/Blog_my/blog/public/archives/2021/01/index.html","f65ef9bf12ce519998b6d39239946bc0"],["D:/Blog_my/blog/public/archives/2021/index.html","0f7217f5bb5ad34dfc6870d3df6e331a"],["D:/Blog_my/blog/public/archives/index.html","cdb6878c57e5ee89d5a9a022f8851248"],["D:/Blog_my/blog/public/archives/page/2/index.html","2a87aa10dd7564fc9986326e5dc099ff"],["D:/Blog_my/blog/public/archives/page/3/index.html","7d4923632a1fd74dc5202b020ada8837"],["D:/Blog_my/blog/public/article/1811f8b8.html","8726d9cd47e0838a738d3449291b97df"],["D:/Blog_my/blog/public/article/18e57658.html","9298518629d52f5bc3ab02224c403e32"],["D:/Blog_my/blog/public/article/1e64d194.html","89ae69914958581c5677d9add9f309c7"],["D:/Blog_my/blog/public/article/21f50898.html","033d37b7c3e3b8bcb39f9f7bd927b79e"],["D:/Blog_my/blog/public/article/234762cd.html","1ccd0ab70ad45f072d4349b645de0411"],["D:/Blog_my/blog/public/article/2b97b46c.html","78655f95efe5492b30badb1f1243b6e7"],["D:/Blog_my/blog/public/article/358ad26.html","aabd12d6404ea17c2e864bdd2d6e5480"],["D:/Blog_my/blog/public/article/4de36022.html","2e34f4156e2778edfe59b48b3f2d3d76"],["D:/Blog_my/blog/public/article/541a8071.html","9f6ea622bfd8077a277c2de51e59fd2a"],["D:/Blog_my/blog/public/article/54412d2c.html","c25f35872c1393576aed7c29deb137b7"],["D:/Blog_my/blog/public/article/5c1827a.html","65add9eed854e9ced48eed65be56781d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","df89b8cc81e151c716dd88a4929a542c"],["D:/Blog_my/blog/public/article/5dcc92c.html","35b881106cd78748168752ce9d88d4ce"],["D:/Blog_my/blog/public/article/67da7762.html","733ff876d3cb0f930cf06e63e759fcc3"],["D:/Blog_my/blog/public/article/683f20fa.html","51b15c0b51ab3e3cd90af40d7a289634"],["D:/Blog_my/blog/public/article/76783ca1.html","3ffad2208b6cf8edb738c202c3779502"],["D:/Blog_my/blog/public/article/7758c0ce.html","71fe3273d3c2c96c5ccb5cf963a88476"],["D:/Blog_my/blog/public/article/7a56c169.html","4f24a8e444882f810c1cdd5405a585e1"],["D:/Blog_my/blog/public/article/7d561955.html","afb10d03dcfeceb7f14d3bb50b669ca8"],["D:/Blog_my/blog/public/article/a0595b99.html","5b64a2d153d6b6f71e676c55d65daa38"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","bc4b9321b3c2593e0b981afda53169d2"],["D:/Blog_my/blog/public/article/be7f81a3.html","6f691c8d65bb8c712eff48047cce3924"],["D:/Blog_my/blog/public/article/c386a086.html","4b9586c2a014bee60bd9a1ec74d327ef"],["D:/Blog_my/blog/public/article/c9c0e075.html","106c16e47d940f944738253f41114f1a"],["D:/Blog_my/blog/public/article/d080f90f.html","b9a1fdfc95cd60e315f0b4a2f19700f4"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","5a8ae54736efbbf558668d1b328bf475"],["D:/Blog_my/blog/public/article/e21e4e82.html","7c984b7f6b957b2b096f4f8f1baaf215"],["D:/Blog_my/blog/public/article/e419ec53.html","ed386e1592b63406bba1501c83b07b15"],["D:/Blog_my/blog/public/article/e4efebfa.html","58e251d9850ba95317688f98bcc3cbfb"],["D:/Blog_my/blog/public/article/eb0fc959.html","e002c5010582ee929d692e92d5ab7b6c"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","a3b1f27fdcf91e687f6c55d98abb96cf"],["D:/Blog_my/blog/public/categories/Android/index.html","74ab2c7bc9d350d12900f0c25c167286"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","9f098704ac4527977c12cee9b4790a31"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","365ad889793ccf62b5db65e8a6cdd2a4"],["D:/Blog_my/blog/public/categories/index.html","e177332ed665d5df5e07dd274fcf9d87"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","e3ae8d009f5eed5aad8d03c5a4fb57cd"],["D:/Blog_my/blog/public/categories/后端云/index.html","097687e55e529741228865c9b20c3b14"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","c99cd6faf71e38fc905dd429d47f63ce"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","2c12e4d9fccf714b32d78b9cbd95b00b"],["D:/Blog_my/blog/public/categories/百度云/index.html","3869d79d3766df8e88a01798d605505c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","c56063e2c9f7a82a289fefc169768795"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","fd30e76aa5146a278b941a6c92030c84"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","6b22499993e1ccf840e7626fa944bc2d"],["D:/Blog_my/blog/public/music/index.html","6c6079ee3c36a29b4b4ef9f71803bc46"],["D:/Blog_my/blog/public/page/2/index.html","3705cbe2c2719dc1c57e4abef65b6132"],["D:/Blog_my/blog/public/page/3/index.html","17720aff6616778124dd7816045b0550"],["D:/Blog_my/blog/public/page/4/index.html","fc559b1ae7b4e937b3d8a1830c38dfd4"],["D:/Blog_my/blog/public/page/5/index.html","eb95b2a0c492c8bfc12756fa3447da24"],["D:/Blog_my/blog/public/tags/Android/index.html","1118388b60c5856cac795b5848e96e9b"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","3294f450b3cedc96b1b1d3699727cb46"],["D:/Blog_my/blog/public/tags/Java/index.html","f807b86dc0f2206e02dfae951df3d27d"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","bd0f7212c8819fa375508b435240342e"],["D:/Blog_my/blog/public/tags/bmob/index.html","67f7366b569cfcf51955ebf780ccc939"],["D:/Blog_my/blog/public/tags/coding/index.html","5cfe129de88917e7285954e1b743dbe6"],["D:/Blog_my/blog/public/tags/github/index.html","6ef0276479ac21710e8f7d28baa8ae3c"],["D:/Blog_my/blog/public/tags/hexo/index.html","84def665f340858235d6503a7080c028"],["D:/Blog_my/blog/public/tags/index.html","b00b085cdfbcab77e06aab13cad31a2a"],["D:/Blog_my/blog/public/tags/leetcode/index.html","fb0d2c500983dc9f8553655a46ede29a"],["D:/Blog_my/blog/public/tags/情感分析/index.html","0a98a52154c89e5026be9d301f76aa5b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","82501eca789713e88d4d4b40c478daac"],["D:/Blog_my/blog/public/tags/登录注册/index.html","ec15a946810fcdf3d314ffc270ba65e8"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","5946b4630744b2ef9b16f93bd9354af3"],["D:/Blog_my/blog/public/tags/笔记/index.html","cae567be006aba1b584564a3377e0867"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","822e05ca571dfd7c98c1c8a6a99993eb"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","9bd4211855525bfc4d63aded97ef4882"]];
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







