<?php get_header(); ?>

<div class="row">
	
	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">

		<?php while (have_posts()) : the_post(); ?>
			<article <?php post_class('entry'); ?>>
				<header class="entry-header main-header">
					<h1 class="title"><?php the_title(); ?></h1>
					<?php get_template_part('templates/meta'); ?>
				</header>
				<div class="entry-content clearfix">
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
	
	<?php get_sidebar(); ?>
</div>

<?php
get_footer();
