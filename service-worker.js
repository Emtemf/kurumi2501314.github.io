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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","bb3bd4840ef9bedf3ddafa5f69e78b50"],["D:/Blog_my/blog/public/Gallery/comic/index.html","dcba14abcc315b16ba335f537fe665de"],["D:/Blog_my/blog/public/Gallery/index.html","00b62684b8edb0948f351772878131b0"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","eb4fd1a1fd619585d0c8196fbcfca9d5"],["D:/Blog_my/blog/public/about/index.html","baf1fdfcc8847ac807346bae4f01c24c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","3eb73c7129d3f3c338aa4abffcec1f77"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","f8756605e185d8acb18f88bb970336d8"],["D:/Blog_my/blog/public/archives/2020/08/index.html","41a4f12f5a35acd2c8584561e8d7e99b"],["D:/Blog_my/blog/public/archives/2020/index.html","05fe320f1f25736fe4f485717c0b1e18"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f7aabfe89398709e10ccf2e818299c70"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","e23f8cbfe384566c5ee36fd365a34505"],["D:/Blog_my/blog/public/archives/index.html","0b62610e190c3e9807bd7db959449e83"],["D:/Blog_my/blog/public/archives/page/2/index.html","e3103ca3101e8e4012d7fc58426c8b31"],["D:/Blog_my/blog/public/archives/page/3/index.html","64803d93cd07a41f392dc0d629b9d850"],["D:/Blog_my/blog/public/article/1811f8b8.html","7468273e5cb6118af648fd2de7c67783"],["D:/Blog_my/blog/public/article/18e57658.html","609c4454286aae3f6e2d5b70708e60b1"],["D:/Blog_my/blog/public/article/1e64d194.html","8acbd89f75536595fd002d1b5b470f33"],["D:/Blog_my/blog/public/article/21f50898.html","9fdf214d0666554df5130987e9e8573e"],["D:/Blog_my/blog/public/article/234762cd.html","63399d718ead1b6a9a8cfa8be4ecbf70"],["D:/Blog_my/blog/public/article/2b97b46c.html","70bc7aaf8e2393b2154dc9c54dea8577"],["D:/Blog_my/blog/public/article/358ad26.html","1a673b1cfb7f21c6d2e3c77b68abd04e"],["D:/Blog_my/blog/public/article/541a8071.html","f13e1fa5771b7b64545ed27f431c8c0e"],["D:/Blog_my/blog/public/article/54412d2c.html","8adb969b067c92556cb263616e7cd618"],["D:/Blog_my/blog/public/article/5c1827a.html","ed44febbc8930032759748cae90ea7a1"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a457fe802d73ef01ea6368b1669b93a4"],["D:/Blog_my/blog/public/article/5dcc92c.html","d8fcc29db97a4c0ab8aa50fbcf435661"],["D:/Blog_my/blog/public/article/67da7762.html","9466f787fcf09167d2f2040dcb587996"],["D:/Blog_my/blog/public/article/683f20fa.html","5bc7fdebe89f7208f0a6d857eb8cb1c5"],["D:/Blog_my/blog/public/article/7758c0ce.html","7d1190b7fa1daee349fc742deff6b085"],["D:/Blog_my/blog/public/article/7a56c169.html","94c297177cb62925137481220f784593"],["D:/Blog_my/blog/public/article/7d561955.html","f9f72ff9ed048e49a6173a95f5a45d1d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","4ebe3cb4ed70a40abe26b8009ed75724"],["D:/Blog_my/blog/public/article/c386a086.html","0e87d6df732f8aedaf1e9bd4210160ad"],["D:/Blog_my/blog/public/article/d080f90f.html","776312ae3f41460da7f9a0861bb2cf10"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","36776136c4714c89689b6bab8a10862c"],["D:/Blog_my/blog/public/article/e21e4e82.html","d1914257653e15570ec60e749f0c2f4a"],["D:/Blog_my/blog/public/article/e419ec53.html","873c7e977f2b8905bc905e8bb8f2676a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","9c4d6bc5e763bdea0921ece6c0e1088d"],["D:/Blog_my/blog/public/categories/Android/index.html","fd1a87aa79cf374a8b5d6937766359d5"],["D:/Blog_my/blog/public/categories/index.html","b2bfae58204adb6ca84c3cd07786d9da"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","5833a1b9d63c098de0c64eb0c25cedbd"],["D:/Blog_my/blog/public/categories/后端云/index.html","69bbcf547d3e6cbca22963801f751cc6"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a0b02749cfc8d0654f2dff53aac4944a"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0f7fd4fd12c7a1839ef9d87f00e4e4c8"],["D:/Blog_my/blog/public/categories/百度云/index.html","a379fe7d6b87ea8b7f0b52343021c280"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","a2b17fb7c9da62e78b95d19fbfbba9f7"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","141e91bd07c5536bdaf9d85723b0bc6f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","426cf75c0d201655ee0f947fd7363eaa"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b20ca163705784a70eab4905e398d8d3"],["D:/Blog_my/blog/public/music/index.html","991232a7cd56b765eca4d5ba16428342"],["D:/Blog_my/blog/public/page/2/index.html","c84574b7573197b35bf2b9e2c78249c6"],["D:/Blog_my/blog/public/page/3/index.html","2e44a85ba44c0073a11631d43f914899"],["D:/Blog_my/blog/public/page/4/index.html","c88cb05eb3e3e70c950b985669e23348"],["D:/Blog_my/blog/public/tags/Android/index.html","103649990ada63d22194048de30720ca"],["D:/Blog_my/blog/public/tags/bmob/index.html","58f408cfd69921dbbdd1a09ec919ef3f"],["D:/Blog_my/blog/public/tags/coding/index.html","71e4accd71f695a57ca58f837a74013e"],["D:/Blog_my/blog/public/tags/github/index.html","8680da3c4be324469addbbd23c71c7ff"],["D:/Blog_my/blog/public/tags/hexo/index.html","2096228e30969276bf694d4eab8de5b4"],["D:/Blog_my/blog/public/tags/index.html","6dcd3e7c7e993d2d7ec73c000efee1ea"],["D:/Blog_my/blog/public/tags/leetcode/index.html","e645209f0ad1d979993d34616bfcc738"],["D:/Blog_my/blog/public/tags/情感分析/index.html","2a860463ac71b34cf18f43bd483ee87a"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","97f5124dc1101bf9badd3519c1bcfb69"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b19dbd3ecb9cc0f1c87feff2907bb288"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","7eaa9b03477b0af70474f998b67a3fc2"],["D:/Blog_my/blog/public/tags/笔记/index.html","1ac56dc2bc6355c574876a4344cfb6ed"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","dacea5bb5379b479bb9940537995f112"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","2bc07c44842bde178a5ea99f63294e76"]];
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







