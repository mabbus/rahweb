'use strict';

(function($) {
    function getRandomNumber(max) {
	return Math.floor((Math.random() * max) + 1);
    }
    
    function cloudPass() {
	$.each($('.cloud'), function (k,el) {
	    var elLeft = $(el).position().left;
	    var elTop = $(el).position().top;
	    var pos = $(window).width();
	    var speed = $(el).attr('class').split(' ')[1].charAt(1) * .2;
	    if(elLeft < -500) {
		elLeft = pos;
		elTop = getRandomNumber($(window).height()/2);
	    }

	    $(el).css({
		'left': elLeft - 1*speed + 'px',
		'top': elTop + 'px'
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

    function moveCity () {
	var el = $('.city');
	el.css({
	    'left': '-' + $(window).scrollTop() + 'px'
	});
    }

    function moveBeach() {
	var el = $('.beach');
	el.css({
	    'right': '-' + $(window).scrollTop() + 'px'
	});
    }

    $(window).scroll(function () {
	if($(window).scrollTop() <= $(window).height()) {
	    moveCity();
	    moveBeach();
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