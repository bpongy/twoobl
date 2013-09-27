<?php
/*
Template Name: Naked page
*/
?>

<h1><?php the_title(); ?></h1>

<div>

	<?php while (have_posts()) : the_post(); ?>
		<?php the_content(); ?>
	<?php endwhile; ?>

</div>
