<?php

/* constants */
define('_MAIN_CLASS_', 'col-sm-9');
define('_SIDEBAR_CLASS_', 'col-sm-3 hidden-xs');
define('_MOBILE_NAV_', true);
define('_THUMBNAIL_COLUMN_', true);
define('_TWOOBL_DEBUG_', true);
define('_ISOLANG_', substr(get_bloginfo('language'), 0, 2));

if ( is_plugin_active('pods/init.php') )
	$twoobl = pods('twoobl_'._ISOLANG_);

require_once locate_template('lib/scripts.php');
require_once locate_template('lib/widgets.php');
require_once locate_template('lib/shortcodes.php');
require_once locate_template('lib/pods-init.php');
require_once locate_template('lib/tinymce.php');
require_once locate_template('lib/twoobl.php');
require_once locate_template('lib/custom.php');
