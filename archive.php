<?php 
/*
 * template hierarchy: http://codex.wordpress.org/images/1/18/Template_Hierarchy.png
 * 
 */ ?>

<?php get_header(); ?>

<div class="row">

	<div id="main" class="<?php echo _MAIN_CLASS_; ?>" role="main">
		
		<h1 class="title">
			<?php
	        $term = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy'));
	        if ($term) {
	          echo $term->name;
	        } elseif (is_post_type_archive()) {
	          echo get_queried_object()->labels->name;
	        } elseif (is_day()) {
	          printf(__('Daily archives: %s', 'twoobl'), get_the_date());
	        } elseif (is_month()) {
	          printf(__('Monthly archives: %s', 'twoobl'), get_the_date('F Y'));
	        } elseif (is_year()) {
	          printf(__('Yearly archives: %s', 'twoobl'), get_the_date('Y'));
	        } elseif (is_author()) {
	          global $post;
	          $author_id = $post->post_author;
	          printf(__('Author archives: %s', 'twoobl'), get_the_author_meta('display_name', $author_id));
	        } else {
	          single_cat_title();
	        } ?>
		</h1>
		
		<?php if (!have_posts()) : ?>
			<div class="alert">
				<?php _e('Sorry, nothing found.', 'twoobl'); ?>
			</div>
		<?php endif; ?>

		<?php while (have_posts()) : the_post(); ?>
			<?php get_template_part('templates/content'); ?>
		<?php endwhile; ?>

		<?php get_template_part('templates/pagination'); ?>
	</div>

	<?php get_template_part('templates/sidebar'); ?>
</div>

<?php get_footer(); ?>
