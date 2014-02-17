<?php
// en vrac.
// twoobl.php = features à utiliser tt le temps
// custom.php = features à configurer en fx des projets


/********************************************
 * 		Content Width
 ********************************************/
if( !isset($content_width) )
	$content_width = 848;



/********************************************
 * 		Load text domain
 ********************************************/
function twoobl_textdomain() {
	load_theme_textdomain('twoobl', get_template_directory().'/lang');
}
add_action('after_setup_theme', 'twoobl_textdomain');



/********************************************
 * 		Add WP features
 ********************************************/
add_theme_support('automatic-feed-links');
add_theme_support('post-thumbnails');
add_theme_support('custom-background');
// link manager
//add_filter( 'pre_option_link_manager_enabled', '__return_true' );




/********************************************
 * 		Custom menu
 ********************************************/
register_nav_menus( array(
	'primary_nav' => __('Primary navigation', 'twoobl'),
	/*'top_top' => __('Header menu', 'twoobl'),*/
) );





/********************************************
 * 		Custom excerpt
 ********************************************/
function twoobl_excerpt_length( $length ) {
	return 80;
}
add_filter( 'excerpt_length', 'twoobl_excerpt_length', 999 );

function twoobl_excerpt_more( $more ) {
	return '...<span class="read-more"><a class="btn btn-link" href="'.get_permalink().'">'.__('Read more', 'twoobl').'</a></span>';
}
add_filter('excerpt_more', 'twoobl_excerpt_more');

/* Multiple excerpt lengths : echo twoobl_excerpt(get_the_ID(), 130); */

function twoobl_custom_excerpt_length() {
	global $twoobl_excerpt_len;
	return $twoobl_excerpt_len;
}

function twoobl_excerpt($id, $len) {
	global $post, $twoobl_excerpt_len;
	$twoobl_excerpt_len = $len;
	remove_filter( 'excerpt_length', 'twoobl_excerpt_length', 999 );
	add_filter('excerpt_length', 'twoobl_custom_excerpt_length');
	$ex = get_the_excerpt();
	remove_filter('excerpt_length', 'twoobl_custom_excerpt_length');
	add_filter( 'excerpt_length', 'twoobl_excerpt_length', 999 );
	return $ex;
}







/********************************************
 * 		Additional image size
 ********************************************/
/*
function custom_image_sizes() {
	add_image_size('bigthumb', 250, 250, true);
}
add_action('after_setup_theme', 'custom_image_sizes');
*/

/* Show Custom Image Sizes in Admin Media Uploader */
/* http://wp-snippets.com/show-custom-image-sizes-in-admin-media-uploader/ */
function show_image_sizes( $sizes ) {
	$new_sizes = array();
	$added_sizes = get_intermediate_image_sizes();
	
	foreach( $added_sizes as $key => $value) {
		$new_sizes[$value] = $value;
	}

	$new_sizes = array_merge($new_sizes, $sizes);
	return $new_sizes;
}
add_filter('image_size_names_choose', 'show_image_sizes', 11, 1);




/********************************************
 * 		Remove default image links
 ********************************************/
function wpb_imagelink_setup() {
	$image_set = get_option( 'image_default_link_type' );
	if ($image_set !== 'none') {
		update_option('image_default_link_type', 'none');
	}
}
add_action('admin_init', 'wpb_imagelink_setup', 10);








/********************************************
 * 		Remove crap
 ********************************************/
