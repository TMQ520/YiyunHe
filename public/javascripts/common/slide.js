$(function(){
	var startX ,startY,endX,endY;
	$('.wrap_container').on('touchstart', function (event) {
		startX = event.touches[0].clientX;
		startY  = event.touches[0].clienY;
	});
	$('.wrap_container').on('touchend', function (event) {
		endX = event.changedTouches.clientX;
		endY  = event.changedTouches.clienY;
	});
	if( endX - startX >50){	//判断是否滑动
			console.log('滑动成功');
			/*$('.business').css({
				'display':'block',
				'background-color':'#9f9f9f'
			});*/
			$('.business').show('2000', 'swing',function() {
				console.log('滑动成功');
			});
			$('.service').css('display','none');
	}
	/*$('.wrap_container').on('touchmove', function (event) {
		event.preventDefault();//阻止滚屏事件
		var X = event.touches[0].clientX;
		var Y = event.touches[0].clienY;
		if( X >50){	//判断是否滑动
			// console.log('滑动成功');
			$('.business').css({
				'display':'block',
				'background-color':'#9f9f9f'
			});
			$('.business').show('2000', 'swing',function() {
				console.log('滑动成功');
			});
			$('.service').css('display','none');
		}
	});*/
});