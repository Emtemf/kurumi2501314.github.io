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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","779e611bae613ddab15295c96a5a0c47"],["D:/Blog_my/blog/public/Gallery/index.html","a3cc17a048ddc7f499323730282810b9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","9d5bd930240fd8245064c760018f453f"],["D:/Blog_my/blog/public/about/index.html","a922713dfdeeaf1a4be87b18abcd6e45"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1363c9b0a80b4202737f2ceae4cbf607"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6f0ed2b622b8848ee9760a4331078516"],["D:/Blog_my/blog/public/archives/2020/08/index.html","29a885b1fd27f7a810199ace63560e3a"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","a8d35c26916bb87c3a7d8ec83aab123a"],["D:/Blog_my/blog/public/archives/2020/09/index.html","49d660353a014a1b9e5f3152da0260a8"],["D:/Blog_my/blog/public/archives/2020/10/index.html","823ea32ca8661b46109d2a0bd643637c"],["D:/Blog_my/blog/public/archives/2020/index.html","37b9f8912bc47eaef476b136fb4119a1"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","66ed7201c0fe564362beb2a72304d2fe"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","fd9282068e040da375de88f257641158"],["D:/Blog_my/blog/public/archives/2021/01/index.html","a476e258a5c544c0f4d46d7fd45d51f2"],["D:/Blog_my/blog/public/archives/2021/index.html","0ef00b246d91434a1ec20101719e6cc3"],["D:/Blog_my/blog/public/archives/index.html","37be7d3588885228af99ed0b1a735bde"],["D:/Blog_my/blog/public/archives/page/2/index.html","eed30705fc022ce55401aad251b7493c"],["D:/Blog_my/blog/public/archives/page/3/index.html","0b1febddae20c2bafe3f41e1eb69b4a2"],["D:/Blog_my/blog/public/article/1811f8b8.html","370672486ca3fcfe75b9f0ca94157fc2"],["D:/Blog_my/blog/public/article/18e57658.html","3cb179a788f31806c86e26378e5bd2b0"],["D:/Blog_my/blog/public/article/1e64d194.html","6bf16d8be5dd850cad1a6caa52b954b6"],["D:/Blog_my/blog/public/article/21f50898.html","8c8990f8f0ef060dd3d192c8e94c74a8"],["D:/Blog_my/blog/public/article/234762cd.html","0dcd46ef419f65f9d37b0053d0cac51e"],["D:/Blog_my/blog/public/article/2b97b46c.html","b50046e4b5058ecc0b31905780dfee58"],["D:/Blog_my/blog/public/article/358ad26.html","87a8921df58f0af33c8c5db488de2655"],["D:/Blog_my/blog/public/article/4de36022.html","2ff2df66d3b46097e9e1ea22bbf5c025"],["D:/Blog_my/blog/public/article/541a8071.html","6950ae667cb7552e2f2e299828ce087c"],["D:/Blog_my/blog/public/article/54412d2c.html","2a73533a238dcef1d9e25b50ab1fce27"],["D:/Blog_my/blog/public/article/5c1827a.html","e9772e7f661c9058c920fb5fe88b35c2"],["D:/Blog_my/blog/public/article/5d6f1d17.html","15717caab3401726f06fac5a2b5863b9"],["D:/Blog_my/blog/public/article/5dcc92c.html","bbb929125e95a6838750214bff5c66e6"],["D:/Blog_my/blog/public/article/67da7762.html","f8fd077c9b969a91fe614a2b8b4dc5f0"],["D:/Blog_my/blog/public/article/683f20fa.html","9141f257854bd755c24be53cb38e654b"],["D:/Blog_my/blog/public/article/76783ca1.html","f48ee56103e94dba59990b7b9f6261bc"],["D:/Blog_my/blog/public/article/7758c0ce.html","253c69e60275185ffdb19d5a2798a1da"],["D:/Blog_my/blog/public/article/7a56c169.html","c7e51d4c8716aa5c33236059f56d035b"],["D:/Blog_my/blog/public/article/7d561955.html","9ba14208d20aca79f1db5c9e20675ae9"],["D:/Blog_my/blog/public/article/a0595b99.html","5628d0f40f64282928c4d5d90ea3d7a9"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","3a155f95284cd65b198a62a617f60169"],["D:/Blog_my/blog/public/article/be7f81a3.html","32b0a7db819ffccf794f2cccef4f0466"],["D:/Blog_my/blog/public/article/c386a086.html","7892600c9d6c669e1c013e91b3e15b23"],["D:/Blog_my/blog/public/article/c9c0e075.html","a055b8e71bb79fae3aad20d547cbe215"],["D:/Blog_my/blog/public/article/d080f90f.html","0b2820d976190547a74f7a6d44e1cedd"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","cdfc18b1e257718cfad00caa393f096d"],["D:/Blog_my/blog/public/article/e21e4e82.html","1122c0055cf067e2c7041f3999197447"],["D:/Blog_my/blog/public/article/e419ec53.html","ae318a9a9bcf4c1a8586059b66b3f4a7"],["D:/Blog_my/blog/public/article/e4efebfa.html","9df2b72fbb3ad60cec92710c19e4084f"],["D:/Blog_my/blog/public/article/eb0fc959.html","e0bd0f91f488329ca36136a40902b377"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","d582f4c49233071d09f16d7846cdfd17"],["D:/Blog_my/blog/public/categories/Android/index.html","af5565ffff515848994a854281310adc"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","08d143c689f5a4cbbbb863dcc5c84ecc"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","a512ded25a5a6d90858d0dcf9d358e14"],["D:/Blog_my/blog/public/categories/index.html","c018079f7f466bcce3df640715ea9a75"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","738d070540e87cbb8e4b4bb34ae2a078"],["D:/Blog_my/blog/public/categories/后端云/index.html","fdffeca943ad175e9ec33c80a2fcf9c3"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","314e262ba45790a6a534cca5e7d5b392"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","dafa8d6acbcee73f9139d838312a434a"],["D:/Blog_my/blog/public/categories/百度云/index.html","7db75ffe1dff9e3d1e5de9b605f26144"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","970e305f3c7512c0983e6540e2bd362c"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","b03ce1502489f379d210a20133c23b35"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1c4da19eae61e200ff0d35735f3d5414"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","3aeeb1972134fa86f92097c795582e8d"],["D:/Blog_my/blog/public/music/index.html","d69b78f975f413e0863d2a7422a84985"],["D:/Blog_my/blog/public/page/2/index.html","68100911ed3d5fcb7ebb621ba2b9f00f"],["D:/Blog_my/blog/public/page/3/index.html","6375a67c155cb842e903f9bf3768312c"],["D:/Blog_my/blog/public/page/4/index.html","aa3ab6e2603f4a28d530644858b640b2"],["D:/Blog_my/blog/public/page/5/index.html","4fa961ddd43640be612bf1f1ad61a132"],["D:/Blog_my/blog/public/tags/Android/index.html","71544487cf007e4e210446517fd18e22"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","22927100ca07ed3fafebb6592231f727"],["D:/Blog_my/blog/public/tags/Java/index.html","83cd35e3e3a581b6173ad47af52dd69b"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","3e6d07b9c5e7bbe0ed398a41f07b6224"],["D:/Blog_my/blog/public/tags/bmob/index.html","2e9e592619a8884d6c2ff45e4a7df846"],["D:/Blog_my/blog/public/tags/coding/index.html","d363a6f595fe3ef998c269fa05f2b336"],["D:/Blog_my/blog/public/tags/github/index.html","8e2c61aeb020bf37ed330b0ca3438180"],["D:/Blog_my/blog/public/tags/hexo/index.html","739c253bad0287c6ecaed4bb857c730e"],["D:/Blog_my/blog/public/tags/index.html","cb310434ab3180073200c148a9144ef2"],["D:/Blog_my/blog/public/tags/leetcode/index.html","2ebed718569239ddd247cd3122985b95"],["D:/Blog_my/blog/public/tags/情感分析/index.html","4e12b2c00ba25121132d54b69d3a7052"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","a047dcab5e2ce558d3013f2b061a5aaf"],["D:/Blog_my/blog/public/tags/登录注册/index.html","39274f4e666bb09fbfaf69d76d53bf7f"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","84c545ebae8b39852c6efc9e6b904176"],["D:/Blog_my/blog/public/tags/笔记/index.html","1a002e7697e2db09386a7715fa754ea5"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","a07257c2310e960720319156457db372"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","84a5f014eb81e2167b54c34149f68f34"]];
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







