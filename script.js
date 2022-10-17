jQuery(document).ready(function($) {
	$('.home-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		dots: true
	});
	
	$('.section-client-logo-details').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 500,
		infinite: true,
		dots: true,
		responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
	});
	
	
	$('.togglefaq').click(function(e) {
		e.preventDefault();
		var notthis = $('.active').not(this);
		notthis.find('.fa-minus').addClass('fa-plus').removeClass('fa-minus');
		notthis.toggleClass('active').next('.faqanswer').slideToggle(500);
		$(this).toggleClass('active').next().slideToggle(500);
		$(this).children('i').toggleClass('fa-plus fa-minus');
	});
	
	$(".tabs-list li a").click(function(e){
		e.preventDefault();
	});
	$(".tabs-list li").click(function(){
		var tabid = $(this).find("a").attr("href");
		$(".tabs-list li,.tabs div.tab").removeClass("active");
		$(".tab").hide();
		$(tabid).show();
		$(this).addClass("active");

	});
});
