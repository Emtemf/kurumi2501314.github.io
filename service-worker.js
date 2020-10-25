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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","845dd90fdba03fbb5ea36bd7b85b5aa7"],["D:/Blog_my/blog/public/Gallery/comic/index.html","3101b8d0dc1b4a9035276b67daab8aee"],["D:/Blog_my/blog/public/Gallery/index.html","36280fc412a1ab0a43e3473393a4ba8f"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","44c28cc32856ac7da0f32f8fec53a274"],["D:/Blog_my/blog/public/about/index.html","24dac02ca25a66f17f467eec5fcccdd1"],["D:/Blog_my/blog/public/archives/2020/07/index.html","c374c9c1280a2aaa8293b3580ad5aa2b"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","b1e6d70452c926e0dfe59cffe1b142e8"],["D:/Blog_my/blog/public/archives/2020/08/index.html","00dc9c6374bfd8b0e46a35ee1491b5f6"],["D:/Blog_my/blog/public/archives/2020/08/page/2/index.html","80b741c8889be0e36fdfe79aab441ddd"],["D:/Blog_my/blog/public/archives/2020/09/index.html","475486ae71ac9de12332cd1e4361903d"],["D:/Blog_my/blog/public/archives/2020/10/index.html","fb1d175f7e1982bf80dabcf6744de696"],["D:/Blog_my/blog/public/archives/2020/index.html","be0777a7bf0273e57e1b26a865b43ecb"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","8647a3feda04a23a0f92110c25b6c524"],["D:/Blog_my/blog/public/archives/2020/page/3/index.html","88821d4445c07640393ef03c1958c18f"],["D:/Blog_my/blog/public/archives/index.html","474921710b324c2a0f76325a99ecc36e"],["D:/Blog_my/blog/public/archives/page/2/index.html","953d134f9dcab459e21239c92529f7c0"],["D:/Blog_my/blog/public/archives/page/3/index.html","0b2252428ad926fba753b3bd12b3c19f"],["D:/Blog_my/blog/public/article/1811f8b8.html","0d089f74a4d29e28b586e3c7ff33df3f"],["D:/Blog_my/blog/public/article/18e57658.html","82aa2980c8f197637c172de88eb6b7fe"],["D:/Blog_my/blog/public/article/1e64d194.html","13ef512724e65fa110bf243162d8bf52"],["D:/Blog_my/blog/public/article/21f50898.html","28bd2007574bba8f2a7e55b5c4f65f2d"],["D:/Blog_my/blog/public/article/234762cd.html","1e0957da31a647f5e8c4d2cf35ec869a"],["D:/Blog_my/blog/public/article/2b97b46c.html","ee1052ad1ad39ee190b9b5c7ba3f556b"],["D:/Blog_my/blog/public/article/358ad26.html","6ed25b0fbc82490a04af6b76ddc2208d"],["D:/Blog_my/blog/public/article/4de36022.html","55d0ce6b91f42bec3d05652704776365"],["D:/Blog_my/blog/public/article/541a8071.html","fa42e702ecfea790c7440f55d8dd3915"],["D:/Blog_my/blog/public/article/54412d2c.html","4e625e373f306434f4a69f411c6a34f7"],["D:/Blog_my/blog/public/article/5c1827a.html","49f7e7c76b2a893ec89af0d9888c3213"],["D:/Blog_my/blog/public/article/5d6f1d17.html","f11b5e6608c6e2f175987e95308164a2"],["D:/Blog_my/blog/public/article/5dcc92c.html","099aaaaa800c7a5dbdb1f4461d3f97aa"],["D:/Blog_my/blog/public/article/67da7762.html","a2aed62fa30af189d87eac067fdb12bd"],["D:/Blog_my/blog/public/article/683f20fa.html","7d177c6b1c965416c45315fd5a388c41"],["D:/Blog_my/blog/public/article/76783ca1.html","881b82275ad1ec3e21886efb9e4a1aa9"],["D:/Blog_my/blog/public/article/7758c0ce.html","061230cd7963476e7910c872f66855ea"],["D:/Blog_my/blog/public/article/7a56c169.html","cf895364458475240d8aadcc90c3c161"],["D:/Blog_my/blog/public/article/7d561955.html","9dfc2a6514ddb135aa9b740a55806cad"],["D:/Blog_my/blog/public/article/a0595b99.html","c50f1086e20cddf915d33d4449ef0dcd"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","d8619c8f64140caf831d2dc8634b1c4a"],["D:/Blog_my/blog/public/article/c386a086.html","620086f8d62fb15469b43b763b05f6fa"],["D:/Blog_my/blog/public/article/c9c0e075.html","347f3a023cd37eecf7dcc93bee323c64"],["D:/Blog_my/blog/public/article/d080f90f.html","55c995aeccdc461d33a657c7047439ca"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","ba1c750867a31026d7e42beda491ab71"],["D:/Blog_my/blog/public/article/e21e4e82.html","61e1c5eda77c1c81ede6f12fe45ba5aa"],["D:/Blog_my/blog/public/article/e419ec53.html","0fd8f19152380f2bcae8a29d9c42b308"],["D:/Blog_my/blog/public/article/e4efebfa.html","b9fc1a03a5131116decc6a5b64d930c9"],["D:/Blog_my/blog/public/article/eb0fc959.html","03797251246724848561cbe912c34365"],["D:/Blog_my/blog/public/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/bangumis/index.html","6eec5b40ae677aebb9a2d314a08f42ca"],["D:/Blog_my/blog/public/categories/Android/index.html","cd0d5023f144f09e3c0467c5c6c66328"],["D:/Blog_my/blog/public/categories/Java复习巩固/index.html","6b4ef78db22c897272c7bae39a58af81"],["D:/Blog_my/blog/public/categories/Spring系列学习/index.html","97941de6cf0a599473895c68bec2cca5"],["D:/Blog_my/blog/public/categories/index.html","f60caf8cd95cbc6aac7c49d0b77e375e"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","683947eec03b2dcf60d3a10e0d43e415"],["D:/Blog_my/blog/public/categories/后端云/index.html","1943d045ace7dcf220b50860186e027e"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","7a206e4c5759885565d8f7932b4b986c"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","a02365a9857dfeffc932e513b5461203"],["D:/Blog_my/blog/public/categories/百度云/index.html","cace5d047f6ea4e449d5865050bdde5f"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","eb278a5c2c0824c5fa9aa4fb3244b584"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/dddd.css","0d029bafc571de363661af99fae8f7b4"],["D:/Blog_my/blog/public/css/index.css","44b4ff21b8eb2add87c279ad1572c08b"],["D:/Blog_my/blog/public/css/touming.css","e2c9bac864d8e57c4fcb2648a15a94bc"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/iamage/back.jpg","3e4e5e40f4644cedecaec8038b1925e1"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/万取一收斋.png","62580a64375a0a12252b17513f2a7279"],["D:/Blog_my/blog/public/img/大万.png","794fb4b77aee4ed8eb6bf8a0f030bf77"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","1c2ca95c0de6e2d52452780e05251673"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/EMT.js","c1bc9cfd3bb35d3ae44081be3279b90c"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/js/zhengchang.js","7ad6fd334c348fa773effa5787d080b6"],["D:/Blog_my/blog/public/link/index.html","ad21f0a170859c9380190668e2d896e9"],["D:/Blog_my/blog/public/music/index.html","27c8d03ef0d2aa97964c7da9e22615d5"],["D:/Blog_my/blog/public/page/2/index.html","4ed19968496ef8123ea04795d0874d60"],["D:/Blog_my/blog/public/page/3/index.html","a88da8157210a4ceffdb3269ffa933da"],["D:/Blog_my/blog/public/page/4/index.html","d92a2dafa98d684e45d4089be0e82e58"],["D:/Blog_my/blog/public/page/5/index.html","87f99830813dacddcaff24d5d877457b"],["D:/Blog_my/blog/public/tags/Android/index.html","f527175f7a68bd34004a1955594e4443"],["D:/Blog_my/blog/public/tags/IDEA快捷键/index.html","b33ca26c224880ffae8cec7f89892797"],["D:/Blog_my/blog/public/tags/Java/index.html","5fe8fdd81c84662e15a9ae63ecfcb5b4"],["D:/Blog_my/blog/public/tags/Spring实战第四版/index.html","02c827e932a46d41057b967b8e8a8023"],["D:/Blog_my/blog/public/tags/bmob/index.html","126ca3f8792dd0cfcf36f8ef95825de7"],["D:/Blog_my/blog/public/tags/coding/index.html","14280e19c54ce93ffd1ec6680eac776a"],["D:/Blog_my/blog/public/tags/github/index.html","113b41c81167a4b7c43d7fbd0c2a0018"],["D:/Blog_my/blog/public/tags/hexo/index.html","4b86d07230135744ec9e197b3d4414dd"],["D:/Blog_my/blog/public/tags/index.html","b417528d25567d4e713a8cf4301af735"],["D:/Blog_my/blog/public/tags/leetcode/index.html","b68cae976112198b7461197784cdf98b"],["D:/Blog_my/blog/public/tags/情感分析/index.html","014d223895eb22deeffa2159afab70cd"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","5183e10cd308360ba3e61dbac0a9aee4"],["D:/Blog_my/blog/public/tags/登录注册/index.html","9220b94956990688107c51be5fe10630"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","a9487c73b25483f5ae3568ac8ce8b875"],["D:/Blog_my/blog/public/tags/笔记/index.html","4df90c09451d7ba0a360bc2e32c15a07"],["D:/Blog_my/blog/public/tags/笔记/page/2/index.html","e5cdce36dcb3a79851dbf743cdcb92ea"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","5e512748ca8b8875a481949063834727"]];
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







