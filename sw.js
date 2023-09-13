/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/03/06/hello-world/index.html","a48556fc26a7edaefaac37cad6dc5fda"],["/2023/03/06/剑指-Offer-30-包含min函数的栈/index.html","35acf79cd58836d0c7710f1f68f92732"],["/2023/03/07/剑指-Offer-09-用两个栈实现队列/index.html","cdd1f03507652e3e4924ee9627a998ef"],["/2023/03/14/剑指-Offer-06-从尾到头打印链表/index.html","cdb4c37b79034db27fff9ec561b5763b"],["/2023/03/14/剑指-Offer-24-反转链表/index.html","e64b7f877e5e1cd94f7ef30988f573b2"],["/2023/03/20/电商后台管理系统/index.html","f34ecd8448e8735bdc23172c8771340c"],["/2023/03/21/Hexo博客搭建/index.html","3724fa88cd09922e3bd6af880a4c8daa"],["/2023/03/21/Typora-PicGo-阿里云OSS图床/index.html","51a0f3c1deab934b28f0437914f502f9"],["/2023/03/21/Volantis主题的安装与配置/index.html","1d2c45abe2d71e3d4410c50ac6e64616"],["/2023/03/21/单链表/index.html","6dd6a3bea43a4cd95c6b11a30cf2413b"],["/2023/03/21/排序-快排/index.html","b586df798fc43142b3dd560bf12da045"],["/2023/03/22/剑指-Offer-35-复杂链表的复制/index.html","564eb95bb5bc4597b636568b3773674f"],["/2023/03/28/栈/index.html","1e0581b76a7d7ef67a1a16d9c6639984"],["/2023/04/24/Vue3知识点总结-学习笔记/index.html","b854d906e4e643cbb0c9f99719400814"],["/2023/05/08/LeetCode-242-有效的字母异位词/index.html","1529e33951e1c124c5a5882fd61a54cd"],["/2023/05/09/LeetCode-383-赎金信/index.html","18f43da64cfb5023db0041af87c2bbe6"],["/2023/05/09/哈希表/index.html","c28f6a8636a294b0c33eb63da74de88e"],["/2023/05/15/LeetCode-454-四数相加/index.html","22333f93137856e32c09efeb678b6cc2"],["/2023/05/22/LeetCode-151-反转字符串中的单词/index.html","516db2e3bcbd26efdb3aabe088ea5bbf"],["/2023/05/22/LeetCode-541-反转字符串2/index.html","349663454a7916f40a59009fb4b2d019"],["/2023/05/29/LeetCode-26-删除有序数组中的重复项/index.html","065c77aded4d8ac2c487e9d8b6fa85b7"],["/2023/06/06/v-for循环图片无法显示？/index.html","161cc1c3ce6b4097fcfa0e0a9565cc6f"],["/2023/06/07/8086微处理器/index.html","44c426e0510cbe1ee6a575740964dda4"],["/2023/06/07/微型计算机系统/index.html","ad6f0c021b3ad7c5e3eeb6b7908560f0"],["/2023/07/15/计算机网络体系结构/index.html","d0eaaf33c87706bb61e791966bd7f4f0"],["/2023/07/16/vue3-eslint-prettier-czgit/index.html","f733acf9abce9773fda3daeccddb844d"],["/2023/07/16/计网-物理层/index.html","dab40ba39849b613409154b2f5c10348"],["/2023/07/16/计网概述/index.html","bc6369c3115e56703352ad0e209c8c6b"],["/2023/07/17/vue3-App-vue相关报红线/index.html","7a3c78fb440fa63e90130988ff250906"],["/2023/07/18/实现二叉排序树/index.html","37e6c21e02807e15a516aa73b611262e"],["/2023/07/25/LeetCode-116-填充每个节点的下一个右侧节点指针/index.html","e4ac32734c2b282881afee83e7309fe9"],["/2023/07/25/二叉树的遍历/index.html","e92cc42737907cb0cc304893218273ad"],["/2023/07/27/vue双向数据绑定原理/index.html","951e00a2c2ee1ec2ee901aa3d13ee124"],["/2023/07/28/LeetCode-222-完全二叉树的节点个数/index.html","54a016cb61b3094a0d4c242a22deaf46"],["/2023/07/29/HTTP协议/index.html","8d6adc4ff5fe56473a28aa52f57260fb"],["/2023/08/01/HTTPS协议/index.html","e6a10466963cfb0c1aa34ce437291c2a"],["/2023/08/01/LeetCode-513-找树左下角的值/index.html","048171c84454a0ad289f1ded02d0ab45"],["/2023/08/03/HTTPS-RSA握手/index.html","369096460794705f06d54b61aeffad73"],["/2023/08/03/HTTP缓存机制/index.html","08cb75887ab899162f86fe306ab5758a"],["/2023/08/03/LeetCode-112-路径总和/index.html","c00187c8cf64725054237b60daaef870"],["/2023/08/03/LeetCode-113-路径总和2/index.html","35e62da465c198d52ba59e5051fd0986"],["/2023/08/03/手写Promise/index.html","1d729c1c12495d4592e83ff0d05fdd66"],["/2023/08/04/LeetCode-106-从中序与后序遍历序列构造二叉树/index.html","34f68bc551da94b668e65fd9ff40c5fd"],["/2023/08/04/LeetCode-654-最大二叉树/index.html","76cca97242262b3ecfe3bd23b61a031d"],["/2023/08/05/LeetCode-530-二叉搜索树的最小绝对差/index.html","b8cbcf3644a5d5c9eb69f02dc5bf02cf"],["/2023/08/05/LeetCode-617-合并二叉树/index.html","42462a15605335818f747389c7462102"],["/2023/08/05/LeetCode-98-验证二叉搜索树/index.html","b53f261c7ae2b8ef61fb683db6e23e80"],["/2023/08/10/axios的二次封装/index.html","07ba44ae20c4e1afbcf7b4778983eb75"],["/2023/08/28/“惠医通-医院挂号订单平台”/index.html","38a1814ea876a70d6b28f90a4e30a2be"],["/2023/08/29/TCP协议基础/index.html","5b8aa646ae6e40a9c49230dc213b6ec2"],["/2023/09/01/把一个数组旋转K步/index.html","fc528f77f825745eef6c85b5ad0b40c8"],["/2023/09/01/防抖和节流/index.html","a58d81475eb73be1c7381261412315c5"],["/2023/09/02/LeetCode-209-长度最小的子数组/index.html","990511d337e3a3bb71d3d0bb603998b3"],["/2023/09/03/LeetCode-3-无重复字符的最长子串/index.html","b73be43b53e17bc2baac0f2d806275c0"],["/2023/09/03/LeetCode-88-合并两个有序数组/index.html","2869dadf8408ed07e82640f75f5a1cd3"],["/2023/09/03/LeetCode-904-水果成篮/index.html","58125f08b6560e0a5baea3934b98da3a"],["/2023/09/03/TCP三次握手详解/index.html","def71d400ca9d7b1bce8d8c1d682458c"],["/2023/09/04/LeetCode-165-比较版本号/index.html","bb7457d1eb163dfae409450da9faef47"],["/2023/09/07/JS中执行上下文和执行栈是什么？/index.html","81caf9c4a4bc57d8876aaba8d20dff79"],["/2023/09/08/LeetCode-17-电话号码的字母组合/index.html","9ba2db8ee81673f082d9f17f4ac3ae81"],["/2023/09/08/LeetCode-77-组合/index.html","6274a183369d2d3f0b76a4d121f159b4"],["/2023/09/08/闭包/index.html","9f114d42ef1fd1c0c1f64727c1d299ec"],["/2023/09/09/Validate表单组件的封装/index.html","16e77d145648290877bc1eb9aa5c7824"],["/2023/09/11/关于this/index.html","1e94471ca0768794f5c3270c07321aa4"],["/2023/09/12/LeetCode-15-三数之和/index.html","722a9ef04a36a3187c5e2eb6d3e39cc0"],["/2023/09/12/LeetCode-46-全排列/index.html","c0a9efe3e6bc9d5d7d1725ef8c40b821"],["/2023/09/12/手写call-apply-bind方法/index.html","20b75211b23dbdabc02d0d2774d79696"],["/2023/09/13/LeetCode-912-排序数组/index.html","3e9a80372e1baf53aed88e401dbd915f"],["/about/index.html","0696123030c9548e5dfc04d80ede872f"],["/archives/2023/03/index.html","ae6223c95adad9be906f7d4b6b569e86"],["/archives/2023/03/page/2/index.html","80276c894a96b8db27af7a7c499ba890"],["/archives/2023/04/index.html","2f412a87f4e5760f0eaa0a89d25ba625"],["/archives/2023/05/index.html","cc516c79ef6555cd4f68a9a964f146fd"],["/archives/2023/06/index.html","faf0213373af647e2ee52784c69e6433"],["/archives/2023/07/index.html","528a78864c937089fdb487664173531f"],["/archives/2023/07/page/2/index.html","183a2cf2873325e537e27c132404d9ed"],["/archives/2023/08/index.html","7c6a636422c8ce43565d6747f3f0cb50"],["/archives/2023/08/page/2/index.html","ca448d4c3ebcf5931cd12f9bbf7f1cc5"],["/archives/2023/09/index.html","55f4512ac9c21b33ec6018153c0afe1b"],["/archives/2023/09/page/2/index.html","a4226c82bff41dd9d4a8bf5c54222926"],["/archives/2023/index.html","fdd25bd68d2fe07a74d2f5126d047e4b"],["/archives/2023/page/2/index.html","f48a13d3b6e18379192a0892cc5f767d"],["/archives/2023/page/3/index.html","a7b0c533230a1992fd6493e681e92545"],["/archives/2023/page/4/index.html","68aa7b21fb8a0cbe6a396afeff0b236a"],["/archives/2023/page/5/index.html","28095d6926eb1330c0627b526f2910cf"],["/archives/2023/page/6/index.html","e93fd5a6d48e3fda7661291f938c7e24"],["/archives/2023/page/7/index.html","4bfa3e730297e013112d76d6c3e8b87c"],["/archives/index.html","280e46ba6ffd9ed35b72e3787948236d"],["/archives/page/2/index.html","cfa7c97f2b658f399c12c2d5d1706d14"],["/archives/page/3/index.html","1519a95e7052e809505578d1b6a0bfb9"],["/archives/page/4/index.html","21064816bea32542bbd06c35972e094e"],["/archives/page/5/index.html","480818d626ba11e726e19f582f270741"],["/archives/page/6/index.html","48b8328580a91246ae8899e71e81c954"],["/archives/page/7/index.html","6ccffd666cd8c64a2faf1e0d70d20181"],["/categories/Hexo/index.html","c4ff9f9f05079106eff6184ce0ae411f"],["/categories/JS/index.html","ea51ad516807c9df6c03d92409297839"],["/categories/JS/page/2/index.html","09f1b8aedc2a619302ab40f57a8af92a"],["/categories/Volantis/index.html","26ee4baf6be04a4f2beeecd72d277585"],["/categories/Vue/index.html","7265864f272faecc96b6272935ab0fba"],["/categories/Vue项目开发/index.html","07b754de5f5dcd2a0058105f863aa9f5"],["/categories/index.html","c9face03da8667967f82a96469ed51d2"],["/categories/微机原理/index.html","87cd03b66162a6e28a88018c6d8d9566"],["/categories/数据结构/index.html","f44c61d41a80121a7967334d39277ba5"],["/categories/算法/index.html","a1f464197f54499e8b5aaadda23a74f2"],["/categories/算法/page/2/index.html","ef238377d1e7ab3b81418aad6db33ef8"],["/categories/算法/page/3/index.html","bcf4a184fa4af541bc15cb7f0edfef7f"],["/categories/算法/page/4/index.html","f57f0b675e684db7ea065f79ef8b441b"],["/categories/计算机网络原理/index.html","7d7111196ceb88157bfcf33eee039f60"],["/css/Readme.html","c1421c18e077ab9a9582161d9197e693"],["/css/custom.css","989835da364de8d343099e3f3edb72a1"],["/css/first.css","6db033e08adf8355ffb2d11645012831"],["/css/style.css","e59042d33ab3ecfe2c1bae2b764f0425"],["/custom/darkmode.css","989835da364de8d343099e3f3edb72a1"],["/custom/darkmode.js","d26c762ec9ae83d995ace50b1aa69241"],["/friends/index.html","59376ebc682d313532d428e4db46f126"],["/history/index.html","f0d3cae1fee11ac49d881b4709eb75f4"],["/index.html","596931e15c468f4086736f0d9cca09c3"],["/js/FunnyTitle.js","c216c937ead9ab350501effd8ab639ae"],["/js/app.js","2094e03b6dcf440131e56ce23644f71d"],["/js/custom.js","f2a2463b92c6bb65533cba82fe91a4ec"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenu.js","d9437285263079b1158df42384235b71"],["/js/plugins/rightMenus.js","80d861b1e0937ebecf188793f3705a3a"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/hexo.js","8594665377e48c3b406b0149264ebf2d"],["/js/subtitle.js","c453f98d53e4f50432e900aa041c71c4"],["/more/index.html","63322cb430ab17f82da2570fea7a29da"],["/page/10/index.html","5e11f6e773bb3920c6fb36def6acbe9e"],["/page/11/index.html","d7a19e942c1ca3d56d2f94a9952dbbf9"],["/page/12/index.html","4be130e0d3df300a46a1b6fe4b700420"],["/page/13/index.html","4066d1a8eba2efcbc90a5b3546d7ad76"],["/page/14/index.html","7bc10bf6f5e34bf0bb64c6aea006f392"],["/page/2/index.html","86bcd3b570bd7b8b130f8164f2910b28"],["/page/3/index.html","3cda24366abfd41220bb42263f2ce6f4"],["/page/4/index.html","d2c8027fead8026b1860050aa857c28c"],["/page/5/index.html","375f6410f1dd65468b5b7afa01dfee85"],["/page/6/index.html","6b32319021708c10e1d7a5f8c8119dc1"],["/page/7/index.html","6f386ecaadd1ac04e6a4f3537addd557"],["/page/8/index.html","922b7e1fd2bf9c80e453c1155a2356f7"],["/page/9/index.html","f72401a6ac3bb42a8697d31c213bef37"],["/sw-register.js","6e2a35a2e4056f5e928e171693c7d2b9"],["/tags/8086微处理器/index.html","52f779b4654ca09be960fc2ddb4d89bb"],["/tags/C/index.html","01f42a20e3d3d95062b3d25018ad3dd9"],["/tags/Eslint/index.html","fdcf77cf1999d5b0175b70bf292e1c59"],["/tags/HTTP/index.html","4f765c085b2fef32f97e3a7c59f4a4f6"],["/tags/HTTPS/index.html","fc53d870c30c0a2ede14659889020c22"],["/tags/Hexo/index.html","93796e96bc841eea1bf562af954fec3f"],["/tags/JS/index.html","b824a20fe378bfefe98474ebca0b8889"],["/tags/Promise/index.html","79d75226c534f0da8bf0a9cf63fc19d5"],["/tags/TCP/index.html","69d3ab6ac49b59cd3d10507c66faee87"],["/tags/TS/index.html","fe5f293bc34dae3353b608dee49bc14f"],["/tags/Volantis/index.html","1fa8f4e246e7ca5a2240ec2ea67df33d"],["/tags/Vue/index.html","1669dd1c7a24d129e174e643e647753e"],["/tags/Vue3/index.html","4a8783dc42357f72b66c57769b04e0ea"],["/tags/axios/index.html","6c756efa5a2019a10f6ebedcfbb8efb8"],["/tags/cz-git/index.html","dacc6320967487a0a1624f467c435e07"],["/tags/index.html","1695923eacaabd2e3241e3f553163ba8"],["/tags/prettier/index.html","df7725ef22ca2c3ad14de2e0636f2863"],["/tags/串/index.html","b958b8634169943374d7fba7c9dc60b4"],["/tags/二叉树/index.html","75d9a708e8e94f6ead870a77accbf81b"],["/tags/二叉树/page/2/index.html","02cc82d5e918fc9d1f3aace3c89ea26c"],["/tags/双指针/index.html","eee2b45bfd161891e10be588c3a7e1af"],["/tags/双端队列/index.html","96668fdcf8b6a4dd998f7ca0da8c080e"],["/tags/反转字符串/index.html","2796b5791aa5e238a7452a7eeb40dde3"],["/tags/哈希表/index.html","ee30e83948064c58ff9e2de01ae70e11"],["/tags/回溯/index.html","f402702beb3ed77822097efed734462d"],["/tags/图床/index.html","5813669a1580371630ef567a42e2a919"],["/tags/广度优先搜索/index.html","aa4ea08022cdc41502ea8f29d6241c83"],["/tags/微机原理/index.html","9be83879c44efe38d98ac43976941bb1"],["/tags/排序/index.html","4814d9539836f5d653229d2044f514ea"],["/tags/数据结构/index.html","dda68b3613960d9f795ecacd4c096d33"],["/tags/数组/index.html","1683caf4366542db0c4066ad24d0f10c"],["/tags/数组/page/2/index.html","7c04882651b76749834deba009003688"],["/tags/栈/index.html","5d943ba27b2c122a85db3004ba3c56bd"],["/tags/深度优先搜索/index.html","3220889274c1cc3b05d344552258b08a"],["/tags/滑动窗口/index.html","48bc1b5e9d25175b239e9042ffce3f31"],["/tags/组件封装/index.html","8d49c8965bba26a4f8760cb280369246"],["/tags/计算机网络体系结构/index.html","540017f44cfa3db00411bbc56a667328"],["/tags/计算机网络概述/index.html","4694bf1e8230c9154e6b3711808a554c"],["/tags/计算机网络物理层/index.html","0b0550cc9cf8bcd030e03f974475f992"],["/tags/链表/index.html","110b3bf678c98d7cf2ee9be0344079db"]];
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
