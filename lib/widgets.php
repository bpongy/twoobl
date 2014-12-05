<?php

// utiliser les shortcodes dans les widgets
add_filter('widget_text', 'do_shortcode');


if( !function_exists( 'twoobl_widgets_init' ) ) {
	function twoobl_widgets_init() {
	
		register_sidebar(array(
			'name'          => __('Sidebar', 'twoobl'),
			'id'            => 'primary',
			'before_widget' => '<div id="%1$s" class="widget %2$s clearfix">',
			'before_title'  => '<span class="title">',
			'after_title'   => '</span>',
			'after_widget'  => '</div>'
		));
	
		register_sidebar(array(
			'name'          => __('Footer', 'twoobl'),
			'id'            => 'footer',
			'before_widget' => '<div id="%1$s" class="widget %2$s clearfix">',
			'before_title'  => '<span class="title">',
			'after_title'   => '</span>',
			'after_widget'  => '</div>'
		));
	
		if( defined( '_MOBILE_NAV_' ) && _MOBILE_NAV_ )
			register_sidebar(array(
				'name'          => __('Mobile menu', 'twoobl'),
				'id'            => 'mobile_menu',
				'before_widget' => '<div id="%1$s" class="widget %2$s clearfix">',
				'before_title'  => '<span class="title">',
				'after_title'   => '</span>',
				'after_widget'  => '</div>'
			));
	
		// Register widget, pour register des nouveaux widgets
		register_widget('TextClass');
	
		//on suppr les widgets par défaut qui servent à rien
		unregister_widget('WP_Widget_Meta');
		unregister_widget('WP_Widget_Tag_Cloud');
		unregister_widget('WP_Widget_Calendar');
		unregister_widget('WP_Widget_RSS');
		unregister_widget('WP_Widget_Search');
	}
}
add_action('widgets_init', 'twoobl_widgets_init');



// TODO : check dans un child theme pour surcharge

class TextClass extends WP_Widget {

	function __construct() {
		$widget_ops = array('classname' => 'widget_textclass', 'description' => __('Arbitrary text or HTML with custom class', 'twoobl'));
		$control_ops = array('width' => 400, 'height' => 350);
		parent::__construct('TextClass', __('Text with class', 'twoobl'), $widget_ops, $control_ops);
	}

	function widget( $args, $instance ) {
		extract($args);
		$title = apply_filters( 'widget_title', empty( $instance['title'] ) ? '' : $instance['title'], $instance, $this->id_base );
		$text = apply_filters( 'widget_text', empty( $instance['text'] ) ? '' : $instance['text'], $instance );
		$class = $instance['class'];
		$before_widget = str_replace($this->widget_options['classname'], $this->widget_options['classname'].' '.$class, $before_widget);
		echo $before_widget;
		if ( !empty( $title ) ) { echo $before_title . $title . $after_title; } ?>
			<div class="textwidget"><?php echo !empty( $instance['filter'] ) ? wpautop( $text ) : $text; ?></div>
		<?php
		echo $after_widget;
	}

	function update( $new_instance, $old_instance ) {
		$instance = $old_instance;
		$instance['title'] = strip_tags($new_instance['title']);
		if ( current_user_can('unfiltered_html') )
			$instance['text'] =  $new_instance['text'];
		else
			$instance['text'] = stripslashes( wp_filter_post_kses( addslashes($new_instance['text']) ) ); // wp_filter_post_kses() expects slashed
		$instance['class'] = strip_tags( $new_instance['class'] );
		$instance['filter'] = isset($new_instance['filter']);
		return $instance;
	}

	function form( $instance ) {
		$instance = wp_parse_args( (array) $instance, array( 'title' => '', 'text' => '', 'class' => '' ) );
		$title = strip_tags($instance['title']);
		$text = esc_textarea($instance['text']);
        $class = format_to_edit($instance['class']);
		
		$classes = array('facebook', 'twitter', 'about', 'love', 'info', 'warning', 'team', 'misc');
		?>
		<p><label for="<?php echo $this->get_field_id('title'); ?>"><?php _e('Title:', 'twoobl'); ?></label>
		<input class="widefat" id="<?php echo $this->get_field_id('title'); ?>" name="<?php echo $this->get_field_name('title'); ?>" type="text" value="<?php echo esc_attr($title); ?>" /></p>

		<textarea class="widefat" rows="16" cols="20" id="<?php echo $this->get_field_id('text'); ?>" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea>

		<p>
			<label for="<?php echo $this->get_field_id('class'); ?>"><?php _e('Custom class', 'twoobl'); ?>&nbsp;:</label>
			<select name="<?php echo $this->get_field_name('class'); ?>" id="<?php echo $this->get_field_id('class'); ?>" class="widefat">
				<?php foreach( $classes as $c ) {
					echo '<option value="'.$c.'"';
					if( $class==$c ) echo ' selected="selected"';
					echo '>'.$c.'</option>';
				}?>
			</select>
		</p>

		<p><input id="<?php echo $this->get_field_id('filter'); ?>" name="<?php echo $this->get_field_name('filter'); ?>" type="checkbox" <?php checked(isset($instance['filter']) ? $instance['filter'] : 0); ?> />&nbsp;<label for="<?php echo $this->get_field_id('filter'); ?>"><?php _e('Automatically add paragraphs', 'twoobl'); ?></label></p>
	<?php
	}
}


