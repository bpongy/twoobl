<form role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
	<label class="sr-only" for="s">Search for:</label>
	<div class="input-group">
		<input type="text" class="form-control" value="<?php if (is_search()) { echo get_search_query(); } ?>" name="s" id="s" placeholder="<?php _e('Search', 'twoobl'); ?>" />
		<span class="input-group-btn">
			<button type="submit" id="searchsubmit" class="btn btn-default"><?php _e('OK', 'twoobl'); ?></button>
		</span>
	</div>
</form>
