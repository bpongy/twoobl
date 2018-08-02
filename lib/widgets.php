<?php

// utiliser les shortcodes dans les widgets
add_filter('widget_text', 'do_shortcode');


if( !function_exists( 'twoobl_widgets_init' ) ) {
	function twoobl_widgets_init() {
	
		register_sidebar(array(
			'name'          => __('Sidebar', 'twoobl'),
			'id'            => 'primary',
			'before_widget' => '<div id="%1$s" class="widget %2$s clearfix">',
			'before_title'  => '<span class="title">',
			'after_title'   => '</span>',
			'after_widget'  => '</div>'
		));
	
		register_sidebar(array(
			'name'          => __('Footer', 'twoobl'),
			'id'            => 'footer',
			'before_widget' => '<div id="%1$s" class="widget %2$s clearfix">',
			'before_title'  => '<span class="title">',
			'after_title'   => '</span>',
			'after_widget'  => '</div>'
		));
	
		if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ )
			register_sidebar(array(
				'name'          => __('Mobile menu', 'twoobl'),
				'id'            => 'mobile_menu',
				'before_widget' => '<div id="%1$s" class="widget %2$s clearfix">',
				'before_title'  => '<span class="title">',
				'after_title'   => '</span>',
				'after_widget'  => '</div>'
			));
	
		//on suppr les widgets par défaut qui servent à rien
		unregister_widget('WP_Widget_Meta');
		unregister_widget('WP_Widget_Tag_Cloud');
		unregister_widget('WP_Widget_Calendar');
		unregister_widget('WP_Widget_RSS');
		unregister_widget('WP_Widget_Search');
	}
}
add_action('widgets_init', 'twoobl_widgets_init');
