<?php
/*
Template Name: Large page
*/





/* TODO */




?>

<?php get_header(); ?>

<div id="main" role="main">

	<div class="entry-header">
	  <h1><?php the_title(); ?></h1>
	</div>

	<?php while (have_posts()) : the_post(); ?>
		<div class="entry-content clearfix">
			<?php the_content(); ?>
		</div>
		<?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
	<?php endwhile; ?>
</div>

<?php get_footer(); ?>

