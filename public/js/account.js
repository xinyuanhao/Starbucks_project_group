if(sessionStorage.getItem("uid")==null){
    location.replace("/login")
}
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
//var start = 10;
var start=sessionStorage.getItem("start");
$("#startNum").html(`当前星星数：${start}`)
var val = start / 16 * 100;
if (start < 4) {
    //console.log(2);
    $("#lang").attr("style", `width:${val}%`);
    $("#show-box").attr("style", `left:${val}%`).find("span").html(`${start} <img src="img/account/icon-star-black.svg">`);
    $(".box.msr .summary .account-info .tier-progress").find(".tier-green").mouseenter(function () {
        $("#lang").removeAttr("style").attr("style", `width:25%`);
        $("#show-box").removeAttr("style").attr("style", `left:25%`).find("span").html(`需积满4 <img
                src="img/account/icon-star-black.svg">`);
    }).mouseleave(function () {
        $("#lang").removeAttr("style").attr("style", `width:${val}%`);
        $("#show-box").removeAttr("style").attr("style", `left:${val}%`).find("span").html(`${start} <img
                src="img/account/icon-star-black.svg">`);
    });
    $(".box.msr .summary .account-info .tier-progress").find(".tier-gold").mouseenter(function () {
        $("#lang").removeAttr("style").addClass("fill-green").attr("style", `width:75%`);
        $("#show-box").removeAttr("style").attr("style", `left:100%`).find("span").html(`需积满16 <img
            src="img/account/icon-star-green.svg">`);
    }).mouseleave(function () {
        $("#lang").removeAttr("style").removeClass("fill-green").attr("style", `width:${val}%`);
        $("#show-box").removeAttr("style").attr("style", `left:${val}%`).find("span").html(`${start} <img
            src="img/account/icon-star-black.svg">`);
    })
} else if (start == 4) {
    //console.log(4);
    $("#rank").html("玉星级");
    $(".box.msr .summary .account-info-welcome .privilege--green .badge").attr("style", "background:#00a862");
    $(".box.msr .summary .account-info .privilege--green .badge .lock").addClass("my-d-none");
    $("#lang").attr("style", `width:25%`);
    $("#show-box").attr("style", `left:25%`).find("span").html(`4 <img
            src="img/account/icon-star-black.svg">`);
    $(".box.msr .summary .account-info .tier-progress").find(".tier-gold").mouseenter(function () {
        $("#lang").removeAttr("style").addClass("fill-green").attr("style", `width:75%`);
        $("#show-box").removeAttr("style").attr("style", `left:100%`).find("span").html(`需积满16 <img
            src="img/account/icon-star-green.svg">`);
    }).mouseleave(function () {
        $("#lang").removeAttr("style").removeClass("fill-green").attr("style", `width:25%`);
        $("#show-box").removeAttr("style").attr("style", `left:25%`).find("span").html(`4 <img
            src="img/account/icon-star-black.svg">`);
    });
} else if (4 < start && start < 16) {
    //console.log(8);
    var valb = (start - 4) / 16 * 100;
    $("#rank").html("玉星级");
    $("#lang").attr("style", `width:25%`).before('<div class="fill fill-green" id="langs"></div>');
    $("#langs").attr("style", `width:${valb}%`)
    $("#show-box").attr("style", `left:${val}%`).find("span").html(`${start} <img
            src="img/account/icon-star-green.svg">`);
    $(".box.msr .summary .account-info-welcome .privilege--green .badge").attr("style", "background:#00a862");
    $(".box.msr .summary .account-info .privilege--green .badge .lock").addClass("my-d-none");
    $(".box.msr .summary .account-info .tier-progress").find(".tier-gold").mouseenter(function () {
        $("#langs").removeAttr("style").attr("style", `width:75%`);
        $("#show-box").removeAttr("style").attr("style", `left:100%`).find("span").html(`需积满16 <img
            src="img/account/icon-star-green.svg">`);
    }).mouseleave(function () {
        $("#langs").removeAttr("style").attr("style", `width:${valb}%`)
        $("#show-box").removeAttr("style").attr("style", `left:${val}%`).find("span").html(`${start} <img
            src="img/account/icon-star-green.svg">`);
    });
} else if (start == 16) {
    //console.log(16);
    $("#rank").html("金星级");
    $("#lang").attr("style", `width:25%`).before('<div class="fill fill-green" id="langs"></div>');
    $("#langs").attr("style", `width:75%`)
    $("#show-box").attr("style", `left:100%`).find("span").html(`${start} <img
            src="img/account/icon-star-green.svg">`);
    $(".box.msr .summary .account-info-welcome .privilege--green .badge").attr("style", "background:#00a862");
    $(".box.msr .summary .account-info-welcome .privilege--gold .badge").attr("style", "background:#C3A75C");
    $(".box.msr .summary .account-info .badge .lock").addClass("my-d-none");
}