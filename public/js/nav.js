$("#nav-menu").click(function () {

    $("#nav-overlay").addClass("overlay-show");
    $("#nav .container .header").attr("style", "display:block;padding:16px;")
})
$(".overlay .header .close").click(function () {
    $("#nav-overlay").removeClass("overlay-show");
    $("#nav .container .header").removeAttr("style")
})
$("#nav .container .secondary .subcategories").on("click", "a", function (e) {
    var $tar = $(this);
    //console.log($tar)
    if ($tar.is("active")) {
        return;
    } else {
        $("#nav .container .secondary .subcategories a").removeClass("active false");
        $tar.addClass("active")
    }
})
$("#mors-mobile").click(function () {
    $("#nav-overlay").addClass("overlay-show");
    $("#nav .container .header").attr("style", "display:block;padding:16px;")
})

// 退出按钮
var uid = sessionStorage.getItem("uid");
if (uid) {

    $("#nav-overlay").find(".account.margin2.mobile-hidden").html(`
        <a class="sign-in" href="/" id="loginOut">
          <img src="../img/project_nav/icon-account.svg">
          <span>
            <span>登出</span>
          </span>
        </a>`)
}
// othernav退出事件
$("#loginOut").click(function () {
    sessionStorage.clear();
})