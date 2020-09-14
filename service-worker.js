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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","61b48703ab763dcd5df695d33fe4b592"],["D:/Blog_my/blog/public/Gallery/comic/index.html","97b43912d33f440f110ba5305c8a2a95"],["D:/Blog_my/blog/public/Gallery/index.html","2b0b1334f35aa9de25f2a89cae5090d4"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","43af3b3e727b9a243fb83b96eabe32e2"],["D:/Blog_my/blog/public/about/index.html","d6ed74343f25099ae0f0a20f332a9808"],["D:/Blog_my/blog/public/archives/2020/07/index.html","d5a58bf5413bc5d1257455d7e1ed7dfb"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","05bd2d990d3c06b229e7289bceb2716b"],["D:/Blog_my/blog/public/archives/2020/08/index.html","190cda765c55a9d0f9245cb29c829155"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","a1b8c679a64e9be1670f9c9b1fcac3d4"],["D:/Blog_my/blog/public/archives/2020/09/index.html","59b483370f12e6db4f70a33e7ae07e9d"],["D:/Blog_my/blog/public/archives/2020/index.html","eb39f33cf409dec1d4f958872cddfc94"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","c263ecaa62dec8e5f217cfe4de579268"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","3a7043cc92d10e3ea979524c0b20fae2"],["D:/Blog_my/blog/public/archives/index.html","905b09e9f1be7c56b009dcc8fd79ad23"],["D:/Blog_my/blog/public/archives/page/2/index.html","1058b87afbd455e9142c153a073cfd23"],["D:/Blog_my/blog/public/archives/page/3/index.html","f766b6ae12b9c1e6cdcbae27bec4e003"],["D:/Blog_my/blog/public/article/1811f8b8.html","7f0b8e55a97a8e69bcb3636bbde1cf12"],["D:/Blog_my/blog/public/article/18e57658.html","9fa86a65f66fbcfdcc704cc067ea3bcb"],["D:/Blog_my/blog/public/article/1e64d194.html","10170cb4f7cd35ff81c5ed435077b36f"],["D:/Blog_my/blog/public/article/21f50898.html","3ea085e29313f2f7854be199adb800d1"],["D:/Blog_my/blog/public/article/234762cd.html","bb1e19e78b8fbd9cc51af6231b7e8c7c"],["D:/Blog_my/blog/public/article/2b97b46c.html","cb6c7b00294d937f235ce4d618d483e6"],["D:/Blog_my/blog/public/article/358ad26.html","e3c16f6786c7595907121314389e516b"],["D:/Blog_my/blog/public/article/541a8071.html","b7245a1b83e88c65ec0cb6569d2f19f9"],["D:/Blog_my/blog/public/article/54412d2c.html","50b2d9add7f6f0533c3b3af1e257465d"],["D:/Blog_my/blog/public/article/5c1827a.html","8ab47535d13f45811e1ce3a5f9ab78ab"],["D:/Blog_my/blog/public/article/5d6f1d17.html","ba80734039f1c30a341ca72361006af5"],["D:/Blog_my/blog/public/article/5dcc92c.html","0d7a81b550718ec8554b1ac4f235e56a"],["D:/Blog_my/blog/public/article/67da7762.html","f74ab5207e386e9a9779ee4e42a2914d"],["D:/Blog_my/blog/public/article/683f20fa.html","2631c4fe457cec88a8e5defe13edf7e9"],["D:/Blog_my/blog/public/article/7758c0ce.html","d743b06303f3a3f3918b576af3b90828"],["D:/Blog_my/blog/public/article/7a56c169.html","f241d36a4733e7358ecc7acfe521690d"],["D:/Blog_my/blog/public/article/7d561955.html","78a143ea498736e546211180956d5c1b"],["D:/Blog_my/blog/public/article/a0595b99.html","3c2e9a37cfea7e28023ab4162e5b9fa2"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","12dd8087c467cc1ed4c5cb7a9c6b6e4e"],["D:/Blog_my/blog/public/article/c386a086.html","e0551f063f36cc176f3153af41ba3c08"],["D:/Blog_my/blog/public/article/d080f90f.html","eeace47ec922e159f3f61498fc6daacb"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","ba69769ea98c28b0b69862e573f15a1a"],["D:/Blog_my/blog/public/article/e21e4e82.html","0582475e1e7521f8f609a41666c6626e"],["D:/Blog_my/blog/public/article/e419ec53.html","38de2933d6abcb119f90b38967ae807c"],["D:/Blog_my/blog/public/article/eb0fc959.html","fe7cc038bfecd2ed8f458750b656465e"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","a5f128984aeaf7ce5c587c8ba84373e2"],["D:/Blog_my/blog/public/categories/Android/index.html","75b494f24a1e78cb0f772446764d1f7d"],["D:/Blog_my/blog/public/categories/index.html","9550f88c16bbbbb12384b270b9d7ad6f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","f870d403010893bee4cd587f1695fbcc"],["D:/Blog_my/blog/public/categories/后端云/index.html","489ce184e1b9742db269691cdcc224f9"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0dc16b8579f91345ad0bbc6646c72390"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","14751aaf36ada3796d2d975827393928"],["D:/Blog_my/blog/public/categories/百度云/index.html","ae6d8c8a6d4deb78d960d72e7ea3f366"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9c31bd4aebf5fbfa0429b2b819c2947e"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","67efddbb1aa7f9ccbe98050b696e0483"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","42216cfb5e41bf13b136dc57b8239d00"],["D:/Blog_my/blog/public/music/index.html","bb882a80ffaa67095a285cfdc0fed7cf"],["D:/Blog_my/blog/public/page/2/index.html","849e52938a49696442b0b24fbcc86530"],["D:/Blog_my/blog/public/page/3/index.html","c0c4568127634d8f6a6f79441ea3a232"],["D:/Blog_my/blog/public/page/4/index.html","9fc9a804deefb62f2a58f955474bb8bf"],["D:/Blog_my/blog/public/tags/Android/index.html","25e66649107f3d46a19c6db1624dfb1a"],["D:/Blog_my/blog/public/tags/bmob/index.html","b80777e245f63f33b2518a68e5f8196a"],["D:/Blog_my/blog/public/tags/coding/index.html","ebd770fb55967d508a2fc36d8485b9c8"],["D:/Blog_my/blog/public/tags/github/index.html","b26f09a1b137cc7fb822eece767a5e8e"],["D:/Blog_my/blog/public/tags/hexo/index.html","2c83ad7a2b57d63ce1570e3b3f665fc1"],["D:/Blog_my/blog/public/tags/index.html","b05359b806f3493ae14d7ee154b37076"],["D:/Blog_my/blog/public/tags/leetcode/index.html","61fe037507566cafdd2d7267238f8759"],["D:/Blog_my/blog/public/tags/情感分析/index.html","5465cfeb3c713d3633b1eb13a7e01bb0"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","1a02bd1379295fc6d25bcc68c5d222ba"],["D:/Blog_my/blog/public/tags/登录注册/index.html","0d2f3f3c40e50fb1fab9d7a0075f7948"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","6ef1df857df8811377bdb8767a62e54d"],["D:/Blog_my/blog/public/tags/笔记/index.html","82178a132dfd40d794e9f8dec03116e4"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","d02f52078cd4c43a844b136a1e62e13e"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","88bd433566e3758f9194dcb741e1d201"]];
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







