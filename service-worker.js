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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","91b5760530fb8bed4485a36d080cb78c"],["D:/Blog_my/blog/public/Gallery/comic/index.html","1eb72ab4537ab519bc4a025fc5aadfe8"],["D:/Blog_my/blog/public/Gallery/index.html","044057b1b65f34f6e08c84f57913b28f"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1c21a789f74d9a2b05ebf5a6ca9895e6"],["D:/Blog_my/blog/public/about/index.html","2182383533b474c930549782dc39efd5"],["D:/Blog_my/blog/public/archives/2020/07/index.html","c8890a6b97ad2561061e4d83214281c7"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","56ca899a89c8459387fd504c71f5fe00"],["D:/Blog_my/blog/public/archives/2020/08/index.html","388809530206cdcc95e81fac3678c5b5"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","ba5eed550f03d625289ae3d4dcbcc988"],["D:/Blog_my/blog/public/archives/2020/09/index.html","e027e58e77417460fc9dcb82b1f5cfc3"],["D:/Blog_my/blog/public/archives/2020/10/index.html","5fdc8dd6139f53d275bffae6eaa54954"],["D:/Blog_my/blog/public/archives/2020/index.html","9130bb12cf8ec734e4572aa93506e181"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","8de485154c484bffb64fbd2e25af3343"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","e964a144bae3e7637d507ea47ea31026"],["D:/Blog_my/blog/public/archives/index.html","b31108a7105d9b182985d42288bf310a"],["D:/Blog_my/blog/public/archives/page/2/index.html","0d41e48f31d3717f0cc707e80f5c6eb1"],["D:/Blog_my/blog/public/archives/page/3/index.html","9121c308eb2ba9974bfa80420935edd8"],["D:/Blog_my/blog/public/article/1811f8b8.html","6b21983ba650450542a34110463643ba"],["D:/Blog_my/blog/public/article/18e57658.html","9460cc34caeb69971b638ab4c5598ff8"],["D:/Blog_my/blog/public/article/1e64d194.html","c7020fee039ee6734c955104510adb85"],["D:/Blog_my/blog/public/article/21f50898.html","459d506ff5936f707882cf2d1a57d99e"],["D:/Blog_my/blog/public/article/234762cd.html","75f5704f3597792ceb1a96bc215a9bdd"],["D:/Blog_my/blog/public/article/2b97b46c.html","f99b572ca95a6b8f0fcae96a8f2f8205"],["D:/Blog_my/blog/public/article/358ad26.html","d11a97c76adced2810a200a0ef1fae1b"],["D:/Blog_my/blog/public/article/541a8071.html","ae0c4276e3c860dd4bd542a9291429e6"],["D:/Blog_my/blog/public/article/54412d2c.html","e26d039cbdc0de0b729a84c447b8d75a"],["D:/Blog_my/blog/public/article/5c1827a.html","fad4af32d9bc13d4da320f3d4013d403"],["D:/Blog_my/blog/public/article/5d6f1d17.html","2381691782ba72047a82b2c739d831c8"],["D:/Blog_my/blog/public/article/5dcc92c.html","8e7dce88649d6c492e290b1a2732f7e5"],["D:/Blog_my/blog/public/article/67da7762.html","8ae263462ed8fc4476ccbfbc63adc71a"],["D:/Blog_my/blog/public/article/683f20fa.html","8522daa4b5ce4bb24b33a503a532a170"],["D:/Blog_my/blog/public/article/76783ca1.html","db54f09fee60688ca291520fb0fc4f9e"],["D:/Blog_my/blog/public/article/7758c0ce.html","5a9e587d47fca69a03306affd482baa8"],["D:/Blog_my/blog/public/article/7a56c169.html","115a6242b20cefb142e673821a499de3"],["D:/Blog_my/blog/public/article/7d561955.html","ea5dc313a96c9f93dc3c3bc6eb1b48af"],["D:/Blog_my/blog/public/article/a0595b99.html","eefbcbb4b23f7b11071f684c3d5fdeb7"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","997f8da23fd62ac6dff451f31961028d"],["D:/Blog_my/blog/public/article/c386a086.html","41e9c86560178100257122483bd51006"],["D:/Blog_my/blog/public/article/d080f90f.html","700e657207fd4180dc0750bd47fde6a9"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","62d7ad394198766f6ac7b676c9398672"],["D:/Blog_my/blog/public/article/e21e4e82.html","525a5bcf1e403cb6e2b8dff72c1c0404"],["D:/Blog_my/blog/public/article/e419ec53.html","65aae8755b46b7f961280a02d01f57f6"],["D:/Blog_my/blog/public/article/e4efebfa.html","a1c8805bd07649c5892a7d020e953b89"],["D:/Blog_my/blog/public/article/eb0fc959.html","091ff5df9b85d4541543c65f1b3a5b36"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","0ceb05a3a8ea0a8d2004297c14d448a7"],["D:/Blog_my/blog/public/categories/Android/index.html","65b827d78ff1522792b6a31d9f6a2630"],["D:/Blog_my/blog/public/categories/index.html","e6d6b83742f0aae4ecef490a780a1c8b"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","558206c5a45696507f7516fbe4e39e8f"],["D:/Blog_my/blog/public/categories/后端云/index.html","438a7b3fc8fe4e6a134049a6238e29ec"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","752f061705d57b06fe71e0a3f50f3e71"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","48766d31b1759db6350dab8f6565b058"],["D:/Blog_my/blog/public/categories/百度云/index.html","cfebc88973eef2b418d6b1c2699c01f5"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","6f4b13ca178d00a8af075802b70e6d94"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","af49d4ebd6def6485c9c15bedeeb02eb"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","d5c3fc6e56e5575f58e2277e3b3aaf3b"],["D:/Blog_my/blog/public/music/index.html","f9dc7abb4d73e90ade034b5008b03155"],["D:/Blog_my/blog/public/page/2/index.html","a3883227e7b7ae032a0345f4835b2d35"],["D:/Blog_my/blog/public/page/3/index.html","d78e2783753c890a483c35c0fe7e2442"],["D:/Blog_my/blog/public/page/4/index.html","e9dcd8974ba232cc13267b1ad01c76bc"],["D:/Blog_my/blog/public/tags/Android/index.html","1fa1e90a696d56959378263bc77f0709"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","b271212d4b8429838572846eb313d0b8"],["D:/Blog_my/blog/public/tags/bmob/index.html","4fbe328b9e70da053f5f9481cf2a3142"],["D:/Blog_my/blog/public/tags/coding/index.html","1ad27e8fb5634e5791ebecec5d0bff68"],["D:/Blog_my/blog/public/tags/github/index.html","53693582f2a41a3a8799812f7f0d718d"],["D:/Blog_my/blog/public/tags/hexo/index.html","9e50823d8e2dd26bf1181d2166c0feb7"],["D:/Blog_my/blog/public/tags/index.html","645ce9c02ad91b02a587e0ab2c6e2d67"],["D:/Blog_my/blog/public/tags/leetcode/index.html","2d11461de6af65ebe75a1ea4bce5b3e3"],["D:/Blog_my/blog/public/tags/情感分析/index.html","58aedb8c676e62caa8cc845d10ebe51c"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","3dfde12f2406868a05facd8c0829eda6"],["D:/Blog_my/blog/public/tags/登录注册/index.html","2d18dd7ed2fac7d2e705ecc3c74bfdf3"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a9e4b19b0fe73a6427eb09e96499d184"],["D:/Blog_my/blog/public/tags/笔记/index.html","01327706c303f7343038ba8c54392b99"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","0a52659b8a5ec64f4882137adf1ad086"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","43d1ed2400bb5f7dee7143749bcb3764"]];
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







