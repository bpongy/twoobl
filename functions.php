<?php

/* constants */
define('_MAIN_CLASS_', 'col-sm-9');
define('_SIDEBAR_CLASS_', 'col-sm-3 hidden-xs');
define('_ISOLANG_', substr(get_bloginfo('language'), 0, 2));
$twoobl = get_option('theme_options_'._ISOLANG_);

require_once locate_template('/lib/scripts.php');
require_once locate_template('/lib/widgets.php');
require_once locate_template('/lib/shortcodes.php');
require_once locate_template('/lib/post-types.php');
require_once locate_template('/lib/metaboxes.php');
require_once locate_template('/lib/theme-options.php');
require_once locate_template('/lib/twoobl.php');
require_once locate_template('/lib/custom.php');
