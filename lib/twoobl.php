<?php

if( !function_exists( 'twoobl_setup' ) ) {
	function twoobl_setup() {
			
		// Load text domain
		load_theme_textdomain('twoobl', get_template_directory().'/lang');
		
		// Custom menus
		register_nav_menus( array(
			'primary_nav' => __('Primary navigation', 'twoobl')
		) );

		// enlarge your WordPress
		add_theme_support('title-tag');
		add_theme_support('automatic-feed-links');
		add_theme_support('post-thumbnails');
		add_theme_support('custom-background');
		
		// Add theme support for Semantic Markup
		// $HTML5markup = array( 'comment-list', 'comment-form', 'search-form', 'gallery', 'caption' );
		$HTML5markup = array( 'gallery' );
		add_theme_support( 'html5', $HTML5markup );

		// Remove gallery inline CSS
		add_filter('use_default_gallery_style', '__return_false');
	}
}
add_action('after_setup_theme', 'twoobl_setup');






/********************************************
 * 		Custom excerpt
 ********************************************/
function twoobl_excerpt_length( $length ) {
	return 80;
}
add_filter( 'excerpt_length', 'twoobl_excerpt_length', 999 );

function twoobl_excerpt_more( $more ) {
	return '...<span class="read-more"><a class="btn btn-primary btn-xs" href="'.get_permalink().'">'.__('Read more', 'twoobl').'</a></span>';
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
if( !function_exists( 'twoobl_image_sizes' ) ) {
	function twoobl_image_sizes() {
		add_image_size('bigthumb', 250, 250, true);
	}
}
add_action('after_setup_theme', 'twoobl_image_sizes');
*/

/* Show Custom Image Sizes in Admin Media Uploader */
/* http://wp-snippets.com/show-custom-image-sizes-in-admin-media-uploader/ */
if( !function_exists( 'twoobl_show_image_sizes' ) ) {
	function twoobl_show_image_sizes( $sizes ) {
		$new_sizes = array();
		$added_sizes = get_intermediate_image_sizes();
		
		foreach( $added_sizes as $key => $value) {
			$new_sizes[$value] = $value;
		}
	
		$new_sizes = array_merge($new_sizes, $sizes);
		return $new_sizes;
	}
}
add_filter('image_size_names_choose', 'twoobl_show_image_sizes', 11, 1);



/*************************************************
 * 	Function: get post featured image permalink
 *************************************************/
/*
 * Example of use :
 * if( $thumb = get_post_thumbnail_src(get_the_ID(), 'medium') )
 * 		echo '<img src="'.$thumb.'" alt="" />';
 */
if( !function_exists( 'get_post_thumbnail_src' ) ) {
	function get_post_thumbnail_src( $post_id = null, $size = 'thumbnail' ) {
		$post_id = ( null === $post_id ) ? get_the_ID() : $post_id;
		if ( '' != get_the_post_thumbnail($post_id) ) {
			$post_thumbnail_id = get_post_thumbnail_id( $post_id );
			$thumb_url = wp_get_attachment_image_src($post_thumbnail_id, $size, true);
			return $thumb_url[0];
		}
		return false;
	}
}

// TODO
if( !function_exists( 'get_img_src' ) ) {
	function get_img_src( $img_id = null, $size = 'thumbnail' ) {
		$img_url = wp_get_attachment_image_src($img_id, $size, true);
		if (!isset($img_url[0]))
			return false;
		return $img_url[0];
	}
}



/********************************************
 * 		Auto meta description
 ********************************************/
if( !function_exists( 'twoobl_meta_description' ) ) {
	function twoobl_meta_description() {
		if ( is_home() || is_front_page() )
			echo '<meta name="description" content="'.esc_attr(get_bloginfo('description')).'" />' . "\n";
		elseif ( is_single() ) {
			global $post;
			$excerpt = $post->post_excerpt;
			if ( $post->post_excerpt == '' )
				$excerpt = apply_filters('the_content', $post->post_content);
			$excerpt = str_replace(']]>', ']]&gt;', $excerpt);
			$excerpt = wp_html_excerpt($excerpt, 200, '...');
			echo '<meta name="description" content="'.$excerpt.'" />'. "\n";
		}
	}
}
add_action('wp_head', 'twoobl_meta_description');


/********************************************
 * 		Auto non-breakable space
 ********************************************/
if( !function_exists( 'twoobl_automatic_nbsp' ) ) {
	function twoobl_automatic_nbsp($content) {
		$chars = '?!:;';
		$content = preg_replace('/ (['.$chars.'])/is', '&nbsp;${1}', $content);
		return $content;
	}
}
add_filter( 'the_content', 'twoobl_automatic_nbsp' );



/****************************************************
 * 		Add thumbnails column in posts & pages list
 ****************************************************/
if( defined( '_THUMBNAIL_COLUMN_' ) && _THUMBNAIL_COLUMN_ ) {
	add_filter('manage_posts_columns', 'twoobl_postsColumns', 1);
	add_filter('manage_pages_columns', 'twoobl_postsColumns', 1);
	add_action('manage_posts_custom_column', 'twoobl_postsCustomColumn', 1, 2);
	add_action('manage_pages_custom_column', 'twoobl_postsCustomColumn', 1, 2);
	
	function twoobl_postsColumns($columns) {
		$pos = 1;
		$columns = array_merge(array_slice($columns, 0, $pos), array('twoobl_post_thumbnail' => __('Thumb', 'twoobl')), array_slice($columns, $pos));
		return $columns;
	}
	
	function twoobl_postsCustomColumn($column_name, $id) {
		if ($column_name === 'twoobl_post_thumbnail')
		{
			$admin_thumb = get_the_post_thumbnail() ? get_post_thumbnail_src() : get_template_directory_uri() . '/assets/img/default.png';
			echo '<a href="' . get_edit_post_link() . '">';
			if (get_the_post_thumbnail())
				echo '<img src="' . get_post_thumbnail_src() . '" style="width: 40px;" alt="" />';
			else
				echo '<img src="' . get_template_directory_uri() . '/assets/img/default.png" style="width: 40px; opacity: 0.4;" alt="" />';
			echo '</a>';
		}
	}
	
	function twoobl_admin_inline_css() {
		echo '<style type="text/css">';
		echo '.column-twoobl_post_thumbnail { width: 50px; }';
		echo '</style>';
	}
	add_action('admin_head', 'twoobl_admin_inline_css');
}



/********************************************
 * 		Remove default image links
 ********************************************/
if( !function_exists( 'twoobl_remove_imagelink' ) ) {
	function twoobl_remove_imagelink() {
		$image_set = get_option( 'image_default_link_type' );
		if ($image_set !== 'none') {
			update_option('image_default_link_type', 'none');
		}
	}
}
add_action('admin_init', 'twoobl_remove_imagelink', 10);



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
		remove_action('wp_print_styles', 'print_emoji_styles');
		global $wp_widget_factory;
		remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
	}
}
add_action('init', 'twoobl_headcleanup');

