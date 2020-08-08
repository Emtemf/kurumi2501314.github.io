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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","3b51a8ff253b861b9cdd92ae9c2477cf"],["D:/Blog_my/blog/public/Gallery/comic/index.html","0d6a93d22877a78deb505ef98231b42f"],["D:/Blog_my/blog/public/Gallery/index.html","2e42675dc981e9d7e67d55d56400137e"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","a69f68c93394db83d88fa0165e0812f5"],["D:/Blog_my/blog/public/about/index.html","ae4d6f205d439cb0963d99516664e076"],["D:/Blog_my/blog/public/archives/2020/07/index.html","1565686ad079c52b43f77dc4d8b7d50d"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","1d7a01ebddc8fc775b9aa371be525e52"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5b6e339f43596bace63ba5ef17f88b27"],["D:/Blog_my/blog/public/archives/2020/index.html","57f3542bac23cbdc4aabd9a1e5c9a575"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","5b38811f2e659fa7b30a531d9ec1ea7c"],["D:/Blog_my/blog/public/archives/index.html","37edf0e6460ccf4a9be2fc5209c2717f"],["D:/Blog_my/blog/public/archives/page/2/index.html","52903692c8250ebab7071474983502b0"],["D:/Blog_my/blog/public/article/1811f8b8.html","7f37d0d3f4a013ba4a09f41780f1cbc5"],["D:/Blog_my/blog/public/article/18e57658.html","8a7ef2f519669bd951479525e359bbf2"],["D:/Blog_my/blog/public/article/1e64d194.html","fc09bb57ad2137646e1cb41d6996248f"],["D:/Blog_my/blog/public/article/21f50898.html","9f244f7ae9fdfc5d295cbf8555e9de49"],["D:/Blog_my/blog/public/article/234762cd.html","cea841a4747bfb89d29d20bb2eedd301"],["D:/Blog_my/blog/public/article/2b97b46c.html","4559df20e6f8e611a51c8f011e2c926e"],["D:/Blog_my/blog/public/article/358ad26.html","00d68bd9e7ba92410422c52761027b4c"],["D:/Blog_my/blog/public/article/541a8071.html","eb2bba336119df810916db1760922387"],["D:/Blog_my/blog/public/article/5c1827a.html","d77cb711722d20ebbffa443df0739120"],["D:/Blog_my/blog/public/article/5d6f1d17.html","8c66e8929b6c52b165d06ffb8ccd605f"],["D:/Blog_my/blog/public/article/5dcc92c.html","51a7d5e054e6bf863c47a3238f737e12"],["D:/Blog_my/blog/public/article/67da7762.html","85edf95c0e31e01b9442b050cfe09240"],["D:/Blog_my/blog/public/article/683f20fa.html","88249f7f80097d64eafd77c542db92aa"],["D:/Blog_my/blog/public/article/7758c0ce.html","547d81ad77fb3e3d8ffdd04622e0506d"],["D:/Blog_my/blog/public/article/7a56c169.html","eedd40fe316b9f5ecd8482e373f25256"],["D:/Blog_my/blog/public/article/7d561955.html","7bd3c44580371396be2edee29000a358"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","6b60e6e7323270461783c3668733f4f0"],["D:/Blog_my/blog/public/article/c386a086.html","c6ca8802fbf6f65cc857795d6d10c158"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","4d7bb9d0760f8373d601bb201f1ca1e9"],["D:/Blog_my/blog/public/article/e419ec53.html","6ee349d9545945082126cac4a92f441e"],["D:/Blog_my/blog/public/bangumis/index.html","779b9340a0c4c2f0e2c07d7d146c33da"],["D:/Blog_my/blog/public/categories/Android/index.html","967df89ed1c5056143f387d5b35a6d54"],["D:/Blog_my/blog/public/categories/index.html","c2bf00a3dab44315c268e9ba50662792"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","1e816596b020a136638b2342f59056e0"],["D:/Blog_my/blog/public/categories/后端云/index.html","98cea6a76554feb9f756d8df5d886c44"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","364aa564608dd36f2c8412b2e6a4a7b5"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","bb086ad9517d1ac15c4a63ad1f8c9e9c"],["D:/Blog_my/blog/public/categories/百度云/index.html","af52a019d0ae66cfc416b3ad2b1a8f1c"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","809fa364d4129edffb5811ca959a1577"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","38935e4229c524908d8e1b3c3213d467"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","36c7575ceebefec4e86414dc91a31182"],["D:/Blog_my/blog/public/music/index.html","da3627cc23cebcbd06dedfdecedcd781"],["D:/Blog_my/blog/public/page/2/index.html","9c5d7710931dc9b4bee8f2a9c668f5f1"],["D:/Blog_my/blog/public/page/3/index.html","977f70a80d6b0e5d0b5a2e5e71f6587f"],["D:/Blog_my/blog/public/tags/Android/index.html","f8dd1f8feb0c5c888ac2c7b90956e448"],["D:/Blog_my/blog/public/tags/bmob/index.html","fd2a18757bd2e99c6b8fb26374e03b9e"],["D:/Blog_my/blog/public/tags/coding/index.html","3581d4ca5430b069a2c6d8496392141c"],["D:/Blog_my/blog/public/tags/github/index.html","8697c8d4fc5bd990f963bc116b944433"],["D:/Blog_my/blog/public/tags/hexo/index.html","cb9a8d261768992c3e0c278de3ed76dd"],["D:/Blog_my/blog/public/tags/index.html","a028ce1ae77ae5e47811593fbe14feb6"],["D:/Blog_my/blog/public/tags/leetcode/index.html","d72bbf90a082c831364da040a9e56b4f"],["D:/Blog_my/blog/public/tags/情感分析/index.html","60d093da3e2178ff5f14930e5ba0c72b"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","1e58d305ed0530c1c301da45740fb755"],["D:/Blog_my/blog/public/tags/登录注册/index.html","f3728db4e4e92113209ba07b2268f6f3"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","4192a7a327605788c652a37cf3ac74ed"],["D:/Blog_my/blog/public/tags/笔记/index.html","f892dfd9075e9d62625aa34fa667c35b"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","97d378b289bf8a4135fbfbad6b0e85b2"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","0c9b1b1b58f06e7ae1be0ce3ef4bd288"]];
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







