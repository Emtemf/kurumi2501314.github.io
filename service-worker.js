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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","07e58de88cb9a76a95f2d7be9b5f1a5f"],["D:/Blog_my/blog/public/Gallery/comic/index.html","ef272e9bb135d65ca0f84b9d7238aa78"],["D:/Blog_my/blog/public/Gallery/index.html","e68dbacab0545f1c918787d48888ea8c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ead9f3e9685946f87e553df8e0871fc9"],["D:/Blog_my/blog/public/about/index.html","3b597c753a87b6c726e1dd1ea1adf9f2"],["D:/Blog_my/blog/public/archives/2020/07/index.html","11ad2c5a4cb7f1631163d324ed2deced"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","27bccb5959dd9be83c0cccaee3979c48"],["D:/Blog_my/blog/public/archives/2020/08/index.html","a0d9b60be1bc99b0c0f32ae7d4d14900"],["D:/Blog_my/blog/public/archives/2020/index.html","84b8a3b2febe8bd7482708c2e932b420"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","2ca393581af97a06ffe254e857e0ee7b"],["D:/Blog_my/blog/public/archives/index.html","09b6175ce684c24c8274cd00874a3246"],["D:/Blog_my/blog/public/archives/page/2/index.html","9c1c567fbc3c14ffd72ac7f489c0f68a"],["D:/Blog_my/blog/public/article/18e57658.html","c3b1ee9b9182d772768582f6550157f3"],["D:/Blog_my/blog/public/article/1e64d194.html","f1f0f40a988e4afabba138e9f3630e4c"],["D:/Blog_my/blog/public/article/21f50898.html","d574d856496722a2c81c54378a82b774"],["D:/Blog_my/blog/public/article/234762cd.html","eef671b6accbe2df64627dd901c0b3bf"],["D:/Blog_my/blog/public/article/2b97b46c.html","22ef18b1780aa0557df76959abf788a3"],["D:/Blog_my/blog/public/article/358ad26.html","6400835bb5c778987f12c3c24f8743a0"],["D:/Blog_my/blog/public/article/541a8071.html","6a7429b9493939ca2c7489d04cb98470"],["D:/Blog_my/blog/public/article/5d6f1d17.html","4604fe5ca483bdf36e7ab9fe2d1b66c7"],["D:/Blog_my/blog/public/article/5dcc92c.html","88f09168968dcd5df6423c8c7c10d00a"],["D:/Blog_my/blog/public/article/67da7762.html","726d05fff0ef1b4f4b33cecc16d614ce"],["D:/Blog_my/blog/public/article/683f20fa.html","82b90fc07e8f68f7340b98cc16231024"],["D:/Blog_my/blog/public/article/7758c0ce.html","fc6a5cbdfe84c54587b774cc73626806"],["D:/Blog_my/blog/public/article/7a56c169.html","ecd761485d611ddeb376f3ac65d6aea6"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a3f7f3f44feeee1872543e6c171301ec"],["D:/Blog_my/blog/public/article/c386a086.html","c57fafe7161fda11f01cf4707ac5e342"],["D:/Blog_my/blog/public/article/e419ec53.html","df47cd9f373e17c84d6ae8a2bd869978"],["D:/Blog_my/blog/public/categories/Android/index.html","0b142bdfbd2dc1a776dca6c316f93fbc"],["D:/Blog_my/blog/public/categories/index.html","cd51f0ebda3af4ffc9c4eb6ba16d2fb6"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","bdac75cb3083eeeed314642e5ffc82bb"],["D:/Blog_my/blog/public/categories/后端云/index.html","1b9e12abe550642a94ffa5d24cede507"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a827c93edf6463498f02d4ac1d5f366b"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","727d744126a07d3f8ed83c331a35b37d"],["D:/Blog_my/blog/public/categories/百度云/index.html","a97a1732db6dda824f3f876616bd7905"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","a50a66c106b4c22e2aa99f2d83b2f497"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","ad9ebea25b072508d26d70dece441b96"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c27fd59716588a96c57abe0a27685cfc"],["D:/Blog_my/blog/public/music/index.html","ffc75836acfc891c2b01e55479fe13ee"],["D:/Blog_my/blog/public/page/2/index.html","0e8c76d64ac0aed940a281999020eaa3"],["D:/Blog_my/blog/public/page/3/index.html","6abe1df7f9a1ab1a70948949eb40006b"],["D:/Blog_my/blog/public/tags/Android/index.html","98acf372424a30a109d8704e60186f36"],["D:/Blog_my/blog/public/tags/bmob/index.html","ad7f138bc035578381c72cbfb1d1f967"],["D:/Blog_my/blog/public/tags/coding/index.html","abc1901727e7cab84f94ce4a278e01de"],["D:/Blog_my/blog/public/tags/github/index.html","0e66e9ac582b7ec23ad2bdda2540e4db"],["D:/Blog_my/blog/public/tags/hexo/index.html","b13de1318ff91e70f76a8077656596a3"],["D:/Blog_my/blog/public/tags/index.html","fd72d5061d3f167f817a75aef89cff8c"],["D:/Blog_my/blog/public/tags/leetcode/index.html","74bd2d4ad65f8936d76a09c6ffb5aa04"],["D:/Blog_my/blog/public/tags/情感分析/index.html","e450664625aabb62aabe0385c3c24ce3"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","8fea5791727c590788234911b77f2359"],["D:/Blog_my/blog/public/tags/登录注册/index.html","a427e6e47ddcb79949ecbbabaca1d548"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","4f91c3b1dc13c0c4ad768399ddc68993"],["D:/Blog_my/blog/public/tags/笔记/index.html","32cf547bf076baba51b9917d9bd7c1d0"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5b3ee1c1d029927f3751c2cab7075991"]];
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







