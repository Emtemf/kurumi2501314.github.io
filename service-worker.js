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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","55504fd95e98c44ca467eebeede10432"],["D:/Blog_my/blog/public/Gallery/comic/index.html","a0efdb558b90ad7e59435ff6b33fce95"],["D:/Blog_my/blog/public/Gallery/index.html","048c303cc1c53eeea242bdd8a07b024e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","94e3974f59a37f5e4bd95331853cad86"],["D:/Blog_my/blog/public/about/index.html","b9f05a438848d00b8e962e3d7e31fefb"],["D:/Blog_my/blog/public/archives/2020/07/index.html","5e8028f9cf1256f0a5523510431c6d05"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","f7c6a0b7c82bbea771c4983064b8d0dc"],["D:/Blog_my/blog/public/archives/2020/08/index.html","68c054de1b4b309a8a5b200b1a70f894"],["D:/Blog_my/blog/public/archives/2020/index.html","92daa2fa2de84482b4cbcbbc83795149"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","8ec8139f3405ed769a5d583551751570"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","1e663e3fe3cdcda5c0beb43e04f2831a"],["D:/Blog_my/blog/public/archives/index.html","68535275d7223fa5d6a277f58bffaff5"],["D:/Blog_my/blog/public/archives/page/2/index.html","a578cf5585e89513a02495150f2f102f"],["D:/Blog_my/blog/public/archives/page/3/index.html","d1cffeb6a77b4b7a3657dec08d1c88aa"],["D:/Blog_my/blog/public/article/1811f8b8.html","6437ed689d3e89bbe5b84c70834489d7"],["D:/Blog_my/blog/public/article/18e57658.html","d00e7183da30cbf1def9193b1455a22b"],["D:/Blog_my/blog/public/article/1e64d194.html","e6256c01f21bcb303280b9b5a255682d"],["D:/Blog_my/blog/public/article/21f50898.html","769cfff6fa01b733a8556ddf7f477439"],["D:/Blog_my/blog/public/article/234762cd.html","6c6180f9946dfa98e154305863772bbe"],["D:/Blog_my/blog/public/article/2b97b46c.html","95dd1b62a1b4144e2f7ec24d365e5858"],["D:/Blog_my/blog/public/article/358ad26.html","ea8ce6f6bee5c99b2c30ca983e89e550"],["D:/Blog_my/blog/public/article/541a8071.html","c03cd588904b45607890035f7b06db07"],["D:/Blog_my/blog/public/article/54412d2c.html","59902148623867a687793e34a05de15d"],["D:/Blog_my/blog/public/article/5c1827a.html","280d6cf5a4f7bd9adb4a2471330bff5a"],["D:/Blog_my/blog/public/article/5d6f1d17.html","bf2568cd515880b21aa98a1326423bf7"],["D:/Blog_my/blog/public/article/5dcc92c.html","d19e1497833cc248127e3e453b013a63"],["D:/Blog_my/blog/public/article/67da7762.html","e94ab31c1fb34fef85cad69028a8f7f7"],["D:/Blog_my/blog/public/article/683f20fa.html","b400fd575ae11d65b44b4b9dc1f9cbcc"],["D:/Blog_my/blog/public/article/7758c0ce.html","b014d8e79d1a8ca25d9e5cc9aa5b1d18"],["D:/Blog_my/blog/public/article/7a56c169.html","93541b2786fe06b8eb3af236006270ad"],["D:/Blog_my/blog/public/article/7d561955.html","b1a7c7bc9f31d2adac716155b837f4c8"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","4d8a1595414ed9acf6e047917a0a3425"],["D:/Blog_my/blog/public/article/c386a086.html","f13e19b554be26c339e7d4d9e58b4683"],["D:/Blog_my/blog/public/article/d080f90f.html","38c6f7562555540052175b7a2f6abe85"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","916b04a4ed68ee8a3ba73972ab4d8f78"],["D:/Blog_my/blog/public/article/e21e4e82.html","6a5b16d759b3137b171e2e7fedf11f15"],["D:/Blog_my/blog/public/article/e419ec53.html","0b6be40a6cd7ecef7dfade45d082619a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","61d90f38d3b416c25b29ef32f0806c6d"],["D:/Blog_my/blog/public/categories/Android/index.html","695e815e8b4b520dd3ea2af7f72b7453"],["D:/Blog_my/blog/public/categories/index.html","b328292dbfd95b24838ba48113b7b681"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","3786602cc7449b218e6e0042b99ebb9c"],["D:/Blog_my/blog/public/categories/后端云/index.html","6fa4fd71cf6c03e899be85bec7b3f89c"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","193308733cf9c1933058513c480d2380"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","49d4b246fd8dbc5c49fb2a3484937390"],["D:/Blog_my/blog/public/categories/百度云/index.html","75dd6b0defa233615363fd02f678da3e"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","140d8fe58a6f77b374d200a5dee30b4f"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","72b904d7f15f27d0db1d0e26d1959b64"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","426cf75c0d201655ee0f947fd7363eaa"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","f8134adcd41f74853889fbf5a12d7adb"],["D:/Blog_my/blog/public/music/index.html","da0003eda045fcd78ccd3b6374ea6ac1"],["D:/Blog_my/blog/public/page/2/index.html","59dca539c221339279648d945c19182e"],["D:/Blog_my/blog/public/page/3/index.html","b469a8b13561bd72c5c21a64e8b1235f"],["D:/Blog_my/blog/public/page/4/index.html","ac573828057209a359a6bc7793a26a15"],["D:/Blog_my/blog/public/tags/Android/index.html","df5bc730aca0c4b6b53779dcffb13c89"],["D:/Blog_my/blog/public/tags/bmob/index.html","9f1fd5d36076b6cb592f7048309362a7"],["D:/Blog_my/blog/public/tags/coding/index.html","a08999f890760f78b421a31950b70615"],["D:/Blog_my/blog/public/tags/github/index.html","28433db733df61854521cd136f747f9b"],["D:/Blog_my/blog/public/tags/hexo/index.html","7454d2a343e106bd0925722cdae1ede4"],["D:/Blog_my/blog/public/tags/index.html","3bc72b11a3d38c64f0bfeef5feb11a0e"],["D:/Blog_my/blog/public/tags/leetcode/index.html","545f4e4505f0310b92a7a6ed756a7f95"],["D:/Blog_my/blog/public/tags/情感分析/index.html","955659804fafcb4c7768f8f3f2f912a2"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","ae586fbdb4d4bb43ec137629e73a6b67"],["D:/Blog_my/blog/public/tags/登录注册/index.html","187bf1dd0b4718ea07c77be29506ed46"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","b1e3ba22ace9d9399ffd73c5cb079aa7"],["D:/Blog_my/blog/public/tags/笔记/index.html","43414b70127e56af59319d91775d5242"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","611a65548437a88d262269176dd782b3"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5f299383150873d4b6eec996fa697939"]];
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







