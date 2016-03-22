var currentBackground=0;
var lifeImages = ["../images/life-images/FAVE4F1A9833+2.jpeg", "../images/life-images/FAVE4F1A9859+2.jpeg", "../images/life-images/12022432_1047940908583184_4334208676718887754_o.jpg", "../images/life-images/12622056_1026099764100632_1668755168365207380_o.jpg", "../images/life-images/coats-snow.jpg", 
"../images/life-images/12646727_1022159801161295_927159820652586452_o.jpg", "../images/life-images/sunglasses.jpg"];

$(document).ready(function() {
	setBackground();
	setInterval(setBackground, 3000);
});

function setBackground() {
	$('#life').css({'background-image': 'url(' + lifeImages[currentBackground] + ')'});
	if (currentBackground == lifeImages.length -1) {
		currentBackground=0; 
	} else {
		currentBackground++; 
	}
};

