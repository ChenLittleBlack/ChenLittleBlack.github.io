$(function () {
    navbarActive();

    $(window).scroll(function () {
        navbarActive();
    });
});

function navbarActive() {
    var navbar = $(".navbar");
    if ($(document).scrollTop() > 0) {
        navbar.css({
            "padding": "0px 5%",
            "background": "#FFFFFF",
            "box-shadow": "0 0 20px #C9C9C9"
        });
    } else if ($(document).scrollTop() == 0) {
        navbar.css({
            "padding": "20px 5%",
            "background": "transparent",
            "box-shadow": "none"
        });
    }
}