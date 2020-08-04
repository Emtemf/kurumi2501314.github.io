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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","6b585abe5b4a1b80c3355d0472127d04"],["D:/Blog_my/blog/public/Gallery/comic/index.html","93fe082a4bd2cdfe205a2449c5ef17d4"],["D:/Blog_my/blog/public/Gallery/index.html","5d9460bf1e094d398eeab0d2ce1c6c02"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","0567f484c9445bdad69a7729f98ecc3e"],["D:/Blog_my/blog/public/about/index.html","286142e868edc1a828a1f77f4681ef29"],["D:/Blog_my/blog/public/archives/2020/07/index.html","de61c350b852764b0722a131639c5ef7"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c24aa9fa78f077d87758892d9a70806b"],["D:/Blog_my/blog/public/archives/2020/08/index.html","8783b69aa1aaac58617bdcd47f01ccc9"],["D:/Blog_my/blog/public/archives/2020/index.html","38e806d228897fee6dd4d70d8e12bb67"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","f65ce29bd60e3fe197337c9660b9ea5c"],["D:/Blog_my/blog/public/archives/index.html","5398585028cedb90d3944b28118decd0"],["D:/Blog_my/blog/public/archives/page/2/index.html","a2aa2229b2d26b553c08096da522fe93"],["D:/Blog_my/blog/public/article/18e57658.html","5431f05c90c5f64a888c6fcc1d40e927"],["D:/Blog_my/blog/public/article/1e64d194.html","70d40125d714bda27bac17ce986e5273"],["D:/Blog_my/blog/public/article/21f50898.html","a37d4f3145d803d92ac0762f5c9f3d57"],["D:/Blog_my/blog/public/article/234762cd.html","9a799ade561d1b36b996e12e9e09c14a"],["D:/Blog_my/blog/public/article/2b97b46c.html","508cee62989fcc6374ce89f395bccb4e"],["D:/Blog_my/blog/public/article/358ad26.html","d093839785470e1c4100a3b74030e32c"],["D:/Blog_my/blog/public/article/541a8071.html","035155321a29bf699048091eef26d2ac"],["D:/Blog_my/blog/public/article/5d6f1d17.html","f228b80aafdfa1f707112229ce65e9b8"],["D:/Blog_my/blog/public/article/5dcc92c.html","349bd806c699e408c25a9d3532940da5"],["D:/Blog_my/blog/public/article/67da7762.html","ad5a305a8165a4c4e7335c11b79a5e53"],["D:/Blog_my/blog/public/article/683f20fa.html","5dea70deb4ec1c7b19f00279c278eb01"],["D:/Blog_my/blog/public/article/7758c0ce.html","988925dafd14c7d2801c5c0b7002036e"],["D:/Blog_my/blog/public/article/7a56c169.html","4927a65f343bc86146ca9285c9c11bc8"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","5c9de74c82125804827567b80097fba7"],["D:/Blog_my/blog/public/article/c386a086.html","edc26b2e4e3b802a5633c0f5106e1b1a"],["D:/Blog_my/blog/public/article/e419ec53.html","cee5e17a1484256f829c146c2f416cb7"],["D:/Blog_my/blog/public/categories/Android/index.html","1ca21248840aff481325248cabe53f2e"],["D:/Blog_my/blog/public/categories/index.html","8d68948cda6d5b3e729d07f3dfa711a4"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","174b506c426a3d945d787e1f8778a69e"],["D:/Blog_my/blog/public/categories/后端云/index.html","eeb1ab8304585c20cae59a90448374df"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","575e23f83c5376a3518bc9af1c0acafa"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","18ec07d097d46b101ae38482371fc5bb"],["D:/Blog_my/blog/public/categories/百度云/index.html","2d12200b80744f4f9a828a8f11a59a51"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","5d1f3ad58a75eb346813fedbd876590b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","e457a62fdd0667ce17884c5b4c5ada26"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","dd1ab4b924acf009a194c9f10d8da4c7"],["D:/Blog_my/blog/public/music/index.html","982e31956eec490a904b3a1ba59e08f0"],["D:/Blog_my/blog/public/page/2/index.html","033cb51955c2d6ad0f4612e3f16f9ad2"],["D:/Blog_my/blog/public/page/3/index.html","0a0fb91b983ca5b86c8940068cf7b17b"],["D:/Blog_my/blog/public/tags/Android/index.html","badae82145a9766f6a92e1e63b785a90"],["D:/Blog_my/blog/public/tags/bmob/index.html","28519d21ea34a18f2af33670717fbed3"],["D:/Blog_my/blog/public/tags/coding/index.html","795fb7a5c6f6afd11b1c28c2605ef633"],["D:/Blog_my/blog/public/tags/github/index.html","aeb4e1bc88773db95b3ceab4d64381c3"],["D:/Blog_my/blog/public/tags/hexo/index.html","805e0586468c366d4b02d36e6b11b2e4"],["D:/Blog_my/blog/public/tags/index.html","0cd0a4da51d6c3583f0b0a4ca15ecd57"],["D:/Blog_my/blog/public/tags/leetcode/index.html","1153b827be544d0c808456cadc562ce5"],["D:/Blog_my/blog/public/tags/情感分析/index.html","175c3f167f684e8674b4a65ac8a7d980"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","fdd478b226d105af1d6de357b213c51d"],["D:/Blog_my/blog/public/tags/登录注册/index.html","d1d3f60103390b761054278be0fb37cb"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","02f36dddbfef2f791b49b3ca4d85676e"],["D:/Blog_my/blog/public/tags/笔记/index.html","a133e5709856604f8a78a1e3c5065748"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","02948c244ce48b15509c92a3bd4daf38"]];
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







