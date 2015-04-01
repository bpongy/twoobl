<?php

/* constants */
define('_MAIN_CLASS_', 'col-sm-9');
define('_SIDEBAR_CLASS_', 'col-sm-3 hidden-xs');
define('_THEME_COLOR_', '#444');
define('_MOBILE_NAV_', true);
define('_THUMBNAIL_COLUMN_', true);
define('_TWOOBL_DEV_', WP_DEBUG);
define('_ISOLANG_', substr(get_bloginfo('language'), 0, 2));

if ( function_exists( 'pods' ) )
	$twoobl = pods('twoobl_'._ISOLANG_);

require_once locate_template('lib/scripts.php');
require_once locate_template('lib/widgets.php');
require_once locate_template('lib/shortcodes.php');
require_once locate_template('lib/pods-init.php');
require_once locate_template('lib/tinymce.php');
require_once locate_template('lib/twoobl.php');
require_once locate_template('lib/custom.php');
