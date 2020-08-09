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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","2ffffb0496d98714d7fb06a7794b3c32"],["D:/Blog_my/blog/public/Gallery/comic/index.html","15c0640dafdae0266eba856a2c4a308a"],["D:/Blog_my/blog/public/Gallery/index.html","e961a5a7a0f3496e90e8b957d2993b1e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","f4a77c8589dc58aab4d27c535a9c37ed"],["D:/Blog_my/blog/public/about/index.html","1ef19c8805e96fbd6d75c3ef008ef123"],["D:/Blog_my/blog/public/archives/2020/07/index.html","9b49d016b12aa6cfa540aa80da698e79"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b280e962e92d710a8afcb784a98261c6"],["D:/Blog_my/blog/public/archives/2020/08/index.html","9b069d171f8bd220dcb2201c24005e6a"],["D:/Blog_my/blog/public/archives/2020/index.html","188bd4f6a47341e5fab01ca76601dc8a"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","4df6555995b39b5f0f2ad12aefa5e2e8"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","8b40f6e7509913497a3a836d095c318e"],["D:/Blog_my/blog/public/archives/index.html","01d9ab6a6dcf9ba89a5708150a2ade3f"],["D:/Blog_my/blog/public/archives/page/2/index.html","e76ca7e83fa6368be19788c60641e6bc"],["D:/Blog_my/blog/public/archives/page/3/index.html","e4ee54beb025dc41a014722630e40110"],["D:/Blog_my/blog/public/article/1811f8b8.html","59afa79c51c68ef49044c9ebfce62da3"],["D:/Blog_my/blog/public/article/18e57658.html","20042fa224100c4d0effbc51f49ce9ba"],["D:/Blog_my/blog/public/article/1e64d194.html","b0cbeab32876fb004ca00245c0588a5e"],["D:/Blog_my/blog/public/article/21f50898.html","74a42e24cfa6885941b16f4d45d627a1"],["D:/Blog_my/blog/public/article/234762cd.html","395e8066efaf38b16aec455c066e05a9"],["D:/Blog_my/blog/public/article/2b97b46c.html","cd7ad72702599e4e8bba1cf740efae8c"],["D:/Blog_my/blog/public/article/358ad26.html","a62b38c5750a0d3b29e1ecbc3a59b95c"],["D:/Blog_my/blog/public/article/541a8071.html","9d8391c795940fb87a37eced38c0b75c"],["D:/Blog_my/blog/public/article/54412d2c.html","48ca93a773782f5cb09f98a54bcb7535"],["D:/Blog_my/blog/public/article/5c1827a.html","cf4a060c24430564aa079e07f4e94cd6"],["D:/Blog_my/blog/public/article/5d6f1d17.html","e3b1b08394f66dfb01833c67c9214c5d"],["D:/Blog_my/blog/public/article/5dcc92c.html","9ec1ca96f3599844d627200cadc90796"],["D:/Blog_my/blog/public/article/67da7762.html","7ed717dfcbff4a6388581927b17eb219"],["D:/Blog_my/blog/public/article/683f20fa.html","87d3b8efdca4902fc8126167c30be0ef"],["D:/Blog_my/blog/public/article/7758c0ce.html","9cf149ba3cb111fcc2c99429d2b3e103"],["D:/Blog_my/blog/public/article/7a56c169.html","8199b29cf1e65421272002a854a286d6"],["D:/Blog_my/blog/public/article/7d561955.html","12eff47bd856b6fa67d0f0537faaa7d7"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","0cd1f995319aff2c8137114f25576523"],["D:/Blog_my/blog/public/article/c386a086.html","5550f0ea7cab1da0464afe578355116f"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","f7e5e4536ac6eef0ef0800171120d919"],["D:/Blog_my/blog/public/article/e419ec53.html","b530195d3fbd5bf700ea2a5e0c20184a"],["D:/Blog_my/blog/public/bangumis/index.html","3055c978c63397cad8f34a7e770ca1e8"],["D:/Blog_my/blog/public/categories/Android/index.html","8a83a7f23d1846b6f4b68ad4ab5f1faa"],["D:/Blog_my/blog/public/categories/index.html","8d3c2b1bf1c7b45e1720262dd44585ef"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","91f6891fa9dab0a7b46c4e6f57b84766"],["D:/Blog_my/blog/public/categories/后端云/index.html","af2c6cfaf361a0644ddb204aaeb654bd"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","fbbcca0f1b4e1e8ce72ed120b79ccbe5"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","b0cfe62ffdb397bfd41d0692db4720ed"],["D:/Blog_my/blog/public/categories/百度云/index.html","30b2209de3109b3e28ea747f776ad82d"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","440c69a7e893e75870392a3ad0bb7341"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","6fd81f516f8151a0c16bf970d1be99ce"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","d45de85a52c756493b4d83e91c47e830"],["D:/Blog_my/blog/public/music/index.html","77e8d1592f4201834808c9000d031824"],["D:/Blog_my/blog/public/page/2/index.html","439983751fb082dda1b7f67ad9284542"],["D:/Blog_my/blog/public/page/3/index.html","aaf3b16d0014d409441860bcd1a109a8"],["D:/Blog_my/blog/public/tags/Android/index.html","d7b75dee118d1bd2bdb4b001b063e198"],["D:/Blog_my/blog/public/tags/bmob/index.html","983f0a402b7f27f2ac5d93bc5a807baa"],["D:/Blog_my/blog/public/tags/coding/index.html","f7801c1af4c6c522da37c5a0453685a1"],["D:/Blog_my/blog/public/tags/github/index.html","796111f7acec76b61c0e404a144f91b7"],["D:/Blog_my/blog/public/tags/hexo/index.html","8bb8f6d95c4ed92a5e7d0e5c540b1874"],["D:/Blog_my/blog/public/tags/index.html","2f57a72f3635d2535a40ef8770523b01"],["D:/Blog_my/blog/public/tags/leetcode/index.html","d5b2f3864bcfbae643e089c8afa16b2e"],["D:/Blog_my/blog/public/tags/情感分析/index.html","7786def8853e314b3004c47bc59a3da0"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f0eef7f3b80a69223a99927be5c04c38"],["D:/Blog_my/blog/public/tags/登录注册/index.html","2f973344db0602775289364a42543c84"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","6e07002c7f693400f25f19c0fe85609d"],["D:/Blog_my/blog/public/tags/笔记/index.html","7f01cf147ac74d7a12e84d6075a30af0"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","9531ecf810116267a6456ff0e71f83e8"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","f8d5e2539bf4f2c60c6553709d986129"]];
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







