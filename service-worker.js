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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","643625d28f14b161efb1ad35a2eb5b8b"],["D:/Blog_my/blog/public/Gallery/comic/index.html","2cc993788e4aeb219057cf7407ac59f9"],["D:/Blog_my/blog/public/Gallery/index.html","7ceba82be8115db64eeee17cfd8871c9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","fdd8b4c423e6f4c7600ec69ad9c952c0"],["D:/Blog_my/blog/public/about/index.html","30772f11e257dbc88ad769ef2e3b017e"],["D:/Blog_my/blog/public/archives/2020/07/index.html","db40d750e13334839af8be3c5be3ae1e"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","e579694a2d627e0c7ffa9f20b1aa97b0"],["D:/Blog_my/blog/public/archives/2020/08/index.html","8709e643d4c03efc5c83f28a41cf3e01"],["D:/Blog_my/blog/public/archives/2020/index.html","18126ba81aac01c47a1ca765171e6d51"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","db55f0c44f852b05029b2d9a96c6eedf"],["D:/Blog_my/blog/public/archives/index.html","f78e2e32ecbded8af38d72f6b5e2c486"],["D:/Blog_my/blog/public/archives/page/2/index.html","ecc037f682a90aa201942367e434668d"],["D:/Blog_my/blog/public/article/18e57658.html","8be7f057e74db0e43d10aa59746afa26"],["D:/Blog_my/blog/public/article/1e64d194.html","2644a8fe278936acda2f63ebdfceaa69"],["D:/Blog_my/blog/public/article/21f50898.html","8f3929546f36ccdf73efc828ce74c435"],["D:/Blog_my/blog/public/article/234762cd.html","d4e58f7c6d7a53b7ae5b22245d41bd20"],["D:/Blog_my/blog/public/article/2b97b46c.html","1abe283b48c8fa04ab6c345642c0c84c"],["D:/Blog_my/blog/public/article/358ad26.html","90514f1b25328ef8f0888523e270edfe"],["D:/Blog_my/blog/public/article/541a8071.html","e576153327d2062482ecfda39cef0e74"],["D:/Blog_my/blog/public/article/5d6f1d17.html","fcb9502eb37beb5193c97f4fcc30a9f2"],["D:/Blog_my/blog/public/article/5dcc92c.html","ff7d1590a949db3ad2e6f82ce93a6184"],["D:/Blog_my/blog/public/article/67da7762.html","8edf8c77023e5bf4706c2ef13708d77d"],["D:/Blog_my/blog/public/article/683f20fa.html","dcec4d5a31df7522ce9212886eecf079"],["D:/Blog_my/blog/public/article/7758c0ce.html","83366cfc2e28dbac0923575d823eefbf"],["D:/Blog_my/blog/public/article/7a56c169.html","4d1ef80e0c025cb8cbfe50e81a453f81"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","1baa1659930451da226d96a32f05dfd1"],["D:/Blog_my/blog/public/article/c386a086.html","1aee391cf9cdb96982d2bffe83031c13"],["D:/Blog_my/blog/public/article/e419ec53.html","698dbd3ea81552bbc92a2d90f1b55dd7"],["D:/Blog_my/blog/public/categories/Android/index.html","5e827e6c31800239b2252495568cee45"],["D:/Blog_my/blog/public/categories/index.html","1ae0a66c69745c23de0f9a28e0a3af84"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","035d6d1da47a321819787dacb35327a9"],["D:/Blog_my/blog/public/categories/后端云/index.html","9a5c68d93f77a3e71dfc2b1529d2ab0b"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","6f217d06252a11b64e09fe2fa757e581"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","954adcd1958d6ac5b66301a5607b43ec"],["D:/Blog_my/blog/public/categories/百度云/index.html","aecb8427bf9c59f9c845af165f7cf57f"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","e33392369b74103da4d90e4fd5658a9c"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","56ab6d06dec23042eef815ec41b92598"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","3974233d40d3b40af9938b9d499b9797"],["D:/Blog_my/blog/public/music/index.html","26e7f9bd340c2b08f66c39d92439ae26"],["D:/Blog_my/blog/public/page/2/index.html","87a5a4ec55c26d603d30966ebc381fd7"],["D:/Blog_my/blog/public/page/3/index.html","cf5f17fca1c5366a38f26d1914ba9195"],["D:/Blog_my/blog/public/tags/Android/index.html","497a60d2ffda1ba24bcf56b3d76dc335"],["D:/Blog_my/blog/public/tags/bmob/index.html","2662f2adc6572513cfefb75f754f452c"],["D:/Blog_my/blog/public/tags/coding/index.html","075788574f51228665a26ed09541234b"],["D:/Blog_my/blog/public/tags/github/index.html","4c77bbe356b887b02d8198f66409d9ee"],["D:/Blog_my/blog/public/tags/hexo/index.html","8df0607b85e5032bb096c06a034a57a4"],["D:/Blog_my/blog/public/tags/index.html","3462fb7778628ab62f36668dce772b12"],["D:/Blog_my/blog/public/tags/leetcode/index.html","78d112c8a969e9ac1d92ab0831d94751"],["D:/Blog_my/blog/public/tags/情感分析/index.html","712e097d4522615c3898fde3f879943b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","4ffdc4dd0299aaa7195d11c46c82528f"],["D:/Blog_my/blog/public/tags/登录注册/index.html","33c53af1b95166eda47d6988d3742bd2"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","b83ed54b5fcbecfd209d1c4fe68fdabb"],["D:/Blog_my/blog/public/tags/笔记/index.html","d7cc1b4c564347f0914a68ee0eeb37bf"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","14459ea1ee923f1b35291e1c65279c30"]];
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







