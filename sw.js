/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","5a8fc59a4cd3d818ace0f18721d13401"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","73c9ae2fcb225dab8fe37c2b9991f7ae"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","9255209931c71632863dac0ac97f8b55"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","f78e6d09fd4d118f6d290e9265941ec9"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","73277a51bdfa5fd2571d5fab5fb627bb"],["/2023/03/20/电商后台管理系统/index.html","92fbde2c739c9a04044163206fca55e5"],["/2023/03/21/Hexo博客搭建/index.html","e200bd8d2893c2a2961eb7ab880fe09d"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","053465b06249e8d899835919c7d85b1c"],["/2023/03/21/Volantis主题的安装与配置/index.html","0a1d9ec535e695c0e2b4172c2add669b"],["/2023/03/21/单链表/index.html","dd373a2c17bd0500ef2b94fdbc856478"],["/2023/03/21/排序-快排/index.html","843da7cffc76ee58ebbf42410e7a8c0a"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","3151319201a1c430f75c91a81e9f7140"],["/2023/03/28/栈/index.html","8d8609176ae60508f1b998d6311f0049"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","46b6b6de34504de4c96986dfc4fa1d72"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","afd944c6a13449acacc4bac4fd691288"],["/2023/05/09/LeetCode-383-赎金信/index.html","63fdbeaf42e7ae7ad5e1db254abaee5f"],["/2023/05/09/哈希表/index.html","d35d4dc3986abd39d15d7a31e74da60e"],["/2023/05/15/LeetCode-454-四数相加/index.html","08f4604af0a808ca81c1bb01efea5b74"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","8ef47c6e965190d65e37721549c14673"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","4f3519564d6d7c764cd5acbdc7d5fd32"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","382344f7f03f088c598acb1e2be27e92"],["/2023/06/06/v-for循环图片无法显示？/index.html","d1252db167d914a883227e8559c62b7b"],["/2023/06/07/8086微处理器/index.html","1fdf911fee4446c2fc3a5ad09bf549ef"],["/2023/06/07/微型计算机系统/index.html","ddd5181e538eb09577931ff8cc344b71"],["/2023/07/15/计算机网络体系结构/index.html","4ef478a97d9735ed02285d3541ec8850"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","55240f4fcfa806f8a5e3a06cf94d9caa"],["/2023/07/16/计网-物理层/index.html","1bb8dbf7926b2033c02ad2ed6f210109"],["/2023/07/16/计网概述/index.html","f3ace5fb1513b3657a586ba989c548bc"],["/2023/07/17/vue3-App-vue相关报红线/index.html","e8e326957ae361dfb48861ebac5a4b34"],["/2023/07/18/实现二叉排序树/index.html","f442e707e7e811415565a23121f5068d"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","2707512623c787915e92c9d6606eae36"],["/2023/07/25/二叉树的遍历/index.html","352b5e4feb4e815c10d5ef5543ebffaf"],["/2023/07/27/vue双向数据绑定原理/index.html","14bc25f0c7f2b4757473eeaf41f7ea57"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","801c6d9c6ab3f63b78d2908ad90a4776"],["/2023/07/29/HTTP协议/index.html","3047213800043e41d709eb7ee3c5c32f"],["/2023/08/01/HTTPS协议/index.html","65e3186e45e22c442e371496ea0efe8f"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","956a2914f4b92bb1b5d127ce7f952c25"],["/2023/08/03/HTTPS-RSA握手/index.html","7d4bc323b1b039fb2fa5e903d68f1e5f"],["/2023/08/03/HTTP缓存机制/index.html","17417c20dab102b66506ac1a05b030fe"],["/2023/08/03/LeetCode-112-路径总和/index.html","edf0fe4ad6238a31dbdeb8c58e4e2214"],["/2023/08/03/LeetCode-113-路径总和2/index.html","64d3fc1dd9cd3f33d7857eaafb5263a6"],["/2023/08/03/手写Promise/index.html","f80fc135b6d42d8770f99788d46645b4"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","aeb9516ca123cc19ff90871cd4693d62"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","42032f90593b98f222adff29001438d2"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","a2672e8cd889aed52a755cb514d5b450"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","386b3986ba229a6561943d34d69876dc"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","f8537368ce959327f7b0d3fcd390ba4d"],["/2023/08/05/事件循环机制-Event-Loop/index.html","edf72c8b2f1722e28b2e4da82fbb1218"],["/2023/08/10/axios的二次封装/index.html","4772ea4fa1a373b043c47490ec7bb4a0"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","e3aa5a3f239070953ad65a5c2b5962eb"],["/2023/08/29/TCP协议基础/index.html","ec44e1c510d58ccadc565b1c4294dd99"],["/2023/09/01/把一个数组旋转K步/index.html","93fd86715e9a31313778f3dc68354646"],["/2023/09/01/防抖和节流/index.html","c6bca2f4df9b2380c2f65930639ab946"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","d6b4f8b15fa614a82a7631d9a547dcdc"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","23eabc90d6c97e32b1e501ea1f20e46a"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","5c0b846ddca65df132580917d3fe0473"],["/2023/09/03/LeetCode-904-水果成篮/index.html","0ebd4222fdd69baaf966042740417ca2"],["/2023/09/03/TCP三次握手详解/index.html","a0174c482368c08bdede1507b8ebe00d"],["/2023/09/04/LeetCode-165-比较版本号/index.html","c683f2c3d481c351b0b0bf1734c5e9ea"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","5072b0110ae34635b7c2126a4e6b55ce"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","2f701632c58175a9bad97627579f60a5"],["/2023/09/08/LeetCode-77-组合/index.html","8c4d9a77ad1f6d60e366c7a01c9c347b"],["/2023/09/08/闭包/index.html","47818592d89ac7db2bf6e0d6838876e3"],["/2023/09/09/Validate表单组件的封装/index.html","436d8a36a89993becf30ddc046b0d6e8"],["/2023/09/11/关于this/index.html","539782eeaf19d3ce638d81494a30d5ba"],["/2023/09/12/LeetCode-15-三数之和/index.html","be08f4c1a1b120e7ac994457fe9c5d00"],["/2023/09/12/LeetCode-46-全排列/index.html","8b93ec02c124dd89978075ffce4f6a32"],["/2023/09/12/手写call-apply-bind方法/index.html","e744cf2347a02532089e39b45b4c4d26"],["/2023/09/13/LeetCode-912-排序数组/index.html","801a2018c0d7172ce3ff07d80a42e0b7"],["/about/index.html","8bf8236979b65c1f0c32644aa8faa835"],["/archives/2023/03/index.html","f00a54176c850e0ce919866553708e6f"],["/archives/2023/03/page/2/index.html","f983b421021f6c3541d622e79eeb9228"],["/archives/2023/04/index.html","eea1fb8971ea9d9baaca7eab9542608b"],["/archives/2023/05/index.html","f6089121714bf92df0deaf5d432d63de"],["/archives/2023/06/index.html","b10b8abaec89e68c9a225491f7285845"],["/archives/2023/07/index.html","3d9329a3bef9e82c7032572e9cd0a3b4"],["/archives/2023/07/page/2/index.html","bce37ba5cf7a339c9cdc3dff5800707d"],["/archives/2023/08/index.html","ab02dad5975defa1f4111a7d2d4c8cc0"],["/archives/2023/08/page/2/index.html","a4df92838bbaf343006483d09430f8b3"],["/archives/2023/09/index.html","12dacb69b1d6b827dfb417b3d662360b"],["/archives/2023/09/page/2/index.html","288b2f3ee74e09472f7ee8dbeba495aa"],["/archives/2023/index.html","5807a07c2f930cb92ca1af4841379fcd"],["/archives/2023/page/2/index.html","6a8a8b49f39fad818c190ac50977d0b7"],["/archives/2023/page/3/index.html","aae257fa2ed5739787a8cc42a1311bff"],["/archives/2023/page/4/index.html","9c43f91c70b69e7833e9cc3126cb78b7"],["/archives/2023/page/5/index.html","0dbc9eae333c94c828cc79f109b68a69"],["/archives/2023/page/6/index.html","abf1ebb7d9c03f1a4295b57444948f93"],["/archives/2023/page/7/index.html","1a87bf3309b073e24cbe9793f33ebe4d"],["/archives/index.html","4c19f4ea48aadc364dcd0ac1ee263c68"],["/archives/page/2/index.html","497d32168ce3e822a24e4e5a2a074f4a"],["/archives/page/3/index.html","fa6767e45bc90e5baf1d57034916a51d"],["/archives/page/4/index.html","fe544961fed5b56291e2e8c6133a3f8f"],["/archives/page/5/index.html","cdde5feef394a341612a18442935ccf9"],["/archives/page/6/index.html","f94398d63ef8376c9fd2f43c7a368621"],["/archives/page/7/index.html","68427a37ab9bb4154fe929f474fd7d54"],["/categories/Hexo/index.html","f996256ce35e91e8f3a0fa68564f6428"],["/categories/JS/index.html","8c1f4185f4e3343efdf56336c9f196d1"],["/categories/JS/page/2/index.html","0cbf21d9ecf969a532cfca82054be550"],["/categories/Volantis/index.html","0921b7e43b6a708ea51e74d6ecf67c26"],["/categories/Vue/index.html","3e0901cc930bb4df23cb802731d348ee"],["/categories/Vue项目开发/index.html","cb450fd24eb1201e4edfe36f4fde91cb"],["/categories/index.html","457ae8a09430510666b9b040c1f0633a"],["/categories/微机原理/index.html","f2131d6864e2329b86a71e559a7c3e46"],["/categories/数据结构/index.html","ab37200ca99c43f370c7d19e414a573a"],["/categories/算法/index.html","a7fdd01a9d00d2e2836b48e193c4708e"],["/categories/算法/page/2/index.html","047fe5bd477bda7c57c45bbc0be4aa6d"],["/categories/算法/page/3/index.html","6f839077c28c834875a2825360b4c036"],["/categories/算法/page/4/index.html","83d46272c80c7cb4c74c7523a172fde3"],["/categories/计算机网络原理/index.html","e00994894b14ff0748fba8d728d5191c"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","783a232958267b98961351414320ecbb"],["/history/index.html","6bd1d864465f14e2e0200ebb8bb5b5fa"],["/index.html","09f4fac4ffe3fe56c70bc1bdf07ad134"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","a6f3d942067674dc096ea1b0f0cad119"],["/page/10/index.html","21e5ccf6111dc41e40913ea15e4c5c6e"],["/page/11/index.html","0ee8921de94125f9f6f660947d55cdb0"],["/page/12/index.html","7add4efbba82a25b27aa40da038121cb"],["/page/13/index.html","01b6aaa7f1a6f5344ca24f5fedb82495"],["/page/14/index.html","b4d5e17d228542514f6e86d5fef1c5ef"],["/page/2/index.html","b747b5841d06bd72944797bb1ff18794"],["/page/3/index.html","f5c40cf9db4f3a2a8e9152fa23cb20d6"],["/page/4/index.html","744cd5d3bc2561539ceb8591b5fd031a"],["/page/5/index.html","c20ca43ab32888e77e35fa25e900477e"],["/page/6/index.html","1fbcd415571c0b5d68a3eff9441b2e8f"],["/page/7/index.html","85aa048ce897aecc8ad2a7ab8ad6b031"],["/page/8/index.html","cb9c4225c209f124379e1e570c90d996"],["/page/9/index.html","5c6feb5d36ef9bf30afc60e9d402e9f5"],["/sw-register.js","2e6cd722bc3b170889ef68680dfe02c0"],["/tags/8086微处理器/index.html","b99879c81d2ecf49db0bb3d1ab4db53c"],["/tags/C/index.html","d7fb3da59ae16bf26b9b8723ebb53d4d"],["/tags/Eslint/index.html","dc728d4e90e7fa22ffcc3d57426a2bc5"],["/tags/HTTP/index.html","641cb8e298185bb5d833bdf26e19ee13"],["/tags/HTTPS/index.html","ee5c032c19433057d3be56ca25af541f"],["/tags/Hexo/index.html","ce206c7ca2aba5d2720bf1aa8c7daf47"],["/tags/JS/index.html","4a75016c33d07de59d018266aa835fef"],["/tags/JS/page/2/index.html","c43571d9ddfd0da0ae30b7f4800fe040"],["/tags/Promise/index.html","1d1e079f4bc0c33c1aca52e47b02ed3e"],["/tags/TCP/index.html","1dc8a74e963b48b14d688488c41e4b14"],["/tags/TS/index.html","139f64388ee5a8854a5531229a1ae11d"],["/tags/Volantis/index.html","d9f6b9c6252bb39a223d608fc4d29c00"],["/tags/Vue/index.html","8bc39d333a7930380ac18227804ff3ea"],["/tags/Vue3/index.html","985aa9d2e25cec721b494336e0736016"],["/tags/axios/index.html","cea049d6a3888c58e43b6a48fe777393"],["/tags/cz-git/index.html","9f702f5aa591cf74fdb0f65a966e9be5"],["/tags/index.html","125fd7665a669393652bc17ebeb95645"],["/tags/prettier/index.html","689bfa3f50b57455fa968bf1cf525eae"],["/tags/串/index.html","6f01eb44bf988ff819c5c10ab734802c"],["/tags/二叉树/index.html","92dd1c378e2bd071f461585bcfce2919"],["/tags/二叉树/page/2/index.html","3440e08b7df80c37c5432669eb245419"],["/tags/双指针/index.html","e6398191d9dd44e68855cff184bfcbe2"],["/tags/双端队列/index.html","35063a26347577fe64cf459433458c58"],["/tags/反转字符串/index.html","25c762883f662cd8ef69196197831118"],["/tags/哈希表/index.html","982748e3e9e9298a3c258239348d5c82"],["/tags/回溯/index.html","82afe586312f558b54ec89f2d040282a"],["/tags/图床/index.html","ad1d5d42cabd68604c6ecaaa9b881e14"],["/tags/广度优先搜索/index.html","20f9d2a5d33ec255a1e274f123f4556c"],["/tags/微机原理/index.html","99b154a37b5e0347e16e8a6c1f3a368e"],["/tags/排序/index.html","2226270137c683df81c363c19f41a86f"],["/tags/数据结构/index.html","2ad7c806f9d10298e2416ff9b0fa5145"],["/tags/数组/index.html","dea6729c1b2d55a99f86f481fa4b81a1"],["/tags/数组/page/2/index.html","555945e38ef1426687013157ec4f81bf"],["/tags/栈/index.html","5a170eecc85217f448155e7d1f4ebfb9"],["/tags/深度优先搜索/index.html","f6ec83acdba38a225b719c9c80725584"],["/tags/滑动窗口/index.html","4f99257d86ba0319d8c62418165ba6de"],["/tags/组件封装/index.html","e5d3d243f283699aa7995a7e8683b1da"],["/tags/计算机网络体系结构/index.html","2fe5a5e30d49d2314100a7035795ad61"],["/tags/计算机网络概述/index.html","90fa22581b8b8fee3b7f88e563e9f54d"],["/tags/计算机网络物理层/index.html","978068d250ca6c725ef1652cb32cf528"],["/tags/链表/index.html","ad299eace21e757db401604b30b7d657"]];
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
