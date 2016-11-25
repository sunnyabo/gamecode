var Slider=function(){
	$(".main_visual").hover(function(){$("#btn_prev,#btn_next").fadeIn();},function(){$("#btn_prev,#btn_next").fadeOut();});
	$dragBln = false;
	$(".main_image").touchSlider({
		flexible : true,speed : 200,
		btn_prev : $("#btn_prev"),
		btn_next : $("#btn_next"),
		paging : $(".flicking_con a"),
		counter : function (e){$(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");}
	});
	$(".main_image").bind("mousedown", function() {$dragBln = false;});
	$(".main_image").bind("dragstart", function() {$dragBln = true;});
	$(".main_image a").click(function(){if($dragBln) {return false;}});
	timer = setInterval(function(){$("#btn_next").click();}, 5000);
	$(".main_visual").hover(function(){clearInterval(timer);},function(){
		timer = setInterval(function(){$("#btn_next").click();},5000);
	});
	$(".main_image").bind("touchstart",function(){clearInterval(timer);}).bind("touchend", function(){
		timer = setInterval(function(){$("#btn_next").click();}, 5000);
	});
};
$(function(){
	$("#frm-step-btns").click(function(){
		if(navigator.userAgent.toLowerCase().indexOf('qq')==-1){
			//window.location=base.step;
			var offectWidth = parseInt($(this).width());
			var offect = 0;
			$("#frm-step-box-space").show();
			var obj = setInterval(function(){
				if(offect>=offectWidth){clearInterval(obj);$("#frm-step-box-space").width(offectWidth);}
				else{
					offect=offect+5;
					$("#frm-step-box-space").width(offect);
				}
			},200);
		}else{$("#thisSafair").show();}
	});
	
	$("#frm-setting-btns").click(function(){
		$("#thisMask").show();
		$("#frm-step-show-box").find("#Enterprise").hide();$("#frm-step-show-box").show();Slider();
		var number = 0;
		var timer = setInterval(function(){
			if(number>2){number=0;clearInterval(timer);$("#frm-step-show-box").find("#Enterprise").show();}
			else{number++;}
		},500);
	})
});

$(document).ready(function(){
	if (browser.versions.mobile) {
		var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
		var isAss = false;
		if (ua.match(/MicroMessenger/i) == "micromessenger") {}
		if (ua.match(/WeiBo/i) == "weibo") {}
		if (ua.match(/QQ/i) == "qq") {}
		if (browser.versions.ios) {isAss=true;} 
		if(browser.versions.android){isAss=true;}
	}
	else{}
});

var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {         //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
