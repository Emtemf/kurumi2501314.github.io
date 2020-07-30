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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","ad99b35e6daffa0f8e182b0d03784435"],["D:/Blog_my/blog/public/Gallery/comic/index.html","d8f462c8edc5f7ed0f91d5ef206108f3"],["D:/Blog_my/blog/public/Gallery/index.html","c6441f9f66c8aa3b0a03b8e3ac8b5c32"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1b700294a0df12d32e9ddd2ca7fbf3c6"],["D:/Blog_my/blog/public/about/index.html","ce2ee4aff83aec9e109a421b3e97617d"],["D:/Blog_my/blog/public/archives/2020/07/index.html","be3c999b3c6da6dd59b564e10b09ad67"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","2276677ed409c4691b6174f169cd3f13"],["D:/Blog_my/blog/public/archives/2020/index.html","b056114943a8e0965c676bf7f819af02"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e36e8d08d66309c9db46f80804914d54"],["D:/Blog_my/blog/public/archives/index.html","cf5e32fd767faa906452a1e8cff33bac"],["D:/Blog_my/blog/public/archives/page/2/index.html","caccc56e805f7a3ddfdc83ffb331162b"],["D:/Blog_my/blog/public/article/1e64d194.html","5e62748c4553a1788840996cdf961d4b"],["D:/Blog_my/blog/public/article/21f50898.html","cad8585bc59313827660547b69206491"],["D:/Blog_my/blog/public/article/234762cd.html","610bac7ad3b78628fd325f091743c78e"],["D:/Blog_my/blog/public/article/2b97b46c.html","e2f592a8e979486d323ecb7c716d7be8"],["D:/Blog_my/blog/public/article/358ad26.html","f325de7e83934b92d5c7aaf57f5b49d3"],["D:/Blog_my/blog/public/article/541a8071.html","1752b60ea38f02facea18ebec321a855"],["D:/Blog_my/blog/public/article/5d6f1d17.html","1b239d76b1278d0f5736743aa4cbebb9"],["D:/Blog_my/blog/public/article/67da7762.html","ab5912a170b4ee96caf69237cc0d828e"],["D:/Blog_my/blog/public/article/683f20fa.html","e13767f63b5a39635f19b91f1d07144f"],["D:/Blog_my/blog/public/article/7758c0ce.html","48fa3bbe9ab38cff2b0a9cbbce9df94d"],["D:/Blog_my/blog/public/article/7a56c169.html","0a5c166fd6fed26accf93f3b2735175b"],["D:/Blog_my/blog/public/article/c386a086.html","dfbaaa43893b34c33ed754b667c1d809"],["D:/Blog_my/blog/public/categories/Android/index.html","71ef940c648de0d172ed24b636b4e070"],["D:/Blog_my/blog/public/categories/index.html","a09a23c6f2023d3732c98a0b16c2de5a"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","cfcfce4f57040dd3273e9ff3e7704cac"],["D:/Blog_my/blog/public/categories/后端云/index.html","46f8e2a07e5e661459f69c430c0d3afd"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","c7bcd7ce82e8bdb40e6ab10a6f468fa8"],["D:/Blog_my/blog/public/categories/百度云/index.html","a04f1ffabbfbbfc808f18413899fe6a9"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b0ea64dfea9ed4ee1e706f92cbc7baa6"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","896f5b521f4878c52bb4c6e19483d7cc"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","43d4c850bff34570255e042fdfd77ea9"],["D:/Blog_my/blog/public/music/index.html","8a61cc89271155315f504f3067580c83"],["D:/Blog_my/blog/public/page/2/index.html","3bc3e1ccc8b5fcbd2fcc0effde9d571d"],["D:/Blog_my/blog/public/tags/Android/index.html","7f0127694b9ead8b2152d3f6ee8bb8d9"],["D:/Blog_my/blog/public/tags/bmob/index.html","b5c263c8104c1d7dbe311b7a443a1b2e"],["D:/Blog_my/blog/public/tags/coding/index.html","c70b1a4f7f5ee5e65a0da246dda539bb"],["D:/Blog_my/blog/public/tags/github/index.html","b87e59ec1cfc720cfca88f59981fdfa6"],["D:/Blog_my/blog/public/tags/hexo/index.html","7596cc075ba34f8703294460774920da"],["D:/Blog_my/blog/public/tags/index.html","405c2cbd7cfd2786c31a84ab18f7ea1c"],["D:/Blog_my/blog/public/tags/leetcode/index.html","cc64fa8da61767699eef9abca72148c8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","2550eec7bccc68e97fff08825dbf0eec"],["D:/Blog_my/blog/public/tags/登录注册/index.html","c809cfa66fa486e072443425cf08a962"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","3b4fb0aa3db6578cdd19e03114925424"],["D:/Blog_my/blog/public/tags/笔记/index.html","12a8691fe30d55add8272a1336d3f082"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","2f521f230945dfdc1cc7252192eccdf8"]];
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







