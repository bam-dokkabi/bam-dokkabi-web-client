$(function() {
	var wheelScroll="noPop";
	var scrollTarget = $('body,html');
	var deltaWaling="next";
	var scrollLeft = 0;
	scrollTarget.mousewheel(function(event, delta){
		if(!(navigator.appVersion.indexOf("Mac")!=-1)) {
			if(wheelScroll=="noPop"){
				$(this).stop().animate({scrollLeft: (this.scrollLeft-(delta * 1000))}, 10,"linear");
			} else{
				if(delta<0) {$(".popup").stop().animate({scrollTop:"+=200"},100); deltaWaling="next"; }
					else {$(".popup").stop().animate({scrollTop:"-=200"},100); deltaWaling="prev"}
				}
				event.preventDefault();
			} else if (navigator.appVersion.indexOf("Mac")!=-1   ){
				if(wheelScroll=="noPop"){
					$(this).stop().animate({scrollLeft: (this.scrollLeft-(delta * 600 / 60 ))}, 1000,"linear");
				} else{
					if(delta<0) { $(".popup").stop().animate({scrollTop: "+=200"}, 100); deltaWaling="next" }
					else { $(".popup").stop().animate({scrollTop: "-=200"}, 100); deltaWaling="prev" }
				}
				event.preventDefault();
	 		}	 
  		} 
  	);

	/*
		Scene이 바뀌는 인덱스 계산
		Scene 크기가 정해지면 수정 
	*/
	var bgWidth = 6920;
	var sceneNum = 4;
  	var baseIdx = bgWidth / sceneNum;
  	var scrollIdx = [];

  	for(var i=0;i<sceneNum+1;i++) {
  		scrollIdx.push(baseIdx * i);
  	}


  	$(window).scroll(function() {
  		scrollLeft = $(window).scrollLeft();

  		/*
  			scroll에 따른 메뉴 활성화
  		*/
  		/*if(scrollLeft >= scrollIdx[i] && scrollLeft < scrollIdx[i+1]) {
        	$('.naviJs > li').each(function(idx, item) {
        		$(this).removeClass('on');
        		if(i==idx) {
        			$(this).addClass('on');
        		} 
        	})
        }*/
    });
})














