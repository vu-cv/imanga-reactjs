$(document).ready(function() {
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

	
	
});
