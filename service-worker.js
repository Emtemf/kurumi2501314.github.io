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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","3540077fcd018d4e216457a108439153"],["D:/Blog_my/blog/public/Gallery/index.html","a44b325c8d6f854edfbf780439da1dd4"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","0ef5b610bdc44b595d3dda0b0fcda392"],["D:/Blog_my/blog/public/about/index.html","b2a4645a651dac980bceaa47cf407016"],["D:/Blog_my/blog/public/archives/2020/07/index.html","91fd3cbbfedcc4453ed085cb02001370"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b942c8bd023bd30301efa9e4e0098212"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5a61e94c7a6c2383c28dbb4eb66fc8c9"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","63c882ede54a83a5dddde2bf6c6ec52e"],["D:/Blog_my/blog/public/archives/2020/09/index.html","0c17a68cce2c2f586b741099d098dd48"],["D:/Blog_my/blog/public/archives/2020/10/index.html","f76955de863b9176da05ed24a0339ce4"],["D:/Blog_my/blog/public/archives/2020/index.html","b8a9113064b3cdf76168f0729c33286e"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","1e10f3a542a5f61d4f9f5ca7881a8894"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","9f5be6575d1cd817d0ff07c3b810daa4"],["D:/Blog_my/blog/public/archives/2021/01/index.html","cc91e33620f6379e60605e491026ba32"],["D:/Blog_my/blog/public/archives/2021/index.html","d2989ae6123bf61f57568140384e6116"],["D:/Blog_my/blog/public/archives/index.html","c63241fff073e679d7a10a0f7996014c"],["D:/Blog_my/blog/public/archives/page/2/index.html","bec8dd9fd210cdcb9df77996febfcff9"],["D:/Blog_my/blog/public/archives/page/3/index.html","f3ed6362276b4e0aa299f20d4715d893"],["D:/Blog_my/blog/public/article/1811f8b8.html","6540afcfe47bcdeea2266136b1e722f3"],["D:/Blog_my/blog/public/article/18e57658.html","42ce62bcb66ba800618688eccef3272a"],["D:/Blog_my/blog/public/article/1e64d194.html","f284a08c4ab1cef611a653f7e2e0453f"],["D:/Blog_my/blog/public/article/21f50898.html","2c6ea67cf78818c6f7ccf0c57d7aa56a"],["D:/Blog_my/blog/public/article/234762cd.html","6a604a19bcd07192c8dca4c7a16167f5"],["D:/Blog_my/blog/public/article/2b97b46c.html","ab49bd1f8f4fec198ba743b84638648f"],["D:/Blog_my/blog/public/article/358ad26.html","2ca0c6e969d28dd63e3e273714b07576"],["D:/Blog_my/blog/public/article/4de36022.html","330acfa88740b7248b1c5a308fcc2b5f"],["D:/Blog_my/blog/public/article/541a8071.html","d7eec172e36225a456bbc834582aee79"],["D:/Blog_my/blog/public/article/54412d2c.html","a4b0d4370875d9755d4809759475d5dc"],["D:/Blog_my/blog/public/article/5c1827a.html","8ad10a52895958d316d75f5787009bc8"],["D:/Blog_my/blog/public/article/5d6f1d17.html","7b9872e48b5bb4eafb00e9df2ad7eca6"],["D:/Blog_my/blog/public/article/5dcc92c.html","4018a86f0db9edb79db76d49a4921b5c"],["D:/Blog_my/blog/public/article/67da7762.html","bbd7aff0ea1d7f5db3f3d6387d41bcff"],["D:/Blog_my/blog/public/article/683f20fa.html","15ccb53cd29437023bc38a02f094ee78"],["D:/Blog_my/blog/public/article/76783ca1.html","02be52281b732b7a460c643c5a37c68d"],["D:/Blog_my/blog/public/article/7758c0ce.html","f1bd807534136b725477a25176abe23e"],["D:/Blog_my/blog/public/article/7a56c169.html","c4d0bef68702bd23d78af950ac2cc2e6"],["D:/Blog_my/blog/public/article/7d561955.html","07f84c3693f74a20fe9ee35d334f2c80"],["D:/Blog_my/blog/public/article/a0595b99.html","eaa928c2bf82da13dc5e3b3a123cb5d7"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","f31a59e41435453bee7e15461396de5f"],["D:/Blog_my/blog/public/article/be7f81a3.html","773ea0b564a9eb6445bec5b841a8671e"],["D:/Blog_my/blog/public/article/c386a086.html","4f48009af8fd9376b1e0d8a5fe9a2d68"],["D:/Blog_my/blog/public/article/c9c0e075.html","a11c3315b0e313189093b91515d6e587"],["D:/Blog_my/blog/public/article/d080f90f.html","7443b8c314a10bd57e14da427ccc486c"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","45d07079adc3666e07c2ed8669032ba3"],["D:/Blog_my/blog/public/article/e21e4e82.html","dce351311c6aaee2d3bb2669411985d4"],["D:/Blog_my/blog/public/article/e419ec53.html","3efbef01d8e3fa480087414452451a27"],["D:/Blog_my/blog/public/article/e4efebfa.html","5afedf39af76ab1c9608d3518c818038"],["D:/Blog_my/blog/public/article/eb0fc959.html","1125a6e53aedecdd7a64cdad879c9e7a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","cc5da42d1a1514a4267f61c45e27f625"],["D:/Blog_my/blog/public/categories/Android/index.html","40395c72b99e6a009e0e9c373dfc9151"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","d3f4720d1c8450f757624a830ba24bae"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","783ea89e52113faad3c49febaf941b1d"],["D:/Blog_my/blog/public/categories/index.html","1b1a9d9120e554da6d845dad34f8c9a4"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","233c33782e4c7afa56ce1fc71327cff5"],["D:/Blog_my/blog/public/categories/后端云/index.html","2717f220700ff044cc361a40a5505f74"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","f1f99cd2eb36f42ae77a08f9ae6e6616"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","7b8d1915c183c3dafad53f358eb88b13"],["D:/Blog_my/blog/public/categories/百度云/index.html","7177ed9a778c4a157732dacbfa28efba"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","5eeeebab81e69a2b7a4a1bfbc360bf81"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","b03ce1502489f379d210a20133c23b35"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","30080a9ed8ac7abe895a78f29216886a"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","f91f749b1f967bf03d51099ed01d6eec"],["D:/Blog_my/blog/public/music/index.html","f9230b158aa2d5991d8868220fc1621d"],["D:/Blog_my/blog/public/page/2/index.html","62c12b4d41a6e3e76fb73007972c4e4f"],["D:/Blog_my/blog/public/page/3/index.html","94b0f025210741eeb9d93757cdd866a2"],["D:/Blog_my/blog/public/page/4/index.html","9281ce00324ea0ebfb70cdbd4758f8cd"],["D:/Blog_my/blog/public/page/5/index.html","1b8dd8c7ce86f993fbdc4bcf70a3cbfa"],["D:/Blog_my/blog/public/tags/Android/index.html","a9059e15bd83b95c1dfcc6a07ad0b753"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","229c189fa25e2258ec13b1225c75433c"],["D:/Blog_my/blog/public/tags/Java/index.html","8bf33bbc8e4a10b7f50c8a7708b0210c"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","4b49684f879dc40568b858a155ca8aa3"],["D:/Blog_my/blog/public/tags/bmob/index.html","0952e9282f8be52bfc6761bb39be1d0b"],["D:/Blog_my/blog/public/tags/coding/index.html","0dca079b281fe66997f98c97835dfffe"],["D:/Blog_my/blog/public/tags/github/index.html","dbc1c657f1dd585ef0eb4efec309acad"],["D:/Blog_my/blog/public/tags/hexo/index.html","372607fe45cb175e95e3ae81b22d5c2e"],["D:/Blog_my/blog/public/tags/index.html","41ae7a58bed9584bf656fce79bd72b3b"],["D:/Blog_my/blog/public/tags/leetcode/index.html","487810a650651a60f3b195cdb0351ec3"],["D:/Blog_my/blog/public/tags/情感分析/index.html","d90b3733a99c68ce59ddaef64d14579a"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","9254dba394974182abb62ac342a9016f"],["D:/Blog_my/blog/public/tags/登录注册/index.html","c716ed9c119e4565d6d6ada563f537bb"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","3f47aeb1caba86184578395508ad5ad3"],["D:/Blog_my/blog/public/tags/笔记/index.html","23b694d0267ddd9202c8121a7777d779"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","f4987e86928c38e4ed3879cae3791bc6"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3293698a910dba168c5c5910a3f827b7"]];
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







