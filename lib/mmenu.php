<?php

if( !function_exists( 'twoobl_mmenu_scripts' ) ) {
	function twoobl_mmenu_scripts() {

		$mmenu_version = '7.0.3';
		wp_register_script('twoobl_mmenu_scr', get_template_directory_uri() . '/mmenu/jquery.mmenu.js', array(), $mmenu_version, true);
		wp_enqueue_script('twoobl_mmenu_scr');
		wp_enqueue_style('twoobl_mmenu_style', get_template_directory_uri() . '/mmenu/jquery.mmenu.css', array(), $mmenu_version);
	}
}
add_action('wp_enqueue_scripts', 'twoobl_mmenu_scripts', 100);
