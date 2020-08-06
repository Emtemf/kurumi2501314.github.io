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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","87279e95ff1cc6319e885487b11c54b2"],["D:/Blog_my/blog/public/Gallery/comic/index.html","1fa5cb69b0e10f3751be3b90b2809542"],["D:/Blog_my/blog/public/Gallery/index.html","bbea6512216508f99bd7a8da689c8d8b"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1ebf02a5a9af267452911e77723f61fb"],["D:/Blog_my/blog/public/about/index.html","6a33674b97a7016288787acc5893f442"],["D:/Blog_my/blog/public/archives/2020/07/index.html","09603635965ea476d1eaf3a3e9274d08"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","546e6c6ce7feaa80e528a3effbc99162"],["D:/Blog_my/blog/public/archives/2020/08/index.html","6bc5dd7432bdb2cb4e6cb05c9a1673a1"],["D:/Blog_my/blog/public/archives/2020/index.html","53ef1d28b69501d37e00fb071e7b09b5"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ec225de0128fdc2e68b0c390fe0d3b4f"],["D:/Blog_my/blog/public/archives/index.html","1c27c4adc7e03cb55808a5f2d3dcee80"],["D:/Blog_my/blog/public/archives/page/2/index.html","af98538fb5a06bb1c93883b09f1cd553"],["D:/Blog_my/blog/public/article/18e57658.html","1fc7f1f429826bbc6171cf6f7f0c6f1d"],["D:/Blog_my/blog/public/article/1e64d194.html","6236389ab2c993c9b0173de801cf7d6c"],["D:/Blog_my/blog/public/article/21f50898.html","970799cceac97e5feae9e3e5132f39a6"],["D:/Blog_my/blog/public/article/234762cd.html","c075022737ee6a7ea466b2820b69da91"],["D:/Blog_my/blog/public/article/2b97b46c.html","37ee2c14508a8727dd83f35636139199"],["D:/Blog_my/blog/public/article/358ad26.html","265c05dd70793682922d3f025780139a"],["D:/Blog_my/blog/public/article/541a8071.html","c9bd6935d9a18fa27a43da7ecd06ebe5"],["D:/Blog_my/blog/public/article/5c1827a.html","b3e5b0f4a81b87c1a19fbf5ec9588cae"],["D:/Blog_my/blog/public/article/5d6f1d17.html","2bb3dfe99dd7269ba21f2d4edb3d0412"],["D:/Blog_my/blog/public/article/5dcc92c.html","b0c2b088562fe2ea064c9aae62449888"],["D:/Blog_my/blog/public/article/67da7762.html","df22d137f76d522202b85c2e51dfae5a"],["D:/Blog_my/blog/public/article/683f20fa.html","971536d6493ff754ebe074fc7739ac64"],["D:/Blog_my/blog/public/article/7758c0ce.html","21211b98810255e3ad2a193237d5e4f4"],["D:/Blog_my/blog/public/article/7a56c169.html","8e35eb6f2a4fbdb120237c65b6ee9878"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","def6022806ed201a9bea87ed44c09e83"],["D:/Blog_my/blog/public/article/c386a086.html","a0b79fed3e6c7482f9e04c769c2a14af"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","eb3018004a1023562016a83f49c2a33a"],["D:/Blog_my/blog/public/article/e419ec53.html","534baee23c870da37af17a087bd578eb"],["D:/Blog_my/blog/public/categories/Android/index.html","02153d369f790d4a1ca2f8aa8cc0d95e"],["D:/Blog_my/blog/public/categories/index.html","93daeb5428f283791736b52455b5a440"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","5725dba1b550141c3fb0bd5e732efaa4"],["D:/Blog_my/blog/public/categories/后端云/index.html","7fb6e95a6262994262a5b7fa185ddd0d"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","24bfd761f1244eb30a7555fb43a77b45"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","011c61798725c54b20870c8ec1a74f39"],["D:/Blog_my/blog/public/categories/百度云/index.html","473b9ca631ec8f1f8bd495b8a026e9f2"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","f7f46298b9b7a652d583eab473a40a0c"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","47d1b7a992a59766c14f1f37de144a92"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","afc98560207367f943ba7d55d9928c8e"],["D:/Blog_my/blog/public/music/index.html","89e8cc4fa76116f768e73108c5e54f8f"],["D:/Blog_my/blog/public/page/2/index.html","c2ec1738ea3e6c7182eb9567a33f3542"],["D:/Blog_my/blog/public/page/3/index.html","81ebb7c4c89a58e561e84ab715d6ca85"],["D:/Blog_my/blog/public/tags/Android/index.html","337bf47d7b7d51bf0f5b30134bec5a7e"],["D:/Blog_my/blog/public/tags/bmob/index.html","f60491258d1a002de49948df1d22333e"],["D:/Blog_my/blog/public/tags/coding/index.html","2c8826cece86bf785aa2d76191812c52"],["D:/Blog_my/blog/public/tags/github/index.html","21a775fcf591f14332e5451145489177"],["D:/Blog_my/blog/public/tags/hexo/index.html","533d61e35166a250c73278aa0295c5c3"],["D:/Blog_my/blog/public/tags/index.html","f23fd5f8dad5ea96398a6815953c1acc"],["D:/Blog_my/blog/public/tags/leetcode/index.html","c9e8dde8a4ce6f63437a5d319435fc4d"],["D:/Blog_my/blog/public/tags/情感分析/index.html","445ebb886e8b32e93ac9f5e579925f51"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","36fc8234d9fdec060579441ab00382b1"],["D:/Blog_my/blog/public/tags/登录注册/index.html","ea92c14852701e2ec715e6ea816391ad"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","03e2bd40a28de86724fe47a2b6eddb5f"],["D:/Blog_my/blog/public/tags/笔记/index.html","be7caf6879bd357b007466ad9f003105"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","35b2efd5e6f57807a83731aa2cbc306a"]];
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







