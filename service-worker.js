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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","8a6c81aaf32b998cad8fc95260227913"],["D:/Blog_my/blog/public/Gallery/comic/index.html","cf2b439327a5d2684437c943dc69bb4b"],["D:/Blog_my/blog/public/Gallery/index.html","67483595f26ef7f13f3efe5cc0202c58"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","41caff9977b123c2014e026144d79f7b"],["D:/Blog_my/blog/public/about/index.html","6d0957883f6f4161800374f45851085d"],["D:/Blog_my/blog/public/archives/2020/07/index.html","c3f9fb9c3d659e3d752ebc0f45a144ed"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","1c71c2750996d69bcc1030821e0061f4"],["D:/Blog_my/blog/public/archives/2020/08/index.html","373e9f01e7856a396d16d607229f9105"],["D:/Blog_my/blog/public/archives/2020/index.html","7b46e3af4c4af361251f1dca091a06d2"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f068deff5d664d89d266a4e7663ab2a4"],["D:/Blog_my/blog/public/archives/index.html","258ae7053801e4388cf2c9bcb141e83f"],["D:/Blog_my/blog/public/archives/page/2/index.html","21e7d0e7d48651b024a5ad6297e7439b"],["D:/Blog_my/blog/public/article/18e57658.html","652c63086f4360a6d99abcf2b2eb4c17"],["D:/Blog_my/blog/public/article/1e64d194.html","3a933d90f4f74aa9243da928e5f91a97"],["D:/Blog_my/blog/public/article/21f50898.html","1f97ea132afad73b61874edb445bd3ef"],["D:/Blog_my/blog/public/article/234762cd.html","c763aa4e83d648f04c628e27b817de42"],["D:/Blog_my/blog/public/article/2b97b46c.html","6a42a96f2da602ed168432ded0c88c54"],["D:/Blog_my/blog/public/article/358ad26.html","bcfe23a3fde5b7ca5e528d1acdaa4e09"],["D:/Blog_my/blog/public/article/541a8071.html","efbf4a7810311d791613c4a19b161d4a"],["D:/Blog_my/blog/public/article/5c1827a.html","c8ce5fb11108528df65a4167f71792fc"],["D:/Blog_my/blog/public/article/5d6f1d17.html","b824562b0e4ca3c0028031584b525c48"],["D:/Blog_my/blog/public/article/5dcc92c.html","08b7a1968744eb7db006ca6edb287eda"],["D:/Blog_my/blog/public/article/67da7762.html","fd79afa374d4db2de47072c5537b2b84"],["D:/Blog_my/blog/public/article/683f20fa.html","9b30e8d436662d0ec2229d658bbc3fd5"],["D:/Blog_my/blog/public/article/7758c0ce.html","d9aaf38d8975e06bc56951a5678d4c47"],["D:/Blog_my/blog/public/article/7a56c169.html","d2ae92954bbc233530fdfba6bfe7d4fa"],["D:/Blog_my/blog/public/article/7d561955.html","958ea2c8cedde2fc90ce229ca92fe5da"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","fe9d12dcd84c4b2d365e955fd810f0a7"],["D:/Blog_my/blog/public/article/c386a086.html","e9a66387d4d3b9042492f4d4bcdc0ea4"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","ff4d6e90b96a80480c855a3664ac0c6b"],["D:/Blog_my/blog/public/article/e419ec53.html","5446f95775a9aec079059952a6982238"],["D:/Blog_my/blog/public/bangumis/index.html","4faeabdbdc89e250f8b1b0e2b3d49d67"],["D:/Blog_my/blog/public/categories/Android/index.html","cdb340c6f22bd9c888fe28379d5b1601"],["D:/Blog_my/blog/public/categories/index.html","8a8c77f23f63d16bc9407cff17b9d45c"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","09f0e8c6066f6e83da7e46a368f4bf9a"],["D:/Blog_my/blog/public/categories/后端云/index.html","73a681ae65e6d918d1608defd207c3c2"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0e77be426ec1a5fa5fcf5c3a18ba7237"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","c60ea302aa19a91e360799ca57cb9afe"],["D:/Blog_my/blog/public/categories/百度云/index.html","dca9f8145da4dce61ce30ce6abba38bb"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","7ee136f29aae5bcda3afa8179e90787b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/gulpfile.js","4a06b158765456f61109acb318bc5411"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","137e4defede8f486f692f54832678c2d"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","4e3f915ab8931d7a5965cc09c340fe7a"],["D:/Blog_my/blog/public/music/index.html","e97da42aabff42f086ec0a43d3b84197"],["D:/Blog_my/blog/public/page/2/index.html","fd698f30d6e184a4e0ca7308914d9449"],["D:/Blog_my/blog/public/page/3/index.html","e976e27482b5de09784dcd0898484b0a"],["D:/Blog_my/blog/public/tags/Android/index.html","422ba533852665d0c967c54eb1ee233e"],["D:/Blog_my/blog/public/tags/bmob/index.html","bd79bb72daf1025a14fba49ec11e91d0"],["D:/Blog_my/blog/public/tags/coding/index.html","0aa6b6595f1dff9fcce749d1c8dd294e"],["D:/Blog_my/blog/public/tags/github/index.html","29dbcf41334f37c3de67b3c15210b075"],["D:/Blog_my/blog/public/tags/hexo/index.html","4bbede4afbbd42c2b79d221bd86ae60d"],["D:/Blog_my/blog/public/tags/index.html","04101abd6141023fd68e5b0590984fc2"],["D:/Blog_my/blog/public/tags/leetcode/index.html","c10531f749f43d8234fd36dd705214da"],["D:/Blog_my/blog/public/tags/情感分析/index.html","a977550011f8ad87f1270a17e972a54c"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","560058bc83e7f750a2794546759cd62a"],["D:/Blog_my/blog/public/tags/登录注册/index.html","8f3037850952e96bbf6c5984b6f0ad1c"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a63af4e1888f3b45130e4583bcad6905"],["D:/Blog_my/blog/public/tags/笔记/index.html","119a41829a0a87fbcefddddc74fed061"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","61ebb3596fa3008e82fbd6ab2a79d407"]];
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







