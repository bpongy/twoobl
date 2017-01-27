<?php

// just a shortcode example.
function shortcode_twooblexample($atts, $content){
	extract(shortcode_atts(array(
		'att1' => false,
		'att2' => false
	), $atts));

	return '<div class="twooblexample">'.$content.'</div>';
}
add_shortcode('twooblexample', 'shortcode_twooblexample');



/******************************************************************
 * 	remove <p> and <br /> around shortcodes
 ******************************************************************/
if( !function_exists( 'twoobl_shortcode_p_fix' ) ) {
	function twoobl_shortcode_p_fix($content) {
		$array = array (
			'<p>[' => '[', 
			']</p>' => ']', 
			']<br />' => ']'
		);
		return strtr($content, $array);
	}
}
add_filter('the_content', 'twoobl_shortcode_p_fix');
