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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","9b710fd97c74abb3291fcec9ea656c83"],["D:/Blog_my/blog/public/Gallery/comic/index.html","557f189e2a2d3a8d2d2ce95895ccad06"],["D:/Blog_my/blog/public/Gallery/index.html","83545e814c9e800667755c2d23d31246"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","a8d28c73926f06ccc656bbf71775d3b3"],["D:/Blog_my/blog/public/about/index.html","6ca858a5d2ae3b168985d3d90ebb6e46"],["D:/Blog_my/blog/public/archives/2020/07/index.html","cefa332880f6e9f59c69991bbc5acef3"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","a77224f820bb487b3a3dabe3634d7bdf"],["D:/Blog_my/blog/public/archives/2020/08/index.html","070bd2977d214b57e8ed15afe03c1975"],["D:/Blog_my/blog/public/archives/2020/index.html","16a977ffa37673dc7ea927681ed0245f"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","84f35ac41f64464ab4b290807fca7edf"],["D:/Blog_my/blog/public/archives/index.html","5d007455d4b5e5b93c9121c21eee564e"],["D:/Blog_my/blog/public/archives/page/2/index.html","dfc9a44896a981fd79b630090c86f65f"],["D:/Blog_my/blog/public/article/18e57658.html","fc2719d56e461af2ba4122b4ef6fc0cb"],["D:/Blog_my/blog/public/article/1e64d194.html","ea9777bc3f63abf59fcd1f01770729e7"],["D:/Blog_my/blog/public/article/21f50898.html","805c8248d1472f8cfd007902225d21c0"],["D:/Blog_my/blog/public/article/234762cd.html","c93c454d4c242bfc28f4e3599b8b2a62"],["D:/Blog_my/blog/public/article/2b97b46c.html","2d1d87e87c655cb6194245f7be1e4e8f"],["D:/Blog_my/blog/public/article/358ad26.html","bf2413e4c68b4b77ca8dc6e2181f2370"],["D:/Blog_my/blog/public/article/541a8071.html","365d6f3c323e1ebb6e2434facbbc9eda"],["D:/Blog_my/blog/public/article/5c1827a.html","f21a67cf5201a15ced50e6d8e630bc0a"],["D:/Blog_my/blog/public/article/5d6f1d17.html","b689736d4d02791a5b7779f759bb3ca1"],["D:/Blog_my/blog/public/article/5dcc92c.html","c54689ddfe7897ae644ebe7c1305c820"],["D:/Blog_my/blog/public/article/67da7762.html","72162367f4e2160365453c72087066e4"],["D:/Blog_my/blog/public/article/683f20fa.html","791008225e8b0066798779cfe0281725"],["D:/Blog_my/blog/public/article/7758c0ce.html","402df14f64f4e0ef5cf561e9fbd221fb"],["D:/Blog_my/blog/public/article/7a56c169.html","a647ced1d3672b68e315e91e9b2eb2a3"],["D:/Blog_my/blog/public/article/7d561955.html","2cfef5e11243642e56e178e7aa4e7a19"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","828cafadab31010f4c5991462e10b60d"],["D:/Blog_my/blog/public/article/c386a086.html","afee6c08ea402af5a2501c012392264d"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","1e2e2f161e817e4873274cda6b9206e2"],["D:/Blog_my/blog/public/article/e419ec53.html","5f50305622dd54cacca1e26ad6c18afd"],["D:/Blog_my/blog/public/bangumis/index.html","982c69cba5720d664068c096794ff168"],["D:/Blog_my/blog/public/categories/Android/index.html","c5a800ef1e7bf0317fdd8dfd4b7eb78b"],["D:/Blog_my/blog/public/categories/index.html","ae9a3a7661716b3c0b2b4119259f62a7"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","b1d2eb249b28033a0b45fc35acadebfb"],["D:/Blog_my/blog/public/categories/后端云/index.html","5706418d6adcb72bab3df93e1c6b39dd"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","e26422c47bf4b4726adec4518c4c3131"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","4485d788bb3d126288a66b71761f9b47"],["D:/Blog_my/blog/public/categories/百度云/index.html","8786dd1db274e0bb0a043cb2934b57d0"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","97a37a83d4f623cc1124fc9ba6a064e5"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/gulpfile.js","4a06b158765456f61109acb318bc5411"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","2fb78aac385ee9e089737539507b51e2"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","46c581c69691e46608c116793b8837c2"],["D:/Blog_my/blog/public/music/index.html","7c1db5d9ae88da2c5d6768eff0a67e1d"],["D:/Blog_my/blog/public/page/2/index.html","682e1b938bdf266af911f2d671368e8c"],["D:/Blog_my/blog/public/page/3/index.html","2dc8da9f4a121871bd702bcc8215c200"],["D:/Blog_my/blog/public/tags/Android/index.html","02e67599b71860ed4ff2c87eecdf1cd5"],["D:/Blog_my/blog/public/tags/bmob/index.html","cb7e6d0467451808f2e21d09fd580d2b"],["D:/Blog_my/blog/public/tags/coding/index.html","a39e3f5901ee289766acfc66c56f0c98"],["D:/Blog_my/blog/public/tags/github/index.html","66337f6b357fb0ed1260b7a1093b4072"],["D:/Blog_my/blog/public/tags/hexo/index.html","a1f4ff430759da398452407f01c8f27d"],["D:/Blog_my/blog/public/tags/index.html","9971dbbefbbd6d3f66b75dd924ec8750"],["D:/Blog_my/blog/public/tags/leetcode/index.html","74a65daa6f462dfdbca386c158c20236"],["D:/Blog_my/blog/public/tags/情感分析/index.html","34c4d8aa306d2398bac2660804634d04"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","33f943803356ecfbca48c7e5b90bcef3"],["D:/Blog_my/blog/public/tags/登录注册/index.html","1accdc3bf2fb358b8f68bd32ed9506ff"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","2102b8db809f88703278a3f9f576b6cb"],["D:/Blog_my/blog/public/tags/笔记/index.html","0106655daf94091c2e13dbf96b478944"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7d0e739d33b894a5a7e4cf61d9049914"]];
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







