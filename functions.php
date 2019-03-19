<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

/* constants */
define('_MAIN_CLASS_', 'col-md-9 order-2');
define('_SIDEBAR_CLASS_', 'col order-1 d-none d-md-block');
define('_THEME_COLOR_', '#444');
define('_MOBILE_NAV_', true);
define('_TWOOBL_DEV_', true);
define('_JQUERY_VERSION_', '2.2.4');
define('_ISOLANG_', substr(get_bloginfo('language'), 0, 2));

require_once locate_template('lib/elementor.php');
require_once locate_template('lib/scripts.php');
require_once locate_template('lib/widgets.php');
require_once locate_template('lib/shortcodes.php');
//require_once locate_template('lib/acf-init.php');
require_once locate_template('lib/twoobl.php');
require_once locate_template('lib/woocommerce.php');
require_once locate_template('lib/custom.php');
