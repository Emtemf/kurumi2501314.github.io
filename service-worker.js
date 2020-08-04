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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","a19f8eebd4f8db034e7f589d3051be10"],["D:/Blog_my/blog/public/Gallery/comic/index.html","7146f5434a9a9471fa8ca8beb6ced7e0"],["D:/Blog_my/blog/public/Gallery/index.html","79233dfbe0d2ecb97654268d3b4ae9f3"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","f5b1ff94c2e9c837b755557f8c679ffe"],["D:/Blog_my/blog/public/about/index.html","c579ff2c9f895ef1d5fcf7664e16e43a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","5a368c1008002fdd237a77c229be9e12"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","dae454a8c212cc113bbfd26aa5e5f026"],["D:/Blog_my/blog/public/archives/2020/08/index.html","9583c529776f7cba399665c2fde98119"],["D:/Blog_my/blog/public/archives/2020/index.html","c1b74330fe4d19d309d56f744ee48f47"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","8450c80194110b9ba9e8d42ca188b9e3"],["D:/Blog_my/blog/public/archives/index.html","29937951797078788175b92042d95402"],["D:/Blog_my/blog/public/archives/page/2/index.html","cd34efdfc56b32c47fc8e1d7e4a3f441"],["D:/Blog_my/blog/public/article/18e57658.html","34344add99ec6ca873de321c59660860"],["D:/Blog_my/blog/public/article/1e64d194.html","f671c4a256910444986e38680934fb7b"],["D:/Blog_my/blog/public/article/21f50898.html","c0112dfd97e38bbcb548882e895638f2"],["D:/Blog_my/blog/public/article/234762cd.html","3feeb189fc8c923f24316f3c31338786"],["D:/Blog_my/blog/public/article/2b97b46c.html","986124fce1210c78dc405a6628987ea3"],["D:/Blog_my/blog/public/article/358ad26.html","d533fd384a5822ca1edd0bd99c8ed807"],["D:/Blog_my/blog/public/article/541a8071.html","98435dba1ae97fccafbd8211a36c8cee"],["D:/Blog_my/blog/public/article/5d6f1d17.html","dcd9bed95199523527a888c181d8243a"],["D:/Blog_my/blog/public/article/5dcc92c.html","ef36bd333dd86ade03019a23fae762bc"],["D:/Blog_my/blog/public/article/67da7762.html","c37668bd1e2b5b519242348807a0c030"],["D:/Blog_my/blog/public/article/683f20fa.html","8412703022056744b9ea94e43e83bbf0"],["D:/Blog_my/blog/public/article/7758c0ce.html","5a9a8caed2f672cc9e32e2ecc4428dc3"],["D:/Blog_my/blog/public/article/7a56c169.html","c93b1d79e8fcce28098d90e7ac0ac95b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","5472a4e658f0b769738c2f659cf1531b"],["D:/Blog_my/blog/public/article/c386a086.html","bfec48bc98e1b3ec75c7f4f5a1cc4fd7"],["D:/Blog_my/blog/public/article/e419ec53.html","18656e133c58fa6e93f384dc21947f76"],["D:/Blog_my/blog/public/categories/Android/index.html","be1c1d8af2d3034f3d4cabec0c25d502"],["D:/Blog_my/blog/public/categories/index.html","27473d52ebad8e9756299eca238c0f1f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","6c622b70a810e0662e05da9645b4c466"],["D:/Blog_my/blog/public/categories/后端云/index.html","56011e289c15a95fa6ef8b3dd281fd34"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","c11f61bb33d6aff86fa0e18b0f388151"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","66477a627c8b05cee7d9b2ad25e742e7"],["D:/Blog_my/blog/public/categories/百度云/index.html","23742f2f57ffd36b46b71d59b137ded4"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","bfd54c7979befdace4c9ffac19c406e2"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","55c35fcc176485ab5ce8f27b3c214b2e"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","6f5a3870d5f294ce6dbba38c2ed6579e"],["D:/Blog_my/blog/public/music/index.html","62a910db9e12c706bcdc5a89d3f3388f"],["D:/Blog_my/blog/public/page/2/index.html","4593b68d146a0f4440ffda027e6cd806"],["D:/Blog_my/blog/public/page/3/index.html","bd5d72754779ceb489d20100a18c3937"],["D:/Blog_my/blog/public/tags/Android/index.html","2fb66b6afe2c0b7b5a5f80a014335695"],["D:/Blog_my/blog/public/tags/bmob/index.html","5998bbd8b5a094586f2532aae96097dd"],["D:/Blog_my/blog/public/tags/coding/index.html","5aeb58b1a68b2e487666811c51fa1ffd"],["D:/Blog_my/blog/public/tags/github/index.html","43d0898914f719ea4650f8782c2ade5c"],["D:/Blog_my/blog/public/tags/hexo/index.html","096506e7d14f9e65aeaf81b2d206adb6"],["D:/Blog_my/blog/public/tags/index.html","42ff1e6b289a640d92f342197e15ae9a"],["D:/Blog_my/blog/public/tags/leetcode/index.html","d2d295f5f27a3e0b0430d0f95dbb323a"],["D:/Blog_my/blog/public/tags/情感分析/index.html","d6e4674a0e4b14d782b8d7c061fa5a00"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","819d624da8c2f92d9efd90648027d6d6"],["D:/Blog_my/blog/public/tags/登录注册/index.html","7e66f9f98e4fc4de2d60f18efe96951e"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","96a63d4da291921bccb9a8d7ba31c63e"],["D:/Blog_my/blog/public/tags/笔记/index.html","2d9a4933938d41f0543bc21b92c9873b"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5718a4bc44646f92af591c094bfc1069"]];
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







