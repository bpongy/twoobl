<form role="search" class="form-inline" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
	<label class="hidden" for="s">Search for:</label>
	<div class="form-group"><input type="text" class="form-control" value="<?php if (is_search()) { echo get_search_query(); } ?>" name="s" id="s" placeholder="<?php _e('Search', 'twoobl'); ?> <?php bloginfo('name'); ?>" /></div>
	<button type="submit" id="searchsubmit" class="btn btn-default"><?php _e('OK', 'twoobl'); ?></button>
</form>
