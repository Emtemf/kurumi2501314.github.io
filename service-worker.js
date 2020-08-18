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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","7988549f0951f956e326c9a7cda2ae18"],["D:/Blog_my/blog/public/Gallery/comic/index.html","519d76dd44a291a4e9a20be6eece21e3"],["D:/Blog_my/blog/public/Gallery/index.html","acdd3adcf291da4358c603fc7baa0adb"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1cdb63efa6323ce206f937980ed189ec"],["D:/Blog_my/blog/public/about/index.html","2bb23d974cfc60704f8009c98866b1ff"],["D:/Blog_my/blog/public/archives/2020/07/index.html","04e44479077568ce71707f68aaa99edd"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","58b7a07cffab543389643bfc9dddf589"],["D:/Blog_my/blog/public/archives/2020/08/index.html","a78c70f3771f08c015d06fa1fb61b063"],["D:/Blog_my/blog/public/archives/2020/index.html","10b2c1f4f9074f3206c481a0eb350351"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","3f31b3e5ef155dd0c3d8248778f73773"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","6532225d244a494852867c3e4887bad3"],["D:/Blog_my/blog/public/archives/index.html","9e0a2536a1846909c2f705f5fc325303"],["D:/Blog_my/blog/public/archives/page/2/index.html","73e91a39c29499e26f52110ab79394e7"],["D:/Blog_my/blog/public/archives/page/3/index.html","b5203ab5ac5a1bebb7263650b00f337c"],["D:/Blog_my/blog/public/article/1811f8b8.html","5dbac44298a8bad68f0acee9e51d67dd"],["D:/Blog_my/blog/public/article/18e57658.html","740de8bcbcb6ea69436c0d072e717be6"],["D:/Blog_my/blog/public/article/1e64d194.html","1958b035c27292f348da5ac10f9bbd69"],["D:/Blog_my/blog/public/article/21f50898.html","7937300edff0e4b56c6fc2d35004fb14"],["D:/Blog_my/blog/public/article/234762cd.html","d59ab815a9a0c6c30c40dca1918f056b"],["D:/Blog_my/blog/public/article/2b97b46c.html","fda26f89cdba4aad99471af871f69d61"],["D:/Blog_my/blog/public/article/358ad26.html","ff03ae19d84a9ab6198e37a0bb800bc2"],["D:/Blog_my/blog/public/article/541a8071.html","b301e40d7724f3360b3ae34799a685e0"],["D:/Blog_my/blog/public/article/54412d2c.html","99793a8adc23e28f23f2012fd78b51ef"],["D:/Blog_my/blog/public/article/5c1827a.html","61774490ef374ab273ae3443a73b56b8"],["D:/Blog_my/blog/public/article/5d6f1d17.html","420f7808fada79ca15f125dc49c697d1"],["D:/Blog_my/blog/public/article/5dcc92c.html","5caf1cd0fa25b220ef0a48ea9408305d"],["D:/Blog_my/blog/public/article/67da7762.html","5c7d9baa9c969a5e824341e5b4baf4a3"],["D:/Blog_my/blog/public/article/683f20fa.html","15ddf4197e46a7e8e57617ef8038dbe4"],["D:/Blog_my/blog/public/article/7758c0ce.html","bff446f712e3280afaaed6d4f3df61de"],["D:/Blog_my/blog/public/article/7a56c169.html","c06e7cb16d69141d5ca353c8757379ef"],["D:/Blog_my/blog/public/article/7d561955.html","77410c101ca1cffa6f87738c6711aaaa"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","f115ced17ca788ba65c26b0548311170"],["D:/Blog_my/blog/public/article/c386a086.html","06d65bfbe7b0fdbc8876982edebdb3f8"],["D:/Blog_my/blog/public/article/d080f90f.html","518b698367d0ecb240ff10482c729be4"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","c7207d46173ff54f0dd546a2ca91ac7b"],["D:/Blog_my/blog/public/article/e21e4e82.html","1f73c8906bef6706c05f876a56a39f5c"],["D:/Blog_my/blog/public/article/e419ec53.html","e6d6f86ab6d28f1955f9adb8b39b8089"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","0d4d7ccfcbd17cfd988fbb2a7885693b"],["D:/Blog_my/blog/public/categories/Android/index.html","e0ed6afbb3787b419979f96a2279a501"],["D:/Blog_my/blog/public/categories/index.html","f474d2dd20908a3465b055cb895cc487"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","7668f21f5e302c888d1cd19460854a78"],["D:/Blog_my/blog/public/categories/后端云/index.html","4fbf7d75b7ab31c8d7e312124c57055b"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","954d45dd24f77d58e7be15f0c99ab68a"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","a145c560a066d85c98840f60e18791d5"],["D:/Blog_my/blog/public/categories/百度云/index.html","af458b454193b0c1bd3f44bb995a8849"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","04790fb2bffc4b2bd4e3e59b38545960"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","f0b6a8d94d8ced2b4e50da59bd1aa100"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","1c0744b78ed7cf5414847e74b5dabf1e"],["D:/Blog_my/blog/public/music/index.html","91f52c48f810bf28e93b2fbbd6962490"],["D:/Blog_my/blog/public/page/2/index.html","92bde64f1a9acecbd9856ec8a7dfeb10"],["D:/Blog_my/blog/public/page/3/index.html","1d875a46bece12f832aae563325ff56a"],["D:/Blog_my/blog/public/page/4/index.html","6c275c70761661a3c91328217cf4957b"],["D:/Blog_my/blog/public/tags/Android/index.html","20baee56f36b337c2471dc4a3e9fa5db"],["D:/Blog_my/blog/public/tags/bmob/index.html","9f5454b5cba2c83e0241c5dd18d9f6ab"],["D:/Blog_my/blog/public/tags/coding/index.html","06fc60b68c3426cfffd8b1631151d592"],["D:/Blog_my/blog/public/tags/github/index.html","a59987c0bbb10b72a0bd4cb3352091f9"],["D:/Blog_my/blog/public/tags/hexo/index.html","b4a420b89eb2ef87b55e55ca6e99882e"],["D:/Blog_my/blog/public/tags/index.html","a18dc4ba3736786ef9fa142281cb14b0"],["D:/Blog_my/blog/public/tags/leetcode/index.html","83ba34047926ba7fbd913324bfe03609"],["D:/Blog_my/blog/public/tags/情感分析/index.html","aee16d5ec33c682ac9101dde75842e93"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","031de3ff32bd2378d3d60b48c8a1d119"],["D:/Blog_my/blog/public/tags/登录注册/index.html","6705dc1085a026cc2671b93f3af70595"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","b0f7d844d594829ac5fa150822df1e46"],["D:/Blog_my/blog/public/tags/笔记/index.html","093b7d62122be4e39cb8f4186564b0b8"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","bca9bd24e0ec2958ea6303d81dcb2718"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c52636a796768c72c6f61e2e6fd004f2"]];
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







