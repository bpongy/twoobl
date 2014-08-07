<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="utf-8">
	<title><?php wp_title('-', true, 'right'); ?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
	<?php /*<link href='http://fonts.googleapis.com/css?family=Signika:600' rel='stylesheet' type='text/css'> */ ?>

	<!-- IE8 support of HTML5 elements and media queries -->
	<!--[if lt IE 9]>
	<script src="//cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="//cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>

<body <?php body_class(); ?>>
<?php
if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ ) {
	echo '<input type="checkbox" id="check-navmob" class="hidden">';
}
?>
<div id="playground">

	<?php
	if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ )
		echo '<label id="menu-button" for="check-navmob" class="visible-xs"></label>';
	?>

	<header id="top" role="banner">
		<div class="container">
			
			<div class="row">

				<div id="header-logo" class="col-md-4">
					<a class="brand" href="<?php echo home_url('/'); ?>" title="<?php echo esc_attr(get_bloginfo('name')); ?>">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
					</a>
				</div>

				<div id="site-desc" class="col-md-4">
					<?php
					echo ( is_home() ? '<h1>' : '<p>' );
					echo get_bloginfo('description');
					echo ( is_home() ? '</h1>' : '</p>' );
					?>
				</div>
				
				<div id="search-top" class="col-md-4"><?php get_search_form(); ?></div>
			
			</div>

			<nav class="nav-main" role="navigation">
				<?php
				if( has_nav_menu('primary_nav') )
					wp_nav_menu(array('theme_location' => 'primary_nav', 'menu_class' => 'nav nav-pills'));
				?>
			</nav>

		</div>
	</header>
	
	<div id="wrap">
		
		<?php if ( function_exists('yoast_breadcrumb') && (is_category() || is_singular()) )
			yoast_breadcrumb('<div class="container"><div id="breadcrumb">','</div></div>');
		?>
		
		<div class="container" role="document">
