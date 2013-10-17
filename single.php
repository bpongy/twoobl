<?php get_template_part('templates/head'); ?>

<div class="row">
	
	<div id="main" class="col-sm-9" role="main">
		<?php if (!have_posts()) : ?>
			<div class="alert">
				<?php _e('Sorry, no results were found.', 'twoobl'); ?>
			</div>
		<?php endif; ?>
		
		<?php while (have_posts()) : the_post(); ?>
			<article <?php post_class(); ?>>
				<header class="entry-header">
					<h1><?php the_title(); ?></h1>
					<?php get_template_part('templates/entry-meta'); ?>
				</header>
				<div class="entry-content clearfix">
					<?php the_content(); ?>
				</div>
				<footer>
					<?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'twoobl'), 'after' => '</p></nav>')); ?>
					<?php the_tags('<ul class="entry-tags"><li>','</li><li>','</li></ul>'); ?>
				</footer>
				<?php get_template_part('comments'); ?>
			</article>
		<?php endwhile; ?>
		
		<?php if ($wp_query->max_num_pages > 1) : ?>
		<nav class="post-nav">
			<ul class="pager">
				<li class="previous"><?php next_posts_link(__('&larr; Older posts', 'twoobl')); ?></li>
				<li class="next"><?php previous_posts_link(__('Newer posts &rarr;', 'twoobl')); ?></li>
			</ul>
		</nav>
		<?php endif; ?>
	</div>
	
	<?php get_template_part('templates/sidebar'); ?>
</div>

<?php get_template_part('templates/footer'); ?>
