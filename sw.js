/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","c434dad4882956338c17264abe1573ad"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","5359b31dee9e2dcf9a4451bae73347aa"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","c02610d19e9749292c592c34190e2b1b"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","f68e4ceca001ff22da122bb17e4159fe"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","fa9a0a43e3864da1c6fe224e4cb8046f"],["/2023/03/20/电商后台管理系统/index.html","3daa05b2bfbe24abd70bca961c636be6"],["/2023/03/21/Hexo博客搭建/index.html","1038e6773d5f9da8e85a9a7daa418477"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","b12ade1d78bd72dcb2421625211fc46f"],["/2023/03/21/Volantis主题的安装与配置/index.html","8f11d50fbac6f4397610f4b942709ae5"],["/2023/03/21/单链表/index.html","0081b090c90551ba99541e1f71752389"],["/2023/03/21/排序-快排/index.html","6f95522792431be14c0a043b35f763d0"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","04ead7238cc81ae154e1cda2f800049a"],["/2023/03/28/栈/index.html","ab26c3153dd3ec1ff03f452aa3f69809"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","698a1d3b6240c104162876299fd70d8c"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","72db89bfc83e5d3e42cc0c983e3d0b6d"],["/2023/05/09/LeetCode-383-赎金信/index.html","3cc457211171235365570246066f3842"],["/2023/05/09/哈希表/index.html","5578420b0617dd2a74d648ae90b7f250"],["/2023/05/15/LeetCode-454-四数相加/index.html","b27bde70bd9eb80fdd668aa2474d85db"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","530d6b8402cf4238e30b9319ff6aad01"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","32cb5898efea81c4da11d7b8b8fbb9b1"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","63e510280e5bae5b5aaae7d0db6e83e6"],["/2023/06/06/v-for循环图片无法显示？/index.html","06401c309284b1de4a5d91a539805595"],["/2023/06/07/8086微处理器/index.html","e5cd0d103bface8c20c6129b7de485f1"],["/2023/06/07/微型计算机系统/index.html","e3bf6d6bb869f07a0c5fa05a9cf474e4"],["/2023/07/15/计算机网络体系结构/index.html","18e832a52797f5547e6d767e51d0a800"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","3b6199220cda5577e135531cf7aa9668"],["/2023/07/16/计网-物理层/index.html","b7379bb96f72c057e21bcbb12f7ff826"],["/2023/07/16/计网概述/index.html","461875ed6e8ae3ef42295cb08e76f27e"],["/2023/07/17/vue3-App-vue相关报红线/index.html","e9a724caa65475b74e174ea26e902bab"],["/2023/07/18/实现二叉排序树/index.html","cfd6397544c98be170009061e2fa6c0e"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","4329a1c4947fbdfdc0c630da93b4bc61"],["/2023/07/25/二叉树的遍历/index.html","c502de5d68eea714fd18602fcf40383f"],["/2023/07/27/vue双向数据绑定原理/index.html","98d1f844f7fb741f9252dfbcb1520625"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","7ff622ed4401dee6a95665a41b0811a2"],["/2023/07/29/HTTP协议/index.html","17baf0bf6c4ecfc4cb3dd0e03b1cbaaa"],["/2023/08/01/HTTPS协议/index.html","6b4bc068680ae2b77c831f740097423d"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","a4a4e5ea50e0e9f8ef1b02c12ba42848"],["/2023/08/03/HTTPS-RSA握手/index.html","95e93414d4991a5e4e9cf539fc542988"],["/2023/08/03/HTTP缓存机制/index.html","a031790f6b88f81bf71dd7777d2f66a7"],["/2023/08/03/LeetCode-112-路径总和/index.html","63bb484ebb05381f525beecc84c8052d"],["/2023/08/03/LeetCode-113-路径总和2/index.html","07f6d3e837109443432fb9520bd8d7be"],["/2023/08/03/手写Promise/index.html","5bb33de9c21032ac4e3cc0f8ba34f4b5"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","45023dd9ee5c2b025bea05a0b3141811"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","134db01347ba6d7a68fb2c0a96364ae5"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","175beb65f5371e255ac22166396ab4c8"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","c7539af457341d19537efa0db17b8a09"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","767473ac38f5c66230afc9181b046472"],["/2023/08/10/axios的二次封装/index.html","a616edc640dbe3ba2c9520c1c35d6015"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","7af7ac505080a53cd77f3bd556c280d1"],["/2023/08/29/TCP协议基础/index.html","f0933fb91bf07d4a746b1c906158cdac"],["/2023/09/01/把一个数组旋转K步/index.html","7fb3971a150a90fcea73b192938f71f7"],["/2023/09/01/防抖和节流/index.html","5d12ce3237d6a48b15f2775b45286e4b"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","961aec79c4312d492c98f154cb165118"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","b12b3381c3b0b31e55cabe4468c21b66"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","1cc594b7255d5391415bd075b2f16259"],["/2023/09/03/LeetCode-904-水果成篮/index.html","223ffc517f467487c9c41b6d4c5ee434"],["/2023/09/03/TCP三次握手详解/index.html","0e26fb1816c3a58934b9b6547c69b3cc"],["/2023/09/04/LeetCode-165-比较版本号/index.html","e57813f9e64f80de110f0ee4ea33a396"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","f986a39ec197bb81f3d173e46d6d5bc7"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","490e932b4475bc83867e9437b44728fd"],["/2023/09/08/LeetCode-77-组合/index.html","bc68d2a5353269b7c4e24636da66b54c"],["/2023/09/08/闭包/index.html","d0bcde340bfd2229b5a68c8bcf5cfe6b"],["/2023/09/09/Validate表单组件的封装/index.html","d4cc148faee38f486ef46a64fb3b2e03"],["/2023/09/11/关于this/index.html","671b613b33c039410659ee8eb447839f"],["/2023/09/12/LeetCode-15-三数之和/index.html","8c7cd509c889d4232bc09e5612be2789"],["/2023/09/12/LeetCode-46-全排列/index.html","33a8c135a662e7766a8e1de98d4cc956"],["/2023/09/12/手写call-apply-bind方法/index.html","b3a9cecfea47c3f93bef6d7badaf23cb"],["/2023/09/13/LeetCode-912-排序数组/index.html","83962224f83611d0f07a8616cf6347a6"],["/about/index.html","7c0bedfa54c9a7c2c1da66065d465306"],["/archives/2023/03/index.html","c5f4af2947f19d1b3272de3cbba4f8c1"],["/archives/2023/03/page/2/index.html","928e6177cc849899f3acea14640051b1"],["/archives/2023/04/index.html","597fc03821530fe8d2abdc030794d62c"],["/archives/2023/05/index.html","0530a486a80e3d9cb6e1cd2773f875fe"],["/archives/2023/06/index.html","486b59dadfcb25f688fb02e83a056301"],["/archives/2023/07/index.html","5a539f74897bf9fac8d2421351f02f13"],["/archives/2023/07/page/2/index.html","5f9fababb5d437d2f98a84f6de541a28"],["/archives/2023/08/index.html","f8e39aa5e1288e64d3df0d485f36048e"],["/archives/2023/08/page/2/index.html","cd9c38ac6225b3bc47913766877291f1"],["/archives/2023/09/index.html","11f0e2e83279405afd7bc2f6519b00bd"],["/archives/2023/09/page/2/index.html","22a6954a11f5a45f6b3fbd387539a4bd"],["/archives/2023/index.html","8c3c289e39fd8c7972e3e9ca66c217a3"],["/archives/2023/page/2/index.html","f945df7eff3740685a49436a0987a7a6"],["/archives/2023/page/3/index.html","2e5847f705383fd320d00e4f0f09bb2c"],["/archives/2023/page/4/index.html","2ae53674d2c8ca096ae34af896bee81c"],["/archives/2023/page/5/index.html","48e84eaa839fc0bb3116dd0411933ff2"],["/archives/2023/page/6/index.html","1691a50367fe257ad770cb094ed5a00c"],["/archives/2023/page/7/index.html","8db03defbcaaaf7ea18315203711bbd0"],["/archives/index.html","fbd34241725df9a5f0775b1ffd4a0c61"],["/archives/page/2/index.html","b71a6d07bea4dd2bde37a8d6d6047d4a"],["/archives/page/3/index.html","ea4a32b9f269a9343fb72cdaa3380f61"],["/archives/page/4/index.html","b200751ad87164205948ac2a41b41155"],["/archives/page/5/index.html","1d0d97393108ec634495e8ab13017262"],["/archives/page/6/index.html","d16c214f40ff5db3d2af7fd69b8922ca"],["/archives/page/7/index.html","2c01fc19b5bc9e32f45fdcc3e01c0fc6"],["/categories/Hexo/index.html","8160cc9f799067f39dcdbb7e25f59790"],["/categories/JS/index.html","888a58f30f6aa4972cadc0f80aa9f43f"],["/categories/JS/page/2/index.html","73b86059e11b6970b6ed09cc1e774417"],["/categories/Volantis/index.html","730781e8677319e17715dc16c8baaa8f"],["/categories/Vue/index.html","524be275a605145654d5056b2e07d2af"],["/categories/Vue项目开发/index.html","0d59b3a70473e480f34a8bc5ee746e77"],["/categories/index.html","329dd42a99d2d7bad65f14376a69d839"],["/categories/微机原理/index.html","b93a4d9e9e2382ba1fe821b89cc4ad7e"],["/categories/数据结构/index.html","3270146719832fe1d84ae376bfc6802d"],["/categories/算法/index.html","daab0cf0ff43b94a5b301f4b5b8fb0e8"],["/categories/算法/page/2/index.html","9331817e4a64cea862379edc420904c6"],["/categories/算法/page/3/index.html","e73ad1beefcb68f51503d09d8f71c808"],["/categories/算法/page/4/index.html","0a33f84b3b694d3f112ec5e040e1f47f"],["/categories/计算机网络原理/index.html","c4d878d6ddd1740e609c883aac1f36c2"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","3b1da2ed290b5b508719330ad2381722"],["/history/index.html","03b216ba2035f4c406bc99863ab4fb56"],["/index.html","b8e7c4417d374ecbffe961d221090a05"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","e79a791370e18bbaa6d351be5fb84ab4"],["/page/10/index.html","010aba989c19059551d9a4a6c936c63e"],["/page/11/index.html","2e8019d1c0b1d258f0b9552f4a5c84b4"],["/page/12/index.html","5a5b4eef5824f067f222baf45dc4ebbb"],["/page/13/index.html","cd29c1b597a8db8e36940e638b52ebcd"],["/page/14/index.html","1e78e24e5d0ad7ad5f488cea437ed9cc"],["/page/2/index.html","85b735705e8baf4372509567e5552fe8"],["/page/3/index.html","8b873f3977144c4b92456f2417f692f2"],["/page/4/index.html","a2320780e7657ad6d561bc9bb4a77b32"],["/page/5/index.html","8df3271df43c9ecb831bcee1697859a0"],["/page/6/index.html","29b3880b233688823feece148ad32ca9"],["/page/7/index.html","d716fb138718d35fc524cce1f02cc86e"],["/page/8/index.html","4a21de9b6903c2ff5127286b1840508d"],["/page/9/index.html","5186233475134d6e6dc39c4f9a64c640"],["/sw-register.js","230458eef63d3add29f87f273b7f6629"],["/tags/8086微处理器/index.html","e4c8d16097c30258413d48ea4565dcb3"],["/tags/C/index.html","35121390e2a98f49ac4ced61e72b62d7"],["/tags/Eslint/index.html","11111f4e2f99ce56ad262bb9f8c1ffd7"],["/tags/HTTP/index.html","0e2c6a6d43e8486ffd9b29ff53d7d1d1"],["/tags/HTTPS/index.html","5b5ed0ec0d5e897a4e8f09ac7cb4c8d9"],["/tags/Hexo/index.html","097e1de8fa94843f4d5c7285a358a85e"],["/tags/JS/index.html","79534d55bda09399433adb8f87308d3b"],["/tags/Promise/index.html","7a28ba9c43251436c123281315c4dca7"],["/tags/TCP/index.html","6c86276180d4b5b861ecf1dd1cd2598b"],["/tags/TS/index.html","73ce3aed6c62b38e94dbf50c6a80dfb0"],["/tags/Volantis/index.html","de985b5dcdc08da1f5aa4a8099e13f68"],["/tags/Vue/index.html","272d5453ce24b4f61954152b90ff8063"],["/tags/Vue3/index.html","a7895a1357fe9f5b573254542cfa9140"],["/tags/axios/index.html","cca476b2dccac9683c80f52bbf9bb1b2"],["/tags/cz-git/index.html","385de3f1901ead337ed535dee4eea3a0"],["/tags/index.html","53f970e8a8e7bd1f1ba2b4dd8f276340"],["/tags/prettier/index.html","2fea7a858a2ce1677b51681812043ea0"],["/tags/串/index.html","ff642c64c9a6257f0e6276da0c8182be"],["/tags/二叉树/index.html","6f6eb67f602bea167252587b972baaf7"],["/tags/二叉树/page/2/index.html","78a2e56e439f2f45c52a7da6db7821fa"],["/tags/双指针/index.html","ed72431a30f6b71d1304a6a1c3e108e1"],["/tags/双端队列/index.html","276e7fce54d3811cd90e0b327d6e614d"],["/tags/反转字符串/index.html","be9413033bea6a6c74040af35acd24a5"],["/tags/哈希表/index.html","d3265fcd4ea25a472e7b880c4ce849f1"],["/tags/回溯/index.html","f221e0e7e226fd8c04f167f693d891ba"],["/tags/图床/index.html","1d645432988243121e0f74d2ace8219d"],["/tags/广度优先搜索/index.html","3d1e500e5d43066e6a92b5304be33237"],["/tags/微机原理/index.html","fe9eabe2134207c00e91b64acbd08b6f"],["/tags/排序/index.html","ab285cbba293a3c7ef198c1163e0b188"],["/tags/数据结构/index.html","6f7e5b2b65f7f65c021c8535b92fca8e"],["/tags/数组/index.html","6716db8bf8bbcf89e5b194bcf15213a1"],["/tags/数组/page/2/index.html","94fcd795c11ddd44e4bc65df9cac554d"],["/tags/栈/index.html","672f33702d8fb2ba4778626edd8dd77a"],["/tags/深度优先搜索/index.html","e714b57bf9e7f2e461c8b86fbc744f0f"],["/tags/滑动窗口/index.html","8b8d391a31be584ba374f412a1eb5e4b"],["/tags/组件封装/index.html","1747331a48248aa35a7f66f836f7e67b"],["/tags/计算机网络体系结构/index.html","f48ee1efadc0c15f0671fcee3c2f9baf"],["/tags/计算机网络概述/index.html","e7d2ba05e45f4c0f4e26ed9cc7dab9c0"],["/tags/计算机网络物理层/index.html","486807fbb779d4b8f4afbe136fdd4c04"],["/tags/链表/index.html","c1021c027d415dfca4bc3955b534370f"]];
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
