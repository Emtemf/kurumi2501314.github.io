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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","2a21155518e15f652341c7bf6dbc24e3"],["D:/Blog_my/blog/public/Gallery/comic/index.html","c7b8a4ad787c11061f7a5ba090efb344"],["D:/Blog_my/blog/public/Gallery/index.html","238477e755f0ed4a1dc0e47b16be6ab2"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","da18c2e9e19aa96e7f95276f06663893"],["D:/Blog_my/blog/public/about/index.html","c593cd8d41873316285e547c2d689e4a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","54fe6fff9f9466dfb88b77cc8a83c772"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","3e6cd2631e5d4c6a3efc6119547d60ce"],["D:/Blog_my/blog/public/archives/2020/08/index.html","9fa026c6b8a00ad084d1b2cde6a7c8f7"],["D:/Blog_my/blog/public/archives/2020/index.html","fe8301dca0c4192be80b7a8041f08f2c"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","aa053e91426f146ed342e80e65d3094b"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","42d13fc8c7acf7cf8637bd085d62e324"],["D:/Blog_my/blog/public/archives/index.html","8d61994248b2017907a3247f84348749"],["D:/Blog_my/blog/public/archives/page/2/index.html","61c7f09704482a670a195d9ea9873a76"],["D:/Blog_my/blog/public/archives/page/3/index.html","0430c07599472e2a37d12f73383df66c"],["D:/Blog_my/blog/public/article/1811f8b8.html","ef8bcde54fa1196d6997199d35501f27"],["D:/Blog_my/blog/public/article/18e57658.html","76c2b25f767b1cc87698c0a6e17d5046"],["D:/Blog_my/blog/public/article/1e64d194.html","85ed07dcc205b89ec16a11e9756d719e"],["D:/Blog_my/blog/public/article/21f50898.html","a361ab59297b71057d2f604132fbff4f"],["D:/Blog_my/blog/public/article/234762cd.html","34bd9548b14686a073d5c8d7e011e03c"],["D:/Blog_my/blog/public/article/2b97b46c.html","4420ed46092f1c885734af072719da4e"],["D:/Blog_my/blog/public/article/358ad26.html","092913b9d81994fc2d38f830fabe6af0"],["D:/Blog_my/blog/public/article/541a8071.html","572f947bda8b2508b9a451dfa2e5ff36"],["D:/Blog_my/blog/public/article/54412d2c.html","5e170dff036edf65317afcad160985a9"],["D:/Blog_my/blog/public/article/5c1827a.html","fb39fc22bdd6779404d16d1e21ecd8bb"],["D:/Blog_my/blog/public/article/5d6f1d17.html","147665339648aa41d0966d5623271276"],["D:/Blog_my/blog/public/article/5dcc92c.html","7afe24694acd5c868f23fe008b05d308"],["D:/Blog_my/blog/public/article/67da7762.html","8db1bf7deefb22be348c9a0f8d776936"],["D:/Blog_my/blog/public/article/683f20fa.html","506601e0ab159b92ffd2bd7555711f0a"],["D:/Blog_my/blog/public/article/7758c0ce.html","cd0b792e15f7bab11292ece0486b3dce"],["D:/Blog_my/blog/public/article/7a56c169.html","854e13bcfcbec048bd20bf19cb3f42c3"],["D:/Blog_my/blog/public/article/7d561955.html","9989c67898c3653273d2b280c9c3016d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","58032646c1c3320a5a88601f222b0872"],["D:/Blog_my/blog/public/article/c386a086.html","80d71d3c4be469253c236b36e83d9ac9"],["D:/Blog_my/blog/public/article/d080f90f.html","8d07a4fc93821b775abb3da6cb2f9cd0"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","57a740fede4a3e8e8eecca71f9e3dd1e"],["D:/Blog_my/blog/public/article/e21e4e82.html","a71d3c0cc26d123f072b20a0466f0d6f"],["D:/Blog_my/blog/public/article/e419ec53.html","2d45ec249ecbcae4ec13e2f6da956733"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","4bb6444bc371d60cc2dff05aa3ac3861"],["D:/Blog_my/blog/public/categories/Android/index.html","df2bc6858770d67e37a744acbd71affd"],["D:/Blog_my/blog/public/categories/index.html","aada5a9c3d6ef9fc4d95feea59cb8730"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","b084ec63ae9ccc852040665c552e54f9"],["D:/Blog_my/blog/public/categories/后端云/index.html","9ed8176645395eaba9d1ae9f18114c0b"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","101d07c14337c5c1c66301355e434a4e"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","69767e3b1744308b4e3a34ebdea7ba01"],["D:/Blog_my/blog/public/categories/百度云/index.html","c2eef840571c1c1513b08c971ce5759b"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","1b53dee6f9e5ff3de1e294f41df95a6a"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","e8f0f49de39e463da444a48181680236"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","5f66179d07099fb2dfb3c9985048b920"],["D:/Blog_my/blog/public/music/index.html","e55760f261917fde2475130c53bcc394"],["D:/Blog_my/blog/public/page/2/index.html","b424a090dca19a43858f2f13053a6ffd"],["D:/Blog_my/blog/public/page/3/index.html","f6a1cf4ac226eaf92401022d21a38a09"],["D:/Blog_my/blog/public/page/4/index.html","c4f2bffdd86d86f37501335e3b3ded18"],["D:/Blog_my/blog/public/tags/Android/index.html","42444f9a1b43d2c3f9f195c2502716a8"],["D:/Blog_my/blog/public/tags/bmob/index.html","f72e3da417392b0d1d1c9f7f22ce1d6a"],["D:/Blog_my/blog/public/tags/coding/index.html","f464e29ce18e9fab4d97ccba3390252b"],["D:/Blog_my/blog/public/tags/github/index.html","88cfe5f2c362eecc3bb00bcf4dc62a26"],["D:/Blog_my/blog/public/tags/hexo/index.html","dbe8100a0aa5440797e461755387361c"],["D:/Blog_my/blog/public/tags/index.html","009ec8a40a272572eb97cc6a2181ce9b"],["D:/Blog_my/blog/public/tags/leetcode/index.html","bf462632f2da8e00d6444eab7741cc97"],["D:/Blog_my/blog/public/tags/情感分析/index.html","6710d09a991d352822bc57c62b46fec2"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","ee6ba9e12ad8ae3c6d790c13dcdf5a28"],["D:/Blog_my/blog/public/tags/登录注册/index.html","d0a2cf7f9512607ba23ee0b62e05b53d"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","9961b0b8502637d6c72889ecf61a5324"],["D:/Blog_my/blog/public/tags/笔记/index.html","e3d56e68a0d41fd4315548d5dbc80894"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","5209cdd70dc756818f45e2d5097d6801"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","110a283c142f447876f92e51549e7d5c"]];
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







