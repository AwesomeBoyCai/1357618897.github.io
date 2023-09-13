/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","b53c9766ad4ca5c8c94724a5422a38b6"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","f57d4466276608aeee0187c87d603269"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","734df47092841531dc5bf454cec19a22"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","85ace4ca53106679c37f61d731c0a0f1"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","a197a3426ddc33b3116fddb815bac407"],["/2023/03/20/电商后台管理系统/index.html","323dbdeb631f3ac856e122eef4b7eb7d"],["/2023/03/21/Hexo博客搭建/index.html","5e1bf7d13e3b1a3df92b032d64993a0f"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","19c2dfdfa8e5593a67ba4bc22e25672d"],["/2023/03/21/Volantis主题的安装与配置/index.html","a70338ea8b5a1e425a747e71dc505431"],["/2023/03/21/单链表/index.html","761867dbf8f955c6316d74013c0be77a"],["/2023/03/21/排序-快排/index.html","70ae690024a24e655fb092b339f45c40"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","9f954c76c9ef8f7b20299a0123e21b00"],["/2023/03/28/栈/index.html","e7ec3ad1e0eb965af5cbd3e8655966a3"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","40304c2a867702845916d0458508c1f3"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","b646bae61d23e2571eeea9511f41b12c"],["/2023/05/09/LeetCode-383-赎金信/index.html","baa5a64b2f0d933739a4e68771399d3a"],["/2023/05/09/哈希表/index.html","8ea1edbc5664d7179829a78542601fc2"],["/2023/05/15/LeetCode-454-四数相加/index.html","319ebb1a2817b7b7e866ca8281a7f5d3"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","b8cf2bd070d348f395e742359efd9d6a"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","d89071267f16f66e16cd55e2ae123015"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","9d1d043924c4eea92d430af450361154"],["/2023/06/06/v-for循环图片无法显示？/index.html","2e80993cc9653d34adbb7c363e537467"],["/2023/06/07/8086微处理器/index.html","8341e1c78dfa5fea3aa885e113c9da82"],["/2023/06/07/微型计算机系统/index.html","9f94e0ad8a700c1fc490d945fce2236e"],["/2023/07/15/计算机网络体系结构/index.html","935f5b2d0def06e62ee4e95ca864402a"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","f099ecdbdd6757444cb5877e25479ee1"],["/2023/07/16/计网-物理层/index.html","5df54b4f8d1e5000a6cfd946974f6243"],["/2023/07/16/计网概述/index.html","380a098bb0e8cff299420f4eede5b915"],["/2023/07/17/vue3-App-vue相关报红线/index.html","dddb387ae361f1f21fab6a84069f0849"],["/2023/07/18/实现二叉排序树/index.html","726fc4578a1743b69b2d07c76f28ae39"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","0b1a51602e17bc574c8307c637e68721"],["/2023/07/25/二叉树的遍历/index.html","5b12d0a24539f4f420d4347159665a6a"],["/2023/07/27/vue双向数据绑定原理/index.html","61031397209623832782470cd2717465"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","5c2a014901eb1b5a4bd3ea697676d588"],["/2023/07/29/HTTP协议/index.html","c5c44205178077f95c50c7419aa66998"],["/2023/08/01/HTTPS协议/index.html","a5d9315164a2de7dfbcc4571a9771ed7"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","ac90fae23e8463980b92a26d6395bcba"],["/2023/08/03/HTTPS-RSA握手/index.html","749ce1639bf23af01ffd099ac96da57f"],["/2023/08/03/HTTP缓存机制/index.html","d2fd388eeecfd6a24a877e942c6d225b"],["/2023/08/03/LeetCode-112-路径总和/index.html","1e02acb3a15f8eb71f0e7628cb4f61a3"],["/2023/08/03/LeetCode-113-路径总和2/index.html","91d251ba9b49323cafae9c18d35ca617"],["/2023/08/03/手写Promise/index.html","375d5297cbf732192e2d16b2f1a54599"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","5b8fcd906a9a949d36ec888531358e76"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","d3d751e4c2e88e7106629a86572460af"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","8a3a270cffcce63e922583dbb49c575d"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","cc009369819cf6ba6ead501bc62ab033"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","17dbf1067a5c087facb8496d3f851d8d"],["/2023/08/05/事件循环机制-Event-Loop/index.html","4f1ab49c93d49c8b8ae382e6d03e33b9"],["/2023/08/10/axios的二次封装/index.html","4eccb5bde3dc20d535201a97bd5b86d5"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","29bf63d72f08024fc1053631bcf20a0e"],["/2023/08/29/TCP协议基础/index.html","886cae6da77ee3a81a926bc104cf65a4"],["/2023/09/01/把一个数组旋转K步/index.html","f0631602eed80109a9144d70af037f6b"],["/2023/09/01/防抖和节流/index.html","947b8917f9f0b3431d333b69a9cf143b"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","53cd421e12ef88a16a56bc21b397ccf0"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","60400ffcd718b516c80f82b27bd5a89d"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","883f2c331aa785742a5c7a424104b25c"],["/2023/09/03/LeetCode-904-水果成篮/index.html","4238afabddcb36efc8024b6885232f24"],["/2023/09/03/TCP三次握手详解/index.html","bcefe1fa6a102b5cc5ccbf3cb3ee6554"],["/2023/09/04/LeetCode-165-比较版本号/index.html","3c837899bc7beefad3c9430d5cb5fe6f"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","bc91f2470f968e15b686650d9e417a37"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","d2d9b49b0352e112f5b1e9169043cdc8"],["/2023/09/08/LeetCode-77-组合/index.html","4963a078b1960635578116b2fa286887"],["/2023/09/08/闭包/index.html","3d2702e95c5df7e8a2bce9789762f070"],["/2023/09/09/Validate表单组件的封装/index.html","348ff427e9e67c1568c0abb779b660e7"],["/2023/09/11/关于this/index.html","2ee0411ecbcc737d4b8d5678944fd3d8"],["/2023/09/12/LeetCode-15-三数之和/index.html","b70557214447209054979268a52734bf"],["/2023/09/12/LeetCode-46-全排列/index.html","3a2da53b6d380dd856abd5911edfd587"],["/2023/09/12/手写call-apply-bind方法/index.html","a8a483445ab8b02b3c5d5153e8be3a9c"],["/2023/09/13/LeetCode-912-排序数组/index.html","2118cbadffdce103f7326e198afe8d3f"],["/about/index.html","92dbefb50f1868a5b5c4fcdab18a1f6f"],["/archives/2023/03/index.html","8ac161e86d2b13ea4ea14f7df65a8084"],["/archives/2023/03/page/2/index.html","344179e170e88e332af4275eda8da701"],["/archives/2023/04/index.html","86ff95168c4c2a1d87c6a652d7d60e24"],["/archives/2023/05/index.html","1e4167d05cba11d8741279d65fb575d0"],["/archives/2023/06/index.html","a7feec4e710e1be43f0fc3ed5e6d8d8e"],["/archives/2023/07/index.html","3052e28b861d0289f0bd8e599248a356"],["/archives/2023/07/page/2/index.html","31b650317fcc37f81d53a4a01c1d9cbe"],["/archives/2023/08/index.html","1dc90bc7bb4500223d4a2523471d52d0"],["/archives/2023/08/page/2/index.html","37b0c86026efc1823fc5b6a478421a62"],["/archives/2023/09/index.html","49b8b99d4c3721141a49a0bb8cb52877"],["/archives/2023/09/page/2/index.html","b950238bfdb90d8097c5c67d42556397"],["/archives/2023/index.html","412699e1804fbf06053fe2a0036b1d44"],["/archives/2023/page/2/index.html","80cc397c169f9a895cc78cce39844ac7"],["/archives/2023/page/3/index.html","35024a550c241a9d4c91b3330754150b"],["/archives/2023/page/4/index.html","df20fc594bb521d4ab0b486ea4458414"],["/archives/2023/page/5/index.html","53227595bce49e03a55d78c6d3570bb5"],["/archives/2023/page/6/index.html","a6181d69696759060603996cf01649bb"],["/archives/2023/page/7/index.html","a0903b474bd5ee476e87f09c995f98a9"],["/archives/index.html","7e45c960e19c3fbbd1d10033ce2ca74a"],["/archives/page/2/index.html","b3a9313ec18f1d39531dd5883f91f6a8"],["/archives/page/3/index.html","98f6e6adc139a290280db784f9964e5d"],["/archives/page/4/index.html","be2c4636a0e127cda22036812ba9bbaf"],["/archives/page/5/index.html","28f76f14183dc54c72589e640d3b266f"],["/archives/page/6/index.html","f32f6ac3bc68b0bc46f262f46d364561"],["/archives/page/7/index.html","399110b26a67faf73bff0769818ebbf6"],["/categories/Hexo/index.html","0be63141d77718b6cfbc2603326685e4"],["/categories/JS/index.html","4343c311b0475de4d70da8e37876e97f"],["/categories/JS/page/2/index.html","445e17c74fe19fbb1d31e35ac2afb103"],["/categories/Volantis/index.html","6b92d50ce90bc54b60bd7e7a7970e271"],["/categories/Vue/index.html","2ef63061498e581419b154e94fd10fd2"],["/categories/Vue项目开发/index.html","77c5b14e4a55183dae8fad93dd3b1c21"],["/categories/index.html","8a54e1eae26d6e33173a80b16d12071d"],["/categories/微机原理/index.html","4d14c3de07a0d3b4403b681b3eed288f"],["/categories/数据结构/index.html","0d5abb53eea84c27dd4b3bbbdc237aa2"],["/categories/算法/index.html","aaa9edec1df58eb1fbe16dc5920037e7"],["/categories/算法/page/2/index.html","fbd21b0b4a76b1de61bfa57813452926"],["/categories/算法/page/3/index.html","e58c77240ae08011085ecb1368c07409"],["/categories/算法/page/4/index.html","def7af002a9366142583e8dc07740ff6"],["/categories/计算机网络原理/index.html","511494cfde1b7c1fb1d110877013a018"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","c393c74ab07c278a02950a1e39aeac00"],["/history/index.html","c66f75d681d8e52b865870b7aa4953ea"],["/index.html","42be70e464673629c6828506753db232"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","d5ead26bd82962297e87b811b94af339"],["/page/10/index.html","5bcdd073b80b034a39fe69d1e33a9c91"],["/page/11/index.html","3c536610f43ae741236182ae3790ddcf"],["/page/12/index.html","a4e9d6daf96855e918a4e764d416db7d"],["/page/13/index.html","07c21468a633289f55ab686448f3af41"],["/page/14/index.html","664a845c4289edafd14bdd7f1d10c7a4"],["/page/2/index.html","88fcdaf2fa7f708cb20e1cad6c782901"],["/page/3/index.html","c54ff4e75e3da41e2e392bfb5d8c911f"],["/page/4/index.html","0bd53f568c6f7ade1b02218b51021c5a"],["/page/5/index.html","ceaf7af5a10f8e8053e445ed433340c8"],["/page/6/index.html","41e590f2c9eddabe2c9d22fbbfd5dddc"],["/page/7/index.html","03a789c71b206e5a426ea9ff4d588679"],["/page/8/index.html","59b88d764447a871172d1b51081ff0de"],["/page/9/index.html","7b46afaadaa83c980dc8697d7198ae7c"],["/sw-register.js","5983891dd166fb3caa56ced8f217fb73"],["/tags/8086微处理器/index.html","ca9dd71ead866923a60710ad3e171b89"],["/tags/C/index.html","bcab111a1432c6f65090188c891437e7"],["/tags/Eslint/index.html","026db724e60f81a9c2a0ae55fd977734"],["/tags/HTTP/index.html","dc1e86aa5eac9578d4ece2fa6e345263"],["/tags/HTTPS/index.html","73bdc9edf44a055f842934f17594c805"],["/tags/Hexo/index.html","a9b264430cde4ee66cb1c1fbc617c445"],["/tags/JS/index.html","b67885ceb938264e4cedd2afa6f03770"],["/tags/JS/page/2/index.html","4b8735b44769bff33d0b944250243312"],["/tags/Promise/index.html","f15346eb4bff8bcfbfd8036c477468e1"],["/tags/TCP/index.html","dd2b3a81daa27155821f343027d36189"],["/tags/TS/index.html","d87e3366118e8a7abb21fa545cc0bbbb"],["/tags/Volantis/index.html","f97f0e6005901d4dd1fe9a7591299d0f"],["/tags/Vue/index.html","c5a960f89af26f6ff2568ea756b2252b"],["/tags/Vue3/index.html","a3b32b7af1f38ab52220cc64118887f9"],["/tags/axios/index.html","4cd6d96b26b9e8d9b3524e5fe7be7812"],["/tags/cz-git/index.html","9440c881ba0637bce0c7f9572d6a5208"],["/tags/index.html","d10d78c738762fe8a22d3bb81bd2c0bd"],["/tags/prettier/index.html","27988d604b992db82846eefce8cbe9c9"],["/tags/串/index.html","2a92927ac6a5d8c4b9eacd96617f48a5"],["/tags/二叉树/index.html","b87f5e4071ccdb98978ea768dc95cbca"],["/tags/二叉树/page/2/index.html","b6b2ce7af2cc10727cd943c607663813"],["/tags/双指针/index.html","c7ca541cb6924971b07555392fab17a6"],["/tags/双端队列/index.html","0f093c5472711f53b8df8cdfbb9977a3"],["/tags/反转字符串/index.html","3d7769b11566b63e818d8c8619a17088"],["/tags/哈希表/index.html","c7941b752d274ef0245da5df64eaf516"],["/tags/回溯/index.html","5ffbad7230d134adaf1fe54fe5bdbcfa"],["/tags/图床/index.html","7f10108a4b9c074005ac9151a1cbb8a2"],["/tags/广度优先搜索/index.html","0335e53c9067096773aefc5be1e0cc36"],["/tags/微机原理/index.html","f26a4f0436c88cd075942c70fccb3512"],["/tags/排序/index.html","e9a32be6d4f3e0447acee7e15974eabe"],["/tags/数据结构/index.html","3c3a12dc94523d8e5e40e96631204c7d"],["/tags/数组/index.html","38a85739088c79c5ca576b384ed0841f"],["/tags/数组/page/2/index.html","2c02464042c184214c1ff09c180f15af"],["/tags/栈/index.html","4f0be391e6c145b036d15640ec320704"],["/tags/深度优先搜索/index.html","672d372c2f184df71dd41e9b8de1b443"],["/tags/滑动窗口/index.html","050559449d2b5943489337102df9cb26"],["/tags/组件封装/index.html","ac72513df8d98da857d8f288847d2d7f"],["/tags/计算机网络体系结构/index.html","b774412a3dd497dd71d6f114beef0b16"],["/tags/计算机网络概述/index.html","65f2bed79e1dd968105b086f9984efa0"],["/tags/计算机网络物理层/index.html","62e5ad78740bc9835bdfe7ca3b1aafe2"],["/tags/链表/index.html","d72fc373e01cd0b7b75a2407045f0d16"]];
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
