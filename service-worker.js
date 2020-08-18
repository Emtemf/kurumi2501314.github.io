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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","2c0d18f266f375601f6d16a9b048f179"],["D:/Blog_my/blog/public/Gallery/comic/index.html","85dc58762ffadcf9ae30555ecf0bc023"],["D:/Blog_my/blog/public/Gallery/index.html","48b419b3ca8f3c0899b0905d654852c1"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ea0b5340a9f4b00c80c399295d67c5ca"],["D:/Blog_my/blog/public/about/index.html","1cd0574a5b34b4f1fafeb8e54f50f0cd"],["D:/Blog_my/blog/public/archives/2020/07/index.html","7d9ea051a31d0e7c2ccbfd7a9661efd8"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","92cc03fadced90d573456859398426da"],["D:/Blog_my/blog/public/archives/2020/08/index.html","4dc02a7b77b6c7a79c86283e260652c5"],["D:/Blog_my/blog/public/archives/2020/index.html","c7def3da0afcc4c9753b392d80cb6432"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","c4aa1325b2ecf2886c24a97a8cbd1cb7"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","5ef2004d3d4b4c310bebab941e6ce85b"],["D:/Blog_my/blog/public/archives/index.html","e50888fb9cc1439e5f3cc5b43cfa500d"],["D:/Blog_my/blog/public/archives/page/2/index.html","b9c222410c2459ca901095da2fa297a3"],["D:/Blog_my/blog/public/archives/page/3/index.html","33d31fd14f0babc4c5c94ee4e677fd4c"],["D:/Blog_my/blog/public/article/1811f8b8.html","edda10a9a0c3c4121d46d550c8aff142"],["D:/Blog_my/blog/public/article/18e57658.html","262d8ce723332bde4613d12618889544"],["D:/Blog_my/blog/public/article/1e64d194.html","fda8f6b9091adc9abb7fe1233e3c5e45"],["D:/Blog_my/blog/public/article/21f50898.html","f745a8596d4fe0b7fce1f494d00fb115"],["D:/Blog_my/blog/public/article/234762cd.html","71c791d8c3e93499441c33c8e80a238d"],["D:/Blog_my/blog/public/article/2b97b46c.html","a35a3b11102fff7b645ef55ab7f98b64"],["D:/Blog_my/blog/public/article/358ad26.html","13e1d3cc2e6248006aa1451354dbf671"],["D:/Blog_my/blog/public/article/541a8071.html","8caac04e878fb0304010ecab17e38c64"],["D:/Blog_my/blog/public/article/54412d2c.html","a15bc2ec48c979ef6ef5b360b0bab173"],["D:/Blog_my/blog/public/article/5c1827a.html","c1e2081e9f68ef0d83753fddb31a9cd9"],["D:/Blog_my/blog/public/article/5d6f1d17.html","d293378dee3cc828d7ce6e83c194b962"],["D:/Blog_my/blog/public/article/5dcc92c.html","8d199cc9840fe2b36e92c72116ed9984"],["D:/Blog_my/blog/public/article/67da7762.html","4d402a8f069366c528f7efa8e7ba3d62"],["D:/Blog_my/blog/public/article/683f20fa.html","81e88e339b05cdb79a82d7d71d511658"],["D:/Blog_my/blog/public/article/7758c0ce.html","97910a3db58f48457d930948a390c356"],["D:/Blog_my/blog/public/article/7a56c169.html","c73465d7c77654513da5b23104957278"],["D:/Blog_my/blog/public/article/7d561955.html","c4d3c852f7962eb70a327d1ef3ff4785"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","b4870e897b8c4bfa543e7b4947ac3394"],["D:/Blog_my/blog/public/article/c386a086.html","79b780c201fc8f9da969cb2a897fae1f"],["D:/Blog_my/blog/public/article/d080f90f.html","71b43bc96f9401e12b553e5067fc5763"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","e2f539756e8513b50898c20da6a108eb"],["D:/Blog_my/blog/public/article/e21e4e82.html","03dd0263721a8f0c7d620b0ce605eb4e"],["D:/Blog_my/blog/public/article/e419ec53.html","0f279ef6e7babd1080982ea1f94df63d"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","b057462b1016b5841503c270c23f4eae"],["D:/Blog_my/blog/public/categories/Android/index.html","3ebc85aac9b264a947db32e3cd8b2eb7"],["D:/Blog_my/blog/public/categories/index.html","5c19238de922eb89f21c4a24ffe32f26"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","d6f8ae4c277d852cf8f5a93eaf670550"],["D:/Blog_my/blog/public/categories/后端云/index.html","7f9685329f78f6e11b8a6870a84cbb61"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","22d71c643a20ec49d490c753b75b2ee8"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","c4884b06ce15477767d7741297b6b346"],["D:/Blog_my/blog/public/categories/百度云/index.html","25cb41dae7a3a5d55f9bf506a45c3a2a"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b70011751c4393cd565f303b21955dff"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","07b2effc83fbed94d5b23e4f1a76eece"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","8e9601d1239a66db226a6bc542cfa739"],["D:/Blog_my/blog/public/music/index.html","44192bddc4ee9a0599e8485987033795"],["D:/Blog_my/blog/public/page/2/index.html","c71b3b9c385eabb939943a70efe91b0e"],["D:/Blog_my/blog/public/page/3/index.html","d816917ffb7bcc62e8b6a9abe6cb2cd3"],["D:/Blog_my/blog/public/page/4/index.html","9c572d206e8eb922f90863e99cf97afb"],["D:/Blog_my/blog/public/tags/Android/index.html","8209140fd3404db63cfcbcf7653d83f3"],["D:/Blog_my/blog/public/tags/bmob/index.html","4d619f8cb1946cc86a3f398e20a55b66"],["D:/Blog_my/blog/public/tags/coding/index.html","4c2c05649ab5602e4f3ba969a2f11bcd"],["D:/Blog_my/blog/public/tags/github/index.html","1fd8dc8e8b8a7958c944db949124d20f"],["D:/Blog_my/blog/public/tags/hexo/index.html","a827b5640ebe6d8939fa14e44be7c826"],["D:/Blog_my/blog/public/tags/index.html","f429a9dda3dc1ba0492030ab4797ef6c"],["D:/Blog_my/blog/public/tags/leetcode/index.html","10a9cc953fb56bbebbe167bb032c3505"],["D:/Blog_my/blog/public/tags/情感分析/index.html","9456dbb69454c60dbf7c2a7c3aae765e"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","238fbf84f739b1703b215eb70a1d5622"],["D:/Blog_my/blog/public/tags/登录注册/index.html","ccb4d001a757cdf445f30e7cf13d7bb2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","4ce61384701c315f8090c9c6411273d2"],["D:/Blog_my/blog/public/tags/笔记/index.html","07e2fbe9346df4dcdfee0a6e5ddddd84"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","e35a8f50923ff9a144ab3f722c2206d0"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","43f81d6593d6f85100f77ce94b4ab81a"]];
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







