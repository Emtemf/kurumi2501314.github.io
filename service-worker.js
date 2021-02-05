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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","eabf70d67ab12d07c16d3cae69ae3c95"],["D:/Blog_my/blog/public/Gallery/index.html","05595056bc3bb418456a05d87f17e374"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","919956cb39b566022f7df21a59b71665"],["D:/Blog_my/blog/public/about/index.html","fc987d0b8a6ff6eb44542d6d464f0321"],["D:/Blog_my/blog/public/archives/2020/07/index.html","73aeff44f8965a8721ad1b4f0f9f1532"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c2d8d9346c92bcbbe4a119093e86bcff"],["D:/Blog_my/blog/public/archives/2020/08/index.html","864e1d35c6c7cf4ebce625ac71778909"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","ba93edfcfc783f6d9cbc5194e185607d"],["D:/Blog_my/blog/public/archives/2020/09/index.html","564aa8807a62f8cfcb04a5f101f103ab"],["D:/Blog_my/blog/public/archives/2020/10/index.html","d1545cbd5d2f7811d9542161befff517"],["D:/Blog_my/blog/public/archives/2020/index.html","c3baad3cce6c489c5281347bdcb3428d"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","5e377614273bbde4f97c09e4618b71f9"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","60b3f8cc9e664aa5625efb13b0056c35"],["D:/Blog_my/blog/public/archives/2021/01/index.html","a64b7c95ae91a7c6155f8a7d12007fbe"],["D:/Blog_my/blog/public/archives/2021/index.html","21daa257b23bd58e66165aaa49f5229d"],["D:/Blog_my/blog/public/archives/index.html","46a5728d40d3acc2f24668a5a71bea89"],["D:/Blog_my/blog/public/archives/page/2/index.html","a512a340000cddc8b331710675b64558"],["D:/Blog_my/blog/public/archives/page/3/index.html","84f8bbb54ec64e21103834fcf539cd75"],["D:/Blog_my/blog/public/article/1811f8b8.html","de2492a47e43f0ad2524cf4c705ebe5b"],["D:/Blog_my/blog/public/article/18e57658.html","e96dbfaf185723710c7c8d87b1340f14"],["D:/Blog_my/blog/public/article/1e64d194.html","7632f6ce3128f98d2b70d8911ddcace3"],["D:/Blog_my/blog/public/article/21f50898.html","ddcb02197a30c66157c9419c451f2d23"],["D:/Blog_my/blog/public/article/234762cd.html","aa06fc09045c0d6e5c7106afd5fa4f69"],["D:/Blog_my/blog/public/article/2b97b46c.html","dc51118fd6025405dfc906ae2fb14d7a"],["D:/Blog_my/blog/public/article/358ad26.html","3d0dc7cac12002716363cfad690875a1"],["D:/Blog_my/blog/public/article/4de36022.html","f7c5f5d5ef24e1bb661e07a0cd17d238"],["D:/Blog_my/blog/public/article/541a8071.html","d5d3c9fb9b8406e2d1a3995ce0498358"],["D:/Blog_my/blog/public/article/54412d2c.html","324e549dea8d6ab325822aab9f85c9f0"],["D:/Blog_my/blog/public/article/5c1827a.html","8f1cc9000b88d5bd17b3d69af02ebf7d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a312acb968576a57a2b9bdb6ed043c9b"],["D:/Blog_my/blog/public/article/5dcc92c.html","3a79d597aa52beb167458465facdb86d"],["D:/Blog_my/blog/public/article/67da7762.html","74ab54f7cdab8a174e3ba3934af4cf3e"],["D:/Blog_my/blog/public/article/683f20fa.html","8b28343e816ee358c19f24a2cd25a620"],["D:/Blog_my/blog/public/article/76783ca1.html","313c49b08425bcb58103413f65147f59"],["D:/Blog_my/blog/public/article/7758c0ce.html","ab0dcbb94b8910c97a9bf45293182ba8"],["D:/Blog_my/blog/public/article/7a56c169.html","c8aa9f89f593045d39f10c01809d3521"],["D:/Blog_my/blog/public/article/7d561955.html","f12000f5174cd58d299760a7ccca1c58"],["D:/Blog_my/blog/public/article/a0595b99.html","1e7b415d46eafa650b04d8dc2a418ccb"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","bb3e1135028dc2024c2f3c04db8ca0bb"],["D:/Blog_my/blog/public/article/be7f81a3.html","a19a35eaa00aa591dee994fe13448541"],["D:/Blog_my/blog/public/article/c386a086.html","59756f137a044caeccbb020ee7b0d796"],["D:/Blog_my/blog/public/article/c9c0e075.html","7fdfe99072f3a38adaa4b13be08ce134"],["D:/Blog_my/blog/public/article/d080f90f.html","425933499d596c64dfe097c2478d7803"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","4d814df80ca84204d65bc88c79d935e9"],["D:/Blog_my/blog/public/article/e21e4e82.html","ef1ea844daf27682413c4f38fc145f00"],["D:/Blog_my/blog/public/article/e419ec53.html","8509cf74a706ca4b81e5ee012e4ebfaa"],["D:/Blog_my/blog/public/article/e4efebfa.html","8b5bca33dc722baf654799ab4e51aee3"],["D:/Blog_my/blog/public/article/eb0fc959.html","2470c4454306e3f63efae302768541d1"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","a09b74913bbbc60fb999dc1e465769b4"],["D:/Blog_my/blog/public/categories/Android/index.html","9412f45236846d178f4f6953a7486ff8"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","6108cdca04ac3063be47bd7148edb84c"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","d77fca15adb4f226948526478b6b208f"],["D:/Blog_my/blog/public/categories/index.html","7373c79717a46036855d5c5817acd880"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","22aa47a7e1a9cca691bfdc6771abf5a6"],["D:/Blog_my/blog/public/categories/后端云/index.html","c591265cf406d19b72dbb01744febbd0"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f805540decd8963682747d249d21b116"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","1736274f04e3de7df126c99e70bb290c"],["D:/Blog_my/blog/public/categories/百度云/index.html","cfa81f750bbff2654f5da82a5b79c0b0"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","6d5eed5bb770d021ed82f9b1776c91bd"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","625198195ddf51da7a9f41cb83b54a97"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","dc3d50b3c8f4e0d62292fe69ac7ba82f"],["D:/Blog_my/blog/public/music/index.html","b818ddf8340241dee7a4df0dc396c836"],["D:/Blog_my/blog/public/page/2/index.html","bb733d49b305158336d87179d8ff05b1"],["D:/Blog_my/blog/public/page/3/index.html","afec6c260a523a7fed390e2fcc30219c"],["D:/Blog_my/blog/public/page/4/index.html","2b490447c671935a3f7cf3f93c26b844"],["D:/Blog_my/blog/public/page/5/index.html","32fab278f3d035b2415934b82035b43a"],["D:/Blog_my/blog/public/tags/Android/index.html","23ae5e20c65dc65adb64a477ffb53282"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","00929d59c33e9830a87c498a5c56b5fb"],["D:/Blog_my/blog/public/tags/Java/index.html","564cb0b6f83839524deaa6a289a1b470"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","8c7029088099fb0eced8f0d8c8504ad0"],["D:/Blog_my/blog/public/tags/bmob/index.html","bc7bb205f8813c2fbfa5ce5064e3cfab"],["D:/Blog_my/blog/public/tags/coding/index.html","1709cc6aa2b6b77a167827b0c5a3f460"],["D:/Blog_my/blog/public/tags/github/index.html","e2f40524aa30c18e25bb2fb50258a286"],["D:/Blog_my/blog/public/tags/hexo/index.html","73c5615548ad8957d51a0237a28451c2"],["D:/Blog_my/blog/public/tags/index.html","702c4e8bdd2952ef59552607c8fdcacf"],["D:/Blog_my/blog/public/tags/leetcode/index.html","9dee67f3172321999f735665e58fa0d0"],["D:/Blog_my/blog/public/tags/情感分析/index.html","87e24a6907cd2b45afc51e6cbf7718e9"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","39630e6288f1742ac7bb05b13354524b"],["D:/Blog_my/blog/public/tags/登录注册/index.html","1c4844119498870a942c3e671dea2d73"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","755632e9ac902235ae3871e19ea31bd5"],["D:/Blog_my/blog/public/tags/笔记/index.html","46a710cf42d6ce9143998cecf8438502"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","f75b5fb91d301855176a49cda9c2441b"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","ea13773d64829c064c723b1650421773"]];
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







