<?php
if ( !defined( 'ABSPATH' ) ) {
	exit;
}
?>
<header id="site-header" class="site-header" role="banner">
	<div class="container">

		<div class="row align-items-center">

			<div id="header-logo">
				<a class="brand" href="<?php echo home_url('/'); ?>" title="<?php echo esc_attr(get_bloginfo('name')); ?>">
					<img src="<?php echo get_stylesheet_directory_uri(); ?>/dist/img/logo.png" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
				</a>
			</div>

			<div id="site-desc">
				<p>
					<?php echo get_bloginfo('description'); ?>
				</p>
			</div>

		</div>

	</div>

	<nav id="nav-main" role="navigation">
		<div class="container">
			<?php
			if( has_nav_menu('primary_nav') )
				wp_nav_menu(array('theme_location' => 'primary_nav', 'container' => false, 'menu_class' => ''));
			?>
		</div>
	</nav>

</header>
