$(function(){
	var scale = 1 / devicePixelRatio;
// document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');

//自动获取屏幕的宽度
	var width =parseFloat(document.documentElement.clientWidth/7.5);
	document.body.parentNode.style.fontSize=width+'px';
})
$(window).resize(function(){
	var scale = 1 / devicePixelRatio;
	document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
	
	//自动获取屏幕的宽度
		var width =parseFloat(document.documentElement.clientWidth/7.5);
		document.body.parentNode.style.fontSize=width+'px';
})
