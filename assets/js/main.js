
;(function($){
	$(document).ready(function(){

		// Bootstrap tooltips
		$('a[data-toggle="tooltip"]').tooltip();

		// mobilenav
		$.slidebars({
			scrollLock: true // Prevent site content scrolling whilst a Slidebar is open.
		});

	});
})(window.jQuery);
