$(function() {

	// Custom JS
	$(document).ready(function(){
		$('.carousel').owlCarousel({
			loop: true,
			margin: 10,
			smartSpeed: 500,
			dots: true,
			dotsEach: true,
			responsiveClass: true,
			responsive: {
				0: {items: 1},
				768: {items: 2},
				1100: {items: 3},
			},
		});
	  });



	$(document).ready(function() {

		$('.about_us').on('click',function(){
			$(this).addClass('is-active')

			$('.box_content').addClass('is-active');
			$('.box_image').addClass('is-active');

		});
	})

	$(document).ready(function() {
		$("#sign_in_btn").on('click',function() {
		  $(".form-popup-sign").toggleClass('active');
		  $(".form-popup-log").removeClass('active');
		});
	  });

	  $(document).ready(function() {
		$("#log_in_btn").on('click',function() {
		  $(".form-popup-log").toggleClass('active');
		  $(".form-popup-sign").removeClass('active');
		});
	  });




});
