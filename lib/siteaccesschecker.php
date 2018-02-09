<?php

if( !function_exists( 'twoobl_toolbar_siteaccesschecker' ) )
{
	function twoobl_toolbar_siteaccesschecker( $wp_admin_bar ) {
		$visibility = intval(get_option('blog_public'));

		if ($visibility==1)
		{
			$title = __('Site is online', 'twoobl');
			$class = 'link-siteaccesschecker';
		} elseif($visibility==0) {
			$title = __('Search engines are blocked', 'twoobl');
			$class = 'link-siteaccesschecker offline';
		} else {
			$title = __('Site access is locked!', 'twoobl');
			$class = 'link-siteaccesschecker locked';
		}

		$args = array(
			'id' => 'siteaccesschecker',
			'title' => $title,
			'href'  => admin_url('options-reading.php'),
			'meta'  => array(
				'class' => $class,
				'html' => '<style>
					.link-siteaccesschecker .ab-item:before {
						content: "";
						top: 2px;
					}
					.link-siteaccesschecker.offline .ab-item:before {
						content: "\f153";
						color: yellow !important;
					}
					.link-siteaccesschecker.locked .ab-item:before {
						content: "\f153";
						color: tomato !important;
					}
				</style>'
			)
		);
		$wp_admin_bar->add_node($args);
	}
}
add_action('admin_bar_menu', 'twoobl_toolbar_siteaccesschecker', 999);
