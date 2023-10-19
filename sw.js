/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","c096a770413e08841bca8fc141fd480e"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","1ced39cf9634a50d6a29a72394579d99"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","f78a26279087d402438af4e72c6dbe28"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","b64273a9ee20d114fcd197903065dcf9"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","1cd8d87cd7791918976f9b0d7b1409a8"],["/2023/03/20/电商后台管理系统/index.html","6d0c41fba106405517cd260f88ee93bb"],["/2023/03/21/Hexo博客搭建/index.html","7066df90e3517f68bc6211eaced6067e"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","4d4ad3095965d6c8420a868e21190783"],["/2023/03/21/Volantis主题的安装与配置/index.html","762d00e4e727dec3cd6e8cc15d83620a"],["/2023/03/21/单链表/index.html","28d0ca55c74ce333ab239e421af9eb4e"],["/2023/03/21/排序-快排/index.html","a99eb0a0839e900c0a10349f1d11418b"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","a8c5bf5805476a017009f4de6c6cdf03"],["/2023/03/28/栈/index.html","b7ae2461565d6eeca59f68df9930f588"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","33c378101cec2849c0b855366b8e052c"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","07da54116d10c7589498101b48f197a3"],["/2023/05/09/LeetCode-383-赎金信/index.html","2d46ab733ecb40cd1ee23e2b5992a9bb"],["/2023/05/09/哈希表/index.html","3d89f4c888a3baaa81fde7a729d9985f"],["/2023/05/15/LeetCode-454-四数相加/index.html","e38496aa6867a2555258d55f15667ab2"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","cb9006813f5ccba7911cd2b33d5aff42"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","da86ecbc7fc11a88112716e103d4bf3c"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","e290e7ef439b7d5b7828962cebfb325b"],["/2023/06/06/v-for循环图片无法显示？/index.html","82a03a86b88b92309fa99bca63f58b19"],["/2023/06/07/8086微处理器/index.html","8f53426a6695887e3ae4ad86aa25b6fd"],["/2023/06/07/微型计算机系统/index.html","234f3824c08eeb6b5a74112648dd558e"],["/2023/07/15/计算机网络体系结构/index.html","1aabe755a9a186c8d256fe7078e424ac"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","d4595b18705664895e6dabe47a5dfdb9"],["/2023/07/16/计网-物理层/index.html","548d3a19d4faff5fbb5150c07c5144d0"],["/2023/07/16/计网概述/index.html","922e29f95f52a1a3e80f34bb60740428"],["/2023/07/17/vue3-App-vue相关报红线/index.html","5a0db2229e612cddae6e110619889dfc"],["/2023/07/18/实现二叉排序树/index.html","6e09d24db743d405d4c08078cb5c3c33"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","1ff9449ef31aa2a62b32317f3e74d410"],["/2023/07/25/二叉树的遍历/index.html","4fabafbde1d489ea1e456a1f70119542"],["/2023/07/27/vue双向数据绑定原理/index.html","08d784bfd4aa58241685a314f442171f"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","087bc9754d504c02470f8c84ffa21891"],["/2023/07/29/HTTP协议/index.html","6b8cd53edb8361e188362b8df6f449d3"],["/2023/08/01/HTTPS协议/index.html","932813c2dc6c5bff360470742b751f48"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","af17ecdd3738cbf40288d72dec9617a0"],["/2023/08/03/HTTPS-RSA握手/index.html","fdadb7c98f237271d6195e79e3fa5791"],["/2023/08/03/HTTP缓存机制/index.html","2e45e8950025871e6ac8be6f951316e5"],["/2023/08/03/LeetCode-112-路径总和/index.html","056745441f52430b237f6cb77eebc62d"],["/2023/08/03/LeetCode-113-路径总和2/index.html","96ff2afce6436d20885b362e9b8c084d"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","ced2019246ba3c6091853479222c5bb5"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","482bc29e0e88037a47dcbc955d2c2041"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","50b7d0d6c360b4342b22e7469f3291fa"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","c3a683ddf3b2ee8d8dfdabdfd26c9942"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","5431c510c9e1fa2f1c2046ac909ded06"],["/2023/08/05/事件循环机制-Event-Loop/index.html","35aa00bfcb1af5933a7a73cb7a696c0c"],["/2023/08/10/axios的二次封装/index.html","fa6d1753467b164d758bd3771ee85235"],["/2023/08/29/TCP协议基础/index.html","ff23c9cba06f21b316b95d67ff1d3398"],["/2023/09/01/把一个数组旋转K步/index.html","5aae94972ac4903b9fa90c91fa95bba0"],["/2023/09/01/防抖和节流/index.html","e5e9aad95ea7696dd5b1dbebf159b470"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","6b582e1ffd67484fa514f2975d9d0304"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","e63531dc5877197ce24e171dd137902c"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","fcfb27a65d13b4b1957b373493d917d8"],["/2023/09/03/LeetCode-904-水果成篮/index.html","c4f55950e65020278dd94294a2c3918e"],["/2023/09/03/TCP三次握手详解/index.html","fa6a0a14bb529a41ed1d369b34535f17"],["/2023/09/04/LeetCode-165-比较版本号/index.html","be6e3e979c6fff3a8583b53d7e34e7e3"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","9719015fe4e8517ed1739228d8df30a1"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","5f12dbb732a23a012dba42ae29aadb76"],["/2023/09/08/LeetCode-77-组合/index.html","ece87f54a78f718197cb09daf54d3450"],["/2023/09/08/闭包/index.html","a9be7d59a3ee9ae05711f828f3ec6696"],["/2023/09/09/Validate表单组件的封装/index.html","4a65d1b984df6aa69a95104e08a963ca"],["/2023/09/11/关于this/index.html","01b7637672d8bfd3bb20a8278aa287fb"],["/2023/09/12/LeetCode-15-三数之和/index.html","d936c465790472c82df0dd6afd8d59ec"],["/2023/09/12/LeetCode-46-全排列/index.html","ddfea41b9aa5722aa689120a2a48b4b5"],["/2023/09/12/手写call-apply-bind方法/index.html","5e14508dfe136732a7df82f69f087787"],["/2023/09/13/LeetCode-912-排序数组/index.html","b1e41ec681eaf3a4270d077f30545250"],["/2023/09/20/LeetCode-153-寻找旋转排序数组中的最小值/index.html","801f421de65fec5de41e9301a4329aa8"],["/2023/10/02/怎么判断两个对象相等？如何判空对象？/index.html","ce87e8ba19f88276fcae810bcf951e30"],["/2023/10/08/多维数组降维/index.html","b46b432795b34339aea2d8956728da2d"],["/2023/10/10/实现Promise/index.html","8f65249b379e3aeaca1d0aca8e2f4abb"],["/about/index.html","e5cbc8976677b032b1b2f50a3bbef32b"],["/archives/2023/03/index.html","5353a59b2d1b1749515a7fec3ce208ce"],["/archives/2023/03/page/2/index.html","af4042190911e55295ed6f3824e25921"],["/archives/2023/04/index.html","50828b20d232391ba694dc625cc517c4"],["/archives/2023/05/index.html","b5cbcba8c96bb342ef765e7d12509fbe"],["/archives/2023/06/index.html","55e121601f5099d402819a6bbb16a448"],["/archives/2023/07/index.html","fc767518b8389872a6bbb87dad8982d4"],["/archives/2023/07/page/2/index.html","92e0f552bb4118a14631f7625be10252"],["/archives/2023/08/index.html","11db0ac77159c6c90da4e827a4b523df"],["/archives/2023/08/page/2/index.html","cabc681b86565b066def77297329750e"],["/archives/2023/09/index.html","abf77444fc76dafc4a1c7341afb23e8f"],["/archives/2023/09/page/2/index.html","ea568b12c3482dc7e2723a9396b7cb94"],["/archives/2023/10/index.html","2fa64b9f324cd67ef7f39265ce593150"],["/archives/2023/index.html","e14f641474bbb648c09f5d4b00dae548"],["/archives/2023/page/2/index.html","262b49146e15d88bf61badb0f1868a30"],["/archives/2023/page/3/index.html","3f492bcf425c7040b23168ed896009d1"],["/archives/2023/page/4/index.html","ae8e00607a982739b681a869dde568aa"],["/archives/2023/page/5/index.html","6ad7f1734d5318a751aa3b5f99ae275f"],["/archives/2023/page/6/index.html","857e484a7b3d5d461922075cb7461129"],["/archives/2023/page/7/index.html","ab4ed2ddd15a8fa0434f7d7a59d347e3"],["/archives/2023/page/8/index.html","e05e18039f0f782a2727f60ba97194ac"],["/archives/index.html","5f4a3992ce9794c1ba2c55eacd0613a9"],["/archives/page/2/index.html","a3365724c1485bc92e28b8c79f302eab"],["/archives/page/3/index.html","dad68b304ff917f220a27e054d451899"],["/archives/page/4/index.html","593226b8fe97236ca3ddd003632612ab"],["/archives/page/5/index.html","11cec6a6b13ab1ef0281831e7555394f"],["/archives/page/6/index.html","1b365d30c8e29a60a63ec08b444e6095"],["/archives/page/7/index.html","0927955b5d1139c0017468bbe4af4217"],["/archives/page/8/index.html","a94146eb90e726640ad230ae1d5d82aa"],["/categories/Hexo/index.html","dc436ba99722df16c4369fa5f2b7d1ce"],["/categories/JS/index.html","5ab8d8d858660bca1cc24dd39d208241"],["/categories/JS/page/2/index.html","42266cc89b0846c68f95c09b0966d55d"],["/categories/Volantis/index.html","db8fa1d305a5ff34e191dab95f8f90aa"],["/categories/Vue/index.html","115455bb929ec02df50d6512054f362b"],["/categories/Vue项目开发/index.html","0239c70cc747b7eacdf00caf166c4a0d"],["/categories/index.html","a0f1bfa7e4740b9b19df86361e945469"],["/categories/微机原理/index.html","0daf26c2c4b6ba3b8e5acd70852c6d4f"],["/categories/数据结构/index.html","60f33999813d94df3c03cf9f7a977b8f"],["/categories/算法/index.html","343ff9e838f7bb665196199cc00fbcca"],["/categories/算法/page/2/index.html","746b9a565a5c52e445e4deb9a9482b79"],["/categories/算法/page/3/index.html","9d6b090146e1ba892ae21e8a1011d9aa"],["/categories/算法/page/4/index.html","a72afc39e9f907821567c4b4e510bcf8"],["/categories/计算机网络原理/index.html","371f83e30d6faa1783a3b67384e5d42f"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","f289286f77d7e88489a95cbc403bad1c"],["/history/index.html","a2593bd71866b8706685192725c6573b"],["/index.html","3d4b756ddb01e773992dbc1f161748c1"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","926aa1cc661ae60e03055ef4d49da48a"],["/page/10/index.html","249c95bf490464a9c63332abb894e167"],["/page/11/index.html","63b5cd0089eea88f6f408a80ed9bb6e6"],["/page/12/index.html","f978b6eb048496dfa1d244e26276551a"],["/page/13/index.html","16e8247c7e902a323cf6d7fa150e6146"],["/page/14/index.html","f222a2205a644174e343a50995382dbc"],["/page/15/index.html","90c8f147b11c2f8f4c2e190422995bb5"],["/page/2/index.html","6960bc9ec9bb085aea419555ea18112b"],["/page/3/index.html","cd55739f2b4c64534330b706eb782ab0"],["/page/4/index.html","819d7fd5266d2a4fa85f09206c07c6a7"],["/page/5/index.html","f54949941eae0de42c4280767884f9b1"],["/page/6/index.html","aa4bd70ac55b02ece31aa779791f3858"],["/page/7/index.html","8bb78bba91a32c0861ec4da0e7eed1b0"],["/page/8/index.html","00d0f7a2bd491d2ce1ec66c90130d559"],["/page/9/index.html","681294bb98b6f3c1db739e5226dd0dbe"],["/sw-register.js","14f9981973c306748b364272197154df"],["/tags/8086微处理器/index.html","3015f66968252c44f3438f5206438bf6"],["/tags/C/index.html","d02d3ea507baa8fe4e8547460515df85"],["/tags/Eslint/index.html","bcc921e55547c82bbff8c2127a0c88d9"],["/tags/HTTP/index.html","0dce9b49b6cb6d6d5482c5db547e9818"],["/tags/HTTPS/index.html","fed5b51a206f1285fb46e05e170d65d8"],["/tags/Hexo/index.html","719dc63d6b276891fa9a8f860177fd4c"],["/tags/JS/index.html","f6743cfb9781c7035c486f624a4f2c7f"],["/tags/JS/page/2/index.html","2950f90aa9b0e2927656bdec38ac4110"],["/tags/Promise/index.html","9a8eabc26802983105daf39d572a4081"],["/tags/TCP/index.html","42904d6dbacb0ac18db16afd4275684f"],["/tags/TS/index.html","50298adc1d07099fa34249b7e1453d3f"],["/tags/Volantis/index.html","2e3d468216f5026de3216ac8e3d860d0"],["/tags/Vue/index.html","38197c46c5501229b81819e44368a6a5"],["/tags/Vue3/index.html","76bc408eeb757d9946929c43a2893a5a"],["/tags/axios/index.html","f7ae19f049f4fb443c16809c06e8691b"],["/tags/cz-git/index.html","4e490e37c77d7ed1526f0ef9054fd29c"],["/tags/index.html","514dcaccc801cb38e51c5af4cc235b2e"],["/tags/prettier/index.html","cf7f045a454b2bb02b052cb34b31b309"],["/tags/串/index.html","8f4972d98bbf370c037e39b1e555222c"],["/tags/二叉树/index.html","442987531d6025a8832624cf18b5da45"],["/tags/二叉树/page/2/index.html","9cc7eab62f2212dd944be74f4049b788"],["/tags/双指针/index.html","0c0f799f07703e36485ea6087a47d08d"],["/tags/双端队列/index.html","e74d5888e295e0b37e7cba1e3e205246"],["/tags/反转字符串/index.html","61cc87f8dfa4f39c621527b63a73e6ec"],["/tags/哈希表/index.html","6161251d1bd698414f6d1c629b813b76"],["/tags/回溯/index.html","48656004edabba2f2ec03b2a8f158ea6"],["/tags/图床/index.html","bb3ac18a98c34f7cd1ea70fba6d24426"],["/tags/广度优先搜索/index.html","7c8844e1c470e2b87c04ddbed02e9f04"],["/tags/微机原理/index.html","f578e87a557c6bc8589103fe8fe28fc5"],["/tags/排序/index.html","b71835b007482d0ad802b1e50bf8eb55"],["/tags/数据结构/index.html","f23605b97a1481871d0fc1ca1d439246"],["/tags/数组/index.html","96d0dba64e01cf3df63d948ace74e88a"],["/tags/数组/page/2/index.html","c9086c5f1803d4bebeb26cb1c51c1c95"],["/tags/栈/index.html","00bbcfdb282d1edcbcebe91a675ec2ac"],["/tags/深度优先搜索/index.html","171189e964f86e05b0f9e86fb6500233"],["/tags/滑动窗口/index.html","5d624a04ce237dc907121bda98c3eceb"],["/tags/组件封装/index.html","70164c9c4366e560131645becb035a8a"],["/tags/计算机网络体系结构/index.html","b04a3c7bdbacf2b88a5bf2b4225f9657"],["/tags/计算机网络概述/index.html","9671ec80b5127eb1426ef06ed74eabec"],["/tags/计算机网络物理层/index.html","5be4b69e6e2770c6c468ccd671f58d36"],["/tags/链表/index.html","692ac85d20db19710dd9ec4bd0f41cd6"]];
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
