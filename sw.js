/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","397d6db2d0f7a795978fe67e1f0a8213"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","8b9095c23986b9e1b40f8d3d01bc9700"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","75c072b7873c083c54549c43b6007ba2"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","4fe9e7e9a3f8deae78c6f2fbdaff2c3a"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","7e29b5cb3e5f7d75430f7258d7aa4aca"],["/2023/03/20/电商后台管理系统/index.html","36802ea2e06b6737f6864d7d580f8b14"],["/2023/03/21/Hexo博客搭建/index.html","193d47d4314b371b8ace66661fb27368"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","27dc2eddd7444d7e799d2c037c8e59a4"],["/2023/03/21/Volantis主题的安装与配置/index.html","3525d66395d65d8609183f12961305b3"],["/2023/03/21/单链表/index.html","bca57b479a821d6eed2babbfcff3d80a"],["/2023/03/21/排序-快排/index.html","01db88729f7a66c14b308c9be6ec13f3"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","ef80deb6825fa694f5373e840dc898e3"],["/2023/03/28/栈/index.html","0627253cd66547f15573f6df2bb54c48"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","2ef78cd348830241c04da02cb1c5a036"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","5d9517ce7a90fb6322f7345812825a80"],["/2023/05/09/LeetCode-383-赎金信/index.html","d3c25373d7395266813b68589bd0e640"],["/2023/05/09/哈希表/index.html","173e9c4937a467607b9d23273ae23dac"],["/2023/05/15/LeetCode-454-四数相加/index.html","84b5b2a806e0303c6838cbde08007b6b"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","e85f5df64bbac51477dcf34c7eb84d33"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","64455535c7869fb8fbab1665411a729b"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","28402d0f2c4220d309eca136ad4a905d"],["/2023/06/06/v-for循环图片无法显示？/index.html","5e2a1fad0dc344f85c67c9bac2ba925e"],["/2023/06/07/8086微处理器/index.html","e8042a0314af4a23c266c89fc71e488c"],["/2023/06/07/微型计算机系统/index.html","69effc9a3c3a2b2b7209ce6d7f4e9321"],["/2023/07/15/计算机网络体系结构/index.html","c0e958de514234cc4006c831c5021ad3"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","e93ef7f51a3dadf757f5a07bf627b15e"],["/2023/07/16/计网-物理层/index.html","9667713270b8be88f42ef7dcc8ce56a7"],["/2023/07/16/计网概述/index.html","3b2f91e82abfe6523220954ce2a7dd58"],["/2023/07/17/vue3-App-vue相关报红线/index.html","9265e5c4c2fa28a37e0ce6b002d4af68"],["/2023/07/18/实现二叉排序树/index.html","c32d940814e4ab6df2c23c5f406c32fc"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","d19baeef80daf409038a2df7b3e3897d"],["/2023/07/25/二叉树的遍历/index.html","4aa6d74982662ad5f48437a1a2814534"],["/2023/07/27/vue双向数据绑定原理/index.html","5f949c77362fd42f36993b902efb674a"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","a7aa921216f00af09d6579264c607da2"],["/2023/07/29/HTTP协议/index.html","7c9f156a46eff42ebf3636f1011fe751"],["/2023/08/01/HTTPS协议/index.html","ab72bdda39958f8e21bd1d0a961f8fce"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","7804ab066db30fe6beb87fe4068971d0"],["/2023/08/03/HTTPS-RSA握手/index.html","b0e9307d22bb1ddcb7f58e4b7d899ca2"],["/2023/08/03/HTTP缓存机制/index.html","20d4ddbccffbb17056d90e5b35ba5661"],["/2023/08/03/LeetCode-112-路径总和/index.html","1dc9b811e9e69857e54793858116be76"],["/2023/08/03/LeetCode-113-路径总和2/index.html","b839ae285d57cb6b459bea8caa87a340"],["/2023/08/03/手写Promise/index.html","5e9fe1cc224741fc0320ef1b574e99bb"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","d782759c5a29f85a2bbf678201185a9d"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","3781d2455348fd319ea470e0e60853c8"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","abe9175224cdce43fb149944538f585d"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","be2cc92fc751e382b7510de6b325b007"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","b1717cdc42285c9bd70db7326edb3838"],["/2023/08/05/事件循环机制-Event-Loop/index.html","998ea42e90c152c375a58890b6fc6555"],["/2023/08/10/axios的二次封装/index.html","f8047666940d956155c4e4d564ba65b6"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","73e376034e0715adb54e98b623a07884"],["/2023/08/29/TCP协议基础/index.html","3d93f8a93a0ae86311303c2382b2af8b"],["/2023/09/01/把一个数组旋转K步/index.html","89dfe617698ef79d5218e134f86a2544"],["/2023/09/01/防抖和节流/index.html","b4780e282fe45a6500e4fdeb9f2a49a8"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","bb763f5b1acb86526726f6a47d65fe8d"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","8ebd3ed8a68e53f7a2b015b53191b839"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","6b5887d6fbbea20348639f4e194c90f1"],["/2023/09/03/LeetCode-904-水果成篮/index.html","45d145f74c84910142682cfb74c09c77"],["/2023/09/03/TCP三次握手详解/index.html","ef80ff710454a9c0e5051cdaac0987f9"],["/2023/09/04/LeetCode-165-比较版本号/index.html","46af06508673ba3cee6d5ec68e7f44cd"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","9172ff22760c6234a938b1dc2728113e"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","ec2fbed49001393f382e01c19780fd30"],["/2023/09/08/LeetCode-77-组合/index.html","25165a8d64cc9d4ded5cd30f94705053"],["/2023/09/08/闭包/index.html","d93d42449cce42a77aca61ff1de2046b"],["/2023/09/09/Validate表单组件的封装/index.html","9715d89e88a7889f99a46a63a4fb4e37"],["/2023/09/11/关于this/index.html","f71ad0cba05fceb22584117fcd045b15"],["/2023/09/12/LeetCode-15-三数之和/index.html","c5bf23713802ab3db37879167f1b942d"],["/2023/09/12/LeetCode-46-全排列/index.html","3d3cea61bfa376a95deb59b3c6ab4a0f"],["/2023/09/12/手写call-apply-bind方法/index.html","0a2de26d1f7084613da8745bad8a5ff1"],["/2023/09/13/LeetCode-912-排序数组/index.html","61a03a38daa28109d1a60d2d70ccf28f"],["/about/index.html","9f49c0e6069563e7871cf1cec58bcc07"],["/archives/2023/03/index.html","367b39a7e507035ee69e6223c7f6eca4"],["/archives/2023/03/page/2/index.html","42f0f33e337c736368f5b4c718e2d320"],["/archives/2023/04/index.html","fe8c1e2898181c7c2359f6f7dfeb0449"],["/archives/2023/05/index.html","171228ba813b14b9067cf2f9f3e048cb"],["/archives/2023/06/index.html","0aeafc01863832c270a2e8789d071b08"],["/archives/2023/07/index.html","a450bc32356d2031417a164ad50e29d4"],["/archives/2023/07/page/2/index.html","0d914a09127e361e3ee7c4c830d964af"],["/archives/2023/08/index.html","279e4c4effa8ebaf852ee8fa54b0a071"],["/archives/2023/08/page/2/index.html","f8f08af6220bcf5969bab64a2d7fbe0e"],["/archives/2023/09/index.html","b1247fc14a3a2167823d0e1c56322c8f"],["/archives/2023/09/page/2/index.html","3ccce53f73886a54748798c024a4e056"],["/archives/2023/index.html","52f71e82e0358291ffafcab96d945465"],["/archives/2023/page/2/index.html","2a7505cdcb2e974308569a49e5c4ebd9"],["/archives/2023/page/3/index.html","db9026a55869b385d4efb51016b6bfcc"],["/archives/2023/page/4/index.html","31b49bf104567eb672b034789db177d6"],["/archives/2023/page/5/index.html","7a529b7a3ba50612570b963d698a94a7"],["/archives/2023/page/6/index.html","3f2c42897920c0f8448c2e533e3166de"],["/archives/2023/page/7/index.html","64856ac81d42b32b66ce7f19d39a90ff"],["/archives/index.html","3388c8703613561c3b0c1ead6f395218"],["/archives/page/2/index.html","d91fe25f223d9bc6fcb234335238887b"],["/archives/page/3/index.html","27b5294a8902a2b5258a5175853a5138"],["/archives/page/4/index.html","89dc47b67a4dfdf2d1a518f9642b7cde"],["/archives/page/5/index.html","2daae952b99d0ab2c5fd634fb4b94bea"],["/archives/page/6/index.html","a6aabc2f3bc79a8392c4bf5eee57b396"],["/archives/page/7/index.html","4060afcba3bc12ffae79e3ad4bfd7ddb"],["/categories/Hexo/index.html","6130137601d9c59ed08347a60a8b9ddc"],["/categories/JS/index.html","4cb390ed96ace755169659604dc3df36"],["/categories/JS/page/2/index.html","52e1c8f66876cf08d2a4fd649a73da87"],["/categories/Volantis/index.html","a8c73cfc534d7a50a5ac8da13610bda3"],["/categories/Vue/index.html","36ff1d18ff0d11a1ffaf2f6bc67c6a27"],["/categories/Vue项目开发/index.html","ff20dd694fabf872776fd83a97f12b1e"],["/categories/index.html","ca99e45e283c37bd5fd773c8246dc77c"],["/categories/微机原理/index.html","31b76e1335730bc4d52d3bc4ad0b9dd0"],["/categories/数据结构/index.html","024850cd53a5dfd9f9ffadeb1e7a6157"],["/categories/算法/index.html","2cf48e95ca9456cdbe1df2e5aafaf09c"],["/categories/算法/page/2/index.html","c7e19f43d9339bf7f17436f246e28165"],["/categories/算法/page/3/index.html","2380187d4d0f56e3b76580bd34b6ac9c"],["/categories/算法/page/4/index.html","b819ca71c032ec436cdb4763885f9e06"],["/categories/计算机网络原理/index.html","a57bdff65ea11c0a469d6ceeca5892a9"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","9d1d54985be3bc0b2f3bcf690e06d7e1"],["/history/index.html","3605c293eb192fc90f26fdc30da4bebf"],["/index.html","fe18039cef40adaa34f67eae0226d0b0"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","1c1c11b2b9fce2ae378f1c5bd2b42cbb"],["/page/10/index.html","fc24d4de9418f0fc5eafdf453077e456"],["/page/11/index.html","dd278a80602b36049958beecc5eb97cc"],["/page/12/index.html","57fdd3ca2257810a19bf99cefbbfc857"],["/page/13/index.html","4a123e35d257996806d7315051ff3c69"],["/page/14/index.html","d946091948099bb87bcd47baa2521f5b"],["/page/2/index.html","b25cb809cb3cf94ae0cce72d4ec164a4"],["/page/3/index.html","cb621eda41d950d248f960a6d57ce56e"],["/page/4/index.html","78e84f6c059d80aff7f8ae67e8780ea8"],["/page/5/index.html","5ac2b3141f84e5a070ff18d2e867bc34"],["/page/6/index.html","50ba79a808b5649efbde60f774cabd1f"],["/page/7/index.html","59eb8837f2d752c52a11d5eef7eddb58"],["/page/8/index.html","f0d0091d507f36572afb52b58f407816"],["/page/9/index.html","46f9f388dcfb1a8df761034acd1f3148"],["/sw-register.js","2ccb1fd7588c50dcb0744b6c70c4adf7"],["/tags/8086微处理器/index.html","cf09d96669b6da969ccc099471fe6258"],["/tags/C/index.html","1ed03cdd5393e4e0b7490de47ba4ce81"],["/tags/Eslint/index.html","ae31276ae5dce24278ca77d682a38a85"],["/tags/HTTP/index.html","c617d1715ef499dc8aaa171f63648cda"],["/tags/HTTPS/index.html","1935efe5011b56e5809824d831c063bf"],["/tags/Hexo/index.html","9181d467d490ba41ee886fe3c97bbb0b"],["/tags/JS/index.html","73a2a47898027b565fbbbc275be63b0a"],["/tags/JS/page/2/index.html","c683413f135aabe12deb293a104517a5"],["/tags/Promise/index.html","a309ebb0c142c58827957ada216e8d09"],["/tags/TCP/index.html","cfb0d91cf60b72dde8378c04427584dc"],["/tags/TS/index.html","6fd1292713eaaad33bab05db28d0df0b"],["/tags/Volantis/index.html","9b13802d6e27a8b359570a36b6bc72e9"],["/tags/Vue/index.html","d40bdac4f566710526b6cc9aaf55cf1b"],["/tags/Vue3/index.html","f7e5411e3e429898d272a09a316eb38d"],["/tags/axios/index.html","3fd5d9ab3478e46f6b37a05ca2f37f74"],["/tags/cz-git/index.html","18ebfcf340c0bd5184d5d7ff773ee327"],["/tags/index.html","3d7953c97f6c81615854470cc139c71d"],["/tags/prettier/index.html","0c9480c08a267c7bcfe88088aae98d79"],["/tags/串/index.html","a53832853882bdc210303f1efb6e544d"],["/tags/二叉树/index.html","11de243c0dd51e209ce6a40d1a62e764"],["/tags/二叉树/page/2/index.html","0a440b388a93dc9f3964ef44194d3a6b"],["/tags/双指针/index.html","6a0ded66bdb66e0f8238b8a2559c9c65"],["/tags/双端队列/index.html","5b6ff3396725f64add5d6eca7b32a48f"],["/tags/反转字符串/index.html","16897dc4cce0870acd9456b83b396a50"],["/tags/哈希表/index.html","6a94a5e6cb2bbe5d128e3b3fd52691e5"],["/tags/回溯/index.html","da7d79b0b31339df6321874870374484"],["/tags/图床/index.html","2dcf3f37b75d8e2559ba594d60a573cc"],["/tags/广度优先搜索/index.html","a880b3353f9ba74f7045259877db7ab4"],["/tags/微机原理/index.html","59d8759042063775ba225065e5879b50"],["/tags/排序/index.html","d1e4729803274a6da105e96599d9ed26"],["/tags/数据结构/index.html","420782b84b2063eb258332951d8ea7dd"],["/tags/数组/index.html","9e17769fac54ae70bc095b13da8dc75a"],["/tags/数组/page/2/index.html","f068e63ea257b4c0be03508d9a59f313"],["/tags/栈/index.html","942e7d395e0a64ab0fba535eb46499d8"],["/tags/深度优先搜索/index.html","08ddcb88062469bef4a79ca6c20fb9e2"],["/tags/滑动窗口/index.html","e1945bc5908481a6e90dab7472c74024"],["/tags/组件封装/index.html","c78edd49f39f2fb65226f39d5a745c79"],["/tags/计算机网络体系结构/index.html","888d511ca732b84f66b07e8bacf8e6f3"],["/tags/计算机网络概述/index.html","14983c30363fb9b06e1a99f998db6732"],["/tags/计算机网络物理层/index.html","2071a9829ef887b2a1da82e18ad0ca2a"],["/tags/链表/index.html","7e5b7e2c22e88beaf100936b4b5e4e51"]];
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
