/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","7ddfe7322f9310936946a728d9010d6d"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","8dbb81e9683154fe14b74d9434612186"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","b9ddbbc43dc74d2ee7c2b907e33da66f"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","c5283ca2d8871f68f01f2b5126272ac6"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","a1a2b3e877bf2063448fdf1337bea215"],["/2023/03/20/电商后台管理系统/index.html","d450a22372fe815dfb5dc3d4e0622c89"],["/2023/03/21/Hexo博客搭建/index.html","6af9480bad2dbb30939c700d09cbebbf"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","9677b91ec44fdd463f72a188088233bb"],["/2023/03/21/Volantis主题的安装与配置/index.html","82afae42a9e270d7d20ea7921cd18e1d"],["/2023/03/21/单链表/index.html","c42a418ff04407e2d86e21bf73eaf75d"],["/2023/03/21/排序-快排/index.html","182d0e4ed07d476e28d1e62910465cd4"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","6ee8fc23a5a1c87e1060a59c2f372668"],["/2023/03/28/栈/index.html","87577dbad1b9515696a7ba01f648488c"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","e1eadf9a3a2943b6c3f4d4dfdd923e62"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","77c02b2eb4b69ecdb8635ee7c00fa327"],["/2023/05/09/LeetCode-383-赎金信/index.html","d23c68fa43b3b784fdb116271a1438e0"],["/2023/05/09/哈希表/index.html","a95fde78b26139e993f688b5513d05d4"],["/2023/05/15/LeetCode-454-四数相加/index.html","52064d5ea9309258b7606245fcb90b79"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","04c4b87029935463d2a57e0ce93884b5"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","8fe2067796fef58f8a480bcee0b9e471"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","f0e929d8423584e5aadd044c71fa59fd"],["/2023/06/06/v-for循环图片无法显示？/index.html","9dfc33f62211dcc9211a4e524de8151d"],["/2023/06/07/8086微处理器/index.html","f74e62bd025d7f18267557453c397de0"],["/2023/06/07/微型计算机系统/index.html","74cd474c4304654c7bac6adde3745dbc"],["/2023/07/15/计算机网络体系结构/index.html","5f2b4738c65e42b56edc8eeb1f76e546"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","f7761e5890bae6f5045ea5887d3b6881"],["/2023/07/16/计网-物理层/index.html","5ceb1bc187f346ce636c81883203dcae"],["/2023/07/16/计网概述/index.html","073a02288f6b59133b6a4ec5a1f15f36"],["/2023/07/17/vue3-App-vue相关报红线/index.html","8204c328af7011cd2e4f9feeca6e55a2"],["/2023/07/18/实现二叉排序树/index.html","0a930f522e9050bb19dac6c5281a1a8b"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","c30357496071153007b45619ae67e4ba"],["/2023/07/25/二叉树的遍历/index.html","af49779014c07bd94fff10050578dd19"],["/2023/07/27/vue双向数据绑定原理/index.html","05200a0c253e84c9f7871127c5f326c5"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","de84a26d8f9b4c1c50fba8f117da02aa"],["/2023/07/29/HTTP协议/index.html","ce96dcb4147d3ff89320cc777d734d3f"],["/2023/08/01/HTTPS协议/index.html","94b49e0a88db6307341c5d03574c108e"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","de96fff82804925945876998206a41c3"],["/2023/08/03/HTTPS-RSA握手/index.html","9897c0de84c1b8ad8f1dac0da743ce84"],["/2023/08/03/HTTP缓存机制/index.html","186cc67bc6ce4fa76e3a227b83de76ee"],["/2023/08/03/LeetCode-112-路径总和/index.html","7da285035d3a693057994a0a4af490e1"],["/2023/08/03/LeetCode-113-路径总和2/index.html","b489f915137c9156ae3707790171dc9d"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","7cbf4696d47ffe23528a599d5f3d4c07"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","be74a256ca725d0801d60e69e2c2ad1b"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","d97f471c324be5bec996530c9755d0ac"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","cf269decf8faabc2b878c210a06ef026"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","c2cc13621816d4527afba4571991380c"],["/2023/08/05/事件循环机制-Event-Loop/index.html","29f3c8f5fac0177616ed7d0c98114c7b"],["/2023/08/10/axios的二次封装/index.html","a6f9f41c81f5fbebdc273925828660f6"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","8711ab0ff5b3bdbd954200d90b742b01"],["/2023/08/29/TCP协议基础/index.html","06028aa756fbc4efb49c185e36ad9e06"],["/2023/09/01/把一个数组旋转K步/index.html","600532bdc20e0f8beeb6ac03edc27d66"],["/2023/09/01/防抖和节流/index.html","b8848d748b9325a6cc41b71e18a3a034"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","e0d9e8ab7f61f27cca58319823871f4d"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","87af5267391b7e85dd27c15b6b36e4ab"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","bd235f06e736db97962339080d3e092c"],["/2023/09/03/LeetCode-904-水果成篮/index.html","b991162596c7216bee2ed7708c3f2b12"],["/2023/09/03/TCP三次握手详解/index.html","4354c07b291048d0351678d014679ef6"],["/2023/09/04/LeetCode-165-比较版本号/index.html","c0b8d1d201fc63404d60419555d6d48b"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","748153834d352b41bb7bbad7ef22c14c"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","d02eb346eea824e3123a9e234cc9121c"],["/2023/09/08/LeetCode-77-组合/index.html","21b0b96b2319dd5d2232cc8e26691d99"],["/2023/09/08/闭包/index.html","b793893a47947dd049064a8f5f5453c2"],["/2023/09/09/Validate表单组件的封装/index.html","2224b6581523b085bca9cd70f8922ff9"],["/2023/09/11/关于this/index.html","39f47962b60fddd6167b9132db8a8153"],["/2023/09/12/LeetCode-15-三数之和/index.html","0600284c85d23b9d2e94c1d839fef249"],["/2023/09/12/LeetCode-46-全排列/index.html","a88502da637d2e074d1df1f67aa9cb24"],["/2023/09/12/手写call-apply-bind方法/index.html","ffd1f266b3d1ac2a5a55d841bfcbfb94"],["/2023/09/13/LeetCode-912-排序数组/index.html","964e06bc28a0cf20253410fac2955212"],["/2023/09/19/JS原型，原型链/index.html","cb80bdb715bfa8e9ccc9a75cc01baca1"],["/2023/09/20/LeetCode-153-寻找旋转排序数组中的最小值/index.html","c315f212639f51e4b688ba46771c392e"],["/2023/10/02/怎么判断两个对象相等？如何判空对象？/index.html","047e38623caa1e573ff4da5330a010e5"],["/2023/10/08/多维数组降维/index.html","526cf46d6a25966f8f299db8e3490cb4"],["/2023/10/10/实现Promise/index.html","85e6ee9c4c94723e2a0ff2a3d7347f87"],["/about/index.html","56bff58775ed974183bc229f1402e0cc"],["/archives/2023/03/index.html","d38b37d88a16c192f32c145282cd4374"],["/archives/2023/03/page/2/index.html","6c6316626ed5cceb29daab8b3ef5c4b0"],["/archives/2023/04/index.html","1fe5045a6996e8d879281f18fecbc46a"],["/archives/2023/05/index.html","1c93114f95017ff5e6054670a8d896d2"],["/archives/2023/06/index.html","e7e15f196f52748760546bb3d2bd9e8b"],["/archives/2023/07/index.html","d9b587dcb41aaec873302e0f25864dbc"],["/archives/2023/07/page/2/index.html","c009980470cfb53de548ac3f638baa75"],["/archives/2023/08/index.html","a63c273c5a6befa3dd9b39b97bd4fdf1"],["/archives/2023/08/page/2/index.html","2d7cf3a54c1dd02465ba627fc1b11ae0"],["/archives/2023/09/index.html","6499e377391db5c5647ad5f2dd853da0"],["/archives/2023/09/page/2/index.html","468ac12a9cf28229064190699336ae59"],["/archives/2023/10/index.html","86ff581112a6c9f8fe78216999e20e59"],["/archives/2023/index.html","f7bd201ed102d64d2422799a41f53795"],["/archives/2023/page/2/index.html","2407d67841a8ff21661904b8d983f805"],["/archives/2023/page/3/index.html","2bfcdff0f47771f940e3e5f1fd0a16c0"],["/archives/2023/page/4/index.html","1d04bae04cecbe92098b06918f01c40a"],["/archives/2023/page/5/index.html","0cef1db3bb72319ef13e0d45a4bed184"],["/archives/2023/page/6/index.html","487f622d1deb6a8bf62c3db44440dc5a"],["/archives/2023/page/7/index.html","93eaa6c9c1a01258839e9fbfdb6f276b"],["/archives/2023/page/8/index.html","8de86ca5d1496496f29c0359b6e56549"],["/archives/index.html","57388e3a924830561ec331efbb687fd8"],["/archives/page/2/index.html","bf8f06cf5bcea0df21748772f5d3075d"],["/archives/page/3/index.html","c9d9a643ccdb76ec4a1ae96031390ad8"],["/archives/page/4/index.html","60072abb9be621e26a9433db2f5318ed"],["/archives/page/5/index.html","c9d5f9b538fe7b532a196ee76167cd6d"],["/archives/page/6/index.html","ef66878c605aaa29b95321a467205d9a"],["/archives/page/7/index.html","6584c32dbedd3b0bc5bb56486e90b17c"],["/archives/page/8/index.html","668d77fe1ed9751f86ddec963f6183fc"],["/categories/Hexo/index.html","cfa372cb4d2b669ea0084a722e3f0d2f"],["/categories/JS/index.html","5a1da7de606386dbc418e6aad6596518"],["/categories/JS/page/2/index.html","14c48654a1bcc72c0400f40200817c75"],["/categories/Volantis/index.html","6632a770748422ead8898281c636af8d"],["/categories/Vue/index.html","ddc94bff6fc3e924e7282be753f9affd"],["/categories/Vue项目开发/index.html","3fbe4588237b98e8038b5fcafb547b6c"],["/categories/index.html","d986fa1696267c05562bef07dab626c7"],["/categories/微机原理/index.html","cc213043ba868a7256e5e6d620c1c0aa"],["/categories/数据结构/index.html","657ec1f2dda3515931a3a7551415a5b9"],["/categories/算法/index.html","ec43513a2fe04863bad68054ec482342"],["/categories/算法/page/2/index.html","71298e241be8a58a98fb96afecc29dc6"],["/categories/算法/page/3/index.html","6c766ff52c3e4fbb6a6672dcec993394"],["/categories/算法/page/4/index.html","bd1576c1de86c0c7895d607d1333ed7c"],["/categories/计算机网络原理/index.html","4e82a667d0abc178829231ed39d16ba1"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","394418f4959336aafaee7ea5892d0e87"],["/history/index.html","7b7e491f84f186b073a520c3bd9691c7"],["/index.html","22571b57519eede2838d9fb18a05aaaa"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","098cb34efe764d5577fbd4754b4b82e0"],["/page/10/index.html","07f60d4f7aa5b972a2e1ee11ff5db561"],["/page/11/index.html","b829e25d74e57b62031e9e8734fb8511"],["/page/12/index.html","89ef5a7fc14ce3beb8f3041c4f3e5af8"],["/page/13/index.html","1f2be5d296729188eea6f6799613bab1"],["/page/14/index.html","e192145860169989a75fa9b963d3b173"],["/page/15/index.html","e47e536d390eea3ddf8470912a670614"],["/page/2/index.html","98dcdff5eaa9ebecbc37693dbea875f9"],["/page/3/index.html","abb68ffc1a1c8702113fcdaf09a990ec"],["/page/4/index.html","75b59b32b258703c86d3be30c7ebbf27"],["/page/5/index.html","43642c87febaee116820d4989fb43377"],["/page/6/index.html","62b203be52f8693aa05c28684b878141"],["/page/7/index.html","d4fdf70807cc44389fa7281eab3823d0"],["/page/8/index.html","4d770f2b60c75ae951d44c74936affb1"],["/page/9/index.html","ddeb4591fc013a0f322fbd25bc87842d"],["/sw-register.js","94b420fa95001ec3919ad711a552222d"],["/tags/8086微处理器/index.html","c845dde8a321540fc44c11a01095040e"],["/tags/C/index.html","e9a4e7937b1d3010ce1eefe5ad45fd84"],["/tags/Eslint/index.html","57410c122ef8c24d52ed6c3db3102e90"],["/tags/HTTP/index.html","469cd8ae11856264e183b8c8f16932be"],["/tags/HTTPS/index.html","b155274938ffb5a3a37b8d1df99141f2"],["/tags/Hexo/index.html","233fdc489e50c0669ab79e23d8ca3933"],["/tags/JS/index.html","f11aa0e1c439ef09e6bc1a6f83c3bcc4"],["/tags/JS/page/2/index.html","691f0e5c074f7727ebc9f8cd30dec0e4"],["/tags/Promise/index.html","c77ac98db07ef065739159e8ec2b6b92"],["/tags/TCP/index.html","9965eace354972dba1cb2f48b133cbb7"],["/tags/TS/index.html","2e4c6888aa464fb92437c645c75ee5a4"],["/tags/Volantis/index.html","fdef7e5a09d4e6a4455f206ec6574554"],["/tags/Vue/index.html","a83465e43f95840ee5a19525fcb00f2f"],["/tags/Vue3/index.html","2b7f4fa3d9a08f45f39429aa516dc2f4"],["/tags/axios/index.html","5ff501f9861741d624f6c431a24c3d8f"],["/tags/cz-git/index.html","2acc12007ab123e3d6bc66252f141942"],["/tags/index.html","06262b9bdda21e6f7f894da4d6eedeaa"],["/tags/prettier/index.html","2a4d6b53e391a8c18e4bc7a482555636"],["/tags/串/index.html","8a2cbb63a372328c3d49a5fa4d570c01"],["/tags/二叉树/index.html","1ebea5a38cd5e42a04422ba817e9079e"],["/tags/二叉树/page/2/index.html","8ecdfb2a03c499dfc4f65c5cf2280025"],["/tags/双指针/index.html","c6d8f3fdf17c39da4f39c5af27427fef"],["/tags/双端队列/index.html","93759c7950f0edcf167b6954ef995685"],["/tags/反转字符串/index.html","7e1a4c1df0f1e56a6f7a595d6a533ed9"],["/tags/哈希表/index.html","b4a8a7e584d74f90c834922548b1f92b"],["/tags/回溯/index.html","70a230464d6d7ba91a804dadd155a745"],["/tags/图床/index.html","7d156584eebd5ef84cc7a52a1899c53a"],["/tags/广度优先搜索/index.html","37c8e8badf2bc07880735d56af99905e"],["/tags/微机原理/index.html","8c523879faff545476c1aafe54647028"],["/tags/排序/index.html","7ea27c3bc6d9b73889fa1f4fa38781c7"],["/tags/数据结构/index.html","8762fef03e40889206bac2a94c4a439f"],["/tags/数组/index.html","5f7a3eec8914b2f2271e24eda804dfa3"],["/tags/数组/page/2/index.html","6af5a7e7edc6035ad000e68f00dc1bba"],["/tags/栈/index.html","f7d8c7c4aea444a09f6a354e37e66de4"],["/tags/深度优先搜索/index.html","4bae6b875dac1ed4bdf4ba15b57d351c"],["/tags/滑动窗口/index.html","4de39976023c834107b71516f1e62911"],["/tags/组件封装/index.html","66d5bea9f6e2173c294df566343b691c"],["/tags/计算机网络体系结构/index.html","ab59ae27b9a41e510caffc428f1a1ead"],["/tags/计算机网络概述/index.html","bf3e5afa0e2a85464e6e8e214a1858b4"],["/tags/计算机网络物理层/index.html","d8e62b4f40fe3aae4db765e891f51a33"],["/tags/链表/index.html","0f75a4f8bbd18d201ce42068827398a9"]];
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
