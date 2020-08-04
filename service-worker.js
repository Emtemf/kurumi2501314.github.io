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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","83999cab4d0f8e47cd5c03ba83530148"],["D:/Blog_my/blog/public/Gallery/comic/index.html","b9675386c496bf9b54e784ff0b0f3872"],["D:/Blog_my/blog/public/Gallery/index.html","9827789695f195497b27f0a2d4b08822"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","ffe0d4ab9d5894b55f1cb0aec08d0273"],["D:/Blog_my/blog/public/about/index.html","a5b67eddbb214d127e2a1f15a052baea"],["D:/Blog_my/blog/public/archives/2020/07/index.html","96c98ff8b64193c2f974d0573bd51c91"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","9aacccfa6ea3f348cd7f48d9bafb437c"],["D:/Blog_my/blog/public/archives/2020/08/index.html","f1e4b6c3ced757016b8f809b2dfb0198"],["D:/Blog_my/blog/public/archives/2020/index.html","36a8d3ea23e4848b8b2cfdf7da87840e"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","7ab62e18858b28e52a1082b5c9253149"],["D:/Blog_my/blog/public/archives/index.html","c60364c3aaf20ca1062e83b54dfa0e1c"],["D:/Blog_my/blog/public/archives/page/2/index.html","75e851b3311a124e54919c1dd4aa2c86"],["D:/Blog_my/blog/public/article/18e57658.html","ccde3ea476a8b84c5d40d414640e1004"],["D:/Blog_my/blog/public/article/1e64d194.html","6aa164a406c4fe063a31e4606243536f"],["D:/Blog_my/blog/public/article/21f50898.html","26f48e0327b16677a46590a2fe242782"],["D:/Blog_my/blog/public/article/234762cd.html","64b024a05901c0e0114ed033ad8af8b6"],["D:/Blog_my/blog/public/article/2b97b46c.html","bdae9d38cf9e605a3cfbd0c80ec89a36"],["D:/Blog_my/blog/public/article/358ad26.html","35d21e552f67f222022736b5feaa62f6"],["D:/Blog_my/blog/public/article/541a8071.html","1bc9a777af871e37f6d311acfbbc66d7"],["D:/Blog_my/blog/public/article/5d6f1d17.html","e96a745124266c3ea42aeedb771bd29d"],["D:/Blog_my/blog/public/article/5dcc92c.html","bf6da796054cd9fbf6b74f9713bc121f"],["D:/Blog_my/blog/public/article/67da7762.html","3a0d8f8a8463778fc369dc004f76aa85"],["D:/Blog_my/blog/public/article/683f20fa.html","0006fee59533c1619128db4a836cabd3"],["D:/Blog_my/blog/public/article/7758c0ce.html","ac11dc0da99f36c889036c8c48c88b42"],["D:/Blog_my/blog/public/article/7a56c169.html","912b725687bbab2b962715486d0f8f96"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a197d40ebbdc3f85ea5b7ef319128ef2"],["D:/Blog_my/blog/public/article/c386a086.html","472aed1f7893d824589fd0c3018c0429"],["D:/Blog_my/blog/public/article/e419ec53.html","a63e7156f76f39ea98dc74abd4531c80"],["D:/Blog_my/blog/public/categories/Android/index.html","62db726809730398f92b1a64ba0cb2a7"],["D:/Blog_my/blog/public/categories/index.html","3ee178cde4f0c1092e0e1ec35b27e532"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","780cc73cf80dc2a460ec4ae360c50214"],["D:/Blog_my/blog/public/categories/后端云/index.html","864803076f587899f4f1aa1c07865d44"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","953518a22021f6354b72822da96ea87f"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","4d605d3e16ed127f7c29acc35b9097e0"],["D:/Blog_my/blog/public/categories/百度云/index.html","11451b5f01f5b21e32ac6a07b7eca14c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","7380b4a650412f4459b7cda633f139cc"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","79bcbe8969aca4e7ea5c6ab3f0285af8"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","06e67224599095b52a6fa237bc035d97"],["D:/Blog_my/blog/public/music/index.html","0048070ce0b5ea7b4d7f38b5af28d9cf"],["D:/Blog_my/blog/public/page/2/index.html","0d02b1cc5c1ef37360b8e1bb216fcc93"],["D:/Blog_my/blog/public/page/3/index.html","de7bd5dc32a24436236c70da88359f10"],["D:/Blog_my/blog/public/tags/Android/index.html","d847e8df98627ecc96dc3d5b69c4e544"],["D:/Blog_my/blog/public/tags/bmob/index.html","b3e3e5b5353991e260216c534af84fa1"],["D:/Blog_my/blog/public/tags/coding/index.html","16c958d45404c2feceae42fee1a4f10f"],["D:/Blog_my/blog/public/tags/github/index.html","95d2e9468516d5e2b89108ff24b0ac81"],["D:/Blog_my/blog/public/tags/hexo/index.html","0b09649f53691e1dec4ccb64840a811a"],["D:/Blog_my/blog/public/tags/index.html","4ddb515be926a6112f39a9399d81d71f"],["D:/Blog_my/blog/public/tags/leetcode/index.html","42505749f2e5c56c191471e409f819dc"],["D:/Blog_my/blog/public/tags/情感分析/index.html","498c08ef3ea2ab2b60a513d10cd68080"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","8f6e43f38bd348bc9971f9f11971ee92"],["D:/Blog_my/blog/public/tags/登录注册/index.html","6a8840e21f0d1f37fbab0a58c99d160e"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","8443e8a1c900f2dff34576574084ad79"],["D:/Blog_my/blog/public/tags/笔记/index.html","f0b8b803afb0b6c105424afff3f1d0dd"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","f2020ae2da03ee5d760d0c688318ad6a"]];
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







