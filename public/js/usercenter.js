/**
 * Created by bjwsl-001 on 2017/6/14.
 */
/**功能点1： 异步请求页头和页尾**/
$('#header').load('header.html', function(){
    //页头内容已经异步加载完成
    $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
});


/**功能点2：点击附加导航，切换中央部分的主体内容**/
$('.affix').on('click', 'li a', function(e){
    e.preventDefault();
    //切换a的父元素的active
    $(this).parent().addClass('active').siblings('.active').removeClass('active')
    //根据a的href切换中央的div的active
    var divId = $(this).attr('href');
    $(divId).addClass('active').siblings('.active').removeClass('active');
})