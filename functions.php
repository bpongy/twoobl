<?php
if ( ! defined( 'ABSPATH' ) ) { exit; }

/* constants */
define('_THEME_COLOR_', '#444');
define('_MOBILE_NAV_', true);
define('_TWOOBL_DEV_', true);
define('_ISOLANG_', substr(get_bloginfo('language'), 0, 2));

require get_stylesheet_directory() . '/lib/elementor.php';
require get_stylesheet_directory() . '/lib/scripts.php';
require get_stylesheet_directory() . '/lib/widgets.php';
require get_stylesheet_directory() . '/lib/shortcodes.php';
// require get_stylesheet_directory() . '/lib/acf-init.php';
require get_stylesheet_directory() . '/lib/twoobl.php';
require get_stylesheet_directory() . '/lib/woocommerce.php';
require get_stylesheet_directory() . '/lib/custom.php';
