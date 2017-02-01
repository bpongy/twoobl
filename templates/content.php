<article <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">
	<header class="entry-header">
		<h2 class="title h2"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
		<?php get_template_part('templates/meta'); ?>
	</header>
	<?php
	if ( has_post_thumbnail() ) {
		echo '<a class="thumb" href="'.get_the_permalink().'">';
		the_post_thumbnail('large');
		echo '</a>';
	}
	?>
	<div class="entry-content clearfix">
		<?php the_excerpt(); ?>
	</div>
	<footer>
		<?php the_tags('<div class="entry-tags"><ul><li>','</li><li>','</li></ul></div>'); ?>
	</footer>
</article>
