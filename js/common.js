/**
 * 设置公共文件等
 */
let setCommon = function () {
    /**
     * jQuery
     */
    document.write('<script type="text/javascript" src="/js/jquery/jquery-3.3.1.min.js"></script>');
    let myName = '陈祯乐';
    let head = document.head || document.getElementsByTagName('head')[0];
    let meta, link;
    /**
     * 百度站长平台验证
     * @type {HTMLMetaElement}
     */
    // <meta name="baidu-site-verification" content="GagKiP9e3u"/>
    /*meta = document.createElement('meta');
    meta.setAttribute('name', 'baidu-site-verification');
    meta.setAttribute('content', 'GagKiP9e3u');
    head.appendChild(meta);*/
    /**
     * 关键词
     * @type {HTMLMetaElement}
     */
    // <meta name="keywords" content="陈祯乐,陈小黑,小黑不是真的黑,LittleBlack,ChenLittleBlack,javascript,jquery,java,sql,ios,android,软件,编程,开发,live2d"/>
    meta = document.createElement('meta');
    meta.setAttribute('name', 'keywords');
    meta.setAttribute('content', myName + ',陈小黑,小黑不是真的黑,LittleBlack,ChenLittleBlack,javascript,jquery,java,sql,ios,android,软件,编程,开发,live2d');
    head.appendChild(meta);
    // <meta name="description" content="陈祯乐的个人网站"/>
    meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    meta.setAttribute('content', myName + '的个人网站');
    head.appendChild(meta);
    /**
     * Open Graph Protocol(开放内容协议)
     * @type {HTMLMetaElement}
     */
    // <meta property="og:type" content="website"/>
    meta = document.createElement('meta');
    meta.setAttribute('property', 'og:type');
    meta.setAttribute('content', 'website');
    head.appendChild(meta);
    // <meta property="og:url" content="http://www.ldkroom.top"/>
    meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    meta.setAttribute('content', 'http://www.ldkroom.top');
    head.appendChild(meta);
    // <meta property="og:title" content="陈祯乐的个人网站"/>
    meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    meta.setAttribute('content', myName + '的个人网站');
    head.appendChild(meta);
    // <meta property="og:description" content="陈祯乐的个人网站"/>
    meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    meta.setAttribute('content', myName + '的个人网站');
    head.appendChild(meta);
    // 获取当前url文件名
    let strUrl = window.location.href;
    let arrUrl = strUrl.split('/');
    let strPage = arrUrl[arrUrl.length - 1];
    let strPageName = strPage.split('.');
    strPageName = strPageName ? strPageName[0] : '';
    // <meta property="og:tag" content="' + strPageName + '"/>
    meta = document.createElement('meta');
    meta.setAttribute('property', 'og:tag');
    meta.setAttribute('content', strPageName);
    head.appendChild(meta);
    /**
     * 移动端适配
     * @type {HTMLMetaElement}
     */
    // <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    meta = document.createElement('meta');
    meta.setAttribute('name', 'viewport');
    meta.setAttribute('content', 'width=device-width, initial-scale=1, shrink-to-fit=no');
    head.appendChild(meta);
    /**
     * 网站logo
     * @type {HTMLLinkElement}
     */
    // <link rel="shortcut icon" type="image/x-icon" href="/icons/yanjing.ico"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'shortcut icon');
    link.setAttribute('type', 'image/x-icon');
    link.setAttribute('href', '/icons/yanjing.ico');
    head.appendChild(link);
    // <link rel="bookmark" type="image/x-icon" href="/icons/favicon.ico"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'bookmark');
    link.setAttribute('type', 'image/x-icon');
    link.setAttribute('href', '/icons/yanjing.ico');
    head.appendChild(link);
    /**
     * 公共css
     * @type {HTMLLinkElement}
     */
    // <link rel="stylesheet" type="text/css" href="/css/common.css"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', '/css/common.css');
    head.appendChild(link);
}

/**
 * 设置公共文件等
 */
setCommon();