// Remove crap in dashboard
if( !function_exists( 'twoobl_remove_dashboard_widgets' ) ) {
	function twoobl_remove_dashboard_widgets() {
		global $wp_meta_boxes;
		unset($wp_meta_boxes['dashboard']['normal']['core']['dashboard_plugins']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_primary']);
		unset($wp_meta_boxes['dashboard']['side']['core']['dashboard_secondary']);
	}
}
add_action('wp_dashboard_setup', 'twoobl_remove_dashboard_widgets' );

// Remove stupid self pings
if( !function_exists( 'twoobl_remove_self_ping' ) ) {
	function twoobl_remove_self_ping( &$links ) {
		$home = home_url('/');
		foreach ( $links as $l => $link )
			if ( strpos($link, $home)===false )
				unset($links[$l]);
	}
}
add_action('pre_ping', 'twoobl_remove_self_ping');

// Remove generator meta tag in RSS feed
if( !function_exists( 'twoobl_remove_rss_generator' ) ) {
	function twoobl_remove_rss_generator() {
		return'';
	}
}
add_filter('the_generator','twoobl_remove_rss_generator');

// Remove unused post classes
function twoobl_clean_post_class($classes) {
  foreach ($classes as $k => $class) {
    if( 0 === strpos( $class, 'tag-' )
      || 0 === strpos( $class, 'category-' )
      || 0 === strpos( $class, 'post-' )
      || 0 === strpos( $class, 'type-' )
      || $class == 'status-publish'
      || $class == 'format-standard' )
      unset($classes[$k]);
  }
  return $classes;
}
add_filter('post_class','twoobl_clean_post_class');

// Remove unused body classes
function twoobl_clean_body_class($classes) {
  foreach ($classes as $k => $class) {
    if( 0 === strpos( $class, 'postid-' )
      || 0 === strpos( $class, 'page-id-' )
      || $class == 'page-template-default'  )
      unset($classes[$k]);
  }
  return $classes;
}
add_filter('body_class','twoobl_clean_body_class');

// Remove WP logo in admin bar
if( !function_exists( 'twoobl_adminbar' ) ) {
	function twoobl_adminbar() {
		global $wp_admin_bar;
		$wp_admin_bar->remove_menu('wp-logo');
	}
}
add_action('wp_before_admin_bar_render', 'twoobl_adminbar');



/********************************************
 * 		Sanitize uploaded files names
 ********************************************/
if( !function_exists( 'twoobl_sanitize_file_name' ) ) {
	function twoobl_sanitize_file_name($file_name) {
		$remove = array("’", "©");
		$file_name = remove_accents($file_name);
		$file_name = str_replace($remove, '-', $file_name);
		return $file_name;
	}
}
add_filter('sanitize_file_name', 'twoobl_sanitize_file_name', 10);



/********************************************
 * 		Revisions limit
 ********************************************/
if( !function_exists( 'twoobl_limit_rev_pages_and_posts' ) ) {
	function twoobl_limit_rev_pages_and_posts($num, $post) {
		if ( $post->post_type=='page' || $post->post_type=='post' )
			return 10;
		return $num;
	}
}
add_filter('wp_revisions_to_keep', 'twoobl_limit_rev_pages_and_posts', 10, 2);



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
			$title = "$title $sep " . sprintf( __('Page %s', 'twoobl'), max( $paged, $page ) );
	
		return $title;
	}
}
add_filter('wp_title', 'twoobl_like_twentytwelve_wp_title', 10, 2);



