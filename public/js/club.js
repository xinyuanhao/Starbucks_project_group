if (sessionStorage.getItem("uid") !== null) {
    var hr = new Date().getHours();
    var msg;
    if (hr <= 10 && hr >= 6) {
        msg = "上午好！";
    }
    if (hr <= 13 && hr >= 11) {
        msg = "中午好！";
    }
    if (hr <= 19 && hr >= 14) {
        msg = "下午好！";
    }
    if (hr <= 5 || hr >= 20) {
        msg = "晚上好！";
    }
    // 获取用户名
    var uname = sessionStorage.getItem("uname");
    $("#nav>.container .body>.container .display-1").find("span").html(`${msg}<br>${uname}`)
    if (sessionStorage.getItem("uid") !== null) {
        $("#in-login").removeClass("my-d-none");
        $("#not-login").addClass("my-d-none");
    }
}




$("#member-faq").on("click", "a.header", function (e) {
    $(this).toggleClass("show-con");
    $(this).next().toggleClass("not-show");
})