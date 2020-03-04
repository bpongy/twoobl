<?php

if( !function_exists( 'twoobl_scripts' ) ) {
	function twoobl_scripts() {

		$theme = wp_get_theme();
		$scripts_version = $theme->get('Version');

		wp_enqueue_style('twoobl_main_style', get_template_directory_uri() . '/dist/css/theme.min.css', array(), $scripts_version);
		wp_enqueue_script('twoobl_scr', get_template_directory_uri() . '/dist/js/scripts.min.js', array(), '', true);

	}
}
add_action('wp_enqueue_scripts', 'twoobl_scripts', 100);
