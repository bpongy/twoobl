<?php get_header(); ?>

<div class="row">
	
	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">
		
		<?php if (!have_posts()) : ?>
			<div class="alert">
				<?php _e('Sorry, no results were found.', 'twoobl'); ?>
			</div>
		<?php endif; ?>
		
		<?php while (have_posts()) : the_post(); ?>
			<article <?php post_class('hentry h-entry'); ?> itemscope itemtype="http://schema.org/Article">
				<header class="entry-header">
					<h1 class="title entry-title p-name" itemprop="name"><?php the_title(); ?></h1>
					<?php get_template_part('templates/meta'); ?>
				</header>
				<div class="entry-content clearfix e-content" itemprop="articleBody">
					<?php the_content(); ?>
				</div>
				<footer>
					<?php wp_link_pages(array('before' => '<nav class="page-nav"><p>' . __('Pages:', 'twoobl'), 'after' => '</p></nav>')); ?>
					<?php the_tags('<div class="entry-tags"><ul><li>','</li><li>','</li></ul></div>'); ?>
				</footer>
				<?php comments_template(); ?>
			</article>
		<?php endwhile; ?>
		
		<?php echo get_twoobl_prevnext(); ?>

	</div>
	
	<?php get_template_part('templates/sidebar'); ?>
</div>

<?php get_footer(); ?>
