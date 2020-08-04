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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","5671909b97111adc87a3b014e1916483"],["D:/Blog_my/blog/public/Gallery/comic/index.html","21a533e454d77106c109722aacdc6eb4"],["D:/Blog_my/blog/public/Gallery/index.html","42a773a9d77fc45b70aee866a9b3099e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","3da35a8b4bdc2758cb423f5aa22a3319"],["D:/Blog_my/blog/public/about/index.html","697a6082caa2c1ef03eccd24c4912097"],["D:/Blog_my/blog/public/archives/2020/07/index.html","bcd0e2e6840ff900ea697d6fa1b91cc6"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","5c86a020d124a6efc8d43c7f65a39ecc"],["D:/Blog_my/blog/public/archives/2020/08/index.html","9ff031157861bfc96aae789204657430"],["D:/Blog_my/blog/public/archives/2020/index.html","13f5222c23e047feb916dfc86d5dbef5"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","db01a87211d6b395a582686fe683faf1"],["D:/Blog_my/blog/public/archives/index.html","56f420ecaa83f3058c993692b01f2558"],["D:/Blog_my/blog/public/archives/page/2/index.html","b4c9b5abb157c1eb4a763681ee3fd0e6"],["D:/Blog_my/blog/public/article/18e57658.html","64c7f985975140562ca83736be6c8c55"],["D:/Blog_my/blog/public/article/1e64d194.html","4fd94521274d0a7d439ea64dc2d6b732"],["D:/Blog_my/blog/public/article/21f50898.html","7bad070430d61b5adb22b0b8e5f6db17"],["D:/Blog_my/blog/public/article/234762cd.html","93cb3581a6ab4158cc183452724b7d9e"],["D:/Blog_my/blog/public/article/2b97b46c.html","522e18a9f0abffa4da8115711e263f85"],["D:/Blog_my/blog/public/article/358ad26.html","cb55c83eaad609dc1538bd9e14cb860f"],["D:/Blog_my/blog/public/article/541a8071.html","39a8662d721be2fbfd37ad12dcc2630d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","74bf8a85d9aa978320d1e7bd9eeba574"],["D:/Blog_my/blog/public/article/5dcc92c.html","0171b07b280b3621071bbad150eded8f"],["D:/Blog_my/blog/public/article/67da7762.html","6974bce53f4f38a5ba30a014e19d6a7b"],["D:/Blog_my/blog/public/article/683f20fa.html","c95f13be396ae792fbefe1aebca84532"],["D:/Blog_my/blog/public/article/7758c0ce.html","4db965e7e0963a5382895608420a53dd"],["D:/Blog_my/blog/public/article/7a56c169.html","20c581a22edb932abba8e536263fd4ab"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","4a6d470ddd32f33e0dd87623a7f416b2"],["D:/Blog_my/blog/public/article/c386a086.html","22dc6dc91a3325ff841adc9b39bb5446"],["D:/Blog_my/blog/public/article/e419ec53.html","f477cd039ce2f0c2fcbed26be69c4c8f"],["D:/Blog_my/blog/public/categories/Android/index.html","f379256caabbd8147f35431a7ee1c84f"],["D:/Blog_my/blog/public/categories/index.html","8cebe01a95c4f1eacc83974f512dca29"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","490fe9a1201540ef4f6de1253779bd1f"],["D:/Blog_my/blog/public/categories/后端云/index.html","f4931aff43a98cac1d856ce22cf9b299"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","afc5b1ff6cd5fe8c7505c4063df2af37"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","7c6c1fd1cd19ae7cdd16ca611f185174"],["D:/Blog_my/blog/public/categories/百度云/index.html","34c8d44efe5f1aacb90869dfc5b27d89"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9fdf2c885b6bffcc95850644a3c5b416"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","d70d6962d0b9950cbc3f756fb8dcb34b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","7bf3575e72db07b83aeb09076dc78428"],["D:/Blog_my/blog/public/music/index.html","86ff058be4953baaf76d30adc147d88f"],["D:/Blog_my/blog/public/page/2/index.html","c345f5e40f05e604f5c4939291bdff2e"],["D:/Blog_my/blog/public/page/3/index.html","75e17e1d60d019f2a4d6776a1f8ee11a"],["D:/Blog_my/blog/public/tags/Android/index.html","28252748ff5ddecd063a7c431e1b55bf"],["D:/Blog_my/blog/public/tags/bmob/index.html","83d6f9449424982a61cd1172eca40373"],["D:/Blog_my/blog/public/tags/coding/index.html","345e2e9d56a99b47c100d5df35d48303"],["D:/Blog_my/blog/public/tags/github/index.html","a1cb09a7c8678363ebe823bfb60f6110"],["D:/Blog_my/blog/public/tags/hexo/index.html","1db965e5cb1135e9201cfd725cac50a2"],["D:/Blog_my/blog/public/tags/index.html","ec208d0ba19b38529ab11c0f320cc198"],["D:/Blog_my/blog/public/tags/leetcode/index.html","c5902c749aa971f332fca2a8e019c0cf"],["D:/Blog_my/blog/public/tags/情感分析/index.html","70a48092dccf57a0ddafcbb479503fef"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","59f08aba74722be6ffbf2284123b0deb"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b65372ebcf47c9c3df88a4eaf77e9f45"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","53ebaa24f4ec73fb6209ea5a74deb9f7"],["D:/Blog_my/blog/public/tags/笔记/index.html","8d42f87a3676a66df483a3f816311246"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","20b6d3b159a15c3ac179745e60505970"]];
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







