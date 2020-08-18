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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","42dcb5aefcd672b2b5c4824c32567b69"],["D:/Blog_my/blog/public/Gallery/comic/index.html","126103de5293e609da92d7f0eb2b6217"],["D:/Blog_my/blog/public/Gallery/index.html","37f93cc76e9255dc2c04f5b125949525"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","bf70c454592f73af62b902a633895af2"],["D:/Blog_my/blog/public/about/index.html","f0383f76503f117f571927ecaa890f65"],["D:/Blog_my/blog/public/archives/2020/07/index.html","bb97beac52d2305bce0409687ae13819"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","0d55143d3fff6b4b5f76ed0b89878f24"],["D:/Blog_my/blog/public/archives/2020/08/index.html","a052fef104f2fa08cd3ba08fa58b9cc0"],["D:/Blog_my/blog/public/archives/2020/index.html","2d7e84c39348f4f976a1764cbaca333b"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","887b65d598d6c2b61e4fca8c449e6b4f"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","6f0740e522aa385a19a26b48f7f48ff3"],["D:/Blog_my/blog/public/archives/index.html","6198d537a7522cc0ea0b1a805123529d"],["D:/Blog_my/blog/public/archives/page/2/index.html","9279b625606dec12fd11de9e613fbc4b"],["D:/Blog_my/blog/public/archives/page/3/index.html","e12c5f3ad1cfee97184f9f41e493088f"],["D:/Blog_my/blog/public/article/1811f8b8.html","ba0c6a2a6fd7c8f30fac071590ce9e51"],["D:/Blog_my/blog/public/article/18e57658.html","a1f3606e9f9ed1af57b23008b95d0c52"],["D:/Blog_my/blog/public/article/1e64d194.html","d82bd49f5186cc3b65b87bdef9ad0d40"],["D:/Blog_my/blog/public/article/21f50898.html","562c5eb48ba7c8becabe99c7c0745952"],["D:/Blog_my/blog/public/article/234762cd.html","1ba0eaff8ba610666cdd0752d83a39ae"],["D:/Blog_my/blog/public/article/2b97b46c.html","72a302c0b15795be3ad0ac4a8afd7593"],["D:/Blog_my/blog/public/article/358ad26.html","db2e6fcdd03845c61e606db2bff02d64"],["D:/Blog_my/blog/public/article/541a8071.html","61916bb56648f4b8497403b24950cfe9"],["D:/Blog_my/blog/public/article/54412d2c.html","4a80ec1ecf5d71b0ec708b0d56dd4a02"],["D:/Blog_my/blog/public/article/5c1827a.html","8c79861b6f7fb650175a13e39a91df20"],["D:/Blog_my/blog/public/article/5d6f1d17.html","67abd6c1ba9f9473bf29c2d2ceb4bdac"],["D:/Blog_my/blog/public/article/5dcc92c.html","9a08e766917f0bbbd9e755c224b7853a"],["D:/Blog_my/blog/public/article/67da7762.html","26099569d3b50c55e18f411406f49f82"],["D:/Blog_my/blog/public/article/683f20fa.html","1c7e57c6d4bcb89ee0de47101b9ca325"],["D:/Blog_my/blog/public/article/7758c0ce.html","31db0b9783f2248c362e0e83513581e7"],["D:/Blog_my/blog/public/article/7a56c169.html","bb6652e4224b7a85cd5d1a4e87e609c3"],["D:/Blog_my/blog/public/article/7d561955.html","efa2f6d9017579b5198077f2031add1e"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","7990a579de1829e237824fb3e4ceea77"],["D:/Blog_my/blog/public/article/c386a086.html","f5bcde363abbe4a166d174e0bbb80961"],["D:/Blog_my/blog/public/article/d080f90f.html","5c7cf32803352d5bc048490bbc41722b"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","fea1f7e8e739f8a4ce8e38e4589bf2af"],["D:/Blog_my/blog/public/article/e21e4e82.html","dc366f8e76814f3eff691946ad5946bf"],["D:/Blog_my/blog/public/article/e419ec53.html","94a73d484006e81a72fb2af33382b1d1"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","111848e543948e861cc0283e384bb670"],["D:/Blog_my/blog/public/categories/Android/index.html","72c1724c852f438402d7a79aefb934ca"],["D:/Blog_my/blog/public/categories/index.html","0dbc078a508222a233b3dab6eaff66ba"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","0730e04ae6002c8b9244e5075eb90d0c"],["D:/Blog_my/blog/public/categories/后端云/index.html","e4db155303b8498c43b433709e5bf476"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","12d7bda9d42002501d812fc954379406"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","233d73bb3b13ed3d6123749d2b54943a"],["D:/Blog_my/blog/public/categories/百度云/index.html","e121ba218cf91ef4810ac875bf6151b7"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","3f0edfc8bef28bd17ff7fb71a972055f"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","ba0b2add3750a5b9a62bae5d0121ff86"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","1e238caaf2f91829dfd70cedf7c7fe2b"],["D:/Blog_my/blog/public/music/index.html","af11abd94ef235211811a26108418c05"],["D:/Blog_my/blog/public/page/2/index.html","6e07efdfc15c17f077fd6d1426ff0231"],["D:/Blog_my/blog/public/page/3/index.html","0280a04c611554ef683e74f381713ca0"],["D:/Blog_my/blog/public/page/4/index.html","600488fd3144c27fb38a6a7e3de682cb"],["D:/Blog_my/blog/public/tags/Android/index.html","fbc8aa2aa78903f98671c45c96d6114c"],["D:/Blog_my/blog/public/tags/bmob/index.html","77a43a023cc8698ae2ec0d94291f2d36"],["D:/Blog_my/blog/public/tags/coding/index.html","a2b4ee5f1393080d499de628a0fa4ee6"],["D:/Blog_my/blog/public/tags/github/index.html","7a58b6eac01ba6457a1df9a4d2ae3470"],["D:/Blog_my/blog/public/tags/hexo/index.html","4e1c88885b2b17f36efb035c587282dd"],["D:/Blog_my/blog/public/tags/index.html","4a100545f61c0834d7e33a2d0b0cbec9"],["D:/Blog_my/blog/public/tags/leetcode/index.html","c5c30d08e149522e5a2a8fc1730b5a34"],["D:/Blog_my/blog/public/tags/情感分析/index.html","604ea5b9cd01052dea2c30368ff501b0"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","58845e76e095f0e399b032d2fa7e3d30"],["D:/Blog_my/blog/public/tags/登录注册/index.html","994e4fa412ec5aaa5654daeb24a02159"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","9f30176353b4834cecd1bc4bc2ef5ddb"],["D:/Blog_my/blog/public/tags/笔记/index.html","70a3c36220b7c194dadddd03849189a3"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","9e87c7c5aeb352a9c2897bc3614642f5"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","0f7953944741df66b8b2e82aacbfcd5f"]];
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







