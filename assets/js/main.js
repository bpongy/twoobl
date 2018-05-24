
;(function($){
	$(document).ready(function(){

		$('body').addClass('js');



		/********************************************
		 * 		Bootstrap
		 ********************************************/
		// tooltips
		// $('a[data-toggle="tooltip"]').tooltip();



		/********************************************
		 * 		Mmenu navigation menu
		 ********************************************/
		var $btn_mobile_menu = $("#btn-mobile-menu");
		$("#navmob").mmenu({
			"navbar": {
				"add": false
			}
		}, {
			// configuration
			offCanvas: {
				pageSelector: "#playground"
			},
			classNames: {
				selected: "current-menu-item"
			}
		});
		var API = $("#navmob").data( "mmenu" );

		$btn_mobile_menu.on('click', function() {
			API.open();
		});

		API.bind( "open:finish", function() {
			setTimeout(function() {
				$btn_mobile_menu.addClass( "active" );
			}, 100);
		});

		API.bind( "close:finish", function() {
			setTimeout(function() {
				$btn_mobile_menu.removeClass( "active" );
			}, 100);
		});



		/********************************************
		 * 		when items become links
		 ********************************************/
		// ex 1: <div data-link="http://www.redpik.net">...</div>
		// ex 2: <div data-link="http://www.redpik.net" data-blank="1">...</div>
		$('[data-link]').on('click', function() {
			var url = $(this).data('link');
			var blank = $(this).data('blank');
			if (blank)
				window.open(url);
			else {
				window.location = url;
			}
			return false;
		});
		// propagation problem?
		$('[data-link] a').on('click', function(e) {
			e.stopPropagation();
		});



		/********************************************
		 * 		rel attribute for galleries
		 ********************************************/
		$('.gallery').each(function() {
			var $_gal = $(this);
			var idgal = $_gal.attr('id');
			$('a', $_gal).attr('data-fancybox', idgal);
		});



		/********************************************
		 * 		Popin images with fancybox
		 ********************************************/
		$('.fancybox, a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]').fancybox({
			loop: true
		});



		/********************************************
		 * 		fitvids.js
		 ********************************************/
		$(".entry-content").fitVids();
		$(".entry-content").fitVids({ customSelector: "iframe[src*='dailymotion.com']"});

	});
})(window.jQuery);