if( !function_exists( 'twoobl_headcleanup' ) ) {
	function twoobl_headcleanup() {
		// Originally from rootstheme & http://wpengineer.com/1438/wordpress-header/
		//remove_action('wp_head', 'feed_links', 2);
		remove_action('wp_head', 'feed_links_extra', 3);
		remove_action('wp_head', 'rsd_link');
		remove_action('wp_head', 'wlwmanifest_link');
		remove_action('wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0);
		remove_action('wp_head', 'wp_generator');
		remove_action('wp_head', 'wp_shortlink_wp_head', 10, 0);
		global $wp_widget_factory;
		remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
	}
}
add_action('init', 'twoobl_headcleanup');

/* Remove crap in dashboard */
if( !function_exists( 'twoobl_remove_dashboard_widgets' ) ) {
	function twoobl_remove_dashboard_widgets() {
		global $wp_meta_boxes;
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
	}
}
add_action('wp_dashboard_setup', 'twoobl_remove_dashboard_widgets' );

/* Remove stupid self pings */
if( !function_exists( 'twoobl_remove_self_ping' ) ) {
	function twoobl_remove_self_ping( &$links ) {
		$home = get_option( 'home' );
		foreach ( $links as $l => $link )
			if ( strpos($link, $home)===false )
				unset($links[$l]);
	}
}
add_action('pre_ping', 'twoobl_remove_self_ping');




/********************************************
 * 		Custom TinyMCE
 ********************************************/

if( !function_exists( 'twoobl_tinymce_custom' ) ) {
	function twoobl_tinymce_custom($init) {
		
		// Show the kitchen sink by default
		// and hide foreground color palette
		$init['wordpress_adv_hidden'] = false;
		$init['theme_advanced_disable'] = 'wp_adv,forecolor';
		
		// remove H1
		$init['theme_advanced_blockformats'] = 'p,h2,h3,h4,h5,h6,address,pre';
		
		// custom styles:
		$style_formats = array(
			array(
				'title' => 'BS Button',
				'inline' => 'button',
				'classes' => 'btn btn-default'
	    	),
			array(
				'title' => 'BS Well',
				'block' => 'div',
				'classes' => 'well',
				'wrapper' => true
			),
			array(
				'title' => 'Code',
				'inline' => 'code'
			)
		);
		$init['style_formats'] = json_encode($style_formats);
	
	
	
		$valid_iframe = 'iframe[id|class|title|style|align|frameborder|height|longdesc|marginheight|marginwidth|name|scrolling|src|width]';
		if ( isset( $init['extended_valid_elements'] ) ) {
			$init['extended_valid_elements'] .= ',' . $valid_iframe;
		} else {
			$init['extended_valid_elements'] = $valid_iframe;
		}
		return $init;
	}
}
add_filter('tiny_mce_before_init', 'twoobl_tinymce_custom');




if( !function_exists( 'twoobl_tinymce_custom' ) ) {
	function twoobl_mce_buttons_2($buttons) {
		array_unshift( $buttons, 'styleselect' );
		return $buttons;
	}
}
add_filter( 'mce_buttons_2', 'twoobl_mce_buttons_2' );



/********************************************
 * 		Title, like TwentyTwelve
 ********************************************/
if( !function_exists( 'twoobl_like_twentytwelve_wp_title' ) ) {
	function twoobl_like_twentytwelve_wp_title($title, $sep) {
		global $paged, $page;
	
		if ( is_feed() )
			return $title;
	
		$title .= get_bloginfo( 'name' );
	
		// Add the site description for the home/front page.
		$site_description = get_bloginfo('description', 'display');
		if ( $site_description && (is_home() || is_front_page()) )
			$title = "$title $sep $site_description";
	
		// Add a page number if necessary.
		if ( $paged >= 2 || $page >= 2 )
			$title = "$title $sep " . sprintf( __('Page %s', 'twooble'), max( $paged, $page ) );
	
		return $title;
	}
}
add_filter('wp_title', 'twoobl_like_twentytwelve_wp_title', 10, 2);





/********************************************
 * 		Remove theme / plugins editor
 ********************************************/
if ( !defined('DISALLOW_FILE_EDIT') )
	define('DISALLOW_FILE_EDIT',true);







/********************************************
 * 		Remove accents from uploaded files
 ********************************************/
add_filter('sanitize_file_name', 'remove_accents');





/********************************************
 * 		Favicon
 ********************************************/
if( !function_exists( 'twoobl_like_twentytwelve_wp_title' ) ) {
	function twoobl_like_twentytwelve_wp_title() {
		echo '<link href="'.get_bloginfo('template_directory').'/favicon.ico" rel="shortcut icon" type="image/x-icon" />' . "\n";
	}
}
add_action('wp_head', 'twoobl_favicon');



/**********************************************************************************
 *		vignette Facebook dans le header
 **********************************************************************************/
if( !function_exists( 'twoobl_fb_like_thumbnails' ) ) {
	function twoobl_fb_like_thumbnails()
	{
		global $posts;
		if ( is_single() || is_page() ) {
			if ( has_post_thumbnail( $posts[0]->ID ) ) {
				$FB_thumb = wp_get_attachment_image_src( get_post_thumbnail_id( $posts[0]->ID), 'thumbnail' );
				$FB_thumb = $FB_thumb[0];
				echo "\n<link rel=\"image_src\" href=\"$FB_thumb\" />\n";
			}
		}
	}
}
add_action('wp_head', 'twoobl_fb_like_thumbnails');



/********************************************
 * 		Display Today, if it's... today.
 ********************************************/
if( !function_exists( 'twoobl_fb_like_thumbnails' ) ) {
	function twoobl_aujourdhui($postdate) {
		$the_post = get_post();
		if( date('Ymd', strtotime($the_post->post_date)) == date('Ymd') ) {
			return __('Today', 'twoobl');
		} else {
			return $postdate;
		}
	}
}
add_filter('get_the_date', 'twoobl_aujourdhui');



/**********************************************************************************
 *		User features: G+ & Twitter (aim? yim? jabber? seriously?)
 **********************************************************************************/
if( !function_exists( 'twoobl_fb_like_thumbnails' ) ) {
	function twoobl_contact_info($contacts) {
		unset($contacts['aim']);  
		unset($contacts['yim']);
		unset($contacts['jabber']);  
		$contacts['contact_google'] = __('Google+ URL', 'twoobl');
		$contacts['contact_facebook'] = __('Facebook URL', 'twoobl');
		$contacts['contact_twitter'] = __('Twitter profile', 'twoobl');
		return $contacts;
	}
}
add_filter('user_contactmethods', 'twoobl_contact_info');


