/**
 * Created by Administrator on 2016/12/26 0026.
 */
$(document).ready(function () {

    /* 咨询图标js代码*/
    $('#close_im').bind('click',function(){
        $('#main-im').css("height","0");
        $('#im_main').hide();
        $('#open_im').show();
    });
    $('#open_im').bind('click',function(e){
        $('#main-im').css("height","272");
        $('#im_main').show();
        $(this).hide();
    });
    $('.go-top').bind('click',function(){
        $(window).scrollTop(0);
    });
    $(".weixing-container").bind('mouseenter',function(){
        $('.weixing-show').show();
    })
    $(".weixing-container").bind('mouseleave',function(){
        $('.weixing-show').hide();
    });

    /* 轮播代码*/
	var index = 0;
	var interval;
	
	showTime();//调用自动轮播
    $(".bigBox .list li").hover(function(){
		index = $(this).index();//取得序列号
		show();
		clearInterval(interval);//清除轮播
   },function(){
	   showTime();
    });
	//点击左右按钮换图
	$(".but .left").on("click",function(){
		clearInterval(interval);//清除自动轮播
		if(index == 0)index=3;
		index--;
		show();
		showTime();
	});
	$(".but .right").on("click",function(){
		clearInterval(interval);
		if(index == 2)index=-1;
		index++;
		show();
		showTime();
	});
	
	//图片显示
	function show(){
		$(".list li").eq(index).addClass("hover").siblings().removeClass("hover");//给当前鼠标到的图标上添加类
		$("div.pic img").eq(index).fadeIn(300).siblings().fadeOut(300);//显示选中的图片，实现淡入淡出的效果
	}
	//自动轮播
	function showTime(){
		interval = setInterval(function(){
		index++;
		index%=3;//index = index % 3;  当加到6时，变为0，重新轮播
		show();	//调用图片显示
		},3000);
	}
    /*用户登录处理*/
    $("#blogin").on("click",function(){
        layer.open({
            type:1,//1表示弹出的是一个div
            title:"登录",
            area:["395px","300px"],//定义宽高
            content:$("#loginbox")
        });
        /*使弹出层效果下的登录框能点击*/
        $('.layui-layer-shade').attr("style","z-index: 9;background-color:#000; opacity:0.3; filter:alpha(opacity=30);");
    });
  
    

    $("#login").on("click",function(){
        var userName = $.trim($("#txtUserName").val());//获取用户名
        var pwd = $.trim($("#txtPwd").val());//获取密码
        if(userName == "" || pwd  == ""){
            layer.alert("用户民或者密码不能为空",{
                title:"提示",
                icon:5//弹出的提示框样式
            });
        }else{
            //ajax交互
            $.post("/Handler1.ashx",{"username":userName,"pwd":pwd},function(data){});
        }
    });
    

    /* 图片动画效果实现*/
 /*   var data_animate_text1 = $('div .animated').data('animate'),
    data_animate_text2 = $('.ship.animated').data('animated');
     // console.log($('.animated'));
    $('.latest-lest_top.animated').toggleClass(data_animate_text1);
    // $('.ship.animated').toggleClass(data_animate_text2);
    */



    $('.link_info img').toggleClass('fadeInLeft');
    for (var i = $('.link_info h3').size() - 1; i >= 0; i--) {
        if( i%2 == 0){
            $('.link_info h3').eq(i).toggleClass('fadeInUp');
        }else{
            $('.link_info h3').eq(i).toggleClass('fadeInDown');
        }
    };

    
    

    /*为元素添加动画效果，封装方法*/
    function animated(ele){
        /* 为每个animated类添加自定义data-delay属性*/
        var count = 0.4, animte = $(ele+' .animated');
        for (var i = 0; i < animte.size(); i++) {
            animte.eq(i).data("delay",count);
            count += 0.2;
            if(i == 12 || i == 21){
                count=0.3;
            }
        }
        /* 为每个含有animated类的元素添加延时时间*/
        var animte = $(ele+' .animated');
        for (var i = 0; i < animte.size(); i++) {
            var delay = animte.eq(i).data('delay');
            animte.eq(i).css({
                "animation-delay":delay+'s'
            });
         }
    }

    /*为首页底部消息查看区添加动画效果*/
    animated('.bottom_info');    //底部左边动画
    animated('.info-header');    //底部右边动画

     /* 滚动条向下移动时 顶部导航栏隐藏*/
     setInterval(function scrollMove(){
        var scroll_top=$(document).scrollTop();
        if(scroll_top > 70){
            $('.g-header-container').addClass('fixed');
        }else{
            $('.g-header-container').removeClass('fixed');
        };  
    },100);
    


    // var classVal = document.getElementById("head").getAttribute("class");
    /*var classVal =($(".g-header-container").addClass('fixed')).attr('class');
    console.log(classVal);*/
});
    
