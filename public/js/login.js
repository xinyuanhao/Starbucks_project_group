var uid = sessionStorage.getItem("uid");
if (uid) {
    location.replace("/account.html")
}
var uname = localStorage.getItem("uname");
var upwd = localStorage.getItem("upwd");
//console.log(uname,upwd)
if (uname != null && upwd != null) {
    $("#username").val(uname);
    $("#password").val(upwd);
}

$(".field.floating input").each(function (i, elem) {
    if ($(elem).val()) {
        $(elem).next("label").addClass("hasvalue")
    }
})
// input placeholder 位置
$(".field.floating input").blur(function () {
    //console.log(1)
    var $input = $(this);
    if ($input.val()) {
        //console.log(2)
        $input.next("label").addClass("hasvalue")
    } else {
        $input.next("label").removeClass("hasvalue")
    }
})
$(".join-form .login-strategy-switcher").click(function () {
    $(this).toggleClass("login-page");
    if ($(this).hasClass("login-page")) {
        $(this).find("span").html("页面登录");
    } else {
        $(this).find("span").html("扫码登录");
    }
    $("#login-data").toggleClass("my-d-none");
    $("#login-ga").toggleClass("my-d-none");
})
// 账号密码
$("#username").focus(function () {
        $(this).nextAll(".message").addClass("my-d-none")
    })
    .blur(function () {
        if ($(this).val()) {
            return;
        } else {
            $(this).nextAll(".message").removeClass("my-d-none")
        }
    })
$("#password").focus(function () {
        $(this).nextAll(".message").addClass("my-d-none")
    })
    .blur(function () {
        if ($(this).val()) {
            return;
        } else {
            $(this).nextAll(".message").removeClass("my-d-none")
        }
    })
// 小眼睛
$(".toggle-password").mousedown(function () {
    $(this).removeClass("hide").addClass("show");
    $("#password").attr("type", "text");
});
$(".toggle-password").on("mouseup mouseleave", function () {
    $("#password").attr("type", "password");
    $(this).removeClass("show").addClass("hide")
})
// 验证码验证
$("#btn_verify").click(function () {
    var res = $("#capAns").val().toUpperCase();
    if (res === "MEDZB") {
        $("#login-submit").removeAttr("disabled");
    } else {
        $(".show-password-err").removeClass("my-opacity").find("span").html("验证码有误");
        setTimeout(function () {
            $(".show-password-err").addClass("my-opacity")
        }, 5000)
    }
})
// 登录提交按钮
$("#login-submit").click(function () {
    $(".field.floating input").each(function (i, elem) {
        if ($(elem).val() == "") {
            $(elem).nextAll(".message").removeClass("my-d-none");
            return;
        }
    })
    var res = $("#capAns").val().toUpperCase();
    if (res === "MEDZB") {
        $.ajax({
            url: "http://localhost:3000/login",
            type: "get",
            data: {
                uname: $("#username").val(),
                upwd: $("#password").val()
            },
            // crossDomain: true,
            // xhrFields: {
            //     withCredentials: true
            // },
            dataType: "json"
        }).then(function (res) {
            if (res.length !== 0) {
                $("#msg-box").removeClass("my-opacity")
                if ($("#login-remember").is(":checked")) {
                    localStorage.setItem("uname", $("#username").val());
                    localStorage.setItem("upwd", $("#password").val());
                }
                sessionStorage.setItem("uid", res[0].uid);
                sessionStorage.setItem("uname", $("#username").val());
                sessionStorage.setItem("start", res[0].start);
                setTimeout(function () {
                    var UrlSearch = window.location.search;
                    //console.log(UrlSearch)
                    if (UrlSearch) {
                        location.replace("/menus_drink_details.html" + UrlSearch)
                    } else {
                        location.replace("/account.html")
                    }
                }, 1500)

            } else {
                //如果账号密码错误
                $(".show-password-err").removeClass("my-opacity").find("span").html("你输入的帐号或密码不正确，请重新输入");
                setTimeout(function () {
                    $(".show-password-err").addClass("my-opacity")
                }, 5000)
            }
        })

    } else {
        $(".show-password-err").removeClass("my-opacity").find("span").html("验证码有误");
        setTimeout(function () {
            $(".show-password-err").addClass("my-opacity")
        }, 5000)
    }
})