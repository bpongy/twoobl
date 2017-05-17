<?php get_header(); ?>

<div class="row">

	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">

		<div class="entry-header">
			<h1 class="title"><?php the_title(); ?></h1>
		</div>

		<div class="entry-content clearfix">
			<?php woocommerce_content(); ?>
		</div>

	</div>

	<?php get_template_part('templates/sidebar'); ?>

</div>

<?php
get_footer();
