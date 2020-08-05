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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","22dbd121f3af172c5993b5cd16acf140"],["D:/Blog_my/blog/public/Gallery/comic/index.html","d45fe59d2b05cc9d3b7b270936be17de"],["D:/Blog_my/blog/public/Gallery/index.html","692615e5662e1c0eb6bf12ba6a4f82e0"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","7e30655522d112b1299908b8471daac6"],["D:/Blog_my/blog/public/about/index.html","c75ec929f4b41e4becf77be6ba434adf"],["D:/Blog_my/blog/public/archives/2020/07/index.html","7de72cbab1bb15466daf7f719c7d5441"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","9bfab7a5de8423edc615688454242455"],["D:/Blog_my/blog/public/archives/2020/08/index.html","13b89564f3bd5d33ef810e78cbef373e"],["D:/Blog_my/blog/public/archives/2020/index.html","6c780ae9e03317ff7c77a6b1509faf47"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e9bb02f68ce3891aad5a3a37a2ab8678"],["D:/Blog_my/blog/public/archives/index.html","831f9c22ad250e2c0eae88fcbc7e4023"],["D:/Blog_my/blog/public/archives/page/2/index.html","e919d55fc5ea999908972c367f3eca90"],["D:/Blog_my/blog/public/article/18e57658.html","bb5ee06635a6fe2c558172933470494f"],["D:/Blog_my/blog/public/article/1e64d194.html","b424b5b68dbd941fe8861690aba3d694"],["D:/Blog_my/blog/public/article/21f50898.html","da5144e50a6a80563ca41d8c9b545fe8"],["D:/Blog_my/blog/public/article/234762cd.html","e0d09e2149882327266f5d080780e538"],["D:/Blog_my/blog/public/article/2b97b46c.html","193675718a280afd5543fef38be8be13"],["D:/Blog_my/blog/public/article/358ad26.html","7b4a3e3f20e8a41fe8d47d1c4f921be6"],["D:/Blog_my/blog/public/article/541a8071.html","b2cb556c6457968837681d6d46b5937b"],["D:/Blog_my/blog/public/article/5d6f1d17.html","46899bf6ebb03c9a218476bff45e8fbf"],["D:/Blog_my/blog/public/article/5dcc92c.html","bd29609ff0be7088382f7632699e08a5"],["D:/Blog_my/blog/public/article/67da7762.html","4d544b1ece6041f24353dd8a46d3c89b"],["D:/Blog_my/blog/public/article/683f20fa.html","7a74e48035be5ffe97f12ff3f7876cec"],["D:/Blog_my/blog/public/article/7758c0ce.html","5a28220e5d93b4f066294d248bf7e81f"],["D:/Blog_my/blog/public/article/7a56c169.html","226a38b26fdab3b427634abadd8a7379"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","7ff5e7333740731f0389e22baab00dc4"],["D:/Blog_my/blog/public/article/c386a086.html","053fd74ab77fa1ca9a873c70dc7d510a"],["D:/Blog_my/blog/public/article/e419ec53.html","d5e29e7e3cdfa1c76b5926ec17ab2c4d"],["D:/Blog_my/blog/public/categories/Android/index.html","5bf746c1a6f69224d97a1c3a390e7de4"],["D:/Blog_my/blog/public/categories/index.html","4556153c2f9a1fc4dd8634d728b1201d"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","6db2375b1e9b0cd681a157c1b2ae2391"],["D:/Blog_my/blog/public/categories/后端云/index.html","a8beebc7590ec174cc03f179573b8c96"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","d75a6e8f0e6d9154a243d04b1570e6c3"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","dcb6b7acfe3d1cdc86ed6e1f02bd7f0e"],["D:/Blog_my/blog/public/categories/百度云/index.html","fe4670717871b65e4605c8b3b924e0ff"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","abc98f3f9c5209b65caf3db2d355ec0d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","43a63d35629fb2d7c1a8b9a36ca302d2"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","f5a2aeffd77201ac5305674f728c1b55"],["D:/Blog_my/blog/public/music/index.html","fe352371d7be90bbfcf2f209e52fe4b2"],["D:/Blog_my/blog/public/page/2/index.html","49c4a82e78e56fd12ad56c2ed59acb9c"],["D:/Blog_my/blog/public/page/3/index.html","fd397089250e1a7bee6d13af6a575b86"],["D:/Blog_my/blog/public/tags/Android/index.html","60420507358f25900dd422f8dbc88ae2"],["D:/Blog_my/blog/public/tags/bmob/index.html","fedb5d6882833a4977dcbfbeb0e73988"],["D:/Blog_my/blog/public/tags/coding/index.html","9d3664a2f4553598d17912d36073551a"],["D:/Blog_my/blog/public/tags/github/index.html","798bbd7347ebf00c5da717ca4827d6cb"],["D:/Blog_my/blog/public/tags/hexo/index.html","9d272763a9c30a9bb2bac2a57b9653f7"],["D:/Blog_my/blog/public/tags/index.html","fa5d30fea647fd1898aa494a49d56b73"],["D:/Blog_my/blog/public/tags/leetcode/index.html","333d007eb97a4ee46399d3e95f5e41df"],["D:/Blog_my/blog/public/tags/情感分析/index.html","10dbd4cafb6be1a9197b981dd2d7387b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","7eb273569706d2ceed0727f867b03b8f"],["D:/Blog_my/blog/public/tags/登录注册/index.html","cfbf78c688c377bad228ef214e8c82c4"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","b0c09ad5b3faa9dd5c235ed85e22f4cf"],["D:/Blog_my/blog/public/tags/笔记/index.html","46ffc4d37bd9b118c34917a1067f4134"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","bb1a18ff8edcbc7e565013ff8262f021"]];
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







