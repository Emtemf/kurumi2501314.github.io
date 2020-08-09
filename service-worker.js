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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","0a9018b2066f379ce3e7f506e4862867"],["D:/Blog_my/blog/public/Gallery/comic/index.html","208680479bcd25d1b404f4d4edbad982"],["D:/Blog_my/blog/public/Gallery/index.html","aaeacf77f7fa11f5f89a80a81367f983"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","907c7ffdf9178825d3adb27f4c5f9172"],["D:/Blog_my/blog/public/about/index.html","56ecf5fdff1f576b99c47fc02b40d68b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","12ea7ca8d74453436c6e6099916e2c08"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","d66c3db2033cafd93d201deb81d1c679"],["D:/Blog_my/blog/public/archives/2020/08/index.html","7e8ee6a0853a75d935a54542cfc353f8"],["D:/Blog_my/blog/public/archives/2020/index.html","462c012bde528044ec5c26e4b171a317"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","fd4cc303b6425d4800aaaeaacfd6dcd7"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","2a424152da1ebebe8fc1c82d722508fe"],["D:/Blog_my/blog/public/archives/index.html","37ae18dcc747680605b69df463b4d3c6"],["D:/Blog_my/blog/public/archives/page/2/index.html","e7f6c46d52f01eafb056a769add56f4c"],["D:/Blog_my/blog/public/archives/page/3/index.html","5f40f0085d886c5e01b94456e59cbbea"],["D:/Blog_my/blog/public/article/1811f8b8.html","0b0497c31b4d9c601c8fb7997df3c29e"],["D:/Blog_my/blog/public/article/18e57658.html","7c35f86316af79ac226c6e55642efea1"],["D:/Blog_my/blog/public/article/1e64d194.html","16c8d6a1448b878583dbaca572d9be62"],["D:/Blog_my/blog/public/article/21f50898.html","20c485409bee93f2a525ec588ade0e14"],["D:/Blog_my/blog/public/article/234762cd.html","ba277eee7aad7c5600fa4ccb6bcfacb3"],["D:/Blog_my/blog/public/article/2b97b46c.html","3306b6710990f6747835d1f992d8d184"],["D:/Blog_my/blog/public/article/358ad26.html","b85be9cfcef36024ecb6a669a5b21c8a"],["D:/Blog_my/blog/public/article/541a8071.html","fb203eecca2bd1e9dc603eb5eca683cc"],["D:/Blog_my/blog/public/article/54412d2c.html","b6fdbb0bb82b450df2262231703bffe8"],["D:/Blog_my/blog/public/article/5c1827a.html","fa118ff4a9725d2774377233590d50ef"],["D:/Blog_my/blog/public/article/5d6f1d17.html","4dc6be789ca76cb72acaf6e8f2a58236"],["D:/Blog_my/blog/public/article/5dcc92c.html","8124fea0ea1ab5565a75de55ad7ebe5a"],["D:/Blog_my/blog/public/article/67da7762.html","e9395496e8f6a50a88f1ee784db939cd"],["D:/Blog_my/blog/public/article/683f20fa.html","171b08a498bbc1f129b1d3ed3dbaebc7"],["D:/Blog_my/blog/public/article/7758c0ce.html","47999851449f1b23020bbaec42f54cf5"],["D:/Blog_my/blog/public/article/7a56c169.html","1d00ac75562ebb216e844b3128b4861b"],["D:/Blog_my/blog/public/article/7d561955.html","71295db20f9c6fc2bee1da7b2134ec12"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","5b0674ed1c1bcf0f668f29f156e50ed4"],["D:/Blog_my/blog/public/article/c386a086.html","c2467a0f009dbdb7bdfb293a80c17df1"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","71e73df29b6b1c32e337703b1a88d56f"],["D:/Blog_my/blog/public/article/e419ec53.html","9683999c2a17475e13d1c5a9bac99660"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","3d4f1a60b040d69f2ed4c208d5919983"],["D:/Blog_my/blog/public/categories/Android/index.html","4c96a73ee04157699f1b164a4a800b1b"],["D:/Blog_my/blog/public/categories/index.html","7f9eab2054f51fed40709dbc5c6e3e94"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","3bc2bf64d42d77f9a6e932a6eaea6f76"],["D:/Blog_my/blog/public/categories/后端云/index.html","e25ff5bde717f1d37190055da5f192c1"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","e6e435e5fa9e4f900106150211317716"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","833e960696db32085660d273193445b8"],["D:/Blog_my/blog/public/categories/百度云/index.html","5c4852e5f21d62503074722a84a62bad"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","fe0bcec8e8f0aca6d08105ffad01e6f8"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","618627f0a96a1f5dd8b9b91ac34bc8a7"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","917be97d22a9eb12e70fac4680a7e078"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","4f54baa2932bc7e0a49b6851b4bdeffe"],["D:/Blog_my/blog/public/music/index.html","9fe9df2e066cb2403c6a2d7865dba46b"],["D:/Blog_my/blog/public/page/2/index.html","2a4d19e42ecbfbfabc2c5ab5f48c5431"],["D:/Blog_my/blog/public/page/3/index.html","91cb779eab499aab89d7f75534e3dd6e"],["D:/Blog_my/blog/public/tags/Android/index.html","292db37ead40f9cae56fa71e21b58876"],["D:/Blog_my/blog/public/tags/bmob/index.html","1125d34fae93a6656a1ab0ad4ebf4ebf"],["D:/Blog_my/blog/public/tags/coding/index.html","1cb8eca6e334f028cbf6c7bb55786cdb"],["D:/Blog_my/blog/public/tags/github/index.html","7c692eadd70c85711d05cbee6a813983"],["D:/Blog_my/blog/public/tags/hexo/index.html","48ed672ce790f5a13cbd80041120ab75"],["D:/Blog_my/blog/public/tags/index.html","8bd60561d14c08aebda038527154c52d"],["D:/Blog_my/blog/public/tags/leetcode/index.html","76d7e890b20303aae761d32acc6373cc"],["D:/Blog_my/blog/public/tags/情感分析/index.html","fb3de879cd5f06ef8ac7b3fad6b7d005"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","646190a49a2556ed0f201b6071fbc10e"],["D:/Blog_my/blog/public/tags/登录注册/index.html","d45de86b763daf9a979715bb42148279"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","167c9703a7cb771ee0c9af85464c550c"],["D:/Blog_my/blog/public/tags/笔记/index.html","cf7159419c8aab0951ce229125828763"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","b2d33089f640e2987310e9feba5d98e9"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","b68cf822dbb60b8a6d2b76351da5cc06"]];
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







