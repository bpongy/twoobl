<?php get_header(); ?>

<div class="row">

	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">

		<div class="entry-header main-header">
			<h1 class="title"><?php printf( __( 'Search Results for: %s', 'twoobl' ), get_search_query() ); ?></h1>
		</div>

		<?php if ( ! have_posts() ) : ?>
			<div class="alert">
				<?php _e( 'Sorry, nothing found.', 'twoobl' ); ?>
			</div>
		<?php endif; ?>

		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'templates/content' ); ?>
		<?php endwhile; ?>

		<?php get_template_part( 'templates/pagination' ); ?>
	</div>

	<?php get_sidebar(); ?>

</div>

<?php
get_footer();
