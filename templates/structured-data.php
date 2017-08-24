<?php



// TODO
// suppr esc_attr : tout remplacer par json_encode:
// json_encode($data, JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT)



$publisher = '"publisher": {
    "@type": "Organization",
    "name": "'.esc_attr(get_bloginfo('name')).'",
    "logo": {
      "@type": "ImageObject",
      "url": "'.get_stylesheet_directory_uri().'/assets/img/default.png"
    }';

if (is_single()) :
	$post_author_id = get_post_field( 'post_author', get_the_ID() );
	if (has_post_thumbnail()) {
		$thumb_data = wp_get_attachment_image_src( get_post_thumbnail_id(), 'large' );
		$thumb = '"image": {
		    "@type": "ImageObject",
		    "url": "'.$thumb_data[0].'",
		    "height": '.$thumb_data[2].',
		    "width": '.$thumb_data[1].'
		  }';
	}
	else {
		$thumb = '"image": {
		    "@type": "ImageObject",
		    "url": "'.get_stylesheet_directory_uri().'/assets/img/default.png",
		    "height": 800,
		    "width": 800
		  }';
	}
	?>
	<script type="application/ld+json">
	{
	  "@context": "http://schema.org",
	  "@type": "NewsArticle",
	  "mainEntityOfPage": {
	    "@type": "WebPage",
	    "@id": "<?php the_permalink(); ?>"
	  },
	  "headline": "<?php echo esc_attr(get_the_title()); ?>",
	  <?php echo $thumb ? $thumb.',' : ''; ?>
	  "datePublished": "<?php echo get_the_time('c'); ?>",
	  "dateModified": "<?php echo get_the_modified_date('c'); ?>",
	  "author": {
	    "@type": "Person",
	    "name": "<?php echo esc_attr(get_the_author_meta( 'user_nicename', $post_author_id )); ?>"
	  }
	  <?php echo $publisher ? ','.$publisher : ''; ?>
	  }
	}
	</script>
	<?php
endif;
