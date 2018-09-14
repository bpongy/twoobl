<?php
if ( post_password_required() )
	return;

if ( !comments_open() && !get_comments_number() )
	return;
?>

<section id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<span class="title h4">
			<?php comments_number( __('no response', 'twoobl'), __('one response', 'twoobl'), __('% responses', 'twoobl') ); ?>
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

		<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
				<?php the_comments_navigation(); ?>
		<?php endif; // Check for comment navigation ?>

		<?php if ( ! comments_open() && get_comments_number() ) : ?>
		<div class="alert alert-warning"><?php _e( 'Comments are closed.' , 'twoobl' ); ?></div>
		<?php endif; ?>

	<?php endif; // have_comments() ?>

	<?php
	comment_form(array(
		'title_reply_before'   => '<span id="reply-title" class="title h4">',
		'title_reply_after'    => '</span>',
		'class_submit' => 'btn btn-primary'
	));
	?>

</section><!-- #comments -->
