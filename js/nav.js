// 显示导航栏
let showNav = function () {
    document.write('<link rel="stylesheet" type="text/css" href="/css/nav.css"/>');
    $.ajax({
        type: 'GET',
        dataType: 'html',
        url: '/nav.html',
        success: function (result) {
            $('#nav').html(result);
        },
        error: function (e) {
            console.log('获取导航栏错误');
        }
    });
}
showNav();