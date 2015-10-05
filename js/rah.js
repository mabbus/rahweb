'use strict';

(function($) {
    console.log('start');
    $(window).scroll(function () {
	console.log($(window).scrollTop());
    });

    $(document).ready(function () {
	$('.landscape').height($(window).height());
    });
})(jQuery);