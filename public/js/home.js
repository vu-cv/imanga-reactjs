$(document).ready(function() {



	$('#scr-top').click(function(event) {
		$('html, body').animate({
            scrollTop: 0
        }, 600);

	});

	$('#scr-update').click(function(event) {
		$('html, body').animate({
            scrollTop: $(".latest").offset().top
        }, 600);

	});

	$('#scr-female').click(function(event) {
		$('html, body').animate({
            scrollTop: $(".female").offset().top
        }, 600);

	});

	$('#scr-male').click(function(event) {
		$('html, body').animate({
            scrollTop: $(".male").offset().top
        }, 600);

	});

	

	

	// $('html, body').animate({
 //                    scrollTop: $("#div1").offset().top
 //                }, 2000);
 

	$('.has-excerpt').hover(function() {
		$('.has-excerpt').addClass('open');
	}, function() {
		$('.has-excerpt').removeClass('open');
	});

	$('.story-item').hover(function() {
		$(this, '.story-item').addClass('open');
	}, function() {
		$('.story-item').removeClass('open');
	});

	$(".cm-item:nth-child(6n) .story-item").addClass('show_left');
	$(".cm-item:nth-child(6n+1) .story-item").addClass('show_left');

	$('#navbar-user-collapse').click(function(event) {
		$('.login-modal').addClass('is-active');
		$('.login-section').addClass('is-active');
		$('[data-type="login"]').addClass('is-active');
	});

	$('#btn-signup').click(function(event) {
		$('.login-modal').addClass('is-active');
		$('.register-section').addClass('is-active');
		$('[data-type="register"]').addClass('is-active');

	});

	$('[data-type="login"]').click(function(event) {
		//remove class in register
		$('.register-section').removeClass('is-active');
		$('[data-type="register"]').removeClass('is-active');

		//
		$(this).addClass('is-active');
		$('.login-section').addClass('is-active');
	});

	$('[data-type="register"]').click(function(event) {
		//
		$('.login-section').removeClass('is-active');
		$('[data-type="login"]').removeClass('is-active');

		$(this).addClass('is-active');
		$('.register-section').addClass('is-active');
	});
	
	

	$('.modal-background').click(function(event) {
		$('.modal').removeClass('is-active');

		$('.login-section').removeClass('is-active');

		$('.register-section').removeClass('is-active');
		$('[data-type="login"]').removeClass('is-active');
		$('[data-type="register"]').removeClass('is-active');
	});

	$('.close-button').click(function(event) {
		$('.modal').removeClass('is-active');
	});

	$('.rect-icon').click(function(event) {
		$('.qr-modal').addClass('is-active');
	});
	
	$('.download-app').click(function(event) {
		$('.qr-modal').addClass('is-active');
	});
	

	document.addEventListener("keydown", function(event) {
		if (event.which == 27) {
			$('.modal').removeClass('is-active');
			$('.login-section').removeClass('is-active');
			$('.register-section').removeClass('is-active');
			$('[data-type="login"]').removeClass('is-active');
			$('[data-type="register"]').removeClass('is-active');
		}
	})

	var iScrollPos = 0;
	$(window).scroll(function () {
		var iCurScrollPos = $(this).scrollTop();
		if (iCurScrollPos < iScrollPos) {
			$('.story-see-footer').css('display', 'block');
		} else {
			if($(this).scrollTop()==0){
				console.log('is top');
			}else{
				$('.story-see-footer').css('display', 'none');
			}
		}
		iScrollPos = iCurScrollPos;
	});

	$(window).scroll(function(event) {
		if ($(this).scrollTop() > 150) {
			$('.scrollTop').css('display', 'block');
		} else {
			$('.scrollTop').css('display', 'none');
		}
	});

	$('.scrollTop').click(function(event) {
		$('html,body').animate({scrollTop: 0}, 600);
		console.log("haha");
	});

	
});