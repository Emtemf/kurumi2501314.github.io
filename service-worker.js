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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","ba0d80be40164e31b3b0ec43259a9e4d"],["D:/Blog_my/blog/public/Gallery/comic/index.html","132cb0bf32f976a0a7f4d3e45236c346"],["D:/Blog_my/blog/public/Gallery/index.html","f69f0b999d6cfe310f4eda67f97c3021"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","58b43a82ed81e1420775418c5c23a3a5"],["D:/Blog_my/blog/public/about/index.html","a22bf171d9f8682070d38bc52d4d5f8a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","3bdcf6eda6e10b6b866af29132c94d91"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c30f401831f48d9c6a28ed318cb3134b"],["D:/Blog_my/blog/public/archives/2020/08/index.html","305bd2eaa12803a3371048f6414c0c7d"],["D:/Blog_my/blog/public/archives/2020/index.html","7b1b500ff2df624880552522ec07df66"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","5761c8403b77dc5ff6bb47d4641d8865"],["D:/Blog_my/blog/public/archives/index.html","346535373b7f079fc41b846fc6e09e8b"],["D:/Blog_my/blog/public/archives/page/2/index.html","b78d09f35f4a2c20259dc2e6d0dac0ef"],["D:/Blog_my/blog/public/article/18e57658.html","2d7f41db76b8399d124b26e0dab2f2cb"],["D:/Blog_my/blog/public/article/1e64d194.html","2609472b722e0b886185e4052b5fea7a"],["D:/Blog_my/blog/public/article/21f50898.html","796df0aa3161b33b35769a35d9e5f0a7"],["D:/Blog_my/blog/public/article/234762cd.html","f08502e43a8237779f50209dd4c2c515"],["D:/Blog_my/blog/public/article/2b97b46c.html","b95255cc6b1ec3560cbdb7862445f5df"],["D:/Blog_my/blog/public/article/358ad26.html","bd73406e3cd250d0d80c097fcd278410"],["D:/Blog_my/blog/public/article/541a8071.html","5993837ac0ebc4d341fc5a2b95965be3"],["D:/Blog_my/blog/public/article/5c1827a.html","5561bd1965f271b471c17b54caa48365"],["D:/Blog_my/blog/public/article/5d6f1d17.html","66ea6d3a10279b3dd4e85230ad743ec1"],["D:/Blog_my/blog/public/article/5dcc92c.html","39ad41f5a6e7b825832aadd8ea6bc4d6"],["D:/Blog_my/blog/public/article/67da7762.html","18fdd6d955d69d5f9c44847d8ba998ca"],["D:/Blog_my/blog/public/article/683f20fa.html","e16fa375999857cef69380923d40c4cb"],["D:/Blog_my/blog/public/article/7758c0ce.html","0ab23a34badc1791b91d66036397957d"],["D:/Blog_my/blog/public/article/7a56c169.html","ac14596778f1aedf0cf22dcd7cf33d08"],["D:/Blog_my/blog/public/article/7d561955.html","b5f9d13bbbcd894b41ac3657a5c8bfe1"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","560640e5cd9ca8966d52bfae61617433"],["D:/Blog_my/blog/public/article/c386a086.html","48646731e4dd516488619e8213e50cc9"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","346cbce905e91db92efa0dc19b36082a"],["D:/Blog_my/blog/public/article/e419ec53.html","ad52552dbcaf73cdc0b099a8654f86aa"],["D:/Blog_my/blog/public/bangumis/index.html","acbea9f5e1a78547ebb1b684a3942925"],["D:/Blog_my/blog/public/categories/Android/index.html","cbfffff54a72ed1662b799787a2f4192"],["D:/Blog_my/blog/public/categories/index.html","dfdf0ee001c684e775f6d29dba8d8243"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","84fa6260959dcf0f67c3342cc5fe0132"],["D:/Blog_my/blog/public/categories/后端云/index.html","397b97d9d84706873055d700de160051"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","8cfcc255da359f4a554e5d086158ea8b"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","882981d99dcec8422405544cdb448563"],["D:/Blog_my/blog/public/categories/百度云/index.html","f88efb87f5059c45511d81890e0790f6"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","cc75ce6b1db76b960dd3366ef66373a7"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/gulpfile.js","4a06b158765456f61109acb318bc5411"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","fdb07073e8568664f58863ffe9747d0f"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","453320be73691c7818552cd911f235e8"],["D:/Blog_my/blog/public/music/index.html","9b2190b381c2b7497d622c1acd7371ee"],["D:/Blog_my/blog/public/page/2/index.html","ca386001d579c8de0e42da90621ffbbb"],["D:/Blog_my/blog/public/page/3/index.html","6d189161b579e917219cc45565314324"],["D:/Blog_my/blog/public/tags/Android/index.html","bac8742c1f4560741455c40a33ed7a0f"],["D:/Blog_my/blog/public/tags/bmob/index.html","3bb62a6df8765f502c5cc3735fdd0310"],["D:/Blog_my/blog/public/tags/coding/index.html","96ed815870207dcff7104171bd8b150b"],["D:/Blog_my/blog/public/tags/github/index.html","c2ada58dea2d37e5b30021248b71e313"],["D:/Blog_my/blog/public/tags/hexo/index.html","c64ed8089ad8cae7713cec13b5dc8cef"],["D:/Blog_my/blog/public/tags/index.html","618525cb751d672b79a9f65f87b478b1"],["D:/Blog_my/blog/public/tags/leetcode/index.html","ef4de3d7108928ff92c51a7a95a491cb"],["D:/Blog_my/blog/public/tags/情感分析/index.html","c959c74b10f6531172f87686ef9f618d"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0a6c299c8e80eaa812dad12e33cfd3c6"],["D:/Blog_my/blog/public/tags/登录注册/index.html","f87b5b20ad7700355c72a2442b0e16f9"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","99f4bb141c0d0d6b4c58c5a728db97ae"],["D:/Blog_my/blog/public/tags/笔记/index.html","7e35c78a5c2b08f8a83ca705fee65ff6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","8a087a04648b1645273f8d998f9cc5b5"]];
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







