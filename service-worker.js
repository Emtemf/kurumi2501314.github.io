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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7c91fdab9c55ed8cc9c5c4ae903632ff"],["D:/Blog_my/blog/public/Gallery/comic/index.html","e5af43a27ae8fc94a202bcc1b3e2b313"],["D:/Blog_my/blog/public/Gallery/index.html","22b972154f879e260558be7630950bb9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","636027bb4519c3ef678a9bfe6f741e73"],["D:/Blog_my/blog/public/about/index.html","bdafc47ba5f4b5fdc0dd5802e87b4adf"],["D:/Blog_my/blog/public/archives/2020/07/index.html","fc560ec8bed2e177cd0dc347b009431e"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","039e9cb3bd42cee22d198ad2699cc586"],["D:/Blog_my/blog/public/archives/2020/08/index.html","0d77bb23c7bc4e41d79229c939410fd3"],["D:/Blog_my/blog/public/archives/2020/index.html","87f24720ae74727e7370aa41c0d4399a"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","504791ce875631be3d7c004feb374cdb"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","612230103bcb9b57cdb055fdc77a742e"],["D:/Blog_my/blog/public/archives/index.html","1edde414174a207e15242ccb8f49fa9c"],["D:/Blog_my/blog/public/archives/page/2/index.html","aa279606ad41f4b5ccedbec3854faf70"],["D:/Blog_my/blog/public/archives/page/3/index.html","f8607bd7efcfd70a7c995e4a3f69aacd"],["D:/Blog_my/blog/public/article/1811f8b8.html","7ac8a5213612cdc1c689fba47c4cf1bb"],["D:/Blog_my/blog/public/article/18e57658.html","920f8efcee4e86e78a4a5dc623e47934"],["D:/Blog_my/blog/public/article/1e64d194.html","5800a60cc592f8b3e6c32832fc584229"],["D:/Blog_my/blog/public/article/21f50898.html","73cb94beb694d9fde670eb9cf2cccb89"],["D:/Blog_my/blog/public/article/234762cd.html","7bd94e7a01a57b57a8901c6529aff56f"],["D:/Blog_my/blog/public/article/2b97b46c.html","a74fe6847b5fb7acd4b216706a691cfb"],["D:/Blog_my/blog/public/article/358ad26.html","6bbda86fc2d958b279053d47d41f27e3"],["D:/Blog_my/blog/public/article/541a8071.html","4f1ae0a0a5e95a29f2ed762b9d9d2bc3"],["D:/Blog_my/blog/public/article/54412d2c.html","bbe0d8551ce5713e980f136127d168de"],["D:/Blog_my/blog/public/article/5c1827a.html","f7fa3983fc325e30183fa9f8fb053378"],["D:/Blog_my/blog/public/article/5d6f1d17.html","16fc764f617b6fbb7a110de1bf4dc8fb"],["D:/Blog_my/blog/public/article/5dcc92c.html","797a2f858686e888defabb1495fe386b"],["D:/Blog_my/blog/public/article/67da7762.html","a99db34bdabe38566572bbabc1c6c466"],["D:/Blog_my/blog/public/article/683f20fa.html","ff15dd199beac7e0f4401f8b02f124fe"],["D:/Blog_my/blog/public/article/7758c0ce.html","50c61fd3c13afc17646ea9a30427b452"],["D:/Blog_my/blog/public/article/7a56c169.html","8a1950c81abb983b0a9f9d6d7c5d7fd5"],["D:/Blog_my/blog/public/article/7d561955.html","b3da2f93758d46db48aa2dbf6ee5e63c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","8210731c25e8543105f402db8310dd8d"],["D:/Blog_my/blog/public/article/c386a086.html","542a93abe348e077ec57fd0e55dc4ec8"],["D:/Blog_my/blog/public/article/d080f90f.html","8d495d5e7202aff7ad0262c7055976af"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","84bb0b5f8ae2b2afcfd3a76a263d28fd"],["D:/Blog_my/blog/public/article/e21e4e82.html","7bde9c988c219d27c1df3c6c2da2d054"],["D:/Blog_my/blog/public/article/e419ec53.html","e6c203d0d732933c90164203f9d8f9b8"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","9483890c6bb654719e7119b72d297607"],["D:/Blog_my/blog/public/categories/Android/index.html","e46d4fdd5dce363c90826178e03aa7d0"],["D:/Blog_my/blog/public/categories/index.html","de6b1548c83780d68f846c53937061f0"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","e04fbcc9dfd14e06e8b9e1ea8f3fa2a0"],["D:/Blog_my/blog/public/categories/后端云/index.html","546f2f42f9a897567a1f011ea35e8c96"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7a37257a0c368239a501e06b99cc4614"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","a906fbc7bfb3341fce0b2ce4e72dec03"],["D:/Blog_my/blog/public/categories/百度云/index.html","b0a001d18cf9fc2367a4f9be3061e3e5"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","69d419de8e3c716700be8887b345ad42"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","6414657734e4bcaf182b82745794734c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","f5755b325add0b197831f6b9da46eb98"],["D:/Blog_my/blog/public/music/index.html","69d7d5949b878dafaed0d18981818bc9"],["D:/Blog_my/blog/public/page/2/index.html","14dc13e66a8c5972c9b77a15e18eb426"],["D:/Blog_my/blog/public/page/3/index.html","353c7bfdba1522868f331b04d9cc2de5"],["D:/Blog_my/blog/public/page/4/index.html","c3e2f7eccb4c72376e95e084269242c6"],["D:/Blog_my/blog/public/tags/Android/index.html","c4308f95456c1b5a4613ebecec2632a5"],["D:/Blog_my/blog/public/tags/bmob/index.html","211b6403bad4cca0b645bec5a145d905"],["D:/Blog_my/blog/public/tags/coding/index.html","f8ee1c7e92e6c54221ec6cefc506c95a"],["D:/Blog_my/blog/public/tags/github/index.html","077513ecd4732d51a3114a4d7872cb78"],["D:/Blog_my/blog/public/tags/hexo/index.html","2afa20c66e38780fa5f87a9eb35738b1"],["D:/Blog_my/blog/public/tags/index.html","434e6a351c20025c50b82419a639c15c"],["D:/Blog_my/blog/public/tags/leetcode/index.html","e893404137420b7cbfae070b98eb1848"],["D:/Blog_my/blog/public/tags/情感分析/index.html","5459caea13c0139f986d0cd736140f42"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f4041e68d69b68226ccc4fa36238f448"],["D:/Blog_my/blog/public/tags/登录注册/index.html","1c70ad93c0501451bac09674aaab0a60"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","eb1d915b4853e9b2f39a504bef8436c5"],["D:/Blog_my/blog/public/tags/笔记/index.html","57e37a2f549aba56641be1909906e4fa"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","799156d4de0e9e07d0702b6420b87c5a"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c595be28f48b75041e1858eb63ecb95b"]];
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







