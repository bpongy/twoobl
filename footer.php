		</div>
	</div>

	<footer id="colophon" role="contentinfo">
		<div class="container">
			<?php dynamic_sidebar('footer'); ?>
		</div>
	</footer>

</div>
<?php
if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ ) {
	echo '<div id="navmob" class="sb-slidebar sb-left">';
	dynamic_sidebar('mobile_menu');
	echo '</div>';
}
?>
<?php wp_footer(); ?>
</body>
</html>
