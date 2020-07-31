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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","95ced27ea35391b5354a9062a763d107"],["D:/Blog_my/blog/public/Gallery/comic/index.html","4b45861b5916eac910ba1e985a213f83"],["D:/Blog_my/blog/public/Gallery/index.html","10f20b65421df624b3b35611cbd46756"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1398da30a52ddda219351bb091cf8e83"],["D:/Blog_my/blog/public/about/index.html","c157f6109a9f69b9d810328379fb8556"],["D:/Blog_my/blog/public/archives/2020/07/index.html","2cd70c6009b6bf9acfc250cd3d6968a8"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","05beb86d6af446f53793007a3c5ef5cd"],["D:/Blog_my/blog/public/archives/2020/08/index.html","546165e58d9a66844ea027c917a1d8b9"],["D:/Blog_my/blog/public/archives/2020/index.html","bbaec3b0d4915ad35335353fa1076642"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","3b18506232a91c028d849ee045181a61"],["D:/Blog_my/blog/public/archives/index.html","3bed63cfc1e5859835cf14d44cff3fd2"],["D:/Blog_my/blog/public/archives/page/2/index.html","73cb59487b691b5c9b0e413877e9189f"],["D:/Blog_my/blog/public/article/18e57658.html","46e90da6f347d37a86b396aa7a9bda90"],["D:/Blog_my/blog/public/article/1e64d194.html","2486fd66d5dbbdf3ead16c00259eb19b"],["D:/Blog_my/blog/public/article/21f50898.html","66608d6b88fbe526bddc4c27831b02ee"],["D:/Blog_my/blog/public/article/234762cd.html","d27671e27458e8ca450383757c330560"],["D:/Blog_my/blog/public/article/2b97b46c.html","bdb35f8d581efe88143b83785ad500f2"],["D:/Blog_my/blog/public/article/358ad26.html","2c5ccaa25ae1668d71ee1c0898efe6ac"],["D:/Blog_my/blog/public/article/541a8071.html","fbb43176e78c8ec3bd8dec1dc371d752"],["D:/Blog_my/blog/public/article/5d6f1d17.html","9f7450e0b8f6132315f1b5c0ec804b50"],["D:/Blog_my/blog/public/article/5dcc92c.html","932d6ad4512966cfb54b85720bf3329c"],["D:/Blog_my/blog/public/article/67da7762.html","9670196a274348262a3ea6d516be444e"],["D:/Blog_my/blog/public/article/683f20fa.html","e7502faa75179e6350f7ba9d9d4b6d4e"],["D:/Blog_my/blog/public/article/7758c0ce.html","35bb46bea7942109adb2d01e9c7b2ecf"],["D:/Blog_my/blog/public/article/7a56c169.html","e47fa48e0befd930a378e4952a00f29c"],["D:/Blog_my/blog/public/article/c386a086.html","0ff23ae7667eb63b3c2a893e95032758"],["D:/Blog_my/blog/public/categories/Android/index.html","effd375f1c1a2ba2d82b56f20a98c00e"],["D:/Blog_my/blog/public/categories/index.html","fbeba3249ddf54074d2d68340cac476d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","9d6af687bd98d90a3f02a18c8a7695bd"],["D:/Blog_my/blog/public/categories/后端云/index.html","98e5807906ab9e6c1f2c6b789f9752a1"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0f1b98cf046e66206c6701db033606bd"],["D:/Blog_my/blog/public/categories/百度云/index.html","6638203684b919330ea26c5cb25d0abe"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","e079aaa3e30e1d5365e4a51e2d710221"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","0cc47ee605c36461efc97cf372e1e0d9"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","67bfbd22db58bc4aac330abffe47dfce"],["D:/Blog_my/blog/public/music/index.html","9f5d8b5a4ec0090d0998cb7389cf45aa"],["D:/Blog_my/blog/public/page/2/index.html","91b439c49df85bd1aa9ff2940b3d03a2"],["D:/Blog_my/blog/public/tags/Android/index.html","2756b4e046e8377cd87ed7bdc6ba7a67"],["D:/Blog_my/blog/public/tags/bmob/index.html","17be10d49031374643847953d0a01027"],["D:/Blog_my/blog/public/tags/coding/index.html","96fb61385303dbefab2dc75861617300"],["D:/Blog_my/blog/public/tags/github/index.html","dcd490abb4a0e27ebfd736a92a4dbd2b"],["D:/Blog_my/blog/public/tags/hexo/index.html","51927858f622d5716f0291945d62e997"],["D:/Blog_my/blog/public/tags/index.html","48e2ca47f2ee16ce67691930330bffc8"],["D:/Blog_my/blog/public/tags/leetcode/index.html","845cbccbf8b4cbae42b1ea5bb3ca30ab"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b028bcd2f11631639f17aa9b65cf5b09"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b8902caca8d11bc2ba3e459fa6e4d860"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","8a327bd5d806eec2054c5a121c7b8ec9"],["D:/Blog_my/blog/public/tags/笔记/index.html","a60e32c4e8a97b2a3e9b1feab32d84cc"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","1cb7bcbfbffb488d5d4ee15aec973e9d"]];
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







