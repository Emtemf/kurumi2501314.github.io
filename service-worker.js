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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b951ba080075cbe45c2e39400bc35fff"],["D:/Blog_my/blog/public/Gallery/comic/index.html","c9c6e25262c9cdbb55cc7767840901ad"],["D:/Blog_my/blog/public/Gallery/index.html","e51decd5c7d12b80ff0aa1decb498722"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","28db1eea6cf64574f49759444b5596fc"],["D:/Blog_my/blog/public/about/index.html","59c6a1f6741c2c8a2665a10f7511c828"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1a6ce532644c0b5c6a9442f710fbda2b"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","319f048656b55295f71da9eac06efb99"],["D:/Blog_my/blog/public/archives/2020/08/index.html","b7bc2c9ac20c8b2f1051a4db466b59e6"],["D:/Blog_my/blog/public/archives/2020/index.html","15dfba5d8c907ddbd7cd16df5b539ed8"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ab0b9c0367056b216b6f5ebf6018e284"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","5aac9cb8ee2caef3dbcf0c9221e58d7c"],["D:/Blog_my/blog/public/archives/index.html","2a2e55e249c42826ca82100d67b05d59"],["D:/Blog_my/blog/public/archives/page/2/index.html","1a6d7bbda2773de422bbf243afb26f77"],["D:/Blog_my/blog/public/archives/page/3/index.html","9ce780127b0ff616d64232fc2810351c"],["D:/Blog_my/blog/public/article/1811f8b8.html","bfc2abd092a804c56bf517671952c2f4"],["D:/Blog_my/blog/public/article/18e57658.html","9b9cdc732319738d60cc3779f2147d0c"],["D:/Blog_my/blog/public/article/1e64d194.html","85946d674e30be076e4e0f6b326f7825"],["D:/Blog_my/blog/public/article/21f50898.html","7741d436cd3f9b2990be1b313d38c7e0"],["D:/Blog_my/blog/public/article/234762cd.html","c6e8598efe160319f0455126a6c695f0"],["D:/Blog_my/blog/public/article/2b97b46c.html","9c05cebeeaef08388c5064de9b53733a"],["D:/Blog_my/blog/public/article/358ad26.html","3e1908e62d8683b4697ed0dbdb2508e2"],["D:/Blog_my/blog/public/article/541a8071.html","007ce2ab7dd769fa97d646b31822d3e2"],["D:/Blog_my/blog/public/article/54412d2c.html","0e4d00db5a485434fb094b158e1ab4fd"],["D:/Blog_my/blog/public/article/5c1827a.html","3d76b1b17bbaecdfa8546ba435bf3c06"],["D:/Blog_my/blog/public/article/5d6f1d17.html","eadb02c3b3051a086de54152ee32366c"],["D:/Blog_my/blog/public/article/5dcc92c.html","3baf312f1fd5928ed1e5935444dbf909"],["D:/Blog_my/blog/public/article/67da7762.html","cd66b2185e195f2e89677d769db31786"],["D:/Blog_my/blog/public/article/683f20fa.html","f2a97a7c6964481514052e42f6721b4f"],["D:/Blog_my/blog/public/article/7758c0ce.html","0f37c25166c29bdeb33d71bc93ff512f"],["D:/Blog_my/blog/public/article/7a56c169.html","8613902b53cec615e3ea79bf053cbc54"],["D:/Blog_my/blog/public/article/7d561955.html","a03afec2dd1ec8b1d29ec40a1fc0b0bf"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","11e44f1296ad28016614b86f57b43070"],["D:/Blog_my/blog/public/article/c386a086.html","ef5b7f4d8d2480a467bf1b971fc77406"],["D:/Blog_my/blog/public/article/d080f90f.html","f194e11d3985362480f75d75c5a139fe"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","37005977a31406a13fb5ecf05df713f8"],["D:/Blog_my/blog/public/article/e21e4e82.html","94d8e9a77dbfcadf7eed6e6e88b87bdb"],["D:/Blog_my/blog/public/article/e419ec53.html","fcaf9394394b12fbb4537e176ac8f52d"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","e01979d15ea9c29091fd79786d11d321"],["D:/Blog_my/blog/public/categories/Android/index.html","45842a4396f36c2f9c548b97fe3edb4d"],["D:/Blog_my/blog/public/categories/index.html","8c26cb7ce7a49abd86e6a3b1d059825b"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","3b403baebf7b109718689539083e449e"],["D:/Blog_my/blog/public/categories/后端云/index.html","bc1b284dbf72557383feb957cf7f69d9"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a834a0f52de7d679c421f9ae38d98988"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0420acfa288d530630d7aff4623a0e8f"],["D:/Blog_my/blog/public/categories/百度云/index.html","5113ceb9458c6995786e2bd19da557f7"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b2a101692c6e422fd692cf8398606383"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1aa66092b5aac18afa7a4139930c5d5b"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","8d3bd68eb810788d9889807c8226f0b4"],["D:/Blog_my/blog/public/music/index.html","4ec20084a982a7c650fa09978acac91a"],["D:/Blog_my/blog/public/page/2/index.html","4deb688aea0b26a6d1440e8527206301"],["D:/Blog_my/blog/public/page/3/index.html","7a7c407b10dc5408434edbc07a0f3ec0"],["D:/Blog_my/blog/public/page/4/index.html","4dbc0fe3bd9e41e42e9e118bba65ae83"],["D:/Blog_my/blog/public/tags/Android/index.html","1a48d0f903deed1420fcc593bce10331"],["D:/Blog_my/blog/public/tags/bmob/index.html","413f6003742579a98235d8fcce75d4e4"],["D:/Blog_my/blog/public/tags/coding/index.html","b045122d3e5a58b7b96f1c1a033aba1d"],["D:/Blog_my/blog/public/tags/github/index.html","3141bcfe0b39608abf3f3276c38457c5"],["D:/Blog_my/blog/public/tags/hexo/index.html","6b5ce76400f3d946d55373d41b4d2d5b"],["D:/Blog_my/blog/public/tags/index.html","ef0a92e0d35fdb6b1e8f0ee1ed65fd36"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0e1d89960f1ef224ec6c68ae1ae83893"],["D:/Blog_my/blog/public/tags/情感分析/index.html","4f4cfa39c64f58b3703ca6532d553c6c"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","e32d2686efae501d8ea34939e1da3fd0"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b1e75053c9896293a2187bd58c7f18f7"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","7acc051490529a7ebc54c3a533ca2365"],["D:/Blog_my/blog/public/tags/笔记/index.html","3b5941c2a59aefd07e2d68624f015ebf"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","d4a5b095917e95a98f47bebaebe4ec09"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","ad8ca50b734754f76b221ca88250e191"]];
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







