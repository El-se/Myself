
// 切换

$(window).load(function(){
    $('.preloader').delay(500).fadeOut("slow"); // 设置延时进入主页以及样式
});

// 主页背景图片轮播
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		 "images/tm-bg-slide-1.jpg", 
	 		 "images/tm-bg-slide-2.jpg",
			 "images/tm-bg-slide-3.jpg"
	 			], 	{duration: 10000, fade: 1000});//轮播切换时间，切换速度
		});
})