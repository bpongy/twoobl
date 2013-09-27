<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="utf-8">
	<title><?php wp_title('-', true, 'right'); ?></title>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<?php wp_head(); ?>
	<?php /*<link href='http://fonts.googleapis.com/css?family=Signika:600' rel='stylesheet' type='text/css'> */ ?>

	<!-- IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/html5shiv.js"></script>
	<script src="<?php echo get_template_directory_uri(); ?>/assets/js/respond.min.js"></script>
	<![endif]-->
</head>

<body <?php body_class(); ?>>
<?php $options = get_option('theme_options_'._ISOLANG_);
if( isset($options['google-analytics']) && $options['google-analytics']!='' ) { ?>
<script type="text/javascript">
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '<?php echo $options['google-analytics']; ?>']);
  _gaq.push(['_trackPageview']);
  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
</script>
<?php } ?>
<div id="playground">

	<header id="top" role="banner">
		<div class="container">
			
			<div class="row">

				<div id="header-logo" class="col-md-4">
					<a class="brand" href="<?php echo home_url('/'); ?>" title="<?php echo esc_attr(get_bloginfo('name')); ?>">
						<img src="<?php echo get_template_directory_uri(); ?>/assets/img/logo.png" alt="<?php echo esc_attr(get_bloginfo('name')); ?>" />
					</a>
				</div>

				<div id="site-desc" class="col-md-4"><?php echo esc_attr(get_bloginfo('description')); ?></div>
				
				<div id="search-top" class="col-md-4"><?php get_search_form(); ?></div>
			
			</div>

			<nav class="nav-main" role="navigation">
				<?php
				if( has_nav_menu('primary_navigation') )
					wp_nav_menu(array('theme_location' => 'primary_navigation', 'menu_class' => 'nav nav-pills'));
				?>
			</nav>

		</div>
	</header>
	
	<div id="wrap">
		<div class="container" role="document">
