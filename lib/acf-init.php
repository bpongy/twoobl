<?php

if (function_exists('acf_add_options_page'))
{
	acf_add_options_page(
		array(
			'page_title'  => __('Website settings', _TWOOBL_DOMAIN_LANG_),
			'menu_title'  => 'Twoobl',
			'menu_slug'   => 'twoobl',
			'icon_url'    => 'dashicons-admin-settings',
			'position'    => 22
		)
	);

	acf_add_options_sub_page(array(
		'title' => __('Settings', _TWOOBL_DOMAIN_LANG_),
		'parent' => 'twoobl'
	));

	acf_add_options_sub_page(array(
		'title' => __('Home', _TWOOBL_DOMAIN_LANG_),
		'parent' => 'twoobl'
	));

	acf_add_options_sub_page(array(
		'title' => __('Footer', _TWOOBL_DOMAIN_LANG_),
		'parent' => 'twoobl'
	));
}
