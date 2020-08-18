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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","2f4d606bef0b952b373ac323226d016d"],["D:/Blog_my/blog/public/Gallery/comic/index.html","403332ee4750731da9e8a116e26e694f"],["D:/Blog_my/blog/public/Gallery/index.html","052bce44698dd70d35278d3f7e22688f"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b563304498d5a099f5155884b6fae3d6"],["D:/Blog_my/blog/public/about/index.html","d3214b3c1d9487074d0e3be14ba59a17"],["D:/Blog_my/blog/public/archives/2020/07/index.html","d75b6bc48ea78b18ff39804636feec02"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","4553be327830a6d7b2f5285696be2c7a"],["D:/Blog_my/blog/public/archives/2020/08/index.html","6b360d6c17b7836a494d6097294e5b61"],["D:/Blog_my/blog/public/archives/2020/index.html","9d563287e2fd7728ed39f12981c793d2"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","db5b4bd027753fff0ce530836e4f2e70"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","cfd06907a0da5525b780f0d121c439df"],["D:/Blog_my/blog/public/archives/index.html","29303c4b613b579b7c581e3a1932809b"],["D:/Blog_my/blog/public/archives/page/2/index.html","922e6c9076bd9863888e9f0c540471d4"],["D:/Blog_my/blog/public/archives/page/3/index.html","853ceeda0fb72f77a36d79a4bcea867c"],["D:/Blog_my/blog/public/article/1811f8b8.html","ccadb02a0db8e3d144b6e608f809eebf"],["D:/Blog_my/blog/public/article/18e57658.html","e6522afbfddbf65eee968ae2326785f8"],["D:/Blog_my/blog/public/article/1e64d194.html","1ffa6941539555c26388f3ee0f6181fb"],["D:/Blog_my/blog/public/article/21f50898.html","e03acb689c8e825f3e5191e4d2864a64"],["D:/Blog_my/blog/public/article/234762cd.html","6096e88379ce089b031cf9e6933cd910"],["D:/Blog_my/blog/public/article/2b97b46c.html","5c009ff98263c9bd56529834f3c13f32"],["D:/Blog_my/blog/public/article/358ad26.html","bd7d0a8c3b4f0de4aa83eb0bd7e7827f"],["D:/Blog_my/blog/public/article/541a8071.html","c7b743743f4ebeef129d2087ce285cf5"],["D:/Blog_my/blog/public/article/54412d2c.html","4ae0909a91168ea2709dcb8af5ec817e"],["D:/Blog_my/blog/public/article/5c1827a.html","54c549845463dee242210eefb2ed71f3"],["D:/Blog_my/blog/public/article/5d6f1d17.html","cbfb6146307045cb9fd80324d97c8b69"],["D:/Blog_my/blog/public/article/5dcc92c.html","dc607fa85359d736e551802434ace7ff"],["D:/Blog_my/blog/public/article/67da7762.html","5952b17e19cc84b663d3d10494be5ac9"],["D:/Blog_my/blog/public/article/683f20fa.html","61b03d94365eab8c8b7076998425687b"],["D:/Blog_my/blog/public/article/7758c0ce.html","469fa3609e343d012c3f64eb95f9881e"],["D:/Blog_my/blog/public/article/7a56c169.html","3a943f6c9652fbf30407716f6e1d3079"],["D:/Blog_my/blog/public/article/7d561955.html","3a4e5baecfb3215f38ffce07ddfa98aa"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","de72de1585737fd6c8ad5b19c9affd1e"],["D:/Blog_my/blog/public/article/c386a086.html","75b4d52d33a4249e28c4684aec84e7a7"],["D:/Blog_my/blog/public/article/d080f90f.html","eddc025898f8f4059e290efdd21f5d7b"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","1a9d4ed0eb825dcd62cfe5195d731ab2"],["D:/Blog_my/blog/public/article/e21e4e82.html","89e06366fa8fa4c5eebac2bec94d00d3"],["D:/Blog_my/blog/public/article/e419ec53.html","e051913711ed33916639b28e47a5c7bf"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","021d471b38d4637348248e76c584ddc9"],["D:/Blog_my/blog/public/categories/Android/index.html","745312e2cb87acfe1bef51e6af338a45"],["D:/Blog_my/blog/public/categories/index.html","cc7939a268484bd2bf8fb23104f04921"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","2d1001b62a769f294f3a9323aad4ef22"],["D:/Blog_my/blog/public/categories/后端云/index.html","ac4d6089137357094ef5c64d76c4e0d2"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","e52f2cdcd36bb7058b1ee80fd9be256e"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","975b2e95783e2addd30c18d73c8fcf7e"],["D:/Blog_my/blog/public/categories/百度云/index.html","418c6b022484187b3bffccf785d6e5f8"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","b64908b2ae8ecbed5b753766bf8438f0"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b402afa562f49c6044ceb6d2f5e81383"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","426cf75c0d201655ee0f947fd7363eaa"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","0f9954b93446988513a98ebbdcd2c6b7"],["D:/Blog_my/blog/public/music/index.html","52f674c3ea65a4afc6293080945c079d"],["D:/Blog_my/blog/public/page/2/index.html","fdea3d2588568809632fb9e02e45442e"],["D:/Blog_my/blog/public/page/3/index.html","3f5ddf620a2738c3c0cf745be1d119b2"],["D:/Blog_my/blog/public/page/4/index.html","76bb7da5523f8726dc149aed4b6962bb"],["D:/Blog_my/blog/public/tags/Android/index.html","a484848ecfc4fafd9798ffae2bdc6195"],["D:/Blog_my/blog/public/tags/bmob/index.html","885ea53714656c77c72a4cfaf313c820"],["D:/Blog_my/blog/public/tags/coding/index.html","4d962b0d06e53093c11591552e5e7611"],["D:/Blog_my/blog/public/tags/github/index.html","ec3320b627b01fa12c991a81cb54b92b"],["D:/Blog_my/blog/public/tags/hexo/index.html","f40ad46557f36988e8c992cd9ac7aab6"],["D:/Blog_my/blog/public/tags/index.html","76e1431fb4a0ad8fe1ec056b843e427e"],["D:/Blog_my/blog/public/tags/leetcode/index.html","373a641ce2cd25e4aeaf86586e1ce1b2"],["D:/Blog_my/blog/public/tags/情感分析/index.html","1e0046625c3f1e1d08f8151a38afc589"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","36bbf17736fe04ed8936ef22356407c7"],["D:/Blog_my/blog/public/tags/登录注册/index.html","57613aaef0a6e314dc958bad8cd7db40"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","76080161058f4e32da9b9cb9d59d69e8"],["D:/Blog_my/blog/public/tags/笔记/index.html","f2891fe55f29f79bfe5d57def064f7f0"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","de1a2735ac57f2e599abc88297c9047f"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5a07c95d0e3c75b1ca7050ba70c54761"]];
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







