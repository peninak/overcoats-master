//animate the element with the id 'first'
$(document).ready(function() {
	if($(window).width() >= 1024) {
		$('#first').animate({
		height: $(window).height(),
		width: $(window).width(),
		margin: 0,
	}, 5000);

	$('.body').animate({
		width: '49.5%', 
		height: '450px',
		margin: 0,
	}, 5000);

	$('.mainFrame').animate({
		width: $(window).width(), 
		margin: 0,
	}, 5000);
	} else if($(window).width() >= 568) {
		$('#first').animate({
		height: '600px',
		width: $(window).width(),
		margin: 0,
	}, 5000);

	$('.body').animate({
		width: '49.5%', 
		height: '350px',
		margin: 0,
	}, 5000);

	$('.mainFrame').animate({
		width: $(window).width(), 
		height: '600px',
		margin: 0,
	}, 5000);
	} else {
		$('#first').animate({
		height: '500px',
		width: $(window).width(),
		margin: 0,
	}, 5000);

	$('.body').animate({
		height: '400px',
		width: $(window).width(),
		margin: 0,
	}, 5000);

	$('.mainFrame').animate({
		height: '500px',
		width: $(window).width(),
		margin: 0,
	}, 5000);
	}
	});
	
$(window).on('resize', function() {
	$('#first').height($(window).height());
	$('#first').width($(window).width());
	$('.body').height(($(window).height()*0.4));
	$('.body').width($(window).width()*0.495);
	$('.body').css({
		'margin': '0',
	});
	$('.mainFrame').height($(window).height());
	$('.mainFrame').width($(window).width());

});

// $(window).on('scroll', function(){
// 	var scrollHeight = $(document).height();
// 	var scrollPosition = $(window).height() + $(window).scrollTop();
// 	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
// 		$('a').css({
// 			'color': '#000',
// 			'font-weight': '400'
// 		});
// 	}
// 	else {
// 		$('a').css({
// 			'color': '#f5efd0',
// 			'font-weight': '100'
// 		});
// 	}
// });