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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","8199487d41d9dadd1de85fb8a0073d5f"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3256808fdc3b752dc43c0793b5b7ce3e"],["D:/Blog_my/blog/public/Gallery/index.html","8439970acdd55a989f9c6f2605762805"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","86c86aa05bf40d12ea91f86e98d3a5be"],["D:/Blog_my/blog/public/about/index.html","92cd7a7eb12d3e1d775a8d2924201686"],["D:/Blog_my/blog/public/archives/2020/07/index.html","89631cddc5ed65b1ac78d543fea17a46"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6a1020265261f04cd4884d80a18c6373"],["D:/Blog_my/blog/public/archives/2020/index.html","7d47f070f2913a9c6b6932763f1caafe"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","c523c1e17b9aa2a1cddd2fb7bc97b347"],["D:/Blog_my/blog/public/archives/index.html","c0cc2ce5fcbab029123d9896f05f6dfc"],["D:/Blog_my/blog/public/archives/page/2/index.html","28bb0571eec2ad0c3dfef85029e1c03e"],["D:/Blog_my/blog/public/article/1e64d194.html","6f58a4f52cd32078ff5ef45989edb756"],["D:/Blog_my/blog/public/article/21f50898.html","3d047b771e38efdbc40ec2d63c2675e5"],["D:/Blog_my/blog/public/article/234762cd.html","0fa0152e6993e08a71325c0039bbde99"],["D:/Blog_my/blog/public/article/2b97b46c.html","186c68c125ce8f60ae17b593f370b47f"],["D:/Blog_my/blog/public/article/358ad26.html","a96e4a23342d0118ff02cc5e0be3d829"],["D:/Blog_my/blog/public/article/541a8071.html","efcaec965f49b0cface63cc4e9fc99ee"],["D:/Blog_my/blog/public/article/5d6f1d17.html","51873ce5dc395f7f57bff93d8c127388"],["D:/Blog_my/blog/public/article/67da7762.html","324f779a7409a1f7970ca1d02cf93294"],["D:/Blog_my/blog/public/article/683f20fa.html","3f08daed7e76d08f6e5ce755d44b7a7e"],["D:/Blog_my/blog/public/article/7758c0ce.html","baac4975e80e405489202d3a6fcea7c1"],["D:/Blog_my/blog/public/article/7a56c169.html","bb4571e79690f9b0d708f661a91ea7ca"],["D:/Blog_my/blog/public/article/c386a086.html","db65cb1997090426cd48a638b024e7bd"],["D:/Blog_my/blog/public/categories/Android/index.html","4514c8e1cb2182352d9bb51c7e4812cd"],["D:/Blog_my/blog/public/categories/index.html","df319f22ae024de501317536b71b2415"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1681e3ff5fedb9af73435621f161c1be"],["D:/Blog_my/blog/public/categories/后端云/index.html","d3650ccc6bbba72d9ed3779191ecb9ee"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","e97b0bd3acb62b234018ec54c1d8cbf8"],["D:/Blog_my/blog/public/categories/百度云/index.html","70a6730aaa1f0fbc9473e08cb99f54e3"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","3f5735eb8796301c63c15730f686ea87"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","2ddccbda354e9665fae24e3c4d39567c"],["D:/Blog_my/blog/public/css/touming.css","03ba2965fc83a6a97a9466b9e2e683aa"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","d951d3abced7d812f24c434bac75cd51"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","393f6d928063e5893741b5505839ee5a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","628306a9488222298a114d6d17410ef9"],["D:/Blog_my/blog/public/music/index.html","4fe9c7fff1d754ba8944924e18078e72"],["D:/Blog_my/blog/public/page/2/index.html","b4f66b47033a3e03fac76cdb7209b7d4"],["D:/Blog_my/blog/public/tags/Android/index.html","673cc6030032cac5b60af7581dff344e"],["D:/Blog_my/blog/public/tags/bmob/index.html","5971f229d73fc971d7a68ef01f911507"],["D:/Blog_my/blog/public/tags/coding/index.html","0e6e3c5e37edb89d5554fb336c6acb8a"],["D:/Blog_my/blog/public/tags/github/index.html","5e5291b2b5490672549e00be3546ffc8"],["D:/Blog_my/blog/public/tags/hexo/index.html","c36003656a50892dcfa81924b242c039"],["D:/Blog_my/blog/public/tags/index.html","38d4c18e2098999b42633a2c6039635f"],["D:/Blog_my/blog/public/tags/leetcode/index.html","24b2ef0000d91baf51a2c7a3536fcfdb"],["D:/Blog_my/blog/public/tags/情感分析/index.html","263f006bf87fd23726671c08d5e74081"],["D:/Blog_my/blog/public/tags/登录注册/index.html","fe149a882b4e758f898c2b5dd6f93f3d"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","891afb4edcefe2aed32c8dcda419dee1"],["D:/Blog_my/blog/public/tags/笔记/index.html","e3bbbaff80d15f6678743369c4f900f6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","e78a2b02fd8c925916c149e996915310"]];
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







