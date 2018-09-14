
	<?php
	if ( ! function_exists( 'elementor_theme_do_location' ) || ! elementor_theme_do_location( 'footer' ) ) {
		get_template_part( 'template-parts/footer' );
	}
	?>

	<?php wp_footer(); ?>

	<?php
	if( defined('_TWOOBL_DEV_') && _TWOOBL_DEV_ && current_user_can('activate_plugins') ) {
		echo '<div class="debug-twoobl debug-bottom">';
		echo '<span class="d-block d-sm-none badge badge-warning">xs</span>';
		echo '<span class="d-none d-sm-block d-md-none badge badge-warning">sm</span>';
		echo '<span class="d-none d-md-block d-lg-none badge badge-warning">md</span>';
		echo '<span class="d-none d-lg-block d-xl-none badge badge-warning">lg</span>';
		echo '<span class="d-none d-xl-block badge badge-warning">xl</span>';
		echo '</div>';
	}
	?>

</div>

</body>
</html>
