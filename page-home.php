<?php
/*
Template Name: Homepage
*/
?>

<?php get_header(); ?>

<div id="main" role="main">
	<div class="entry-header">
	  <h1 class="title"><?php the_title(); ?></h1>
	</div>
	<?php while (have_posts()) : the_post(); ?>
		<div class="entry-content clearfix">
			<?php the_content(); ?>
		</div>
	<?php endwhile; ?>
</div>

<?php get_footer(); ?>

















