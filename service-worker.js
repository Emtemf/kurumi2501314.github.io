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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","69aa4c5bf7e5352cab8c978854e8b0bf"],["D:/Blog_my/blog/public/Gallery/comic/index.html","c027f88eef2179b44f4b4f02426f4232"],["D:/Blog_my/blog/public/Gallery/index.html","fb14d73fb97341f99f220fe8c7b6a796"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","0e3a5ced9e0921618cfd4da9e19449ca"],["D:/Blog_my/blog/public/about/index.html","3b883059af179183e2acd5e3be4f1eed"],["D:/Blog_my/blog/public/archives/2020/07/index.html","e41ac12c65e486d7c6abd151a8073ae3"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","4c1028ed6466024379bdc74644e72968"],["D:/Blog_my/blog/public/archives/2020/08/index.html","e14a885d91257fb4cec5265d08bf0de6"],["D:/Blog_my/blog/public/archives/2020/index.html","17534efbf678e667c09ff760be73b6a7"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","73cfdb42c56865649fbd16d025b8bb37"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","0c05c37d9551070a8e6b610a40169385"],["D:/Blog_my/blog/public/archives/index.html","4d1d9c1eda29137cb5fe20c53dda7346"],["D:/Blog_my/blog/public/archives/page/2/index.html","c39fc21c5f836407b2ce4332967450b9"],["D:/Blog_my/blog/public/archives/page/3/index.html","99829e32103f1de507b5c8f1fff7d71e"],["D:/Blog_my/blog/public/article/1811f8b8.html","ae264a81dcd8df6de855d6d57e897632"],["D:/Blog_my/blog/public/article/18e57658.html","70e3406eb82c6cf2d230263aee786723"],["D:/Blog_my/blog/public/article/1e64d194.html","971e853c5d97e00f6ba8562235c50ec3"],["D:/Blog_my/blog/public/article/21f50898.html","0d6462d8ed7f51c735c239fdb0eb031f"],["D:/Blog_my/blog/public/article/234762cd.html","15bbeec177acf7d23ddb64ad1f6b9503"],["D:/Blog_my/blog/public/article/2b97b46c.html","f902be440d11fe4e82a781e73c2aa453"],["D:/Blog_my/blog/public/article/358ad26.html","f22a8826e90585fd1446e70c85855673"],["D:/Blog_my/blog/public/article/541a8071.html","7db53b9d8e91d752f0b04062bac9f643"],["D:/Blog_my/blog/public/article/54412d2c.html","17f1040f6ebe49cfba7e21ea965393ff"],["D:/Blog_my/blog/public/article/5c1827a.html","e3916f05b935e1807f206e9f5e59ca5f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","99237d339f26f08090177e5fd9f247fb"],["D:/Blog_my/blog/public/article/5dcc92c.html","41b2ca1dcb02905bd86ecf5a563f39a4"],["D:/Blog_my/blog/public/article/67da7762.html","1df565e6c333b0cfc57067100080f288"],["D:/Blog_my/blog/public/article/683f20fa.html","f079aa4603342dc0bee1b996fe8535a9"],["D:/Blog_my/blog/public/article/7758c0ce.html","ed76594f0bf56ee934621103b4d68449"],["D:/Blog_my/blog/public/article/7a56c169.html","6c5ca71f14aad2d46e4bedef61f2be99"],["D:/Blog_my/blog/public/article/7d561955.html","165d507a9bf8873fc5c7a7edf40ac3ab"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","c3490b6e39e497d5c29a6f4537812a3e"],["D:/Blog_my/blog/public/article/c386a086.html","6fc0fff727b04b338889c13f06d2986b"],["D:/Blog_my/blog/public/article/d080f90f.html","f63e305ea0a33a8c365ecbe2e86942da"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","100414a9977e7360c81ace470f1bbf87"],["D:/Blog_my/blog/public/article/e21e4e82.html","4f70f02b11d0ab1a95afe26cfbb1e953"],["D:/Blog_my/blog/public/article/e419ec53.html","9ec858ffe5b257a4d6f6c1ee11d26674"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","c3e50d158ce8aeb7dcd77a5f9d1f6b7f"],["D:/Blog_my/blog/public/categories/Android/index.html","a381c3003d3916d99d9390ce1f8483cd"],["D:/Blog_my/blog/public/categories/index.html","e8599ad7b16ac067e78a503b58ff8cfa"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","42f139bf57895ad0d76937586d36d4cf"],["D:/Blog_my/blog/public/categories/后端云/index.html","c4e4ccfd888e0607d5c57e8d2b14071c"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","94def7cff0aaf7329065d8c665c0bf41"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","97ff55f089d2804c020bd6ae032f11d4"],["D:/Blog_my/blog/public/categories/百度云/index.html","a5df0503f99ccf2e31027f20150cce52"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","cf80b0a863a7e51f84cea905e7e41548"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","aa93f68385605a7008d37e608375ad0d"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","141aaf83d5b7af061ec1b58de51da903"],["D:/Blog_my/blog/public/music/index.html","b56bd0740499948343629aa8615196cd"],["D:/Blog_my/blog/public/page/2/index.html","033c69add48a4a4647b4119626b5a640"],["D:/Blog_my/blog/public/page/3/index.html","745c97fd5184bc5b3f30e420ae8c368b"],["D:/Blog_my/blog/public/page/4/index.html","d22e2ec2a9bfd1a9ef87f200945df0d8"],["D:/Blog_my/blog/public/tags/Android/index.html","95d68de10d1e54c86f3bc8e2dd4e5b4a"],["D:/Blog_my/blog/public/tags/bmob/index.html","1eec3986cfc2f8bcc89ed0ce2c9806f5"],["D:/Blog_my/blog/public/tags/coding/index.html","60b73f363c25e5560719e0317ed01409"],["D:/Blog_my/blog/public/tags/github/index.html","509d0c488eaa66bddf69d14eff540a65"],["D:/Blog_my/blog/public/tags/hexo/index.html","f0c1e450caafed5f8ceabc9d6bfcf1d3"],["D:/Blog_my/blog/public/tags/index.html","3c2b8093282dfac05fd1633987aec0bf"],["D:/Blog_my/blog/public/tags/leetcode/index.html","cef232b6a54108c4adc80c87ee96bcaf"],["D:/Blog_my/blog/public/tags/情感分析/index.html","55e29f4968e27689fabb3caa4b9ca71b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","163b5840e67be3d6902c6b2c7768148d"],["D:/Blog_my/blog/public/tags/登录注册/index.html","e424e2220cbd4c95d92358dc290b4c47"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","37edeccbcd2c8d72cb22ed9c8696ce1f"],["D:/Blog_my/blog/public/tags/笔记/index.html","5910f5efefa53363b08bb865e15ea59f"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","86f3facacb2e27f00e2dcb73764039f6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7ae99dfff7524ad7e4ad67e3a67f328f"]];
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







