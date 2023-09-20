/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","4e2224581562f0853eee2719edcfd387"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","1201fcad3c9f4948442ced1e6d7a8748"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","429b1e5dbc8393b970dedd35e7590105"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","5027522734cac5d2249fd3887b479779"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","872538980bf2894dc78efca01d88bb02"],["/2023/03/20/电商后台管理系统/index.html","afb70af8100edfc291f352c6be467617"],["/2023/03/21/Hexo博客搭建/index.html","448173d09e3f15406740f5256e33efcb"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","30dba223841a8b9f1ede9a89fe79408f"],["/2023/03/21/Volantis主题的安装与配置/index.html","2a906f4d8895a63545f7f45c52004808"],["/2023/03/21/单链表/index.html","c0005a614321d982bccef18c7445a6f7"],["/2023/03/21/排序-快排/index.html","455117db0e1f50f3aae0a5be02c1d490"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","b3464764ceb87c31f2e61da4ce1a5f50"],["/2023/03/28/栈/index.html","b185dbcf37e397e781e1d3bd95a88e0a"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","5646c303cb1bb95451c4395b8d4b6488"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","c1069b9721c6e89a91d2e45aedd90ddd"],["/2023/05/09/LeetCode-383-赎金信/index.html","37a90721c30e3aa83baa5c593776e1bb"],["/2023/05/09/哈希表/index.html","62740ba82d24593057823cf91b16f690"],["/2023/05/15/LeetCode-454-四数相加/index.html","4c57046c5ed4589e402cce1047578ed7"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","07d5d53e574e25bb5aee5622dd4780be"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","a9c922649c45adc67a060dceac5f79e5"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","5ca665757356ea69be10f9b91935db44"],["/2023/06/06/v-for循环图片无法显示？/index.html","6cf061950d2698c85272679a700a3e1a"],["/2023/06/07/8086微处理器/index.html","a4a3ee5caf9720c72eca36385d5a6eba"],["/2023/06/07/微型计算机系统/index.html","f6b598b45bc0b339e307d9dba868b905"],["/2023/07/15/计算机网络体系结构/index.html","f734c13ae5445a94c5a03e496ea1e8c5"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","1d13476968f1e8ec8af5575493ee32a6"],["/2023/07/16/计网-物理层/index.html","f217a9986cc3d745c8e52b173a60acbf"],["/2023/07/16/计网概述/index.html","3b8e237ad2d7714638baeb9fc5b4a9cc"],["/2023/07/17/vue3-App-vue相关报红线/index.html","6c6342924ea319e3c85f8b5c2718b172"],["/2023/07/18/实现二叉排序树/index.html","23ff9c64ec5ab41bfe2a9cae95ae89dd"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","a7d1e5cf9cf44e04ee63db6ff626e27f"],["/2023/07/25/二叉树的遍历/index.html","d05f093855409e1804584074e8bc48a9"],["/2023/07/27/vue双向数据绑定原理/index.html","51bd3e5f5b9e3f7c5ddf92d1d3d31ae7"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","de8b3e99616e23f94d7b24437d984e50"],["/2023/07/29/HTTP协议/index.html","c6dffa25db07599420d48b40ae8837cb"],["/2023/08/01/HTTPS协议/index.html","9de25e37138fa6f70d1dc7854148cb64"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","8076dd62d782de6a81e8b762b9a732fa"],["/2023/08/03/HTTPS-RSA握手/index.html","cd95c8b5b5cedc939589cb6e9fb4d1e8"],["/2023/08/03/HTTP缓存机制/index.html","40122b3e43b9341ff6433242fa1530d2"],["/2023/08/03/LeetCode-112-路径总和/index.html","efb85b20cb3475bc2755f6eec867d7de"],["/2023/08/03/LeetCode-113-路径总和2/index.html","75aa93d89c3367f33789bb7b85217e9f"],["/2023/08/03/手写Promise/index.html","5e5ea1c36b90ad69242073269a6e5e22"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","37c1126a2db5836cf49248df25c18d26"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","cbff5a28d148ce3afc0c4e154812da3d"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","7500182eb4ce192e53d66ba78e9f25d0"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","4bc4046295a83b19673f50c03cbc7da6"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","3119896d91e2d53b7971b8765de48adc"],["/2023/08/05/事件循环机制-Event-Loop/index.html","0aa2b8732ed3c84d4ecedbb19f0a7ff7"],["/2023/08/10/axios的二次封装/index.html","4a923fbdc609d38a60aa42867b6d9b8e"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","e8371f2bccd9cac227de5b43e1188c5b"],["/2023/08/29/TCP协议基础/index.html","29b67f3f8043d268b620bd5c92943a85"],["/2023/09/01/把一个数组旋转K步/index.html","6e74e22668f09982f7082c89c09da2da"],["/2023/09/01/防抖和节流/index.html","baa9a73356ba4c08db4dc0ff92abc6ad"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","660b8690bee58b43fcb6d26dad735770"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","dc6e4a351af2d1589e158c7ccb34598b"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","bcf2133bde99335f4b7a8c4ca3e72a42"],["/2023/09/03/LeetCode-904-水果成篮/index.html","8710b1d3df91763f708e58a89521d4e8"],["/2023/09/03/TCP三次握手详解/index.html","7df7355b74a84d43cde98f673d495fca"],["/2023/09/04/LeetCode-165-比较版本号/index.html","41fbada6e14ea9727782eb56d16be005"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","5c1536b98dfc7e4b7d5fdc234884dda0"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","07e4c06ffb41c2f7144e2586e9c74726"],["/2023/09/08/LeetCode-77-组合/index.html","d970be72019d3d6866d95aef4d1f618b"],["/2023/09/08/闭包/index.html","1c5264a7e401555f56c55779b4eec81d"],["/2023/09/09/Validate表单组件的封装/index.html","2aedc7a2b4b243baef7274fd3cf90822"],["/2023/09/11/关于this/index.html","0ceb396b452c83416e1d3ca02a470b7e"],["/2023/09/12/LeetCode-15-三数之和/index.html","8b079b0bd5083d1356549663a645e811"],["/2023/09/12/LeetCode-46-全排列/index.html","e475bddeb0c8e69224c68ddcf2dacef3"],["/2023/09/12/手写call-apply-bind方法/index.html","2c5ac884bf1d698e62b91d8ec59de1a3"],["/2023/09/13/LeetCode-912-排序数组/index.html","f2d6b2989e93f854d6b2cda859d11001"],["/2023/09/19/JS原型，原型链/index.html","90be2068286c8b135a7f1fad80f97ba2"],["/2023/09/20/LeetCode-153-寻找旋转排序数组中的最小值/index.html","bf6a2126eae5c9b9f750abe2423d24ff"],["/about/index.html","160706011ad4892a27a995b91c0eb38f"],["/archives/2023/03/index.html","f4a568d2ae204cbbb52fdb667376e6cb"],["/archives/2023/03/page/2/index.html","e006dac0902cbd269f80c3c0e3261d08"],["/archives/2023/04/index.html","da37b997c7e0d6ce1db5120cb0950b05"],["/archives/2023/05/index.html","5770bc8ece60f5ea98ccc0e369f2e8a9"],["/archives/2023/06/index.html","6311da0308e15c37f6e9c6040118590e"],["/archives/2023/07/index.html","f283906282ba9b8d4328fa1a954405d7"],["/archives/2023/07/page/2/index.html","bdd3e61642f0622a221cb598ea7dd437"],["/archives/2023/08/index.html","a8989f6545b030736a82342a934fc131"],["/archives/2023/08/page/2/index.html","c9194b759362c91dc1a98bac0f4ab60c"],["/archives/2023/09/index.html","66a30b7a21806948c5a5e1897c46d9d6"],["/archives/2023/09/page/2/index.html","751800baa2fb967b8de67b9db5c75690"],["/archives/2023/index.html","da4395ed5501d76f737abf206cbb6b69"],["/archives/2023/page/2/index.html","a275df573c6b3062bfdcfe1a8ef8846f"],["/archives/2023/page/3/index.html","78f1982d63c3eb777471b2f492baebf7"],["/archives/2023/page/4/index.html","7d62f66560c2687aeee9b83abab69d53"],["/archives/2023/page/5/index.html","cf9184744f77bbdae91e463e8a5d0477"],["/archives/2023/page/6/index.html","e8fb03703dbe732967c43d97547e1ac4"],["/archives/2023/page/7/index.html","b1ce4c326f996d86df8cbca5f06f190d"],["/archives/2023/page/8/index.html","f962fddf9d48125f8aabb7f84946089d"],["/archives/index.html","ba5e89294fda9575e6dca3bd025cb940"],["/archives/page/2/index.html","633de06c3c2b1612f684e0b82c689f15"],["/archives/page/3/index.html","cfb66668474a8073347332fffd89a7d1"],["/archives/page/4/index.html","f313fa8f662fd8e8e30f4e251cfb3a01"],["/archives/page/5/index.html","bd143b3da0a5f3a82f80c08d37e8a6fa"],["/archives/page/6/index.html","187910d7790a4fdb1dc86dafcbe5d5b4"],["/archives/page/7/index.html","32c0f26da01fa8737ea848152ce3e655"],["/archives/page/8/index.html","8b4f895d64313603f29fe31e57bfbb65"],["/categories/Hexo/index.html","3f308a241eba75b2523dcbf3d451a7ac"],["/categories/JS/index.html","24dae8aa98b4072322a6ab83d03a80cd"],["/categories/JS/page/2/index.html","6e352c59cc0a2f7fe322b69d864a58d5"],["/categories/Volantis/index.html","5cfac60512efa9a84ce94a80c316d5d7"],["/categories/Vue/index.html","a11762cdb2aae9b5d5fb1fa8b1acb14b"],["/categories/Vue项目开发/index.html","def1cb48ca72845c5f5f96848c447d48"],["/categories/index.html","faaa57b08e3ba00aa486b0c6ce0cb3ed"],["/categories/微机原理/index.html","33c4e760b6a0118bd70cc6c51833780c"],["/categories/数据结构/index.html","e003b6a4d72bf9befa0383a57f633608"],["/categories/算法/index.html","019bd11a8b5ca00400f93cff6a022fcb"],["/categories/算法/page/2/index.html","d1e7e3ec71aee5d86b9db6da9d6f5fd8"],["/categories/算法/page/3/index.html","c428ba7958f9fd8fbcd08e1a767b7d26"],["/categories/算法/page/4/index.html","9ff3c797e30e54dc2db0e73284df02ac"],["/categories/计算机网络原理/index.html","9bc92cb8b5645eed7cdb144cee302273"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","70632f5bbb3a9f1d86cd98c04fc452f7"],["/history/index.html","34fce8644cd1c276dd03073919cb7515"],["/index.html","1d470abc13e2b7b73ff52a70dc4ac8ee"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","b4cf108a0efdf76ba32a6ccaad472b4f"],["/page/10/index.html","ae82a24f411dcb300a3e26250d723827"],["/page/11/index.html","7bd9a79914289e5cc8a92aae766ac874"],["/page/12/index.html","5a596f21adea6936a2b93dedad0ccc7b"],["/page/13/index.html","b431fa923a08a7e4af42123ec92847ed"],["/page/14/index.html","b556ebc61f8dbd19943549b33187a31d"],["/page/15/index.html","f0fcb115da122f6cf0dcad1fdcf7a486"],["/page/2/index.html","46f8b8f9ee8579d9706eeeb11e98d558"],["/page/3/index.html","6be40e52f6a397a7c2c46a608d2e9a4e"],["/page/4/index.html","03d48f4c3ef091bea03fbb2c761693a3"],["/page/5/index.html","3bfb053d704a46fde44161f2410a198d"],["/page/6/index.html","9c0ca1a0f230af2c0355480208e6e0c0"],["/page/7/index.html","d26c9b06ea142282856081ba17315c1b"],["/page/8/index.html","92ed08e6eeedb427728c1c02aa6b4d38"],["/page/9/index.html","4c0d17b72f0da0870f349b483fd484a6"],["/sw-register.js","0c4fb379d543dee0cace6d7761e0b18c"],["/tags/8086微处理器/index.html","d8e311dc6907c29b53ef23af037f51a0"],["/tags/C/index.html","6db72c5236379d4a146332d89ca8d474"],["/tags/Eslint/index.html","06c83bf2b126469d93633c765c141d81"],["/tags/HTTP/index.html","d064e472a06c05b6d5b2b06631bbac43"],["/tags/HTTPS/index.html","588e178e1e0f2fe707985bda0bcb2e2a"],["/tags/Hexo/index.html","975ec50d5d6d9865febe734f53f62641"],["/tags/JS/index.html","8cc044491b8cd7c2c559c70687e378fa"],["/tags/JS/page/2/index.html","3f9d67b01adabcb3a5f1c19419899cda"],["/tags/Promise/index.html","627512af5d98520bd515d1fcb4e07e4e"],["/tags/TCP/index.html","bcae97eb8a9a8e00335bd04443a613c4"],["/tags/TS/index.html","0f6ed1f2c034d6ca0ad6c0c32fcb6d01"],["/tags/Volantis/index.html","53178c03c514752086aae1084a722f12"],["/tags/Vue/index.html","68115570446a578e1a993afd68d23dfc"],["/tags/Vue3/index.html","8d9cbcbe6a744f0c4208003bd14d57a1"],["/tags/axios/index.html","405a9553bc15ca3ec0022f58cdb870d5"],["/tags/cz-git/index.html","09aefc0d5e01c2b8667c7913a995ca50"],["/tags/index.html","b6db7bd9df15e4951b3f8112d5c2e7c7"],["/tags/prettier/index.html","19ff5f0bcae617e61682e490c6ec399e"],["/tags/串/index.html","f4b6413fc9c3333107238e71115a8a4e"],["/tags/二叉树/index.html","72f2144f1865a645b0a14230f1b6205b"],["/tags/二叉树/page/2/index.html","b3207d4cb1848675684cb512f7383deb"],["/tags/双指针/index.html","7267fab5dd34dbd4545d2b89ce6ba414"],["/tags/双端队列/index.html","3d952efc4dca52dcf087f8cd647abdb3"],["/tags/反转字符串/index.html","a760f4ffa56f3d3a5f15d05d2f81d51a"],["/tags/哈希表/index.html","23ced65a19d4efdc63853dfe8e5c0ef7"],["/tags/回溯/index.html","6943e075016e6429fd97d90d0802a20a"],["/tags/图床/index.html","9fee3d1e7508c6e5b3b10a0fa6ef85b2"],["/tags/广度优先搜索/index.html","2e42a10e380b83f8131e6a7eebc1c655"],["/tags/微机原理/index.html","516b706a907e5646b234ab653c17cf0e"],["/tags/排序/index.html","e137a1adda190fb9b112cdae2483125c"],["/tags/数据结构/index.html","8a3e545d7b29ead518bf86b7185b932d"],["/tags/数组/index.html","1b3b00aeeda815b43436bd80c7570cd5"],["/tags/数组/page/2/index.html","a6098e997a634ad4d34a68fcad9b6353"],["/tags/栈/index.html","a60ab6ca8893305914852739c06ebb6a"],["/tags/深度优先搜索/index.html","9747474bec56d6ba7a1ee5277fd05a8a"],["/tags/滑动窗口/index.html","ddb06c9dbf528db63cb3752ddeb10f1c"],["/tags/组件封装/index.html","a55a4cc37661058329295d357ac44674"],["/tags/计算机网络体系结构/index.html","570d3e377a602feb3ef0c0a96fa84dd1"],["/tags/计算机网络概述/index.html","cad055c3ce1749df5e72ce74638f3fc2"],["/tags/计算机网络物理层/index.html","4099e3032ec8004e9f57ece579000ad7"],["/tags/链表/index.html","8b27a9ce7e12d1544dcf33120c73cc5b"]];
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
