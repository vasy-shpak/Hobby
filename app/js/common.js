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



	// $(document).ready(function() {

	// 	$('.about_us').on('click',function(){
	// 		$(this).addClass('is-active')

	// 		$('.box_content').addClass('is-active');
	// 		$('.box_image').addClass('is-active');

	// 	});
	// })

	$(document).ready(function() {

		$('.about_us').on('click',function(){
			$(this).toggleClass('is-active')

			$('.box_content').toggleClass('is-active');
			$('.box_image').toggleClass('is-active');

		});
	})



	  $(document).ready(function() {
		$('.popup-with-form').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#name',
	
			// When elemened is focused, some mobile browsers in some cases zoom in
			// It looks not nice, so we disable it:
			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				}
			}
		});
	});


	  




});
