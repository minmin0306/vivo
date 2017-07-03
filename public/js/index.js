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
jQuery.fn.carousel=function(){
    var interval=1500;
    var $liimgs=this.children("div").find("li");
    var $lis=this.children("ul").children("li");
    var index=0;
    var timer=null;
    function lunHuan(){
        index++;
        (index>3)&&(index=0);
        $liimgs.eq(index).addClass("active").siblings().removeClass("active");
        $lis.eq(index).addClass("active").siblings().removeClass("active");
    }
    var timer = setInterval(function(){lunHuan();},interval);
    $lis.click(function(){
        index=$(this).index();
        $liimgs.eq(index).addClass("active").siblings().removeClass("active");
        $lis.eq(index).addClass("active").siblings().removeClass("active");
    });

    $liimgs.mouseenter(function(){
            clearInterval(timer);
        });
    $liimgs.mouseleave(function(){

            timer=setInterval(function(){lunHuan();},interval);
        })

};
jQuery.fn.scrollspy = function(options){
    //1:   获取options参数中对应target字符串
    var str = options.target;
    //2:   依据字符串获取对象 opt
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
        if(top<1000){
            $(self).css("z-index",2);
        }else{
            $(self).css("z-index",5);
        }
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