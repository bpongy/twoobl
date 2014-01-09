<?php

/******************************************************************
 * 	please install the Bootstrap 3 Shortcodes plugin.
 * 	https://github.com/filipstefansson/bootstrap-shortcodes
 ******************************************************************/






/******************************************************************
 * 	remove <p> and <br /> around shortcodes
 * 	you don't need it with the Bootstrap 3 Shortcodes plugin.
 ******************************************************************/
function twoobl_shortcode_p_fix($content)
{
	$array = array (
		'<p>[' => '[', 
		']</p>' => ']', 
		']<br />' => ']'
	);
	return strtr($content, $array);
}
add_filter('the_content', 'twoobl_shortcode_p_fix');
