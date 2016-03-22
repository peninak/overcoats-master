//code to make the layout responsive
$(window).on('resize', function() {
	$('body').height($(window).height());
	$('body').width($(window).width());
});


$(window).on('scroll', function(){
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
		$('.mailing').css({
		'visibility': 'visible',
		});
	} else {
		$('.mailing').css({
		'visibility': 'hidden',
		});
	}					
});


