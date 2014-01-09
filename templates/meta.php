<div class="meta">
	<span class="byline author vcard"><?php echo __('By', 'twoobl'); ?> <a href="<?php echo get_author_posts_url(get_the_author_meta('ID')); ?>" rel="author" class="fn"><?php echo get_the_author(); ?></a></span>
	- <time itemprop="datePublished" content="<?php echo get_the_time('Y-m-d'); ?>" class="updated" datetime="<?php echo get_the_time('c'); ?>" pubdate><?php echo get_the_date(); ?></time>
	- <a href="<?php comments_link(); ?>"><?php comments_number( __('no response', 'twoobl'), __('one response', 'twoobl'), __('% responses', 'twoobl') ); ?></a>
</div>