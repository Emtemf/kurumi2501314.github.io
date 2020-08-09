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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","61c7dc4bfb02a9db578eee8f38fd243a"],["D:/Blog_my/blog/public/Gallery/comic/index.html","f4522fa714eeb1648b5cf99713160391"],["D:/Blog_my/blog/public/Gallery/index.html","454cee77cd0025c00ca66ee1829ce6cf"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","dcd1f5cb44e1e300d76b1b4892e8805c"],["D:/Blog_my/blog/public/about/index.html","dfd119a6a3d23a14522ae95caa4a7cd2"],["D:/Blog_my/blog/public/archives/2020/07/index.html","b51ca13605e14db9bd5f496bcd6f6452"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b8e3a3d365b75d0fbc773cc656f9413b"],["D:/Blog_my/blog/public/archives/2020/08/index.html","2e7f986fbdfd110de9cbe96bd66f5689"],["D:/Blog_my/blog/public/archives/2020/index.html","11cc4be9005303c3497e2b08d055751b"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","dbea0e797907c398f0830d1e89f974fa"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","1792f5667ddcdbb67906ef4b15e9b8dd"],["D:/Blog_my/blog/public/archives/index.html","9dcc259d9a2370b538ae5f193f12d2da"],["D:/Blog_my/blog/public/archives/page/2/index.html","8c43fde3348b958a2ec0c91304af2309"],["D:/Blog_my/blog/public/archives/page/3/index.html","8dca2d94d6b67a9781d42c887c02c577"],["D:/Blog_my/blog/public/article/1811f8b8.html","b36c6a863ea7fa9a72862faaebb63932"],["D:/Blog_my/blog/public/article/18e57658.html","9b2f08145221ca5be6a832e1e9a7f8ab"],["D:/Blog_my/blog/public/article/1e64d194.html","7c6f352b53cadcbd7946c9e55ded16a9"],["D:/Blog_my/blog/public/article/21f50898.html","9deb87140c766aa4438e0b85bce62216"],["D:/Blog_my/blog/public/article/234762cd.html","7069ec910ea31a68764702b197d42d98"],["D:/Blog_my/blog/public/article/2b97b46c.html","0452c8c819b01805a459c21de03a8083"],["D:/Blog_my/blog/public/article/358ad26.html","fb0e4bd905e8ac3108c18bb6874aac59"],["D:/Blog_my/blog/public/article/541a8071.html","c3419759f0ba466fb4bbd8edca3b3bf0"],["D:/Blog_my/blog/public/article/54412d2c.html","51ed64052bc4184731b540a875089434"],["D:/Blog_my/blog/public/article/5c1827a.html","b6b629361c39ac5c277dba5344bd457d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3ca1d101c97c702a9763cd8e4e1377f3"],["D:/Blog_my/blog/public/article/5dcc92c.html","0e8c9010ca421298bcf6cb362fd2e51e"],["D:/Blog_my/blog/public/article/67da7762.html","f0ff6e032a85dd33c5b57fa499215bf6"],["D:/Blog_my/blog/public/article/683f20fa.html","b4ef1eef3ada197e717d44be495aad58"],["D:/Blog_my/blog/public/article/7758c0ce.html","8139101c6c4c97a19b61772d057bafc9"],["D:/Blog_my/blog/public/article/7a56c169.html","01096f37ddb42bea26c45b949c54f62c"],["D:/Blog_my/blog/public/article/7d561955.html","6a1e0a669cf818b1aaa11ba9b699e79c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","3ae78b9e8fafc10019e1910d2551a71e"],["D:/Blog_my/blog/public/article/c386a086.html","6c275c6bc85cd4c75213c5d63457c3f3"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","a51c56e763fd419731a914a5161e5f9e"],["D:/Blog_my/blog/public/article/e419ec53.html","fab668f5e3ea0af22422b426a261eb40"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","78f30406ac6365f6d30f758af9348009"],["D:/Blog_my/blog/public/categories/Android/index.html","607e9376446c9e092f6da88f83aac59d"],["D:/Blog_my/blog/public/categories/index.html","f101265bbda800b8f1a4f20c781c1eae"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","f0cef14048a980ba3dd4a63fd0deba80"],["D:/Blog_my/blog/public/categories/后端云/index.html","61d2bcdd706d601e5ec46f2dd0b4570f"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","049f0dc61f17513ce601f906d943b082"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","e99f5f1be3e209b472d9cc62b98b84d3"],["D:/Blog_my/blog/public/categories/百度云/index.html","84f80716d47ea0d8c7f69a6a04cd9467"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","fc2bf6d03af6a3e3de8e389ba7067e17"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","071c2faa4c8314f82d7752be68b3f1f4"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","4df888941c99325c14bfd4e4d6f12fa5"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","64088d16e26352b4c33b2527543440df"],["D:/Blog_my/blog/public/music/index.html","8a1b06397c680c0c4317d398aa698258"],["D:/Blog_my/blog/public/page/2/index.html","48ac5dec9bfe05b9b679c248f325773b"],["D:/Blog_my/blog/public/page/3/index.html","60adac6e0cfd8cd014de0a68ba6fd95b"],["D:/Blog_my/blog/public/tags/Android/index.html","a6c3db4a65bbfa4c3365ead91b9c7046"],["D:/Blog_my/blog/public/tags/bmob/index.html","50248b3a7b679ced0d88c2236c337fdc"],["D:/Blog_my/blog/public/tags/coding/index.html","8fbbb1a26d79b9dc4e192c235904413f"],["D:/Blog_my/blog/public/tags/github/index.html","cd76495314eeef8087a7ae1a1f8f1b89"],["D:/Blog_my/blog/public/tags/hexo/index.html","46963db567ee519be10f1bcf0871b5d4"],["D:/Blog_my/blog/public/tags/index.html","01e1e4f6120f4f60c0ab1c8242d80048"],["D:/Blog_my/blog/public/tags/leetcode/index.html","3bf05dada6fd2b831ab4ac452cbea5ac"],["D:/Blog_my/blog/public/tags/情感分析/index.html","d0b6f02cd86f8018d0f84af907e5b186"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","735667cdf930367e36efd62187b7e767"],["D:/Blog_my/blog/public/tags/登录注册/index.html","2ee410fc0158691ffebdb277faee88e9"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","85647396bcdcf41abb2757ec5c5dd540"],["D:/Blog_my/blog/public/tags/笔记/index.html","f22a2c5d7afec2b3793834ae69f62e5a"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","52f19aabe72dd681a34137881d7b4b69"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7df30de1ede2f2107b9e6576defd594c"]];
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







