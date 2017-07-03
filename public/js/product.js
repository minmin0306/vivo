/**
 * Created by bjwsl-001 on 2017/5/24.
 */
if(window.$===undefined){
    throw new Error ("jQuery加载失败")
}
jQuery.fn.navbar=function(){
    var $lis=this.children('li');
    $lis.click(function(){
        index=$(this).index();
        $lis.eq(index).addClass("active").siblings().removeClass("active");
    })
}

jQuery.fn.scrollspy = function(options){
    //1:   获取options参数中对应target字符串
    var str = options.target;
    //2:   依据字符串获取对象 opt 楼层div
    var opt = $(str);
    //3:   为window对象绑定事件滚动条移动事件
    //     scroll
    $(window).scroll(function(){
        //4:   获取滚动条到页面顶部距离
        var top = $(window).scrollTop();
        if(top<600){
            opt.fadeOut();
        }else if(top>=600){
            opt.fadeIn();
        }
    })
}
jQuery.fn.change=function(){
    var self=this;
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top<1600){
            $(self).css("z-index",2);
        }else{
            $(self).css("z-index",3);
        }
    })
}

jQuery.fn.page=function(){
    var $lis=this.children('li');
    $lis.click(function(){
        index=$(this).index();
        $lis.eq(index).addClass("active").siblings().removeClass("active");
    })
}
jQuery.fn.toggle=function(){
    if(sessionStorage['loginUname']!=undefined){
        var $liPer=this.children("ul").children("li.personal");
        var $liPerLog=this.children("ul").children("li.personal-logined");
        $liPer.css("display",'none');
        $liPerLog.css("display",'block');
    }
}
function loadProduct(pageNo){

    //1:发送ajax请求
    //2:接收服务器返回数据
    $.ajax({
        type:'POST',
        data:{pageNo:pageNo},
        url:'/product_list/pageNo',
        success:function(data){
            //console.log("succ:"+data);
            //3:接字符串

            var html = "";
            $.each(data,function(i,p){
                //console.log(data);
                html += `
		<li>
			 <a href="#">
                        <div><img src="${p.pic}" alt="x9" width="248" height="248"/></div>
                        <h2>${p.pname}</h2>
                    </a>
		</li>
        `;
            });
            $("#products ul").html(html);

        }
    });


    //2:再次发送 ajax请求获取总页数
    //拼接字符串
    $.ajax({
        type:'GET',
        url:"/product_list/pageTotal",
        success:function(data){

            //console.log(data);
            var pageTotal =Math.ceil(data.count/12);
            //console.log(pageTotal);
            //拼接字符串
            if(data.code===200){

            var html = "";
            for(var i=1;i<=pageTotal;i++){
                if(i==pageNo){
                    html += `
        <li class="active"><a href="#">${i}</a></li>
            `;
                }else{
                    html += `
            <li><a href="#">${i}</a></li>
          `;
                }
            }
            $("#page ul").html(html);
            }else{alert("失败"+data.msg)}
        }
    });
}
loadProduct(1);
$("#page>ul").on("click","li a",function(e){
    //1:阻止事件默认行为
    e.preventDefault();
    //2:获取当前按钮页码
    var p = $(this).text();
    //console.log(p);
    //3:发送请求
    loadProduct(p);
});
