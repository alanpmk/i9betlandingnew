$(function () {
    var ua = navigator.userAgent.toLowerCase();
    var isAndroid = ua.indexOf("android") > -1; // 判断是否为Android设备
    var isiPhone = ua.indexOf("iphone") > -1; // 判断是否为iPhone设备
    var isiPad = ua.indexOf("ipad") > -1; // 判断是否为iPad设备
    if (isAndroid || isiPhone || isiPad) { // 如果是移动设备
        // window.location.href = "wap/index.html"; // 跳转到移动端页面
        window.location.href = "wap.html"; // 跳转到移动端页面
    }
});
