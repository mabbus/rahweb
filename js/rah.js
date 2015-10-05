'use strict';

(function($) {
    function getRandomNumber(max) {
	return Math.floor((Math.random() * max) + 1);
    }
    
    function cloudPass() {
	$.each($('.cloud'), function (k,el) {
	    var elPos = $(el).position().left;
	    var pos = $(window).width();
	    var speed = $(el).attr('class').split(' ')[1].charAt(1) * .2;
	    if(elPos < -500) {
		elPos = pos;
	    }

	    $(el).css({
		'left': elPos - 1*speed + 'px'
	    });
	});
	
	window.requestAnimationFrame(cloudPass);
    }

    function setClouds() {
	var maxClouds = 10;
	var count = 0;

	function cloud() {
	    var num = getRandomNumber(maxClouds);
	    var idx = getRandomNumber(4);
	    var elem = '<div class="cloud x' + idx + ' cloud' + count + '"></div>';

	    setTimeout(function () {
		$('.landscape').find('.clouds').append(elem);
		$('.cloud'+count).css({
		    'left': $(window).width() + 'px',
		    'top' : getRandomNumber($(window).height()/4) + 'px'
		});
		
		if(count <=10) {
		    console.log(count);
		    count++;
		    cloud();
		}
	    },getRandomNumber(6000));	    
	}

	cloud();
    }

    function renderLandscape () {
	setClouds();
	cloudPass();
    }

    function resize () {
	$('.landscape').height($(window).height());
    }

    $(window).scroll(function () {
	if($(window).scrollTop() <= $(window).height()) {
	    
	}
    });

    $(window).resize(function () {
	resize();
    });

    $(document).ready(function () {
	resize();
	renderLandscape();
    });
})(jQuery);