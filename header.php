<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="playground">

	<div id="mobile-top" class="d-block d-sm-none">
		<div class="container">
			<div class="row">
				<?php
				if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ )
					echo '<div class="col-xs"><div id="btn-mobile-menu"><span><span></span></span></div></div>';
				?>
				<div id="mob-title" class="col-xs text-right">
					<a href="<?php echo home_url('/'); ?>" title="<?php echo esc_attr(get_bloginfo('name')); ?>">
						<?php
						echo get_bloginfo('name');
						?>
					</a>
				</div>
			</div>
		</div>
	</div>

	<header id="top" role="banner">
		<div class="container">

			<div class="row align-items-center">

				<div id="header-logo" class="col-md-3">
					<a class="brand" href="<?php echo home_url('/'); ?>" title="<?php echo esc_attr(get_bloginfo('name')); ?>">
						<img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/img/logo.png" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
					</a>
				</div>

				<div id="site-desc" class="col-md">
					<p>
					<?php echo get_bloginfo('description'); ?>
					</p>
				</div>
				
				<div id="search-top" class="col-md d-print-none"><?php get_search_form(); ?></div>
			
			</div>

		</div>

		<nav id="nav-main" role="navigation"<?php if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ ) echo ' class="d-none d-md-block"';?>>
			<div class="container">
				<?php
				if( has_nav_menu('primary_nav') )
					wp_nav_menu(array('theme_location' => 'primary_nav', 'container' => false, 'menu_class' => ''));
				?>
			</div>
		</nav>

	</header>
	
	<div id="wrap">
		
		<?php
		if( function_exists('yoast_breadcrumb') && !is_front_page() )
		{
			yoast_breadcrumb('<div id="breadcrumb-wrap" class="container hidden-xs">', '</div>');
		}
		?>
		
		<div class="container" role="document">
