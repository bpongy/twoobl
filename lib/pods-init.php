<?php

function twoobl_pods_notice(){

	if( !is_dir(WP_PLUGIN_DIR.'/pods/') ) {
		$url = admin_url('plugin-install.php?tab=search&s=pods');
		echo '<div class="error"><p>'.__('Warning! In order to use this theme, you must install', 'twoobl').' <a href="'.$url.'">Pods Framework</a></p></div>';
	} else if ( !is_plugin_active('pods/init.php') ) {
		$url = admin_url('plugins.php');
		echo '<div class="error"><p>'.__('Warning! In order to use this theme, you must', 'twoobl').' <a href="'.$url.'">'.__('activate').' Pods Framework</a></p></div>';
	}

}
add_action( 'admin_notices', 'twoobl_pods_notice' );