/********************************************
 * 		File types upload
 ********************************************/
if( !function_exists( 'twoobl_mime_types' ) ) {
	function twoobl_mime_types($mime_types){
		$mime_types['svg'] = 'image/svg+xml';
		//$mime_types['avi'] = 'video/msvideo, video/avi, video/x-msvideo';
		//$mime_types['bz2'] = 'application/x-bzip2';
		//$mime_types['css'] = 'text/css';
		//$mime_types['doc'] = 'application/msword';
		//$mime_types['html'] = 'text/html';
		//$mime_types['js'] = 'application/x-javascript';
		//$mime_types['mp3'] = 'audio/mpeg';
		//$mime_types['pdf'] = 'application/pdf';
		//$mime_types['swf'] = 'application/x-shockwave-flash';
		//$mime_types['tar.gz'] = 'application/x-tar';
		//$mime_types['txt'] = 'text/plain';
		//$mime_types['xls'] = 'application/vnd.ms-excel';
		//$mime_types['xml'] = 'application/xml';
		//$mime_types['zip'] = 'application/zip, application/x-compressed-zip';
		return $mime_types;
	}
}
add_filter('upload_mimes', 'twoobl_mime_types');



/********************************************
 * 		Remove theme / plugins editor
 ********************************************/
if ( !defined('DISALLOW_FILE_EDIT') )
	define('DISALLOW_FILE_EDIT',true);



/********************************************
 * 		Favicon
 ********************************************/
if( !function_exists( 'twoobl_favicon' ) ) {
	function twoobl_favicon() {
		echo '<link href="'.get_template_directory_uri().'/favicon.ico" rel="shortcut icon" type="image/x-icon" />' . "\n";
	}
}
if (!has_site_icon())
	add_action('wp_head', 'twoobl_favicon');



