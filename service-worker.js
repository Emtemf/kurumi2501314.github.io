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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","04be0982f67de6ea121d3588b10a18e0"],["D:/Blog_my/blog/public/Gallery/comic/index.html","f9f4d8c03ceb218d30e9d560e342ac97"],["D:/Blog_my/blog/public/Gallery/index.html","e33e32c85ab02c135fec2208bb788658"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","404176ffd4498f3b12abcdeb4867d4c2"],["D:/Blog_my/blog/public/about/index.html","ce965ec4993d5f3cd30858c4add7c0b3"],["D:/Blog_my/blog/public/archives/2020/07/index.html","f9fcf9e35d4e1825270627fe7ed8bfde"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c6e39d1a8fc08968e561d4656c8d3723"],["D:/Blog_my/blog/public/archives/2020/08/index.html","badd929815ee34cca64efec3bebd0ce3"],["D:/Blog_my/blog/public/archives/2020/index.html","39337854c1fedc993dd492326b793970"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","d39a94daf299b1519defe19eac2496c4"],["D:/Blog_my/blog/public/archives/index.html","b673248c4ffdc9e145b1a43daff4fbbb"],["D:/Blog_my/blog/public/archives/page/2/index.html","1c377c2481febfd756741ca814bf73f1"],["D:/Blog_my/blog/public/article/18e57658.html","accbb7722fe8d81a3a77f88b8c6168d2"],["D:/Blog_my/blog/public/article/1e64d194.html","fb24327b8241357dcb56581aec7b49b7"],["D:/Blog_my/blog/public/article/21f50898.html","5a7a3cf78bb4d399b5e688c7bace7813"],["D:/Blog_my/blog/public/article/234762cd.html","5900b945f392cd57a721a08b72fffa2c"],["D:/Blog_my/blog/public/article/2b97b46c.html","c3ff808bdc5fefcaef56772aa82a2360"],["D:/Blog_my/blog/public/article/358ad26.html","bcbfd0e7ad51c91a2a000fae543d8642"],["D:/Blog_my/blog/public/article/541a8071.html","19863a5f725032281a37e2d33891a1ae"],["D:/Blog_my/blog/public/article/5d6f1d17.html","7b0491c7e8f572d712c5588af2407af9"],["D:/Blog_my/blog/public/article/5dcc92c.html","48a363baf0ef84d3f72776e5966a53d3"],["D:/Blog_my/blog/public/article/67da7762.html","04b790ec86e5351bb7b4433669959cb3"],["D:/Blog_my/blog/public/article/683f20fa.html","cd6cc5d6cdf8459a49ac7bd052bf5439"],["D:/Blog_my/blog/public/article/7758c0ce.html","57c2d0458475e97a2f465a668186a19d"],["D:/Blog_my/blog/public/article/7a56c169.html","f7f3412b9a8dc3791fa9cb306653d55d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","dd0c4ceb37a62c6444c96c9f3dcdb744"],["D:/Blog_my/blog/public/article/c386a086.html","4eb310e2639878ff6a6f2b3ca9557280"],["D:/Blog_my/blog/public/article/e419ec53.html","21291de9ac3b2d4754270c228d72c2b9"],["D:/Blog_my/blog/public/categories/Android/index.html","2c6576ce646864ebe0485b1ade900128"],["D:/Blog_my/blog/public/categories/index.html","4493fedd39408b963d42bbaaf1e3ca8e"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","c3087f0be31956a4c3a0f58a27738cca"],["D:/Blog_my/blog/public/categories/后端云/index.html","95a2856ba67e6324db20e42051f64442"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","62e6ba3d54fa1874c5fa4460f8bdaede"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","5997b2e8815e397d10d126939082e07e"],["D:/Blog_my/blog/public/categories/百度云/index.html","c39506b01c40e2adc609b0402744c03c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","c20fa5969f1cce415d7ae01511652ce0"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","878c7eba20ab7a77825ce969ea0e4d9c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b83cc7a30990e7326e731f40e8877f90"],["D:/Blog_my/blog/public/music/index.html","cbb4dad0588e845e62e64e188a5668c8"],["D:/Blog_my/blog/public/page/2/index.html","f0c6d30aae1d68d01f8163871c19da29"],["D:/Blog_my/blog/public/page/3/index.html","55eecb4422dd342e71222052c94ec9e6"],["D:/Blog_my/blog/public/tags/Android/index.html","3f92f4a9c05167fbc8b0c00d28a12d9a"],["D:/Blog_my/blog/public/tags/bmob/index.html","3eb5f6bb8f64a4dad156f18b8b3dc858"],["D:/Blog_my/blog/public/tags/coding/index.html","78cfaef1cb1a20246df8d62e6b3cb2b3"],["D:/Blog_my/blog/public/tags/github/index.html","5aaaabc6a0442c59197d72a8c73b83d7"],["D:/Blog_my/blog/public/tags/hexo/index.html","1d70958aa56e7141bb4ea0f5a3075e98"],["D:/Blog_my/blog/public/tags/index.html","e6ec80c67811c0c1fd0d9ee4d9f5226c"],["D:/Blog_my/blog/public/tags/leetcode/index.html","9030629e9554c391a218b2c23f173701"],["D:/Blog_my/blog/public/tags/情感分析/index.html","8a72ccbfe68c29ad8121c015ae6df209"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","d525927f463a9a49464b9bc4d9ad8bf9"],["D:/Blog_my/blog/public/tags/登录注册/index.html","29e849e104b0f9fa6d9508a1a62216db"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","90a669dbf0140c155662e6f87c3aab0f"],["D:/Blog_my/blog/public/tags/笔记/index.html","8d786ef969001f7b289479b640aafa1c"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c5e416200a2d43fb090c1026eb9591db"]];
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







