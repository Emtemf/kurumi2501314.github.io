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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","92235f1a5b9b6fd8c521d1c62059c65a"],["D:/Blog_my/blog/public/Gallery/comic/index.html","bac75ece2d4b156b937b7b7469ca282d"],["D:/Blog_my/blog/public/Gallery/index.html","04221c2e18b304ecc01be46b11d7804e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","56d6632078cf378a5ed80f1726dc614e"],["D:/Blog_my/blog/public/about/index.html","172c92a4466081bbb9a6c078f24b2b2e"],["D:/Blog_my/blog/public/archives/2020/07/index.html","9bdd6146edebc91e1d070da70844ea91"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","7d8828241f8a8580a12c7348f70cc0b2"],["D:/Blog_my/blog/public/archives/2020/08/index.html","1444a25208582fcf227ac6038e00a5b7"],["D:/Blog_my/blog/public/archives/2020/index.html","700a3a576a34c796447f5ed29ca7dc55"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","4d53b457f1c61553a13de31a1bd34664"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","67b5a5fe4b8ecf7067ccfb4904acd2a2"],["D:/Blog_my/blog/public/archives/index.html","04f99999cb1700c2d9af51f37714a754"],["D:/Blog_my/blog/public/archives/page/2/index.html","5592b2bc8bc0e71f27582b22fa1c8d76"],["D:/Blog_my/blog/public/archives/page/3/index.html","03a30fd1baf44cb78d3776c369658991"],["D:/Blog_my/blog/public/article/1811f8b8.html","82db73fc958d26603a072d70d8ff6174"],["D:/Blog_my/blog/public/article/18e57658.html","adde7ddeac060e31875e34b64417eadc"],["D:/Blog_my/blog/public/article/1e64d194.html","f25f0d70ce5ca072d50600036e540b91"],["D:/Blog_my/blog/public/article/21f50898.html","eac8f35a3e0bca88d67f9f0653deaa26"],["D:/Blog_my/blog/public/article/234762cd.html","c0cb850d398b20e22d7e1f51609d502c"],["D:/Blog_my/blog/public/article/2b97b46c.html","8037d51502071072f78cb4264f16652c"],["D:/Blog_my/blog/public/article/358ad26.html","e7b474d835386630700237cc63a81031"],["D:/Blog_my/blog/public/article/541a8071.html","559fb90303a9c3c620ea4aa9eca9b588"],["D:/Blog_my/blog/public/article/54412d2c.html","5012dcedb5fde3d6509e0b38317e4290"],["D:/Blog_my/blog/public/article/5c1827a.html","1116a3903c1bc1f96e2005a062d67048"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3a17003f778a7ed77cf55083a33f3b40"],["D:/Blog_my/blog/public/article/5dcc92c.html","9c06a4bc5a877af1ef6f6a138ecabfd9"],["D:/Blog_my/blog/public/article/67da7762.html","02649f85e88569cce6ca18a70344e8c0"],["D:/Blog_my/blog/public/article/683f20fa.html","2ab85b522908f5d108041ca11e1e3375"],["D:/Blog_my/blog/public/article/7758c0ce.html","3e16a1d9648df344fc96751e93729623"],["D:/Blog_my/blog/public/article/7a56c169.html","56bac78d79dd7b1bb2456ace6fb83c5a"],["D:/Blog_my/blog/public/article/7d561955.html","15f543af0ca7102f2163042b269528ac"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","fb45f0df8dabdea4e9b412bdcba1ea72"],["D:/Blog_my/blog/public/article/c386a086.html","f158906d9e75c1df44d3b583442842e5"],["D:/Blog_my/blog/public/article/d080f90f.html","34ffe03e0b2a636750e675dfd6db4d17"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","eafb18fdd4670e0795789090944c813a"],["D:/Blog_my/blog/public/article/e21e4e82.html","72f35ed53d177a5bb6657250ff6eb050"],["D:/Blog_my/blog/public/article/e419ec53.html","fb9a3c217992b552444aa62d05178e57"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","33cd8640705bdf20f6b6f1f5bcbdb364"],["D:/Blog_my/blog/public/categories/Android/index.html","7f8898b19ea58ac913aa81082e7c0112"],["D:/Blog_my/blog/public/categories/index.html","812b38033bd34c9304b78f47956322ad"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","50af9dc10155cce6703a8279d2e9138a"],["D:/Blog_my/blog/public/categories/后端云/index.html","f2bd57203e328eadc9a898df463f0b46"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","5f239c354133029d0dcb3baf1abc4b29"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","691e4051936ba7309bf743b81851459b"],["D:/Blog_my/blog/public/categories/百度云/index.html","fe29524fd8ad0792008759d1e70399fd"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","793caf008a10328e944182c9bf5ce479"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","84dbc35a531266d8175d78c3d03bd52c"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","061a6d46e3137d68844da023ed1ca365"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","db4d457b50da9ce33c7c3b11f4f0087d"],["D:/Blog_my/blog/public/music/index.html","ef79d6cefe7bbee855b61cb28a6b9caf"],["D:/Blog_my/blog/public/page/2/index.html","a73793dc3ac9799e320f63949293dc62"],["D:/Blog_my/blog/public/page/3/index.html","aec93d632cd1f25420f3bc168bb3bbe4"],["D:/Blog_my/blog/public/page/4/index.html","56b85f0fc92b99f9709a00afba5c3573"],["D:/Blog_my/blog/public/tags/Android/index.html","de11a8a7f33ab2de29507bc39a73ff72"],["D:/Blog_my/blog/public/tags/bmob/index.html","78304928dc51fe9a257927096a4757e6"],["D:/Blog_my/blog/public/tags/coding/index.html","dce7f7f6b4005775ace46a4c5ad8b039"],["D:/Blog_my/blog/public/tags/github/index.html","3798316fae66b989eb7d1931db73bb82"],["D:/Blog_my/blog/public/tags/hexo/index.html","1a07abb6386ea5ee69dd1a911dfb88c7"],["D:/Blog_my/blog/public/tags/index.html","13eab9ee932e6543e12790cdd8823fd8"],["D:/Blog_my/blog/public/tags/leetcode/index.html","b346f5abd40459f0189f6b6d41025dc8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","300e45a06e8251e9dbb6822e19498147"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","14306c392a3c1edd3146ca916e22859c"],["D:/Blog_my/blog/public/tags/登录注册/index.html","56907d58281313a35d0bf8dd0c8cb607"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","4337f39d0bcb11c20a34d2347ab335b3"],["D:/Blog_my/blog/public/tags/笔记/index.html","e4bfb8191aea34776a7af1abade6b2d7"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","d3b269fb51eeca4d268d82ea27782fc7"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","74ab20382244c84dd119557b6948f41f"]];
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







