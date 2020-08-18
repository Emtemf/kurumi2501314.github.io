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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","6451cf7a19c45f0c1db5f0a97df6d1de"],["D:/Blog_my/blog/public/Gallery/comic/index.html","59111fe1342f0432f27cb2f78c590a49"],["D:/Blog_my/blog/public/Gallery/index.html","56d9c8d47bf622f5acbe6accece0fb0a"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","95f94c1999789c1663551c90c4d285f8"],["D:/Blog_my/blog/public/about/index.html","5a807f8f958484c19dc403a5286899e8"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ad57a60ba3b2daa4d4e98350dea7455f"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","223dd457297362e047ad511813f3a02a"],["D:/Blog_my/blog/public/archives/2020/08/index.html","ac68eb8f7f2eb2dda3b40e8b66b2eca7"],["D:/Blog_my/blog/public/archives/2020/index.html","2e302e171f3fec0afbcab9a75bdd95d7"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ed12e69f014452627e678d55877a50c9"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","5e781ddfacfca3bb260fe7c093971927"],["D:/Blog_my/blog/public/archives/index.html","4c9e89671184d10aadf1f6096d134415"],["D:/Blog_my/blog/public/archives/page/2/index.html","276e34d7d27a5d89bfbebd157e045f2a"],["D:/Blog_my/blog/public/archives/page/3/index.html","0f96899a46385a8a3df3666a6f8e957f"],["D:/Blog_my/blog/public/article/1811f8b8.html","5e54e123ff996fb25cefdcea59aede9d"],["D:/Blog_my/blog/public/article/18e57658.html","33c499d3ce5ff4a010a03cd75863b3eb"],["D:/Blog_my/blog/public/article/1e64d194.html","2ebbcb12383ceb46e18651cbf979a142"],["D:/Blog_my/blog/public/article/21f50898.html","54c414bf79693474da7c7f510d46c590"],["D:/Blog_my/blog/public/article/234762cd.html","cb4577817f35fa8dee39e3ec32805421"],["D:/Blog_my/blog/public/article/2b97b46c.html","62d5c1404061e1471b504f3a6777da09"],["D:/Blog_my/blog/public/article/358ad26.html","2928bad8b56265d094939afff91444b0"],["D:/Blog_my/blog/public/article/541a8071.html","b34811eeb80d2690a007340c87c7e747"],["D:/Blog_my/blog/public/article/54412d2c.html","a7f5e04ed81250dc3c62f1d5cad116f7"],["D:/Blog_my/blog/public/article/5c1827a.html","db7e23069cc6ad5a2d506b96cc2247d4"],["D:/Blog_my/blog/public/article/5d6f1d17.html","bf91d8ee86deb244b72bd62b119e915c"],["D:/Blog_my/blog/public/article/5dcc92c.html","59a6b9d2f5ef91307346519b16ed57d3"],["D:/Blog_my/blog/public/article/67da7762.html","2f7254ac267a63706629995c7c9fa977"],["D:/Blog_my/blog/public/article/683f20fa.html","253b8a98cd6b083347cef6ac6b9e25ff"],["D:/Blog_my/blog/public/article/7758c0ce.html","54f42af988a696762461078d1f3213c9"],["D:/Blog_my/blog/public/article/7a56c169.html","f40f1f6341cb65727f2c20cc2f569be4"],["D:/Blog_my/blog/public/article/7d561955.html","7bab0164b5324f512b2a9b90d6791d0b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","cfe0c156d2686a87c527fc3461f6fd81"],["D:/Blog_my/blog/public/article/c386a086.html","2152070bbd664fc3293c4e6d90245fc5"],["D:/Blog_my/blog/public/article/d080f90f.html","73ef81c51cd6171ef23a0cea58aa840a"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","70465ab6c5dbad2b0f793ffcef94793b"],["D:/Blog_my/blog/public/article/e21e4e82.html","c8e2a5c2e6c1f980556c8acb3dc9b3f2"],["D:/Blog_my/blog/public/article/e419ec53.html","2f9f1805f27668244241813285765a19"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","650a2016ed1747a9df1245652c49b4e1"],["D:/Blog_my/blog/public/categories/Android/index.html","be84d7c7b6da92fd28c6fb58b982acf1"],["D:/Blog_my/blog/public/categories/index.html","1e4f5d294a23bfbf0b9b5f4ac042bb4d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","7c69f1151a033f7cafcbb4d2b77fabec"],["D:/Blog_my/blog/public/categories/后端云/index.html","7a73a0c35b97b93719b6ae0086c8d364"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","3ff524b24b7daf87bf8a175de375634c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","de39afb0737176c8786b8b76033144b5"],["D:/Blog_my/blog/public/categories/百度云/index.html","90c1cc2a1d4dab34186e4231ecf68dc0"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","1ab8242e9f2d9cd46a432b5d2862c7bd"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","4e504089d9f0c2d71bce501886918f1f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Emt1.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c01a81a6f259f121fe18a92b32a359d1"],["D:/Blog_my/blog/public/music/index.html","4fc546e9d31016d6a4620d4c7e039986"],["D:/Blog_my/blog/public/page/2/index.html","904864b34df4cd2087a16e5581facd2e"],["D:/Blog_my/blog/public/page/3/index.html","4def08d2a885a1e0873b6227bca4ed9f"],["D:/Blog_my/blog/public/page/4/index.html","07214a3851d206eef8ed40b5c6e50ac6"],["D:/Blog_my/blog/public/tags/Android/index.html","6712a1784776d05a5637c9fab7509b93"],["D:/Blog_my/blog/public/tags/bmob/index.html","c8895281ec54bc22b441cd7d99408563"],["D:/Blog_my/blog/public/tags/coding/index.html","63b78a1fdb6ffbf9fe14aaf5c9c6e77c"],["D:/Blog_my/blog/public/tags/github/index.html","a49a0f8d8371adab7ca37f06b768a39a"],["D:/Blog_my/blog/public/tags/hexo/index.html","8688487b20ad4675fa1cfa7e7d309e89"],["D:/Blog_my/blog/public/tags/index.html","1dadf7bf2dbfca4075c4fa9e82dfea54"],["D:/Blog_my/blog/public/tags/leetcode/index.html","100c6969467182c53c167a9727537876"],["D:/Blog_my/blog/public/tags/情感分析/index.html","e3de54ef158958a5cd3df29c39155fdc"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","b6f0c60e8224ec864520738605a018e9"],["D:/Blog_my/blog/public/tags/登录注册/index.html","93cf87dbe51d443be0c83722655458d8"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","629b5a14475b5cbf0c8ae7fa5a1610fd"],["D:/Blog_my/blog/public/tags/笔记/index.html","2c321a542210fee4c52132659baade9b"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","0342350167c36c859840219b8b983b52"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","a0564fcad3a18235520ec3281d7b0270"]];
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







