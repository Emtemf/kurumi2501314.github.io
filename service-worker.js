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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","74361884eb929b96fa75673b2be16f9b"],["D:/Blog_my/blog/public/Gallery/comic/index.html","86484eee41827542df8bd199c4f3730f"],["D:/Blog_my/blog/public/Gallery/index.html","4d73917a6a693186d2395372b2bb33be"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","17ef2295636bf0068c71694d9a0e6387"],["D:/Blog_my/blog/public/about/index.html","71e827ad543e40cf7d7d2a8601cfd954"],["D:/Blog_my/blog/public/archives/2020/07/index.html","2c51baf8cc0a2bf4d8ca309f81974dc6"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b3881987fbb7a718a4455bd69e93efde"],["D:/Blog_my/blog/public/archives/2020/08/index.html","69b8e2fc48992a0deaff45e1f25678f6"],["D:/Blog_my/blog/public/archives/2020/index.html","fc970c63733df16db4afc6bd4ce29ee7"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","3a0b7e8ce364a4c48e0d8fe60367e13b"],["D:/Blog_my/blog/public/archives/index.html","c14bccdcf1b05f11ff97709a91d993d4"],["D:/Blog_my/blog/public/archives/page/2/index.html","0e1f5cb12b483135212c8a3d324f03e9"],["D:/Blog_my/blog/public/article/18e57658.html","82f00d67d0d65aa0b508f442ed11c1ac"],["D:/Blog_my/blog/public/article/1e64d194.html","c875b7428639878f53ddaf8771e519d5"],["D:/Blog_my/blog/public/article/21f50898.html","ee737e121b20c30f5e078735e02911e6"],["D:/Blog_my/blog/public/article/234762cd.html","6ba95e2a82ea91172da0e1156906a168"],["D:/Blog_my/blog/public/article/2b97b46c.html","2f292bb351927fc33afd1b4d8e563946"],["D:/Blog_my/blog/public/article/358ad26.html","799d92e08623b3a3030437817ca52a32"],["D:/Blog_my/blog/public/article/541a8071.html","64af6e369b7c6e79e4476cb5f47230c6"],["D:/Blog_my/blog/public/article/5d6f1d17.html","a01c672f5dc8ffaa98f1765b971a5763"],["D:/Blog_my/blog/public/article/5dcc92c.html","82bed8885bcbcfad619ee774e21ca389"],["D:/Blog_my/blog/public/article/67da7762.html","7a4cfb21490c06997f796e97917a3513"],["D:/Blog_my/blog/public/article/683f20fa.html","773f94cd2a1f1303c33360b014585ce0"],["D:/Blog_my/blog/public/article/7758c0ce.html","d7c5bc3394a5f01818d550b06c1b9cc1"],["D:/Blog_my/blog/public/article/7a56c169.html","2e29678a95642d1819a58928ad61267c"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","5a1835f096b197d587efa5caabe3e9c8"],["D:/Blog_my/blog/public/article/c386a086.html","fe409b382fea251c34dadc8ec12c3fc3"],["D:/Blog_my/blog/public/article/e419ec53.html","63de4f6817c85d0e834a2d327ab4036d"],["D:/Blog_my/blog/public/categories/Android/index.html","0c4bca0ed02a7b18db2bd10311f7ead6"],["D:/Blog_my/blog/public/categories/index.html","30eafd778fe9d33c448587909e4f7cc8"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","17ca097722e9ea44409e7a5840953fa7"],["D:/Blog_my/blog/public/categories/后端云/index.html","f5cfa26518c022b23381ce49fb21ebe9"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","3c9a358d9739d894a44c9e018f2dd02e"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","a1b0360f57479d70cf6114059a8ab8fc"],["D:/Blog_my/blog/public/categories/百度云/index.html","22407e7a398555bee35dba64e9cc35d2"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","50033c0a64fbddaa9592d45b435988ba"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","2c94f7b587fd54ea91e4015fe9b5b201"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","32532a3739e8a3419584088f7a0150ef"],["D:/Blog_my/blog/public/music/index.html","2888c01938a05fb212337f7c0be47080"],["D:/Blog_my/blog/public/page/2/index.html","12eb01b4bc0f31ad8f811435d186ffb5"],["D:/Blog_my/blog/public/page/3/index.html","1b9760c178f6393bb2ec05ada76ca969"],["D:/Blog_my/blog/public/tags/Android/index.html","d4a1bec3cfe2ab1bf8ec2724d9827ef8"],["D:/Blog_my/blog/public/tags/bmob/index.html","212f16d0613b0bd94c0783e738963a9f"],["D:/Blog_my/blog/public/tags/coding/index.html","5a64e15064c053be188a50a29b246b52"],["D:/Blog_my/blog/public/tags/github/index.html","20aa0e09683a67abe640fd71972807c0"],["D:/Blog_my/blog/public/tags/hexo/index.html","cd8c654ff3584db73288634a28729e98"],["D:/Blog_my/blog/public/tags/index.html","8307ae0354295018a1f1f21b98634023"],["D:/Blog_my/blog/public/tags/leetcode/index.html","6a3d9f9fb7be606f341af6c3bd4253bd"],["D:/Blog_my/blog/public/tags/情感分析/index.html","ed2d7baf54d727a0e8b1e91e2fe877f7"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","9746a000135a975aafde1f2196ad4e1b"],["D:/Blog_my/blog/public/tags/登录注册/index.html","1c5e14377d0e1acdf2d27a52513ccc84"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","f2c18219638d5f0b36af3111b9172202"],["D:/Blog_my/blog/public/tags/笔记/index.html","63a79d61d13be70185a7d533343c75f4"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","bc7d21fab20170164137b9d315c3a8fc"]];
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







