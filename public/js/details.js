console.log(window.location.search)
$(function () {
    if (location.search !== "") {
        var did = location.search.split("=")[1]
        $.ajax({
            url: "http://localhost:3000/details",
            type: "get",
            data: {
                did
            },
            // crossDomain: true,
            // xhrFields: {
            //     withCredentials: true
            // },
            dataType: "json",
            success: function (result) {



                //1:数据填充页面
                var {
                    product
                } = result;

                $("#dclass").html(product.dclass);
                $("#dtitle").html(product.dtitle);
                $("#ddetails").html(product.ddetails);
                $("#drice").html(`¥${product.drice.toFixed(2)}`);

                var html = "";
                html += `<img src="${product.dic}" alt="${product.dtitle}">`;
                $("#dic").html(html);




                //2:圈圈点击按钮左右移动
                var $btnLeft = $("#btn-left");
                var $btnRight = $("#btn-right");
                var $ulImgs = $("#list1");
                //1:记录单击按钮的次数和一次移动的距离
                var times = 0;
                var AWIDTH = 150;
                //2:单击按钮
                //2.1:每单击一次右边按钮,times+1,重新计算$ulImgs的margin-left
                $btnRight.click(function () {
                    times++;
                    $ulImgs.css("margin-left", -times * AWIDTH)
                })
                //2.2:每单击一次左边按钮,times-1,重新计算$ulImgs的margin-left
                $btnLeft.click(function () {
                    times--;
                    $ulImgs.css("margin-left", -times * AWIDTH)
                })



                //3:点击加减按钮,数量变化
                var $count = $(".count");
                var $btn = $count.children("#btn");

                $btn.click(function () {
                    var $btn = $(this);
                    var n = parseInt($("#btn-input").val());
                    if ($btn.html() == "+") {
                        n++;
                    } else if (n > 1) {
                        n--;
                    }
                    var counts = $("#btn-input").val(n);
                })



                //4:加入购物车和立即购买
                var $buy = $("#buy").children();

                $buy.click(function () {
                    var $buy = $(this);
                    var cuid = sessionStorage.getItem("uid");
                    var cdid = did;
                    var cprice = $("#drice").html();
                    var ctitle = $("#dtitle").html();
                    var ccount = $("#btn-input").val();
                    var cpic = $("#dic").html();

                    if (cuid == null) {
                        location.replace("/login.html" + window.location.search);

                        return;
                        //$buy.attr("href",["login.html"]);
                    } else if ($buy.html() == "加入购物车") {
                        alert("加入购物车成功");
                    } else if ($buy.html() == "立即购买") {
                        location.replace("/cart.html");
                    }

                    $.ajax({
                        url: "http://localhost:3000/insertCart",
                        type: "get",
                        data: {
                            cuid,
                            cdid,
                            cprice,
                            ctitle,
                            ccount,
                            cpic
                        }
                    })
                })


                // var $buy1=$("#buy").children(":first-child");
                // var $buy2=$("#buy").children(":last-child");

                // $buy1.click(function(){  
                //     var $buy1=$(this);       
                //     if(sessionStorage.getItem("uid")==null){
                //         location.replace("/login");
                //         $buy1.attr("href",["login.html"]);
                //     }else{
                //         alert("加入购物车成功");
                //         $buy1.attr("href",["#"]);
                //     }
                // })

                // $buy2.click(function(){  
                //     var $buy2=$(this); 
                //     if(sessionStorage.getItem("uid")==null){
                //         location.replace("/login");
                //         $buy2.attr("href",["login.html"]);
                //     }else{
                //         $buy2.attr("href",["#"]);
                //     }
                // })


            }
        })
    }
})