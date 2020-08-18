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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","f5536166283bf73bb9a70f5a87ab4009"],["D:/Blog_my/blog/public/Gallery/comic/index.html","0a84d3168771dd4e9f579afee5f684b0"],["D:/Blog_my/blog/public/Gallery/index.html","afe74aa3150951cfc46ffc7c70842b65"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","85e54caf99744f8270060eacab648444"],["D:/Blog_my/blog/public/about/index.html","61b4d7ea5977105521975934f8f5e87b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","05d1e2fa219f7601dfc021796d71e5f3"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","ec1caeeec32fd0f9ad4adc39df310068"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5f8c16687db90fb4fb6c83d5ae51b3c0"],["D:/Blog_my/blog/public/archives/2020/index.html","0645b39ed34a56eebd9dc347a3897d9c"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","b8019f8abc0c88e97f3f4d8921f0161a"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","03c64c8e9b0fb1a7c227e05fa05fb6ed"],["D:/Blog_my/blog/public/archives/index.html","09f453c129ff6379f123d51c8691cdb6"],["D:/Blog_my/blog/public/archives/page/2/index.html","e33310816093ec37848a0499ecc8a7ff"],["D:/Blog_my/blog/public/archives/page/3/index.html","c456153c16a6880c390451956cb15c7a"],["D:/Blog_my/blog/public/article/1811f8b8.html","dcf1e1c4967251607382f6a7ad2c8892"],["D:/Blog_my/blog/public/article/18e57658.html","6e845650f1076c2f89cfa3a674111a82"],["D:/Blog_my/blog/public/article/1e64d194.html","4316fc1884388c41f8f1a289b2575900"],["D:/Blog_my/blog/public/article/21f50898.html","563481311378c26fae46a43aa113ee7c"],["D:/Blog_my/blog/public/article/234762cd.html","c1e502cac8ace1a2fe608f5912d7cd4b"],["D:/Blog_my/blog/public/article/2b97b46c.html","b8a55b253dc7b7940867f785d8038623"],["D:/Blog_my/blog/public/article/358ad26.html","5648a43ff7d7c0d963539c165a1718bb"],["D:/Blog_my/blog/public/article/541a8071.html","2f468f1c446747fcb89a7d33fcfc158d"],["D:/Blog_my/blog/public/article/54412d2c.html","625f38a9e7cf1c31603634d9e285399e"],["D:/Blog_my/blog/public/article/5c1827a.html","b8181dd945794565eb509420771689ef"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a1a61a13201499055e3ae60b757b4740"],["D:/Blog_my/blog/public/article/5dcc92c.html","bb431d9026e5f8e380a4f529c241c17c"],["D:/Blog_my/blog/public/article/67da7762.html","273a31ff822a518f18cc915b23cbfba7"],["D:/Blog_my/blog/public/article/683f20fa.html","1f3914bbca8aefc3912346887d98f2ab"],["D:/Blog_my/blog/public/article/7758c0ce.html","81473533e031823ea6ccf4202187ea4a"],["D:/Blog_my/blog/public/article/7a56c169.html","e1cdfa44a647cfb7fd29fa18775d90c2"],["D:/Blog_my/blog/public/article/7d561955.html","ec5a0a805b029854d045ee2e70be20fb"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","68ceeb77e0c2af20da5320827194f553"],["D:/Blog_my/blog/public/article/c386a086.html","45a6c2060e37f6273f3df1cae59285c5"],["D:/Blog_my/blog/public/article/d080f90f.html","317bb7d5dfcb9cc5852d8ed848f3bacf"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","b5dd5a0e9f6f90764dc749a5a71e5d87"],["D:/Blog_my/blog/public/article/e21e4e82.html","7864f5f4a3ad8faaf5808764b99c8089"],["D:/Blog_my/blog/public/article/e419ec53.html","c8d746f68ae23fa2352da1a0de85417b"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","cb95a2ab75b86b0e228adc01662ee92e"],["D:/Blog_my/blog/public/categories/Android/index.html","69508452cbdba0b9ae332f80a045daf5"],["D:/Blog_my/blog/public/categories/index.html","df65b918b7af7811c348ac40c9e2ef7c"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","872a7ccdb2df0b2c77db46e54ee23224"],["D:/Blog_my/blog/public/categories/后端云/index.html","ae5d3facad08f0bf9d61918eb87da519"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","167439a427f216811c29cca73cda1987"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","e4277d2c48826d47bc836711b1e0d9ad"],["D:/Blog_my/blog/public/categories/百度云/index.html","32fe83091331f5db712aee43704b1832"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","924c41a7daabc99f939a3e888383b41d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","f77229bf01a3d90a035004941d4cd1d4"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","30432efb7fdbf6a82c0c64e41ee3555a"],["D:/Blog_my/blog/public/music/index.html","c874eb628d10aa26285358759070f592"],["D:/Blog_my/blog/public/page/2/index.html","9e07ecfd469c96f3d3bc26a33c7c4dad"],["D:/Blog_my/blog/public/page/3/index.html","d273540fe96cb1591878b03bbb547a16"],["D:/Blog_my/blog/public/page/4/index.html","210de1223a2eb70a86f17896d0a41fa1"],["D:/Blog_my/blog/public/tags/Android/index.html","566d151d8d3c5de50d8b784a11495f34"],["D:/Blog_my/blog/public/tags/bmob/index.html","f15850350b22438e9bcf76f53a9f8d14"],["D:/Blog_my/blog/public/tags/coding/index.html","ccc637a124bb73f863bb500e1fbe88c8"],["D:/Blog_my/blog/public/tags/github/index.html","2895bb0afb18ba89aeb91de6d41349ba"],["D:/Blog_my/blog/public/tags/hexo/index.html","c1ce37f3cc4b9605066ac297822d7f59"],["D:/Blog_my/blog/public/tags/index.html","4911fde753227dd8de328e85aa4b5153"],["D:/Blog_my/blog/public/tags/leetcode/index.html","5bcd1883d013a406d63077cc4092f9d8"],["D:/Blog_my/blog/public/tags/情感分析/index.html","dae71e206070cd7db157dd30b390ec13"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","2be9672fc931f030da147a1c0649427c"],["D:/Blog_my/blog/public/tags/登录注册/index.html","863e6537b462d66bdbd102848f7b6a52"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","45b674d9d619f575b06b542af4a4b1d9"],["D:/Blog_my/blog/public/tags/笔记/index.html","32e4d23664cdd0988bf27bc73be04226"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","50985f64629ae3e3778dd7db9d957ebb"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","bdcf44c55d6054cb1fd48ca626f05894"]];
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







