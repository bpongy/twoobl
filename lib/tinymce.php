<?php

/********************************************
 * 		Custom TinyMCE
 ********************************************/

if( !function_exists( 'twoobl_tinymce_custom' ) ) {
	function twoobl_tinymce_custom($init) {

		// Remove H1, H6
		$init['block_formats'] = 'Paragraphe=p;'.__('Title 2', 'twoobl').'=h2;'.__('Title 3', 'twoobl').'=h3;'.__('Title 4', 'twoobl').'=h4;'.__('Title 5', 'twoobl').'=h5;'.__('Title 6', 'twoobl').'=h6;Adresse=address';

		// Hello iframes.
		$valid_iframe = 'iframe[id|class|title|style|align|frameborder|height|longdesc|marginheight|marginwidth|name|scrolling|src|width]';
		if ( isset( $init['extended_valid_elements'] ) ) {
			$init['extended_valid_elements'] .= ',' . $valid_iframe;
		} else {
			$init['extended_valid_elements'] = $valid_iframe;
		}

		// ...and spans.
		$init['extended_valid_elements'] .= ',span[id|class|style|name|lang]';

		return $init;
	}
}
add_filter('tiny_mce_before_init', 'twoobl_tinymce_custom');
