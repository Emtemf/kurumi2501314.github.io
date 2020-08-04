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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","b5851b7c268ddf7e5e37b04ee3902a95"],["D:/Blog_my/blog/public/Gallery/comic/index.html","222c1a6047bfcba2f4194e9dc3b30638"],["D:/Blog_my/blog/public/Gallery/index.html","00cd24150dfebbb18c7876e4bd96472d"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","6ef8ededaaf03506f20f7d01b55f74dd"],["D:/Blog_my/blog/public/about/index.html","774729d991c557f4bfb4d8a17728b06b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","71556f77eb5beb2bed7be1b8f73bff1a"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","6ca94d00f5ed6851ce0f766761f09481"],["D:/Blog_my/blog/public/archives/2020/08/index.html","0502d3814aca6dcf1952a2b95f4cee57"],["D:/Blog_my/blog/public/archives/2020/index.html","b3e18208c7d5ca6d7bf4e2e189ce9fa2"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","10c02f4d079863edc1290212271402c5"],["D:/Blog_my/blog/public/archives/index.html","3ba137d1a0bd6464f02c5c86d7b024fc"],["D:/Blog_my/blog/public/archives/page/2/index.html","6acb6a9805db31149ac4ea6d7f965508"],["D:/Blog_my/blog/public/article/18e57658.html","876776c7e27050556fd17c70c689beed"],["D:/Blog_my/blog/public/article/1e64d194.html","c5f3ab9389775643a6db88cbd6c78bbf"],["D:/Blog_my/blog/public/article/21f50898.html","767d76c85fefcf5549626ad5ea653c01"],["D:/Blog_my/blog/public/article/234762cd.html","5f482bd73509e3431e449098764dca17"],["D:/Blog_my/blog/public/article/2b97b46c.html","016152fbffb617858009d6d2f83703e4"],["D:/Blog_my/blog/public/article/358ad26.html","cb910be5f7068c4fc0611ef58ffca4b2"],["D:/Blog_my/blog/public/article/541a8071.html","bb72cb99564b98c166fadf360a37d40a"],["D:/Blog_my/blog/public/article/5d6f1d17.html","876b8972b94ba4fbca35944db43614bd"],["D:/Blog_my/blog/public/article/5dcc92c.html","98f7bd7cf3221704ed822845a3417720"],["D:/Blog_my/blog/public/article/67da7762.html","016f196312bf8ca6a781bd4d726ec5a5"],["D:/Blog_my/blog/public/article/683f20fa.html","205a70c9991164652a5a0ded4df37080"],["D:/Blog_my/blog/public/article/7758c0ce.html","1a89046e390369a9b719760823744c39"],["D:/Blog_my/blog/public/article/7a56c169.html","8e4bcf0fda8640bf895c5a367c2a56cd"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","657ae6b939de4e13e9dcd7ae8f94ea7e"],["D:/Blog_my/blog/public/article/c386a086.html","4c43cb6a36f7fc177ec49c222fc5e418"],["D:/Blog_my/blog/public/article/e419ec53.html","4f50f0ffd6f7afc76db54a525fb20439"],["D:/Blog_my/blog/public/categories/Android/index.html","f67eec0cf6b83bf1f96358c52609d3a7"],["D:/Blog_my/blog/public/categories/index.html","f5d5e3de545ba4f7b6dd47ff345121cf"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1b48f0865b5b58c92e4cfa383d58cbf8"],["D:/Blog_my/blog/public/categories/后端云/index.html","e2597669f18179fea1a2b8ffa1800894"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","1d89a3907f669f3c96235e15e596e607"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","d5c47158ff6ff2bde31e975ff1c37bde"],["D:/Blog_my/blog/public/categories/百度云/index.html","bd0932c349445e5f03eda69109fde5f5"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","3ae55a82cbb2b192954843fd7bdeb00d"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","6276940f0393072bf14fd06e47046403"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","4a27fa3e4caf8211e6995aa8ff202b1b"],["D:/Blog_my/blog/public/music/index.html","fd64d1150cadf1b8ac960fbab6009c3f"],["D:/Blog_my/blog/public/page/2/index.html","d02158ae2de7bbaea802e43892c1a912"],["D:/Blog_my/blog/public/page/3/index.html","cda7f21257a874e7c96f4eb57061bc01"],["D:/Blog_my/blog/public/tags/Android/index.html","903683e312b36ecdd1cb264762899506"],["D:/Blog_my/blog/public/tags/bmob/index.html","8874dc4dce551e0d1303da5a34559094"],["D:/Blog_my/blog/public/tags/coding/index.html","45cdd303dd46d8680cccc6e60b6a9e26"],["D:/Blog_my/blog/public/tags/github/index.html","6db79e5df0bd5168920d20723b6dd7e7"],["D:/Blog_my/blog/public/tags/hexo/index.html","e414b2b0d01741ee3a9137b52848cdb6"],["D:/Blog_my/blog/public/tags/index.html","690dbaa221d81d4665f8b06a9486b3bb"],["D:/Blog_my/blog/public/tags/leetcode/index.html","5c1d55cdd372819b09592f087c7fa691"],["D:/Blog_my/blog/public/tags/情感分析/index.html","aba5c90a8930a00c4526415b0f79cf64"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","803f42404167c7edcf1849ef43acce42"],["D:/Blog_my/blog/public/tags/登录注册/index.html","e5d40086cb69c3de9c0e7b968e19d70b"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a129756bbf315763cb0642edd4c1e0f0"],["D:/Blog_my/blog/public/tags/笔记/index.html","9da3610191811cac563b7875e681ac20"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","9bb6eb1cf6a5ed68bca2d70b55b5ccc2"]];
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







