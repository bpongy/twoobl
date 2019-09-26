<?php

if( !function_exists( 'twoobl_scripts' ) ) {
	function twoobl_scripts() {

		$theme = wp_get_theme();
		$scripts_version = $theme->get('Version');

		// If admin and mode dev : assets from dev
		if( defined('_TWOOBL_DEV_') && _TWOOBL_DEV_ && current_user_can('activate_plugins')) {
			wp_enqueue_style('twoobl_debug_style', get_template_directory_uri() . '/assets/css/debug.css', array(), $scripts_version);
			wp_enqueue_style('twoobl_main_style', get_template_directory_uri() . '/dist/css/theme.css', array(), $scripts_version);
			wp_register_script('twoobl_scr', get_template_directory_uri() . '/dist/js/scripts.js', array(), '', true);
		} else {
			// If prod : min assets from prod
			wp_enqueue_style('twoobl_main_style', get_template_directory_uri() . '/dist/css/theme.min.css', array(), $scripts_version);
			wp_register_script('twoobl_scr', get_template_directory_uri() . '/dist/js/scripts.min.js', array(), '', true);
		}

		if (is_single() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}

		wp_enqueue_script('twoobl_scr');
	}
}
add_action('wp_enqueue_scripts', 'twoobl_scripts', 100);

