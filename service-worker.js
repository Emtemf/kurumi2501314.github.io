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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","49bb9235ad0b4f35f4c00e3e07f0ba7b"],["D:/Blog_my/blog/public/Gallery/comic/index.html","a508fa09781cf19f0f22c7973d39978d"],["D:/Blog_my/blog/public/Gallery/index.html","948c60803725652e4eda9ee4d8ffdc03"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","fa0c2dc0226e5b6bae2dea73fafe636c"],["D:/Blog_my/blog/public/about/index.html","7938f09822cf949f6f827ca8f5b5073c"],["D:/Blog_my/blog/public/archives/2020/07/index.html","ed6e82f2121e049397dbd0763bbcb0ea"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","e7ae38a9a4d0d1c616b7b8114eff42f3"],["D:/Blog_my/blog/public/archives/2020/08/index.html","8f7a683b8b0e024c91ab09ff803c0b91"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","713650aba1467fdd61411aa5e11a79b1"],["D:/Blog_my/blog/public/archives/2020/09/index.html","bb62617474ca92c895e6bfc348c87efb"],["D:/Blog_my/blog/public/archives/2020/index.html","97becc6da587550f854e94fb29ea85ab"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","96c1f40555ce3cd45f91591d48c90555"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","0f553ef9d087fd772461d41bf11a1022"],["D:/Blog_my/blog/public/archives/index.html","2370b452148f2fa1b0c4542bcf9ed508"],["D:/Blog_my/blog/public/archives/page/2/index.html","a62c28455be2a7bccb73130c5defc5ba"],["D:/Blog_my/blog/public/archives/page/3/index.html","456d3cc5722b6987d31f2e2717c26ee6"],["D:/Blog_my/blog/public/article/1811f8b8.html","bee12fb78114333887a9433b53fe7046"],["D:/Blog_my/blog/public/article/18e57658.html","6353ed1225b07c1b7de4f79e72fc97bc"],["D:/Blog_my/blog/public/article/1e64d194.html","5d102f3bacba44f6956bf3176375a6fc"],["D:/Blog_my/blog/public/article/21f50898.html","963ef47bec6eb5afb4e7e0ed720bb744"],["D:/Blog_my/blog/public/article/234762cd.html","9e481deea5279b1ebeed73dc625f40e6"],["D:/Blog_my/blog/public/article/2b97b46c.html","71da216839b32bc15a2dffa04cdb2d26"],["D:/Blog_my/blog/public/article/358ad26.html","33aaf56eed1b6dd6f3ae8688ea0a68d8"],["D:/Blog_my/blog/public/article/541a8071.html","9347d985749db0ecb0c59c678d5e16b4"],["D:/Blog_my/blog/public/article/54412d2c.html","656d5d36a3c11be15d621b69a9b80e13"],["D:/Blog_my/blog/public/article/5c1827a.html","e169d26c73827432f1dbf091869df620"],["D:/Blog_my/blog/public/article/5d6f1d17.html","fbc721b7e2bab80896e7d037482c485e"],["D:/Blog_my/blog/public/article/5dcc92c.html","f44f96ba764ff03661aa9ddfd2724b02"],["D:/Blog_my/blog/public/article/67da7762.html","ddf90252ce0a00bb34d9882acd7e56e3"],["D:/Blog_my/blog/public/article/683f20fa.html","fbf34eaa816f5ecf98b075bd57a8faeb"],["D:/Blog_my/blog/public/article/7758c0ce.html","aa3478273dcf7a9139e0c90aa21f731e"],["D:/Blog_my/blog/public/article/7a56c169.html","87afd919fc75900f3ed47f11733fcca5"],["D:/Blog_my/blog/public/article/7d561955.html","f43d5829ea7aeba6bba8b146d489ec3c"],["D:/Blog_my/blog/public/article/a0595b99.html","07c27ea411831176a4692fd0a4a91bfd"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","d7d018b6bd4e116865807ecbc738d08a"],["D:/Blog_my/blog/public/article/c386a086.html","f0259fa027e87662d23875a02e72f03a"],["D:/Blog_my/blog/public/article/d080f90f.html","2ed3dd2f0bcd9653146f1191641a260d"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","397aae3f111d68205aa50a167c57f3b2"],["D:/Blog_my/blog/public/article/e21e4e82.html","08e9e9deadc1dc7a9d40abcc50884275"],["D:/Blog_my/blog/public/article/e419ec53.html","db06b20a50646db1d83e060bab039f20"],["D:/Blog_my/blog/public/article/eb0fc959.html","3d5f940f311ab6a7fcd960e87198ecca"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","bab0f581002af21eb9bca81ec6f2a414"],["D:/Blog_my/blog/public/categories/Android/index.html","e355cf0c24ea37e218691747c3d8be1b"],["D:/Blog_my/blog/public/categories/index.html","7b3b8771606de0f71ad3ed53108ff78e"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","d81a83fa6d9a56d96bf5d3f82ca9e660"],["D:/Blog_my/blog/public/categories/后端云/index.html","7a9aae4473de164ebb4c73ea818d7016"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","15022a15e347788334b81ada5af40d6c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","75bb4099d0668f5805e70a2d996f8fc6"],["D:/Blog_my/blog/public/categories/百度云/index.html","7247a73af8869ca66ba3a936a6150d9a"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","80b9686f104a08692961d9d7bf7cfc77"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","380a6bb312a04ed4984acb970249981c"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","05919885dac27ce3db3949a96197d0c7"],["D:/Blog_my/blog/public/music/index.html","578b8070e03ff060492395ae645584d0"],["D:/Blog_my/blog/public/page/2/index.html","5655baa8280bf95cfc7176cf82c36687"],["D:/Blog_my/blog/public/page/3/index.html","c1cb6c6009f7c61ead1de375858653f5"],["D:/Blog_my/blog/public/page/4/index.html","26091d65608790b022870a995dad5445"],["D:/Blog_my/blog/public/tags/Android/index.html","62591121762f3633ff52302267399093"],["D:/Blog_my/blog/public/tags/bmob/index.html","2692d02d26368adbfbb91d470baad84a"],["D:/Blog_my/blog/public/tags/coding/index.html","b0358252ad39c553f7d738d6c495dace"],["D:/Blog_my/blog/public/tags/github/index.html","5a6ed67d57bf85180743c2de534abe9e"],["D:/Blog_my/blog/public/tags/hexo/index.html","d31dedbc590fdd8fe511a1b630febbcc"],["D:/Blog_my/blog/public/tags/index.html","c1d493b215d1b520da1659a578dc45a9"],["D:/Blog_my/blog/public/tags/leetcode/index.html","84c44650e19369424576651d35a879c9"],["D:/Blog_my/blog/public/tags/情感分析/index.html","2a2955b45da4c3ed1f5e0ff9cd871842"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","63227b8c659667625e30a7f1ff06a592"],["D:/Blog_my/blog/public/tags/登录注册/index.html","e43c37e1b0ce088b329eb4035223ddf1"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","083bcccd0aea0b11720928247a3829b5"],["D:/Blog_my/blog/public/tags/笔记/index.html","56e05a35a6a16f93fb9de62e1c931db6"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","5b6dab99eb201fec6b6951e90c74a6c2"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","3fb1dc4d554b38d5d39d7184c5e7ac8c"]];
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







