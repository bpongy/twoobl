<?php
/*
Template Name: Large page
*/





/* TODO */




?>

<?php get_header(); ?>

<div class="row">
	
	<div id="main" class="col-xs-12" role="main">
	
		<div class="entry-header">
		  <h1 class="title"><?php the_title(); ?></h1>
		</div>
	
		<?php while (have_posts()) : the_post(); ?>
			<div class="entry-content clearfix">
				<?php the_content(); ?>
			</div>
			<?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
			<?php comments_template(); ?>
		<?php endwhile; ?>
	</div>

</div>

<?php get_footer(); ?>

















