let activeMenu = 'index';

/**
 * 载入
 */
$(function () {
    // 显示导航栏
    showNav();
    // 滚动监听导航栏变化
    $(window).scroll(function () {
        // 导航栏变化
        navBarChange();
    });
});

/**
 * 显示导航栏
 */
let showNav = function () {
    let head = document.head || document.getElementsByTagName('head')[0];
    let meta, link;
    /**
     * 页面css
     * @type {HTMLLinkElement}
     */
    // <link rel="stylesheet" type="text/css" href="/nav/css/nav_bar.css"/>
    link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', '/nav/css/nav_bar_btsp.css');
    head.appendChild(link);
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/nav/nav_bar_btsp.html',
        success: function (result) {
            // 动态添加html并删除id为navbar的div
            $('#navbar_div').html(result);
            $('#navbar_div > *').unwrap();
            // 获取当前页面文件路径
            let pathName = window.location.pathname;
            let pathNameArr = pathName.split('/');
            // 获取文件名并去掉后缀
            let fileName;
            if (pathNameArr.length > 2) {  // 长度大于2代表不是根目录的首页，而是子文件夹的首页
                fileName = pathNameArr[pathNameArr.length - 2];
            } else {
                fileName = pathNameArr[pathNameArr.length - 1];
            }
            let fileNameArr = fileName.split('.');
            activeMenu = fileNameArr ?  fileNameArr[0] : activeMenu;
            // 设置选中样式
            const ACTIVE_CLASS = 'active';
            // 获取当前li
            let activeLi = $('.navbar-nav #' + activeMenu);
            if (activeLi) {
                // 移除所有li的选中样式
                $('.navbar-nav li').removeClass(ACTIVE_CLASS);
                // 给当前li添加选中样式
                activeLi.addClass(ACTIVE_CLASS);
            }
            // 导航栏变化
            navBarChange();
        },
        error: function (e) {
            console.log('获取导航栏错误');
        }
    });
};

/**
 * 导航栏变化
 * @param options
 */
let navBarChange = function (options) {
    let navbar = $('#navbar');
    // 滚动距离不到顶部时，导航栏背景为白色
    if ($(document).scrollTop() > 0) {
        navbar.css('cssText', 'padding: 0px 5%;background-color: #FFFFFF!important;box-shadow: 0 0 20px #C9C9C9;');
    }
    // 滚动到顶部时，导航栏背景为透明
    if ($(document).scrollTop() === 0) {
        navbar.css('cssText', 'padding: 20px 5%;background-color: transparent!important;box-shadow: none;');
    }
};