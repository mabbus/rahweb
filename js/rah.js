'use strict';

(function($) {
    function getRandomNumber(max, min) {
	min = min ? min : 1;
	return Math.floor((Math.random() * max) + min);
    }
    
    var maxClouds = 10;
    var count = 0;

    function setNavBar () {
	
    }

    function setParallax () {

    }

    function renderLandscape () {
	var width = 50 - ($(window).scrollTop() / $(window).height()) * 50;
	var left = $(window).scrollTop() / 2;
	$('.landscapes').width(width+"%");
	$('.right-landscape').css({'left': left+'px'});
	$('.left-landscape').css({'left': -left+'px'});
    }

    function resize () {
	$('.landscape').height($(window).height());
	//$('.content').css({'margin-top':$(window).height()+'px'});
    }

    $(window).scroll(function () {
	if($(window).scrollTop() <= $(window).height()) {
	    renderLandscape();
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


(function ($) {
    $(document).ready(function () {
	$('.nav-mobile').click(function (){ 
	    event.stopPropagation();
	    $('.mobile-dropdown').show();
	});
    });

    $('html').click(function () {
	$('.mobile-dropdown').hide();
    });
})(jQuery);
