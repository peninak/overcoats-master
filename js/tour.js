var tourImages = ["../images/tour-images/sxsw.jpg","../images/tour-images/winter-tour.jpg", "../images/tour-images/fall-tour.jpg", "../images/tour-images/london-tour.jpg", 
"../images/tour-images/dublin-tour.png", "../images/tour-images/june-tour.jpg"];
var numClicks = 0;
$(document).ready(function() {
	insertPix();
});

function insertPix() {
	for(var i=0; i<tourImages.length; i++) {
		$('.tour-slideshow').append('<img src=' + tourImages[i] + ' class="tour-image">');
	}
}

// $('.tour-slideshow').on('click', function() {	
//     	$('.tour-slideshow').css({
// 		'height': $(window).height(),
// 		'width': $(window).width(),
// 		'visibility': 'visible',
// 		'position': 'fixed',
// 		'top': '0',
// 		});
// 		$('body').css('background-color', 'rgba(0, 0, 0, 0.85)');
// 		// $('tour-slideshow').hide();
		
// 	// for (var i = 0; tourImages.length; i++) {

// 		// setTimeout(function() {
//   //  	    $('.tour-slideshow').eq(i).show('slow');
//   //       $('.tour-slideshow').eq(i+1).hide('slow');
// 		// }, 2000)
// });

$('.tour-slideshow').on('click', '.tour-image', function() {
	numClicks++;
	if(numClicks < 7) {
		$(this).css({
		'width': $('.tour-slideshow').width(),
		'height': $(window).height(), 
		}); 
	} else {
		$('.tour-image').css({
			'width': '33%',
  			'height': '500px',
		});
	}
});


