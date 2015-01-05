<?php

if( !function_exists( 'twoobl_pods_init' ) ) {
	function twoobl_pods_init(){

		if( !is_dir(WP_PLUGIN_DIR.'/pods/') ) {
			$url = admin_url('plugin-install.php?tab=search&s=pods');
			echo '<div class="error"><p>'.__('Warning! In order to use Twoobl, you must install', 'twoobl').' <a href="'.$url.'">Pods</a>.</p></div>';
		} else if ( !function_exists( 'pods' ) ) {
			// activate pods
			$result = activate_plugin( 'pods/init.php' );
			if ( is_wp_error( $result ) ) {
				// error??
				
			}
		} else {
			// PODS is installed. Config page exists?
			$pods_name = 'twoobl_'._ISOLANG_;
			$twoobl = pods($pods_name);
			if( !$twoobl || !count($twoobl->fields) ) {

				$fields = array(
					array(
						'name' => 'content_404',
						'label' => '404',
						'type' => 'wysiwyg'
					)
				);
				
				$args = array(
					'name' => $pods_name,
					'label' => 'Twoobl configuration',
					'type' => 'settings',
					'fields' => $fields
				);
				
				$api = pods_api();
				$api->save_pod($args);
			}
		}
	
	}
}
add_action( 'admin_notices', 'twoobl_pods_init' );
