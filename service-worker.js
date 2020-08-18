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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","2f2ba15be601619228efa270530ddc24"],["D:/Blog_my/blog/public/Gallery/comic/index.html","f4c132de440ba5bf7339cefd4864c40f"],["D:/Blog_my/blog/public/Gallery/index.html","50b3bac90780ae1e15a92f9620e14ba5"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","f3b59b52da5822a86d1001aaa28ff417"],["D:/Blog_my/blog/public/about/index.html","1307561e815e0d57744a576f610a1e0f"],["D:/Blog_my/blog/public/archives/2020/07/index.html","3116b2e25e0e9e5295a573edc96c5132"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","d7a06b2d358dd68f9c4e59b5e73519de"],["D:/Blog_my/blog/public/archives/2020/08/index.html","d4e92b4c7ec849699b58cabb96f96ebc"],["D:/Blog_my/blog/public/archives/2020/index.html","0455a704cfecdfdac440d7f5ecf8b6c1"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","71f4e2864835005f29558c5d55286bd2"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","15ce3f5ff452af07c4ad5d7cb30c2d96"],["D:/Blog_my/blog/public/archives/index.html","d4fd300374d4e177590d2f9543f40146"],["D:/Blog_my/blog/public/archives/page/2/index.html","3b43197175fe3545e5b0196627e2727a"],["D:/Blog_my/blog/public/archives/page/3/index.html","21a30dc577e2b22b84ad8efb663527da"],["D:/Blog_my/blog/public/article/1811f8b8.html","4e268f07422ea29f3418621d1a058432"],["D:/Blog_my/blog/public/article/18e57658.html","4964ea3b21d55aeb84b2a1cff41dab5b"],["D:/Blog_my/blog/public/article/1e64d194.html","88c469f7843722d274358d8dc5863ebf"],["D:/Blog_my/blog/public/article/21f50898.html","222eb24896574ae3395573216a61563b"],["D:/Blog_my/blog/public/article/234762cd.html","52d722e79f97601661b10b2a15efe2c1"],["D:/Blog_my/blog/public/article/2b97b46c.html","c3f2003260db14ba141d12959d474b24"],["D:/Blog_my/blog/public/article/358ad26.html","87c883fd444469e6dd9f43a2c627507f"],["D:/Blog_my/blog/public/article/541a8071.html","192f8a75ffbe9e4a0da66edf601fde9c"],["D:/Blog_my/blog/public/article/54412d2c.html","a3d6123f6ceeb54e0b834a1110f00fa8"],["D:/Blog_my/blog/public/article/5c1827a.html","ed04cec75144d4497eaab8f84dcbc517"],["D:/Blog_my/blog/public/article/5d6f1d17.html","4cdd96af463de77a36662a9028d6e05c"],["D:/Blog_my/blog/public/article/5dcc92c.html","3b5d1fb06f21243aeb3f7fc8f7dbe56a"],["D:/Blog_my/blog/public/article/67da7762.html","0ca7544e1d4b48c6b594cd463158496d"],["D:/Blog_my/blog/public/article/683f20fa.html","0f38a0b8ed2ed54958c5184b6fac1760"],["D:/Blog_my/blog/public/article/7758c0ce.html","e8bcc628b2e28e872dec24d5d5b31f32"],["D:/Blog_my/blog/public/article/7a56c169.html","e1b31da1acd3c777aea8fe8a33211db0"],["D:/Blog_my/blog/public/article/7d561955.html","5c11b429e170ce66f7dc6283d95f2fbe"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","058161510d074660bc4fc53cd673ff43"],["D:/Blog_my/blog/public/article/c386a086.html","e8b37d8bc04dabe4b374572bab78fea3"],["D:/Blog_my/blog/public/article/d080f90f.html","8dfb6c611114bfe93894efa73bd8d0cd"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","cbb59140552ad3436c682f6c2357aa9e"],["D:/Blog_my/blog/public/article/e21e4e82.html","fa1b1aa03d806525e163880556d0f98a"],["D:/Blog_my/blog/public/article/e419ec53.html","d976131c98c39ab2187556549a0cbb96"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","381aa0925e5f245ba952d2b140aae8be"],["D:/Blog_my/blog/public/categories/Android/index.html","7bcf37d83d114d052f6a6038d378fcc4"],["D:/Blog_my/blog/public/categories/index.html","35674850943619a5e9d317ceb80cec9f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","c1cbd5e9b01329124e6372a32c9f41a3"],["D:/Blog_my/blog/public/categories/后端云/index.html","39cec0bb1274c10313c11e9a20ed0e40"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","747766fb0069c239fbd80261df7dc687"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","b047ee9c169f0f926eee211d6baa4616"],["D:/Blog_my/blog/public/categories/百度云/index.html","10de35d6d51f5fb02a11ad0d136e8dc4"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","1190127e0ca458d11a7eaa4cf88993d7"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","a10de94deaa739fb02026a20accb69af"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","943e1e9f5924f1c701e6c8b4fd41e7a6"],["D:/Blog_my/blog/public/music/index.html","db7c444304c6070ab3fb547af87a90db"],["D:/Blog_my/blog/public/page/2/index.html","33ce953bb71b1122fffed64e23fa2141"],["D:/Blog_my/blog/public/page/3/index.html","e29b9a6016d5866baae6407040ef0c31"],["D:/Blog_my/blog/public/page/4/index.html","9c3d2b46bec3b548694965497ff71629"],["D:/Blog_my/blog/public/tags/Android/index.html","676705a460533fc1cb43e0f1ea3de0b0"],["D:/Blog_my/blog/public/tags/bmob/index.html","bde69741473c3ceb5e90efe32917772d"],["D:/Blog_my/blog/public/tags/coding/index.html","8f4903132fac1c0d8d850ab6e780e95c"],["D:/Blog_my/blog/public/tags/github/index.html","eb22c00d8f026ccb9d4ea3e52bf7375a"],["D:/Blog_my/blog/public/tags/hexo/index.html","d8ce257d2d092433d35c14932d3d4807"],["D:/Blog_my/blog/public/tags/index.html","5271de4c86efc605836d4cd9604391e9"],["D:/Blog_my/blog/public/tags/leetcode/index.html","4e84176a4d54e16f76ecc5435e816171"],["D:/Blog_my/blog/public/tags/情感分析/index.html","5e524ab4edf302447d58e58e4417b759"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","ab48a13e1e1aee41daeea6a4d63717aa"],["D:/Blog_my/blog/public/tags/登录注册/index.html","82bff1b096d8016f57839d0b32166f0d"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","c0ecbb6faddf76ca5572304537b77822"],["D:/Blog_my/blog/public/tags/笔记/index.html","4143ddb8033d7f24128525c953022adc"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","21461a1345faf1f18c370a8b63dc784d"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","bf07d3d29a8c54d1d4d6e2960b4c3473"]];
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







