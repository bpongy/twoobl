<?php

if( !function_exists( 'twoobl_scripts' ) ) {
	function twoobl_scripts() {

		if( defined('_TWOOBL_DEV_') && _TWOOBL_DEV_ ) {
			wp_enqueue_style('twoobl_main_style', get_template_directory_uri() . '/assets/css/base.css', array(), _TWOOBL_SCR_VERSION_);
			if ( current_user_can('activate_plugins') )
				wp_enqueue_style('twoobl_debug_style', get_template_directory_uri() . '/assets/css/debug.css', array(), _TWOOBL_SCR_VERSION_);
		} else {
			wp_enqueue_style('twoobl_main_style', get_template_directory_uri() . '/assets/css/base.min.css', array(), _TWOOBL_SCR_VERSION_);
		}

		if (!is_admin()) {
			// Be careful, this method will dequeue jQuery migrate
			wp_deregister_script('jquery');
			wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/'._JQUERY_VERSION_.'/jquery.min.js', array(), _JQUERY_VERSION_, false);
			add_filter('script_loader_src', 'twoobl_jquery_local_fallback', 10, 2);
		}

		if (is_single() && comments_open() && get_option('thread_comments')) {
			wp_enqueue_script('comment-reply');
		}

		if( defined('_TWOOBL_DEV_') && _TWOOBL_DEV_ ) {
			wp_register_script('twoobl_scr', get_template_directory_uri() . '/assets/js/scripts.js', array(), _TWOOBL_SCR_VERSION_, true);
		} else {
			wp_register_script('twoobl_scr', get_template_directory_uri() . '/assets/js/scripts.min.js', array(), _TWOOBL_SCR_VERSION_, true);
		}

		wp_enqueue_script('jquery');
		wp_enqueue_script('twoobl_scr');
	}
}
add_action('wp_enqueue_scripts', 'twoobl_scripts', 100);


if( !function_exists( 'twoobl_jquery_local_fallback' ) ) {
	function twoobl_jquery_local_fallback($src, $handle) {
		static $add_jquery_fallback = false;
	
		if ($add_jquery_fallback) {
			echo '<script>window.jQuery || document.write(\'<script src="' . get_template_directory_uri() . '/assets/js/jquery-'._JQUERY_VERSION_.'.min.js"><\/script>\')</script>' . "\n";
			$add_jquery_fallback = false;
		}
	
		if ($handle === 'jquery') {
			$add_jquery_fallback = true;
		}
	
		return $src;
	}
}



/* editor style */
if( !function_exists( 'twoobl_add_editor_styles' ) ) {
	function twoobl_add_editor_styles() {
		add_editor_style('assets/css/editor-style.css');
	}
}
add_action('init', 'twoobl_add_editor_styles');
