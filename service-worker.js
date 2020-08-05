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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","43220e67154d6de65ed2baf35d146d05"],["D:/Blog_my/blog/public/Gallery/comic/index.html","5054369309fdf6d7d4d66a8e59f58ed1"],["D:/Blog_my/blog/public/Gallery/index.html","217301d23d8e3f1ed03f7d0e40c349eb"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","671372fad2f0d3fc0e5774a7df7c8e39"],["D:/Blog_my/blog/public/about/index.html","3a82b23162f5a2a91f0082653938524f"],["D:/Blog_my/blog/public/archives/2020/07/index.html","046a4625d53fae695864e2628babfa80"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","e949ba91c3370c834f12cb088eb064e9"],["D:/Blog_my/blog/public/archives/2020/08/index.html","383394d06ff126fa945861066a80ef15"],["D:/Blog_my/blog/public/archives/2020/index.html","2f0c9746b35c0dccde7dd621eae8420b"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","1813ad8175423dbcc7f1ca103f9b4d28"],["D:/Blog_my/blog/public/archives/index.html","614039a1d1cce2d9ace2463d1d1d9ecb"],["D:/Blog_my/blog/public/archives/page/2/index.html","a0dd57625522228b0916344638397a74"],["D:/Blog_my/blog/public/article/18e57658.html","dd74e4b8fb4ac23def1fca70fb5a99db"],["D:/Blog_my/blog/public/article/1e64d194.html","ecdbd3d9da2d249e15e7b24bf8df7b94"],["D:/Blog_my/blog/public/article/21f50898.html","32273bcb3aabde52e23bc6399fcd7c10"],["D:/Blog_my/blog/public/article/234762cd.html","da933bb26f35eddd2a650330dd97e3ea"],["D:/Blog_my/blog/public/article/2b97b46c.html","1f558bca16bd381305ce9e08a5005580"],["D:/Blog_my/blog/public/article/358ad26.html","bcc2f90cccece861bf191fed8989180b"],["D:/Blog_my/blog/public/article/541a8071.html","de5d6995140fdffac57991fb9e1ba788"],["D:/Blog_my/blog/public/article/5d6f1d17.html","aaa09dc23b79c93558d51f3ed9463bcb"],["D:/Blog_my/blog/public/article/5dcc92c.html","130162ffb7b2680e317ac1b0128265d4"],["D:/Blog_my/blog/public/article/67da7762.html","b38fe90f4e95b791af0fd9b31a6b1e3b"],["D:/Blog_my/blog/public/article/683f20fa.html","b9deb26c24449c31766e4cf8f404afb0"],["D:/Blog_my/blog/public/article/7758c0ce.html","ec24685f017d109a425ff3c9c915dc16"],["D:/Blog_my/blog/public/article/7a56c169.html","05accd2b8b4b0899a416e04f0f2a580d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","512c7e1ca083870b72ce0df25d001e6f"],["D:/Blog_my/blog/public/article/c386a086.html","0d81feebb78e1367941ac5f083459741"],["D:/Blog_my/blog/public/article/e419ec53.html","f1ac19e528d922985236db6a811ad5e4"],["D:/Blog_my/blog/public/categories/Android/index.html","446ab29608c5f3535bbc1f1d066a9c4b"],["D:/Blog_my/blog/public/categories/index.html","03b3fc3a1d75c8ac769ce2dfd6d74d97"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","a29b520bfb6b1e4371572a9436d6ec8c"],["D:/Blog_my/blog/public/categories/后端云/index.html","4bef86ac115dd2d4c62aa679edf49b65"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","3fbe2ea42dc8cb93a79a2eb1b3d35114"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","c67be1a6ef404364a1a282e9110bdd05"],["D:/Blog_my/blog/public/categories/百度云/index.html","da3cd1ffb94db60c8d74b3bbad5e76ef"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","1556e6ff8827e4693e2a882f5765b03d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","502fc0eb5011b0740180c6cf64e5a85c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","b3810a7f84f9ee33be67903738302e76"],["D:/Blog_my/blog/public/music/index.html","11da3910a2eb8bc9c9dc9d4eeef93cf8"],["D:/Blog_my/blog/public/page/2/index.html","eacd14aa2d194c7378a3a40692a52a97"],["D:/Blog_my/blog/public/page/3/index.html","3c87553ed67fc72fd4507ed761a59080"],["D:/Blog_my/blog/public/tags/Android/index.html","6829ac13a557e005d020a44b35a24ef5"],["D:/Blog_my/blog/public/tags/bmob/index.html","95c459be73ab67db911b8ed8cf96ba85"],["D:/Blog_my/blog/public/tags/coding/index.html","fc1b0af83ad4f1e99bc55d0970ce49d7"],["D:/Blog_my/blog/public/tags/github/index.html","c2c8c97d35b8093a064136eae2921110"],["D:/Blog_my/blog/public/tags/hexo/index.html","85b80fd84ae21625fd01ddc7998ffabc"],["D:/Blog_my/blog/public/tags/index.html","1882cb5a38ae40c6ee5a0856aeffc67f"],["D:/Blog_my/blog/public/tags/leetcode/index.html","ac4efee9a87a15a1bee4990adf9b35c4"],["D:/Blog_my/blog/public/tags/情感分析/index.html","32c1ee4d7460095bc9b158a9c06ba8fb"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","57c9b3321523e28b01f25145903b5a17"],["D:/Blog_my/blog/public/tags/登录注册/index.html","527379ba1d34ef0dbb42d30c9f0a469a"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","32775f2f24c4d8eab309cae964d9c9b2"],["D:/Blog_my/blog/public/tags/笔记/index.html","d83cf869279962a58c9343b0bee14ba9"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","db940800df35b982030d37792550d6f5"]];
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







