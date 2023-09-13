/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","7405651d01641546555775861cc0e223"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","fb513ecfd957bccd57479dec5c1023ac"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","889592d7baa0096ae1e7390373b66ef8"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","7476a00c4d307df6f9af9907077f9692"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","96cefbdec80946a2dda17e8785f64c9d"],["/2023/03/20/电商后台管理系统/index.html","3172a4af78385e689549f812ef58890c"],["/2023/03/21/Hexo博客搭建/index.html","04e54d5750bdcf0732a565dcff18122d"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","80361d28a806d3fcf40b8d873afa3e45"],["/2023/03/21/Volantis主题的安装与配置/index.html","5907b6d80b10a551947bb73c0224af7a"],["/2023/03/21/单链表/index.html","abdb5e881389abe8efeff9d2056b3e97"],["/2023/03/21/排序-快排/index.html","47205a6edaa347793ee8951b85a8a011"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","9faa7c2afad580ba197f7679783a68e8"],["/2023/03/28/栈/index.html","dc218920a4a305e13f28822d118f0ac7"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","5e25f0180755a8749893a83d25b78c89"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","ad417370bf3973c53916590638d6848a"],["/2023/05/09/LeetCode-383-赎金信/index.html","f686d6c439929b0b4daacb6d3bda1e64"],["/2023/05/09/哈希表/index.html","9d7a63963e305b8606f42c821772ed9c"],["/2023/05/15/LeetCode-454-四数相加/index.html","83af9d2fb04d32cee66fbaba8d7e3c70"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","d6acb7eab180b492a4581c1d9ed9e13d"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","c15b3d9780cfd2cdbfb31f2a714efbd9"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","98a9c7dbc4d39c96b37bc3066b033913"],["/2023/06/06/v-for循环图片无法显示？/index.html","c0e654c2621557bf15106e78ec0d1db2"],["/2023/06/07/8086微处理器/index.html","1c8f53bcad3732670123b4243b96aee7"],["/2023/06/07/微型计算机系统/index.html","0cd7e26671347a7799f9dec330362ff7"],["/2023/07/15/计算机网络体系结构/index.html","87e9de93a53c65de0e07eca18c97b3f6"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","025c97a7fc39414c31f4160e5c8f930d"],["/2023/07/16/计网-物理层/index.html","84a0f62cc8a5da341d6775d38524eee5"],["/2023/07/16/计网概述/index.html","9b0cc2f643b6dcba4bb6053b05321b9c"],["/2023/07/17/vue3-App-vue相关报红线/index.html","b014f8e623c824e6c4ed30c1150e6ace"],["/2023/07/18/实现二叉排序树/index.html","61e14d91a689725b5e70271ec4690596"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","cae79c95c039a0d4c5dc16bb7f1a23be"],["/2023/07/25/二叉树的遍历/index.html","dac47407b11bb739b16da0d0b8450588"],["/2023/07/27/vue双向数据绑定原理/index.html","02261cea3d9b772634b4c5f5ae29ea10"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","2bf35254519e200ded4be49cc21f0cfd"],["/2023/07/29/HTTP协议/index.html","9a30f576ba2e677d6334453eee26cfe7"],["/2023/08/01/HTTPS协议/index.html","3efd91a1b77c4a110b80cd39d04d3553"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","830d3bd2e90011f0a0237aeddad6f056"],["/2023/08/03/HTTPS-RSA握手/index.html","3f51422da642e0be3fb5980a2c5d70b5"],["/2023/08/03/HTTP缓存机制/index.html","74660f439fa87767e33c57abe560822f"],["/2023/08/03/LeetCode-112-路径总和/index.html","b867c41ee32de82aca5fe627384d2a09"],["/2023/08/03/LeetCode-113-路径总和2/index.html","a6aa4913585e1d2ebcc45eecd2a406e0"],["/2023/08/03/手写Promise/index.html","1f35fbccec0a7c36e53b87c2b2bd62d2"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","22c25861b21afe839503936fd0eddb39"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","e94b494bf217f7230ff45c0e38a1c351"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","505c2f60f5758261be9d33046e84d951"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","e7e1a23786787d15746ca865ffbcf032"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","f230359edd4b140c48c8fdb2f3b234e5"],["/2023/08/05/事件循环机制-Event-Loop/index.html","c6e979c55dd5b7471f01cd1984800f75"],["/2023/08/10/axios的二次封装/index.html","168bb901145d059a1641a5c35ac6e2d7"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","7cdadc39e59f6dbc39d40438d3a1850e"],["/2023/08/29/TCP协议基础/index.html","3833d9b00abbdffd805e4204298b3fbc"],["/2023/09/01/把一个数组旋转K步/index.html","b63a2ffc2970bd5cf9ec53ba770a11a1"],["/2023/09/01/防抖和节流/index.html","8d9e0e1c1210086d8de47ab92f4e4f2b"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","a439c0cf5adba5bd5871622a63546faa"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","d0693c9f4d11db56cd698d8dbb1d95e3"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","a274b561717e412ca05a1c2230b5c456"],["/2023/09/03/LeetCode-904-水果成篮/index.html","1038c33a7fd3618b342d40a2b74bc141"],["/2023/09/03/TCP三次握手详解/index.html","4a30e47b4054a5289d0e736b356105b0"],["/2023/09/04/LeetCode-165-比较版本号/index.html","51200b949f569c2f0c39e358e7a9fcff"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","e269eb1d4e879e663c498f69b96ad9be"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","6e70fcd119747fd9cfec1399be0c5bec"],["/2023/09/08/LeetCode-77-组合/index.html","efcf83bf3918cc58f7da9f53f50fe7b6"],["/2023/09/08/闭包/index.html","8db73c970217cd8b36a5da246d56e6b8"],["/2023/09/09/Validate表单组件的封装/index.html","8eee9e8dfbb058a07af71357a024a6f9"],["/2023/09/11/关于this/index.html","6a02755b68b1bc0f772f6a04b3850cd9"],["/2023/09/12/LeetCode-15-三数之和/index.html","aac0d0b5554c7f605133bf27fa392d7e"],["/2023/09/12/LeetCode-46-全排列/index.html","1399605ed6917c2ac10b37fe1c6bad19"],["/2023/09/12/手写call-apply-bind方法/index.html","0a36f22204572f03d21217ea5aa3f22a"],["/2023/09/13/LeetCode-912-排序数组/index.html","c1e3969e38c275b9aad039dea4560ac6"],["/about/index.html","38fe08fe76b2045f8b451c8c4e53a463"],["/archives/2023/03/index.html","99f20f33cd20a707d5a659d07d6a5524"],["/archives/2023/03/page/2/index.html","aab4d4ed80b562d95e89b8092271b6d5"],["/archives/2023/04/index.html","cc2ed67944823b63e815bd70dd47c719"],["/archives/2023/05/index.html","b1df9d0a3f1cd028fe141fb795111ff2"],["/archives/2023/06/index.html","205a34fc787089f36529d60176ead042"],["/archives/2023/07/index.html","c4c79ca1583b0c4ac33aee9df1dc5384"],["/archives/2023/07/page/2/index.html","8e05e0c58ac4654c3e45cc53564498ad"],["/archives/2023/08/index.html","099b76099d3c7b785ce8f885ffc4524b"],["/archives/2023/08/page/2/index.html","6a5c489496ea6ac9578c7477043d842f"],["/archives/2023/09/index.html","694493fc00514d320aca86d46e4f2911"],["/archives/2023/09/page/2/index.html","1742617958d303af6730501dd44cfb24"],["/archives/2023/index.html","1ee1ab9b05fd78108bd84859a3558f3b"],["/archives/2023/page/2/index.html","51f99d890214d5a3351503b198adc8c1"],["/archives/2023/page/3/index.html","f9a46d01c66ec98571d47bd80e01d715"],["/archives/2023/page/4/index.html","0fbb8366c582b96f9b596d197d6fc3e0"],["/archives/2023/page/5/index.html","d976c8a1386a08f50a1fde83ef3206f7"],["/archives/2023/page/6/index.html","8c40117c0aebafd9c1f9372697780d93"],["/archives/2023/page/7/index.html","ce2314ec26d6ad31766873e8e16b4487"],["/archives/index.html","252b81de137955aa71f41b19d5eb6e79"],["/archives/page/2/index.html","2148e82226df9893b909b9faed1438fc"],["/archives/page/3/index.html","3d90f6992fbb34d87299579b2dba7d2f"],["/archives/page/4/index.html","5dacc810d504555941da3729048518ee"],["/archives/page/5/index.html","21f99a0dd9b3455aaff962331276bee5"],["/archives/page/6/index.html","9905f72f250e10328a338e6992a1a95e"],["/archives/page/7/index.html","d703455812b5f20ad65007b226ef62d1"],["/categories/Hexo/index.html","93a76dd7acb398ac1e495e0dfdd300f0"],["/categories/JS/index.html","e994488c7406532714263d1735fb6e09"],["/categories/JS/page/2/index.html","915bdf743b6cd9642a510a4c63f60013"],["/categories/Volantis/index.html","23d002150bfd5f2bc7f316a2011b20fd"],["/categories/Vue/index.html","e3cc816f2790bd03234b6331a073c61a"],["/categories/Vue项目开发/index.html","0208984d22b15f3edf3cf9887bbf9e32"],["/categories/index.html","34786055c42ec07e030933fab861ed1c"],["/categories/微机原理/index.html","8e39ec1dfa0edc69657e4d8cd482ff5e"],["/categories/数据结构/index.html","0cf0f0f22dff807c34f21f515d9f5fb9"],["/categories/算法/index.html","e1ae4062f7f0a6e8a216e7cfae3346f9"],["/categories/算法/page/2/index.html","640b1b1e49fbc79ebf6c3fda4be4ef71"],["/categories/算法/page/3/index.html","749811bcd02cb5bac021157e999be628"],["/categories/算法/page/4/index.html","829d15998024721498385d67d55d621b"],["/categories/计算机网络原理/index.html","80f1d38cd8911d832dea5d09715ff69c"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","94dd6a12ef0e51e37ea2e92dc0695e86"],["/history/index.html","8da6ca6a0aa185a4aad4f2c5b1bee4c6"],["/index.html","117a0f69cbe546b657fb9eaf41513c36"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","4e2805f266ac7c429197dcfb5033333c"],["/page/10/index.html","48d865199f2843efc759d7b29b9bdc3d"],["/page/11/index.html","f4ce7e2384eb22979684a4a56d537113"],["/page/12/index.html","4a347ccfc14b4a8abb0e53d275e2348f"],["/page/13/index.html","6cbc5a9af4f1ca09201991f5430dce73"],["/page/14/index.html","a16b487c1f04a9a20ba9e0cd406fafd7"],["/page/2/index.html","e9ebbe581fede427f8b683aadbded7e3"],["/page/3/index.html","4672806e9a5e4c6332f34639f387af04"],["/page/4/index.html","49bf7f8fe14e9b2f63725d55757de254"],["/page/5/index.html","9d8d3f6b8d6f1de479682c5a24db48a9"],["/page/6/index.html","7b92939c8cc6333688428b3fc931d99d"],["/page/7/index.html","b78c1cc3cf7e4ba3168515a2edcc514b"],["/page/8/index.html","761d9c0b06fcfdc977e3925de0ae2ef9"],["/page/9/index.html","004c59bff0b009a6454c466598fa489f"],["/sw-register.js","7bd81b616d231ae0fa7feac6e6bf71f3"],["/tags/8086微处理器/index.html","4d4d62434a76277ac7f042267abf8d6d"],["/tags/C/index.html","c42914b6e4c0e1a72bcd96c376c42662"],["/tags/Eslint/index.html","6b64e8e94e6e62430faff8114d3cb1d0"],["/tags/HTTP/index.html","44ffca3d6c1dc35d48964c2ba31b42f2"],["/tags/HTTPS/index.html","985e9987482b818d7e4973a273efbe28"],["/tags/Hexo/index.html","f2005fe512b14871626b4838bf841484"],["/tags/JS/index.html","4cf4a06a6a15e7138d0e5e332836c329"],["/tags/JS/page/2/index.html","c582d1513eb50201c628d94ffedf15e5"],["/tags/Promise/index.html","f2ab7e2782088b64b7708ff3d933dff8"],["/tags/TCP/index.html","c4aeb89f41e692cf0d155022568cb9b1"],["/tags/TS/index.html","dc50e8332c7e39351ddb0ad8bd14cdeb"],["/tags/Volantis/index.html","6533a4a55c1a0e1beb52d39eda2ebbc9"],["/tags/Vue/index.html","bf9cf2f1b47164ed391ba2748c60876e"],["/tags/Vue3/index.html","901e81e02084c1e8f2efafc10ab09d0c"],["/tags/axios/index.html","d08d23b52d7db225bbd177125919260e"],["/tags/cz-git/index.html","07622d10da5254ab16f67044dc35b9cc"],["/tags/index.html","ddd685386fa715f7511109d0dfa9f935"],["/tags/prettier/index.html","02a63d957ea329b6a9a194c68b6a6235"],["/tags/串/index.html","12438a17a09dcb8d86acb586f899dfbd"],["/tags/二叉树/index.html","e9b4292c69b572a4ec3db1e40533c3cc"],["/tags/二叉树/page/2/index.html","7e017f37fe033b603792380784421c50"],["/tags/双指针/index.html","ba5ee7c8c5bfb23568d5e37f41f11809"],["/tags/双端队列/index.html","fea2b6df2d84a2d310f7b3c6058c3ae4"],["/tags/反转字符串/index.html","062a9821d2022a17bf82024f2fd88a90"],["/tags/哈希表/index.html","a9f86cae6c2044ac0a4d2fe5541e9713"],["/tags/回溯/index.html","0d0080a75d73744968a0e223007f406b"],["/tags/图床/index.html","61e6f6b63441d62e0a6656c8219297c0"],["/tags/广度优先搜索/index.html","206f60800176775a257b80dd6d5b4df4"],["/tags/微机原理/index.html","151c24c3eb43d61159af71c35113fbe2"],["/tags/排序/index.html","a37b7b63729432eaf71abbd9dab729d1"],["/tags/数据结构/index.html","023817315fab8d9edd6c8d7e5ab8c640"],["/tags/数组/index.html","804a966236d4d73b15773f2e5de01d48"],["/tags/数组/page/2/index.html","12efc31b90410c994a459ad67b2ab560"],["/tags/栈/index.html","5ac8acc678687f12c76c5bd88a2320dc"],["/tags/深度优先搜索/index.html","f20613e7e7925329227053af0a6d7401"],["/tags/滑动窗口/index.html","58dd44554c5b5b44c73d63924a159c0c"],["/tags/组件封装/index.html","24b7f51e68c78d46fdaa75709a92b98a"],["/tags/计算机网络体系结构/index.html","7cd202ea37f7af4fef7ab7d4e0e65e2f"],["/tags/计算机网络概述/index.html","4595c70c27712c80591281f77433bfe9"],["/tags/计算机网络物理层/index.html","82fd16fc759e45a2738f0ce9da68f9af"],["/tags/链表/index.html","213a7b01e3fc7c039763613925bf5b94"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
