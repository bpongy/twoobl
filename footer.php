		</div>
	</div>

	<footer id="colophon" role="contentinfo">
		<div class="container">
			<?php dynamic_sidebar('footer'); ?>
		</div>
	</footer>

	<?php
	if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ ) {
		echo '<div id="navmob">';
		dynamic_sidebar('mobile_menu');
		echo '</div>';
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
