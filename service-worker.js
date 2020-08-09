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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","d0e0ecaa5c777ed1af42e8063dc5f98e"],["D:/Blog_my/blog/public/Gallery/comic/index.html","a9dc35eed534254a426fc40cc6b69e63"],["D:/Blog_my/blog/public/Gallery/index.html","62dedd5c25c0579ee8fbc55f67422c05"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","51cda09792cc27d483e38435e10cfffe"],["D:/Blog_my/blog/public/about/index.html","d63143471a69569f5c1984d650e12a1f"],["D:/Blog_my/blog/public/archives/2020/07/index.html","0f6265205d5f1d8cb489988d186c5f50"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","72e515f84abc498ff129bee838cd3224"],["D:/Blog_my/blog/public/archives/2020/08/index.html","be69b530a80d1a2035259a08761701c8"],["D:/Blog_my/blog/public/archives/2020/index.html","14d78244ce0405e44468019237779aac"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ee43e574f43b699be2deff52a825fe7a"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","7fb8b6c76b7b239d4305f573dcc094db"],["D:/Blog_my/blog/public/archives/index.html","a8fdab361a000d0c800db39468134a67"],["D:/Blog_my/blog/public/archives/page/2/index.html","5032bba0ca46ba46b596eec167384a27"],["D:/Blog_my/blog/public/archives/page/3/index.html","9b74204d8b99f8823bb6f1a9c651baaa"],["D:/Blog_my/blog/public/article/1811f8b8.html","935da294c40099f78951275c98f22fcc"],["D:/Blog_my/blog/public/article/18e57658.html","c9525a6ff5f9c50a879c217d899495d5"],["D:/Blog_my/blog/public/article/1e64d194.html","2ed6dd8677710e941108a04ee11a8929"],["D:/Blog_my/blog/public/article/21f50898.html","4111cd1224deffdbd72ad644f7643ca2"],["D:/Blog_my/blog/public/article/234762cd.html","bc70792b381e2ad5284bfdd6c26e7e71"],["D:/Blog_my/blog/public/article/2b97b46c.html","5fa5ebbb52e3d1b4f20e51d5a22bbac3"],["D:/Blog_my/blog/public/article/358ad26.html","2b8a5443f213ecdc616dd49aa689aa16"],["D:/Blog_my/blog/public/article/541a8071.html","179b05024bee33f6abc1ab42ceaa1f7a"],["D:/Blog_my/blog/public/article/54412d2c.html","3db0f9e1575ad1734720e95be212a628"],["D:/Blog_my/blog/public/article/5c1827a.html","669bb063ec0fdfbccbffdda9234768ab"],["D:/Blog_my/blog/public/article/5d6f1d17.html","08d5e822b0b49f70c0c6b95dbfe21974"],["D:/Blog_my/blog/public/article/5dcc92c.html","594e3f00e74805b147ee81ab6ca6d828"],["D:/Blog_my/blog/public/article/67da7762.html","096d22abd1a4f75280837094eb0afa63"],["D:/Blog_my/blog/public/article/683f20fa.html","75edb4889acf7c1db5760fc140da2e06"],["D:/Blog_my/blog/public/article/7758c0ce.html","6d804c93c1b628ee5bfa872e05883eca"],["D:/Blog_my/blog/public/article/7a56c169.html","097860f23247db6ef61ad0e73fc72d9d"],["D:/Blog_my/blog/public/article/7d561955.html","5dec6f7fa6e27e5b65b2d7f3673347d2"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","ed61111efc94c370bf96e0ecd4875808"],["D:/Blog_my/blog/public/article/c386a086.html","a298a2a94c66dc269691181f07ced2a4"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","dd66c34805241e14c25e12a7d8460afe"],["D:/Blog_my/blog/public/article/e419ec53.html","b5783bfac319e4a751aeb0fba45c3750"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","88e195f60e1cb6ce55a90195bc4de6eb"],["D:/Blog_my/blog/public/categories/Android/index.html","5504d497867363fe2450144fa1608518"],["D:/Blog_my/blog/public/categories/index.html","e3009e738773111a41dff9589e7de17e"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","949ef1540cf93d7675012902c713534e"],["D:/Blog_my/blog/public/categories/后端云/index.html","a76c07b878f6fc79fe7fe5b680b59add"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","320acdc7b81b1ada9366f4db8c3f664f"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","80f9117505d82e0feff197cf7abff5ca"],["D:/Blog_my/blog/public/categories/百度云/index.html","21cf13ae38a7117cc8407c13538e85f7"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","83334869fc33942d2060104298939ce1"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","9823e00ba38960c708f31bdb0b7e596a"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","22293968e30449c3c2f79187e932f105"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","ae732c7bb899534652929ee647f16f6e"],["D:/Blog_my/blog/public/music/index.html","5c58cd04baf8954e8f5d1181381af03f"],["D:/Blog_my/blog/public/page/2/index.html","278eda07ecf98fa3ba70e2dc89f614c4"],["D:/Blog_my/blog/public/page/3/index.html","fd17bc05d06c1b89fa4a84c5d1f2a34a"],["D:/Blog_my/blog/public/tags/Android/index.html","1050318e83f7e6e87e9e67c0c5314ec4"],["D:/Blog_my/blog/public/tags/bmob/index.html","682365491f5b48763290b21dfb5987c6"],["D:/Blog_my/blog/public/tags/coding/index.html","15b3332a523cf7820bb21ae6d79aee53"],["D:/Blog_my/blog/public/tags/github/index.html","91d07fa7663075c2ef63b493f8498e19"],["D:/Blog_my/blog/public/tags/hexo/index.html","cf90f74e52d301fd806bd2964ffef5ed"],["D:/Blog_my/blog/public/tags/index.html","2e527cd53e90f1a8aa98fdd08ca04780"],["D:/Blog_my/blog/public/tags/leetcode/index.html","aa5fa979a3f8765e77c0b97d941f8eea"],["D:/Blog_my/blog/public/tags/情感分析/index.html","e2206cf9c4865ffa1f39edb9832e6e1d"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","fb49adb2b1e33c1f98d0daac08fbb836"],["D:/Blog_my/blog/public/tags/登录注册/index.html","8d8c08d075cc7fa9e2164bd727bda98e"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","51a8e7071b721a87f0e7c8494d917f99"],["D:/Blog_my/blog/public/tags/笔记/index.html","d642aad4fb0a8340faac5199e019a11d"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","6b836b276c5e3ebb759b5416fd5de6cb"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","eb6a79c58074d9960a7f767316b61d51"]];
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







