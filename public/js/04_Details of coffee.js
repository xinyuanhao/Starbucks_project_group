                                                                                                                                          
//var IMG=9;  //照片的个数
var AWIDTH=132;  //每个轮播的a标签长度
//获取左右箭头(DOM)
var btnLeft= document.getElementById("btn-left");
console.log(btnLeft)
var btnRight=document.getElementById("btn-right");
//获取总的容器的div元素
//var packdiv=document.getElementById("pack-div");
//获取移动的div元素
var showdiv=document.getElementById("show-div");
var time=0;//单击按钮的次数，
//每单击一次右边的按钮times+1，重新计算显示div的marginLeft
btnRight.onclick=function(){
    // if(showdiv.style.marginRight!="0px"){
        console.log(showdiv.style.marginRight)
    time++;
    showdiv.style.marginLeft=`${AWIDTH*-time}px`;
    console.log(showdiv.style.marginLeft);
    //console.log(`${AWIDTH*-time}px`)
// }
}
//左边按钮
btnLeft.onclick=function(){
    console.log(time)
    
    console.log(showdiv.style.marginLeft) 
    if(showdiv.style.marginLeft!="0px"){  
        time--;
    showdiv.style.marginLeft=`${-time*AWIDTH}px`;
    //console.log(`${AWIDTH*-time}px`)
}
// else if(showdiv.style.marginLeft<=0){

// }
}
// onresize=function(){//js获取屏幕
   
// }