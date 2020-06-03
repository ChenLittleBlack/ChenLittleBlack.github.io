// 引入公共文件
let includeCommonFile = function () {
    // jQuery
    document.write('<script type="text/javascript" src="/js/jquery/jquery-3.3.1.min.js"></script>');
    let myName = '陈祯乐';
    let head = document.head || document.getElementsByTagName('head')[0];
    let meta;
    // 百度站长平台验证
    meta = document.createElement('meta');
    meta.setAttribute('name', 'baidu-site-verification');
    meta.setAttribute('content', 'GagKiP9e3u');
    head.appendChild(meta);
    // 关键词
    document.write('<meta name="keywords" content="' + myName + ',陈小黑,小黑不是真的黑,LittleBlack,ChenLittleBlack,javascript,jquery,java,sql,ios,android,软件,编程,开发，live2d"/>');
    document.write('<meta name="description" content="' + myName + '的个人网站"/>');
    // Open Graph Protocol(开放内容协议)
    document.write('<meta property="og:type" content="website"/>');
    document.write('<meta property="og:url" content="http://www.ldkroom.top/"/>');
    document.write('<meta property="og:title" content="' + myName + '的个人网站"/>');
    document.write('<meta property="og:description" content="' + myName + '的个人网站"/>');
    document.write('<meta property="og:tag" content="index"/>');
    // 网站logo
    document.write('<link rel="shortcut icon" type="image/x-icon" href="/icons/yanjing.ico"/>');
    // 移动端适配
    document.write('<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">');
    // 公共css
    document.write('<link rel="stylesheet" type="text/css" href="/css/common.css"/>');
}
includeCommonFile();