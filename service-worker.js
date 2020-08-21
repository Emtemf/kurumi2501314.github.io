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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","9d8a2809751c204ee4417aeb4c99c805"],["D:/Blog_my/blog/public/Gallery/comic/index.html","111fb8788c4387a5c41ac950233abc4b"],["D:/Blog_my/blog/public/Gallery/index.html","ad766ca996c382eebf6008f0457e38c5"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","5f2dc1ee89b43edd13169c42da086473"],["D:/Blog_my/blog/public/about/index.html","f65a76640d60fd7ccbb8f7be70843d5c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","881832dc9f7a677a2ffb689d4f59ee98"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","cfc43597608927caacf47a5ce723558d"],["D:/Blog_my/blog/public/archives/2020/08/index.html","f5483af85fd9d2cf4f762fd6926e01ec"],["D:/Blog_my/blog/public/archives/2020/index.html","969234fc45d8c45cfc70854e4c431ee6"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","caebbe9907f01129ec08e882ce33e392"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","acf7aded48ab5cc6e9d5033d2dd32d20"],["D:/Blog_my/blog/public/archives/index.html","4ebebbc99fdd7375f28fa46de6b52140"],["D:/Blog_my/blog/public/archives/page/2/index.html","a8e575a947938395b79acb003e370dc7"],["D:/Blog_my/blog/public/archives/page/3/index.html","837f58e0241f2832765a0bc73fc846e0"],["D:/Blog_my/blog/public/article/1811f8b8.html","b9f199a99134979502319bfecfdfa32c"],["D:/Blog_my/blog/public/article/18e57658.html","cc4b954ccbb1e4ac652030300d9182c9"],["D:/Blog_my/blog/public/article/1e64d194.html","e4769fa96e3dc7342391db2f06312a4b"],["D:/Blog_my/blog/public/article/21f50898.html","167ecd6305fe2c86b70cd9a4be9ab57c"],["D:/Blog_my/blog/public/article/234762cd.html","31e04ba35e35cc21a372af91d69f3d27"],["D:/Blog_my/blog/public/article/2b97b46c.html","7393bd09c552a944674ba8d30dab18d2"],["D:/Blog_my/blog/public/article/358ad26.html","5be9aea420382e360e6236ce2d9764b5"],["D:/Blog_my/blog/public/article/541a8071.html","830151019c0afd15c58bf28c8f97ef99"],["D:/Blog_my/blog/public/article/54412d2c.html","2b6c3af0b5a057805c6eb6f42bd34729"],["D:/Blog_my/blog/public/article/5c1827a.html","ad73594267f7c088135badb90baca638"],["D:/Blog_my/blog/public/article/5d6f1d17.html","ab3d57d5cbdc63f1f224526005876c7a"],["D:/Blog_my/blog/public/article/5dcc92c.html","bcf1cbe173ac40891c91bb695cb32862"],["D:/Blog_my/blog/public/article/67da7762.html","a5e02fb6c603a054c369e2082d108690"],["D:/Blog_my/blog/public/article/683f20fa.html","36e73de39753db866c86dcbda916edbe"],["D:/Blog_my/blog/public/article/7758c0ce.html","9d56244cd518cc8be578a4e693886397"],["D:/Blog_my/blog/public/article/7a56c169.html","d096da015805c6bfff12b412b47832f8"],["D:/Blog_my/blog/public/article/7d561955.html","0e6d48b1f4efbc76fcae36cb94fd29f2"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","793bea252c142d07164b307f5299ce17"],["D:/Blog_my/blog/public/article/c386a086.html","aeade8efc47950d1135ce07e2de50af2"],["D:/Blog_my/blog/public/article/d080f90f.html","c752970cb32dc6a66da5c8cbd42b42a2"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","1d0463cda4956c09dfb846789be887c6"],["D:/Blog_my/blog/public/article/e21e4e82.html","185d08f17116ff1e9420ec486a7c60a6"],["D:/Blog_my/blog/public/article/e419ec53.html","bd93667ea822ba11bd79cfaa1ffb16cb"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","ac27c40d365cba598e19f58bf2df2440"],["D:/Blog_my/blog/public/categories/Android/index.html","44a7a531825b34c5acb62d09db120265"],["D:/Blog_my/blog/public/categories/index.html","dd1f9c9acbe9d41c31c9714240960e28"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","aff5acc7c75a5e94120a9500a646143f"],["D:/Blog_my/blog/public/categories/后端云/index.html","cbf36e2801c9322250637f68ada0558f"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","5e0d966458d68204afc6b1ad2055d635"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","b7c031128b83b737afdda57e55be8c16"],["D:/Blog_my/blog/public/categories/百度云/index.html","166f12a1441168ce3a0861fb70ae0213"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","a6d56546d001399cad5252bc94e1c7cc"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","84dbc35a531266d8175d78c3d03bd52c"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","918d919f42e9ac3cefb0b965e6613af5"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","841cc3e106cbeaca78ea1d9c086cd287"],["D:/Blog_my/blog/public/music/index.html","3f38655a663836e52b4b7775a460f787"],["D:/Blog_my/blog/public/page/2/index.html","fd36a54b81ec8ce59ea72f6a65319deb"],["D:/Blog_my/blog/public/page/3/index.html","b0a5142dcca74f1a7dc946920b5d6bb8"],["D:/Blog_my/blog/public/page/4/index.html","1dac60687598813c9206887eceb73cea"],["D:/Blog_my/blog/public/tags/Android/index.html","4b990eee471f92695e1ee0703659f7cc"],["D:/Blog_my/blog/public/tags/bmob/index.html","015340a85a9051b1e3a6f3d6dd95ef47"],["D:/Blog_my/blog/public/tags/coding/index.html","663312d73ab0bedbd2a98d4dd1c0d806"],["D:/Blog_my/blog/public/tags/github/index.html","5683bae56a69c577e2618e5896dd4e55"],["D:/Blog_my/blog/public/tags/hexo/index.html","a3a0ce80f46d26381559ab2f2810a785"],["D:/Blog_my/blog/public/tags/index.html","d957f4af1d011cb2acc4d6c0d66a1fe1"],["D:/Blog_my/blog/public/tags/leetcode/index.html","6c275284e25488c34d2e7a7061f2a7d3"],["D:/Blog_my/blog/public/tags/情感分析/index.html","2b2b788743bd2da843519a8a27c0d19b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","f042808c5047e3f59dffe55fcebb7a51"],["D:/Blog_my/blog/public/tags/登录注册/index.html","936ac174e07622cf9d96958ad322acbc"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","eccb24e3e818e9de24040bbc90f9d90b"],["D:/Blog_my/blog/public/tags/笔记/index.html","e6066694b3e80369935b60142e423892"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","a1bbf4b611bf15711ff6f044f6cb7441"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","fe9ff64c309fdf65ad4f17cabb3639ac"]];
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







