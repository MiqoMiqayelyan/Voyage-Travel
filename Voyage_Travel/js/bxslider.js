$(document).ready(function(){
    $('.special_slider').bxSlider({
        //mode: 'vertical',
        pager: false,
        controls:  false,
        auto: true,
        stopAutoOnClick: true,
        maxSlides:6,
        minSlides:3,
        adaptiveHeight:true,
        shrinkItems: true,
        useCSS: false,
        moveSlides: 1,
        preloadImages: 'all'

    });
    $('.happy_slider').bxSlider({
        //mode: 'vertical',
        pager: false,
        controls:  false,
        auto: true,
        stopAutoOnClick: true,
        maxSlides:6,
        minSlides:2,
        adaptiveHeight:true,
        shrinkItems: true,
        useCSS: false,
         moveSlides: 1,
         preloadImages: 'all'

    });
    $(function (){  // footer button

		$(".toTop").click(function(){
			$('html,body').animate({
				scrollTop : 0,
			},2000);
		});


	});
  });


