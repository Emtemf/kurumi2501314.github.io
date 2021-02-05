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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","12889b1ba9725167d170dd9eb4edaeab"],["D:/Blog_my/blog/public/Gallery/index.html","921126307ae6e8d9d2a5289c8c67607e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","8e3da7edb131bbd0d544c902b6e4af6e"],["D:/Blog_my/blog/public/about/index.html","5f84c0f99ccc44a33138d384a9306aa0"],["D:/Blog_my/blog/public/archives/2020/07/index.html","a5f7588043d1bec7d8987280dd457b36"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","930f7792d0107d7d36c6759667d70def"],["D:/Blog_my/blog/public/archives/2020/08/index.html","a0abab6c29bc873e7785c6ff2335fde8"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","1dd7e66570242b8b81beec36073f38e4"],["D:/Blog_my/blog/public/archives/2020/09/index.html","ba6492c3ae96cb25594964c32197733c"],["D:/Blog_my/blog/public/archives/2020/10/index.html","cb5aa09063350302054a80388703a541"],["D:/Blog_my/blog/public/archives/2020/index.html","a69c10a2a92bfef9dbff14b0e8c492bf"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","d996ad339f3f299e082ddd0fc8de7933"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","b23d3a03dd3308105065d453d66d627e"],["D:/Blog_my/blog/public/archives/2021/01/index.html","2bb84b14d95c29d7b78aa3e4071ce8e6"],["D:/Blog_my/blog/public/archives/2021/index.html","e236f9a655a4b965128ec51ca137415e"],["D:/Blog_my/blog/public/archives/index.html","f241a83f55a06017ee6addaf859747b6"],["D:/Blog_my/blog/public/archives/page/2/index.html","b03512d7e576b325d2cff28b34b48ad3"],["D:/Blog_my/blog/public/archives/page/3/index.html","1c6022fff753417392feafbcac692fa7"],["D:/Blog_my/blog/public/article/1811f8b8.html","cb92857b7606847037c5105b36309856"],["D:/Blog_my/blog/public/article/18e57658.html","c765cbbe7baa6d0dca2cbe9fad95d79b"],["D:/Blog_my/blog/public/article/1e64d194.html","822b90a44e40cd7a043c1e54ae92947e"],["D:/Blog_my/blog/public/article/21f50898.html","f43d4c940de754de49e9a21d259bdca2"],["D:/Blog_my/blog/public/article/234762cd.html","f8234e19fc9cc74ebcb90296760ff7e2"],["D:/Blog_my/blog/public/article/2b97b46c.html","e66c3882aafeac013cb1c8282ce323d7"],["D:/Blog_my/blog/public/article/358ad26.html","09f69aaea99a9eb2be9257ff887c6f10"],["D:/Blog_my/blog/public/article/4de36022.html","44debf4c43fbc1352cfbd165be894ee7"],["D:/Blog_my/blog/public/article/541a8071.html","5234e32e6fab1eb4972021bcc7f4ae28"],["D:/Blog_my/blog/public/article/54412d2c.html","1193c2c54b7d1d98be2b44606a40d75b"],["D:/Blog_my/blog/public/article/5c1827a.html","9b3291035b25777266ab9e05e4308d0a"],["D:/Blog_my/blog/public/article/5d6f1d17.html","df824bef9815bba04dd007df088ba820"],["D:/Blog_my/blog/public/article/5dcc92c.html","be492116c11426f14c973027216aade2"],["D:/Blog_my/blog/public/article/67da7762.html","c216a25fddaa77fb57b9bb04cefefd0a"],["D:/Blog_my/blog/public/article/683f20fa.html","3bbb155da8a55764b1e6ff69ba7d9aa0"],["D:/Blog_my/blog/public/article/76783ca1.html","1a661bdd07f52396d7eb37f3c0c77e54"],["D:/Blog_my/blog/public/article/7758c0ce.html","b68ec4b087350418985263f25d39d02a"],["D:/Blog_my/blog/public/article/7a56c169.html","6e811927a9f842e274b7d602e511e387"],["D:/Blog_my/blog/public/article/7d561955.html","5d93829290a3652940622451d391ac28"],["D:/Blog_my/blog/public/article/a0595b99.html","93c30c60110eddb14cb720258e4f2725"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","3e6ec916369810aba64dba1054791108"],["D:/Blog_my/blog/public/article/be7f81a3.html","22614695e9a4798ffec261dd869bbb2a"],["D:/Blog_my/blog/public/article/c386a086.html","ecc1c72ac038da532f2f4969e09d7d42"],["D:/Blog_my/blog/public/article/c9c0e075.html","9a783197987911abd2fa036b38cb96c0"],["D:/Blog_my/blog/public/article/d080f90f.html","c3d45c07c82c16733975220190086248"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","836f1b4d2a7475b22ac2a41ad70d108f"],["D:/Blog_my/blog/public/article/e21e4e82.html","875c159e67abf4284477b911d8adce94"],["D:/Blog_my/blog/public/article/e419ec53.html","04557b49ac6c07fefa9a87cc47864543"],["D:/Blog_my/blog/public/article/e4efebfa.html","56d51d7351eff8eb11c8d35eea2ad6a4"],["D:/Blog_my/blog/public/article/eb0fc959.html","56269b24a1cc4dd2cf3830eb22ac0259"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","cf986ad85195a0628123e6abdde5dd49"],["D:/Blog_my/blog/public/categories/Android/index.html","569a7c8c13e3aa7140d4956f3de55896"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","c3ac275e20fa2030e1bc0f381f83bab6"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","1f9107577b2cb0117fa5e2b7f17437b5"],["D:/Blog_my/blog/public/categories/index.html","354f99b26fe0896e306b6cef56cc8146"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","891a2a1efc769941140e5bc2d9b10541"],["D:/Blog_my/blog/public/categories/后端云/index.html","1a2226abfff0a7b81d17f3019bc4e39a"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","b912f46b6209293be6398a6ab8f0d3cb"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","50bd5576efcc19a6f08f65cbfafdb0aa"],["D:/Blog_my/blog/public/categories/百度云/index.html","616ccb573cf33e76e79f5212773c1dfc"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","de63e9da918d1320edeaa49799bd4ebf"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","b03ce1502489f379d210a20133c23b35"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","74d28d6b86f4887b110b222e932cef59"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","05a7d45f8b01c35d91f2fa37335d2bd3"],["D:/Blog_my/blog/public/music/index.html","551154fe643c556579a1bfeaf304cbbc"],["D:/Blog_my/blog/public/page/2/index.html","584de3315fcd417eb453735c48f1790b"],["D:/Blog_my/blog/public/page/3/index.html","24462f41054d39026a43d4d3f31fd914"],["D:/Blog_my/blog/public/page/4/index.html","605162cadb23cbcc9c4fac7a7d10132d"],["D:/Blog_my/blog/public/page/5/index.html","205c8f669b6114267b5f8038183f5149"],["D:/Blog_my/blog/public/tags/Android/index.html","d67d11cab08fac2d336f7d53ad06b4bf"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","dc1efab9db724f94f31aacf5e0774a2a"],["D:/Blog_my/blog/public/tags/Java/index.html","3a6563153aaeef6c08a93d7fd9083d42"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","ea8401b0301fbf29d96f01d452456072"],["D:/Blog_my/blog/public/tags/bmob/index.html","c89bb80e5834c6ca088edfd52704d627"],["D:/Blog_my/blog/public/tags/coding/index.html","792996254f2f1990dc79de92f79dc1ac"],["D:/Blog_my/blog/public/tags/github/index.html","816f8ce0bd7e158720158c89d020ccfb"],["D:/Blog_my/blog/public/tags/hexo/index.html","adeca6072c14c06a378f0f09e605143e"],["D:/Blog_my/blog/public/tags/index.html","0b11e9a809a4fddf21f581d884bee136"],["D:/Blog_my/blog/public/tags/leetcode/index.html","53f7b641b3554590c8953e8e752cb5ac"],["D:/Blog_my/blog/public/tags/情感分析/index.html","657d80c68ba9fa71ccd0633aa792e756"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","2ea82efd9236945de81175c29a92c838"],["D:/Blog_my/blog/public/tags/登录注册/index.html","56d5a801730a39953d7c70e87f51d39a"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","612e53e5cace402421782637d3813b81"],["D:/Blog_my/blog/public/tags/笔记/index.html","f5cddcf1c133329b8b3d0736b64b20b0"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","df674248d895dfecad453b649cae3259"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7797b37d5f2d4addc5861ffb1e4e00f1"]];
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







