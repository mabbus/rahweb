'use strict';

(function($) {
    function getRandomNumber(max, min) {
	min = min ? min : 1;
	return Math.floor((Math.random() * max) + min);
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


	    console.log($('.cloud').length);
	    if($('.cloud').length == null || k == $('.cloud').length) {

	    }
	});
	window.requestAnimationFrame(cloudPass);
    }

    var maxClouds = 10;
    var count = 0;

    function setClouds() {

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
	    },getRandomNumber(6000, 3000));
	}

	cloud();
    }
    
    function setNavBar () {
	
    }

    function setParallax () {
	var delay = $(window).scrollTop() * .4;
	$('.landscape').css({
	    'top': '-' + delay + 'px'
	});
    }

    function renderLandscape () {
	setClouds();
	cloudPass();
	setNavBar();
	setParallax();
    }

    function resize () {
	$('.landscape').height($(window).height());
	$('.content').css({'margin-top':$(window).height()+'px'});
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
	    setParallax();
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