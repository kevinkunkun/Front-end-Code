$(function() {
	
	$('#fullpage').fullpage({
		anchors: ['pageFirst', 'pageSecond', 'pageThird', 'pageForth'],
		menu: '#menu',
		navigation: false,
		//navigationPosition: 'left',
		afterLoad: function(anchorLink, index) {
            var loadedSection = $(this);
            
            arrowAnimate(loadedSection);
            
		},
		onLeave: function(index) {
			var leavingSection = $(this);
			
		}
        
		
	});
    setInterval(function(){
        $.fn.fullpage.moveSlideRight();
    }, 5000);
	autoScrolling();

	function arrowAnimate($ele) {
        $ele.find('.arrow_container').animate({
        	bottom: '44px'
        }, 500).animate({
        	bottom: '54px'
        }, 500).animate({
        	bottom: '44px'
        }, 500).animate({
        	bottom: '54px'
        }, 500).animate({
        	bottom: '44px'
        }, 500).animate({
        	bottom: '54px'
        }, 500).animate({
        	bottom: '44px'
        }, 500);
	}
	
	$('.arrow_container').mouseover(function() {
		arrowAnimate($(this).parent());
	});
	
	$('.arrow_container').click(function() {
		$.fn.fullpage.moveSectionDown();
	});
	$(window).resize(function(){
        autoScrolling();
    });

    function autoScrolling(){
        var $ww = $(window).width();
        if($ww < 1020){
            $.fn.fullpage.setAutoScrolling(false);
			//alert($.fn.fullpage.length)
        } else {
            $.fn.fullpage.setAutoScrolling(true);
			
        }
        
    }
    //alert(22)
    
    
});
// function container03(){
// 	var oContainer03 = $('.swiper-container03').height();
// 	//alert(oContainer03)
//         $('.swiper-container03').css('margin-top',-oContainer03/2)
// }
// setInterval(function(){

//           $('#fullpage').moveSlideRight();
          
//         },2000)

