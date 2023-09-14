/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","733faf750dbf1a512165b7a804890503"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","315431c3894543a1e86be74ecd1e43bd"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","47bb7bc7e09b1b9e949c55002debbf55"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","72fe66913d13152f3ac9bd8bdaa9055d"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","39da818ac896755a19e3e84d5d6fa978"],["/2023/03/20/电商后台管理系统/index.html","bd4645c395203543b0ff83833d44721b"],["/2023/03/21/Hexo博客搭建/index.html","7e28048628df9ae5d8eff6d28d932d32"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","31f77dc602b683ffb27dfa03fd00c85e"],["/2023/03/21/Volantis主题的安装与配置/index.html","78c219e9405f8dffb9b59746c9e86223"],["/2023/03/21/单链表/index.html","b363a14b71a16959b15a26e5818d994b"],["/2023/03/21/排序-快排/index.html","b97fabcc99422679a415d40efc130758"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","aff174a9797cdf2a480b2eaad86a1a18"],["/2023/03/28/栈/index.html","cb28cc1f446d8ebc7eaf39126d0ee8d9"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","61de45929a9f317c31571c4ef91a57df"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","220fc05287a0da71caa8bf547b05f6b7"],["/2023/05/09/LeetCode-383-赎金信/index.html","de97c8899f5251b8c0c6e94d2077fbde"],["/2023/05/09/哈希表/index.html","a8eab6a8ece4d297ea95b6dd85e5ef5a"],["/2023/05/15/LeetCode-454-四数相加/index.html","1680c7014604e1eb8ee0a84ed2e36b1f"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","d3b73e2a8beb6f2fdfb2e65db9231157"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","e23be12abd805f009af24eeb6ae851c0"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","18754a1afe8f5e85ab99d44237ac5502"],["/2023/06/06/v-for循环图片无法显示？/index.html","c5f0499a4e1c78b00af14c9b45914248"],["/2023/06/07/8086微处理器/index.html","9f922a79623c0329e8c1fdedb54692f7"],["/2023/06/07/微型计算机系统/index.html","199ec1fedce97e17fbe1c9257d2fe479"],["/2023/07/15/计算机网络体系结构/index.html","0e63d60f412d3acfc22a594c578b9fe4"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","40ff5caa93b3405507552aa4e3f0bd16"],["/2023/07/16/计网-物理层/index.html","a2c847dfcf7e8276e808d8e58a90b50e"],["/2023/07/16/计网概述/index.html","53106061957e5e8ea7c41759170eb666"],["/2023/07/17/vue3-App-vue相关报红线/index.html","5a9c67bb8311ea681338f4d9fc8ab40d"],["/2023/07/18/实现二叉排序树/index.html","d0e468624f72a02f83bf43899448ad9e"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","fb1e5f3fe752c6c44717ffcc9bc2365e"],["/2023/07/25/二叉树的遍历/index.html","a9670e4ea2e6acc614e620c1a78b29d0"],["/2023/07/27/vue双向数据绑定原理/index.html","21ded635dbf63b703bd36cec222b0a8b"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","3aa5f3405148f2f6d64a527b3f1a85a9"],["/2023/07/29/HTTP协议/index.html","15ede2831b01c99c6c415567e82d7cd4"],["/2023/08/01/HTTPS协议/index.html","3dd6f8a9b05b4d79cdf972f1af73f49a"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","c456de06c79ccade2875db5ee6a95006"],["/2023/08/03/HTTPS-RSA握手/index.html","f23bb7a0653dccc59c6495d3bbdc4f5e"],["/2023/08/03/HTTP缓存机制/index.html","93bd3864959440417fd96fdd54794155"],["/2023/08/03/LeetCode-112-路径总和/index.html","bbe3be43caec6ca63c70348e22bce940"],["/2023/08/03/LeetCode-113-路径总和2/index.html","80cef2f0188f6d0c59f674e9d89c4ce7"],["/2023/08/03/手写Promise/index.html","377ad9908a15561a77d3bc17ae822a9f"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","ec4d89adf32cdba262e736f96583a3c9"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","978d25d1ab1a9b407cf8a2364b039b4e"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","d8f59b41e8d4b8cc8d5c0e4ab8efb3b1"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","7a43f3e72e6d4641aa309df6021f65cc"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","7c9c5c7ce1cf73c01ff012643e9f397e"],["/2023/08/10/axios的二次封装/index.html","6817f56b7385a2bbf06c2ded29947d11"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","af84f2c46cf36a23d83c771d9685c381"],["/2023/08/29/TCP协议基础/index.html","655e0c01d35106674e18ca4f557d6b86"],["/2023/09/01/把一个数组旋转K步/index.html","6aa65a18fe2dedf486789cc7e222f66a"],["/2023/09/01/防抖和节流/index.html","8c28476230fbae18f4458ba26e2ef507"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","005a278774d0ae5c31433b4ad435f1d3"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","01b122880aa96278861a56b3938cd97e"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","40ba6e6af1607c7435d3775da7780ec5"],["/2023/09/03/LeetCode-904-水果成篮/index.html","b93469b42106870f7c8ee2440788e1ab"],["/2023/09/03/TCP三次握手详解/index.html","6ab215a359ce21ae410d07e4cd86b26a"],["/2023/09/04/LeetCode-165-比较版本号/index.html","6680705190185033f83a894e4e18e6b6"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","e334941bf5dcb7b3eac481b0c553ba29"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","e96f56e68d7f872053d6fc5c607e2b97"],["/2023/09/08/LeetCode-77-组合/index.html","6686c03f0afdc08edbb88f86da262213"],["/2023/09/08/闭包/index.html","4c1dfa1e237b3f524eaf991859a5773e"],["/2023/09/09/Validate表单组件的封装/index.html","1ab65c165b4209b7d717d6c080df420c"],["/2023/09/11/关于this/index.html","62cc830d93645c372b7f2895d7be15ca"],["/2023/09/12/LeetCode-15-三数之和/index.html","d3859b0111b95a99bb6ef0c1b0bedb24"],["/2023/09/12/LeetCode-46-全排列/index.html","a1c9cbe30a65383f331232b5bde9a12e"],["/2023/09/12/手写call-apply-bind方法/index.html","482d9201b63b998269c88f4ca16b670b"],["/2023/09/13/LeetCode-912-排序数组/index.html","7cea20c57d7b56851a91334a8ad5001d"],["/about/index.html","0c409e6ee8fcf37bc9698af252104fb1"],["/archives/2023/03/index.html","651bccfdefef245abc89408a82f7dfea"],["/archives/2023/03/page/2/index.html","bbd933d73ca3ebd001a1d8d1bfb92f07"],["/archives/2023/04/index.html","4e7a19cbdbc83f060d671599d9d53786"],["/archives/2023/05/index.html","d6adff0a0071f96c2e9df6747834328d"],["/archives/2023/06/index.html","dfcc87c50639991a0b36d65448b7af0d"],["/archives/2023/07/index.html","73e200d0366f16693573ca6d7eac9ffa"],["/archives/2023/07/page/2/index.html","672af7fbe842d13e341ed074e5ff8144"],["/archives/2023/08/index.html","ec8f9f3923c2e32957697d0e4126706d"],["/archives/2023/08/page/2/index.html","c70366973638bdc1f900c60ecf940bf4"],["/archives/2023/09/index.html","b55999205d92fc89977458e808975322"],["/archives/2023/09/page/2/index.html","6783c6e7bb3064ef4912528bd8e35a67"],["/archives/2023/index.html","2dcd15e4fbfc109de814ed8a274c41f5"],["/archives/2023/page/2/index.html","e673e78fd94c6db89df8eb2b2a7c40c0"],["/archives/2023/page/3/index.html","abf6b4b68641793f170e11bd84eef1b8"],["/archives/2023/page/4/index.html","cbc928a22034272a6623c96c78400aa2"],["/archives/2023/page/5/index.html","63311544d6e9901ed69821ab456f4351"],["/archives/2023/page/6/index.html","c9a4457a5fdfd62f8e5c8997b2886588"],["/archives/2023/page/7/index.html","85f31a13073458d904b7d7fdc257776d"],["/archives/index.html","df912618d178aac0aed59c24df2d2f92"],["/archives/page/2/index.html","e88c2ee080e6f7ba4fc1ecd86a52823d"],["/archives/page/3/index.html","bef0993cfad473127e84ad46fd1a35ec"],["/archives/page/4/index.html","1e2cc2e21682ef96f705d88c8d09ee58"],["/archives/page/5/index.html","b165b16de39f3b9a5d6e80b626c7feba"],["/archives/page/6/index.html","182ff41c8db8cb4bbfc5f37e4448874f"],["/archives/page/7/index.html","b7093b0e9abbb87bc1526dfeb0245ff1"],["/categories/Hexo/index.html","cfa17ee9e70c90b4a67afd55c03633c0"],["/categories/JS/index.html","520ac8e5b9d7953198b3de10e6f7dce7"],["/categories/JS/page/2/index.html","fffc36c22d208794505b6671be501ebc"],["/categories/Volantis/index.html","a8530152c43a93d5ce30f68d009ed3d0"],["/categories/Vue/index.html","15ceccfb56ac7fc56275d493103db59f"],["/categories/Vue项目开发/index.html","faccca8f6564aa9638c72774f522193c"],["/categories/index.html","8858f9d4f0693b680cfa5442c05cb5a5"],["/categories/微机原理/index.html","9d047100b39d9cdaa0dd3ecd323584c2"],["/categories/数据结构/index.html","b4b0082bf9e6745f92bd63e96be66b07"],["/categories/算法/index.html","c64b6f8b22d4317cc52bde5e0082ffa2"],["/categories/算法/page/2/index.html","f418282b8ff1588bf5e7b63d82af72e8"],["/categories/算法/page/3/index.html","f4ba2b2a3f73ca9096ebf48a646a3401"],["/categories/算法/page/4/index.html","dfa01234adfb9cf6eb0cfdb50b44bbb2"],["/categories/计算机网络原理/index.html","bb2e11a70848b9a4512a52d516504c17"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","a44074cacc53de4d6250b4ecdc846418"],["/history/index.html","059644fbff215f63f12700716cafaae1"],["/index.html","ec2b503f6710cd13c8c6cdf31427ea38"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","e9e0902b92272a420ed7b7a0071ed008"],["/page/10/index.html","cd8c89557738f5ddd71965f4608f70a7"],["/page/11/index.html","fd650e7ac2f167686c6b4ead9b15113f"],["/page/12/index.html","58873da5a5f9eefa91c2fa9a61629da9"],["/page/13/index.html","4852649a16ac6d48e0ef5f2e2ecb110f"],["/page/14/index.html","bd05f7e53825e4f52806610d4af326b8"],["/page/2/index.html","b5b2f24d9a3410cfeaf53b2be23377ab"],["/page/3/index.html","ad6a2a98d324eed761a7904d4910a4f5"],["/page/4/index.html","35fcea1d1a9d86b26c952365ac01dc31"],["/page/5/index.html","dd52506921262fefe97ce0605a84d0ce"],["/page/6/index.html","c0fb4158bc8d0dfa98e6a883d5af50bd"],["/page/7/index.html","7822a70abc953395a96da765dde770d2"],["/page/8/index.html","7ac03cf90fd5217bc69e03c2c530f1be"],["/page/9/index.html","3bf0e711312eb883b03c8b6469287264"],["/sw-register.js","4915572901ffabb208791f4ee398e5aa"],["/tags/8086微处理器/index.html","dc1cc08942d90c56dc5d8b8fd6587ee3"],["/tags/C/index.html","8b0f3014a892bd780856bf636405c351"],["/tags/Eslint/index.html","b6d0a6370531bf5a322b43d16dc17ce7"],["/tags/HTTP/index.html","f9112483b58dbc8a9f94328aff985c72"],["/tags/HTTPS/index.html","07dc8efd6dce48b6dbfb34f7207d6a88"],["/tags/Hexo/index.html","e27d5beffd51775cbd46f2e9a06a2e25"],["/tags/JS/index.html","07a00d5a2c4d151c2c4c943d279442a6"],["/tags/Promise/index.html","84950cf683996f0025801c7cf2330d9a"],["/tags/TCP/index.html","23977a806a7878beb2922a1baf0a80c0"],["/tags/TS/index.html","919da226ff7d2addf4da8fc0c02cac83"],["/tags/Volantis/index.html","4ef06dc6adbe22d3c0ccc983ccd6142f"],["/tags/Vue/index.html","58d388c0effa4ac772de265f2676ad3a"],["/tags/Vue3/index.html","03ba945498508ff9c749634aad52cce7"],["/tags/axios/index.html","05b397a41968baf2cf7e761d4d373064"],["/tags/cz-git/index.html","2ae1468d1c57a60ab9d5ae567dc5d9ae"],["/tags/index.html","6fd1ca587261979bc83a193530aa8129"],["/tags/prettier/index.html","b4c236b82cce52c5a4e77f1b8c49bb5f"],["/tags/串/index.html","719dceaf9aee695a7a1f903668fdd6e3"],["/tags/二叉树/index.html","3000c2ae01dded1f5631e0d2b0610d59"],["/tags/二叉树/page/2/index.html","1d606436de37c7dd38a93e4b573379e9"],["/tags/双指针/index.html","9f9530a663597e6f9c3b39e8fcdd1627"],["/tags/双端队列/index.html","c28e3ad7ec492784dc27265c3ffc3646"],["/tags/反转字符串/index.html","ed0b07d50862bc97c6ed31dfb558fa0b"],["/tags/哈希表/index.html","229bc1a53c92f07776487640ab3e878d"],["/tags/回溯/index.html","f0cc6483142a76ba9b3eba9420579b11"],["/tags/图床/index.html","08d0f79ffecc1b8938074cb113779027"],["/tags/广度优先搜索/index.html","ce09311da4ac334082ae895be8c78df6"],["/tags/微机原理/index.html","23f74f57fd493c5bb9a12b7a356ffb0e"],["/tags/排序/index.html","8a7d733bd2acb88f99a86251764f9edc"],["/tags/数据结构/index.html","bdc3bc6084ddd62c663e8c70050e8a6b"],["/tags/数组/index.html","dfc23a762888d2522e2259c8005cbf5c"],["/tags/数组/page/2/index.html","08e8f630216f383cbf4cbda04f0d74a0"],["/tags/栈/index.html","71e6c61d5416a7a169d562e3b5fcc8e0"],["/tags/深度优先搜索/index.html","88e1c4e470a18479bc0460d92ef6f16b"],["/tags/滑动窗口/index.html","b8d6664615f33f0ddf8cd6dd4d1dca6b"],["/tags/组件封装/index.html","84bbd3644b8f328c8548c37c277d34a2"],["/tags/计算机网络体系结构/index.html","3dbd8318ba706709ff4156ae10436efd"],["/tags/计算机网络概述/index.html","1e8c430d53907dfdd1de0053c90595cd"],["/tags/计算机网络物理层/index.html","135dfefd594bd635a9f920f3af3c3780"],["/tags/链表/index.html","368ea35e1861211010a1d0d32f229c69"]];
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
