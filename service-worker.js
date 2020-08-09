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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","e00097d25f5b253ddf2dcf10be44d4d2"],["D:/Blog_my/blog/public/Gallery/comic/index.html","09bc38a39429ea891bacfdedfaea00bb"],["D:/Blog_my/blog/public/Gallery/index.html","0157aadc4c296c6c3977cb089ccbfec8"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ece33809a2f2d30112a1fff64ad864c7"],["D:/Blog_my/blog/public/about/index.html","155ecc34d04b4b345c20fa5e79f893be"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ee554c647277eea6a0cff22af4a0acdb"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","982823bc2bceea6f46ec1c615687fea6"],["D:/Blog_my/blog/public/archives/2020/08/index.html","0a5adf920b2bc26d2c4f593a149c6493"],["D:/Blog_my/blog/public/archives/2020/index.html","91a6013b697edde9e8621cea9eaa32b5"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e257143cfdc554ebe956d6829457d47b"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","14dd949298430808c38b921a3ca036bd"],["D:/Blog_my/blog/public/archives/index.html","36e258e4a44bc06350bee7a94eba212f"],["D:/Blog_my/blog/public/archives/page/2/index.html","2704652e622c932ac102892735d980bb"],["D:/Blog_my/blog/public/archives/page/3/index.html","9b864d80352bc174694364e54fa8866f"],["D:/Blog_my/blog/public/article/1811f8b8.html","9765ce3cba89291407e98321a9be15a7"],["D:/Blog_my/blog/public/article/18e57658.html","77bceb20ca793db624545908b36c4fd9"],["D:/Blog_my/blog/public/article/1e64d194.html","2db5d7f9a1e96a102fe291f0160d8fbe"],["D:/Blog_my/blog/public/article/21f50898.html","f5a801e823fd8297ab300d663e4370d8"],["D:/Blog_my/blog/public/article/234762cd.html","315c9377e22d1405a5ee27e176e0a4ac"],["D:/Blog_my/blog/public/article/2b97b46c.html","7e3abb114b1e3713702692228efb2b0f"],["D:/Blog_my/blog/public/article/358ad26.html","d345f1310cc2c66dd976638594c66e71"],["D:/Blog_my/blog/public/article/541a8071.html","5c0437d71921b5d321adc3ca0a9b1f11"],["D:/Blog_my/blog/public/article/54412d2c.html","b3c71bcce270ded8ed245bdc3acd25cd"],["D:/Blog_my/blog/public/article/5c1827a.html","3d70a1a960bd0f174235d9eab7b2df15"],["D:/Blog_my/blog/public/article/5d6f1d17.html","8e03c400797497c2a68d53bab8ef20d4"],["D:/Blog_my/blog/public/article/5dcc92c.html","ae022c9cd65054d67956899c64cb3061"],["D:/Blog_my/blog/public/article/67da7762.html","37295e2d3264a1e092dfa440aab0735a"],["D:/Blog_my/blog/public/article/683f20fa.html","b2d3435f2284fe03e619a3a269ec4169"],["D:/Blog_my/blog/public/article/7758c0ce.html","431e50a3af78cdf6d8880f671af1be04"],["D:/Blog_my/blog/public/article/7a56c169.html","247895242b0c3d6d129e7dd40ea825eb"],["D:/Blog_my/blog/public/article/7d561955.html","ce31ead6750b41256908e0b10584745b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","594181106ebc1880dad02df055523ac0"],["D:/Blog_my/blog/public/article/c386a086.html","ee9ba7c6afd7f1f4c9bf3f0ac352c565"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","07ba72d78130d7c846c9d273d6ea4b08"],["D:/Blog_my/blog/public/article/e419ec53.html","4a5d65a8c5c8be0a3577e4eca69d86b8"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","8ac9d5225851ac6a54ecfc102dbb01e4"],["D:/Blog_my/blog/public/categories/Android/index.html","b920ed485ed0d0cc0363e1d3dace1b7b"],["D:/Blog_my/blog/public/categories/index.html","e671e47214a54eb1cc4c57e9f8b70d20"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","f54aa68fc896190c6e7306a425d755c0"],["D:/Blog_my/blog/public/categories/后端云/index.html","68a8669109b6d4df273b0c3ce2201f32"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","77bee865f82088281084c70f32ceab60"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","c6e4324e28290078875bc6d7047b13b0"],["D:/Blog_my/blog/public/categories/百度云/index.html","3c06663a7e42cf2d285480b157be5232"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","8b44e24715da6db7e613691a91a51482"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","9823e00ba38960c708f31bdb0b7e596a"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b391c2bc4cbbd2fc569a773981670043"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","cde58a8b12a297f2688b3acd1a6c05ef"],["D:/Blog_my/blog/public/music/index.html","08472504bcc211ac6fd2ca4ec0fca6a8"],["D:/Blog_my/blog/public/page/2/index.html","587dcea6c99cb8e74274b89a53ba12bd"],["D:/Blog_my/blog/public/page/3/index.html","254a3e6ecf7b58f5d132e6a22338f42f"],["D:/Blog_my/blog/public/tags/Android/index.html","bd6060ae9d77a319ae9a1bd7fd310e74"],["D:/Blog_my/blog/public/tags/bmob/index.html","6e7af77f299128ca188e3a73168c64c2"],["D:/Blog_my/blog/public/tags/coding/index.html","cbdb5317111f70730903782a17ea1629"],["D:/Blog_my/blog/public/tags/github/index.html","5ee149f23ed4459395936ff5d59085c4"],["D:/Blog_my/blog/public/tags/hexo/index.html","3661a323f27db124fd03bd57fd242731"],["D:/Blog_my/blog/public/tags/index.html","80fc9fd2db40a9273439bd9235465e36"],["D:/Blog_my/blog/public/tags/leetcode/index.html","e9ce1e750a016129261f915dae65847f"],["D:/Blog_my/blog/public/tags/情感分析/index.html","ed238768071ac4f880f1510f9f18ff57"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f14222c5466358f0fdd54bc5bae43cb4"],["D:/Blog_my/blog/public/tags/登录注册/index.html","282a95d7d8d3fd4061e17944d43e9eec"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","292b24dc451b53c2a9c79e36a5f3d1d4"],["D:/Blog_my/blog/public/tags/笔记/index.html","7762eb9ce91aa532ea15c6c273f07946"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","331896b51c4714545dc3108a621867cd"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","8f0d2299babae645253d40f814ddad6e"]];
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







