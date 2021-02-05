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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","62ba42a95abe07aa9e474e2ba2b9317f"],["D:/Blog_my/blog/public/Gallery/comic/index.html","cb2fee26020edc1103e5e157a1bf12c5"],["D:/Blog_my/blog/public/Gallery/index.html","8206ca350d3636138703f32831031d57"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","1b27abe87742709a542e6b3103afde98"],["D:/Blog_my/blog/public/about/index.html","5e03266996be9f12185ff67cee5ca209"],["D:/Blog_my/blog/public/archives/2020/07/index.html","9d6caa41b59ec2f54d2e55c1cbe7044d"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","a04d2d24cc54868c103205394c50de88"],["D:/Blog_my/blog/public/archives/2020/08/index.html","5f4b83b9b43595a46d709cf77285394a"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","e862d3c7152a02744720f6f84b73aacf"],["D:/Blog_my/blog/public/archives/2020/09/index.html","2ee340feb61aa46b3363555e8c54c9b0"],["D:/Blog_my/blog/public/archives/2020/10/index.html","0562c3074d6a3fdb22b26ee48c239e2f"],["D:/Blog_my/blog/public/archives/2020/index.html","6a1a636a6f5540f5b68321fecbbf75cc"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","7e9b64d178ef100d492a4c8194c5ef57"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","a234d77fe8286486867dd31e5a890650"],["D:/Blog_my/blog/public/archives/2021/01/index.html","d89c153d9ee85f479665f45c70c51823"],["D:/Blog_my/blog/public/archives/2021/index.html","0d25b0951ea92d15b26aa8a8f20c734d"],["D:/Blog_my/blog/public/archives/index.html","4f483282d0ed256be8076a4dc387cbdd"],["D:/Blog_my/blog/public/archives/page/2/index.html","667983ace166510cbe1555bcedef3b47"],["D:/Blog_my/blog/public/archives/page/3/index.html","910366d61b7adac50051f55ed324f92d"],["D:/Blog_my/blog/public/article/1811f8b8.html","12a3e56af6a8675126f0178fb6344c6d"],["D:/Blog_my/blog/public/article/18e57658.html","e55224a5b3779f046ac76bb79c6c58dd"],["D:/Blog_my/blog/public/article/1e64d194.html","f121a46b7a18088631d59b23e9a75676"],["D:/Blog_my/blog/public/article/21f50898.html","87ea3a1f7fc04dcf0c8dc7c5aef53a6a"],["D:/Blog_my/blog/public/article/234762cd.html","07c6a24c02eccf26255bff88141d1ecb"],["D:/Blog_my/blog/public/article/2b97b46c.html","7435d4f12ad9ea9140180b334457eba0"],["D:/Blog_my/blog/public/article/358ad26.html","1ff51f35ccd8bbd654f505d73de443c4"],["D:/Blog_my/blog/public/article/4de36022.html","50edd737398da47bf08f60f3c307e696"],["D:/Blog_my/blog/public/article/541a8071.html","8b093d9e8152efa5fa806bdd8f927823"],["D:/Blog_my/blog/public/article/54412d2c.html","1386bc485d44ef84de5dbf73c318b4e7"],["D:/Blog_my/blog/public/article/5c1827a.html","08549e82a882c63bae37a558c1ba7577"],["D:/Blog_my/blog/public/article/5d6f1d17.html","ac50a7705e5c19912c4c367100ed73de"],["D:/Blog_my/blog/public/article/5dcc92c.html","26b16629859b3ea747bf3eb82ea2846f"],["D:/Blog_my/blog/public/article/67da7762.html","385f7b57164d822202e1db4010c8a9a7"],["D:/Blog_my/blog/public/article/683f20fa.html","8f279824225f883db2b5de1a146ef56f"],["D:/Blog_my/blog/public/article/76783ca1.html","306ad1e9d5ee0184c7ef882c36d10479"],["D:/Blog_my/blog/public/article/7758c0ce.html","65c8f4e594b2fb57191ffbbce541a2d6"],["D:/Blog_my/blog/public/article/7a56c169.html","94709f849541f9309322197528147dda"],["D:/Blog_my/blog/public/article/7d561955.html","9071924662b149085c98dd93dda9ae4f"],["D:/Blog_my/blog/public/article/a0595b99.html","605e070af6bb9d943a0181545684c2dd"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","31fd398fd5666ba52cb837f623e8d5e4"],["D:/Blog_my/blog/public/article/be7f81a3.html","88c30f55fc5e5062346323f8dc0666e9"],["D:/Blog_my/blog/public/article/c386a086.html","c7c8d53e715a34d4e42d8d9fa7f7d116"],["D:/Blog_my/blog/public/article/c9c0e075.html","55f1e3ca06071c9513baccf0facaeea2"],["D:/Blog_my/blog/public/article/d080f90f.html","54b8f34ede03955bd75643b3f93cfbde"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","987d65ed4c8a934ae68a44002e74d653"],["D:/Blog_my/blog/public/article/e21e4e82.html","9ba37121b0f7b09b79775a236749d578"],["D:/Blog_my/blog/public/article/e419ec53.html","e13c5a32121ae46a8f257a3a72cff12e"],["D:/Blog_my/blog/public/article/e4efebfa.html","2b143a25c47b33a2f92ec2bb9edf0602"],["D:/Blog_my/blog/public/article/eb0fc959.html","5b151e4c7013944746efa0b04ed080f1"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","d7a9c56923a67f7098f66a2a163e1bb6"],["D:/Blog_my/blog/public/categories/Android/index.html","64482db4b014091bb099c6a5e9a83e73"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","e09d8ae123cfed96618a0846f96a56cd"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","e000cec04470ab29fd08948443fee0e4"],["D:/Blog_my/blog/public/categories/index.html","003efe9fe00f165e1aab248b12bb8a8f"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","5b861fde2ef065d95a1a851305aedccf"],["D:/Blog_my/blog/public/categories/后端云/index.html","362dfd79fbb8a27ebcfa9f1354574c67"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","a5d033d5ee8021250059f3bc657a1414"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","0b51280c4d0c67ad08664f5a54982153"],["D:/Blog_my/blog/public/categories/百度云/index.html","597debd26fcff8804e6cdafc0af61067"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","80c808d9309e7699df014f76bb8beadc"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","0c76720d553451db5217c4dc1fc69538"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","466a9c27266e5153d5593b5461416a54"],["D:/Blog_my/blog/public/music/index.html","b2eb13537270056667468da981925b87"],["D:/Blog_my/blog/public/page/2/index.html","86cb706d36ed54b7d7ec226d5cd10a61"],["D:/Blog_my/blog/public/page/3/index.html","c4cc9ffa6bf8c10391074849f787a2b9"],["D:/Blog_my/blog/public/page/4/index.html","3af9a586b0395b9835fa37ac8c8ced9c"],["D:/Blog_my/blog/public/page/5/index.html","c11e0fd101d3e4a490bf4dc55647b4f6"],["D:/Blog_my/blog/public/tags/Android/index.html","e69ed3b93cacae32558f54066f8859c8"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","7d9f5435d2b89a1d14c5c370daea7555"],["D:/Blog_my/blog/public/tags/Java/index.html","7628e4c6589808e3c23eca72fe9bc1a9"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","f49dd927266e0746d5ca9beb3c419efe"],["D:/Blog_my/blog/public/tags/bmob/index.html","8da532b89367b37e5669bb0d40e7e865"],["D:/Blog_my/blog/public/tags/coding/index.html","c65ec9cf18734dc22d5c54e94bdd585d"],["D:/Blog_my/blog/public/tags/github/index.html","9538c1fb8a2e7170ea4074f2dbce4e61"],["D:/Blog_my/blog/public/tags/hexo/index.html","9be063561e4c00fe399487e917b9547c"],["D:/Blog_my/blog/public/tags/index.html","4fdf882944dbf4ae5a76c7f7b21ba23a"],["D:/Blog_my/blog/public/tags/leetcode/index.html","c398d78968cd06c92df20af0b6dcb941"],["D:/Blog_my/blog/public/tags/情感分析/index.html","024821a771d6ebd78d2a4a8c45e0c125"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","ea42dc6395371e14145b58ac640b1a37"],["D:/Blog_my/blog/public/tags/登录注册/index.html","273960a9d25f3ede8081ee64249bc06d"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","018a72e504d7ba9dac7aef0fb292223d"],["D:/Blog_my/blog/public/tags/笔记/index.html","29857e183b0e53d010a7c96f3f930e89"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","5c928f998e99578c7f11713867c21f33"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","7e3d273093844b0cf6fc634c1e52c940"]];
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







