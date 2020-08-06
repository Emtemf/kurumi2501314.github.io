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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","41719d7c3ddf9526d7600710282b03f5"],["D:/Blog_my/blog/public/Gallery/comic/index.html","f6a33c9b2c00b0cc92321c827771d209"],["D:/Blog_my/blog/public/Gallery/index.html","6d2ef97c77b5f07658deb64716b48c97"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2a398a8420abb136a1c8fe683b5f954e"],["D:/Blog_my/blog/public/about/index.html","41b27ada531e05ed294117b7c2240b8f"],["D:/Blog_my/blog/public/archives/2020/07/index.html","2dd86e9322be77e2b2c58b59ef238092"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","9281fe3859350de7318a5b36a40ef327"],["D:/Blog_my/blog/public/archives/2020/08/index.html","8b92d46a8e9454abe9a8d86bb4f5c015"],["D:/Blog_my/blog/public/archives/2020/index.html","0ffbb677c03726f183cdc04859edec95"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ae670c812c92b00f704ed7753a0dff6a"],["D:/Blog_my/blog/public/archives/index.html","7ed78d1c4bfa09409da93fe34583b47a"],["D:/Blog_my/blog/public/archives/page/2/index.html","b04419182f1fd6fd3473e1fc6ed5c75a"],["D:/Blog_my/blog/public/article/18e57658.html","08715b7c3e4a834ef041d651f9454c68"],["D:/Blog_my/blog/public/article/1e64d194.html","fd8d70ce2cd7ffbe8b7cc01d19dfe598"],["D:/Blog_my/blog/public/article/21f50898.html","79a8a850448fdbbffa31bb55ff058530"],["D:/Blog_my/blog/public/article/234762cd.html","4d997a21f90aa8c9c31eb2afdceee211"],["D:/Blog_my/blog/public/article/2b97b46c.html","716b0da8143b2132b03778c6fac7872f"],["D:/Blog_my/blog/public/article/358ad26.html","8bf0be8c83fdf28fbbbdcf0ab795b12a"],["D:/Blog_my/blog/public/article/541a8071.html","b1814176775ef9fd7eceb3dcf6284777"],["D:/Blog_my/blog/public/article/5c1827a.html","73a23d88a5ee141de4945ef49acb410d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","82c0c61a5e38077be63f4a322fd0b0c4"],["D:/Blog_my/blog/public/article/5dcc92c.html","2f6d1f3e1f35d4397a4a3e422dcffa07"],["D:/Blog_my/blog/public/article/67da7762.html","ebb15cd98e3931db0bf167d2f1059550"],["D:/Blog_my/blog/public/article/683f20fa.html","de9d96f5d6aa90ab85ee2ff2686de53b"],["D:/Blog_my/blog/public/article/7758c0ce.html","0721dfe984e710a5e2d67be201731077"],["D:/Blog_my/blog/public/article/7a56c169.html","a52ad295fc3e708ab0bfe70759d882be"],["D:/Blog_my/blog/public/article/7d561955.html","4492e8692dea646342aa55ea61933215"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a11e4bad0b9b777050da30e732f83bed"],["D:/Blog_my/blog/public/article/c386a086.html","e09461cb7cd3e4859a3a3311ae52007d"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","a45fb8b4916152ffbf26aeab44f862d0"],["D:/Blog_my/blog/public/article/e419ec53.html","49425888041bc5cb3f70189c04d02d63"],["D:/Blog_my/blog/public/bangumis/index.html","342b301b3be3be51bc96db268c35b099"],["D:/Blog_my/blog/public/categories/Android/index.html","6373f84292e9154dac2b74e0111e22dc"],["D:/Blog_my/blog/public/categories/index.html","b8337edf8fdade13dec2faa70cecbacd"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1a9c2ea497bfa54b3a749ca6ca541970"],["D:/Blog_my/blog/public/categories/后端云/index.html","0cb580cec6a5e0b86a80ba4f666d426f"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f6e99d51097a4f9a9a439ce58b1aa607"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","4aa0ed8edf6850644b133063ef709958"],["D:/Blog_my/blog/public/categories/百度云/index.html","d36313595a107d8dea28f5d08425cc25"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","ff58804713860ec0fa22025496a9ca68"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","c57b028f7a74f0dffb1699c8771ec2e9"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","4f206eedb05a678c02e26230280a1459"],["D:/Blog_my/blog/public/music/index.html","fcb618e1a8a8e95bcc1c3b2e0cc6c724"],["D:/Blog_my/blog/public/page/2/index.html","4631684e374c51e31ee82302f8feca6a"],["D:/Blog_my/blog/public/page/3/index.html","c07be241d7fb25f376fe071faedeed71"],["D:/Blog_my/blog/public/tags/Android/index.html","35a4fa63e062aa1ff2dca2c12e378f1f"],["D:/Blog_my/blog/public/tags/bmob/index.html","cc8c48eb6fde11784a01312e059c9a0a"],["D:/Blog_my/blog/public/tags/coding/index.html","5c1c666e693e846389a0f7a0341e0353"],["D:/Blog_my/blog/public/tags/github/index.html","27a9731e148714f5bee58c04497baf1a"],["D:/Blog_my/blog/public/tags/hexo/index.html","8a2be997a2fd76b6160b20786a385db1"],["D:/Blog_my/blog/public/tags/index.html","2871bc04895b4dbade4f76e6f19fcc72"],["D:/Blog_my/blog/public/tags/leetcode/index.html","ffdc7be05c5427af98de451003af440c"],["D:/Blog_my/blog/public/tags/情感分析/index.html","bd777536969db9254db4d4f052937539"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","5fe0fc6e92bbef6c8d4888f07f181f00"],["D:/Blog_my/blog/public/tags/登录注册/index.html","820242822676b3dd5f6d79c6b4852c5d"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","de155163b237c9a496244be6f7f84263"],["D:/Blog_my/blog/public/tags/笔记/index.html","7dd17af216d77adf3abafe4e69bc8cd7"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","860ae798f5e2fb3157c57f5ca490b6c6"]];
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







