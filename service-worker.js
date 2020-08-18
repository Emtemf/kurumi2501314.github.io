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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","202a68977a1c8eb644fa62d8061588f3"],["D:/Blog_my/blog/public/Gallery/comic/index.html","c19986b875b082334839a26ce0c7408c"],["D:/Blog_my/blog/public/Gallery/index.html","e745367119389dd209b611f1fa567011"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","874eda1f0d53af6fa52540be8228fa2a"],["D:/Blog_my/blog/public/about/index.html","199aa4af1c85de871043e4ece3f3f0d9"],["D:/Blog_my/blog/public/archives/2020/07/index.html","bc3e47dfab44ee31ac8866ea6f33fd94"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","5270b58c0dc99d11cf36b96e78cfd5d3"],["D:/Blog_my/blog/public/archives/2020/08/index.html","304264eea3bfb1c7978d0a43d3d2c148"],["D:/Blog_my/blog/public/archives/2020/index.html","da35167b3f14da132317118fa6d7b605"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","9756c84c1ea1bc1675650c56b1f8e20f"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","6d06864132ebbef1530cc16e2377be69"],["D:/Blog_my/blog/public/archives/index.html","e3d100f4e5afc67dfdec3489e2e522c5"],["D:/Blog_my/blog/public/archives/page/2/index.html","cf0c9353ac0aef8ce6f3c4d6b53edde5"],["D:/Blog_my/blog/public/archives/page/3/index.html","2359d6af50ceadda9291dcc2eca403e9"],["D:/Blog_my/blog/public/article/1811f8b8.html","c34dc324fd5c31fc0fc91142b33f1d63"],["D:/Blog_my/blog/public/article/18e57658.html","0d2e10fcbb8919506bf5932a502a7f6c"],["D:/Blog_my/blog/public/article/1e64d194.html","482983600ec89554d4b5b364d03fa153"],["D:/Blog_my/blog/public/article/21f50898.html","d94389b6ae419798b8ce21a245ee8c19"],["D:/Blog_my/blog/public/article/234762cd.html","09c3a6fdc81ea5feb57c81aa4c793bf2"],["D:/Blog_my/blog/public/article/2b97b46c.html","8c6ce0a59fcea3d839f1592f9e4f4bdf"],["D:/Blog_my/blog/public/article/358ad26.html","76a8b29716b38f92b080b3b380457284"],["D:/Blog_my/blog/public/article/541a8071.html","6c231c37c143ef597ff7de779d636572"],["D:/Blog_my/blog/public/article/54412d2c.html","c74eb1a1cac5dccf6bbc4cf2f08cb472"],["D:/Blog_my/blog/public/article/5c1827a.html","afd26e6a275bad9fdee86a653a0a7159"],["D:/Blog_my/blog/public/article/5d6f1d17.html","1aef2115dbbb24b74ed803693f2b9246"],["D:/Blog_my/blog/public/article/5dcc92c.html","d0c5d65a469c163e22222a4010578d94"],["D:/Blog_my/blog/public/article/67da7762.html","baa3c7d865c9f8e3fedec093d4e1ac4f"],["D:/Blog_my/blog/public/article/683f20fa.html","7461e25a6317ae325097914ed34d3a74"],["D:/Blog_my/blog/public/article/7758c0ce.html","fdbf5dbf8261a23729466e017a94506c"],["D:/Blog_my/blog/public/article/7a56c169.html","1bac900dc14a6bcbdf206905c79b0a27"],["D:/Blog_my/blog/public/article/7d561955.html","e973265f76aa2fd7cde0f6cdaf1d5706"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","8c52168fd6a8a8dd55ea7ba5dd667e46"],["D:/Blog_my/blog/public/article/c386a086.html","ecbe72a6e5058b7a587470e06f4dc5ce"],["D:/Blog_my/blog/public/article/d080f90f.html","4685344f889a4ac19fa1f6e6b4f01a70"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","f40f86fb548e0d1fa89a016ff35a8750"],["D:/Blog_my/blog/public/article/e21e4e82.html","9a2477d36cedf0a9aaf052f9298224a3"],["D:/Blog_my/blog/public/article/e419ec53.html","94d338972e5629568624a35c549a481f"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","c94efd69ad2ea60848c8c9fe7f8ffab6"],["D:/Blog_my/blog/public/categories/Android/index.html","703935ac68be489b0418cb6b338d9cd7"],["D:/Blog_my/blog/public/categories/index.html","498c94335f52054e91ec8bb7cdcfce4f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1727e4139f1090a4472fdd362884cb53"],["D:/Blog_my/blog/public/categories/后端云/index.html","34eb45d9ac61a92a80cacb3bc6785a31"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","8ebab0fcf04605f4ea89e413ac301b33"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","fde9615631cce0b1a92b242388633124"],["D:/Blog_my/blog/public/categories/百度云/index.html","49f016365ef2e76ff0f21f1da2045a25"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","c3212347a53247f67a7c28808c869ace"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","acefc9d3e4b893cf93b47dd499877039"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","52b160aadfa8eaf4386ec7575025a2dd"],["D:/Blog_my/blog/public/music/index.html","92bc286beaa5deec96f8d90c1d37f948"],["D:/Blog_my/blog/public/page/2/index.html","2f838a0ae2a933049ba11a3e0156200f"],["D:/Blog_my/blog/public/page/3/index.html","3ee74cb151ad211c7ab14f6719d38d72"],["D:/Blog_my/blog/public/page/4/index.html","8173f70fe11971d3ba7204f90d45651b"],["D:/Blog_my/blog/public/tags/Android/index.html","8ebf469402e123af85ed66f5bc351da4"],["D:/Blog_my/blog/public/tags/bmob/index.html","72afa732dffcecdd980c6d447e17a81e"],["D:/Blog_my/blog/public/tags/coding/index.html","c66ac3f48a1813cce68d10f7911f863a"],["D:/Blog_my/blog/public/tags/github/index.html","63e9b0407608f84dcbdd6bc45883976f"],["D:/Blog_my/blog/public/tags/hexo/index.html","3a5d745e280ac13901edab81805ba9a6"],["D:/Blog_my/blog/public/tags/index.html","b0d52a08b4213857261b5ea051311e46"],["D:/Blog_my/blog/public/tags/leetcode/index.html","a9dfff43272eb975e3974fbb707e20fd"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b96a1388b50a1ae6031759078f483a83"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","8bc8fb67c3cabf28a6e294db97fa7b1b"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b655edaac354ec4d8cd815fb67fa3bd2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","f45d9fd8fa27f6c213c09f2db6efb2b9"],["D:/Blog_my/blog/public/tags/笔记/index.html","4f6eb657ef432cf5acabcb590d3fa67e"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","1ea674aa70d55ccbe86e2986964bb5f5"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","1632bd0253afb8657e88b2f89ed702be"]];
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







