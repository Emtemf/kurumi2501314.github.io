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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7ed727534840ac52f51fdd9f6275dfc0"],["D:/Blog_my/blog/public/Gallery/comic/index.html","8d3f63e35f2c3503ba839bbf43ce235d"],["D:/Blog_my/blog/public/Gallery/index.html","11fd0d27cadc0c2c57a7cb5347f76c69"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","24bb57c17ee40389bd8d2b9382eac121"],["D:/Blog_my/blog/public/about/index.html","760e4fa1c8645919885aac36c92d957b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","77fe8916bdefd374e01a50e14c1f0cad"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","446c5aef53a044141b5775c32c816414"],["D:/Blog_my/blog/public/archives/2020/08/index.html","fd050a74932259a59cdc037210aa091b"],["D:/Blog_my/blog/public/archives/2020/index.html","0f81e0f1fb4735ee74c5b18e91c55411"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","9bc07c18f2e87c13fed2b388fc409c01"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","1ab6f8356f915e31475c309126ae7280"],["D:/Blog_my/blog/public/archives/index.html","193c9ffc0c801ef0744841bc699fd63a"],["D:/Blog_my/blog/public/archives/page/2/index.html","3ee75d62372ee985225fc62220c500cb"],["D:/Blog_my/blog/public/archives/page/3/index.html","391c1f7af7f20963137060b85cbe2c17"],["D:/Blog_my/blog/public/article/1811f8b8.html","d7fb43572464134679fedfc6427f537a"],["D:/Blog_my/blog/public/article/18e57658.html","d5cc0e634ebda40c8ade83268bb52609"],["D:/Blog_my/blog/public/article/1e64d194.html","d16cdd444df400a8f2807eb27cc14a5a"],["D:/Blog_my/blog/public/article/21f50898.html","ca32e8ff2ed8b683db4ec94b327fc10c"],["D:/Blog_my/blog/public/article/234762cd.html","192a81a457b2000a9a2b58ca2bfa3278"],["D:/Blog_my/blog/public/article/2b97b46c.html","619f5878e76d11d568bea183b50e8c49"],["D:/Blog_my/blog/public/article/358ad26.html","bace642315e9ad0d91488e8e1ff15302"],["D:/Blog_my/blog/public/article/541a8071.html","a1e50ead5520d7f65dbb869d87145117"],["D:/Blog_my/blog/public/article/54412d2c.html","776695e38a2050e2acb53be462430b2e"],["D:/Blog_my/blog/public/article/5c1827a.html","4c5c48281e11b8106b1939c8b8f66377"],["D:/Blog_my/blog/public/article/5d6f1d17.html","d02ed2766ebf4e0e65e396eca8ba417d"],["D:/Blog_my/blog/public/article/5dcc92c.html","e15ce74118cdfba27c757015a0029aca"],["D:/Blog_my/blog/public/article/67da7762.html","a83cbe6914c2ca625eb624c22e098608"],["D:/Blog_my/blog/public/article/683f20fa.html","1b59d99f8f2c20038d13a7a115385c5d"],["D:/Blog_my/blog/public/article/7758c0ce.html","eee04f589e1ee215768294a67dd2ff30"],["D:/Blog_my/blog/public/article/7a56c169.html","eb4ffe1d1cc05b48c2fa5d22cda675d2"],["D:/Blog_my/blog/public/article/7d561955.html","016226cb2457dffa0ed7b66f01b37d21"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","81b3d490fe3f0c866867ddbf0d4200a8"],["D:/Blog_my/blog/public/article/c386a086.html","939bbb446a530641844ee241e7339e54"],["D:/Blog_my/blog/public/article/d080f90f.html","34d8a443562aacbcea2144bb19defd87"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","951cead4bc9c7c0e2e80633461b37631"],["D:/Blog_my/blog/public/article/e21e4e82.html","ab9fb6153432e740e40f7cfcc67b3b03"],["D:/Blog_my/blog/public/article/e419ec53.html","89f1c36e872e4c798cba1ad331a64817"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","e821afdf3b0766cfcefa59f990a1d8a6"],["D:/Blog_my/blog/public/categories/Android/index.html","62d39875363fb1d565d15eb77096706e"],["D:/Blog_my/blog/public/categories/index.html","6d89e320fa47fa125609bf3f9cc9e169"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","cb652e1f8ac0d730e433dd734a273646"],["D:/Blog_my/blog/public/categories/后端云/index.html","9c98518d106d0d6ed3c5b548b3634082"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","ae5b37a18e34338ded12fb763c200b1b"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0a3cf73d746ebf7a28ec028ef4e269ae"],["D:/Blog_my/blog/public/categories/百度云/index.html","2bcd70a437bb8c5cee28935a25d61c53"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","64b0dbf15cfac0e3c31469a2832d1235"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1a5ef96c574872f7e07d2b90a3c64780"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b38fab35174677e25be73a99b305d7c8"],["D:/Blog_my/blog/public/music/index.html","8b87811db402a93b09cb479e0aa37e55"],["D:/Blog_my/blog/public/page/2/index.html","31aa590905d38073e883de7fba38a10b"],["D:/Blog_my/blog/public/page/3/index.html","2e5f870695c4e24314a6dfe7c1d4aa3f"],["D:/Blog_my/blog/public/page/4/index.html","0192aa6c8ddafd0a1e9f704e173c460e"],["D:/Blog_my/blog/public/tags/Android/index.html","4d832d7837ecd273c77258d36027d442"],["D:/Blog_my/blog/public/tags/bmob/index.html","d4fb85d45683a8f953ea712ff4ca1dc4"],["D:/Blog_my/blog/public/tags/coding/index.html","6af2d19c8e48b21e87ff07d41f985f32"],["D:/Blog_my/blog/public/tags/github/index.html","9625a9f1fb6eea1094d14cb07a5b4fd1"],["D:/Blog_my/blog/public/tags/hexo/index.html","bee2cefbdadcb5e9a889d47b82db77a8"],["D:/Blog_my/blog/public/tags/index.html","92e0a362c09f80575f3d1b3fb45cf2ab"],["D:/Blog_my/blog/public/tags/leetcode/index.html","fafc930e5d16738d1c8aef7e489e376a"],["D:/Blog_my/blog/public/tags/情感分析/index.html","64922153a0c9a30d3a54613bd2859ba2"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","5497a74234315033f9f30df4ad7bbb84"],["D:/Blog_my/blog/public/tags/登录注册/index.html","bf5d8d5ad2aafb2fb1cba8b4317a81a7"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","3b662f39133556dfae93309fc2210ba3"],["D:/Blog_my/blog/public/tags/笔记/index.html","3af4f202f178926aef299190993e3a76"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","269efe99e0c0a0f4e9b65ae065c65a86"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","97c100bb9494129f2042208512a3a019"]];
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







