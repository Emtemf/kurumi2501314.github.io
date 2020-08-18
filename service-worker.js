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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b508c97e9fb219e922c04493b7e42e56"],["D:/Blog_my/blog/public/Gallery/comic/index.html","274e69b7a1be7b5b642c71cf61dc5e35"],["D:/Blog_my/blog/public/Gallery/index.html","17a6c5201d5e78160264d1e93d29a417"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","219fe73bd6f9a1a15debf5caff3c540c"],["D:/Blog_my/blog/public/about/index.html","dc3ea9dfa8bb04cef0eae916a4c0b5c5"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1675332cb48cc87bc4edb47bdac7e003"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","44d47a2fcadae2f2ed97fb8a06837ad8"],["D:/Blog_my/blog/public/archives/2020/08/index.html","aef5ae0c1aa365c91aeb9c656f9cbac0"],["D:/Blog_my/blog/public/archives/2020/index.html","150a8a02614388838e95f81d4a8a4f68"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","2f450bac39ad2845de401b01c6a0e4e5"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","a654c02ef8e88e59fa8da43325ebf6fd"],["D:/Blog_my/blog/public/archives/index.html","33477ec655c095c5b0ee61326e091a25"],["D:/Blog_my/blog/public/archives/page/2/index.html","d981db0f5e8023ea57176f34951325eb"],["D:/Blog_my/blog/public/archives/page/3/index.html","80586fa5ff4b7c11ee6342e75871b53e"],["D:/Blog_my/blog/public/article/1811f8b8.html","9a58e0b9064688d75c0c11a016d259bc"],["D:/Blog_my/blog/public/article/18e57658.html","e9c017b5d94317ee754b20382abab560"],["D:/Blog_my/blog/public/article/1e64d194.html","8d6f463e48eb23dfcb2bb8cad5e7b221"],["D:/Blog_my/blog/public/article/21f50898.html","251ee1dfcc808b647e5ccbef63968bfc"],["D:/Blog_my/blog/public/article/234762cd.html","3736bfb81a1438b76b7ad9ef5823c724"],["D:/Blog_my/blog/public/article/2b97b46c.html","2ad2b18a3214cb0e78d6299045cdb838"],["D:/Blog_my/blog/public/article/358ad26.html","38200227190358c71edb86568771192d"],["D:/Blog_my/blog/public/article/541a8071.html","baa5f296718aeedd116237cdebfeb370"],["D:/Blog_my/blog/public/article/54412d2c.html","8c6c51f4e617ba72169129a9832dbfc4"],["D:/Blog_my/blog/public/article/5c1827a.html","fb302111aeb568cc77e600ae59bfa904"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a480e3d322e2e3a16be8c8c8e7a3adab"],["D:/Blog_my/blog/public/article/5dcc92c.html","39df31be66c21d98a56e68c91ab8ca87"],["D:/Blog_my/blog/public/article/67da7762.html","98510a7d3e98948d2b9fc0e9160aef60"],["D:/Blog_my/blog/public/article/683f20fa.html","32b8da11dc9842924c66f3e8a5c2a2d7"],["D:/Blog_my/blog/public/article/7758c0ce.html","0dacf08cc2f5fae7f3d07f9de932f4f6"],["D:/Blog_my/blog/public/article/7a56c169.html","1c0452abb2d44b53f0cd3f4061ae54a9"],["D:/Blog_my/blog/public/article/7d561955.html","6718576c0ec04ad8725a7978158c4560"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","185980b6a24d69292e3d075381ca3b54"],["D:/Blog_my/blog/public/article/c386a086.html","2353bd82c992cea7a09ecddb844c2867"],["D:/Blog_my/blog/public/article/d080f90f.html","372712b5e858aa0890be42eeed25afd8"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","afaf5b6f43a13b15e7937871393b6dde"],["D:/Blog_my/blog/public/article/e21e4e82.html","3e838db028088280174549b98c4bb04d"],["D:/Blog_my/blog/public/article/e419ec53.html","0f15236cee6015340cda41c2a63d8ca5"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","8bfce83438621714a1eb154084aeed10"],["D:/Blog_my/blog/public/categories/Android/index.html","968ce78b52005ae2a0fa7d3f94f6e466"],["D:/Blog_my/blog/public/categories/index.html","34431c5b9119cecea819191ba7247ca7"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","3cd2b5ad33d3d9513caccfe857218c3d"],["D:/Blog_my/blog/public/categories/后端云/index.html","a137a7ad41e69c1fc7324efaa51546c3"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","bcc6991f289b8ee11da1876b5a23ddaf"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","c449561a53d076c5e8c6ba876bc4f8b2"],["D:/Blog_my/blog/public/categories/百度云/index.html","019b1d842a65bc0190f398a67e21b4cb"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","97e9532a81d6f6c9dbee2733031108fe"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","953707a7489a387f35bbcbe09b0ca5cf"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","b8521c8443e593a2d325ea8caa7d9f09"],["D:/Blog_my/blog/public/music/index.html","818c53452cf701efb57e1121a4b52a9a"],["D:/Blog_my/blog/public/page/2/index.html","82a3dbf9d6a682600595dd41d0ec86d4"],["D:/Blog_my/blog/public/page/3/index.html","71dae3c7dfbbaedfa681e1d28bc8a827"],["D:/Blog_my/blog/public/page/4/index.html","1f697d81722504559393f38d8d70e7ac"],["D:/Blog_my/blog/public/tags/Android/index.html","28baf1713977a774b0cfacf6d0f41d24"],["D:/Blog_my/blog/public/tags/bmob/index.html","496f5fcadab98d3a954c3e4f79aabb36"],["D:/Blog_my/blog/public/tags/coding/index.html","b047d1305808af5d93cacd59a37f0bf1"],["D:/Blog_my/blog/public/tags/github/index.html","7d0bd8e028a7ec2eed8556d6f5c7e766"],["D:/Blog_my/blog/public/tags/hexo/index.html","b438d3e71fdd1b6062ece5c2a34c0917"],["D:/Blog_my/blog/public/tags/index.html","c0557149c24195eaff0090a9c787ab5f"],["D:/Blog_my/blog/public/tags/leetcode/index.html","a0523fcbfcb4fd33a32127bac8a9fbd0"],["D:/Blog_my/blog/public/tags/情感分析/index.html","918b5956e66deb30a9704ff7749851f6"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","758ae6fc8cfcedf5a916488265caef1e"],["D:/Blog_my/blog/public/tags/登录注册/index.html","968e30ebf767202e23591d171902382d"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","7e11393d5591eb5ca4f0fe2a042ee55a"],["D:/Blog_my/blog/public/tags/笔记/index.html","fa782e93723133d027226c1d81eb4fd6"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","ce787294fffab74ac9c4957acd3f3b42"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","442e88256ec68b53f15cf1ab54c9c9b1"]];
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







