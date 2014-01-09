<?php get_template_part('templates/head'); ?>

<div class="row">
	
	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">
		<?php if (!have_posts()) : ?>
			<div class="alert">
				<?php _e('Sorry, no results were found.', 'twoobl'); ?>
			</div>
		<?php endif; ?>
		
		<?php while (have_posts()) : the_post(); ?>
			<article <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">
				<header class="entry-header">
					<h1 class="title entry-title" itemprop="name"><?php the_title(); ?></h1>
					<?php get_template_part('templates/meta'); ?>
				</header>
				<div class="entry-content clearfix" itemprop="articleBody">
					<?php the_content(); ?>
				</div>
				<footer>
					<?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'twoobl'), 'after' => '</p></nav>')); ?>
					<?php the_tags('<ul class="entry-tags"><li>','</li><li>','</li></ul>'); ?>
				</footer>
				<?php comments_template(); ?>
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
