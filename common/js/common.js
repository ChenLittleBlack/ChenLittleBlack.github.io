/**
 * 设置公共文件等
 */
let setCommon = function () {
    let myName = '陈祯乐';
    let head = document.head || document.getElementsByTagName('head')[0];
    let meta, link;
    /**
     * jQuery
     */
    document.write('<script type="text/javascript" src="/js/jquery/jquery-3.3.1.min.js"></script>');
    /**
     * 引入bootstrap
     * @type {HTMLLinkElement}
     */
    // <link rel="stylesheet" type="text/css" href="/frame/bootstrap-4.5.0/css/bootstrap.min.css"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', '/frame/bootstrap-4.5.0/css/bootstrap.min.css');
    head.appendChild(link);
    document.write('<script type="text/javascript" src="/frame/bootstrap-4.5.0/js/bootstrap.bundle.min.js"></script>');
    /**
     * 公共css
     * @type {HTMLLinkElement}
     */
    // <link rel="stylesheet" type="text/css" href="/common/css/common.css"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', '/common/css/common.css');
    head.appendChild(link);
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
     * 浏览器渲染模式
     * @type {HTMLMetaElement}
     */
    // <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    meta = document.createElement('meta');
    meta.setAttribute('http-equiv', 'X-UA-Compatible');
    meta.setAttribute('content', 'IE=edge, chrome=1');
    head.appendChild(meta);
    /**
     * 导航栏
     */
    document.write('<script type="text/javascript" src="/nav/js/nav_bar_btsp.js"></script>');
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
    // 获取当前页面文件路径
    let pathName = window.location.pathname;
    let pathNameArr = pathName.split('/');
    // 获取文件名并去掉后缀
    let fileName = pathNameArr[pathNameArr.length - 1];
    let fileNameArr = fileName.split('.');
    let fileStr = fileNameArr ? fileNameArr[0] : '';
    // <meta property="og:tag" content="' + strPageName + '"/>
    meta = document.createElement('meta');
    meta.setAttribute('property', 'og:tag');
    meta.setAttribute('content', fileStr);
    head.appendChild(meta);
    /**
     * 网站logo
     * @type {HTMLLinkElement}
     */
    // <link rel="shortcut icon" type="image/x-icon" href="/icons/favicon.ico"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'shortcut icon');
    link.setAttribute('type', 'image/x-icon');
    link.setAttribute('href', '/icons/favicon.ico');
    head.appendChild(link);
    // <link rel="bookmark" type="image/x-icon" href="/icons/favicon.ico"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'bookmark');
    link.setAttribute('type', 'image/x-icon');
    link.setAttribute('href', '/icons/favicon.ico');
    head.appendChild(link);
};

/**
 * 当前js类
 */
class CommonJs {
    /**
     * 构造函数
     */
    constructor() {
        // mask html
        this.maskHtml =
            '<svg id="mask_svg" class="mask-svg" width="100" height="100">' +
            '   <circle class="mouth" cx="50" cy="50" r="14"></circle>' +
            '   <circle class="eye" cx="50" cy="50" r="14"></circle>' +
            '</svg>';
        // mask对象
        this.maskObj = null;
    }

    /**
     * 睡眠
     * @param ms
     * @returns {Promise<unknown>}
     */
    sleep(ms) {
        return new Promise(function (resolve, reject) {
            setTimeout(resolve, ms);
        });
    }

    /**
     * 显示mask
     * @param options
     */
    showMask(options) {
        // 如果有遮罩，则销毁
        if (this.maskObj) {
            this.hideMask();
        }
        options = options || {};
        let el = options.el || 'body';
        // 动态添加html
        let mask_div = document.createElement('div');
        $(mask_div).attr('id', 'mask_div');
        $(mask_div).addClass('mask-div');
        $(mask_div).html(this.maskHtml);
        this.maskObj = mask_div;
        $(el).append(mask_div);
    };

    /**
     * 隐藏mask
     * @param options
     */
    hideMask(options) {
        // 获取maskObj
        if (!this.maskObj) {
            this.maskObj = $("#mask_div") || null;
        }
        // 移除
        this.maskObj.remove();
        this.maskObj = null;
    }
}
let commonJs = new CommonJs();
