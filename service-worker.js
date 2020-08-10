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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","afe02f19bcd294eb78c70ee8c25dba7c"],["D:/Blog_my/blog/public/Gallery/comic/index.html","d375e674d7c2ef7b37252dd9cf28d9c7"],["D:/Blog_my/blog/public/Gallery/index.html","67678d836572798d70ebd5021d75fcef"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","86595c7517dfb15ffa25d285b9fddd19"],["D:/Blog_my/blog/public/about/index.html","ef1e4bf7316430b55b0c38e0a46c998e"],["D:/Blog_my/blog/public/archives/2020/07/index.html","a798f7fc36d3cbb61c7fa4e693bca9c7"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","d8ee33ce96ae50a56a3efb83787f38f6"],["D:/Blog_my/blog/public/archives/2020/08/index.html","62e24378bd138b4964251f4a53af5d7e"],["D:/Blog_my/blog/public/archives/2020/index.html","65eb122d5680d44c5a8bded86ad216ab"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","13c2cc0562e0f69ba5df58933248a78a"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","c7bb5e7b26c2795b02516162479fdca3"],["D:/Blog_my/blog/public/archives/index.html","1ea0dfc30a89f788707523e188a41d15"],["D:/Blog_my/blog/public/archives/page/2/index.html","eb60a9730563fa4c193ff6f555f91d0c"],["D:/Blog_my/blog/public/archives/page/3/index.html","96c235fc5440869a538574ab28d4ac73"],["D:/Blog_my/blog/public/article/1811f8b8.html","f9afa1ffd075b1e6791ae1d618f8df8d"],["D:/Blog_my/blog/public/article/18e57658.html","e3a04149c3b104549d1a98dfa419a8b0"],["D:/Blog_my/blog/public/article/1e64d194.html","611812b56cf8412bff66e8ef71790a64"],["D:/Blog_my/blog/public/article/21f50898.html","2b32753d7e1ee216ec537a89b81573b3"],["D:/Blog_my/blog/public/article/234762cd.html","fdb0d0654e49604c4de9cfa5527f7e73"],["D:/Blog_my/blog/public/article/2b97b46c.html","e7489e5fe0c9ab2adc90b154b65e0f6c"],["D:/Blog_my/blog/public/article/358ad26.html","26233a1e010533ee586db4f242f3564a"],["D:/Blog_my/blog/public/article/541a8071.html","9483636ea96989bd1dd7bc1fc2305477"],["D:/Blog_my/blog/public/article/54412d2c.html","cce32d5619d6d47c9168a5e4726014ec"],["D:/Blog_my/blog/public/article/5c1827a.html","7f00e2e74dc136442bd70a00412842f1"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3d65573975b1e2a4fd39fa015b5cc706"],["D:/Blog_my/blog/public/article/5dcc92c.html","2ae880f5a85004c7fe6c4c42b335a8a3"],["D:/Blog_my/blog/public/article/67da7762.html","9fd7dfb09cfcdbb5d853172661a6b9fc"],["D:/Blog_my/blog/public/article/683f20fa.html","1959a56ba4073048d64899f8a16f84d0"],["D:/Blog_my/blog/public/article/7758c0ce.html","d96bc75340e7c9986ef04790eec7a0de"],["D:/Blog_my/blog/public/article/7a56c169.html","eca8d8ea5aef1e605eb1275def71b913"],["D:/Blog_my/blog/public/article/7d561955.html","4ded3bc6363a66996b0cec8546fe5620"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","856742d81fc1350df30f87609adf2aa5"],["D:/Blog_my/blog/public/article/c386a086.html","8b2219bf2a76b76f778847eeeb94149e"],["D:/Blog_my/blog/public/article/d080f90f.html","2c8a3d6efa89f4fde17adfef6b50bff1"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","d26adc727860918f8799d3ba2b1fcd72"],["D:/Blog_my/blog/public/article/e419ec53.html","d9a3c030d2dbb0ad5d77f3b6402ea5cc"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","96f40624241c726b2dece56fe76d0f18"],["D:/Blog_my/blog/public/categories/Android/index.html","68c4f24be7aeabda77d8477c5b90f439"],["D:/Blog_my/blog/public/categories/index.html","9faa4e5f98bdea0b0edbc10efd7854af"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","d91ce8d8993784e1ffe6e53deccf2a7f"],["D:/Blog_my/blog/public/categories/后端云/index.html","fbfc3c12708f5d61057d035f9f572ac9"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","419d5ef42eb833b36358964ef459fef1"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","cb1fc037f60bfce38ad641c53b3c9f99"],["D:/Blog_my/blog/public/categories/百度云/index.html","e9d6f6385db86204c13d1f3afce797b2"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","01134586618011f99a9647b25d40de7b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","a2f5ee85ae48ac708fcf240ed7c16592"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","1108276ea25e8f04abbbd093153d2b9f"],["D:/Blog_my/blog/public/music/index.html","7fd779edf68449a67f3fff1d9965cc31"],["D:/Blog_my/blog/public/page/2/index.html","505046a608fbbf30e439029759e124ea"],["D:/Blog_my/blog/public/page/3/index.html","e6216f21c7013cff97f78c7f002b2734"],["D:/Blog_my/blog/public/page/4/index.html","00dc265137c2c9ced1991f04e731edd8"],["D:/Blog_my/blog/public/tags/Android/index.html","a3e1acb1099d23c9e4f20f178cc99c23"],["D:/Blog_my/blog/public/tags/bmob/index.html","6fa729e540b6625143d3e71a5661586e"],["D:/Blog_my/blog/public/tags/coding/index.html","c673e9384253616a43c603345359869c"],["D:/Blog_my/blog/public/tags/github/index.html","754db63840cecc5034cd5c9ff006a431"],["D:/Blog_my/blog/public/tags/hexo/index.html","bf9be9d605ab9b8fa3a23620a8a5347c"],["D:/Blog_my/blog/public/tags/index.html","ac2776c32c97fc4fb0680a3450804880"],["D:/Blog_my/blog/public/tags/leetcode/index.html","e35a1b847183c758b48621a25dc599c8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","8c28e5921f535ffc06edb158c5af6942"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","d4054ea266a2e23c7a2bcc5ce2e46884"],["D:/Blog_my/blog/public/tags/登录注册/index.html","da85f2662960861f99107b761d405d66"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","c7becb703523fb5e10893fad9bc61eee"],["D:/Blog_my/blog/public/tags/笔记/index.html","e56d6a982446b5c21bf0e2d0d4350b7d"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","c8ab9c6b73d1dab39dac6154cffa6a85"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7f0fe0785527fc12d136e1bbecd2e069"]];
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







