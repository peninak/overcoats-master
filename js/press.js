
var pressImagesAdded =  ['../images/press-images/the-deli.jpg', '../images/press-images/crack-in-the-road.jpg', '../images/press-images/tigress.jpg', '../images/press-images/the-blue-walrus.png', '../images/press-images/la-music-blog.jpg', '../images/press-images/killing-moon.png',
'../images/press-images/the-405.png', '../images/press-images/next-2-shine.png', 
'../images/press-images/method.png', '../images/press-images/this-is-our-jam.jpeg', '../images/press-images/aural-wes.png', '../images/press-images/nialler.png',
'../images/press-images/hilly-dilly.png'];
var pressImagesDisplayed = ['../images/press-images/honey-pie.jpg', '../images/press-images/npr.jpeg', '../images/press-images/line-of-best.png', '../images/press-images/bullett.jpg', 
'../images/press-images/clash.jpg', '../images/press-images/axs.png',];
var pressLinks = ['http://www.thewildhoneypie.com/get-to-know-the-sweet-harmonies-and-unique-rhythms-of-overcoats/',
'http://www.npr.org/sections/world-cafe/2016/03/08/469053101/heavy-rotation-10-songs-public-radio-cant-stop-playing', 
'http://www.thelineofbestfit.com/new-music/discovery/overcoats-nighttime-hunger', 'http://www.clashmusic.com/news/premiere-overcoats-nighttime-hunger', 
'http://bullettmedia.com/article/nyc-duo-overcoats-are-afraid-of-the-dark-on-nighttime-hunger/','https://www.axs.com/news/overcoats-to-perform-in-nyc-ahead-of-sxsw-appearance-77384'];
var pressLinksAdded = ['http://nyc.thedelimagazine.com/category/bands/overcoats', 'http://www.crackintheroad.com/interviews/31789-interview-overcoats', 'http://www.tigressmagforgirls.com/music/2015/12/interview-of-overcoats', 'http://thebluewalrus.com/2015/09/22/overcoats-walk-on-video-premier/', 'http://lamusicblog.com/2015/09/interview/featured-artist-overcoats/', 'http://killing-moon.com/2015/05/05/track-of-the-day-overcoats-walk-on/', 'http://www.thefourohfive.com/music/article/watch-the-video-for-little-memory-from-overcoats-405-premiere-143',
'http://next2shine.com/overcoats-urge-you-to-walk-on', 'http://www.method-magazine.com/music/2015/4/23/overcoats','http://www.thisisourjamdc.com/2015/04/overcoats-are-my-mellow-monday-jam.html', 'http://www.auralwes.org/blog-all/category/time-soul-and-little-memory-meet-overcoats', 'http://nialler9.com/overcoats-folk-ny-dublin-pop/', 
'http://www.hillydilly.com/2015/04/overcoats-little-memory/'];
var headlines = ['GET TO KNOW THE SWEET HARMONIES AND UNIQUE RHYTHMS OF OVERCOATS', "Heavy Rotation: 10 Songs Public Radio Can't Stop Playing", 
'Overcoats explore insomnia with hypnotic electronic track “Nighttime Hunger”', "Premiere: Overcoats - 'Nighttime Hunger'", "NYC Duo Overcoats Are Afraid of the Dark on 'Nighttime Hunger'",
'Overcoats to perform in NYC ahead of SXSW appearance'];
var headlinesAdded = ['Buzz alert: Overcoats perform live for NPR + play Fat Baby on 03.03', 'INTERVIEW: OVERCOATS', 'Interview of Overcoats', 'Overcoats – Walk On (premiere)', 'FEATURED ARTIST: OVERCOATS Folktronica duo is US-bound and slaying it', '[TRACK OF THE DAY: OVERCOATS “WALK ON”]', 
'Watch the video for "Little Memory" by Overcoats [405 Premiere]', 'Overcoats Urge You To "Walk On"', 'OVERCOATS','overcoats are my mellow monday jam', '"LITTLE MEMORY" AND TIME-SOUL: MEET OVERCOATS', 'Intro: Overcoats – melodic ambient pop folk',
'OVERCOATS - "LITTLE MEMORY"'];
var i=0; 
var display=0;
var pressLinksIndex=0;
var pressLinksAddedIndex=0;
var pressImagesAddedIndex=0;
var headlinesIndex=0;
var headlinesAddedIndex=0;

function loadMore() {
		$(window).on('scroll', function () {
			var scrollHeight = $(document).height();
			var scrollPosition = $(window).height() + $(window).scrollTop();
			if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
				while(i<pressImagesAdded.length) {
					$('.boxes').append('<div class="pressBoxAdded"><div class="overlay"></div></div>');
					$('.pressBoxAdded').eq(i).css({
						'background-image' : 'url(' + pressImagesAdded[i] + ')',
						'background-size' : '100% 100%',
						'background-repeat': 'no-repeat'
					});
					$('.pressBoxAdded .overlay').eq(i).html('<a class="press" href=' + pressLinksAdded[pressLinksAddedIndex] + ' target="_blank">' + headlinesAdded[headlinesAddedIndex] + '</a>');
					i++;
					headlinesAddedIndex++;
					pressLinksAddedIndex++;
				}	
				} 
			});
		};

function addContent() {
	while(display<pressImagesDisplayed.length) {
		$('.boxes').append('<div class="pressBox"><div class="overlay"></div></div>');
		$('.pressBox').eq(display).css({
			'background-image': 'url(' + pressImagesDisplayed[display] + ')', 
			'background-size': '100% 100%', 
			'background-repeat': 'no-repeat',
		});
		$('.pressBox .overlay').eq(display).html('<a class="press" href=' + pressLinks[pressLinksIndex] + ' target="_blank">' + headlines[headlinesIndex] + '</a>');
		display++;
		pressLinksIndex++;
		headlinesIndex++;
	}
	};

$(document).ready(function() {
	addContent();
	loadMore();
	var scrollHeight = $(document).height();
	var scrollPosition = $(window).height() + $(window).scrollTop();
	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
		while(i<pressImagesAdded.length) {
			$('.boxes').append('<div class="pressBoxAdded"><div class="overlay"></div></div>');
			$('.pressBoxAdded').eq(i).css({
				'background-image' : 'url(' + pressImagesAdded[i] + ')',
				'background-size' : '100% 100%',
				'background-repeat': 'no-repeat'
			});
			i++;
		}
	}
});

