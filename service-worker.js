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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","95973eed3e2d8abb6c7a19185088b7fa"],["D:/Blog_my/blog/public/Gallery/comic/index.html","e039ae2a6994f3a744443502a3a9c4f9"],["D:/Blog_my/blog/public/Gallery/index.html","131d3712c23c87833f67bbaecfb9baba"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","8e334aad5f43e6486fbbda9b7724bbd0"],["D:/Blog_my/blog/public/about/index.html","e49b73b20552481d04409ab342d9279b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","6cfeae2c033b981187d88daccbc5eb85"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","a0cc1b66449b4ac260babd9167da6c96"],["D:/Blog_my/blog/public/archives/2020/08/index.html","8b0423f54732f3d8b11a3e6715f5404b"],["D:/Blog_my/blog/public/archives/2020/index.html","595d920ed1a07a0bc1f14e73609640a9"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","424034c2abde8c2c14d0043445b14341"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","a397d833082ac4dfb364fbd726882ce0"],["D:/Blog_my/blog/public/archives/index.html","d894a461a2a13f0cbccba7437fe71742"],["D:/Blog_my/blog/public/archives/page/2/index.html","38c15801f36927a411804c0104d6daea"],["D:/Blog_my/blog/public/archives/page/3/index.html","0ac85c1aa7ecb7a7900fcce30f04a0c0"],["D:/Blog_my/blog/public/article/1811f8b8.html","dc1f3980017b39a1a3333b43f0ca4a7c"],["D:/Blog_my/blog/public/article/18e57658.html","d95a35dc2d144a7a0e628c63aa3d6baf"],["D:/Blog_my/blog/public/article/1e64d194.html","e8d92df3efcb74aa66eaad7fa57bfbe1"],["D:/Blog_my/blog/public/article/21f50898.html","198e57b8a8d8b6eb063e688e6afad9a4"],["D:/Blog_my/blog/public/article/234762cd.html","6a8b50da9b5d701c21125bcd6383dfcf"],["D:/Blog_my/blog/public/article/2b97b46c.html","2266e09ceb99c49291e13ae3c561ef3f"],["D:/Blog_my/blog/public/article/358ad26.html","769b93d1ebb136cd5888eaff2b7566c4"],["D:/Blog_my/blog/public/article/541a8071.html","4642b8b9ef1d1b60e80b93dc4381bee7"],["D:/Blog_my/blog/public/article/54412d2c.html","cdf92bbb794702ea897281c2bf5e662a"],["D:/Blog_my/blog/public/article/5c1827a.html","dcb5d46734b1a0daa9962bea4239920f"],["D:/Blog_my/blog/public/article/5d6f1d17.html","4833de0033fd48b3e9c70022e08e4274"],["D:/Blog_my/blog/public/article/5dcc92c.html","6a214d2c980593a874a9e7c4883194c5"],["D:/Blog_my/blog/public/article/67da7762.html","340ff4b43f291c6e036576ee2e911370"],["D:/Blog_my/blog/public/article/683f20fa.html","653bff4fbea62002e604569967af87c2"],["D:/Blog_my/blog/public/article/7758c0ce.html","e5f12ada64e375b105a35b30c20e35c2"],["D:/Blog_my/blog/public/article/7a56c169.html","8374f172a90cb10878c172efa2a18eda"],["D:/Blog_my/blog/public/article/7d561955.html","26111a93e3aba73ad1776db4086e0c22"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","df89e31b99b157833096eb13e52e7d17"],["D:/Blog_my/blog/public/article/c386a086.html","9aa8f44c3757a099567fe23a5b55396e"],["D:/Blog_my/blog/public/article/d080f90f.html","a9f9ad5b5103ab5f71e754e21423bbbc"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","cec154c1468ac86d31bedfe82e42b7d8"],["D:/Blog_my/blog/public/article/e21e4e82.html","d00b86d1864a7824baf8e7735742cf58"],["D:/Blog_my/blog/public/article/e419ec53.html","214a1ad888dc0620b49045e9fa23460f"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","14724c9bd1ad384d8557ea8c3f64e47c"],["D:/Blog_my/blog/public/categories/Android/index.html","1658971aaca097061e50af9005e9cf04"],["D:/Blog_my/blog/public/categories/index.html","76c7aadb7122298989bc4940a7fbde87"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","160c86a07234da7ea112fe7876650860"],["D:/Blog_my/blog/public/categories/后端云/index.html","3391d7ae59966014ad1232824233f8c1"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","0a16b12e1e4e76d4ff72823aba3facaf"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","74311b4fd04d0a2e5c205f0b3561f633"],["D:/Blog_my/blog/public/categories/百度云/index.html","e0698773d650a5f81ef5a9742663343b"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","d994efdd15418b27207c67ac09df4af6"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","0f472e0fb1742c0f228bd48f0afdccd4"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","426cf75c0d201655ee0f947fd7363eaa"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","030e1922b2393c074c0bcfb01d876bb4"],["D:/Blog_my/blog/public/music/index.html","b68f460dfa3ad1d4022d8c0de6517da2"],["D:/Blog_my/blog/public/page/2/index.html","abad90962ca55c8664678158b9ee8077"],["D:/Blog_my/blog/public/page/3/index.html","06f7cce301d19645163ebbb2f77db91d"],["D:/Blog_my/blog/public/page/4/index.html","4220efdef08da9856b79f7bd8208ee79"],["D:/Blog_my/blog/public/tags/Android/index.html","8a0960b08837463a0a123696a8fdb4d2"],["D:/Blog_my/blog/public/tags/bmob/index.html","bf8103b58e6f5c2fdd5f02bd7ae594ac"],["D:/Blog_my/blog/public/tags/coding/index.html","1d460355ebe9d04bb878a36db3f3ad1e"],["D:/Blog_my/blog/public/tags/github/index.html","609eea969311ec4d141abf98568759f2"],["D:/Blog_my/blog/public/tags/hexo/index.html","79718f199bbdb16f408335188df48807"],["D:/Blog_my/blog/public/tags/index.html","0613e85957dac4adde6bd3b4759ed485"],["D:/Blog_my/blog/public/tags/leetcode/index.html","2aaea6e8119743bbed824323086d5c57"],["D:/Blog_my/blog/public/tags/情感分析/index.html","b70aca0a1251733bc32ec865333a6bf3"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","0b27a1cd7adc4293be24995de46b9c90"],["D:/Blog_my/blog/public/tags/登录注册/index.html","f6613765cf0d638097493f98fc78b467"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","1550ca653ea9e5dd1e1d91a256c7c28d"],["D:/Blog_my/blog/public/tags/笔记/index.html","db5380819319f9e8c3c94ebad93b61ac"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","0b142d04a9ba40b32a5e388885f9dace"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","ef94474f2f95718b09a872f9cc64dded"]];
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







