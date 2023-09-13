/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","6f38e649d04ceb46dc4cd230dd2ac6bb"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","0fc0e60a78296cc92d355b56dcace1dc"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","68d65ea276a2c5ada4c2c1580e1164ba"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","cb083f68fc5ea0259b85bca6cddf50e5"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","2c96104b41dc66c496813b6f09440c7d"],["/2023/03/20/电商后台管理系统/index.html","3f1bd5a2327c118556f658abd54d4270"],["/2023/03/21/Hexo博客搭建/index.html","f1f354406d2048fd4ca4593153392ecd"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","2762af580c845549b76875a9ad1570dc"],["/2023/03/21/Volantis主题的安装与配置/index.html","aa6102fd52f6b2ec6960f5ee9af5f442"],["/2023/03/21/单链表/index.html","52d953efe589e6072eb20a8622cc3873"],["/2023/03/21/排序-快排/index.html","f8bf205c947b159fef62f64e53489c87"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","10e5b2822fedcad61a07cfd8f98d597f"],["/2023/03/28/栈/index.html","8ae0c58ee26c324c0f7cfac152dc1e4e"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","09e01ed411ca97d54dbbc82b0bb47200"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","6e353055a41a09aaa4cd2d21a8e0d294"],["/2023/05/09/LeetCode-383-赎金信/index.html","f40a499e8612420c0725585fc927ff52"],["/2023/05/09/哈希表/index.html","724abf601c46c9511e0a4ad5ac0a23e3"],["/2023/05/15/LeetCode-454-四数相加/index.html","fcbcba5ac90267ed62709f58373c2c50"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","f2d6aa51234998ab7e3bec879c47dced"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","e2cd610c76cfd2678c556054976865e8"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","7b4465013ab1669c725221527823a62f"],["/2023/06/06/v-for循环图片无法显示？/index.html","36029eb4f10d396a0c03f3006b555545"],["/2023/06/07/8086微处理器/index.html","bb2ad3bd97b014dd14e20e532054c1fa"],["/2023/06/07/微型计算机系统/index.html","b6b5dd937d74179c7f88d007fe95de23"],["/2023/07/15/计算机网络体系结构/index.html","34af6b0b3f00439ebce3c87c4cea1ba7"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","98ec28d564577228b0b04a4c547b2c29"],["/2023/07/16/计网-物理层/index.html","e3e4ce44a5f1e12b446724e7c92b4ddb"],["/2023/07/16/计网概述/index.html","eb183971005df5010d89895d674d6d95"],["/2023/07/17/vue3-App-vue相关报红线/index.html","c3fd1d48c6731cefd9af063eef5cebd5"],["/2023/07/18/实现二叉排序树/index.html","15a5e91b83bddc1ccdf0842e40bba8e6"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","c3db8be9830ee2744055290aeeafd792"],["/2023/07/25/二叉树的遍历/index.html","5d286fb44ae2ee67e9b3864bb06ff039"],["/2023/07/27/vue双向数据绑定原理/index.html","6795c0a0f9a801b1fa6cafb033269302"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","024119b0d54ba4ce18c5cad58d8dfb74"],["/2023/07/29/HTTP协议/index.html","5ac8a72de35aa5ec74b2b6c288db7dd3"],["/2023/08/01/HTTPS协议/index.html","b8424f6d440db53e5b6064e6c924bcba"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","3d738a6e2a32fb9e451a0f2ef38482e2"],["/2023/08/03/HTTPS-RSA握手/index.html","b110ca8074e5b73d2d0b2fa66f5963df"],["/2023/08/03/HTTP缓存机制/index.html","f9b07e29f8aeee9cf37213163641a5ab"],["/2023/08/03/LeetCode-112-路径总和/index.html","bd2653b2e52058353d4d2899d1f73314"],["/2023/08/03/LeetCode-113-路径总和2/index.html","3857bed68e65e20863c09253e95158c2"],["/2023/08/03/手写Promise/index.html","b07db690ba29fc92c186152c74e909af"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","17d7b3c99402b0e8e99fa19ceedc9413"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","405230615332863f928287a5f0558a4c"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","615604a378453049298316fd552357d7"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","b44f19ed978e4e08cabd412267e3945a"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","bd2849d49882070baa7ffe3453d8a292"],["/2023/08/10/axios的二次封装/index.html","cfbd1c2d73e23f29816c02e3818a7249"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","b0f670db043108428c5d5023c0fb3537"],["/2023/08/29/TCP协议基础/index.html","6202b9c483114d995c553389b8bb16e5"],["/2023/09/01/把一个数组旋转K步/index.html","934e295fe39bd644e480754d115b110f"],["/2023/09/01/防抖和节流/index.html","8544e39722245947ae9af9bd8507e046"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","33edfcf230c4ddc43f17489eb3836088"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","567e58c1abe2f68dd1f963640c488326"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","b9d48437a66cd8d1c63b22d38d99afdc"],["/2023/09/03/LeetCode-904-水果成篮/index.html","e3f405bb6f46b6e0ea2b603e01bc2ea3"],["/2023/09/03/TCP三次握手详解/index.html","cd5609bdb2e93519d4fbc0411004647a"],["/2023/09/04/LeetCode-165-比较版本号/index.html","4d7d1035ea93095d4b71d451a89e934d"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","ca981875d98525516aabada62905538e"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","c1b5f0e934cc16141458391d5236dc7c"],["/2023/09/08/LeetCode-77-组合/index.html","6b390ac01cb291eb48d7a01c73689dd9"],["/2023/09/08/闭包/index.html","65c6a902e6e61cb250a8c37a800e62bb"],["/2023/09/09/Validate表单组件的封装/index.html","d65ef7f6f897ca3b25813d4ffd111740"],["/2023/09/11/关于this/index.html","66b9d84235a8273f580cba7108f8e0af"],["/2023/09/12/LeetCode-15-三数之和/index.html","11736859f1b8909e3ac9fd7eb8c90f18"],["/2023/09/12/LeetCode-46-全排列/index.html","fe038075db72087553ca6ca284a97c6d"],["/2023/09/12/手写call-apply-bind方法/index.html","80469ce6f4c1b44cedfcd8e7b8b6a43b"],["/2023/09/13/LeetCode-912-排序数组/index.html","52032369459e9894e739293b4c7d032a"],["/about/index.html","c66591cc7307c5a67f675edd7deba752"],["/archives/2023/03/index.html","9a57c877e9c004c5aa03f01f8baa4118"],["/archives/2023/03/page/2/index.html","d6c93cf34964eb9f78dce7e3d142473b"],["/archives/2023/04/index.html","699936332054bc6568953661d3776332"],["/archives/2023/05/index.html","3228cc54e5a909ba2d4b79a968f49e42"],["/archives/2023/06/index.html","2b241d4ace1a2fa479f074def0bb8ebe"],["/archives/2023/07/index.html","65886db2ceec9846c0497f4b587b6bdc"],["/archives/2023/07/page/2/index.html","6bfa086fa001e0d5914df4116a025412"],["/archives/2023/08/index.html","4c157805fc9f7ca85e2003bfbdcb7504"],["/archives/2023/08/page/2/index.html","6b8fb7cbbc5a01f6451c232edfb5073c"],["/archives/2023/09/index.html","6bcc3450b1f30239cdf81e24e67ae2c4"],["/archives/2023/09/page/2/index.html","79d5e175e7d4c6539cf40deb0e01df5c"],["/archives/2023/index.html","3f71c7b7652ed03ca65afc476af9afe1"],["/archives/2023/page/2/index.html","4abd3743d483ed1fb9901f3fe3093225"],["/archives/2023/page/3/index.html","95ebcb4431bcd36bf6fc83d02f943681"],["/archives/2023/page/4/index.html","e85fc6252197d240a433d34aa172d78f"],["/archives/2023/page/5/index.html","2181858960a975ea398c4c377722c70c"],["/archives/2023/page/6/index.html","ce342edc9e615bd3b17534ecb2c77ca7"],["/archives/2023/page/7/index.html","e7f940d4bd2f27c41e3c94c05c2a1da6"],["/archives/index.html","2604d13c2fbe9e4521d682f1d683c90f"],["/archives/page/2/index.html","7c53576421c0aed24771eb11de90a28f"],["/archives/page/3/index.html","176ada6324c14a98fa19601b806bae13"],["/archives/page/4/index.html","a6d28ad0f0f99ad6747a4a3f35e41ff8"],["/archives/page/5/index.html","e95ba2d3f5e6c1e936cca77799a5f1f8"],["/archives/page/6/index.html","307e3d4ebe7ddd3d7b9cdbf69f9c0e40"],["/archives/page/7/index.html","2f88d71b75b8c8d04708d5606fd810d3"],["/categories/Hexo/index.html","f636a0d917302c6050be1e7e3a5a6f8e"],["/categories/JS/index.html","8661ce201ab3e313edcc3bf6b32cb4b8"],["/categories/JS/page/2/index.html","4da53e82066b98800c82439be7df3ba0"],["/categories/Volantis/index.html","a7e28c7e1c2cb8ecdbd113a496083a2a"],["/categories/Vue/index.html","9ada3697cde1c3f0c4ee5e47cabc16ec"],["/categories/Vue项目开发/index.html","dca56c1c83e055bcb1d211feff3fa4c6"],["/categories/index.html","afe3b901100bbd0ee1c1f3c3024e30bf"],["/categories/微机原理/index.html","daba7af53cfe3831597dea0f40714964"],["/categories/数据结构/index.html","8206aba4d361cecb0fd816df3a78976b"],["/categories/算法/index.html","6c9061ee35a1eadc660bfae575dede91"],["/categories/算法/page/2/index.html","b028af8c1cc58bc809ac73308f791035"],["/categories/算法/page/3/index.html","3e5539b39374c828a51a715a3e02d77a"],["/categories/算法/page/4/index.html","e1639a427755489ed0a319a950a036fa"],["/categories/计算机网络原理/index.html","167a9599ccc78a71ae4ecf860f458ac7"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","01b820fabc73ca84825a35747259540e"],["/history/index.html","75325a795912098f7ffbd49481cd5386"],["/index.html","e4a320b5954a58d0b3ff5e52f61778cc"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","7e3d49d0a389c0a44bb78f248f752593"],["/page/10/index.html","5ff04167cf5b8ea8c742c5467791b2b5"],["/page/11/index.html","c13b48c82f38ab3fa291964589c9b80e"],["/page/12/index.html","4de134144daa7cb216630451c7f1ce93"],["/page/13/index.html","62f3df9caff31a7802d901a25ab91ede"],["/page/14/index.html","2a152dea3051b11ee389de2dee877c17"],["/page/2/index.html","d51dca31c60c9fa263a5ad9ffa529516"],["/page/3/index.html","4d7aabe80654b5a1edf7fbfafa185053"],["/page/4/index.html","c89807695c6471e3eda25abd7cce000c"],["/page/5/index.html","eef4fe5daf2dc94986f85c6d03fd9c3e"],["/page/6/index.html","5f7d87f170307b65eaf43ea33f6c4b45"],["/page/7/index.html","8d2623632a8b7268bff0f427c1054892"],["/page/8/index.html","c6df50e3d5eb43f5f99e22aa4b5b093d"],["/page/9/index.html","f1b27730434fbb3e590477838a773dcb"],["/sw-register.js","11ef34a1a223b46d8d9c8ccf302948b5"],["/tags/8086微处理器/index.html","5cbfc27434465f841bfeb6748a3ecc33"],["/tags/C/index.html","c74435433286c7e181871e69728685c1"],["/tags/Eslint/index.html","074d0f08fa9a9b039d9ca748f41689b3"],["/tags/HTTP/index.html","9a0346450dcc13c225aedd0ee9983361"],["/tags/HTTPS/index.html","2d1491246bc677b003b340e6653f8402"],["/tags/Hexo/index.html","ed4300969f4ced0676776e55ee32cd8a"],["/tags/JS/index.html","8d05b5d18a9e1654ec31898d91223a57"],["/tags/Promise/index.html","1a5663494ff446a1d7f20991bcda97a8"],["/tags/TCP/index.html","284ae88e1bb418cd9de4890353a3d51b"],["/tags/TS/index.html","5fd29abad7d0bbe213831e43377d1a4f"],["/tags/Volantis/index.html","4f4114a37ebaf395ef144316dd30519f"],["/tags/Vue/index.html","8bae93ab6f5425b2d399478b3ea43aec"],["/tags/Vue3/index.html","5a15e049be36ebb4ef9563f1ab94b3f7"],["/tags/axios/index.html","d1ecaf9ef6a54509e509fb2da6de250a"],["/tags/cz-git/index.html","a0b7d1994aca002534e97e76af1e54f4"],["/tags/index.html","001b462bd98cba37d27719cf13718344"],["/tags/prettier/index.html","ea59e62147cc46b2a76db1e861ead67c"],["/tags/串/index.html","45616265a4eaa22242041f65f95502df"],["/tags/二叉树/index.html","a1b3ebb480f1703512f5d2d04fba76f9"],["/tags/二叉树/page/2/index.html","77954a35cc2dedbe23acc289a37a20ab"],["/tags/双指针/index.html","2c44b8713988ad8e31e2adb32bac0022"],["/tags/双端队列/index.html","88d51cc2b1287c78dc3f0b566ce98fe4"],["/tags/反转字符串/index.html","6f2163d7fb48b56cbd5e5fc5f9704160"],["/tags/哈希表/index.html","f56da166719547ca317444e4ad4de9ff"],["/tags/回溯/index.html","7cd9c4e1f368f9f204f56e347d5693d7"],["/tags/图床/index.html","6b605f36d6f844511a4bdaf391c0cbea"],["/tags/广度优先搜索/index.html","85876d8b615ba0fe24e09bfb6552a705"],["/tags/微机原理/index.html","5e3dc0fb1b2b9e8cfa673eb49b38456d"],["/tags/排序/index.html","d05e618664353be0f7f1963ba857e563"],["/tags/数据结构/index.html","37b45ddab5eab237924845997cb040e5"],["/tags/数组/index.html","369b9e9f8f7d914fc4f93ba1cfb31e3e"],["/tags/数组/page/2/index.html","d34d8eb4627abce6b78537c054b74c71"],["/tags/栈/index.html","0dd4fd9bcd87584c1dcce3abb944d031"],["/tags/深度优先搜索/index.html","ea1da5d7e58d35ed1097712fa2b6cead"],["/tags/滑动窗口/index.html","fdb16db1629b08e0e1fe44ab063810a3"],["/tags/组件封装/index.html","2fec101cdec915255d93c25568db93a7"],["/tags/计算机网络体系结构/index.html","ab5a35852cb22accf17a0191e2002e3e"],["/tags/计算机网络概述/index.html","bba0b61c71cfaf5df1ff133096f0654b"],["/tags/计算机网络物理层/index.html","c3c53c215d9c029f5c44b2b73eebfe7b"],["/tags/链表/index.html","1239e25f5564939f1aee50fe5fcbb7e4"]];
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
