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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","4a4f0560a5a0a4ab8a09312c42bf2e0f"],["D:/Blog_my/blog/public/Gallery/comic/index.html","0ed5b69a823f83ca7369eafceb57b981"],["D:/Blog_my/blog/public/Gallery/index.html","070f229fe8981c6e2f5d09edad0196b9"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","676f6b7bbd4651000be239993a267991"],["D:/Blog_my/blog/public/about/index.html","3d5627ec32fdb211423bbd5ae9e6e208"],["D:/Blog_my/blog/public/archives/2020/07/index.html","adfe76f84e2f9ada647881d583ad294f"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","fa7745b6b0eb26df924bee0b9985f7c7"],["D:/Blog_my/blog/public/archives/2020/08/index.html","220313f1ca12b31e1feb1d4519924df4"],["D:/Blog_my/blog/public/archives/2020/index.html","cf8fd652a5f9ae32e1b3cab05fa7dbef"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","2d86ff2d80177b9075f05c174ef0bdeb"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","8927ed8ad8ed8736b5f7e4f920016744"],["D:/Blog_my/blog/public/archives/index.html","c3af6310bc94aed97af688784ea35945"],["D:/Blog_my/blog/public/archives/page/2/index.html","4270fb904c255fbc4c37d1662d0f4adc"],["D:/Blog_my/blog/public/archives/page/3/index.html","7238aa5d6903d419713ebe5dacaee6cc"],["D:/Blog_my/blog/public/article/1811f8b8.html","0b62437e2dacc0540910380381d91108"],["D:/Blog_my/blog/public/article/18e57658.html","4ca372b8cd415004976f8665493918e0"],["D:/Blog_my/blog/public/article/1e64d194.html","478bbc1beeefd041bf637af43414b4d2"],["D:/Blog_my/blog/public/article/21f50898.html","ee81c16a201ea91f301b4cdfb3d2fbda"],["D:/Blog_my/blog/public/article/234762cd.html","61297a354c0f7adf0660569ee8bee5ae"],["D:/Blog_my/blog/public/article/2b97b46c.html","5e76ca20caeab50255779f38bbd35d87"],["D:/Blog_my/blog/public/article/358ad26.html","166dbb84a448e780b1c4f775779a1a67"],["D:/Blog_my/blog/public/article/541a8071.html","91f2a6e829780db6f6416dadddf02d77"],["D:/Blog_my/blog/public/article/54412d2c.html","b7feec8a94aec7143a372af2a789e498"],["D:/Blog_my/blog/public/article/5c1827a.html","a96894bf366f8a80b3cae7f6426f5808"],["D:/Blog_my/blog/public/article/5d6f1d17.html","936572ee431b4cd54f21735e0bb0656f"],["D:/Blog_my/blog/public/article/5dcc92c.html","024edfd477de715d3bc729a2e6167234"],["D:/Blog_my/blog/public/article/67da7762.html","c0bec58ebd8b1742aee947821184bd46"],["D:/Blog_my/blog/public/article/683f20fa.html","65b35ef65b8b23ec9f1560c6afa80f63"],["D:/Blog_my/blog/public/article/7758c0ce.html","d944f38f906dfc134847c0d0d905ec75"],["D:/Blog_my/blog/public/article/7a56c169.html","46c6feb0189e2882e557acee21760e7f"],["D:/Blog_my/blog/public/article/7d561955.html","bb31abe1f6c8e94078e89b6646f2af38"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","cf56811a91be32a27cd34d0c8eefbe5e"],["D:/Blog_my/blog/public/article/c386a086.html","25289bec99ca5000677d8e351bf88ea0"],["D:/Blog_my/blog/public/article/d080f90f.html","fab1f942b6ff55ae89d8ea39b685de15"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","657f0287e6a468b79c45ab41c2870e54"],["D:/Blog_my/blog/public/article/e21e4e82.html","03a6072cb8538939d5ae8ef886caed5f"],["D:/Blog_my/blog/public/article/e419ec53.html","e758447197106f8f5421af83f9fe657a"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","ce927352fd132cd3042007642fd8ae71"],["D:/Blog_my/blog/public/categories/Android/index.html","f1868c0601e638c1625bb2ff97f2d188"],["D:/Blog_my/blog/public/categories/index.html","2d9c56622391822199880f1b27a389af"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","61096169c7ef7f2e32e730e244466c9d"],["D:/Blog_my/blog/public/categories/后端云/index.html","d21341ce50c4a7b157de4c3b9e8c9be0"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","66c89432103392a9a589bef644b08b68"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","21ca5e389395827661cc923dd193cd87"],["D:/Blog_my/blog/public/categories/百度云/index.html","c943e36f0e4f3b5faab9466a53607ad5"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","9565b9e8914fe806250852b22a0b824f"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","b10ffb244f0ed37e9e1112ae42c0b205"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","65ee04a0a3f95698165bc91dff5694c5"],["D:/Blog_my/blog/public/music/index.html","fbac32d2147a43bdfc9fbd632fd02be6"],["D:/Blog_my/blog/public/page/2/index.html","6a9555bcfeb6fb1b2a044f4ae071ff6b"],["D:/Blog_my/blog/public/page/3/index.html","a05401fd8fbdda5db6987b81f015661c"],["D:/Blog_my/blog/public/page/4/index.html","30e4b19d28a7dc51e4214e6f048d8c6e"],["D:/Blog_my/blog/public/tags/Android/index.html","4feb1abc11574dd783efbfc02f471034"],["D:/Blog_my/blog/public/tags/bmob/index.html","6fc788d271dac3419605d37ae320eb31"],["D:/Blog_my/blog/public/tags/coding/index.html","6c0e8b5edd9c210010499acb562a198d"],["D:/Blog_my/blog/public/tags/github/index.html","3eed3de7a274d72f8db9f3fc660c80ea"],["D:/Blog_my/blog/public/tags/hexo/index.html","51acca2a5c86ea412a46ef555d957774"],["D:/Blog_my/blog/public/tags/index.html","55f44c0b8c6f1e06698e18d44d4944e5"],["D:/Blog_my/blog/public/tags/leetcode/index.html","499e255add0e22137ecdce63b36668fd"],["D:/Blog_my/blog/public/tags/情感分析/index.html","bcf92d1b5f7f6b1e5871afa70f851870"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","97da973a6d56955996175e5a290d5783"],["D:/Blog_my/blog/public/tags/登录注册/index.html","1d820ffac5e0f0cfa9c1f6338eeaf3d8"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","dfb5c35489b844e29d95a036f05821d0"],["D:/Blog_my/blog/public/tags/笔记/index.html","ba6291a12f4ad4b22047168c45b29a9f"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","fe14423fd1646142cf47e333a0786cae"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","c53b7539629f817540217e601f56157f"]];
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







