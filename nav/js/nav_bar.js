let activeMenu = 'index';

/**
 * 载入
 */
$(function () {
    // 显示导航栏
    showNav();
    // 导航栏变化
    navBarChange();
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
    link.setAttribute('href', '/nav/css/nav_bar.css');
    head.appendChild(link);
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/nav/nav_bar.html',
        success: function (result) {
            $('#navbar').html(result);
            // 设置选中样式
            const ACTIVE_CLASS = 'nav-active';
            // 获取当前li
            let activeLi = $('.navbar-menu #' + activeMenu);
            if (activeLi) {
                // 移除所有li的选中样式
                $('.navbar-menu li').removeClass(ACTIVE_CLASS);
                // 给当前li添加选中样式
                activeLi.addClass(ACTIVE_CLASS);
            }
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
        navbar.css({
            'padding': '0px 5%',
            'background': '#FFFFFF',
            'box-shadow': '0 0 20px #C9C9C9'
        });
    }
    // 滚动到顶部时，导航栏背景为透明
    if ($(document).scrollTop() === 0) {
        navbar.css({
            'padding': '20px 5%',
            'background': 'transparent',
            'box-shadow': 'none'
        });
    }
};