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
// ---------------------注册界面js
// 相关条款下拉选
$("a.show-message").click(function () {
    $("div.clause-box").toggleClass("show-y");
    $(this).toggleClass("open");
})
// 用户名
$("#uname").focus(function () {
    $(this).nextAll(".message").removeClass("my-opacity err").html("用户名为6-21位的字母、数字、下划线组成").nextAll(".input-after").addClass(
        "my-d-none");
}).blur(function () {
    if ($(this).val()) {
        var reg = /^\w{6,21}$/;
        var ures = reg.test($(this).val())
        if (ures) {
            //console.log("发送请求验证用户名");
            $.ajax({
                url: "http://localhost:3000/enroll",
                type: "get",
                data: {
                    uname: $("#uname").val()
                },
                // crossDomain: true,
                // xhrFields: {
                //     withCredentials: true
                // },
                dataType: "json"
            }).then(function (res) {
                //console.log(res)
                if (res.length !== 0) {
                    //console.log("如果用户名重复") 
                    $("#uname").nextAll(".message").addClass("err").html("用户名已占用").nextAll(".input-after").addClass("my-d-none");
                } else {
                    //console.log("可以")
                    $("#uname").nextAll(".message").addClass("my-opacity").nextAll(".input-after").removeClass(
                        "my-d-none")
                }
            })


        } else {
            $(this).nextAll(".message").addClass("err").nextAll(".input-after").addClass("my-d-none");
        }

    } else {
        //console.log($(this).html())
        $(this).nextAll(".message").addClass("err").html("用户名不可为空").nextAll(".input-after").addClass(
            "my-d-none");
    }
})
//密码框
$("#upwd").focus(function () {
    var $upwd = $(this);
    $upwd.nextAll(".input-after").addClass("my-d-none");
    $(".toggle-password").removeClass("mright");

    $upwd.nextAll(".message-do").removeClass("my-height0 my-d-none");
    $upwd.nextAll(".message").addClass("my-d-none");
    var sreg = /^\w*$/;
    if (sreg.test($upwd.val())) {
        $("#message-do-1").addClass("succeed")
    } else {
        $("#message-do-1").removeClass("succeed")
    };
    var lreg = /^.{6,16}$/;
    if (lreg.test($upwd.val())) {
        $("#message-do-2").addClass("succeed")
    } else {
        $("#message-do-2").removeClass("succeed")
    };
    var breg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]*$/;
    if (breg.test($upwd.val())) {
        $("#message-do-3").addClass("succeed")
    } else {
        $("#message-do-3").removeClass("succeed")
    };
}).blur(function () {
    var $upwd = $(this);
    $upwd.nextAll(".message-do").addClass("my-d-none");
    if ($upwd.val()) {
        var childs = $upwd.nextAll(".message-do").children();
        //console.log(childs)
        for (var i = 0; i < 3; i++) {
            if (!$(childs[i]).hasClass("succeed")) {
                var msg = $(childs[i]).html();
                $upwd.nextAll(".input-after").addClass("my-d-none");
                $upwd.nextAll(".message").removeClass("my-d-none my-opacity").addClass("err").html(msg);
                $(".toggle-password").removeClass("mright");
                break;
            } else {
                $upwd.nextAll(".input-after").removeClass("my-d-none");
                $(".toggle-password").addClass("mright");
            }
        }
    } else {
        $upwd.nextAll(".input-after").addClass("my-d-none");
        $upwd.nextAll(".message").removeClass("my-d-none  my-opacity").addClass("err").html("密码不可为空")
            .nextAll(".input-after").addClass("my-d-none");
    }
}).on("input propertychange", function () {
    var $upwd = $(this);
    var sreg = /^\w*$/;
    if (sreg.test($upwd.val())) {
        $("#message-do-1").addClass("succeed")
    } else {
        $("#message-do-1").removeClass("succeed")
    };
    var lreg = /^.{6,16}$/;
    if (lreg.test($upwd.val())) {
        $("#message-do-2").addClass("succeed")
    } else {
        $("#message-do-2").removeClass("succeed")
    };
    var breg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]*$/;
    if (breg.test($upwd.val())) {
        $("#message-do-3").addClass("succeed")
    } else {
        $("#message-do-3").removeClass("succeed")
    };
})


