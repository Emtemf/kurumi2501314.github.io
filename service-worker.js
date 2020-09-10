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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","42e6c633ce5d9eb34f517324a1ba3ea1"],["D:/Blog_my/blog/public/Gallery/comic/index.html","2b8b7eee26e4f8b46a21d7c9f63c86e3"],["D:/Blog_my/blog/public/Gallery/index.html","ee2fcb3ed65e4c37179cacb6cfeb4876"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","63b3f2d3ee530ee273e3e36e6e45889d"],["D:/Blog_my/blog/public/about/index.html","ec024b1a777c0cb1ee9fbce8f3d2121c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","c4c6e8c99eb5a550002345f3986e3d12"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6135c72555d5c518b80ad246bbc9dc7f"],["D:/Blog_my/blog/public/archives/2020/08/index.html","b32eaaac63f69853cc09adcd401b77d1"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","b2444fefa6f49f8566fd30554f5ce596"],["D:/Blog_my/blog/public/archives/2020/09/index.html","81dcf040d276668895625faaeef083c9"],["D:/Blog_my/blog/public/archives/2020/index.html","0d231076a4b2f28884c8aba08def0e73"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","75966a4d520335d0601131a3a272970a"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","c54f816670fcb051b74405f50d8fcb94"],["D:/Blog_my/blog/public/archives/index.html","15fba5cc35c712c1a08c58cdffa9d6e2"],["D:/Blog_my/blog/public/archives/page/2/index.html","2424d18b59bf69c7408a80b20e96df6d"],["D:/Blog_my/blog/public/archives/page/3/index.html","e359693bf2b947bdfc6c8aaeaad5c68d"],["D:/Blog_my/blog/public/article/1811f8b8.html","6a85de78e8d1bbbb7f228799d3851283"],["D:/Blog_my/blog/public/article/18e57658.html","7ecb44ee0652f292016205abc774343b"],["D:/Blog_my/blog/public/article/1e64d194.html","88f634bbf4899b941c792db7f33ca63e"],["D:/Blog_my/blog/public/article/21f50898.html","3e4ed4bc910c172d8bdb5a23743c18ed"],["D:/Blog_my/blog/public/article/234762cd.html","e8cfe55acd3d20923afa4857bce15470"],["D:/Blog_my/blog/public/article/2b97b46c.html","25fc6747bbd3ba9d40f9ab64426c8544"],["D:/Blog_my/blog/public/article/358ad26.html","d16024619dd8bebdf47140e232ff39a0"],["D:/Blog_my/blog/public/article/541a8071.html","04b9465c89a591f92676496b021533a2"],["D:/Blog_my/blog/public/article/54412d2c.html","4d5c240ba143797f2a635395820e42bb"],["D:/Blog_my/blog/public/article/5c1827a.html","fc0814d99df5f3ce65e1980d3d6b7a0f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","bbb8cfa31f5071c898c94e0153303043"],["D:/Blog_my/blog/public/article/5dcc92c.html","9360788292b97fa153bee76e05becf17"],["D:/Blog_my/blog/public/article/67da7762.html","206d7662b10a00653605afaa71dc4907"],["D:/Blog_my/blog/public/article/683f20fa.html","7941c01933645ee6e8fa9fced19630ce"],["D:/Blog_my/blog/public/article/7758c0ce.html","12d6e643b24ebef142ccca51ee3e5703"],["D:/Blog_my/blog/public/article/7a56c169.html","9337d0dbd306693fc5b21ae4d598e854"],["D:/Blog_my/blog/public/article/7d561955.html","6356e2ee2e515cc65ea6fd621a3a563e"],["D:/Blog_my/blog/public/article/a0595b99.html","282ad417197e458c748bacad6145c04a"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","a18c017234c89fb3d6d36fb72f681ece"],["D:/Blog_my/blog/public/article/c386a086.html","b3e7eab3bbace5e9153609c2bac1f2c1"],["D:/Blog_my/blog/public/article/d080f90f.html","b83c66b4672eb1caac3a5033efed34e9"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","28666e233890d6cb944cc361613e28eb"],["D:/Blog_my/blog/public/article/e21e4e82.html","c5d80f22975aba31c6c76b07a186175c"],["D:/Blog_my/blog/public/article/e419ec53.html","05302d0f732fee55ad1d341714014c56"],["D:/Blog_my/blog/public/article/eb0fc959.html","d3ddf08a72c1716f4833335d95866210"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","7c453f456ab5633fea2b2b884c27ed9b"],["D:/Blog_my/blog/public/categories/Android/index.html","195ab783d57d70358f481c49812c8a6c"],["D:/Blog_my/blog/public/categories/index.html","b838fbfc2039b4c0f0e5d41c2bc483f1"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","d9c8de9f6e92f59cb338a9da168225b0"],["D:/Blog_my/blog/public/categories/后端云/index.html","69a3a9d0756ddf9def662552109bbd77"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","cdc0d0d48186ea96fe923a73e14e357f"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0729388f326dbe956e4fd906aeb259b2"],["D:/Blog_my/blog/public/categories/百度云/index.html","cdfec493e818d7b8a4050b28821a903c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","712d94ec257e29331e1e03200b235a5e"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b270bbda022cb61ed7a9b6678dcff3b2"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","f37ae77c1a05ea6185233e1ba3922648"],["D:/Blog_my/blog/public/music/index.html","14937aeee47b996feb7893453311788f"],["D:/Blog_my/blog/public/page/2/index.html","6c26eb8f360b0ebb4e172d7a4733597c"],["D:/Blog_my/blog/public/page/3/index.html","dee778ba8904c511190f81ba74ab87ec"],["D:/Blog_my/blog/public/page/4/index.html","95a74e28d36aa2faef09387d5399f189"],["D:/Blog_my/blog/public/tags/Android/index.html","56d5ed367e0a15a1da10af4ba1b61dd1"],["D:/Blog_my/blog/public/tags/bmob/index.html","333f6d17bbc1717a1fff1b57f0bdae78"],["D:/Blog_my/blog/public/tags/coding/index.html","66bf074676283df25a5a5a586223a7f3"],["D:/Blog_my/blog/public/tags/github/index.html","f14c81a8907c55645b6a11fa66c1bcf7"],["D:/Blog_my/blog/public/tags/hexo/index.html","9de682f6f6ddc80516fce7606a4a957b"],["D:/Blog_my/blog/public/tags/index.html","d5fd412d66af9ba77b95b333253c7109"],["D:/Blog_my/blog/public/tags/leetcode/index.html","dcd075ebb184068720ae134c6b73354b"],["D:/Blog_my/blog/public/tags/情感分析/index.html","d6a0db9668ea60ea03432d0356c097ea"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","a643180139c16265768214b24529caae"],["D:/Blog_my/blog/public/tags/登录注册/index.html","b7c99e5faa0c423c88bc5aa3e5e7d398"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","e2cf5a0b8f74fbecfe2302f296061a3a"],["D:/Blog_my/blog/public/tags/笔记/index.html","27a3811d4d7bb1a45fe3eae23cef3157"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","4610a787343ef340e655668967edfe26"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","6be610096bd18d42fc96d49a9aeb7660"]];
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







