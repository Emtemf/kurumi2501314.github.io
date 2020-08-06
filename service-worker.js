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

var precacheConfig = [["D:/Blog_my/blog/public/404.html","c6b84faf042783e42533865ca8f690cb"],["D:/Blog_my/blog/public/Gallery/comic/index.html","96150f309ed36ef55c334577b6d20068"],["D:/Blog_my/blog/public/Gallery/index.html","b7f1a7bf696c832cc2e85ef5a51fc7fc"],["D:/Blog_my/blog/public/Gallery/ztfn/index.html","2a20d1b117cecb54d54c7502aee1ca11"],["D:/Blog_my/blog/public/about/index.html","445cb1125617739387d75deb6d2d704a"],["D:/Blog_my/blog/public/archives/2020/07/index.html","692cb25216f77975a7431802bf1e2c36"],["D:/Blog_my/blog/public/archives/2020/07/page/2/index.html","bb704e44357941d51fcec0facf08b973"],["D:/Blog_my/blog/public/archives/2020/08/index.html","d5c1a1578f32a50c3d86ba803538ddac"],["D:/Blog_my/blog/public/archives/2020/index.html","76376f524d9288a720e464532338e919"],["D:/Blog_my/blog/public/archives/2020/page/2/index.html","ab5a9f704528fe3ae91d8fa07a6a601d"],["D:/Blog_my/blog/public/archives/index.html","a91e6a4e736e8c92a20d34c48cd77978"],["D:/Blog_my/blog/public/archives/page/2/index.html","b483d0d6cb7d9debb9bb7008fef63f37"],["D:/Blog_my/blog/public/article/18e57658.html","306e680551bb42f7661334bf87cf757a"],["D:/Blog_my/blog/public/article/1e64d194.html","b6f8ac2b661f73aaa015dbdf3e6fc814"],["D:/Blog_my/blog/public/article/21f50898.html","d4fef7a184888efd51241c527a1075a9"],["D:/Blog_my/blog/public/article/234762cd.html","bc3d06a6b3254f34f0138c7fc845daed"],["D:/Blog_my/blog/public/article/2b97b46c.html","96938f30c99f7fa91e262c89807b10f4"],["D:/Blog_my/blog/public/article/358ad26.html","f08781b95f02b5df9a68ea7d79820722"],["D:/Blog_my/blog/public/article/541a8071.html","3f401c4b14f87342dd885248916bac95"],["D:/Blog_my/blog/public/article/5c1827a.html","dcee0f5e1afbdc858d9e525b44e50afb"],["D:/Blog_my/blog/public/article/5d6f1d17.html","445c50272b580a194d9a4046d0ea703c"],["D:/Blog_my/blog/public/article/5dcc92c.html","dabf04f5a87959a489bf52c8403e535c"],["D:/Blog_my/blog/public/article/67da7762.html","70bf2742db13aae1c438316b3812a72f"],["D:/Blog_my/blog/public/article/683f20fa.html","29e7a720f9ef472b5843abcb011eca5f"],["D:/Blog_my/blog/public/article/7758c0ce.html","0e72af704fa627fa48961dee0af41090"],["D:/Blog_my/blog/public/article/7a56c169.html","4d5396055c86c6e9fb34f523372885fe"],["D:/Blog_my/blog/public/article/ae9b4fbd.html","4be925a52aa355124a85a798f2e9b3ee"],["D:/Blog_my/blog/public/article/c386a086.html","4083b46767cda900a043a012a7258a8c"],["D:/Blog_my/blog/public/article/d5dd4ea3.html","1dbe4038fa96a964a7371d9ecb7104db"],["D:/Blog_my/blog/public/article/e419ec53.html","f09cbc6dfdf95a651bf6df6847c06615"],["D:/Blog_my/blog/public/categories/Android/index.html","15bb128fef9d3a38c14a9ae289a3bb26"],["D:/Blog_my/blog/public/categories/index.html","df7ab0310f1b34b1dd1b1b92f5dd26af"],["D:/Blog_my/blog/public/categories/刷题笔记/index.html","60b2d773f7acaf769c9b8a55cdb7cc1e"],["D:/Blog_my/blog/public/categories/后端云/index.html","6423e2cb06f78fcc272914bccae33c79"],["D:/Blog_my/blog/public/categories/搭建个人博客/index.html","70651276d1c53875191c5626d89d0ac8"],["D:/Blog_my/blog/public/categories/电脑软件推荐/index.html","913cf18d659fc6092d1a80e266698bdb"],["D:/Blog_my/blog/public/categories/百度云/index.html","2ae7576037e8bae8d1799ee2eca941bc"],["D:/Blog_my/blog/public/categories/阿里云学习笔记/index.html","29c615dc360629d9ebe4a9db6efd89d9"],["D:/Blog_my/blog/public/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/Blog_my/blog/public/css/index.css","1ffe9fcfa2c235d78ad1651b15491778"],["D:/Blog_my/blog/public/css/touming.css","577a8a10e310742f09577479f87966fb"],["D:/Blog_my/blog/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/Blog_my/blog/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/Blog_my/blog/public/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["D:/Blog_my/blog/public/img/alipay.png","753cdaf1c2cc6af3cd3214cb5769d1b8"],["D:/Blog_my/blog/public/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["D:/Blog_my/blog/public/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["D:/Blog_my/blog/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/Blog_my/blog/public/img/joba.png","befc1bc8c93ea56c8b6cd40e099e44a7"],["D:/Blog_my/blog/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["D:/Blog_my/blog/public/img/wechatpay.png","f852d036d249b0d53f19f53d62b0484d"],["D:/Blog_my/blog/public/img/wife.png","edf6867dcbf58db870a50b68867dec00"],["D:/Blog_my/blog/public/img/海贼王.png","bb05f43630e16655968384d4db508b5e"],["D:/Blog_my/blog/public/index.html","d32b49582e1ded19eba7f83d7692a1db"],["D:/Blog_my/blog/public/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/Blog_my/blog/public/js/Emt.js","101c1f7c15a09bc3fcd971e002aa340a"],["D:/Blog_my/blog/public/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/Blog_my/blog/public/js/main.js","1eb3d905f8d4f15804fc050b7cd49373"],["D:/Blog_my/blog/public/js/search/algolia.js","fde9b8fefca51cc039ed4c0c2d2c34f0"],["D:/Blog_my/blog/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/Blog_my/blog/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/Blog_my/blog/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/Blog_my/blog/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/Blog_my/blog/public/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["D:/Blog_my/blog/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/Blog_my/blog/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/Blog_my/blog/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/Blog_my/blog/public/js/tw_cn.js","65f69c7060c833d42ffaabe5c95bb010"],["D:/Blog_my/blog/public/js/utils.js","f2f712d5d52625b377855945420eea15"],["D:/Blog_my/blog/public/link/index.html","03cf0f2355a17be71c0e81fb6d5a98e7"],["D:/Blog_my/blog/public/music/index.html","b802c007db585e15acde6191bd75f41c"],["D:/Blog_my/blog/public/page/2/index.html","7ba846f00d723740d09d99ebfe7d0517"],["D:/Blog_my/blog/public/page/3/index.html","8cb8d2a6178c465df206000171ed96bc"],["D:/Blog_my/blog/public/tags/Android/index.html","d89212d97ece39d22af1210bf2907a52"],["D:/Blog_my/blog/public/tags/bmob/index.html","77e569b6b77db1aea0163caaf256f2c4"],["D:/Blog_my/blog/public/tags/coding/index.html","12d5cb9f327b38583127766ee74c9e64"],["D:/Blog_my/blog/public/tags/github/index.html","a5c392dcda365a7ca15e04ec3a796d74"],["D:/Blog_my/blog/public/tags/hexo/index.html","b9f33c448f714da3a2bd7ad2d1bfc4f1"],["D:/Blog_my/blog/public/tags/index.html","90ec2aaa7a8edf915e6aabb44a8f1bf8"],["D:/Blog_my/blog/public/tags/leetcode/index.html","93d66d355a5b6a3212f37beea58eef7d"],["D:/Blog_my/blog/public/tags/情感分析/index.html","3797d270cc7ffdc17b31ab0884402432"],["D:/Blog_my/blog/public/tags/电脑软件推荐/index.html","74a097687f398f4822c1657138ce5583"],["D:/Blog_my/blog/public/tags/登录注册/index.html","e7ce6f4c934a8a615509db6c0bdefad1"],["D:/Blog_my/blog/public/tags/百度云接口/index.html","9a1b53ca435b951a36c3366340935a66"],["D:/Blog_my/blog/public/tags/笔记/index.html","00ec687cf5384bff23d3a04e1d0dcc71"],["D:/Blog_my/blog/public/tags/阿里云课程/index.html","4c4e01322f3c0fe1acaf1d009cfada23"]];
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







