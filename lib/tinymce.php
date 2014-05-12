<?php

/********************************************
 * 		Custom TinyMCE
 ********************************************/

if( !function_exists( 'twoobl_tinymce_custom' ) ) {
	function twoobl_tinymce_custom($init) {

		// Fuck you kitchen sink
		set_user_setting('hidetb', 1);

		// Remove H1, H6
		$init['block_formats'] = 'Paragraphe=p;'.__('Title 2', 'twoobl').'=h2;'.__('Title 3', 'twoobl').'=h3;'.__('Title 4', 'twoobl').'=h4;'.__('Title 5', 'twoobl').'=h5;Adresse=address';

		// custom styles (Bootstrap classes):
		$style_formats = array(
			array(
				'title' => __('BS alert info', 'twoobl'),
				'block' => 'div',
				'classes' => 'alert alert-info',
				'wrapper' => true
			),
			array(
				'title' => __('BS alert warning', 'twoobl'),
				'block' => 'div',
				'classes' => 'alert alert-warning',
				'wrapper' => true
			),
			array(
				'title' => __('BS well', 'twoobl'),
				'block' => 'div',
				'classes' => 'well',
				'wrapper' => true
			),
			array(
				'title' => __('Code', 'twoobl'),
				'inline' => 'code'
			)
		);
		$init['style_formats'] = json_encode($style_formats);

		// Hello iframes.
		$valid_iframe = 'iframe[id|class|title|style|align|frameborder|height|longdesc|marginheight|marginwidth|name|scrolling|src|width]';
		if ( isset( $init['extended_valid_elements'] ) ) {
			$init['extended_valid_elements'] .= ',' . $valid_iframe;
		} else {
			$init['extended_valid_elements'] = $valid_iframe;
		}

		return $init;
	}
}
add_filter('tiny_mce_before_init', 'twoobl_tinymce_custom');



if( !function_exists( 'twoobl_mce_buttons_1' ) ) {
	function twoobl_mce_buttons_1($buttons) {
		// Remove buttons
	    $remove = array('wp_adv');
		return array_diff($buttons,$remove);
	}
}
add_filter( 'mce_buttons', 'twoobl_mce_buttons_1' );



if( !function_exists( 'twoobl_mce_buttons_2' ) ) {
	function twoobl_mce_buttons_2($buttons) {
		// Add style selector to the beginning of the toolbar
		array_unshift( $buttons, 'styleselect', 'alignjustify' );

		// Remove buttons
	    $remove = array('forecolor');
		return array_diff($buttons,$remove);
	}
}
add_filter( 'mce_buttons_2', 'twoobl_mce_buttons_2' );
