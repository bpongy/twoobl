<?php
if ( post_password_required() )
	return;

if ( !comments_open() && !get_comments_number() )
	return;
?>

<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<span class="title h4">
			<?php comments_number( __('no response', _TWOOBL_DOMAIN_LANG_), __('one response', _TWOOBL_DOMAIN_LANG_), __('% responses', _TWOOBL_DOMAIN_LANG_) ); ?>
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
			<h1 class="screen-reader-text section-heading"><?php _e( 'Comment navigation', _TWOOBL_DOMAIN_LANG_ ); ?></h1>
			<div class="nav-previous"><?php previous_comments_link( __( '&larr; Older Comments', _TWOOBL_DOMAIN_LANG_ ) ); ?></div>
			<div class="nav-next"><?php next_comments_link( __( 'Newer Comments &rarr;', _TWOOBL_DOMAIN_LANG_ ) ); ?></div>
		</nav><!-- .comment-navigation -->
		<?php endif; // Check for comment navigation ?>

		<?php if ( ! comments_open() && get_comments_number() ) : ?>
		<div class="alert alert-warning"><?php _e( 'Comments are closed.' , _TWOOBL_DOMAIN_LANG_ ); ?></div>
		<?php endif; ?>

	<?php endif; // have_comments() ?>

	<?php
	comment_form(array(
		'title_reply_before'   => '<span id="reply-title" class="title h4">',
		'title_reply_after'    => '</span>',
		'class_submit' => 'btn btn-primary'
	));
	?>

</div><!-- #comments -->
