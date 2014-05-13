
;(function($){
	$(document).ready(function(){
		
		// Bootstrap tooltips
		$('a[data-toggle="tooltip"]').tooltip();
		
		// mobilenav
		var mobile_nav_opened = false;
		$(document).on('click', function(event) {
			if (event.target.id != 'menu-button' && $('#check-navmob').is(':checked') && mobile_nav_opened)
				$('#check-navmob').prop('checked', '');
			mobile_nav_opened = $('#check-navmob').is(':checked');
		});

	});
})(window.jQuery);
