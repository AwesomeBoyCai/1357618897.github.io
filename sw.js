/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","d5075f2221f7c0c16253cd0172e9b460"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","55b180f386814f6e760e4fc49f5411f0"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","058df0ed633b190b04850f180f0dd2b3"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","c67d82c2fd454cb2ca6c1e7eefb70476"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","102b245b89c1a845d0b2cda3b6211710"],["/2023/03/20/电商后台管理系统/index.html","09db84c2c322d0f0bdcffedc5e1c7cff"],["/2023/03/21/Hexo博客搭建/index.html","f983c152f5962673a88c731c7345d45d"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","ef08bbde84b32c17dbb8b9bc95e7e0f0"],["/2023/03/21/Volantis主题的安装与配置/index.html","24b9164de79ffef5781ca3ccbb9cf6c5"],["/2023/03/21/单链表/index.html","f4d6c3a3c84879f560070fb047f435df"],["/2023/03/21/排序-快排/index.html","c5e530e6751db141c4d86a901731f391"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","3b42e0698ae02c8a937079431da96e64"],["/2023/03/28/栈/index.html","9c308ba7f57238001eeb8392f26ea340"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","7ba2dcb403518645cadc02949d97a415"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","daf83d49ec30b57f168277bb0dcd2b59"],["/2023/05/09/LeetCode-383-赎金信/index.html","fcbc470ea80ec098239bbae22bf08552"],["/2023/05/09/哈希表/index.html","3ecdd3be308719cde0d29d251629cbca"],["/2023/05/15/LeetCode-454-四数相加/index.html","002ffe49196afea60b214b359703af92"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","2b83a7b28a6ced777352a2428d2ecdf6"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","98f76e1bf7c09900fed1eb8b87a519e0"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","8fe32b2dc40baaf1d205a26316fd8160"],["/2023/06/06/v-for循环图片无法显示？/index.html","5537d821b50537b98ad1ae22f6bd7153"],["/2023/06/07/8086微处理器/index.html","ab0fb97478251e82e9acabb094fc3815"],["/2023/06/07/微型计算机系统/index.html","77465f5f19f37fecb0779eec9be93d72"],["/2023/07/15/计算机网络体系结构/index.html","0f7a555c323eca70255564170a49ac77"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","e9eecb1a6b47698eb5358c7aab59242d"],["/2023/07/16/计网-物理层/index.html","9b7702fa709a5ff23aa1406fcf01da08"],["/2023/07/16/计网概述/index.html","319d4a3b1217de8ab136a20b06187b3a"],["/2023/07/17/vue3-App-vue相关报红线/index.html","95b775b23e6135cc8082f51be8faf4a1"],["/2023/07/18/实现二叉排序树/index.html","433f32066a386a286a6e234582e4bda4"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","00352859fa72170706533b1b6de141e4"],["/2023/07/25/二叉树的遍历/index.html","4202db2ae4611a87e5b47bc4fd5e5415"],["/2023/07/27/vue双向数据绑定原理/index.html","e92bd37b6a4b7627baf2c162bbe60330"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","24284a9b9e6335b325c250c510afc818"],["/2023/07/29/HTTP协议/index.html","530d0dc37c139908f86d101a6ef63b70"],["/2023/08/01/HTTPS协议/index.html","a4d2d5d6ae2cbb501d164707743a791f"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","8cb64b546826ec79dafedb0b7f0e868e"],["/2023/08/03/HTTPS-RSA握手/index.html","b911cf4cebe22cc6da786ddb68cdc12d"],["/2023/08/03/HTTP缓存机制/index.html","7f06fd481db86e06c7fb0d0cd3e751c0"],["/2023/08/03/LeetCode-112-路径总和/index.html","004f2095b71795a8460a44313f95d162"],["/2023/08/03/LeetCode-113-路径总和2/index.html","b6a96a96bc7e26c21fa53ef66fbb22cb"],["/2023/08/03/手写Promise/index.html","82318e3fec85aac6eaf6f7b05306bfc1"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","61580a08f355a21551dee84824ff23db"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","99b2c7d81022f4d7b44d2ede1b50add3"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","5ea09d7d9cb5022fcf830cbe830352a8"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","1a2cceeec9aa2a24b5929f062b74d43b"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","234ce791e102af41f1001c9db3e4143d"],["/2023/08/05/事件循环机制-Event-Loop/index.html","c228100af93d439268993f78c25c01f2"],["/2023/08/10/axios的二次封装/index.html","fd9bc3f9844988da2dc95be41aa5bdb3"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","6a316fcc3687f5f094c0c05eb34c9126"],["/2023/08/29/TCP协议基础/index.html","c20775978728acd496db4e391059e0a8"],["/2023/09/01/把一个数组旋转K步/index.html","f67000f8309d8a9130bd674e314d13ab"],["/2023/09/01/防抖和节流/index.html","cfc7d0b9962f0dfd0dde881d7a224e32"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","1f858b68976aac523b7146c5360f3d2a"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","eb53f0f644a8b41e4ac9624bcc1a3442"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","dd81813aa18d36c6c2cbe53da3a2dd8d"],["/2023/09/03/LeetCode-904-水果成篮/index.html","58c5f987d7bedee8ced50261fccdcaea"],["/2023/09/03/TCP三次握手详解/index.html","04a29e1cdeeb69bc1184abc3bb0a210e"],["/2023/09/04/LeetCode-165-比较版本号/index.html","3a22c84b5f0e29446d0e414b3ffb5d7e"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","fcbc491b073e2425cdc2a291d922b6a4"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","819d515dd6caf36d52489ea48d213113"],["/2023/09/08/LeetCode-77-组合/index.html","6001374d61713213109a35e03668e923"],["/2023/09/08/闭包/index.html","b0c0b3e92d01e836e66109f263aa6076"],["/2023/09/09/Validate表单组件的封装/index.html","71c8c20aebf2f29d3db0e5735234d78c"],["/2023/09/11/关于this/index.html","997bec5610ce873a5cb41299d2dd5de1"],["/2023/09/12/LeetCode-15-三数之和/index.html","cc6ba23705f4bdc9b74780cd38cbb8f3"],["/2023/09/12/LeetCode-46-全排列/index.html","08d28c952a6a56059983b3e2d45f9bba"],["/2023/09/12/手写call-apply-bind方法/index.html","fe5970b332dbf193cacf85a0fd563160"],["/2023/09/13/LeetCode-912-排序数组/index.html","c59eec1c42d2e3e4f44cb426992923ff"],["/2023/09/19/JS原型，原型链/index.html","49deaf4e379c7be29a2f66faaf02f7e3"],["/2023/09/20/LeetCode-153-寻找旋转排序数组中的最小值/index.html","0a8bee5809bb68286a3264bb88bf7b64"],["/2023/10/02/怎么判断两个对象相等？如何判空对象？/index.html","f2065b95063172074b66013e0ca2601c"],["/about/index.html","8d0b169abde7ec16e45cfb4fd8af6794"],["/archives/2023/03/index.html","3c959650f2cdb0c6fd3cfc192f05dc0e"],["/archives/2023/03/page/2/index.html","5536b8df8b40344704883a0a15e4f64c"],["/archives/2023/04/index.html","32e906e5ed38a14e6e18fb39341e2e6f"],["/archives/2023/05/index.html","ae8401c04291a5fce50aba93f789cd50"],["/archives/2023/06/index.html","600c82d5b6bf71282cb7f41578c4930b"],["/archives/2023/07/index.html","83a204d35f8a83345fa790d0e2a8974d"],["/archives/2023/07/page/2/index.html","60898839592b8d2fcb2005712181b282"],["/archives/2023/08/index.html","be2b83dacc210d59666f85d1a43fad2b"],["/archives/2023/08/page/2/index.html","e5e75404b28418c8cbe2cbe98968c100"],["/archives/2023/09/index.html","6374565be049bad3f00c70651350d212"],["/archives/2023/09/page/2/index.html","c94fabc4bb7614851977193f98a530de"],["/archives/2023/10/index.html","e61f18ea4f77984326b7b1ac893e5f3d"],["/archives/2023/index.html","584b2bd9268e5d2914127b78b5491a99"],["/archives/2023/page/2/index.html","ad0a1d5edbc20a69de50da961697184f"],["/archives/2023/page/3/index.html","93cc9e2c23b9c84d17cc5597e05ac3e5"],["/archives/2023/page/4/index.html","ba6bbc9c8f1d2a5e728ab62ba7adaf0e"],["/archives/2023/page/5/index.html","267cb76b5a451eef18daec3365667b83"],["/archives/2023/page/6/index.html","97cc3795d583e0a814bce2cd720781dc"],["/archives/2023/page/7/index.html","ed5bbbf1fa25f4f6c248e4c6b4ee211a"],["/archives/2023/page/8/index.html","c9e223cf6b0fa212e7c8d053314ecb5b"],["/archives/index.html","9e48d15088897af6928131dc921e6d85"],["/archives/page/2/index.html","7fbd9773f121060969924cd8d3c786a2"],["/archives/page/3/index.html","73ea2ddfb7e66167cfd4072f87e18449"],["/archives/page/4/index.html","85c81d4fa51661eaa42da5645095c155"],["/archives/page/5/index.html","613c2c3d2d86d09c01d12223eb9c1e98"],["/archives/page/6/index.html","b6f811708856c4f8bd45c12fd99fd57c"],["/archives/page/7/index.html","7ef8fc97afe187df649e8a11bcd430b9"],["/archives/page/8/index.html","288ab5a3743020b24843ae4e3bd39ac0"],["/categories/Hexo/index.html","9b987a3953487afbfd90012fd45e698e"],["/categories/JS/index.html","8348dbe516c707d7fbc89a3fa9a5d4ad"],["/categories/JS/page/2/index.html","ecccaf28ef123020a8ce2dd61716ac51"],["/categories/Volantis/index.html","824da43b9978e6736399dd4392024307"],["/categories/Vue/index.html","ac36b934ca1a0cb1f45922667041e800"],["/categories/Vue项目开发/index.html","6ad84974328012b8017358414dd1ff36"],["/categories/index.html","730ae39e2a00149b0d5465427200c2c3"],["/categories/微机原理/index.html","fb6286e02da857ea9426d68fd7d7ce99"],["/categories/数据结构/index.html","65275b191939ba90a0364218ea51ea96"],["/categories/算法/index.html","7f275131596b3a82801e9fcfe3463b90"],["/categories/算法/page/2/index.html","832a56e6fd3f89a808c155e291a45f27"],["/categories/算法/page/3/index.html","cdd2acb3de95d136f1023743ca6dd02f"],["/categories/算法/page/4/index.html","3bf5ef01fc3b2eefe9a893e9bfdf8eeb"],["/categories/计算机网络原理/index.html","0cac189d4965151d59d6a6732be8f17c"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","7501157362ce0e63c53fbf077b93101b"],["/history/index.html","6a618a52fc33dc57e847b9aba074c43b"],["/index.html","ec6ca9c1286a1742d3d2bae36dcf878b"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","72db8d148364b3d98b19fd05bd6578b7"],["/page/10/index.html","0ead0a2a12274305d8b567ded1eb97ae"],["/page/11/index.html","3fdab582e8e36d3f6095b24d94aa2e07"],["/page/12/index.html","dd2c64edf511ef451767920f2cc17cd7"],["/page/13/index.html","eb23b22365d4d80ca90810691fec9ddc"],["/page/14/index.html","546c71337370441d77817fb8e990d430"],["/page/15/index.html","a05b29be6d53bf1607e0e16fdeb7f55c"],["/page/2/index.html","751ce4c68cebb4ca4a480b907f40a516"],["/page/3/index.html","5c06ac5298b04c0b7ef1e0476dc48345"],["/page/4/index.html","a41b930304b563990a2b05204cea20d5"],["/page/5/index.html","4aac064e95fd5d97ebbb79ac84b57b3a"],["/page/6/index.html","f53ff76a0ac115207d0be1ff8f5d2b89"],["/page/7/index.html","385dfae4808030e47b9535b8a7f4ede8"],["/page/8/index.html","6ef8a48cdb15e113148c14cdaadc99b4"],["/page/9/index.html","93b01262f5c655ca1e85258dc58c4473"],["/sw-register.js","fcd5d3311bb1ab84acfba140d01e6a9b"],["/tags/8086微处理器/index.html","b713ac404768b42aaabd46abfe990505"],["/tags/C/index.html","c97b118b83c6f4a6fd2a4882d7d9112c"],["/tags/Eslint/index.html","1aa629e1cef5a5418ba299a4afb79595"],["/tags/HTTP/index.html","07e638c0c8f7fb3755b4dbbdbd39380a"],["/tags/HTTPS/index.html","ffe5360e9bf8ea617415fa68de4ecc31"],["/tags/Hexo/index.html","b591b6e9864be4e7a9e6ce8d54678950"],["/tags/JS/index.html","22a6527fd5b7473ab0d0e4a3ab900a91"],["/tags/JS/page/2/index.html","d97ab634c366d5a8317acf48e06c5340"],["/tags/Promise/index.html","d2f587277209c1439207aa3340fa8478"],["/tags/TCP/index.html","d3bce6bcd5ecbf1753b97493cf6e39c6"],["/tags/TS/index.html","e9ea45884a23a3e14bce6b5dbccb6023"],["/tags/Volantis/index.html","137f2843f72952426e55807dcfbe54fe"],["/tags/Vue/index.html","dd20f8045e94e3065d2109f6acdcc847"],["/tags/Vue3/index.html","23a0f162c9d976180459a9406aa5fcdf"],["/tags/axios/index.html","9e528ec0d34caa4e64e69c9adb18234e"],["/tags/cz-git/index.html","9b304193f181940a39ea286f403849b8"],["/tags/index.html","828ee72033f36674e2cabe7e3a35fab3"],["/tags/prettier/index.html","386454690fc8b4847ce23a58f44fb5dd"],["/tags/串/index.html","b11b98f16c022c11a825e6d4b3c5ad18"],["/tags/二叉树/index.html","3dc2107b73809801801b6be3596eaabd"],["/tags/二叉树/page/2/index.html","8627ca966dcfeb8bf8aee05a057a1b4a"],["/tags/双指针/index.html","33f5e1e8067c1555a8d69706583330cf"],["/tags/双端队列/index.html","9696d086885e26db1c460bcab74afa2c"],["/tags/反转字符串/index.html","bfdfddac2e2f9a98247046ee495c0d81"],["/tags/哈希表/index.html","0ec1d5af25c47e0ebd4e3820c93aa859"],["/tags/回溯/index.html","41f3cc020cb01f632a29bc77c45eb10f"],["/tags/图床/index.html","f2f994986fe00abd1fedc107e37190ed"],["/tags/广度优先搜索/index.html","cd3821d00e8fec265b4095fb9ecbd261"],["/tags/微机原理/index.html","4bdf2d12866c5618f0609c7e1ba7d1cd"],["/tags/排序/index.html","a65f486f434fb81906122079374a04c2"],["/tags/数据结构/index.html","b842601e82122385b99c5bae3851aff5"],["/tags/数组/index.html","b7abeb271900538d9ac9f68e39a885fe"],["/tags/数组/page/2/index.html","8e7963124dd4b3dc54f0389bceeb8fcc"],["/tags/栈/index.html","8268beff61cd9fe20fc9f0cb3650866c"],["/tags/深度优先搜索/index.html","380fec7d080475e9a8ba9e5b341e5623"],["/tags/滑动窗口/index.html","192a94bdf371acbd3ee3c959c068ec88"],["/tags/组件封装/index.html","6bc6063c55b25fd50f3699f7cf839e01"],["/tags/计算机网络体系结构/index.html","5ccdc3d7b13c50279eeda5922d01e91a"],["/tags/计算机网络概述/index.html","e41accf28a819c3e9a46da19ff39fab6"],["/tags/计算机网络物理层/index.html","08eab62465a87b787724f9b1cc36d552"],["/tags/链表/index.html","6e7977a61e40f8af427f3581d80e2c1b"]];
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
