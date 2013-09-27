<?php

// add the admin options page
add_action('admin_init', 'twoobl_options_init' );
add_action('admin_menu', 'twoobl_options_add_page');

// Init plugin options to white list our options
function twoobl_options_init(){
	register_setting( 'twoobl_options_options', 'theme_options_'._ISOLANG_, 'twoobl_options_validate' );
}

// Add menu page
function twoobl_options_add_page() {
	add_options_page(__('Theme Options', 'twoobl'), __('Theme Options', 'twoobl'), 'manage_options', 'twoobl_options', 'twoobl_options_do_page');
}

// Draw the menu page itself
function twoobl_options_do_page() {
	?>
	<div class="wrap">
		<?php screen_icon('options-general'); ?><h2><?php _e('Theme Options', 'twoobl'); ?></h2>
		<form method="post" action="options.php">
			<?php settings_fields('twoobl_options_options'); ?>
			<?php $options = get_option('theme_options_'._ISOLANG_); ?>
			<table class="form-table">

				<tr valign="top"><th scope="row"><?php _e('Google Analytics', 'twoobl'); ?></th>
					<td><input name="theme_options_<?php echo _ISOLANG_; ?>[google-analytics]" type="text" placeholder="UA-YOURCODE" value="<?php (isset($options['google-analytics']) ? esc_attr_e($options['google-analytics']) : ''); ?>" /></td>
				</tr>

				<?php /*
				<tr valign="top"><th scope="row"><?php _e('A Checkbox', 'twoobl'); ?></th>
					<td><input name="theme_options_<?php echo _ISOLANG_; ?>[option1]" type="checkbox" value="1" <?php checked('1', $options['option1']); ?> /></td>
				</tr>

				<tr valign="top"><th scope="row"><?php _e('Some text', 'twoobl'); ?></th>
					<td><input type="text" name="theme_options_<?php echo _ISOLANG_; ?>[sometext]" value="<?php echo (isset($options['sometext']) ? esc_html($options['sometext']) : ''); ?>" /></td>
				</tr>
				*/ ?>

			</table>



			<h3 class="title"><?php _e('Social networks', 'twoobl'); ?></h3>
			<table class="form-table">

				<tr valign="top"><th scope="row"><?php _e('Facebook fanpage', 'twoobl'); ?></th>
					<td><code>https://www.facebook.com/</code><input class="code" name="theme_options_<?php echo _ISOLANG_; ?>[facebook-url]" type="text" placeholder="yourpage" value="<?php (isset($options['facebook-url']) ? esc_attr_e($options['facebook-url']) : ''); ?>" /></td>
				</tr>

				<tr valign="top"><th scope="row"><?php _e('Twitter username', 'twoobl'); ?></th>
					<td><code>https://twitter.com/</code><input class="code" name="theme_options_<?php echo _ISOLANG_; ?>[twitter-username]" type="text" placeholder="username" value="<?php (isset($options['twitter-username']) ? esc_attr_e($options['twitter-username']) : ''); ?>" /></td>
				</tr>

			</table>
			




			<h3 class="title"><?php _e('Custom zones', 'twoobl'); ?></h3>
			<table class="form-table">

				<tr valign="top"><th scope="row"><?php _e('404 page', 'twoobl'); ?></th>
					<td>
						<?php wp_editor($options['error404'], 'theme_options_'._ISOLANG_.'[error404]', array( 'media_buttons' => true )); ?>
					</td>
				</tr>

			</table>
			
			
			<p class="submit">
			<input type="submit" class="button-primary" value="<?php _e('Save Changes', 'twoobl') ?>" />
			</p>
		</form>
	</div>
	<?php	
}

// Sanitize and validate input. Accepts an array, return a sanitized array.
function twoobl_options_validate($input) {
	// Our first value is either 0 or 1
	//$input['option1'] = ( $input['option1'] == 1 ? 1 : 0 );
	
	// Say our second option must be safe text with no HTML tags
	//$input['sometext'] =  wp_filter_nohtml_kses($input['sometext']);
	
	return $input;
}