// 密码的小眼睛
$(".toggle-password").mousedown(function () {
    $(this).removeClass("hide").addClass("show");
    $("#upwd").attr("type", "text");
});
$(".toggle-password").on("mouseup mouseleave", function () {
    $("#upwd").attr("type", "password");
    $(this).removeClass("show").addClass("hide")
})
// 邮箱
$("#email").focus(function () {
    $(this).nextAll(".message").removeClass("my-opacity err").html("请输入有效邮箱地址")
}).blur(function () {
    if ($(this).val()) {
        var reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
        var res = reg.test($(this).val())
        if (res) {
            $(this).nextAll(".message").addClass("my-opacity").nextAll(".input-after").removeClass(
                "my-d-none")
        } else {
            $(this).nextAll(".message").addClass("err").nextAll(".input-after").addClass("my-d-none");
        }
    } else {
        //console.log($(this).html())
        $(this).nextAll(".message").addClass("err").html("邮箱不可为空").nextAll(".input-after").addClass(
            "my-d-none");
    }
})
// 手机号
$("#phone").focus(function () {
    $(this).nextAll(".message").removeClass("my-opacity err").html("请输入有效手机号码");
    $(".wrapper.wrapper-auth").removeClass("my-d-none");
    if (!$("#sendauth").is(":disabled")) {
        $("#sendauth").removeClass("disabled");
    }
}).blur(function () {
    if ($(this).val()) {
        var reg = /^1[3456789]\d{9}$/;
        var res = reg.test($(this).val())
        if (res) {
            $(this).nextAll(".message").addClass("my-opacity").nextAll(".input-after").removeClass(
                "my-d-none");

        } else {
            $(this).nextAll(".message").addClass("err").nextAll(".input-after").addClass("my-d-none");
            $("#sendauth").addClass("disabled");
        }
    } else {
        $("#sendauth").addClass("disabled");
        $(this).nextAll(".message").addClass("err").html("手机号不可为空").nextAll(".input-after").addClass(
            "my-d-none");
    }
})
// 短信验证码
$("#auth").focus(function () {
    $(this).nextAll(".message").removeClass("my-opacity err").html("请输入6位验证码");
    $(".wrapper.wrapper-auth").removeClass("my-d-none");
}).blur(function () {
    if ($(this).val()) {
        if ($(this).val() == "123456") {
            $(this).nextAll(".message").addClass("my-opacity");
        } else {
            $(this).nextAll(".message").addClass("err").html("验证码不正确");
        }
    } else {
        $(this).nextAll(".message").addClass("err").html("验证码不可为空").nextAll(".input-after").addClass(
            "my-d-none");
    }
})
// 提交按钮的样式
$("#reg-remember").change(function () {
    if ($(this).is(":checked")) {
        $("#submituser").removeClass("disabled");
    } else {
        $("#submituser").addClass("disabled");
    }
})
// 给提交按钮绑定提交事件
$("#submituser").click(function () {
    if (
        $("div.input-after").hasClass("my-d-none") || $("#auth").val() !== "123456" || !$(
            "#reg-remember").is(":checked")
    ) {
        $(".field.floating input").each(function (i, elem) {
            if ($(elem).val() == "") {
                $(elem).nextAll(".message").addClass("err").removeClass("my-opacity")
            }
        })
        return;
    } else {
        //console.log("发送请求");
        $.ajax({
            url: "http://localhost:3000/enroll",
            type: "post",
            data: {
                'uname': $("#uname").val(),
                'upwd': $("#upwd").val(),
                'email': $("#email").val(),
                'phone': $("#phone").val()
            },
            // crossDomain: true,
            // xhrFields: {
            //     withCredentials: true
            // },
            dataType: "json"
        }).then(function (res) {
            if (res.affectedRows !== 0) {
                $("#msg-box").removeClass("my-opacity")
                sessionStorage.setItem("uid", res.insertId);
                sessionStorage.setItem("uname", $("#uname").val());
                sessionStorage.setItem("start", 0);
                setTimeout(function () {
                    location.replace("/account.html")
                }, 1500)
            }
            //console.log(res);
        })
    }
})
// 验证码按钮样式
$("#sendauth").click(function () {
    var $sendauth = $(this);
    if ($("#phone").nextAll(".input-after").hasClass("my-d-none")) {
        $("#sendauth").addClass("disabled");
        return;
    } else {
        var time = 60;
        $sendauth.addClass("disabled").attr('disabled', "true").html(60);
        var t = setInterval(function () {
            time -= 1;
            $sendauth.html(time);
            if (time == 0) {
                $sendauth.removeClass("disabled").removeAttr("disabled").html("发送短信验证码")
                clearInterval(t);
            }
        }, 1000)
    }
})