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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","9190c0d66f23a373e6d53d446b16c666"],["D:/Blog_my/blog/public/Gallery/comic/index.html","1e876a000715b81e53f85543153a6dcd"],["D:/Blog_my/blog/public/Gallery/index.html","b44fb45ad3eb3c767f56379673661c43"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","f2a059abe137d11ea65e83c47b5c8a75"],["D:/Blog_my/blog/public/about/index.html","7274008db9c7bd0565300848cd64f6ad"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ca41a92d5ad4755d7bdb589585203b2a"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","e751510eb2268b4392c9d04747da54fe"],["D:/Blog_my/blog/public/archives/2020/08/index.html","c0e1ad7646f4e0329e0de5d3589f3193"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","6dd17560902cc67e928822cc1bd898ef"],["D:/Blog_my/blog/public/archives/2020/09/index.html","821fa9dee9671649c3d60c7b52d9b4a3"],["D:/Blog_my/blog/public/archives/2020/index.html","fbaf6bc2fc620dc8b7f0659c88f3d203"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","3f40c26e7aac103e778e2cb6458da84b"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","6cb0f0836a8ff0af599fcda28be120ec"],["D:/Blog_my/blog/public/archives/index.html","84b73bc13b9010927230fdb5c0c99a7c"],["D:/Blog_my/blog/public/archives/page/2/index.html","0f440ac6a64e9c48685dfef4b3de5c1f"],["D:/Blog_my/blog/public/archives/page/3/index.html","f6560d89e8943d309d7194b628f2c5bf"],["D:/Blog_my/blog/public/article/1811f8b8.html","4b476af75f4734c014b51f097a3681f1"],["D:/Blog_my/blog/public/article/18e57658.html","0e0d04411c9f718b38180108cbd37d59"],["D:/Blog_my/blog/public/article/1e64d194.html","4d0413f2c0a8124135947bfe76766644"],["D:/Blog_my/blog/public/article/21f50898.html","872291f1be4c21900162e123badc46c0"],["D:/Blog_my/blog/public/article/234762cd.html","0e2540d32df8ba54740056136760c76e"],["D:/Blog_my/blog/public/article/2b97b46c.html","fed963bd7d1922787035df61764f6698"],["D:/Blog_my/blog/public/article/358ad26.html","80c739d5ec22a364e7907b72be3251b3"],["D:/Blog_my/blog/public/article/541a8071.html","830c5022e9a4a1371b648bcd04df6a32"],["D:/Blog_my/blog/public/article/54412d2c.html","200a583b283923fd9394745460564978"],["D:/Blog_my/blog/public/article/5c1827a.html","1663052bbbb2a1e1047311fbfa023314"],["D:/Blog_my/blog/public/article/5d6f1d17.html","3bae51dd6bc43a82dde81c20813ec835"],["D:/Blog_my/blog/public/article/5dcc92c.html","39f54427b1f43982dc71349c2040e96b"],["D:/Blog_my/blog/public/article/67da7762.html","b1b7f8a1a797dea11f38b14b9f5fe58d"],["D:/Blog_my/blog/public/article/683f20fa.html","cce930264018d0823fa9c9cf94b7b1b1"],["D:/Blog_my/blog/public/article/7758c0ce.html","b601fbb6d8546b2101dd3563f371053b"],["D:/Blog_my/blog/public/article/7a56c169.html","c3205f3aa253d51f08ebb1e031c7fd80"],["D:/Blog_my/blog/public/article/7d561955.html","de8d2d70234451ed37061c135673a4e6"],["D:/Blog_my/blog/public/article/a0595b99.html","6382af84c2c69003275d15056f9fc2a7"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","17732914dc57e4ff5c8e3ee6df49dd13"],["D:/Blog_my/blog/public/article/c386a086.html","42c81c3713a117e180e629db046f352f"],["D:/Blog_my/blog/public/article/d080f90f.html","84d2224c5b0fb88fea44eef652566a63"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","fca3363f012a7272b48d4c4e5a7ec00e"],["D:/Blog_my/blog/public/article/e21e4e82.html","9acaa539186f57533c330a0d195935e5"],["D:/Blog_my/blog/public/article/e419ec53.html","db107df27895208b351547402e6a4692"],["D:/Blog_my/blog/public/article/eb0fc959.html","7e53c27ec84aa3fdd74cbd583643521a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","81f98c5658cfa415728f62d1510a922f"],["D:/Blog_my/blog/public/categories/Android/index.html","57b5c9e0043ad7e369678aa9b214c078"],["D:/Blog_my/blog/public/categories/index.html","e8edb827dd4ccda042aad74601d91341"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","ce8d7dcc13c5f5260d8dfcc9b01142c3"],["D:/Blog_my/blog/public/categories/后端云/index.html","2cb380ed6f519c98a192d9c497fba659"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","67268666e64ce6013ab08fd5c90bd380"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","3436626da5144e0b37fd0e762392188c"],["D:/Blog_my/blog/public/categories/百度云/index.html","494321a9056dcbdab1abbc938c830111"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","71bf29d350e1d61d6d0f3aa9b1d89f90"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","15ccf27aff3c67a374d4414eaeaeb921"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","60a7998a5659386f8dca4f5544d5fdfd"],["D:/Blog_my/blog/public/music/index.html","f2fb5d4ccdc491493ddaaf5504b29b99"],["D:/Blog_my/blog/public/page/2/index.html","05166494fa31304351466fc4b8e81508"],["D:/Blog_my/blog/public/page/3/index.html","9a28b9ae08863388b1e03d314045fb67"],["D:/Blog_my/blog/public/page/4/index.html","83dd68f56cffa02fbdb00a832494b5c2"],["D:/Blog_my/blog/public/tags/Android/index.html","0bfd69343a77daee1a85686fda69317a"],["D:/Blog_my/blog/public/tags/bmob/index.html","5881dfcdfcb6ce282583ef9605f5ccf9"],["D:/Blog_my/blog/public/tags/coding/index.html","1a78cb0a6d08cc3250ddd3b431466fe6"],["D:/Blog_my/blog/public/tags/github/index.html","5552dcb68e833f59501377b56804d8a2"],["D:/Blog_my/blog/public/tags/hexo/index.html","10e78b93a8ead59a8839b7a5fdd47d4a"],["D:/Blog_my/blog/public/tags/index.html","dde37c3c2bfd4ba11622356500a855f5"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0900b12eff7c217d3f8ec4498c4bfc87"],["D:/Blog_my/blog/public/tags/情感分析/index.html","690b628c4dd3ecfa108f410199834889"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","73e320d948abcfc64ea4f9b83b9b0fe7"],["D:/Blog_my/blog/public/tags/登录注册/index.html","05157e005ca206ef6dc0c1a2ae25e1fb"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e317410c83d6cab751f50c174a19665b"],["D:/Blog_my/blog/public/tags/笔记/index.html","2d7335e51c6a704be19355946e4f96d8"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","489c612c694bbeb5067bd2ea172d093f"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","177cf7eaec578863bae53991a9dadc3b"]];
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







