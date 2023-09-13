/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","0a6fe88b293dac29a5618974e03c0dea"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","c2c6736ec468044ff6a44ceecbc47354"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","d6883ef966badc4fb8c2f7fd65ee541e"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","3d3702eca3f290463802fe745ad64f88"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","7273ff01bdccc6b3ac78d40572c946e3"],["/2023/03/20/电商后台管理系统/index.html","5a5efd32ee3ae4838a6273f8e0e65591"],["/2023/03/21/Hexo博客搭建/index.html","e1fe4178d6b619431e85adb7e45f53c8"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","e8d775cbb90de165e83757f7275fc717"],["/2023/03/21/Volantis主题的安装与配置/index.html","4ccef446371d4096b628f69dacca5ff0"],["/2023/03/21/单链表/index.html","ebde5dfb9cab4eb82acd67d1cdd394bc"],["/2023/03/21/排序-快排/index.html","41fbaded6a2ca4bc970a3c5978c4277f"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","cd7b69e77c88a0f2bcbd2af0211ac70e"],["/2023/03/28/栈/index.html","fd0bfbd74a687d7464003b2d43fbd06f"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","4bb1aae482c2728c8c4adaef2db0db72"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","2c255cd8fe1c2475910d908f45611840"],["/2023/05/09/LeetCode-383-赎金信/index.html","78bd92ca3475d89dd0fd2d30eab27a1e"],["/2023/05/09/哈希表/index.html","407e3714e9240de42f248756da9ba199"],["/2023/05/15/LeetCode-454-四数相加/index.html","c78c0a4864c11cfb6e9d7570af0880b0"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","3e82f5b18a4625a0fb7315f234cf4f65"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","3d8da341803297dc99c1f223bed2d891"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","c287ae2bf03ae6b1f0c534c784edd68a"],["/2023/06/06/v-for循环图片无法显示？/index.html","1b4875b28a5048631f77127f98ec619f"],["/2023/06/07/8086微处理器/index.html","4a839db044220fe548d23a3a620309ec"],["/2023/06/07/微型计算机系统/index.html","26a52246084892960e2e68a55b229fa5"],["/2023/07/15/计算机网络体系结构/index.html","f6d55a7014d511311a0a0f359faa37db"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","8aeda69706b4ab67b30a3a5e083a7276"],["/2023/07/16/计网-物理层/index.html","10ae48af2a5bf02d0e89e93d75081082"],["/2023/07/16/计网概述/index.html","4fb81dd33b8f7e709103556d06593c92"],["/2023/07/17/vue3-App-vue相关报红线/index.html","31cde67367c97be641cb81391a5fe863"],["/2023/07/18/实现二叉排序树/index.html","718c093d0121039ddfe20459a0b11050"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","4963692c8e93bcb0e59e492c02772350"],["/2023/07/25/二叉树的遍历/index.html","d0487029d3956098f3a64cd6cc125b39"],["/2023/07/27/vue双向数据绑定原理/index.html","63ef358f680e20d249460af2e0ca71f9"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","f9bffa598c3a0166a48002cec9e5431e"],["/2023/07/29/HTTP协议/index.html","31d0d187e152455cf5dc5b4e92091dd2"],["/2023/08/01/HTTPS协议/index.html","32a160bbd669f014bbedde677687934b"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","a4cc7c49bdf16860f3cfb523cf2b15f7"],["/2023/08/03/HTTPS-RSA握手/index.html","1d74e2cc62e5c8adb8988adf1d66f4ed"],["/2023/08/03/HTTP缓存机制/index.html","6bdaccc0ae0b6df2cc183046eda6b27b"],["/2023/08/03/LeetCode-112-路径总和/index.html","ed26c230662f01d4076b65deff1b9cf4"],["/2023/08/03/LeetCode-113-路径总和2/index.html","7020f2bba120f35f55905cfb55e6832b"],["/2023/08/03/手写Promise/index.html","c223e9f2fe46ea9721f56101030194ee"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","282c9e5465217a9c0fd2652e2cccd463"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","f6a002090e14b5db7a41e59e80186b46"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","54d14120f26949e01f966822b1514598"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","7779cb53eb01d5c968cd88be83662c4b"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","ef0209bf2bf8aaf89a6cffbc3657453f"],["/2023/08/05/事件循环机制-Event-Loop/index.html","3679ca048b3834ce8705a575d1b4eb7c"],["/2023/08/10/axios的二次封装/index.html","a5cad49096b926b297d90d63b45b63ce"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","0f342eede53ab4f4534eb16a2ae9dbe1"],["/2023/08/29/TCP协议基础/index.html","33a1c1f8ea6df59f2b00d95bd00f5b04"],["/2023/09/01/把一个数组旋转K步/index.html","ca13e761edb046e4b279f6573d48c352"],["/2023/09/01/防抖和节流/index.html","d52397b22a4f0057b7e3838db33ce11c"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","66794ff947dbf4c15a8bf59f434a9023"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","743e74d43bbc4fa76351bcd248af022e"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","f8f9410e6cde89f407a109e649771978"],["/2023/09/03/LeetCode-904-水果成篮/index.html","8e9fa98c4eb3e20e80c786dee8b5390e"],["/2023/09/03/TCP三次握手详解/index.html","fc9e279e32941731699f2cac9277521e"],["/2023/09/04/LeetCode-165-比较版本号/index.html","c17c2f2cbf8418a4e90e5f6d688b0c44"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","b4ca7576e6d107e231dc7ab08b7d9251"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","cdc2fe91159380eb7c9cbff01e12fd1f"],["/2023/09/08/LeetCode-77-组合/index.html","39039a1f3755d544a801eacbec35a610"],["/2023/09/08/闭包/index.html","59df39e15a82da1e86ce9304a242e2c3"],["/2023/09/09/Validate表单组件的封装/index.html","d926d527184dd4e3f3b20ada0f454324"],["/2023/09/11/关于this/index.html","105d925d451da060f1da42e1643370e9"],["/2023/09/12/LeetCode-15-三数之和/index.html","21acfa197339156988c0271e506d460d"],["/2023/09/12/LeetCode-46-全排列/index.html","88dc5ef157b41be9b8a766d4e1a7fd86"],["/2023/09/12/手写call-apply-bind方法/index.html","23bbe2e3c3e09510c84205934c89dce5"],["/2023/09/13/LeetCode-912-排序数组/index.html","ee31682e0111f79f652f368b6f4b5d81"],["/about/index.html","1f8d7e47e0ae3f583efaa86f016dbfe1"],["/archives/2023/03/index.html","976b6f02648ebc0ee9fa92a4f3b3fc37"],["/archives/2023/03/page/2/index.html","e520570e46e285607e86fa596165ef09"],["/archives/2023/04/index.html","6469f309e1f058a124c0078a73c81ec6"],["/archives/2023/05/index.html","899b8ee797ff4523061e5e28b7332105"],["/archives/2023/06/index.html","d304d1aa956f2a0ee8fedc2e5058b415"],["/archives/2023/07/index.html","ff40d089ba916d409a833b8e266cdb65"],["/archives/2023/07/page/2/index.html","ef89dea5ed23b19bf0a0baa2447feeb1"],["/archives/2023/08/index.html","f2aaff820e660855745fc616d428419e"],["/archives/2023/08/page/2/index.html","0d184768d4fd2bdf701704961d21ba92"],["/archives/2023/09/index.html","7a419ee0a25b966b15cce341d49bbe79"],["/archives/2023/09/page/2/index.html","98b0a8a74243fa6d1c6355eb06d28ca7"],["/archives/2023/index.html","25573406b3e0d06f305d483ef19fdf95"],["/archives/2023/page/2/index.html","3eec33b57e34a801b94aef6a769609a6"],["/archives/2023/page/3/index.html","66dcd655c1010dd2e993796c6a8c3b6f"],["/archives/2023/page/4/index.html","a975ed33da79aadf7acdc2b32c2aeab5"],["/archives/2023/page/5/index.html","b961d41cb33a6e95f9a35f8b818b3002"],["/archives/2023/page/6/index.html","445c53dee5a3fb67c2da5d36f5212515"],["/archives/2023/page/7/index.html","09d770302a8534547d8f4ac453f4e28c"],["/archives/index.html","e847ae75acc4ddba967290d55dbccf4c"],["/archives/page/2/index.html","ed51a6e0eac7432e7c7b71eda20f78b5"],["/archives/page/3/index.html","2c98f07b9be8ec485f2026fa1f171ac6"],["/archives/page/4/index.html","16feae93275990ae48345589d9fda2e1"],["/archives/page/5/index.html","0440267d1c0ce2856c0f908bb549b475"],["/archives/page/6/index.html","0ac0a4560bf3f44c1e9fc54f290fcd1f"],["/archives/page/7/index.html","6ec4a949d4fdbf2fdee0c02f8ee53e9c"],["/categories/Hexo/index.html","d7ec02b342e4e6d20116dcda295e6be4"],["/categories/JS/index.html","ab747c88f4d540fc5940cfdcfa319392"],["/categories/JS/page/2/index.html","fdf4c69a1b1100640825cd9a8c7cc7a7"],["/categories/Volantis/index.html","679c85cd2a4ec3a5ecf9521ae8e6a1cb"],["/categories/Vue/index.html","2b36d0754c7c1f13fc9a73ba2bb3e32a"],["/categories/Vue项目开发/index.html","b9234cb7c4296ecce28088483eb9c159"],["/categories/index.html","766215cbb68ce138e26a87c4741abb1e"],["/categories/微机原理/index.html","6c3b7c134fdc4ca77381e70788d33783"],["/categories/数据结构/index.html","9971c713eff8173c4fb92837c411c73e"],["/categories/算法/index.html","fec70cfda9b3924039de01278712456a"],["/categories/算法/page/2/index.html","f616fba3ee0707d68f3fde215d61a921"],["/categories/算法/page/3/index.html","308896a62acb76b897535cc3657e836e"],["/categories/算法/page/4/index.html","afa5d7bca9f8e8743f1f5f6b0493d946"],["/categories/计算机网络原理/index.html","2c4b76bba19ee04ba67ceea8701c0a1a"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","22a2ab77ebf43f3bcbb39a025dd5d9b7"],["/history/index.html","5df8044060a67cdc611f6b3d7cae2119"],["/index.html","182b5e0d4ee3b338fa491dab7c7c5a9c"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","04f5e54f3f01f7f76b73a37f7643650b"],["/page/10/index.html","6cc5b314b3deec41e6e4d66d9ca5144c"],["/page/11/index.html","bae86ece09d93a5435a06e467031bde5"],["/page/12/index.html","2620d84696aa455ec0b16912ceac5ea7"],["/page/13/index.html","0bef2b47d014990d11c94fe5e31ee424"],["/page/14/index.html","15ff3ba2581a4fbb9fd8fd6b395db0e8"],["/page/2/index.html","5a7c8b05cd64d88a81e0a8609135845e"],["/page/3/index.html","41ae994cc87a156e244369accc4918a5"],["/page/4/index.html","4b37acb5321931dcb4338ad6b33d4b4e"],["/page/5/index.html","883ca2f1b7761613521658ea912aecac"],["/page/6/index.html","6e02e1a88f9113dc1070a70ae39a1e25"],["/page/7/index.html","59be37da85ff781909098394de15cd10"],["/page/8/index.html","85c7d8fb21b94a92a017f8558ca34653"],["/page/9/index.html","72a9fdeafc4f1d87d706485a42c3bb80"],["/sw-register.js","4a839a3615958b92520bd3e89c3f8e87"],["/tags/8086微处理器/index.html","0c5f4f75ce8f3e9acdabafc6c142d91e"],["/tags/C/index.html","3f52e8adda3ea25ef231bc7f02bc335a"],["/tags/Eslint/index.html","6485d82de5a387d2bf1d0e2982192457"],["/tags/HTTP/index.html","3b9a8dc906e7f28db53f976be686849d"],["/tags/HTTPS/index.html","30b4787f70d65f75d1fd38dc7f935347"],["/tags/Hexo/index.html","b47838f7368ba3ac2e0f06ef4e0b754e"],["/tags/JS/index.html","20d217173fc95beef82c7800e528654d"],["/tags/JS/page/2/index.html","4c3e5fc4027e28760cabf7c6cc88cc8c"],["/tags/Promise/index.html","5e84fc53971b930ef20777e7e465da40"],["/tags/TCP/index.html","46365185c8985b6b4e6d6f054a4698fc"],["/tags/TS/index.html","4f043811e155f762fb221aa7c383f1d3"],["/tags/Volantis/index.html","04b049d89ddf450741a720a436daa5da"],["/tags/Vue/index.html","1a1a95a095d439e137586c45a8bc2269"],["/tags/Vue3/index.html","88a6cd426bfa18648bc08683666d4ba9"],["/tags/axios/index.html","d7b2a71cce749feb41668eacf4603fc2"],["/tags/cz-git/index.html","40889dc34a1b1ea03825e7a2fc9dbd33"],["/tags/index.html","c5ddf5655b125063463dc2f5fa78b23b"],["/tags/prettier/index.html","db521b2bca21903db3a6da7558f7c8ab"],["/tags/串/index.html","4141569c32045f1a021219180ad67a74"],["/tags/二叉树/index.html","d084b8c0a2976f4c726027db9f73e3e2"],["/tags/二叉树/page/2/index.html","902b6b6b7d879ca90be3cdd983e9e6bb"],["/tags/双指针/index.html","98c047a6184794c40b0796db4bfe8ede"],["/tags/双端队列/index.html","d9be54d2d10743cf01728fdcde4c1b10"],["/tags/反转字符串/index.html","996ba7bed0cb79fa7211c9ed14b9da7c"],["/tags/哈希表/index.html","c1436b429aef6d71f86672fae8e90daf"],["/tags/回溯/index.html","a41136b255861bb0a0db45959bcadf10"],["/tags/图床/index.html","e599867e5f3f54c2aad4826d6077180e"],["/tags/广度优先搜索/index.html","03282d5d220cab4bc23387e67399441c"],["/tags/微机原理/index.html","794c82604be82b49d1ead205f2de231d"],["/tags/排序/index.html","8921ed36c9e227577b05d39ac36c5091"],["/tags/数据结构/index.html","0c0ac9f3889b47033fbe6931d7e00303"],["/tags/数组/index.html","a19c7905c001d9bbadbff284270e2659"],["/tags/数组/page/2/index.html","482bdb6c42d9ac45f527a971fe12eddc"],["/tags/栈/index.html","5eed4f495ce788e1e62a8621c1c3c0f4"],["/tags/深度优先搜索/index.html","3bc7653ba9a30f4f67eea1f20fab48be"],["/tags/滑动窗口/index.html","9d5fd7448c89fd1e23f14826e5ed3c7f"],["/tags/组件封装/index.html","6e33a2a1571c78f50017ac1474d8f295"],["/tags/计算机网络体系结构/index.html","381ea51738db216f9c8ef938ef1b4cec"],["/tags/计算机网络概述/index.html","0d6ec23834353beca6a803c70064a35b"],["/tags/计算机网络物理层/index.html","ae9ed71e96505100ee820f431cf362fa"],["/tags/链表/index.html","c3b1cae17ce1da0fb47de738369ac351"]];
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
