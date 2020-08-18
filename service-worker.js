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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b842868048398a6a618e4b41a6b1ec11"],["D:/Blog_my/blog/public/Gallery/comic/index.html","2225bee4b4b8902d6123a208dcdf271f"],["D:/Blog_my/blog/public/Gallery/index.html","8ccfb148bafb119a4265a6574776e04c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ff34d9ba451feb9879aec2f07e22bce0"],["D:/Blog_my/blog/public/about/index.html","f56fb36194076fec9b7d6d05be6c87b9"],["D:/Blog_my/blog/public/archives/2020/07/index.html","d868850039af151d13d264676ea4b612"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","3a0244c35e9c742a8d58bc3b26c3714f"],["D:/Blog_my/blog/public/archives/2020/08/index.html","57d5920c53a0dc4814e546b3e5fc3c03"],["D:/Blog_my/blog/public/archives/2020/index.html","e39399405e82c664e69451d9298b9669"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f64c81e9ea9e206463a90d51302d4210"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","5cdbb34d56bf8a81d78de75475d55b08"],["D:/Blog_my/blog/public/archives/index.html","3ff6ccc4a8ba09340b175132090e12ed"],["D:/Blog_my/blog/public/archives/page/2/index.html","4dd0a042590b24159e038dc4e660b959"],["D:/Blog_my/blog/public/archives/page/3/index.html","68192e14489d6d59b718fd66f7efe5b9"],["D:/Blog_my/blog/public/article/1811f8b8.html","2a8581caae806ddc3157f3badd3d8343"],["D:/Blog_my/blog/public/article/18e57658.html","be8bd0bf9a1abec973ddc3276f10588b"],["D:/Blog_my/blog/public/article/1e64d194.html","b141442b25ff2db51ea34fe963fc4c3b"],["D:/Blog_my/blog/public/article/21f50898.html","574ed56345b38e70a57ff1078cffeb21"],["D:/Blog_my/blog/public/article/234762cd.html","1d6f9a892f79c4a55e721938d3d88647"],["D:/Blog_my/blog/public/article/2b97b46c.html","0075a452b1e729f534aebe2bc4a537e9"],["D:/Blog_my/blog/public/article/358ad26.html","7739beab63c8e414b6989dd79d02507b"],["D:/Blog_my/blog/public/article/541a8071.html","f314a10a5d346e8b91b1cceff87b49d4"],["D:/Blog_my/blog/public/article/54412d2c.html","343dd2c90d4fbc5270a09ebdf888f1f8"],["D:/Blog_my/blog/public/article/5c1827a.html","b66477cae890d06df3e05c0e04ec7710"],["D:/Blog_my/blog/public/article/5d6f1d17.html","e96f8f75b8193062ec49bf57bb132496"],["D:/Blog_my/blog/public/article/5dcc92c.html","ff3d6a65d4fe015792738697511cb9c7"],["D:/Blog_my/blog/public/article/67da7762.html","17f1d0ce3786b4949582e37b5f0da434"],["D:/Blog_my/blog/public/article/683f20fa.html","7c0c9a0239b2b1cf72aa4d4977b0b808"],["D:/Blog_my/blog/public/article/7758c0ce.html","e52f843bc698f357abaca7d925f80da8"],["D:/Blog_my/blog/public/article/7a56c169.html","c0d4e55e72b63eb0064e81c6d442586d"],["D:/Blog_my/blog/public/article/7d561955.html","beb0742021f1e99951ab192c4f2d711b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","6402747f70f996c796f8d77d2b830f35"],["D:/Blog_my/blog/public/article/c386a086.html","9b5e99f20c1e808a63d3534a8dcf5dbf"],["D:/Blog_my/blog/public/article/d080f90f.html","6cf4ba899724894231d2822e81b4924d"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","9a44f7dd4358b64fdbb536ce7e7aa228"],["D:/Blog_my/blog/public/article/e21e4e82.html","2d7ecdafa59fdf1a9d7b92591f6f3f3b"],["D:/Blog_my/blog/public/article/e419ec53.html","d85367e468f97d9f894918b518535144"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","9169c5e37460ce9cff6df8a29693f145"],["D:/Blog_my/blog/public/categories/Android/index.html","9219ce39d88a8562e11385f4a4a2bfd9"],["D:/Blog_my/blog/public/categories/index.html","1350c626a05322e8dd6c44d48df601ba"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","57bad764d89ffaf4c6836537344f0bc4"],["D:/Blog_my/blog/public/categories/后端云/index.html","4e8fb2585d985bc0d3ec67bf7cda3f2e"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","61288d154a0c25a02bfb733cb5b92aa1"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","9043a1d9ffe558fe8e0e05f90ef0dc1b"],["D:/Blog_my/blog/public/categories/百度云/index.html","14cb08847eda914878b8525af660c8e8"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b093b90a33e60590dc948852280c4ba9"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","8ff6735e76fc381fe3cc0c0a53ecd40c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","0bbdadfa472922211f5cff0b39c9cbc9"],["D:/Blog_my/blog/public/music/index.html","df42bbde84445f80ded436740f7c3c92"],["D:/Blog_my/blog/public/page/2/index.html","43033cd119cc241ed7cf4992a3983ce4"],["D:/Blog_my/blog/public/page/3/index.html","53ca19740a9756edbaf6fc4677f4ec64"],["D:/Blog_my/blog/public/page/4/index.html","828fb06753d56bebcb4a5c3c64dd5b48"],["D:/Blog_my/blog/public/tags/Android/index.html","19c7eac9752101f32d43405d5303bf73"],["D:/Blog_my/blog/public/tags/bmob/index.html","8e7b0b1e2e3803c5292affafb89612be"],["D:/Blog_my/blog/public/tags/coding/index.html","bcaa47ced3eeed2a6fd4b80f14b2437a"],["D:/Blog_my/blog/public/tags/github/index.html","a57d6e45108c33cbd84598cb684b984e"],["D:/Blog_my/blog/public/tags/hexo/index.html","b0d7aa323795f86a5f5b3c94fe4776bf"],["D:/Blog_my/blog/public/tags/index.html","fe072f6e95a0d5f9cb4bfe1ffe91abc4"],["D:/Blog_my/blog/public/tags/leetcode/index.html","6cd332f30225f21c09ef070316d16740"],["D:/Blog_my/blog/public/tags/情感分析/index.html","fde157473546af96656a6eb9bc9c5931"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","d0a6167b2b9957a29693ed8f7e5c671d"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b4fd334e1378bc531acadae3c46142f8"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","ef43e76d5a93d9959abbe15413d5fd65"],["D:/Blog_my/blog/public/tags/笔记/index.html","18f9641796fba318726a63d8e9da991c"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","a7374b10cfbee12f658ca75f3c28c474"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","badd66191003e444c754f5f4308ab082"]];
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







