<?php
if ( post_password_required() )
	return;
?>

<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<span class="title">
			<?php printf( _nx( 'One comment', '%1$s comments', get_comments_number(), 'comments number', 'twoobl' ),
				number_format_i18n( get_comments_number() )); ?>
		</span>

		<ol class="comment-list">
			<?php
				wp_list_comments( array(
					'style'       => 'ol',
					'short_ping'  => true,
					'avatar_size' => 55,
				) );
			?>
		</ol><!-- .comment-list -->

		<?php
			// Are there comments to navigate through?
			if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) :
		?>
		<nav class="navigation comment-navigation" role="navigation">
			<h1 class="screen-reader-text section-heading"><?php _e( 'Comment navigation', 'twoobl' ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', 'twoobl' ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', 'twoobl' ) ); ?></div>
		</nav><!-- .comment-navigation -->
		<?php endif; // Check for comment navigation ?>

		<?php if ( ! comments_open() && get_comments_number() ) : ?>
		<div class="alert alert-warning"><?php _e( 'Comments are closed.' , 'twoobl' ); ?></p>
		<?php endif; ?>

	<?php endif; // have_comments() ?>

	<?php if (comments_open()) : ?>
		<section id="respond">
			<span class="title"><?php comment_form_title(__('Leave a Reply', 'twoobl'), __('Leave a Reply to %s', 'twoobl')); ?></span>
			
			<p class="cancel-comment-reply"><?php cancel_comment_reply_link(); ?></p>
			
			<?php if (get_option('comment_registration') && !is_user_logged_in()) : ?>
				<p><?php printf(__('You must be <a href="%s">logged in</a> to post a comment.', 'twoobl'), wp_login_url(get_permalink())); ?></p>
			<?php else : ?>
				<form action="<?php echo get_option('siteurl'); ?>/wp-comments-post.php" method="post" id="commentform">
					<?php if (is_user_logged_in()) : ?>
						<p>
						<?php
						global $current_user;
						get_currentuserinfo();
						printf(__('Logged in as <a href="%s/wp-admin/profile.php">%s</a>.', 'twoobl'), get_option('siteurl'), $current_user->display_name); ?>
						<a href="<?php echo wp_logout_url(get_permalink()); ?>" title="<?php __('Log out of this account', 'twoobl'); ?>"><?php _e('Log out &raquo;', 'twoobl'); ?></a>
						</p>
					<?php else : ?>
						<div class="form-group">
							<label for="author"><?php _e('Name', 'twoobl'); if ($req) _e(' (required)', 'twoobl'); ?></label>
							<input type="text" class="form-control" name="author" id="author" value="<?php echo esc_attr($comment_author); ?>" size="22" <?php if ($req) echo 'aria-required="true"'; ?>>
						</div>
						<div class="form-group">
							<label for="email"><?php _e('Email (will not be published)', 'twoobl'); if ($req) _e(' (required)', 'twoobl'); ?></label>
							<input type="email" class="form-control" name="email" id="email" value="<?php echo esc_attr($comment_author_email); ?>" size="22" <?php if ($req) echo 'aria-required="true"'; ?>>
						</div>
						<div class="form-group">
							<label for="url"><?php _e('Website', 'twoobl'); ?></label>
							<input type="url" class="form-control" name="url" id="url" value="<?php echo esc_attr($comment_author_url); ?>" size="22">
						</div>
					<?php endif; ?>
					<div class="form-group">
						<label for="comment"><?php _e('Comment', 'twoobl'); ?></label>
						<textarea name="comment" id="comment" class="form-control" rows="5" aria-required="true"></textarea>
					</div>
					<p><input name="submit" class="btn btn-primary" type="submit" id="submit" value="<?php _e('Submit Comment', 'twoobl'); ?>"></p>
					<?php comment_id_fields(); ?>
					<?php do_action('comment_form', $post->ID); ?>
				</form>
			<?php endif; ?>
		</section><!-- /#respond -->
	<?php endif; ?>

</div><!-- #comments -->
