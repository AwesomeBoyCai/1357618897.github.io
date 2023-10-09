/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","430b0c91361b2525dc305f4204236d6c"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","563ffdfe79fa6ee6b292aa73a4edbb01"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","075ff42d0e8eb0a14d96987a245e7045"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","d0451ad5b592df3c1717fbf06d7dd244"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","4e585d8f3179432180306517850541dc"],["/2023/03/20/电商后台管理系统/index.html","ebd1d682e5e6a2edad1389c127368939"],["/2023/03/21/Hexo博客搭建/index.html","ba5571b8a70b0c30f8241375f906c8d6"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","c82a0589c09d8752c3af17907cac827c"],["/2023/03/21/Volantis主题的安装与配置/index.html","434fc1556aba5588fb58ebc793c213d1"],["/2023/03/21/单链表/index.html","ffc4aef02769f26c472ddc9bbb08bee1"],["/2023/03/21/排序-快排/index.html","b51ccd0f007990d35fe9eae1f6e47cbe"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","9534ac639e5aa3b173d0ea67c8134467"],["/2023/03/28/栈/index.html","dca86c9ad3b8938396d44174b9b23b25"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","4069d0d69b4f4e741316148892f7246b"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","ea5e3902d122c382312f9d0a1357b8ad"],["/2023/05/09/LeetCode-383-赎金信/index.html","0da7bf5b438cb60b87546a1f7309301c"],["/2023/05/09/哈希表/index.html","88bb7448419c055d7191da5eb33ae7e5"],["/2023/05/15/LeetCode-454-四数相加/index.html","2efc5a5910122fb16c4316debc2d8721"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","4b5da9b98eae630c5b6ecd44d3d704ee"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","ada51ef4dc1fbe3fe90195eb141a4ea2"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","8090a3929ad2359d3eb03abc8f9004e0"],["/2023/06/06/v-for循环图片无法显示？/index.html","f3e40939be278b1e6c4ef9abfe352a79"],["/2023/06/07/8086微处理器/index.html","3eee0556ce979d6f046745a56a4c3e93"],["/2023/06/07/微型计算机系统/index.html","92227213e7a2e7e94004d72487005125"],["/2023/07/15/计算机网络体系结构/index.html","93c25ed6e46b7fb1e7c65ee6e8b5b28e"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","7786c6bc4df59c1bc854d63928e51851"],["/2023/07/16/计网-物理层/index.html","90ab3fbb636f886d04269aa9a5b9d485"],["/2023/07/16/计网概述/index.html","c825a2d14fd77d1deae637e7aae996d7"],["/2023/07/17/vue3-App-vue相关报红线/index.html","31e70f4a8fff5f56f553b584ff4b429a"],["/2023/07/18/实现二叉排序树/index.html","bcbd86328a19c336dabe607aa76d3d8a"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","1d28861cf2dbadd0466482267244856c"],["/2023/07/25/二叉树的遍历/index.html","41076c7f5ccc4f14b8159a16200f9a95"],["/2023/07/27/vue双向数据绑定原理/index.html","69ba49b040a4e468b66d8e4c9ab90e16"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","4e5f998f3112be0611ed91007269e4d5"],["/2023/07/29/HTTP协议/index.html","a52747b2cf6fbaa8958194192fab7dd0"],["/2023/08/01/HTTPS协议/index.html","73594ed7f65ed14ecfef07e4a7ca344d"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","a5c85139c4f90bb79aaf16256f553f35"],["/2023/08/03/HTTPS-RSA握手/index.html","343404454d801e25b70075617cfc3a94"],["/2023/08/03/HTTP缓存机制/index.html","2891be383fcac2f15d8279d5e0c35b4b"],["/2023/08/03/LeetCode-112-路径总和/index.html","8143b70ba0e164471d295cd2fd96f0ee"],["/2023/08/03/LeetCode-113-路径总和2/index.html","ba20ef8a9a70646ee9b9e383ca9c9f99"],["/2023/08/03/手写Promise/index.html","c53b7c3464f465bae4c4addc46c8c2ac"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","76ed8e46bdfa799e79f5ae5d25c27a2a"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","9e68534c3da5a349e963378342a70233"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","cb7fd06bdfe13d9ae4ab9e4900bd9533"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","0e9d76b87b3556204dfece21101495ca"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","9d381837ef7f30b8e537f9bbd3237655"],["/2023/08/05/事件循环机制-Event-Loop/index.html","bdf5e5a94b9ba45bb81fc16f78ff21e3"],["/2023/08/10/axios的二次封装/index.html","b9d9e07e36af1c334319e34b4c2428a8"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","58479c20ea53e2bdc2b939a23296421d"],["/2023/08/29/TCP协议基础/index.html","f7e1c4a2a622f5a714c77b35da11b0b0"],["/2023/09/01/把一个数组旋转K步/index.html","3c6fd6b7e041cb2fa43b8dfc0dcd432e"],["/2023/09/01/防抖和节流/index.html","46ca4fec9191b4acc92a4fde5bb89f1b"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","c35e4067f3b143b42ef97a29b92aadb1"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","94144d343cdee91ba1adbd3e58b6a878"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","c10b29622765cfa36bf733ccddd38e77"],["/2023/09/03/LeetCode-904-水果成篮/index.html","8a73e316ff0f87bb9092880bb44fac34"],["/2023/09/03/TCP三次握手详解/index.html","915707a5ff35bbd0cbd0f756955e373b"],["/2023/09/04/LeetCode-165-比较版本号/index.html","db431a2fa8beb6480c3d3a8283a72f71"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","a05892b57e3e6943ed48f3e4ce021507"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","b04474d107259b41fd8b79ea07cc2db0"],["/2023/09/08/LeetCode-77-组合/index.html","f690a0a9a9848975f3325b652fb9c655"],["/2023/09/08/闭包/index.html","72ea06e290d80625bc7abe79af1c5a55"],["/2023/09/09/Validate表单组件的封装/index.html","096cff4dcc95f561df08cecc6a51175f"],["/2023/09/11/关于this/index.html","66f4149d0c7b3fdca0a38b1246462d44"],["/2023/09/12/LeetCode-15-三数之和/index.html","8e6656de2a016d63467c2af70cf2d30e"],["/2023/09/12/LeetCode-46-全排列/index.html","fdef16decf30bcdb161fe4574a0166a0"],["/2023/09/12/手写call-apply-bind方法/index.html","63ccec463eac64b560b71fb0969c3b96"],["/2023/09/13/LeetCode-912-排序数组/index.html","1d252ffaf7e8b1891e6d0d6ef2eb1681"],["/2023/09/19/JS原型，原型链/index.html","ae73548b26983a44610bb6d1e76bad27"],["/2023/09/20/LeetCode-153-寻找旋转排序数组中的最小值/index.html","736a798d0c305157e22e045100499fd4"],["/2023/10/02/怎么判断两个对象相等？如何判空对象？/index.html","311df82759ca317d609a1761870b7036"],["/2023/10/08/多维数组降维/index.html","ca90a68f5b0a253ea32b587abf045971"],["/about/index.html","1ec6e7b86db177da511da59e081a23ed"],["/archives/2023/03/index.html","dfb4f1b0edd6c36947ba30e1a3e1086a"],["/archives/2023/03/page/2/index.html","cc8e2dae6516a27bcd3b08a587612d99"],["/archives/2023/04/index.html","93c2778a1e6e44dc59e64dfe90f0a003"],["/archives/2023/05/index.html","ae08587b0c6a0ccec7638846347b48e7"],["/archives/2023/06/index.html","7b97261705acb2b3bb008aa62a7a4587"],["/archives/2023/07/index.html","523eee9f8caa57c5a059759c9178eaf8"],["/archives/2023/07/page/2/index.html","b84d9b478d7546f12dc48e8b95233654"],["/archives/2023/08/index.html","4753a43057423f083af226956b865c45"],["/archives/2023/08/page/2/index.html","be2018eb174506431f287be801aad95f"],["/archives/2023/09/index.html","5627fb89de97acc9b7086e69633b92f8"],["/archives/2023/09/page/2/index.html","ec576f8fd75f23e866f0d1ce101b0372"],["/archives/2023/10/index.html","a00f81e1fd6edec8560f4356bcb30947"],["/archives/2023/index.html","1c82bcdbaa52b8db19de041017a912c8"],["/archives/2023/page/2/index.html","28414fbd7ed8e5fcfe391c8e66cead43"],["/archives/2023/page/3/index.html","4b724bcc77f17bc10da5b27a1d89bc8e"],["/archives/2023/page/4/index.html","228d9ba7574830d70dfb0754838af842"],["/archives/2023/page/5/index.html","2ff062f69b7ebb46f93ded52713597d0"],["/archives/2023/page/6/index.html","7cb9dc4cdd98a71f94ea05b4cbec2fbf"],["/archives/2023/page/7/index.html","abe17b1888c1d7ef388ae19d5800c661"],["/archives/2023/page/8/index.html","b2e53637d9f51512bb8f79d8b81f5ed6"],["/archives/index.html","7b7e66d4d04d228c1125c9ce5a76c452"],["/archives/page/2/index.html","4be1b1cf3e64fdfde7062cfc515c4a0e"],["/archives/page/3/index.html","be342a326f5d2e2d75a5a4f308b656ac"],["/archives/page/4/index.html","d7ab657c9165371ca537245b1d434e71"],["/archives/page/5/index.html","f4e270076ba53f684489ccf36ac77c78"],["/archives/page/6/index.html","3e9fb51f2e8da3b3ac98c61ada69201c"],["/archives/page/7/index.html","3771ee3907cccc6d3da305f9e781b2e4"],["/archives/page/8/index.html","5c9b43ed30e9708db559897bc0e99736"],["/categories/Hexo/index.html","a8b9f50a5fccc2d7e3db5947f34ea0ca"],["/categories/JS/index.html","7e212bfda380afadb1b5a7e2eaecd193"],["/categories/JS/page/2/index.html","8c05deab02dd6ae0f2b3452ce090b43c"],["/categories/Volantis/index.html","518061649152f6660692592cd3f5de25"],["/categories/Vue/index.html","98dd9358b4dfb83efa76b65795ff52cd"],["/categories/Vue项目开发/index.html","73af4cfe8fae624eaed84707caec22d2"],["/categories/index.html","2e1d07773c34bf3b37f15445cce1cbaf"],["/categories/微机原理/index.html","24c1dbee818a11913983251900060ef9"],["/categories/数据结构/index.html","e07267a4557a29f6b84bc540f89b8c08"],["/categories/算法/index.html","d36140d526e697cfd84559457da2a775"],["/categories/算法/page/2/index.html","ad8d1687693a156b280baea7c949b153"],["/categories/算法/page/3/index.html","77ddc4812cb2ca8cce3673287274bb31"],["/categories/算法/page/4/index.html","e03a6509dbc9c20d8a82392731562610"],["/categories/计算机网络原理/index.html","5c6a69f7afbf38a075c71ef9bfe8ef75"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","5a94e7d4500f22271f17843f50ee6e80"],["/history/index.html","ebc6ef6b35db171e46224eef4752f6e5"],["/index.html","3f021d95933fe3c3f4d89dd577a9aef7"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","05a848fa7d6c9e17772aa1da735bf33c"],["/page/10/index.html","d3eb6ec410a17d14bf77cd6410e54138"],["/page/11/index.html","99586ac92dab56a8c75916806020ec30"],["/page/12/index.html","8d1bfe98199ebe80ae8cf6fe8c55c8cf"],["/page/13/index.html","03754bc9656f17dde24950c3172861fc"],["/page/14/index.html","02641d32f101b8d10e3ca3c5de069b18"],["/page/15/index.html","069545153f9943a1b789722637b8196f"],["/page/2/index.html","eb7f15d962cc703c68daea81901f4b57"],["/page/3/index.html","def1e4ea4f1dcf11e81ad9c3ed7aa0f3"],["/page/4/index.html","c3aa54bf18d581a2e5cb3759dc09c010"],["/page/5/index.html","be958a250acb4a910a3ff3ef797c4345"],["/page/6/index.html","4f549028f2dd3f907b0376e10596b4e5"],["/page/7/index.html","b1a2767f7bee6db029ee2dbc3258997f"],["/page/8/index.html","2abebfbe882cc3629cf46b5276c4a9ea"],["/page/9/index.html","1e69026549e7426219aba58eadad2ba7"],["/sw-register.js","66b4173c57086c5b83c9f8dcd73f1eb5"],["/tags/8086微处理器/index.html","6933d13ddf29a8c9fdc97c751caecb37"],["/tags/C/index.html","20d5bcba2ccd46ce6058adb1c0c23eba"],["/tags/Eslint/index.html","bbab93fb1255ba7fd917842b52ae0caa"],["/tags/HTTP/index.html","028ac8cc6402aff59c3c0064fa1bd447"],["/tags/HTTPS/index.html","f7f9f9cf938a8315af889b56a6a44c34"],["/tags/Hexo/index.html","5f4c429e722a6d20954875d542d1f1e0"],["/tags/JS/index.html","82e1968370bdf49599f994886f4c1293"],["/tags/JS/page/2/index.html","e5085eb1f4a4ed003888d3b241d1f12f"],["/tags/Promise/index.html","5fae5ee5ff71d0a17c2e98189a9e85d0"],["/tags/TCP/index.html","23cfaf6bd58d36e443c5b6b4244b886e"],["/tags/TS/index.html","f5a1ff9321af5976100e3da89fd36d97"],["/tags/Volantis/index.html","8b303239454b3e11a983f5c91d6bab5f"],["/tags/Vue/index.html","88f9df845951b57a6afcd9cd963ae747"],["/tags/Vue3/index.html","3f1636c4f301ee219c26760447b4147f"],["/tags/axios/index.html","c8db734d9800a6c0e66a8466bcc51e12"],["/tags/cz-git/index.html","764ec0ef5296688aac9bc8c2e6804687"],["/tags/index.html","7ca136afe1c50a6d4e7162983dbfa68d"],["/tags/prettier/index.html","eb6bdd3895ca481420ed815c5d28af8c"],["/tags/串/index.html","90b4e7a2afa015171d8a279407e21973"],["/tags/二叉树/index.html","40d15afa09bbb8c1c25fca9285fc98cc"],["/tags/二叉树/page/2/index.html","7c4170b037ebfa0938a5d7cf436450e5"],["/tags/双指针/index.html","44610db9fd567f0c8b004f78999b5237"],["/tags/双端队列/index.html","11ec0335787eba3a85c748e1a88fc63e"],["/tags/反转字符串/index.html","944ac81d57b5096f96765a2534672318"],["/tags/哈希表/index.html","073c0cf02ef23e00677e7335c293b2c2"],["/tags/回溯/index.html","757f109458c3c8c5baf12974010e0964"],["/tags/图床/index.html","5a7666550ec49886d9a147f923158ac2"],["/tags/广度优先搜索/index.html","8b4ddf3db32ea6fbb512e23d3fe052e2"],["/tags/微机原理/index.html","fd3c7fe338f72a42dceaa39585622bba"],["/tags/排序/index.html","67bc6d95d4ad754fcb4bc15c4dc219b0"],["/tags/数据结构/index.html","e23233cd86abf4f5383f2c770707ce35"],["/tags/数组/index.html","d5a58b1dee5f1863ed7548c735dd127a"],["/tags/数组/page/2/index.html","61ff07e10e844bab0261feca88e7f8e1"],["/tags/栈/index.html","18e9272e790aa920ab60ab85a1160a97"],["/tags/深度优先搜索/index.html","3e6c30bfce854f3bea2027bbd00281f5"],["/tags/滑动窗口/index.html","c4af645d023361348b35461f4533446a"],["/tags/组件封装/index.html","aeb69f846067493c15aa8d26efb9cc64"],["/tags/计算机网络体系结构/index.html","9988abce93549f96377f818c5f63dcd1"],["/tags/计算机网络概述/index.html","31ce5d28341871409c757f7f124766d8"],["/tags/计算机网络物理层/index.html","3c576d875625a810729325acfe0e5749"],["/tags/链表/index.html","0b6074e5c968f0b6cc5f9cd15ec2bc8e"]];
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
