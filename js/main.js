function size(originSize,type){
	type=type||"width";
	
	var height=document.documentElement.clientHeight;
	var width=document.documentElement.clientWidth;
	var scale=0;
	if(type=="width"){
		scale=width/originSize*100;
		
	}else if(type=="height"){
		scale=height/originSize*100;

	}
	$("html")[0].style.fontSize=scale+"px";
}

$(function(){
		try{
			mui.init({
				gestureConfig: {
					tap: false, //默认为true
					doubletap: true, //默认为false
					longtap: true, //默认为false
					swipe: true, //默认为true
					drag: true, //默认为true
					hold: false,//默认为false，不监听
					release: false//默认为false，不监听
				},
			})
		}catch(e){

		}
	size(750);

	touch.on(".click","touchstart",function (e) {
//				e.stopPropagation();
		$(this).css({"filter":"brightness(.6)","-webkit-filter":"brightness(.6)"})



	});
	touch.on(".click","touchend",function (e) {
//				e.stopPropagation();
		$(this).css({"filter":"brightness(1)","-webkit-filter":"brightness(1)"})

	});

})
