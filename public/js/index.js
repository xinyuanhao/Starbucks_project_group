// 判断是否登录 并获取用户名
var uid = sessionStorage.getItem("uid");
var uname = sessionStorage.getItem("uname");
if (uid) {
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
    $(".container.middle.secondary").find(".display-1").find("span").html(`${msg}<br>${uname}<br>愿你生活充满欢乐!&nbsp;☕`);
    $(".container.middle.secondary").find("footer").addClass("my-opacity");
}




//一，创建实现移动功能的函数moveTo

// 声明变量i 让i=0作为当前是第几张
// i 还可以作为marginLeft的值的计算-i*liW%
var i = 0;
var liWidth = 100; //li的固定宽度
var duration = 500; //每次切换图片所持续的时间
var liCount = 5; //li的总个数
var ulImgs = document.getElementById("ul-imgs");
//var ulIdxs = document.getElementById("ul-idxs");
//小圆点的元素列表,从而可以利用i操作他的class
//var lis = ulIdxs.children;

//创建函数moveto 实现图片移动功能，移动到范围内的任意一张图片
// to为要调到第几张
function moveTo(to) {
    //如果没有传值说移动到第几个  就默认移动到i的一个
    if (to == undefined) {
        to = i + 1;
    }
    // 如果 i=0；
    if (i == 0) {
        ulImgs.className = "transition";
        //再如果to>0 说明图片向左移 则不会出问题，给动画
        /*
        if (to > i) {
            ulImgs.className = "transition";
        } else { //否则说明是想让图片向右移动 所以应当去除动画效果，立马将第一张变为最后一张 再加上动画效果 让他向右移动
            ulImgs.className = "";
            ulImgs.style.marginLeft = -liWidth * liCount + "%";
            //然后再调用本函数 让图片向右移动
            //注意：这里需要添加定时器 因为立马删除转换然后再添加转换 会反应不过来显示出效果
            setTimeout(function () {
                //调用移动函数 传入值让其移动到最后一张，也就是倒数第二张
                moveTo(liCount - 1);
            }, 100);
            // 因为这样改变margLeft之后 i也改变了，图片移动规律不在是原来的样子 所以只能再次调用moveTo函数，并且推出当前函数
            return;
        }*/

    }
    //如果 to有值 则让i=当前位置to
    i = to;
    //设置ul的marginLeft 实现地动到第i张图片
    ulImgs.style.marginLeft = -i * liWidth + "%";
    //先删除所有小圆点的class,再给当前小圆点加上class=active
    // for (var li of lis) {
    //     li.className = ""
    // }
    //如果 移动到最后一张，则在移动到最后一张之后立刻去掉transition，再切回第一张 并且让i=0
    if (i == liCount) {
        i = 0;
        setTimeout(function () {
            ulImgs.className = "";
            ulImgs.style.marginLeft = 0;
        }, duration)
    }
    // 再给当前小圆点加上active
    //lis[i].className = "active";
}

//二，创建两个左右移动按钮的事件

// 获得左右按钮的对象
//var btnLeft = document.getElementById("btn-left");
var btnRight = document.getElementById("btn-right");
// 创建开关变量，防止一个动画还没做完又点击动画调用函数
var canClick = true;
// 创建函数 为左右按钮的单击事件
function move(n) {
    // 如果开关打开着 才能调用此函数
    if (canClick) {
        //让当前页i+n来当做实参传递给移动函数
        // 然后直接调用移动函数就可以
        moveTo(i + n);
        // 此时动画正在执行 多以要关闭开关
        canClick = false;
        // 当动画执行完成  再打开开关
        setTimeout(
            function () {
                canClick = true;
            }, duration + 100
        );
    }
}
// 绑定左移事件
// btnLeft.onclick = function () {
//     move(-1);
// }
// 绑定右移事件
btnRight.onclick = function () {
    move(1);
}

//三，设置自动轮播，以及鼠标悬停时停止效果

// 声明定义间隔时间
var interval = 4500;
// 设置定时器  因为要用到清除周期定时器 多以要给定制器赋值
var timer = setInterval(function () {
    moveTo();
}, interval);
// 为div-banner设置鼠标悬停和移开的事件
//获取div
var banner = document.getElementById("banner");
banner.onmouseover = function () {
    // 清除周期定时器
    //console.log(123)
    clearInterval(timer);
}
banner.onmouseout = function () {
    // 再让变量timer绑定周期定时器
    timer = setInterval(function () {
        moveTo();
    }, interval);
}

//</script>四，设置小圆点的单击事件
/*
//首先获得单击事件的元素,这里可以使用事件委托 ，
//就是说单击ul就能让所有li都绑定一样的单机事件
var ulIdxs = document.getElementById("ul-idxs");
// 设置开关  也是怕用户短时间点击多次按钮
var canClick = true;
// 绑定单机事件
ulIdxs.onclick = function (e) {
    // 先判断开关是否为开的
    if (canClick) {
        //获取单机的那个元素
        var li = e.target;
        // 再判断该元素是否是li元素
        if (li.nodeName == "LI") {
            // 再判断这个li不是有active的li
            if (li.className !== "active") {
                // 再通过遍历找到这个li的下标，也就是对应的图片的页数i
                for (var i = 0; i < lis.length; i++) {
                    //此处li为对象，对象相等就是判断地址是否相等
                    if (lis[i] == li) {
                        // 如果找到了 就退出循环
                        break;
                    }
                }
                // 在for循环外边调用函数moveTo让图片变为第i个
                moveTo(i);
                //然后在动画完成后把开关打开
                setTimeout(function () {
                    canClick = true
                }, duration)
            }
        }
    }
}*/