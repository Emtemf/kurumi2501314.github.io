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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","35ec30237878e25619004f5ed1b28c24"],["D:/Blog_my/blog/public/Gallery/comic/index.html","b22f26a29163e22e69fd2f34d600ccaf"],["D:/Blog_my/blog/public/Gallery/index.html","49c2b2ebf7312b788f1ef9619aa7c843"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","b90591e6f49cd1778292a13857b5cfc7"],["D:/Blog_my/blog/public/about/index.html","b760d5c81a72c28801c0de37b35329c1"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ee09b455f8d4e1fa795282638f70b5ca"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","8098e91a4549d3da01c284cbff6477b8"],["D:/Blog_my/blog/public/archives/2020/08/index.html","c62f4293cf2eab9a08b4107296105c63"],["D:/Blog_my/blog/public/archives/2020/index.html","e878349d632bb7c2f86860e8b4cdb74c"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","b21f98c73157d9ceb0a3454fb5dd1ed8"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","cbfc32399a8234369796ee8cde4865d2"],["D:/Blog_my/blog/public/archives/index.html","e96a8b89de31bdce0f6e95d4ff8ca02f"],["D:/Blog_my/blog/public/archives/page/2/index.html","5a7efed6e9acbd770159fe69d82da1c8"],["D:/Blog_my/blog/public/archives/page/3/index.html","54607b772a4decb254cdae3c95451273"],["D:/Blog_my/blog/public/article/1811f8b8.html","8c311c196e327b691324af0e6c189ffb"],["D:/Blog_my/blog/public/article/18e57658.html","f6f5772a269c816ada4f8e788772378d"],["D:/Blog_my/blog/public/article/1e64d194.html","566bbaaf8ec818c3fada7ab13e7b670a"],["D:/Blog_my/blog/public/article/21f50898.html","bf260f4a9df239335919207a8598ec70"],["D:/Blog_my/blog/public/article/234762cd.html","5114a205158df1189960c02f4e4a6618"],["D:/Blog_my/blog/public/article/2b97b46c.html","cae325ba0477fb5ccdebbc1d7e52d6ae"],["D:/Blog_my/blog/public/article/358ad26.html","e96aa55739206a985a92440b9acca47d"],["D:/Blog_my/blog/public/article/541a8071.html","831fe6c6bfe5c159edafe0d55513ab9a"],["D:/Blog_my/blog/public/article/54412d2c.html","2713a0dd0683f1e8fe7e6fcd832798cb"],["D:/Blog_my/blog/public/article/5c1827a.html","9027c60d71235071d4d65d5b6872aa49"],["D:/Blog_my/blog/public/article/5d6f1d17.html","9cfadaad294ced2b949e71fbdec490f8"],["D:/Blog_my/blog/public/article/5dcc92c.html","e8060aee5ca87619b76bdc0e60df75be"],["D:/Blog_my/blog/public/article/67da7762.html","6265d524b5d6e258f4bef793d183bce0"],["D:/Blog_my/blog/public/article/683f20fa.html","6178c56758533cb8e99d95faf3ba4150"],["D:/Blog_my/blog/public/article/7758c0ce.html","bc0a33bda5e5fae702089fa9d5beed83"],["D:/Blog_my/blog/public/article/7a56c169.html","73eae7e4e75420fc473d5af4a1f48875"],["D:/Blog_my/blog/public/article/7d561955.html","07e77c6e12bd0b2a7d362c8d722f585f"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","0c40ef25abb301ea816f6fd2e24262a2"],["D:/Blog_my/blog/public/article/c386a086.html","220b1b931700a5e5e8db06d2714302da"],["D:/Blog_my/blog/public/article/d080f90f.html","32360ec1155c1bdb1bb1dc0940a7693d"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","24b6e782316d12656bc62bdb671cd2b2"],["D:/Blog_my/blog/public/article/e21e4e82.html","2eb2bf2ad698669e37062ba282094337"],["D:/Blog_my/blog/public/article/e419ec53.html","77abbfdc925fada853e5f578d3f4e8e7"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","14891f740de916af3c9057dd88a0b530"],["D:/Blog_my/blog/public/categories/Android/index.html","50e523a58abf6015f5509522f1b1484a"],["D:/Blog_my/blog/public/categories/index.html","7ad55f14d6e2587b7822866ff904d091"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","db34a0f3b43bc7b099859fe3d8ada916"],["D:/Blog_my/blog/public/categories/后端云/index.html","28cc203affe370818cc899e4565a96fb"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","40d0cfb1886da61ce63ed45a9d6c6e62"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","6a6f9eb97f232456d411820f05a20a7b"],["D:/Blog_my/blog/public/categories/百度云/index.html","3edfb9ffc8f180d66ca8752f5265ff94"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","8967fb887f19ad019df9d50162fd080b"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","44d7bc5def39e4bd6be9801d9f34ce48"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","36cd8e97594e4cbb8a576bdff263b20a"],["D:/Blog_my/blog/public/music/index.html","31ece16afc44c54e3388c8900f4d61c2"],["D:/Blog_my/blog/public/page/2/index.html","1644b267dd4a1858ea3877cf55883734"],["D:/Blog_my/blog/public/page/3/index.html","b829a87d3a15cc027bada46c3fa41d1b"],["D:/Blog_my/blog/public/page/4/index.html","a539f235d1c2a94e3f50a58e044cd152"],["D:/Blog_my/blog/public/tags/Android/index.html","ccf5f20426e141df681da595d8c9ea1f"],["D:/Blog_my/blog/public/tags/bmob/index.html","08e8b91d37b16a668312576049e9e53f"],["D:/Blog_my/blog/public/tags/coding/index.html","934ce3b743cb05ae1de72526898abad5"],["D:/Blog_my/blog/public/tags/github/index.html","347ee9480e4c13aab50de6c2bd9480be"],["D:/Blog_my/blog/public/tags/hexo/index.html","bdb9ad683f4e157e68ebde91702ce7e8"],["D:/Blog_my/blog/public/tags/index.html","039587d6b6c583e176b69eda900aefe5"],["D:/Blog_my/blog/public/tags/leetcode/index.html","5b6aee194d1bd071625657ae183bcb75"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b8751f8e7f7479588e04f01d92f322fc"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","308660948c923e5f2bd594ad478e1fc0"],["D:/Blog_my/blog/public/tags/登录注册/index.html","a526dfdb6d44573f2d2b84788703c432"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a02ef2df611fe12fa9852f88c5223bf2"],["D:/Blog_my/blog/public/tags/笔记/index.html","e109ee474c5f3cf7ec5120ebcc50c172"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","f7baee98573ee2e5606c781e9328fcae"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","f9f6b50afd5f1a013ae5c670661f4505"]];
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







