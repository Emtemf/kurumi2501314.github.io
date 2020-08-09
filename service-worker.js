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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","e3047677b8a53940213cedef0d37c408"],["D:/Blog_my/blog/public/Gallery/comic/index.html","dfd2b33fd1c51529d50946dffd759dc8"],["D:/Blog_my/blog/public/Gallery/index.html","0bbcb3c331dcc3344171957096b710cc"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","de2c1ed54aa4ce10b29a9759efa3a26f"],["D:/Blog_my/blog/public/about/index.html","1b30dc861a13288cc7123586bed79e2b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","dbd4ab7f48b755266dc1264d2df60410"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","13bbc9729273542189a0e3f0cf518243"],["D:/Blog_my/blog/public/archives/2020/08/index.html","24467aeeef40d01c9cccefc4dd972257"],["D:/Blog_my/blog/public/archives/2020/index.html","2a95354de6f24b5d50cbaa8310af9751"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","e0fcb5e372d6f4a13c02cbf8f43eab53"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","ca3162359e9a51aeff9bde09662ba712"],["D:/Blog_my/blog/public/archives/index.html","5146885c963fbd1c979937611bcd9a18"],["D:/Blog_my/blog/public/archives/page/2/index.html","589643f3d9633697452a2db5c9ab0062"],["D:/Blog_my/blog/public/archives/page/3/index.html","50303896a2ffb3b4856d0dbf6658b363"],["D:/Blog_my/blog/public/article/1811f8b8.html","159be927e002634249e5381b0144b116"],["D:/Blog_my/blog/public/article/18e57658.html","e909cff076eb5baab51b98615b3b1340"],["D:/Blog_my/blog/public/article/1e64d194.html","8e34d2b371244ca8a383e8c509ef08d7"],["D:/Blog_my/blog/public/article/21f50898.html","2531c3c1252542cb97c8d4e831bd2bc1"],["D:/Blog_my/blog/public/article/234762cd.html","54bc124737b1277eb267f79ac08ecebb"],["D:/Blog_my/blog/public/article/2b97b46c.html","b8602550bce445ae7f5c914437b7522b"],["D:/Blog_my/blog/public/article/358ad26.html","a031051166cbf7ac8d73bd36c7ee7527"],["D:/Blog_my/blog/public/article/541a8071.html","86f1ca969560b8bf10d95fee51854fc7"],["D:/Blog_my/blog/public/article/54412d2c.html","9e565cb30ca891517cb61f7eec8ebfd2"],["D:/Blog_my/blog/public/article/5c1827a.html","39349a44900924b7f2054bba3fe6e56d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","2fb6b1d2b1226927598e5e1b53416fa4"],["D:/Blog_my/blog/public/article/5dcc92c.html","3853ab407a3b96aa1aacdfcc8e0e9a21"],["D:/Blog_my/blog/public/article/67da7762.html","38e2ec5e2dbdfc499b029b7e8ac97501"],["D:/Blog_my/blog/public/article/683f20fa.html","ed256446bcac22055f95ba32d27f453d"],["D:/Blog_my/blog/public/article/7758c0ce.html","0a759d7bf8fc8d93ef84e1f5e9cc2bd2"],["D:/Blog_my/blog/public/article/7a56c169.html","963a2cda8155fbc34c52a3a8cd31b7ea"],["D:/Blog_my/blog/public/article/7d561955.html","fdda1b87691cde748f9414176469e52b"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","0f7ba7d45738e58f1453504c36281ef1"],["D:/Blog_my/blog/public/article/c386a086.html","1c2b3e5cef95d6c7551f538bccff57b1"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","e3f05086e4f0dbebea913287c744ab3b"],["D:/Blog_my/blog/public/article/e419ec53.html","cfbd4cb92bd650106030c03b266a28fc"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","9a406b54bd86416440649c5b233b1748"],["D:/Blog_my/blog/public/categories/Android/index.html","f12c9aa3bb54fb962ac896635cec1eba"],["D:/Blog_my/blog/public/categories/index.html","f3a6a7e1de18ccfef47460fdbc581a29"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","fc3d6f6411d03d503690c1faa9454f08"],["D:/Blog_my/blog/public/categories/后端云/index.html","01b54a2b31bf3d0df643de00b1307a5e"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","199744a3d1185ac3d1e212055ba647d1"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","965b8d538e918dbf0f01730f6eb633d4"],["D:/Blog_my/blog/public/categories/百度云/index.html","539910b68f33906b9d7a212a221bb68c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","26c29ae339d4f39bda8416668bdc1366"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","618627f0a96a1f5dd8b9b91ac34bc8a7"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","cd9536681e52c94d8bf8148e76b09419"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","a8f72e3481f1a56a40abad590d0941ff"],["D:/Blog_my/blog/public/music/index.html","7631054488b4bbb771d4900e821de9ad"],["D:/Blog_my/blog/public/page/2/index.html","207052a5a783b3a86ca0ab4776de62a6"],["D:/Blog_my/blog/public/page/3/index.html","2489b73b55be28d72386376dec716202"],["D:/Blog_my/blog/public/tags/Android/index.html","d0a28a8f02f63c49abd1690cebea82a8"],["D:/Blog_my/blog/public/tags/bmob/index.html","e7b92b86caf1d7c2be23d5f916d7dffb"],["D:/Blog_my/blog/public/tags/coding/index.html","9784883e7cdf44d2aada1a49cf30c95e"],["D:/Blog_my/blog/public/tags/github/index.html","5f8ecea55ee9c432d5f65ee1d442cf34"],["D:/Blog_my/blog/public/tags/hexo/index.html","0c79f9b08175d7522448662fc82a86bd"],["D:/Blog_my/blog/public/tags/index.html","b16c227c1e0eb1eab479d5fb9e2f97f4"],["D:/Blog_my/blog/public/tags/leetcode/index.html","5cea99e8813a7c335f7442891f1baeaf"],["D:/Blog_my/blog/public/tags/情感分析/index.html","fa4005b62cfc3cabf5526b2be5d336ed"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","1035d6961e5076b6342b979f67c4ef4a"],["D:/Blog_my/blog/public/tags/登录注册/index.html","a5c0218839444b3cc810f7130e522038"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","0658c5aa6cd88c704db46bae267087d0"],["D:/Blog_my/blog/public/tags/笔记/index.html","9348e3cfba935ff543fe61a01a232fb9"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","c8b601b533ac5680798dc230cf9d467d"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c3871bf9384e6449c5f15c257a911ef2"]];
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







