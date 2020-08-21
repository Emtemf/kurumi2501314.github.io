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

var precacheConfig = [["D:/Blog_my/blog/public/Gallery/comic/index.html","41fa07b8b4786c0a5f1aa756c5b65349"],["D:/Blog_my/blog/public/Gallery/index.html","a3fe5eba58151c516926326be386ff28"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","00150e7ebe315ec8f263d48da494771e"],["D:/Blog_my/blog/public/about/index.html","0535af4fa8db3a5f458307a19542ac8b"],["D:/Blog_my/blog/public/archives/2020/07/index.html","b91de831f58e58db0b4f63d6706d88ce"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","4cf3481b1de7966171515448de480488"],["D:/Blog_my/blog/public/archives/2020/08/index.html","a344c100a3a39535b53577b3c9fb0525"],["D:/Blog_my/blog/public/archives/2020/index.html","6cc566ff2bc057124425b74e1784e3b7"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","edfb1525625cf74361f6bd61990bbfc2"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","767d05cd6f80f0c1a349b65054a289dd"],["D:/Blog_my/blog/public/archives/index.html","adf43f74bc402e1f1fc2251195818308"],["D:/Blog_my/blog/public/archives/page/2/index.html","5efeb30aa972746cd48d0e8a16c461bc"],["D:/Blog_my/blog/public/archives/page/3/index.html","92a898c1056114e5d8d5b8853db9a245"],["D:/Blog_my/blog/public/article/1811f8b8.html","13ac693785694418cce9e944fb1f4e45"],["D:/Blog_my/blog/public/article/18e57658.html","2fcfa21ee901ec6a87c53cd15beddc41"],["D:/Blog_my/blog/public/article/1e64d194.html","72853b6b4fc67f0ad80cb1e0f3d2be0d"],["D:/Blog_my/blog/public/article/21f50898.html","49c9700e4176d7983c94649e9a612268"],["D:/Blog_my/blog/public/article/234762cd.html","a4c0d62cd16aa6a45178301b5bd07d4e"],["D:/Blog_my/blog/public/article/2b97b46c.html","14e2c296a57cd3c105c2435bf4a2901e"],["D:/Blog_my/blog/public/article/358ad26.html","b5fce62c81cb1d62c1022239962c55f7"],["D:/Blog_my/blog/public/article/541a8071.html","cedbd8926fdbe8439ba0e9fb6fb6791c"],["D:/Blog_my/blog/public/article/54412d2c.html","848d790ae7503f99ab126401fa09f934"],["D:/Blog_my/blog/public/article/5c1827a.html","7e97255141401e791f5305c489de629d"],["D:/Blog_my/blog/public/article/5d6f1d17.html","61327bc36754c70035137711f9374a99"],["D:/Blog_my/blog/public/article/5dcc92c.html","ec24d829511502a798c8079a3ac24b36"],["D:/Blog_my/blog/public/article/67da7762.html","fe2b25f00b1371d053383d721ebf7d8b"],["D:/Blog_my/blog/public/article/683f20fa.html","16f42eaa542e56ed285eb5b2ce29d53a"],["D:/Blog_my/blog/public/article/7758c0ce.html","1e819b03f70cc5e5033bf225f2be6e45"],["D:/Blog_my/blog/public/article/7a56c169.html","63d4d3ee5d31cf223ffc3c92202d8f7b"],["D:/Blog_my/blog/public/article/7d561955.html","21d812a152c475310a91dcf46b68544f"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","239718ae0d75256b91dca695eb9ddcd7"],["D:/Blog_my/blog/public/article/c386a086.html","a36464395ee8298c2edba2fb56231a3f"],["D:/Blog_my/blog/public/article/d080f90f.html","71bded79cc5bdf74a675ccd03dd06da2"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","357e6eccee7a4c170b695796160d4097"],["D:/Blog_my/blog/public/article/e21e4e82.html","82c189724ae5c5e75a99669f67f8007a"],["D:/Blog_my/blog/public/article/e419ec53.html","59ef49cb2746c5ce7acdc5b6facbffdc"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","2837ff79db0269e7b53604fb2ab544b1"],["D:/Blog_my/blog/public/categories/Android/index.html","6d2587df17c1dc0a0a602a2126e16aa6"],["D:/Blog_my/blog/public/categories/index.html","4b3af908cd868054cc7691737524f9dc"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","6a8ab8d16c873f00e171ed2c1c63522e"],["D:/Blog_my/blog/public/categories/后端云/index.html","5dd727c7bd4c7ce2ec5851949e7dca45"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","359c99a7721cc58eb8e049b93fa74e0c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","6d681398efe2be857033b2a38d7e55cf"],["D:/Blog_my/blog/public/categories/百度云/index.html","b18bb5cce14ab2583fa332d91c44b093"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","c2f27afd5962922238a76c7a3f2bff92"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/index.css","fdf8435e613c309d9bcb1e2b4270d02a"],["D:/Blog_my/blog/public/css/touming.css","d5765c0e403d31e3afe002344ad39312"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","5cef07cf7b0a59ba1c063cffcf8818cd"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","f5e6cf7dcc94725deaf5d6b3939c7b10"],["D:/Blog_my/blog/public/music/index.html","bff448d1f91fe8247e54fe3ee177f3d2"],["D:/Blog_my/blog/public/page/2/index.html","ca6299d0390a95510488ecca75c230eb"],["D:/Blog_my/blog/public/page/3/index.html","1fd8a51a15e6df20640e4109693d7d31"],["D:/Blog_my/blog/public/page/4/index.html","5960f09dfdd50f2c702d11cd576abdb1"],["D:/Blog_my/blog/public/tags/Android/index.html","43050dbb10a8becc8e91793da9048e6f"],["D:/Blog_my/blog/public/tags/bmob/index.html","3370f573c285e0f8fcbcbcd38a610d95"],["D:/Blog_my/blog/public/tags/coding/index.html","a9d4a1f8f7b210af473aadc0a213cdac"],["D:/Blog_my/blog/public/tags/github/index.html","a96be250816aaf55610cabf661fbe1a6"],["D:/Blog_my/blog/public/tags/hexo/index.html","6ac12a1382b14c87f0752703463462b4"],["D:/Blog_my/blog/public/tags/index.html","e102e5c74e6da3dff2df30980c7c8f8b"],["D:/Blog_my/blog/public/tags/leetcode/index.html","ef992c1852494ee20a490e1eec3f933f"],["D:/Blog_my/blog/public/tags/情感分析/index.html","56fca6692bb9a9bfb57acc057bc5e3f9"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","82151f6d04eb18073b7cdd464d148fe6"],["D:/Blog_my/blog/public/tags/登录注册/index.html","ddadbe272729c97f3d2dea0854c255a9"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","d47914afb6be3da307651b0a1933bde4"],["D:/Blog_my/blog/public/tags/笔记/index.html","6e8daa2de293ffe9d342967b4910b19b"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","c550b7b0f6dcccb1ea732523fc1d34ad"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","fbdee276a7e59c827717ce3ce47d41d5"]];
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







