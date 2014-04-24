<?php get_header(); ?>

<div class="row">

	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">
		<?php if (!have_posts()) : ?>
			<div class="alert">
				<?php _e('Sorry, nothing found.', 'twoobl'); ?>
			</div>
		<?php endif; ?>

		<?php while (have_posts()) : the_post(); ?>
			<?php get_template_part('templates/content'); ?>
		<?php endwhile; ?>

		<?php get_template_part('templates/pagination'); ?>
	</div>

	<?php get_template_part('templates/sidebar'); ?>
</div>

<?php get_footer(); ?>
