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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","43989c5569c0cb8a1d56db15bc2eb1c9"],["D:/Blog_my/blog/public/Gallery/comic/index.html","d5ff2c7315c798d0a0e01390cb9ca984"],["D:/Blog_my/blog/public/Gallery/index.html","d63cad63144ef8587d4d2b7c6fa43d10"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","50883c3906c50c3b3cd8bc083a557a27"],["D:/Blog_my/blog/public/about/index.html","18dbb59f8426719e4fc68c17aef0347c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","e9ac58bba4a704fa015119963cbacde1"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","e6cef57cb98e864d00fbb7d4bc3cfcaf"],["D:/Blog_my/blog/public/archives/2020/index.html","9710bd0daf0ff0742e2ac8ea377d98e8"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","1d5bb150e8cae12ce775715676f051c3"],["D:/Blog_my/blog/public/archives/index.html","ea7619ffa0afb919fe8a131e100ce484"],["D:/Blog_my/blog/public/archives/page/2/index.html","6f024b025d9da4c16ab2aeb9b353dc85"],["D:/Blog_my/blog/public/article/1e64d194.html","37030d1ac352e6a3fa3b8c86eb5b8925"],["D:/Blog_my/blog/public/article/21f50898.html","07e86fd27167a633637621f162a3cd9c"],["D:/Blog_my/blog/public/article/234762cd.html","cde2c4fdf28bad3fe3c54eb16a357352"],["D:/Blog_my/blog/public/article/2b97b46c.html","65d3bbf81248547a8a0f3b372da15ac4"],["D:/Blog_my/blog/public/article/358ad26.html","303ebba8e20ca119da6eeeb7b344e85f"],["D:/Blog_my/blog/public/article/541a8071.html","61d63b1bbd969bf8bafede06b48fe863"],["D:/Blog_my/blog/public/article/5d6f1d17.html","1eb28d49730ee087af58e58c83ef671c"],["D:/Blog_my/blog/public/article/67da7762.html","df6e7de5def1ef808f906722e50fc7f2"],["D:/Blog_my/blog/public/article/683f20fa.html","55d3dc9c8b8bb46aa3b66bcae3b2846e"],["D:/Blog_my/blog/public/article/7758c0ce.html","9c5323e53813264ef39056f7f3e10315"],["D:/Blog_my/blog/public/article/7a56c169.html","d1cfa09ab8b5e5c44ec1227ddf089c06"],["D:/Blog_my/blog/public/article/c386a086.html","afa7da23d2be3de0a000bf308e1d4824"],["D:/Blog_my/blog/public/categories/Android/index.html","2f229904e058979c5a676316d78a5c0e"],["D:/Blog_my/blog/public/categories/index.html","f4d269325873687da1c67f9b4df32dfb"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","3fe1b573d7ee230399e6290ca2f53227"],["D:/Blog_my/blog/public/categories/后端云/index.html","56b9f7a16307af4b4183fe84c61af310"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0d2ecf23f8a0681b288f7d062227d9a4"],["D:/Blog_my/blog/public/categories/百度云/index.html","7f90e8f3f73b6a7e499a54938e2f106c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","8a9f03ed889ce0e0e2e9b3298098067e"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","2ddccbda354e9665fae24e3c4d39567c"],["D:/Blog_my/blog/public/css/touming.css","c733c8707336df28af63b6a9ded04a6a"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","74cc5af1ec6b9895215f93ae8ba71c8b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","fc024067233675bc6f91c908e626599d"],["D:/Blog_my/blog/public/music/index.html","2c2ecbbb10355ff68a71d547723f22e3"],["D:/Blog_my/blog/public/page/2/index.html","8282c7a440b154d9827dcafe05a4d9ad"],["D:/Blog_my/blog/public/tags/Android/index.html","9a7e0ec14eb0339fc840ee11852f5a06"],["D:/Blog_my/blog/public/tags/bmob/index.html","3459db93737c9573c729481a9a82d5c4"],["D:/Blog_my/blog/public/tags/coding/index.html","eccb389b8ed5355850f2ad51226ff9b1"],["D:/Blog_my/blog/public/tags/github/index.html","4635009b0caa81556b995f7e551060ac"],["D:/Blog_my/blog/public/tags/hexo/index.html","2ff9cc0e7b35ba499253d22665120fbe"],["D:/Blog_my/blog/public/tags/index.html","f66b37cf60f7922e0a8d96a5886a3189"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0ea2022791655a9265c6613110557788"],["D:/Blog_my/blog/public/tags/情感分析/index.html","fbc6dc6faafe78c7bcf2cf9dadb2b61c"],["D:/Blog_my/blog/public/tags/登录注册/index.html","8a4c0bd45397f990de98db4ffad98f68"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","8ed8f205af0001fb5386046e3e1db61d"],["D:/Blog_my/blog/public/tags/笔记/index.html","8679f94ff6aa561517116589a3a3957c"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","e47ef1701c7d810ad8e371b404da4b10"]];
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







