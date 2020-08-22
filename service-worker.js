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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7b32373dab87991aa71141d53858ea83"],["D:/Blog_my/blog/public/Gallery/comic/index.html","8e2d712e8c3fa812a7ab8927be72d067"],["D:/Blog_my/blog/public/Gallery/index.html","71e4172632d50b2c55c0c6c55836222b"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","800d98e189e02bdb1ad9ef59f2262f06"],["D:/Blog_my/blog/public/about/index.html","934743c72c182ddcd5c7cce44c25f0f2"],["D:/Blog_my/blog/public/archives/2020/07/index.html","a43b18fb2b02391405818e81be73fe7c"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","cd631a1bd42deb93c43b8ff9d66071b0"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5e1f7e3363c34cb9c6a8f1222ce637a7"],["D:/Blog_my/blog/public/archives/2020/index.html","6a46b8e08148718c474094f56537bd26"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","55f23ac83c2cfdbd55ade2280a49912e"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","60dc9e015eb6e39f847d0bc6bce5924e"],["D:/Blog_my/blog/public/archives/index.html","97bb199ea4163d6567a8634f53a8e178"],["D:/Blog_my/blog/public/archives/page/2/index.html","de002b7c79142c01bcad728206fe47d4"],["D:/Blog_my/blog/public/archives/page/3/index.html","1870b7db3eeede89e037948faafca97b"],["D:/Blog_my/blog/public/article/1811f8b8.html","23ee4fee624cfe3b4c54e3178f89d8c7"],["D:/Blog_my/blog/public/article/18e57658.html","1b2e7e326616e91e4fcee74be2ea1c65"],["D:/Blog_my/blog/public/article/1e64d194.html","b0115b6f6905201367bfa5d2c8052812"],["D:/Blog_my/blog/public/article/21f50898.html","eb71dac9001693a1b4157db600de03b9"],["D:/Blog_my/blog/public/article/234762cd.html","4019b644621d07083659cc2e6902271d"],["D:/Blog_my/blog/public/article/2b97b46c.html","99e2d1ce4149bafff6653b14195f82a1"],["D:/Blog_my/blog/public/article/358ad26.html","6e1624258dc99151bf4c1e543e669d74"],["D:/Blog_my/blog/public/article/541a8071.html","688c0823a7eec9e919ff7cc48f8b1f22"],["D:/Blog_my/blog/public/article/54412d2c.html","90090dc9df7f4cfcdae580bd2276d329"],["D:/Blog_my/blog/public/article/5c1827a.html","dd4694497bd7a1c4d28b3e3974826b06"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a8ed3064ce36ce92c98d1575ef8371d0"],["D:/Blog_my/blog/public/article/5dcc92c.html","786d40946d5a614cfa97ff6f1c72f6c7"],["D:/Blog_my/blog/public/article/67da7762.html","c5cbd272cd458680f85b7a050f6f14e1"],["D:/Blog_my/blog/public/article/683f20fa.html","54427a2319acf3c42bf090237e38fe3d"],["D:/Blog_my/blog/public/article/7758c0ce.html","d327b62a27730f66eb5cf50f2c700a61"],["D:/Blog_my/blog/public/article/7a56c169.html","41ead459c6cc7f3953217b68ed6cf8fd"],["D:/Blog_my/blog/public/article/7d561955.html","b09fe90e146aa38dd0b49a20abf23139"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","36a8f0a74a2b8d1e51f77dff902b2e9d"],["D:/Blog_my/blog/public/article/c386a086.html","f4f9c8ff1ed133ffda648b7b8dc0b891"],["D:/Blog_my/blog/public/article/d080f90f.html","3352a085f4f2396dd896f312e005dacb"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","0b462a72e86aff145ffc20635f6c99ae"],["D:/Blog_my/blog/public/article/e21e4e82.html","5a3523f8e7af32ffd451672a48bf76e1"],["D:/Blog_my/blog/public/article/e419ec53.html","c08cb6f21b3411f86805b2caa2d08cee"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","9013edd0602a521fdc1d938837618e3c"],["D:/Blog_my/blog/public/categories/Android/index.html","f6d7ca0a7f62b8da80489e36e37fb1ac"],["D:/Blog_my/blog/public/categories/index.html","eadaaca0381ee72f075dcb4293eee142"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","36b1d6dc1176237d64b830e97f782abe"],["D:/Blog_my/blog/public/categories/后端云/index.html","4826f289e8577bfa4cef651417a0c7b7"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","400b8d6a3dfa59e2dea3046abc039ed8"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","9dd8276f1c0141f35914e9ce68fbd5db"],["D:/Blog_my/blog/public/categories/百度云/index.html","df42524a75fbf1d0fd526860db111932"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","6d3d80cd3ff457cbb4a4c1d1c523bb14"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","84dbc35a531266d8175d78c3d03bd52c"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","abf332565534f106965dc36b6cbc5e18"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","182e5f00267ee4c8cfce83d33556b26c"],["D:/Blog_my/blog/public/music/index.html","9e3a62110935ef97c2ebd43e60fa251b"],["D:/Blog_my/blog/public/page/2/index.html","4b78ccb302fbd93865529ae5e971ee12"],["D:/Blog_my/blog/public/page/3/index.html","9a84cfc473bb7bc72102e759993aed21"],["D:/Blog_my/blog/public/page/4/index.html","c1f9d05a59aa826187c4855d4102633f"],["D:/Blog_my/blog/public/tags/Android/index.html","03821010ef27b7f8d3cf1da87021e564"],["D:/Blog_my/blog/public/tags/bmob/index.html","fb10746a7e4615ccbbf3019f877981e1"],["D:/Blog_my/blog/public/tags/coding/index.html","0ee63a0241b36e35e86dab56bd28c74a"],["D:/Blog_my/blog/public/tags/github/index.html","7420cb4a8786167397275711bd75bfcf"],["D:/Blog_my/blog/public/tags/hexo/index.html","8d16df59a3e19991bdeca2c7bddb901d"],["D:/Blog_my/blog/public/tags/index.html","ff2ec766c0938c07728b9b77481be206"],["D:/Blog_my/blog/public/tags/leetcode/index.html","a84ad96c2d316f03b0054ff2c261245c"],["D:/Blog_my/blog/public/tags/情感分析/index.html","11c8045c5cbecb989f0e44e69e8825a9"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","bfe039700054129b9fe9ca171ef88c47"],["D:/Blog_my/blog/public/tags/登录注册/index.html","53c569882d39309ea9d0b2a6cba26af1"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","7dd313c4ef70d4239150bf1dc1907783"],["D:/Blog_my/blog/public/tags/笔记/index.html","e52909241bfd62f7181e8f5918db2540"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","5c153bc02b52966f0b293d298f4e1bbe"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5440f8decc50e785c2cb2371fcd0889e"]];
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







