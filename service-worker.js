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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","dde5d2be304c25cdeffedcd20549080a"],["D:/Blog_my/blog/public/Gallery/comic/index.html","1989182afa32caa4a6a3100c7781becf"],["D:/Blog_my/blog/public/Gallery/index.html","987fc62c7d35a53c9c5538416b1818ad"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","86e190a5f4c6d8a36d070bba5812e182"],["D:/Blog_my/blog/public/about/index.html","9e8cc206b71e774c1aed11a11ad9acd0"],["D:/Blog_my/blog/public/archives/2020/07/index.html","44555503293c5a52bae9d219b5246d96"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","c4c3485c6749755f437d9940f790e80f"],["D:/Blog_my/blog/public/archives/2020/08/index.html","470552f54cfa6f4515cff2a59b815f8d"],["D:/Blog_my/blog/public/archives/2020/index.html","001517f20dee176b245eb0b45f0958c6"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","c707599ce1cb49f195aacdf895c86dd8"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","a441f7ef1c2826a7203248a192b67472"],["D:/Blog_my/blog/public/archives/index.html","dbe1b43844e2971305ae97b6065e7b93"],["D:/Blog_my/blog/public/archives/page/2/index.html","99a943da600b9da666ce4d1421a05872"],["D:/Blog_my/blog/public/archives/page/3/index.html","44fb2eb84ef68df4bee498859e30bd68"],["D:/Blog_my/blog/public/article/1811f8b8.html","b27d34b22681f74d2e31451ccb0ed1da"],["D:/Blog_my/blog/public/article/18e57658.html","905fae8a77c66f05b7742b348c3a65a4"],["D:/Blog_my/blog/public/article/1e64d194.html","ea914e5fa7078e1847bd95b99b06e940"],["D:/Blog_my/blog/public/article/21f50898.html","d662faae4dbe47ca1449543822cef69e"],["D:/Blog_my/blog/public/article/234762cd.html","7b00459adb57706dba4240ea939574d0"],["D:/Blog_my/blog/public/article/2b97b46c.html","b9b418a2dd356a0239c34e55903c4a5e"],["D:/Blog_my/blog/public/article/358ad26.html","1ca48296563794dd2a8253d7e9138cde"],["D:/Blog_my/blog/public/article/541a8071.html","5ec800b001b1970b3fb9db011a184f76"],["D:/Blog_my/blog/public/article/54412d2c.html","b1aea6d6ef466034148942876d6ff743"],["D:/Blog_my/blog/public/article/5c1827a.html","baf2661dada938a57f179f6717772380"],["D:/Blog_my/blog/public/article/5d6f1d17.html","5a2b74a564c5583b5cc6502861032c8f"],["D:/Blog_my/blog/public/article/5dcc92c.html","f97ebd56eca2584aba659d7d6db3f1d8"],["D:/Blog_my/blog/public/article/67da7762.html","0bbb3faf5b525d94c9953e44d8cc7de8"],["D:/Blog_my/blog/public/article/683f20fa.html","8949cd4fe1e2b07deff46c4a9ef44ede"],["D:/Blog_my/blog/public/article/7758c0ce.html","aee2ab7347a510d3d9288c95e014874b"],["D:/Blog_my/blog/public/article/7a56c169.html","68a527c2a9fba3e1724f350eec24c971"],["D:/Blog_my/blog/public/article/7d561955.html","973af508c1a03c8ae2a46f10e2606c3d"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","194a4bb6ea22d70d44298ba23a469b27"],["D:/Blog_my/blog/public/article/c386a086.html","4bb25ece8ca47279e77e21f52586ed53"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","4b2ad2bbb2eecb0ead80c642a901a3b7"],["D:/Blog_my/blog/public/article/e419ec53.html","9533431568c3ae39509c91798b0bb44c"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","eda8533247ae56a90a8f9c9ed0c31702"],["D:/Blog_my/blog/public/categories/Android/index.html","5f814001dd95b4cb749c1a3e3c742683"],["D:/Blog_my/blog/public/categories/index.html","2acdce03195aa820f1f62590cceb7461"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","3d655d3069701a11f86868f69eba0510"],["D:/Blog_my/blog/public/categories/后端云/index.html","a1b883e5f94b9e5e3739602451c0a4f4"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","d550140d245f28746e04355940c5b35f"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","944ff41ce0a5fda74c75cb9aba922b28"],["D:/Blog_my/blog/public/categories/百度云/index.html","d9a30a6c1548373e395fdc18a60384dd"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","f92c34f66f7f03487d264eff0dae3d65"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","9bd463b7241815e5260774a785794d3c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","1715648ecac11b2c61fa7d272be3d49d"],["D:/Blog_my/blog/public/music/index.html","e017d1fac17fd27b51949796ed2710ec"],["D:/Blog_my/blog/public/page/2/index.html","d31c038995bd4bc12db61de5b64c19c6"],["D:/Blog_my/blog/public/page/3/index.html","0feac36113e71a63d7db4d81834ca314"],["D:/Blog_my/blog/public/tags/Android/index.html","2479d2d82dbaf5555797be0147bc8286"],["D:/Blog_my/blog/public/tags/bmob/index.html","c355d1aef8b0943deb04269e2a539e38"],["D:/Blog_my/blog/public/tags/coding/index.html","ffd26d04046f43e202aa1e8671bd3ad5"],["D:/Blog_my/blog/public/tags/github/index.html","2785845bbb9824e615aa4e48ccdefcb2"],["D:/Blog_my/blog/public/tags/hexo/index.html","4e4f477d8450d444b13a551ba071abe8"],["D:/Blog_my/blog/public/tags/index.html","ba498b1278a1d536a875c5478cee4f34"],["D:/Blog_my/blog/public/tags/leetcode/index.html","7951e35a2b19637f56aafda0f171f552"],["D:/Blog_my/blog/public/tags/情感分析/index.html","7fbef187c4eebc425c0262fc76f9451d"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","17aecf9e5e21cb5a2a4c99405d5d7e71"],["D:/Blog_my/blog/public/tags/登录注册/index.html","ca6a66afe6c12ceb71eca2b8f27e0b2e"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","15e1d723535932457814783951e230ec"],["D:/Blog_my/blog/public/tags/笔记/index.html","5f75cd22493fe037e46369ba8182d03b"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","7cadae5dd1119e542bc7ceee3dc6f7bd"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","03d92dd92f2eee7010cbe1e0f99d086c"]];
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







