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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","8e2e0d2b3bafd632787673bf22374209"],["D:/Blog_my/blog/public/Gallery/comic/index.html","de56e3be3ebe18a9cd4bb196829fc730"],["D:/Blog_my/blog/public/Gallery/index.html","b63124e48fd1fef10eb381137c7aaee0"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","87d9e854d6167e16b0dd804237423679"],["D:/Blog_my/blog/public/about/index.html","7b85a5c0772cf457b2efd6546d83afcb"],["D:/Blog_my/blog/public/archives/2020/07/index.html","b108c416ea5ca647f79352594fadb4d0"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","71ee927dbb44c1927e17da4165a181bc"],["D:/Blog_my/blog/public/archives/2020/08/index.html","2ed5cd71796214fc04efafdfa57c92f9"],["D:/Blog_my/blog/public/archives/2020/index.html","75972c50e496c563d4be0232c2bb5267"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","b963e97a7f1c0780f5f50dae4b374168"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","6e750971f02faf6a150af6cb96525803"],["D:/Blog_my/blog/public/archives/index.html","d6a8b66a16a9bce2d652247e8a52c7ac"],["D:/Blog_my/blog/public/archives/page/2/index.html","37c6a3257ea7edd8b4925b3b26df750f"],["D:/Blog_my/blog/public/archives/page/3/index.html","0cab009be3e9131de20eed216ba87c08"],["D:/Blog_my/blog/public/article/1811f8b8.html","caee8df6abec4b692711e1369f08809f"],["D:/Blog_my/blog/public/article/18e57658.html","0cf1b817547bd5473854c7757fcc589a"],["D:/Blog_my/blog/public/article/1e64d194.html","2abb9077006bcb9325bd898d9c1db6b7"],["D:/Blog_my/blog/public/article/21f50898.html","3c0d391fef8bbb2c7ffc44743f06690e"],["D:/Blog_my/blog/public/article/234762cd.html","1766e84af611caaae1d39cfb4dfcf8a9"],["D:/Blog_my/blog/public/article/2b97b46c.html","0f4ddd791c2bbf46912caf1e7fb67095"],["D:/Blog_my/blog/public/article/358ad26.html","ef76731234378ac277efca90a320ba37"],["D:/Blog_my/blog/public/article/541a8071.html","5a8a1a4a49d1735d84e0a45cb13a891f"],["D:/Blog_my/blog/public/article/54412d2c.html","d1d10878c55301879268bcf1b5a27eb3"],["D:/Blog_my/blog/public/article/5c1827a.html","f74d2dd0f3b06fbef667cdc8b4794436"],["D:/Blog_my/blog/public/article/5d6f1d17.html","4a2b539192dca5ae2624e0120730c948"],["D:/Blog_my/blog/public/article/5dcc92c.html","42c7fb1a14dc762b68acf3399c77f133"],["D:/Blog_my/blog/public/article/67da7762.html","6d23f3ed45caeab711788b24a1ccd4a8"],["D:/Blog_my/blog/public/article/683f20fa.html","e787213f84d66b5266b0274e56ddc725"],["D:/Blog_my/blog/public/article/7758c0ce.html","825a2c0d7a432c2d1ccb64ecb7dcaffe"],["D:/Blog_my/blog/public/article/7a56c169.html","672d31a18bec655ddb88ea05310c14cc"],["D:/Blog_my/blog/public/article/7d561955.html","10e42e67993a5ba6f41ae6b4ea2f856c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","733d7582d7048667e9806a521a3ceb46"],["D:/Blog_my/blog/public/article/c386a086.html","0f0e210ac7bc042eb8b266eef574ebe7"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","80386714e99cc8a0a06376a3384f5b3c"],["D:/Blog_my/blog/public/article/e419ec53.html","ee44a3b556a48b8cdca36e86160b132c"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","bd8ad628e7354f0f6b56fc361cf9d7e1"],["D:/Blog_my/blog/public/categories/Android/index.html","d24beda81287d0a5dc3150eadfa19edc"],["D:/Blog_my/blog/public/categories/index.html","d27295383a045f6d9402751cbfb3b73b"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","b4c64bf347d1b5441b228a5b5b00ea7e"],["D:/Blog_my/blog/public/categories/后端云/index.html","c7fd06e9df18af37508ed75ee296f7c9"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7020ba18fea0bf249f3fff55934bd94b"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","4d59c8fe08d2982a8ad14576d6003afc"],["D:/Blog_my/blog/public/categories/百度云/index.html","c7931c2493f387ab8ce190d3630fb22a"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","e2f76d8e42fd264415bed52623c0e6e5"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","50b1234e10c330cf51513f05f1496572"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","84c71765fe48566aa7fbf53cba825948"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","61824f6e30420a6193b3c4efae6dd499"],["D:/Blog_my/blog/public/music/index.html","c933ab6e9a3cb46cfc69026c5ab53d62"],["D:/Blog_my/blog/public/page/2/index.html","fcae9afc89ea3b99fbfaaeecb2e9bec3"],["D:/Blog_my/blog/public/page/3/index.html","188ab6a29ba468f7cb10581a53312672"],["D:/Blog_my/blog/public/tags/Android/index.html","1ded193254e266a1b619f30a49d2952c"],["D:/Blog_my/blog/public/tags/bmob/index.html","4388f6adb123795a18355dd533f2f06e"],["D:/Blog_my/blog/public/tags/coding/index.html","971ddd080ce09c73d317419bf031f719"],["D:/Blog_my/blog/public/tags/github/index.html","2aacbbc40c112f812eb5fc37e320e7b3"],["D:/Blog_my/blog/public/tags/hexo/index.html","1864668778661218d4caebd94857c0e4"],["D:/Blog_my/blog/public/tags/index.html","586b448f283cb07b92badc35ce63c4a0"],["D:/Blog_my/blog/public/tags/leetcode/index.html","0d5f5c89f38fe56b407a728db40fd5f5"],["D:/Blog_my/blog/public/tags/情感分析/index.html","59b98e9d7fdbda65f3e6c87970b4affb"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","2b1c9883debd14d442d77838d13d2162"],["D:/Blog_my/blog/public/tags/登录注册/index.html","a61dc12747c8f566827a832b579718d5"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","bab2ce28f842b92c85315bbdf5ea2cce"],["D:/Blog_my/blog/public/tags/笔记/index.html","8a7ddef15d13a23357d2ed1fe97703e4"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","44d196f6fef3e80975dd603a7b073119"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c6d9ae024bde90a084475d43ee2b7c33"]];
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







