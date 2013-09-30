<?php get_template_part('templates/head'); ?>

<div class="row">

	<div id="main" class="col-md-9" role="main">

		<div class="entry-header">
		  <h1>
		    <?php
		      if (is_home()) {
		        if (get_option('page_for_posts', true)) {
		          echo get_the_title(get_option('page_for_posts', true));
		        } else {
		          _e('Latest Posts', 'twoobl');
		        }
		      } elseif (is_archive()) {
		        $term = get_term_by('slug', get_query_var('term'), get_query_var('taxonomy'));
		        if ($term) {
		          echo $term->name;
		        } elseif (is_post_type_archive()) {
		          echo get_queried_object()->labels->name;
		        } elseif (is_day()) {
		          printf(__('Daily Archives: %s', 'twoobl'), get_the_date());
		        } elseif (is_month()) {
		          printf(__('Monthly Archives: %s', 'twoobl'), get_the_date('F Y'));
		        } elseif (is_year()) {
		          printf(__('Yearly Archives: %s', 'twoobl'), get_the_date('Y'));
		        } elseif (is_author()) {
		          global $post;
		          $author_id = $post->post_author;
		          printf(__('Author Archives: %s', 'twoobl'), get_the_author_meta('display_name', $author_id));
		        } else {
		          single_cat_title();
		        }
		      } elseif (is_search()) {
		        printf(__('Search Results for %s', 'twoobl'), get_search_query());
		      } elseif (is_404()) {
		        _e('File Not Found', 'twoobl');
		      } else {
		        the_title();
		      }
		    ?>
		  </h1>
		</div>

		<?php while (have_posts()) : the_post(); ?>
			<?php the_content(); ?>
			<?php wp_link_pages(array('before' => '<nav class="pagination">', 'after' => '</nav>')); ?>
		<?php endwhile; ?>
	</div>

	<?php get_template_part('templates/sidebar'); ?>
</div>

<?php get_template_part('templates/footer'); ?>
