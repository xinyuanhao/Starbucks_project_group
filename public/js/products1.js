$(function(){
    $.ajax({
        url:"http://localhost:3000/products",
        type:"get",
        // crossDomain: true,
        // xhrFields: {
        //     withCredentials: true
        // },
        dataType:"json",
        success:function(result){
            var html="";
            for(var i=0;i<result.length;i++){
                var p=result[i];
                html+=`
                <a class="thumbnail" href="${p.phref}">
                    <div class="picture circle" style="background-image: url(${p.pic})"></div>
                    <strong>${p.ptitle}</strong>
                </a>`;
            }
            $("#list1").html(html);
        }
    })
})