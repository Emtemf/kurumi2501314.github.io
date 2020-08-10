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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","f90111fd9963939a423190eeae31c24b"],["D:/Blog_my/blog/public/Gallery/comic/index.html","16d6724e50e732a439f2a5c80fb2bac8"],["D:/Blog_my/blog/public/Gallery/index.html","d1557f580984e8e0712e6758d9fdc450"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","c76666953bc740315f3d359f83728f12"],["D:/Blog_my/blog/public/about/index.html","3dd51e336374f15451f92b009f7bb0e3"],["D:/Blog_my/blog/public/archives/2020/07/index.html","8c06ea0c4afd7578e06a9d270d3d4e59"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","aa83083948f4ab07a6c465932a1edf04"],["D:/Blog_my/blog/public/archives/2020/08/index.html","82e8deb98a74eba779d6c94415883187"],["D:/Blog_my/blog/public/archives/2020/index.html","c2eed4a45a1944125452e332a6a175bb"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","75ea9226884455a036e10df7ff5e184a"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","925e7ede8f67cbb6dcef1c491a504399"],["D:/Blog_my/blog/public/archives/index.html","e2dd60b91bd7e0fe916d24c6fd3209d3"],["D:/Blog_my/blog/public/archives/page/2/index.html","11bd0cd61c61b9ad0a65b9e757afdbad"],["D:/Blog_my/blog/public/archives/page/3/index.html","02502b0db8edb939ab5900ace727a345"],["D:/Blog_my/blog/public/article/1811f8b8.html","a441f6bddb6d2c7d0107cf05105d6502"],["D:/Blog_my/blog/public/article/18e57658.html","4e8c96e4a9a93f318ac529c2590cbe83"],["D:/Blog_my/blog/public/article/1e64d194.html","02b111b064dd4d1cc80b182cf87b9da8"],["D:/Blog_my/blog/public/article/21f50898.html","c954d90329b0229b84a39740598ccc24"],["D:/Blog_my/blog/public/article/234762cd.html","ea5d8ce490509582fe11c8ff0dd71f5c"],["D:/Blog_my/blog/public/article/2b97b46c.html","dfbcaa210d12e017fd7795fdc3ede4e9"],["D:/Blog_my/blog/public/article/358ad26.html","d48926adcd3152f6393b89fea3685b3e"],["D:/Blog_my/blog/public/article/541a8071.html","930cbd75660e7411a5a4ccdb72f9e8c6"],["D:/Blog_my/blog/public/article/54412d2c.html","5c9f41efb0e432caf33e5c20cf85b7c0"],["D:/Blog_my/blog/public/article/5c1827a.html","55636abaf1ac1919abaf49fd2b565271"],["D:/Blog_my/blog/public/article/5d6f1d17.html","6a3f55a6270ed49b4a5e642e8c46c7bc"],["D:/Blog_my/blog/public/article/5dcc92c.html","e32e8d5aecc35490f3c353cb30edaad3"],["D:/Blog_my/blog/public/article/67da7762.html","eb0287a4f08bb893aade369a476c6a67"],["D:/Blog_my/blog/public/article/683f20fa.html","171225c65190022984b90fa4b8eca04e"],["D:/Blog_my/blog/public/article/7758c0ce.html","c946f6cbcea53b87c0baf4bfe6acabfc"],["D:/Blog_my/blog/public/article/7a56c169.html","51072ddfdd0900f5a6e967166604f03e"],["D:/Blog_my/blog/public/article/7d561955.html","7f3754842d24f9f143cee96ddb67d304"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","7f72e35aceaabd92e1564fc297c4044f"],["D:/Blog_my/blog/public/article/c386a086.html","5b0f0acb0b5dc4e446ecf89cad9eb764"],["D:/Blog_my/blog/public/article/d080f90f.html","c475c213ef8e63969ea20dfd7a0facf7"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","67296e3e8b61a341bf022569f8869d93"],["D:/Blog_my/blog/public/article/e21e4e82.html","0a40374ea9fde1ad1634fc216dd7731b"],["D:/Blog_my/blog/public/article/e419ec53.html","1a071a9873e8191f88df92c91e37835e"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","5e35001e38727feda6ae322d31574e01"],["D:/Blog_my/blog/public/categories/Android/index.html","3cd930bf1c05c5bfaf0dc0e1b2b019a7"],["D:/Blog_my/blog/public/categories/index.html","c991bdd645ce321d39b424ad6e910f91"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","21adb195320b8f844a3c3a7166264939"],["D:/Blog_my/blog/public/categories/后端云/index.html","bac339b8fcc8ede3598e605b1e11c55c"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","10389a273acdcd0740f1d7ae7eff3344"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","feaf38dea89586106033f18c1afb29f3"],["D:/Blog_my/blog/public/categories/百度云/index.html","e340a2987729e93d1bb9538220e7d731"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","7d152f0f7907d4c6c86af35154835dbe"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","d82b2c719b734166c4099840cbeb92bb"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","bd8218bde9d1b754307fc632925a01e0"],["D:/Blog_my/blog/public/music/index.html","b49900d9a89b78d68245dbce7d6fca6b"],["D:/Blog_my/blog/public/page/2/index.html","9525e3e9cdeac48a1df283d37c6fa94f"],["D:/Blog_my/blog/public/page/3/index.html","b1f55d3df360cf88acdd3db68d14aadd"],["D:/Blog_my/blog/public/page/4/index.html","570e347230807ea71f45f22a1e421078"],["D:/Blog_my/blog/public/tags/Android/index.html","9c67839ebf990d4f25f02fcef9a137c4"],["D:/Blog_my/blog/public/tags/bmob/index.html","fa98f313c5756bcadd6974ec5392f23b"],["D:/Blog_my/blog/public/tags/coding/index.html","e339a25c9dea4403a8fc618ea19f214f"],["D:/Blog_my/blog/public/tags/github/index.html","66bf851a4c710b3a24fb1c68c354cf38"],["D:/Blog_my/blog/public/tags/hexo/index.html","758e91eba37d10d0f71065e89ab535ff"],["D:/Blog_my/blog/public/tags/index.html","afe90efd917af5b9abdd7d10c56a323d"],["D:/Blog_my/blog/public/tags/leetcode/index.html","c32a47e93a554ca81c6d0fa386fffd2a"],["D:/Blog_my/blog/public/tags/情感分析/index.html","2286888362b97590090ec358c19a02ea"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","83168c5b6197672d9af1702191d71a03"],["D:/Blog_my/blog/public/tags/登录注册/index.html","88d94d71c99ddfa482b852d8fae73760"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","731b4927cfbeb38f1caf73c55cfe3b10"],["D:/Blog_my/blog/public/tags/笔记/index.html","c9fcc90982234170909764b18d09debb"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","46bab7cb9e7e1dc3c54358c1c134b2ab"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","46c2a01dfa74377ead3acf9a12bfefa0"]];
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







