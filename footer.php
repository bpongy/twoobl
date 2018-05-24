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
		echo '<span class="visible-xs-inline label label-danger">xs</span>';
		echo '<span class="visible-sm-inline label label-danger">sm</span>';
		echo '<span class="visible-md-inline label label-danger">md</span>';
		echo '<span class="visible-lg-inline label label-danger">lg</span>';
		echo '</div>';
	}
	?>

</div>

</body>
</html>
