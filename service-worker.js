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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","e98bc7b41ef3373049819b5b9f2f41cb"],["D:/Blog_my/blog/public/Gallery/comic/index.html","e26471e4bba281ac6fe5e5824e4ab8da"],["D:/Blog_my/blog/public/Gallery/index.html","4faa92b183d4c98798f2433747b637d5"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","d8cc682d45f0aea513b92b9d63b81b7b"],["D:/Blog_my/blog/public/about/index.html","9356fc5ccfcf1f01ee6c51236214f4ea"],["D:/Blog_my/blog/public/archives/2020/07/index.html","a5eec95275d6df43bf486e5e4a17ad08"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","e9f7fe3f235ec05229230512695b2c54"],["D:/Blog_my/blog/public/archives/2020/08/index.html","88d272c5ad966ce9651563e55b00ea10"],["D:/Blog_my/blog/public/archives/2020/index.html","ebb0d885a8d8a52984803888cb936527"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f67dda329065ce3e49a6093c41b65f4f"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","77144fe9994b5f990d78633abc9b3474"],["D:/Blog_my/blog/public/archives/index.html","9bacff77fa63fe428a2b8227721c007c"],["D:/Blog_my/blog/public/archives/page/2/index.html","dc5739c9b8e63bfb02c6d629be8b6b7e"],["D:/Blog_my/blog/public/archives/page/3/index.html","4ea3a5a28779d16bbabe2e70e109fbb6"],["D:/Blog_my/blog/public/article/1811f8b8.html","39b2d45e2d898ac5d0ebb903d8f2293b"],["D:/Blog_my/blog/public/article/18e57658.html","6a2fb657d32cf3fae8ef1de2481777f5"],["D:/Blog_my/blog/public/article/1e64d194.html","b0f190e6eb5b7fccc217a1f93dc33d1e"],["D:/Blog_my/blog/public/article/21f50898.html","5345072bc7a7c0e04a87a7d3b52bf963"],["D:/Blog_my/blog/public/article/234762cd.html","14b93725ce1d8aba02b66ca245ec41ff"],["D:/Blog_my/blog/public/article/2b97b46c.html","5ad9da2dd65f922c4a261d653f4bb6e2"],["D:/Blog_my/blog/public/article/358ad26.html","e0bc3a00d883c28af3b11239be418d0b"],["D:/Blog_my/blog/public/article/541a8071.html","faa7a475b763c3e9eda140156c660f83"],["D:/Blog_my/blog/public/article/54412d2c.html","66ff2cd5f1bc4140a4dcd4beaecfa9fd"],["D:/Blog_my/blog/public/article/5c1827a.html","633d829ad5265000a1a50675ea37290e"],["D:/Blog_my/blog/public/article/5d6f1d17.html","60f067dc4b62cf2db1b6451821a3a755"],["D:/Blog_my/blog/public/article/5dcc92c.html","4c7648dbfac42109de3b57f57459e9aa"],["D:/Blog_my/blog/public/article/67da7762.html","80b3273aa440124cc47f825bd6765961"],["D:/Blog_my/blog/public/article/683f20fa.html","cc82470298befa44d9e230af16e4ad74"],["D:/Blog_my/blog/public/article/7758c0ce.html","459cdd71900a805a70f1ddeff398b3fb"],["D:/Blog_my/blog/public/article/7a56c169.html","9db8f058e1770df907f43bd15e488715"],["D:/Blog_my/blog/public/article/7d561955.html","821a31c067bbd76f85d9bec7f104ac0e"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","1dee75fd26554c86d22ba5ac092f9fde"],["D:/Blog_my/blog/public/article/c386a086.html","89d077fe7c384786588fdd048c6a732c"],["D:/Blog_my/blog/public/article/d080f90f.html","da250bc34a3bfa1b879d142c8a610260"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","e45358a10b7e05abf5a64dfa26b04f1b"],["D:/Blog_my/blog/public/article/e21e4e82.html","0569eb64d6586a9002f4cd76bbf30d50"],["D:/Blog_my/blog/public/article/e419ec53.html","941ede04eab22c7b6d0ce06d06f85cea"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","0a116aacb555daec7fa58dd895db1ca1"],["D:/Blog_my/blog/public/categories/Android/index.html","a71cd6ecf56eab4da3b39969808526b7"],["D:/Blog_my/blog/public/categories/index.html","24ccdab624c137545e9942f035220cfb"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","31e56ef8d3bb5b41aa67b1ecd3075b61"],["D:/Blog_my/blog/public/categories/后端云/index.html","ed8113ffe4dbf99a43bbbd0246077fb0"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a6d1973e3b1221a3ff0f87f5bcd4b181"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","2cc5be46e8952b6f21fed1c97e0d03c7"],["D:/Blog_my/blog/public/categories/百度云/index.html","7a25513929dcdf521906c4f3bd3e1225"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","6abe49bc64738f45e548891286455adb"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","421b69c4a29c97cf7c51a72748041bdc"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","f6ef2de6da98d2a929b3f432524677b4"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","70cfbedf00c07d6557eb3c50bea03963"],["D:/Blog_my/blog/public/music/index.html","d94e4f889195352fdc033179f5952884"],["D:/Blog_my/blog/public/page/2/index.html","f72e280368df56b242ae89665f8cb901"],["D:/Blog_my/blog/public/page/3/index.html","b96dc66d567bb95423f6177cf5da4cda"],["D:/Blog_my/blog/public/page/4/index.html","3d805e4aa81c1750d8a6a8cbb006a39f"],["D:/Blog_my/blog/public/tags/Android/index.html","2296205925a7baca689587b213bf6421"],["D:/Blog_my/blog/public/tags/bmob/index.html","3a07e1821c52adf91665c878748c3c55"],["D:/Blog_my/blog/public/tags/coding/index.html","6d1ee429c408c26571559a414202b1a0"],["D:/Blog_my/blog/public/tags/github/index.html","837e477562093a42a459246a5df511c8"],["D:/Blog_my/blog/public/tags/hexo/index.html","56175e708b9fc8d16e1881100d864a89"],["D:/Blog_my/blog/public/tags/index.html","b4592fd7acb8a5d3e18cb70ece44707f"],["D:/Blog_my/blog/public/tags/leetcode/index.html","3ee0c196b089ba0929fa781cd2ec64d4"],["D:/Blog_my/blog/public/tags/情感分析/index.html","5c745ed99df81cb2c95a2af21521ad95"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","c524fe12fa68f28cdb8f5eb774cd7acc"],["D:/Blog_my/blog/public/tags/登录注册/index.html","30395e42c76f91b690cf49c89c925b9c"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","1d5bb5fcf710ed82b24cfd23cd8b0947"],["D:/Blog_my/blog/public/tags/笔记/index.html","67869afaa25679c7e966b1e59e829e8b"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","7e66f0c746d38990688ba67e1ea1ae30"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","a6e1bdb47e9b2234e744df573e9b6219"]];
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







