<?php

if( !function_exists( 'twoobl_pods_notice' ) ) {
	function twoobl_pods_notice(){
	
		if( !is_dir(WP_PLUGIN_DIR.'/pods/') ) {
			$url = admin_url('plugin-install.php?tab=search&s=pods');
			echo '<div class="error"><p>'.__('Warning! In order to use this theme, you must install', 'twoobl').' <a href="'.$url.'">Pods Framework</a></p></div>';
		} else if ( !is_plugin_active('pods/init.php') ) {
			$url = admin_url('plugins.php');
			echo '<div class="error"><p>'.__('Warning! In order to use this theme, you must', 'twoobl').' <a href="'.$url.'">'.__('activate').' Pods Framework</a></p></div>';
		} else {
			// PODS est installé. est-ce que la page de config existe?
			$twoobl = pods('twoobl');
			if( !$twoobl ) {
				$file_conf = file_get_contents(get_template_directory_uri().'/pods-config.json');
				$imp = Pods_Migrate_Packages::import($file_conf);
				// TODO
				echo '<div class="updated"><p>clic <a href="'.admin_url('themes.php?page=pods-settings-twoobl').'">here</a>.</p></div>';
			}
		}
	
	}
}
add_action( 'admin_notices', 'twoobl_pods_notice' );


// pooooods
function twoobl_podsinit() {
	if ( is_plugin_active('pods/init.php') ) {
		global $pods;
		if( !$pods->pod_exists('twoobl_config') ) {
			// créer pods
			
		}
		
	}
}
add_action( 'plugins_loaded', 'twoobl_podsinit' );
