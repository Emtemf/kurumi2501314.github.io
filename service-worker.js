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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","faab50ac4a36937cca635c8403cecc7c"],["D:/Blog_my/blog/public/Gallery/comic/index.html","89b1dfe392f8933305772489063bfc13"],["D:/Blog_my/blog/public/Gallery/index.html","7d8975b2d4a8f7a702ba7f0fc0693d9c"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","fb0d960d31e90a26ccccb2f7d1c85423"],["D:/Blog_my/blog/public/about/index.html","79a6d699fe42c0cd91818e98b9e5d316"],["D:/Blog_my/blog/public/archives/2020/07/index.html","709090f7a99ed2844cfc280af3bb32f4"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","62f96b40a737b29b9b2880302ed0babe"],["D:/Blog_my/blog/public/archives/2020/08/index.html","72725305f2d078b8f518ef2f7a54e481"],["D:/Blog_my/blog/public/archives/2020/index.html","48a86b77dcf1acfbb1e2b61ce512791f"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","7190fe4f32b452ed3cb6c3c672ad93c6"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","0062a335184c67018ffec74a0ae4026a"],["D:/Blog_my/blog/public/archives/index.html","3f0000005f89b3a299beb0bfdea8708f"],["D:/Blog_my/blog/public/archives/page/2/index.html","a9bcdb500f76e36a55e3daff7d9f3dc0"],["D:/Blog_my/blog/public/archives/page/3/index.html","35debaada1428498f08f2f578bcd4af4"],["D:/Blog_my/blog/public/article/1811f8b8.html","b1e7fd17a1579fa4bf4d7eb362af6489"],["D:/Blog_my/blog/public/article/18e57658.html","7fb99f88ff5f7be0190e2cadc70b6d12"],["D:/Blog_my/blog/public/article/1e64d194.html","fdc0a425e4750d9bffeb26d755489592"],["D:/Blog_my/blog/public/article/21f50898.html","e21b2cf7b6282e3d570c8f8c13a85f9f"],["D:/Blog_my/blog/public/article/234762cd.html","425f5d7ef0a089dc850ab355031aceeb"],["D:/Blog_my/blog/public/article/2b97b46c.html","903b708cce977aa441b42f9d2c46921e"],["D:/Blog_my/blog/public/article/358ad26.html","eeb6156399b355a473e29e06995d41a2"],["D:/Blog_my/blog/public/article/541a8071.html","c03bdca89e897c3d528395fecbffe196"],["D:/Blog_my/blog/public/article/54412d2c.html","a775d8a693b68e5a545c872e0ac8455c"],["D:/Blog_my/blog/public/article/5c1827a.html","0feaa19098d2baeb2ee6b1f88f95cb32"],["D:/Blog_my/blog/public/article/5d6f1d17.html","c25b5f57e97eca71aa3e5f7c54b35b43"],["D:/Blog_my/blog/public/article/5dcc92c.html","a5c4488742cc3a61bc57b5f13581d77f"],["D:/Blog_my/blog/public/article/67da7762.html","4f9730f2745020abd9db5859646a5822"],["D:/Blog_my/blog/public/article/683f20fa.html","04599114d2d249b591c40e9b79a457ad"],["D:/Blog_my/blog/public/article/7758c0ce.html","49f9c293209a8c1b2821afb89dc5e974"],["D:/Blog_my/blog/public/article/7a56c169.html","7d2711eb9878e8e2791f786237fc0491"],["D:/Blog_my/blog/public/article/7d561955.html","93f44fb10dfd0e1c2f33b792c8d4cb76"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","1ec283399935ce4ab64dc88bda0af377"],["D:/Blog_my/blog/public/article/c386a086.html","2c53cddcb91f76e4c2238a1ad85a41f1"],["D:/Blog_my/blog/public/article/d080f90f.html","a08553d5db577b4866dbb374485cc442"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","b8f55f672b79b7a4842b0dab9d77e333"],["D:/Blog_my/blog/public/article/e21e4e82.html","f4040150c5ccb9752e374c8899d1e3f7"],["D:/Blog_my/blog/public/article/e419ec53.html","96edc7fb872efc50880111fe003f659e"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","ab5a481406a8b56c3bca143084b31309"],["D:/Blog_my/blog/public/categories/Android/index.html","189b78839ad0b72447ec191db8f9beb8"],["D:/Blog_my/blog/public/categories/index.html","ec4a51a94425bb4ebf26e3445e29dfc0"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","04ab83f696e655977709c50190b67f85"],["D:/Blog_my/blog/public/categories/后端云/index.html","d9558e066f2e8dfd88d36d4946a35c11"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7f406655eb99ba83075d60130a4cebb0"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","722b859ceca434b01e79a0b221393b73"],["D:/Blog_my/blog/public/categories/百度云/index.html","51aa802905289ebcca23e3363266ee77"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","f9a45b81418dd47d87d21e1aee4c2bdb"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","e534a09f58058f00b5249cf718b519e6"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","426cf75c0d201655ee0f947fd7363eaa"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","c937cb598b7dc591619096087ae68f0b"],["D:/Blog_my/blog/public/music/index.html","28f8e44473b5e732a33887b6d70be8bf"],["D:/Blog_my/blog/public/page/2/index.html","da81168ad1340123c1b8de40ce5c27c1"],["D:/Blog_my/blog/public/page/3/index.html","44e2ee85ee4ffc0a68a864f554cb2d66"],["D:/Blog_my/blog/public/page/4/index.html","ca20a4193b78ebf9930e3cac6c862ec6"],["D:/Blog_my/blog/public/tags/Android/index.html","ed66b2f91ed257697b156bfac646cdfa"],["D:/Blog_my/blog/public/tags/bmob/index.html","e447b1bbf7642bfe680a07d324183a9d"],["D:/Blog_my/blog/public/tags/coding/index.html","f4bf4a18cc74dc12006b8145d26aa8cf"],["D:/Blog_my/blog/public/tags/github/index.html","38c15a8fd03dc06d3335c8941650cb79"],["D:/Blog_my/blog/public/tags/hexo/index.html","41daaf3796e3fa859f144affd42ee0f8"],["D:/Blog_my/blog/public/tags/index.html","f30c8077cd67ddff39cef54e916ac8bd"],["D:/Blog_my/blog/public/tags/leetcode/index.html","a3ec26a734391c698a221a5c46922691"],["D:/Blog_my/blog/public/tags/情感分析/index.html","3aa96353112a11029a654f0a0de37262"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","52fa9ad92a119d850d2d5c35f8d91e23"],["D:/Blog_my/blog/public/tags/登录注册/index.html","44a0bfb414a030f5702c707591c08b3e"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","5700ef0f7d40ea6fbce77cbcfd0d7092"],["D:/Blog_my/blog/public/tags/笔记/index.html","17b42c0ca2cf6d7b1b4b6cba70221624"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","4072a87e2f83ee2663d751fc9fdd0cd0"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","6b641912afe8831a6cc786e96fc0e3d6"]];
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







