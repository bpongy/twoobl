<?php
if (function_exists('wp_pagenavi')) {
	// WP-PageNavi plugin : https://wordpress.org/plugins/wp-pagenavi/
	wp_pagenavi();
} elseif ($wp_query->max_num_pages > 1) { ?>
<nav class="post-pagination">
	<ul class="pager">
		<li><?php next_posts_link(__('&larr; Older posts', 'twoobl')); ?></li>
		<li><?php previous_posts_link(__('Newer posts &rarr;', 'twoobl')); ?></li>
	</ul>
</nav>
<?php
}