/**********************************************************************************
 *		Facebook share image
 **********************************************************************************/
if( !function_exists( 'twoobl_fb_like_thumbnails' ) ) {
	function twoobl_fb_like_thumbnails()
	{
		global $posts;
		$FB_thumb = get_template_directory_uri() . '/assets/img/default.png';
		if ( is_single() || is_page() ) {
			if ( has_post_thumbnail( $posts[0]->ID ) ) {
				$FB_thumb = wp_get_attachment_image_src( get_post_thumbnail_id( $posts[0]->ID), 'thumbnail' );
				$FB_thumb = $FB_thumb[0];
			}
		}
		echo "\n<link rel=\"image_src\" href=\"$FB_thumb\" />\n";
	}
}
add_action('wp_head', 'twoobl_fb_like_thumbnails');



/********************************************
 * 		Display Today, if it's... today.
 ********************************************/
if( !function_exists( 'twoobl_aujourdhui' ) ) {
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
if( !function_exists( 'twoobl_contact_info' ) ) {
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



/*************************************************
 * 	Function: get adjacent post links
 *************************************************/
/*
 * Example of use :
 * echo get_twoobl_prevnext();
 */
if( !function_exists( 'get_twoobl_prevnext' ) ) {
	function get_twoobl_prevnext() {
		global $post;
		$prev_post = get_adjacent_post();
		$next_post = get_adjacent_post(false, '', false);
		
		if( !$prev_post && !$next_post )
			return;

		$prevnext = '<nav class="post-nav row">';
			if( $prev_post )
				$prevnext .= '<div class="col-xs-6"><a data-toggle="tooltip" class="btn btn-default btn-sm" href="'.get_permalink($prev_post).'" title="'.esc_attr($prev_post->post_title).'">'.__('&larr; Older posts', 'twoobl').'</a></div>';
			if( $next_post )
				$prevnext .= '<div class="col-xs-6 text-right"><a data-toggle="tooltip" class="btn btn-default btn-sm" href="'.get_permalink($next_post).'" title="'.esc_attr($next_post->post_title).'">'.__('Newer posts &rarr;', 'twoobl').'</a></div>';
		$prevnext .= '</nav>';
		
		return $prevnext;
	}
}



/*************************************************
 * 	Add thumbnail to feed
 *************************************************/
if( !function_exists( 'twoobl_feed_post_thumbnail' ) ) {
	function twoobl_feed_post_thumbnail($content) {
		global $post;
		if ( '' != get_the_post_thumbnail($post->ID) ) {
			$content = '<p>' . get_the_post_thumbnail($post->ID, 'thumbnail') . '</p>' . get_the_content();
		}
		return $content;
	}
}
add_filter('the_excerpt_rss', 'twoobl_feed_post_thumbnail');
add_filter('the_content_feed', 'twoobl_feed_post_thumbnail');



/*************************************************
 * 	Add default avatar
 *************************************************/
if ( !function_exists('twoobl_default_avatar') ) {
	function twoobl_default_avatar($avatar_defaults) {
		$twoobl_avatar = get_template_directory_uri() . '/assets/img/default.png';
		$avatar_defaults[$twoobl_avatar] = get_bloginfo('name');

		return $avatar_defaults;
	}
}
add_filter( 'avatar_defaults', 'twoobl_default_avatar' );



/*************************************************
 * 	Disable REST API user endpoints for security
 *************************************************/
if ( !function_exists('twoobl_json_api_filters') ) {
	function twoobl_json_api_filters($endpoints) {
		if ( isset( $endpoints['/wp/v2/users'] ) ) {
			unset( $endpoints['/wp/v2/users'] );
		}
		if ( isset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] ) ) {
			unset( $endpoints['/wp/v2/users/(?P<id>[\d]+)'] );
		}
		return $endpoints;
	}
}
add_filter( 'rest_endpoints', 'twoobl_json_api_filters' );
