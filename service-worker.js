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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","0581f1cc511e1bf165ead20f2060e862"],["D:/Blog_my/blog/public/Gallery/comic/index.html","fe752f1a0b26463ed2871457b4fc5fb9"],["D:/Blog_my/blog/public/Gallery/index.html","f321a1f95b1fe225e2b1af14915a7796"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","7aa6bc17d529d78ce635a1811b350726"],["D:/Blog_my/blog/public/about/index.html","9d2ae7c9bfceec701ef8876b1f3d8b58"],["D:/Blog_my/blog/public/archives/2020/07/index.html","e48861476ec35082a7f409d86b23add8"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","cc18c31495acc77dedc527d710d0a20c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","472741eae0370b998a81f6cd4b6b477b"],["D:/Blog_my/blog/public/archives/2020/index.html","e01ff680e7ecf8384205649b08ab8920"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","5d5f64e086f0ea1a2b705556b6466b4f"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","606c286a2bbc00b84881bbfce5c99589"],["D:/Blog_my/blog/public/archives/index.html","4ed81a51c6d52d7e9c31e2b6755c2a6c"],["D:/Blog_my/blog/public/archives/page/2/index.html","379138b05cbb9193c07b4ec53bf1eaad"],["D:/Blog_my/blog/public/archives/page/3/index.html","0bad3d4ea9c0f23051914920012b7b22"],["D:/Blog_my/blog/public/article/1811f8b8.html","5ea22bc874c2336824d05ccf793a8366"],["D:/Blog_my/blog/public/article/18e57658.html","516935ffdb746c419f8bb982a23525eb"],["D:/Blog_my/blog/public/article/1e64d194.html","5f046b6c3141091a0e660b319acee5ac"],["D:/Blog_my/blog/public/article/21f50898.html","2872ad9d0fed0536c3e440f1ca636c32"],["D:/Blog_my/blog/public/article/234762cd.html","3917563ab6261e94c0265bd8a6518ce1"],["D:/Blog_my/blog/public/article/2b97b46c.html","5beb51738f92f067c63b658377daa7e9"],["D:/Blog_my/blog/public/article/358ad26.html","f229dfb7316cdbb41a6d7e95bcf8b068"],["D:/Blog_my/blog/public/article/541a8071.html","a89ea22696b7232d965794ae12a8635d"],["D:/Blog_my/blog/public/article/54412d2c.html","951aa5780809d106a26718db0b16035f"],["D:/Blog_my/blog/public/article/5c1827a.html","fecff42d79367e8183a04f23b46ca207"],["D:/Blog_my/blog/public/article/5d6f1d17.html","1b66624eda9e90664b03fd94473fa68f"],["D:/Blog_my/blog/public/article/5dcc92c.html","3ffc068d0300c0ae50364ee3fb86ae75"],["D:/Blog_my/blog/public/article/67da7762.html","4e015666b56734ae55b5d5a5e7ed6039"],["D:/Blog_my/blog/public/article/683f20fa.html","9f73205ec5634d3298b21d46ac317380"],["D:/Blog_my/blog/public/article/7758c0ce.html","36cc40ec364c29e8dc2bbf206a3494e9"],["D:/Blog_my/blog/public/article/7a56c169.html","efd9277cca5d06524dd772e9c2cec58b"],["D:/Blog_my/blog/public/article/7d561955.html","de378a3f5ea58a8f5c0f8a8059baaf93"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","937b5e0d0a17ee24c5cc625d7eff599b"],["D:/Blog_my/blog/public/article/c386a086.html","e1721c1554c120e5a4ef662b71857390"],["D:/Blog_my/blog/public/article/d080f90f.html","c1fdd2c549b9bfe7b363885c2f8698de"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","a5e44d26a2127888d5dfb9fa76ebe29f"],["D:/Blog_my/blog/public/article/e21e4e82.html","0c015516ea774db6be45605a857a1629"],["D:/Blog_my/blog/public/article/e419ec53.html","666bd82469cd42e05049503a7a4bd808"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","848b1a3083fa6f4ef6bf794fc76ca32c"],["D:/Blog_my/blog/public/categories/Android/index.html","5ddb0d7539a170c8f9bc96f03ac31c03"],["D:/Blog_my/blog/public/categories/index.html","e29cb102774840910ebc97c99b9adfcb"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","96608610aeaeb30dbb951942091c41b9"],["D:/Blog_my/blog/public/categories/后端云/index.html","e18d995bf7deb3ef431aaa662444ec0a"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","9815a81fc01d9864ccb1ab991cc5f4c8"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","8ce666065c1ef05d40aa92c2cf1ae3b0"],["D:/Blog_my/blog/public/categories/百度云/index.html","3eae8377b9874875936bf444893bde03"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","6b392156cef3288c91efaa121e0c34d6"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","bed5eec68eb4d3fcc66da915ace70819"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","14afab0ab4a6ab2e53234747bcd0a401"],["D:/Blog_my/blog/public/music/index.html","587fe364fb7221502a86b28fa4a2e81e"],["D:/Blog_my/blog/public/page/2/index.html","f11d8968d514cc984bd8d990c1aecc52"],["D:/Blog_my/blog/public/page/3/index.html","22ff50c2645147ed890372a60bd405fb"],["D:/Blog_my/blog/public/page/4/index.html","7baedaf3f122df37d149fd5413364199"],["D:/Blog_my/blog/public/tags/Android/index.html","a3b893b21bba10295c01e5b9a7966d68"],["D:/Blog_my/blog/public/tags/bmob/index.html","6c32d383eaae34abc52b7f6fd8c1ab79"],["D:/Blog_my/blog/public/tags/coding/index.html","4ba8c98f902d15dd481e077bb0d75c90"],["D:/Blog_my/blog/public/tags/github/index.html","18ac4fd8cbe3246a75f0ee9f14a8e90e"],["D:/Blog_my/blog/public/tags/hexo/index.html","ce5febb6c5d6ae63b547ad005678430b"],["D:/Blog_my/blog/public/tags/index.html","dbf1fe240709f7803c28c85c916fe549"],["D:/Blog_my/blog/public/tags/leetcode/index.html","436620fe9207fab464c10f73398f12be"],["D:/Blog_my/blog/public/tags/情感分析/index.html","cc62d8459927ba5c7b14f826a7a2edf5"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","8988f86542182caebc34b0f073a1c074"],["D:/Blog_my/blog/public/tags/登录注册/index.html","6af6ff114dccea51faff48f2699a2a87"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","ce861413a3055f6dd2b0764d667aa936"],["D:/Blog_my/blog/public/tags/笔记/index.html","d2fd89416770d8ab3af3d0f647c575f4"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","6a654e50cfe2df87a6fc3c3f940bf720"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5df7ded6a3f5b43043a42433a1a54f04"]];
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







