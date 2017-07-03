/**
 * Created by bjwsl-001 on 2017/6/4.
 */
if(window.$===undefined){
    throw new Error ("jQuery加载失败")
}
jQuery.fn.carousel=function(){
    var interval=1500;
    var $aimgs=this.children("a");
    var $lis=this.children("ul").children("li");
    var index=0;
    var timer=null;
    function lunHuan(){
        index++;
        (index>6)&&(index=0);
        $aimgs.eq(index).addClass("active").siblings().removeClass("active");
        $lis.eq(index).addClass("active").siblings().removeClass("active");
    }
    var timer = setInterval(function(){lunHuan();},interval);

    $lis.click(function(){
        index=$(this).index();
        $aimgs.eq(index).addClass("active").siblings().removeClass("active");
        $lis.eq(index).addClass("active").siblings().removeClass("active");
    });
    $aimgs.mouseenter(function(){
        clearInterval(timer);
    });
    $aimgs.mouseleave(function(){

        timer=setInterval(function(){lunHuan();},interval);
    })
};
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
        if(top<800){
            opt.fadeOut();
        }else if(top>=800){
            opt.fadeIn();
        }
    })
}
jQuery.fn.toggle=function(){
    if(sessionStorage['loginUname']!=undefined){
        var $liPer=this.children("ul").children("li.login");
        var $liPerLog=this.children("ul").children("li.logined");
        $liPer.css("display",'none');
        $liPerLog.css("display",'block');
    }
}