/**
 * 载入
 */
$(function () {
    commonJs.showMask();
    commonJs.sleep(2000).then(() => {
        // 隐藏遮罩
        commonJs.hideMask();
    });
});