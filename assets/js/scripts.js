// ==================================================
// fancyBox v3.1.20
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2017 fancyApps
//
// ==================================================
;(function (window, document, $, undefined) {
	'use strict';

	// If there's no jQuery, fancyBox can't work
	// =========================================

	if ( !$ ) {
		return;
	}

	// Check if fancyBox is already initialized
	// ========================================

	if ( $.fn.fancybox ) {

		$.error('fancyBox already initialized');

		return;
	}

	// Private default settings
	// ========================

	var defaults = {

		// Enable infinite gallery navigation
		loop : false,

		// Space around image, ignored if zoomed-in or viewport smaller than 800px
		margin : [44, 0],

		// Horizontal space between slides
		gutter : 50,

		// Enable keyboard navigation
		keyboard : true,

		// Should display navigation arrows at the screen edges
		arrows : true,

		// Should display infobar (counter and arrows at the top)
		infobar : false,

		// Should display toolbar (buttons at the top)
		toolbar : true,

		// What buttons should appear in the top right corner.
		// Buttons will be created using templates from `btnTpl` option
		// and they will be placed into toolbar (class="fancybox-toolbar"` element)
		buttons : [
			'slideShow',
			'fullScreen',
			'thumbs',
			'close'
		],

		// Detect "idle" time in seconds
		idleTime : 4,

		// Should display buttons at top right corner of the content
		// If 'auto' - they will be created for content having type 'html', 'inline' or 'ajax'
		// Use template from `btnTpl.smallBtn` for customization
		smallBtn : 'auto',

		// Disable right-click and use simple image protection for images
		protect : false,

		// Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
		modal : false,

		image : {

			// Wait for images to load before displaying
			// Requires predefined image dimensions
			// If 'auto' - will zoom in thumbnail if 'width' and 'height' attributes are found
			preload : "auto",

		},

		ajax : {

			// Object containing settings for ajax request
			settings : {

				// This helps to indicate that request comes from the modal
				// Feel free to change naming
				data : {
					fancybox : true
				}
			}

		},

		iframe : {

			// Iframe template
			tpl : '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',

			// Preload iframe before displaying it
			// This allows to calculate iframe content width and height
			// (note: Due to "Same Origin Policy", you can't get cross domain data).
			preload : true,

			// Custom CSS styling for iframe wrapping element
			// You can use this to set custom iframe dimensions
			css : {},

			// Iframe tag attributes
			attr : {
				scrolling : 'auto'
			}

		},

		// Open/close animation type
		// Possible values:
		//   false            - disable
		//   "zoom"           - zoom images from/to thumbnail
		//   "fade"
		//   "zoom-in-out"
		//
		animationEffect : "zoom",

		// Duration in ms for open/close animation
		animationDuration : 366,

		// Should image change opacity while zooming
		// If opacity is 'auto', then opacity will be changed if image and thumbnail have different aspect ratios
		zoomOpacity : 'auto',

		// Transition effect between slides
		//
		// Possible values:
		//   false            - disable
		//   "fade'
		//   "slide'
		//   "circular'
		//   "tube'
		//   "zoom-in-out'
		//   "rotate'
		//
		transitionEffect : "fade",

		// Duration in ms for transition animation
		transitionDuration : 366,

		// Custom CSS class for slide element
		slideClass : '',

		// Custom CSS class for layout
		baseClass : '',

		// Base template for layout
		baseTpl	:
		'<div class="fancybox-container" role="dialog" tabindex="-1">' +
		'<div class="fancybox-bg"></div>' +
		'<div class="fancybox-inner">' +
		'<div class="fancybox-infobar">' +
		'<button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button>' +
		'<div class="fancybox-infobar__body">' +
		'<span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span>' +
		'</div>' +
		'<button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button>' +
		'</div>' +
		'<div class="fancybox-toolbar">' +
		'{{BUTTONS}}' +
		'</div>' +
		'<div class="fancybox-navigation">' +
		'<button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" />' +
		'<button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" />' +
		'</div>' +
		'<div class="fancybox-stage"></div>' +
		'<div class="fancybox-caption-wrap">' +
		'<div class="fancybox-caption"></div>' +
		'</div>' +
		'</div>' +
		'</div>',

		// Loading indicator template
		spinnerTpl : '<div class="fancybox-loading"></div>',

		// Error message template
		errorTpl : '<div class="fancybox-error"><p>{{ERROR}}<p></div>',

		btnTpl : {
			slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
			fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
			thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
			close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

			// This small close button will be appended to your html/inline/ajax content by default,
			// if "smallBtn" option is not set to false
			smallBtn   : '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
		},

		// Container is injected into this element
		parentEl : 'body',


		// Focus handling
		// ==============

		// Try to focus on the first focusable element after opening
		autoFocus : true,

		// Put focus back to active element after closing
		backFocus : true,

		// Do not let user to focus on element outside modal content
		trapFocus : true,


		// Module specific options
		// =======================

		fullScreen : {
			autoStart : false,
		},

		touch : {
			vertical : true,  // Allow to drag content vertically
			momentum : true   // Continue movement after releasing mouse/touch when panning
		},

		// Hash value when initializing manually,
		// set `false` to disable hash change
		hash : null,

		// Customize or add new media types
		// Example:
		/*
		media : {
			youtube : {
				params : {
					autoplay : 0
				}
			}
		}
		*/
		media : {},

		slideShow : {
			autoStart : false,
			speed     : 4000
		},

		thumbs : {
			autoStart   : false,   // Display thumbnails on opening
			hideOnClose : true     // Hide thumbnail grid when closing animation starts
		},

		// Callbacks
		//==========

		// See Documentation/API/Events for more information
		// Example:
		/*
			afterShow: function( instance, current ) {
				 console.info( 'Clicked element:' );
				 console.info( current.opts.$orig );
			}
		*/

		onInit       : $.noop,  // When instance has been initialized

		beforeLoad   : $.noop,  // Before the content of a slide is being loaded
		afterLoad    : $.noop,  // When the content of a slide is done loading

		beforeShow   : $.noop,  // Before open animation starts
		afterShow    : $.noop,  // When content is done loading and animating

		beforeClose  : $.noop,  // Before the instance attempts to close. Return false to cancel the close.
		afterClose   : $.noop,  // After instance has been closed

		onActivate   : $.noop,  // When instance is brought to front
		onDeactivate : $.noop,  // When other instance has been activated


		// Interaction
		// ===========

		// Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
		// each option can be string or method that returns value.
		//
		// Possible values:
		//   "close"           - close instance
		//   "next"            - move to next gallery item
		//   "nextOrClose"     - move to next gallery item or close if gallery has only one item
		//   "toggleControls"  - show/hide controls
		//   "zoom"            - zoom image (if loaded)
		//   false             - do nothing

		// Clicked on the content
		clickContent : function( current, event ) {
			return current.type === 'image' ? 'zoom' : false;
		},

		// Clicked on the slide
		clickSlide : 'close',

		// Clicked on the background (backdrop) element
		clickOutside : 'close',

		// Same as previous two, but for double click
		dblclickContent : false,
		dblclickSlide   : false,
		dblclickOutside : false,


		// Custom options when mobile device is detected
		// =============================================

		mobile : {
			clickContent : function( current, event ) {
				return current.type === 'image' ? 'toggleControls' : false;
			},
			clickSlide : function( current, event ) {
				return current.type === 'image' ? 'toggleControls' : "close";
			},
			dblclickContent : function( current, event ) {
				return current.type === 'image' ? 'zoom' : false;
			},
			dblclickSlide : function( current, event ) {
				return current.type === 'image' ? 'zoom' : false;
			}
		},


		// Internationalization
		// ============

		lang : 'en',
		i18n : {
			'en' : {
				CLOSE       : 'Close',
				NEXT        : 'Next',
				PREV        : 'Previous',
				ERROR       : 'The requested content cannot be loaded. <br/> Please try again later.',
				PLAY_START  : 'Start slideshow',
				PLAY_STOP   : 'Pause slideshow',
				FULL_SCREEN : 'Full screen',
				THUMBS      : 'Thumbnails'
			},
			'de' : {
				CLOSE       : 'Schliessen',
				NEXT        : 'Weiter',
				PREV        : 'Zurück',
				ERROR       : 'Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.',
				PLAY_START  : 'Diaschau starten',
				PLAY_STOP   : 'Diaschau beenden',
				FULL_SCREEN : 'Vollbild',
				THUMBS      : 'Vorschaubilder'
			}
		}

	};

	// Few useful variables and methods
	// ================================

	var $W = $(window);
	var $D = $(document);

	var called = 0;


	// Check if an object is a jQuery object and not a native JavaScript object
	// ========================================================================

	var isQuery = function ( obj ) {
		return obj && obj.hasOwnProperty && obj instanceof $;
	};


	// Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
	// ===============================================================================

	var requestAFrame = (function () {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			// if all else fails, use setTimeout
			function (callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();


	// Detect the supported transition-end event property name
	// =======================================================

	var transitionEnd = (function () {
		var t, el = document.createElement("fakeelement");

		var transitions = {
			"transition"      : "transitionend",
			"OTransition"     : "oTransitionEnd",
			"MozTransition"   : "transitionend",
			"WebkitTransition": "webkitTransitionEnd"
		};

		for (t in transitions) {
			if (el.style[t] !== undefined){
				return transitions[t];
			}
		}
	})();


	// Force redraw on an element.
	// This helps in cases where the browser doesn't redraw an updated element properly.
	// =================================================================================

	var forceRedraw = function( $el ) {
		return ( $el && $el.length && $el[0].offsetHeight );
	};


	// Class definition
	// ================

	var FancyBox = function( content, opts, index ) {
		var self = this;

		self.opts  = $.extend( true, { index : index }, defaults, opts || {} );

		// Exclude buttons option from deep merging
		if ( opts && $.isArray( opts.buttons ) ) {
			self.opts.buttons = opts.buttons;
		}

		self.id    = self.opts.id || ++called;
		self.group = [];

		self.currIndex = parseInt( self.opts.index, 10 ) || 0;
		self.prevIndex = null;

		self.prevPos = null;
		self.currPos = 0;

		self.firstRun = null;

		// Create group elements from original item collection
		self.createGroup( content );

		if ( !self.group.length ) {
			return;
		}

		// Save last active element and current scroll position
		self.$lastFocus = $(document.activeElement).blur();

		// Collection of gallery objects
		self.slides = {};

		self.init( content );

	};

	$.extend(FancyBox.prototype, {

		// Create DOM structure
		// ====================

		init : function() {
			var self = this;

			var testWidth, $container, buttonStr;

			var firstItemOpts = self.group[ self.currIndex ].opts;

			self.scrollTop  = $D.scrollTop();
			self.scrollLeft = $D.scrollLeft();


			// Hide scrollbars
			// ===============

			if ( !$.fancybox.getInstance() && !$.fancybox.isMobile && $( 'body' ).css('overflow') !== 'hidden' ) {
				testWidth = $( 'body' ).width();

				$( 'html' ).addClass( 'fancybox-enabled' );

				// Compare body width after applying "overflow: hidden"
				testWidth = $( 'body' ).width() - testWidth;

				// If width has changed - compensate missing scrollbars by adding right margin
				if ( testWidth > 1 ) {
					$( 'head' ).append( '<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + testWidth + 'px; }</style>' );
				}
			}


			// Build html markup and set references
			// ====================================

			// Build html code for buttons and insert into main template
			buttonStr = '';

			$.each( firstItemOpts.buttons, function( index, value ) {
				buttonStr += ( firstItemOpts.btnTpl[ value ] || '' );
			});

			// Create markup from base template, it will be initially hidden to
			// avoid unnecessary work like painting while initializing is not complete
			$container = $( self.translate( self, firstItemOpts.baseTpl.replace( '\{\{BUTTONS\}\}', buttonStr ) ) )
				.addClass( 'fancybox-is-hidden' )
				.attr('id', 'fancybox-container-' + self.id)
				.addClass( firstItemOpts.baseClass )
				.data( 'FancyBox', self )
				.prependTo( firstItemOpts.parentEl );

			// Create object holding references to jQuery wrapped nodes
			self.$refs = {
				container : $container
			};

			[ 'bg', 'inner', 'infobar', 'toolbar', 'stage', 'caption' ].forEach(function(item) {
				self.$refs[ item ] = $container.find( '.fancybox-' + item );
			});

			// Check for redundant elements
			if ( !firstItemOpts.arrows || self.group.length < 2 ) {
				$container.find('.fancybox-navigation').remove();
			}

			if ( !firstItemOpts.infobar ) {
				self.$refs.infobar.remove();
			}

			if ( !firstItemOpts.toolbar ) {
				self.$refs.toolbar.remove();
			}

			self.trigger( 'onInit' );

			// Bring to front and enable events
			self.activate();

			// Build slides, load and reveal content
			self.jumpTo( self.currIndex );
		},


		// Simple i18n support - replaces object keys found in template
		// with corresponding values
		// ============================================================

		translate : function( obj, str ) {
			var arr = obj.opts.i18n[ obj.opts.lang ];

			return str.replace(/\{\{(\w+)\}\}/g, function(match, n) {
				var value = arr[n];

				if ( value === undefined ) {
					return match;
				}

				return value;
			});
		},

		// Create array of gally item objects
		// Check if each object has valid type and content
		// ===============================================

		createGroup : function ( content ) {
			var self  = this;
			var items = $.makeArray( content );

			$.each(items, function( i, item ) {
				var obj  = {},
					opts = {},
					data = [],
					$item,
					type,
					src,
					srcParts;

				// Step 1 - Make sure we have an object
				// ====================================

				if ( $.isPlainObject( item ) ) {

					// We probably have manual usage here, something like
					// $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

					obj  = item;
					opts = item.opts || item;

				} else if ( $.type( item ) === 'object' && $( item ).length ) {

					// Here we propbably have jQuery collection returned by some selector

					$item = $( item );
					data  = $item.data();

					opts = 'options' in data ? data.options : {};
					opts = $.type( opts ) === 'object' ? opts : {};

					obj.src  = 'src' in data ? data.src : ( opts.src || $item.attr( 'href' ) );

					[ 'width', 'height', 'thumb', 'type', 'filter' ].forEach(function(item) {
						if ( item in data ) {
							opts[ item ] = data[ item ];
						}
					});

					if ( 'srcset' in data ) {
						opts.image = { srcset : data.srcset };
					}

					opts.$orig = $item;

					if ( !obj.type && !obj.src ) {
						obj.type = 'inline';
						obj.src  = item;
					}

				} else {

					// Assume we have a simple html code, for example:
					// $.fancybox.open( '<div><h1>Hi!</h1></div>' );

					obj = {
						type : 'html',
						src  : item + ''
					};

				}

				// Each gallery object has full collection of options
				obj.opts = $.extend( true, {}, self.opts, opts );

				if ( $.fancybox.isMobile ) {
					obj.opts = $.extend( true, {}, obj.opts, obj.opts.mobile );
				}


				// Step 2 - Make sure we have content type, if not - try to guess
				// ==============================================================

				type = obj.type || obj.opts.type;
				src  = obj.src || '';

				if ( !type && src ) {
					if ( src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ) {
						type = 'image';

					} else if ( src.match(/\.(pdf)((\?|#).*)?$/i) ) {
						type = 'pdf';

					} else if ( src.charAt(0) === '#' ) {
						type = 'inline';
					}
				}

				obj.type = type;


				// Step 3 - Some adjustments
				// =========================

				obj.index = self.group.length;

				// Check if $orig and $thumb objects exist
				if ( obj.opts.$orig && !obj.opts.$orig.length ) {
					delete obj.opts.$orig;
				}

				if ( !obj.opts.$thumb && obj.opts.$orig ) {
					obj.opts.$thumb = obj.opts.$orig.find( 'img:first' );
				}

				if ( obj.opts.$thumb && !obj.opts.$thumb.length ) {
					delete obj.opts.$thumb;
				}

				// Caption is a "special" option, it can be passed as a method
				if ( $.type( obj.opts.caption ) === 'function' ) {
					obj.opts.caption = obj.opts.caption.apply( item, [ self, obj ] );

				} else if ( 'caption' in data ) {
					obj.opts.caption = data.caption;
				}

				// Make sure we have caption as a string
				obj.opts.caption = obj.opts.caption === undefined ? '' : obj.opts.caption + '';

				// Check if url contains "filter" used to filter the content
				// Example: "ajax.html #something"
				if ( type === 'ajax' ) {
					srcParts = src.split(/\s+/, 2);

					if ( srcParts.length > 1 ) {
						obj.src = srcParts.shift();

						obj.opts.filter = srcParts.shift();
					}
				}

				if ( obj.opts.smallBtn == 'auto' ) {

					if ( $.inArray( type, ['html', 'inline', 'ajax'] ) > -1 ) {
						obj.opts.toolbar  = false;
						obj.opts.smallBtn = true;

					} else {
						obj.opts.smallBtn = false;
					}

				}

				// If the type is "pdf", then simply load file into iframe
				if ( type === 'pdf' ) {
					obj.type = 'iframe';

					obj.opts.iframe.preload = false;
				}

				// Hide all buttons and disable interactivity for modal items
				if ( obj.opts.modal ) {

					obj.opts = $.extend(true, obj.opts, {
						// Remove buttons
						infobar : 0,
						toolbar : 0,

						smallBtn : 0,

						// Disable keyboard navigation
						keyboard : 0,

						// Disable some modules
						slideShow  : 0,
						fullScreen : 0,
						thumbs     : 0,
						touch      : 0,

						// Disable click event handlers
						clickContent    : false,
						clickSlide      : false,
						clickOutside    : false,
						dblclickContent : false,
						dblclickSlide   : false,
						dblclickOutside : false
					});

				}

				// Step 4 - Add processed object to group
				// ======================================

				self.group.push( obj );

			});

		},


		// Attach an event handler functions for:
		//   - navigation buttons
		//   - browser scrolling, resizing;
		//   - focusing
		//   - keyboard
		//   - detect idle
		// ======================================

		addEvents : function() {
			var self = this;

			self.removeEvents();

			// Make navigation elements clickable
			self.$refs.container.on('click.fb-close', '[data-fancybox-close]', function(e) {
				e.stopPropagation();
				e.preventDefault();

				self.close( e );

			}).on( 'click.fb-prev touchend.fb-prev', '[data-fancybox-prev]', function(e) {
				e.stopPropagation();
				e.preventDefault();

				self.previous();

			}).on( 'click.fb-next touchend.fb-next', '[data-fancybox-next]', function(e) {
				e.stopPropagation();
				e.preventDefault();

				self.next();

			});


			// Handle page scrolling and browser resizing
			$W.on('orientationchange.fb resize.fb', function(e) {

				if ( e && e.originalEvent && e.originalEvent.type === "resize" ) {

					requestAFrame(function() {
						self.update();
					});

				} else {

					self.$refs.stage.hide();

					setTimeout(function() {
						self.$refs.stage.show();

						self.update();
					}, 500);

				}

			});

			// Trap keyboard focus inside of the modal, so the user does not accidentally tab outside of the modal
			// (a.k.a. "escaping the modal")
			$D.on('focusin.fb', function(e) {
				var instance = $.fancybox ? $.fancybox.getInstance() : null;

				if ( instance.isClosing || !instance.current || !instance.current.opts.trapFocus || $( e.target ).hasClass( 'fancybox-container' ) || $( e.target ).is( document ) ) {
					return;
				}

				if ( instance && $( e.target ).css( 'position' ) !== 'fixed' && !instance.$refs.container.has( e.target ).length ) {
					e.stopPropagation();

					instance.focus();

					// Sometimes page gets scrolled, set it back
					$W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );
				}
			});


			// Enable keyboard navigation
			$D.on('keydown.fb', function (e) {
				var current = self.current,
					keycode = e.keyCode || e.which;

				if ( !current || !current.opts.keyboard ) {
					return;
				}

				if ( $(e.target).is('input') || $(e.target).is('textarea') ) {
					return;
				}

				// Backspace and Esc keys
				if ( keycode === 8 || keycode === 27 ) {
					e.preventDefault();

					self.close( e );

					return;
				}

				// Left arrow and Up arrow
				if ( keycode === 37 || keycode === 38 ) {
					e.preventDefault();

					self.previous();

					return;
				}

				// Righ arrow and Down arrow
				if ( keycode === 39 || keycode === 40 ) {
					e.preventDefault();

					self.next();

					return;
				}

				self.trigger('afterKeydown', e, keycode);
			});


			// Hide controls after some inactivity period
			if ( self.group[ self.currIndex ].opts.idleTime ) {
				self.idleSecondsCounter = 0;

				$D.on('mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle', function() {
					self.idleSecondsCounter = 0;

					if ( self.isIdle ) {
						self.showControls();
					}

					self.isIdle = false;
				});

				self.idleInterval = window.setInterval(function() {

					self.idleSecondsCounter++;

					if ( self.idleSecondsCounter >= self.group[ self.currIndex ].opts.idleTime ) {
						self.isIdle = true;
						self.idleSecondsCounter = 0;

						self.hideControls();
					}

				}, 1000);
			}

		},


		// Remove events added by the core
		// ===============================

		removeEvents : function () {
			var self = this;

			$W.off( 'orientationchange.fb resize.fb' );
			$D.off( 'focusin.fb keydown.fb .fb-idle' );

			this.$refs.container.off( '.fb-close .fb-prev .fb-next' );

			if ( self.idleInterval ) {
				window.clearInterval( self.idleInterval );

				self.idleInterval = null;
			}
		},


		// Change to previous gallery item
		// ===============================

		previous : function( duration ) {
			return this.jumpTo( this.currPos - 1, duration );
		},


		// Change to next gallery item
		// ===========================

		next : function( duration ) {
			return this.jumpTo( this.currPos + 1, duration );
		},


		// Switch to selected gallery item
		// ===============================

		jumpTo : function ( pos, duration, slide ) {
			var self = this,
				firstRun,
				loop,
				current,
				previous,
				canvasWidth,
				currentPos,
				transitionProps;

			var groupLen = self.group.length;

			if ( self.isSliding || self.isClosing || ( self.isAnimating && self.firstRun ) ) {
				return;
			}

			pos  = parseInt( pos, 10 );
			loop = self.current ? self.current.opts.loop : self.opts.loop;

			if ( !loop && ( pos < 0 || pos >= groupLen ) ) {
				return false;
			}

			firstRun = self.firstRun = ( self.firstRun === null );

			if ( groupLen < 2 && !firstRun && !!self.isSliding ) {
				return;
			}

			previous = self.current;

			self.prevIndex = self.currIndex;
			self.prevPos   = self.currPos;

			// Create slides
			current = self.createSlide( pos );

			if ( groupLen > 1 ) {
				if ( loop || current.index > 0 ) {
					self.createSlide( pos - 1 );
				}

				if ( loop || current.index < groupLen - 1 ) {
					self.createSlide( pos + 1 );
				}
			}

			self.current   = current;
			self.currIndex = current.index;
			self.currPos   = current.pos;

			self.trigger( 'beforeShow', firstRun );

			self.updateControls();

			currentPos = $.fancybox.getTranslate( current.$slide );

			current.isMoved        = ( currentPos.left !== 0 || currentPos.top !== 0 ) && !current.$slide.hasClass( 'fancybox-animated' );
			current.forcedDuration = undefined;

			if ( $.isNumeric( duration ) ) {
				current.forcedDuration = duration;
			} else {
				duration = current.opts[ firstRun ? 'animationDuration' : 'transitionDuration' ];
			}

			duration = parseInt( duration, 10 );

			// Fresh start - reveal container, current slide and start loading content
			if ( firstRun ) {

				if ( current.opts.animationEffect && duration ) {
					self.$refs.container.css( 'transition-duration', duration + 'ms' );
				}

				self.$refs.container.removeClass( 'fancybox-is-hidden' );

				forceRedraw( self.$refs.container );

				self.$refs.container.addClass( 'fancybox-is-open' );

				// Make first slide visible (to display loading icon, if needed)
				current.$slide.addClass( 'fancybox-slide--current' );

				self.loadSlide( current );

				self.preload();

				return;
			}

			// Clean up
			$.each(self.slides, function( index, slide ) {
				$.fancybox.stop( slide.$slide );
			});

			// Make current that slide is visible even if content is still loading
			current.$slide.removeClass( 'fancybox-slide--next fancybox-slide--previous' ).addClass( 'fancybox-slide--current' );

			// If slides have been dragged, animate them to correct position
			if ( current.isMoved ) {
				canvasWidth = Math.round( current.$slide.width() );

				$.each(self.slides, function( index, slide ) {
					var pos = slide.pos - current.pos;

					$.fancybox.animate( slide.$slide, {
						top  : 0,
						left : ( pos * canvasWidth ) + ( pos * slide.opts.gutter )
					}, duration, function() {

						slide.$slide.removeAttr('style').removeClass( 'fancybox-slide--next fancybox-slide--previous' );

						if ( slide.pos === self.currPos ) {
							current.isMoved = false;

							self.complete();
						}
					});
				});

			} else {
				self.$refs.stage.children().removeAttr( 'style' );
			}

			// Start transition that reveals current content
			// or wait when it will be loaded

			if ( current.isLoaded ) {
				self.revealContent( current );

			} else {
				self.loadSlide( current );
			}

			self.preload();

			if ( previous.pos === current.pos ) {
				return;
			}

			// Handle previous slide
			// =====================

			transitionProps = 'fancybox-slide--' + ( previous.pos > current.pos ? 'next' : 'previous' );

			previous.$slide.removeClass( 'fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous' );

			previous.isComplete = false;

			if ( !duration || ( !current.isMoved && !current.opts.transitionEffect ) ) {
				return;
			}

			if ( current.isMoved ) {
				previous.$slide.addClass( transitionProps );

			} else {

				transitionProps = 'fancybox-animated ' + transitionProps + ' fancybox-fx-' + current.opts.transitionEffect;

				$.fancybox.animate( previous.$slide, transitionProps, duration, function() {
					previous.$slide.removeClass( transitionProps ).removeAttr( 'style' );
				});

			}

		},


		// Create new "slide" element
		// These are gallery items  that are actually added to DOM
		// =======================================================

		createSlide : function( pos ) {

			var self = this;
			var $slide;
			var index;

			index = pos % self.group.length;
			index = index < 0 ? self.group.length + index : index;

			if ( !self.slides[ pos ] && self.group[ index ] ) {
				$slide = $('<div class="fancybox-slide"></div>').appendTo( self.$refs.stage );

				self.slides[ pos ] = $.extend( true, {}, self.group[ index ], {
					pos      : pos,
					$slide   : $slide,
					isLoaded : false,
				});

				self.updateSlide( self.slides[ pos ] );
			}

			return self.slides[ pos ];
		},


		// Scale image to the actual size of the image
		// ===========================================

		scaleToActual : function( x, y, duration ) {

			var self = this;

			var current = self.current;
			var $what   = current.$content;

			var imgPos, posX, posY, scaleX, scaleY;

			var canvasWidth  = parseInt( current.$slide.width(), 10 );
			var canvasHeight = parseInt( current.$slide.height(), 10 );

			var newImgWidth  = current.width;
			var newImgHeight = current.height;

			if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating) {
				return;
			}

			$.fancybox.stop( $what );

			self.isAnimating = true;

			x = x === undefined ? canvasWidth  * 0.5  : x;
			y = y === undefined ? canvasHeight * 0.5  : y;

			imgPos = $.fancybox.getTranslate( $what );

			scaleX  = newImgWidth  / imgPos.width;
			scaleY  = newImgHeight / imgPos.height;

			// Get center position for original image
			posX = ( canvasWidth * 0.5  - newImgWidth * 0.5 );
			posY = ( canvasHeight * 0.5 - newImgHeight * 0.5 );

			// Make sure image does not move away from edges
			if ( newImgWidth > canvasWidth ) {
				posX = imgPos.left * scaleX - ( ( x * scaleX ) - x );

				if ( posX > 0 ) {
					posX = 0;
				}

				if ( posX <  canvasWidth - newImgWidth ) {
					posX = canvasWidth - newImgWidth;
				}
			}

			if ( newImgHeight > canvasHeight) {
				posY = imgPos.top  * scaleY - ( ( y * scaleY ) - y );

				if ( posY > 0 ) {
					posY = 0;
				}

				if ( posY <  canvasHeight - newImgHeight ) {
					posY = canvasHeight - newImgHeight;
				}
			}

			self.updateCursor( newImgWidth, newImgHeight );

			$.fancybox.animate( $what, {
				top    : posY,
				left   : posX,
				scaleX : scaleX,
				scaleY : scaleY
			}, duration || 330, function() {
				self.isAnimating = false;
			});

			// Stop slideshow
			if ( self.SlideShow && self.SlideShow.isActive ) {
				self.SlideShow.stop();
			}
		},


		// Scale image to fit inside parent element
		// ========================================

		scaleToFit : function( duration ) {

			var self = this;

			var current = self.current;
			var $what   = current.$content;
			var end;

			if ( !( current.type == 'image' && !current.hasError) || !$what || self.isAnimating ) {
				return;
			}

			$.fancybox.stop( $what );

			self.isAnimating = true;

			end = self.getFitPos( current );

			self.updateCursor( end.width, end.height );

			$.fancybox.animate( $what, {
				top    : end.top,
				left   : end.left,
				scaleX : end.width  / $what.width(),
				scaleY : end.height / $what.height()
			}, duration || 330, function() {
				self.isAnimating = false;
			});

		},

		// Calculate image size to fit inside viewport
		// ===========================================

		getFitPos : function( slide ) {
			var self  = this;
			var $what = slide.$content;

			var imgWidth  = slide.width;
			var imgHeight = slide.height;

			var margin = slide.opts.margin;

			var canvasWidth, canvasHeight, minRatio, width, height;

			if ( !$what || !$what.length || ( !imgWidth && !imgHeight) ) {
				return false;
			}

			// Convert "margin to CSS style: [ top, right, bottom, left ]
			if ( $.type( margin ) === "number" ) {
				margin = [ margin, margin ];
			}

			if ( margin.length == 2 ) {
				margin = [ margin[0], margin[1], margin[0], margin[1] ];
			}

			if ( $W.width() < 800 ) {
				margin = [ 0, 0, 0, 0 ];
			}

			// We can not use $slide width here, because it can have different diemensions while in transiton
			canvasWidth  = parseInt( self.$refs.stage.width(), 10 )  - ( margin[ 1 ] + margin[ 3 ] );
			canvasHeight = parseInt( self.$refs.stage.height(), 10 ) - ( margin[ 0 ] + margin[ 2 ] );

			minRatio = Math.min(1, canvasWidth / imgWidth, canvasHeight / imgHeight );

			width  = Math.floor( minRatio * imgWidth );
			height = Math.floor( minRatio * imgHeight );

			// Use floor rounding to make sure it really fits
			return {
				top    : Math.floor( ( canvasHeight - height ) * 0.5 ) + margin[ 0 ],
				left   : Math.floor( ( canvasWidth  - width )  * 0.5 ) + margin[ 3 ],
				width  : width,
				height : height
			};

		},


		// Update position and content of all slides
		// =========================================

		update : function() {

			var self = this;

			$.each( self.slides, function( key, slide ) {
				self.updateSlide( slide );
			});

		},


		// Update slide position and scale content to fit
		// ==============================================

		updateSlide : function( slide ) {

			var self  = this;
			var $what = slide.$content;

			if ( $what && ( slide.width || slide.height ) ) {
				$.fancybox.stop( $what );

				$.fancybox.setTranslate( $what, self.getFitPos( slide ) );

				if ( slide.pos === self.currPos ) {
					self.updateCursor();
				}
			}

			slide.$slide.trigger( 'refresh' );

			self.trigger( 'onUpdate', slide );

		},

		// Update cursor style depending if content can be zoomed
		// ======================================================

		updateCursor : function( nextWidth, nextHeight ) {

			var self = this;
			var isScaledDown;

			var $container = self.$refs.container.removeClass('fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut');

			if ( !self.current || self.isClosing ) {
				return;
			}

			if ( self.isZoomable() ) {

				$container.addClass( 'fancybox-is-zoomable' );

				if ( nextWidth !== undefined && nextHeight !== undefined ) {
					isScaledDown = nextWidth < self.current.width && nextHeight < self.current.height;

				} else {
					isScaledDown = self.isScaledDown();
				}

				if ( isScaledDown ) {

					// If image is scaled down, then, obviously, it can be zoomed to full size
					$container.addClass('fancybox-can-zoomIn');

				} else {

					if ( self.current.opts.touch ) {

						// If image size ir largen than available available and touch module is not disable,
						// then user can do panning
						$container.addClass('fancybox-can-drag');

					} else {
						$container.addClass('fancybox-can-zoomOut');
					}

				}

			} else if ( self.current.opts.touch ) {
				$container.addClass('fancybox-can-drag');
			}

		},


		// Check if current slide is zoomable
		// ==================================

		isZoomable : function() {

			var self = this;

			var current = self.current;
			var fitPos;

			if ( !current || self.isClosing ) {
				return;
			}

			// Assume that slide is zoomable if
			//   - image is loaded successfuly
			//   - click action is "zoom"
			//   - actual size of the image is smaller than available area
			if ( current.type === 'image' && current.isLoaded && !current.hasError &&
				( current.opts.clickContent === 'zoom' || ( $.isFunction( current.opts.clickContent ) && current.opts.clickContent( current ) ===  "zoom" ) )
			) {

				fitPos = self.getFitPos( current );

				if ( current.width > fitPos.width || current.height > fitPos.height ) {
					return true;
				}

			}

			return false;

		},


		// Check if current image dimensions are smaller than actual
		// =========================================================

		isScaledDown : function() {

			var self = this;

			var current = self.current;
			var $what   = current.$content;

			var rez = false;

			if ( $what ) {
				rez = $.fancybox.getTranslate( $what );
				rez = rez.width < current.width || rez.height < current.height;
			}

			return rez;

		},


		// Check if image dimensions exceed parent element
		// ===============================================

		canPan : function() {

			var self = this;

			var current = self.current;
			var $what   = current.$content;

			var rez = false;

			if ( $what ) {
				rez = self.getFitPos( current );
				rez = Math.abs( $what.width() - rez.width ) > 1  || Math.abs( $what.height() - rez.height ) > 1;

			}

			return rez;

		},


		// Load content into the slide
		// ===========================

		loadSlide : function( slide ) {

			var self = this, type, $slide;
			var ajaxLoad;

			if ( slide.isLoading ) {
				return;
			}

			if ( slide.isLoaded ) {
				return;
			}

			slide.isLoading = true;

			self.trigger( 'beforeLoad', slide );

			type   = slide.type;
			$slide = slide.$slide;

			$slide
				.off( 'refresh' )
				.trigger( 'onReset' )
				.addClass( 'fancybox-slide--' + ( type || 'unknown' ) )
				.addClass( slide.opts.slideClass );

			// Create content depending on the type

			switch ( type ) {

				case 'image':

					self.setImage( slide );

					break;

				case 'iframe':

					self.setIframe( slide );

					break;

				case 'html':

					self.setContent( slide, slide.src || slide.content );

					break;

				case 'inline':

					if ( $( slide.src ).length ) {
						self.setContent( slide, $( slide.src ) );

					} else {
						self.setError( slide );
					}

					break;

				case 'ajax':

					self.showLoading( slide );

					ajaxLoad = $.ajax( $.extend( {}, slide.opts.ajax.settings, {
						url : slide.src,
						success : function ( data, textStatus ) {

							if ( textStatus === 'success' ) {
								self.setContent( slide, data );
							}

						},
						error : function ( jqXHR, textStatus ) {

							if ( jqXHR && textStatus !== 'abort' ) {
								self.setError( slide );
							}

						}
					}));

					$slide.one( 'onReset', function () {
						ajaxLoad.abort();
					});

					break;

				default:

					self.setError( slide );

					break;

			}

			return true;

		},


		// Use thumbnail image, if possible
		// ================================

		setImage : function( slide ) {

			var self   = this;
			var srcset = slide.opts.image.srcset;

			var found, temp, pxRatio, windowWidth;

			// If we have "srcset", then we need to find matching "src" value.
			// This is necessary, because when you set an src attribute, the browser will preload the image
			// before any javascript or even CSS is applied.
			if ( srcset ) {
				pxRatio     = window.devicePixelRatio || 1;
				windowWidth = window.innerWidth  * pxRatio;

				temp = srcset.split(',').map(function ( el ) {
					var ret = {};

					el.trim().split(/\s+/).forEach(function ( el, i ) {
						var value = parseInt( el.substring(0, el.length - 1), 10 );

						if ( i === 0 ) {
							return ( ret.url = el );
						}

						if ( value ) {
							ret.value   = value;
							ret.postfix = el[ el.length - 1 ];
						}

					});

					return ret;
				});

				// Sort by value
				temp.sort(function (a, b) {
					return a.value - b.value;
				});

				// Ok, now we have an array of all srcset values
				for ( var j = 0; j < temp.length; j++ ) {
					var el = temp[ j ];

					if ( ( el.postfix === 'w' && el.value >= windowWidth ) || ( el.postfix === 'x' && el.value >= pxRatio ) ) {
						found = el;
						break;
					}
				}

				// If not found, take the last one
				if ( !found && temp.length ) {
					found = temp[ temp.length - 1 ];
				}

				if ( found ) {
					slide.src = found.url;

					// If we have default width/height values, we can calculate height for matching source
					if ( slide.width && slide.height && found.postfix == 'w' ) {
						slide.height = ( slide.width / slide.height ) * found.value;
						slide.width  = found.value;
					}
				}
			}

			// This will be wrapper containing both ghost and actual image
			slide.$content = $('<div class="fancybox-image-wrap"></div>')
				.addClass( 'fancybox-is-hidden' )
				.appendTo( slide.$slide );


			// If we have a thumbnail, we can display it while actual image is loading
			// Users will not stare at black screen and actual image will appear gradually
			if ( slide.opts.preload !== false && slide.opts.width && slide.opts.height && ( slide.opts.thumb || slide.opts.$thumb ) ) {

				slide.width  = slide.opts.width;
				slide.height = slide.opts.height;

				slide.$ghost = $('<img />')
					.one('error', function() {

						$(this).remove();

						slide.$ghost = null;

						self.setBigImage( slide );

					})
					.one('load', function() {

						self.afterLoad( slide );

						self.setBigImage( slide );

					})
					.addClass( 'fancybox-image' )
					.appendTo( slide.$content )
					.attr( 'src', slide.opts.thumb || slide.opts.$thumb.attr( 'src' ) );

			} else {

				self.setBigImage( slide );

			}

		},


		// Create full-size image
		// ======================

		setBigImage : function ( slide ) {
			var self = this;
			var $img = $('<img />');

			slide.$image = $img
				.one('error', function() {

					self.setError( slide );

				})
				.one('load', function() {

					// Clear timeout that checks if loading icon needs to be displayed
					clearTimeout( slide.timouts );

					slide.timouts = null;

					if ( self.isClosing ) {
						return;
					}

					slide.width  = this.naturalWidth;
					slide.height = this.naturalHeight;

					if ( slide.opts.image.srcset ) {
						$img.attr( 'sizes', '100vw' ).attr( 'srcset', slide.opts.image.srcset );
					}

					self.hideLoading( slide );

					if ( slide.$ghost ) {

						slide.timouts = setTimeout(function() {
							slide.timouts = null;

							slide.$ghost.hide();

						}, Math.min( 300, Math.max( 1000, slide.height / 1600 ) ) );

					} else {
						self.afterLoad( slide );
					}

				})
				.addClass( 'fancybox-image' )
				.attr('src', slide.src)
				.appendTo( slide.$content );

			if ( $img[0].complete ) {
				$img.trigger( 'load' );

			} else if( $img[0].error ) {
				$img.trigger( 'error' );

			} else {

				slide.timouts = setTimeout(function() {
					if ( !$img[0].complete && !slide.hasError ) {
						self.showLoading( slide );
					}

				}, 100);

			}

		},


		// Create iframe wrapper, iframe and bindings
		// ==========================================

		setIframe : function( slide ) {
			var self	= this,
				opts    = slide.opts.iframe,
				$slide	= slide.$slide,
				$iframe;

			slide.$content = $('<div class="fancybox-content' + ( opts.preload ? ' fancybox-is-hidden' : '' ) + '"></div>')
				.css( opts.css )
				.appendTo( $slide );

			$iframe = $( opts.tpl.replace(/\{rnd\}/g, new Date().getTime()) )
				.attr( opts.attr )
				.appendTo( slide.$content );

			if ( opts.preload ) {

				self.showLoading( slide );

				// Unfortunately, it is not always possible to determine if iframe is successfully loaded
				// (due to browser security policy)

				$iframe.on('load.fb error.fb', function(e) {
					this.isReady = 1;

					slide.$slide.trigger( 'refresh' );

					self.afterLoad( slide );
				});

				// Recalculate iframe content size
				// ===============================

				$slide.on('refresh.fb', function() {
					var $wrap = slide.$content,
						$contents,
						$body,
						scrollWidth,
						frameWidth,
						frameHeight;

					if ( $iframe[0].isReady !== 1 ) {
						return;
					}

					// Check if content is accessible,
					// it will fail if frame is not with the same origin

					try {
						$contents = $iframe.contents();
						$body     = $contents.find('body');

					} catch (ignore) {}

					// Calculate dimensions for the wrapper
					if ( $body && $body.length && !( opts.css.width !== undefined && opts.css.height !== undefined ) ) {

						scrollWidth = $iframe[0].contentWindow.document.documentElement.scrollWidth;

						frameWidth	= Math.ceil( $body.outerWidth(true) + ( $wrap.width() - scrollWidth ) );
						frameHeight	= Math.ceil( $body.outerHeight(true) );

						// Resize wrapper to fit iframe content
						$wrap.css({
							'width'  : opts.css.width  === undefined ? frameWidth  + ( $wrap.outerWidth()  - $wrap.innerWidth() )  : opts.css.width,
							'height' : opts.css.height === undefined ? frameHeight + ( $wrap.outerHeight() - $wrap.innerHeight() ) : opts.css.height
						});

					}

					$wrap.removeClass( 'fancybox-is-hidden' );

				});

			} else {

				this.afterLoad( slide );

			}

			$iframe.attr( 'src', slide.src );

			if ( slide.opts.smallBtn === true ) {
				slide.$content.prepend( self.translate( slide, slide.opts.btnTpl.smallBtn ) );
			}

			// Remove iframe if closing or changing gallery item
			$slide.one( 'onReset', function () {

				// This helps IE not to throw errors when closing
				try {

					$( this ).find( 'iframe' ).hide().attr( 'src', '//about:blank' );

				} catch ( ignore ) {}

				$( this ).empty();

				slide.isLoaded = false;

			});

		},


		// Wrap and append content to the slide
		// ======================================

		setContent : function ( slide, content ) {

			var self = this;

			if ( self.isClosing ) {
				return;
			}

			self.hideLoading( slide );

			slide.$slide.empty();

			if ( isQuery( content ) && content.parent().length ) {

				// If content is a jQuery object, then it will be moved to the slide.
				// The placeholder is created so we will know where to put it back.
				// If user is navigating gallery fast, then the content might be already inside fancyBox
				// =====================================================================================

				// Make sure content is not already moved to fancyBox
				content.parent( '.fancybox-slide--inline' ).trigger( 'onReset' );

				// Create temporary element marking original place of the content
				slide.$placeholder = $( '<div></div>' ).hide().insertAfter( content );

				// Make sure content is visible
				content.css('display', 'inline-block');

			} else if ( !slide.hasError ) {

				// If content is just a plain text, try to convert it to html
				if ( $.type( content ) === 'string' ) {
					content = $('<div>').append( $.trim( content ) ).contents();

					// If we have text node, then add wrapping element to make vertical alignment work
					if ( content[0].nodeType === 3 ) {
						content = $('<div>').html( content );
					}
				}

				// If "filter" option is provided, then filter content
				if ( slide.opts.filter ) {
					content = $('<div>').html( content ).find( slide.opts.filter );
				}

			}

			slide.$slide.one('onReset', function () {

				// Put content back
				if ( slide.$placeholder ) {
					slide.$placeholder.after( content.hide() ).remove();

					slide.$placeholder = null;
				}

				// Remove custom close button
				if ( slide.$smallBtn ) {
					slide.$smallBtn.remove();

					slide.$smallBtn = null;
				}

				// Remove content and mark slide as not loaded
				if ( !slide.hasError ) {
					$(this).empty();

					slide.isLoaded = false;
				}

			});

			slide.$content = $( content ).appendTo( slide.$slide );

			if ( slide.opts.smallBtn && !slide.$smallBtn ) {
				slide.$smallBtn = $( self.translate( slide, slide.opts.btnTpl.smallBtn ) ).appendTo( slide.$content );
			}

			this.afterLoad( slide );
		},

		// Display error message
		// =====================

		setError : function ( slide ) {

			slide.hasError = true;

			slide.$slide.removeClass( 'fancybox-slide--' + slide.type );

			this.setContent( slide, this.translate( slide, slide.opts.errorTpl ) );

		},


		// Show loading icon inside the slide
		// ==================================

		showLoading : function( slide ) {

			var self = this;

			slide = slide || self.current;

			if ( slide && !slide.$spinner ) {
				slide.$spinner = $( self.opts.spinnerTpl ).appendTo( slide.$slide );
			}

		},

		// Remove loading icon from the slide
		// ==================================

		hideLoading : function( slide ) {

			var self = this;

			slide = slide || self.current;

			if ( slide && slide.$spinner ) {
				slide.$spinner.remove();

				delete slide.$spinner;
			}

		},


		// Adjustments after slide content has been loaded
		// ===============================================

		afterLoad : function( slide ) {

			var self = this;

			if ( self.isClosing ) {
				return;
			}

			slide.isLoading = false;
			slide.isLoaded  = true;

			self.trigger( 'afterLoad', slide );

			self.hideLoading( slide );

			if ( slide.opts.protect && slide.$content && !slide.hasError ) {

				// Disable right click
				slide.$content.on( 'contextmenu.fb', function( e ) {
					if ( e.button == 2 ) {
						e.preventDefault();
					}

					return true;
				});

				// Add fake element on top of the image
				// This makes a bit harder for user to select image
				if ( slide.type === 'image' ) {
					$( '<div class="fancybox-spaceball"></div>' ).appendTo( slide.$content );
				}

			}

			self.revealContent( slide );

		},


		// Make content visible
		// This method is called right after content has been loaded or
		// user navigates gallery and transition should start
		// ============================================================

		revealContent : function( slide ) {

			var self   = this;
			var $slide = slide.$slide;

			var effect, effectClassName, duration, opacity, end, start = false;

			effect   = slide.opts[ self.firstRun ? 'animationEffect'   : 'transitionEffect' ];
			duration = slide.opts[ self.firstRun ? 'animationDuration' : 'transitionDuration' ];

			duration = parseInt( slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10 );

			if ( slide.isMoved || slide.pos !== self.currPos || !duration ) {
				effect = false;
			}

			// Check if can zoom
			if ( effect === 'zoom' && !( slide.pos === self.currPos && duration && slide.type === 'image' && !slide.hasError && ( start = self.getThumbPos( slide ) ) ) ) {
				effect = 'fade';
			}


			// Zoom animation
			// ==============

			if ( effect === 'zoom' ) {
				end = self.getFitPos( slide );

				end.scaleX = Math.round( (end.width  / start.width)  * 100 ) / 100;
				end.scaleY = Math.round( (end.height / start.height) * 100 ) / 100;

				delete end.width;
				delete end.height;

				// Check if we need to animate opacity
				opacity = slide.opts.zoomOpacity;

				if ( opacity == 'auto' ) {
					opacity = Math.abs( slide.width / slide.height - start.width / start.height ) > 0.1;
				}

				if ( opacity ) {
					start.opacity = 0.1;
					end.opacity   = 1;
				}

				// Draw image at start position
				$.fancybox.setTranslate( slide.$content.removeClass( 'fancybox-is-hidden' ), start );

				forceRedraw( slide.$content );

				// Start animation
				$.fancybox.animate( slide.$content, end, duration, function() {
					self.complete();
				});

				return;
			}


			self.updateSlide( slide );


			// Simply show content
			// ===================

			if ( !effect ) {
				forceRedraw( $slide );

				slide.$content.removeClass( 'fancybox-is-hidden' );

				if ( slide.pos === self.currPos ) {
					self.complete();
				}

				return;
			}

			$.fancybox.stop( $slide );

			effectClassName = 'fancybox-animated fancybox-slide--' + ( slide.pos > self.prevPos ? 'next' : 'previous' ) + ' fancybox-fx-' + effect;

			$slide.removeAttr( 'style' ).removeClass( 'fancybox-slide--current fancybox-slide--next fancybox-slide--previous' ).addClass( effectClassName );

			slide.$content.removeClass( 'fancybox-is-hidden' );

			//Force reflow for CSS3 transitions
			forceRedraw( $slide );

			$.fancybox.animate( $slide, 'fancybox-slide--current', duration, function(e) {
				$slide.removeClass( effectClassName ).removeAttr( 'style' );

				if ( slide.pos === self.currPos ) {
					self.complete();
				}

			}, true);

		},


		// Check if we can and have to zoom from thumbnail
		//================================================

		getThumbPos : function( slide ) {

			var self = this;
			var rez  = false;

			// Check if element is inside the viewport by at least 1 pixel
			var isElementVisible = function( $el ) {
				var element = $el[0];

				var elementRect = element.getBoundingClientRect();
				var parentRects = [];

				var visibleInAllParents;

				while ( element.parentElement !== null ) {
					if ( $(element.parentElement).css('overflow') === 'hidden'  || $(element.parentElement).css('overflow') === 'auto' ) {
						parentRects.push(element.parentElement.getBoundingClientRect());
					}

					element = element.parentElement;
				}

				visibleInAllParents = parentRects.every(function(parentRect){
					var visiblePixelX = Math.min(elementRect.right, parentRect.right) - Math.max(elementRect.left, parentRect.left);
					var visiblePixelY = Math.min(elementRect.bottom, parentRect.bottom) - Math.max(elementRect.top, parentRect.top);

					return visiblePixelX > 0 && visiblePixelY > 0;
				});

				return visibleInAllParents &&
					elementRect.bottom > 0 && elementRect.right > 0 &&
					elementRect.left < $(window).width() && elementRect.top < $(window).height();
			};

			var $thumb   = slide.opts.$thumb;
			var thumbPos = $thumb ? $thumb.offset() : 0;
			var slidePos;

			if ( thumbPos && $thumb[0].ownerDocument === document && isElementVisible( $thumb ) ) {
				slidePos = self.$refs.stage.offset();

				rez = {
					top    : thumbPos.top  - slidePos.top  + parseFloat( $thumb.css( "border-top-width" ) || 0 ),
					left   : thumbPos.left - slidePos.left + parseFloat( $thumb.css( "border-left-width" ) || 0 ),
					width  : $thumb.width(),
					height : $thumb.height(),
					scaleX : 1,
					scaleY : 1
				};
			}

			return rez;
		},


		// Final adjustments after current gallery item is moved to position
		// and it`s content is loaded
		// ==================================================================

		complete : function() {

			var self = this;

			var current = self.current;
			var slides  = {};

			if ( current.isMoved || !current.isLoaded || current.isComplete ) {
				return;
			}

			current.isComplete = true;

			current.$slide.siblings().trigger( 'onReset' );

			// Trigger any CSS3 transiton inside the slide
			forceRedraw( current.$slide );

			current.$slide.addClass( 'fancybox-slide--complete' );

			// Remove unnecessary slides
			$.each( self.slides, function( key, slide ) {
				if ( slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1 ) {
					slides[ slide.pos ] = slide;

				} else if ( slide ) {

					$.fancybox.stop( slide.$slide );

					slide.$slide.unbind().remove();
				}
			});

			self.slides = slides;

			self.updateCursor();

			self.trigger( 'afterShow' );

			// Try to focus on the first focusable element
			if ( $( document.activeElement ).is( '[disabled]' ) || ( current.opts.autoFocus && !( current.type == 'image' || current.type === 'iframe' ) ) ) {
				self.focus();
			}

		},


		// Preload next and previous slides
		// ================================

		preload : function() {
			var self = this;
			var next, prev;

			if ( self.group.length < 2 ) {
				return;
			}

			next  = self.slides[ self.currPos + 1 ];
			prev  = self.slides[ self.currPos - 1 ];

			if ( next && next.type === 'image' ) {
				self.loadSlide( next );
			}

			if ( prev && prev.type === 'image' ) {
				self.loadSlide( prev );
			}

		},


		// Try to find and focus on the first focusable element
		// ====================================================

		focus : function() {
			var current = this.current;
			var $el;

			if ( this.isClosing ) {
				return;
			}

			// Skip for images and iframes
			$el = current && current.isComplete ? current.$slide.find('button,:input,[tabindex],a').filter(':not([disabled]):visible:first') : null;
			$el = $el && $el.length ? $el : this.$refs.container;

			$el.focus();
		},


		// Activates current instance - brings container to the front and enables keyboard,
		// notifies other instances about deactivating
		// =================================================================================

		activate : function () {
			var self = this;

			// Deactivate all instances
			$( '.fancybox-container' ).each(function () {
				var instance = $(this).data( 'FancyBox' );

				// Skip self and closing instances
				if (instance && instance.uid !== self.uid && !instance.isClosing) {
					instance.trigger( 'onDeactivate' );
				}

			});

			if ( self.current ) {
				if ( self.$refs.container.index() > 0 ) {
					self.$refs.container.prependTo( document.body );
				}

				self.updateControls();
			}

			self.trigger( 'onActivate' );

			self.addEvents();

		},


		// Start closing procedure
		// This will start "zoom-out" animation if needed and clean everything up afterwards
		// =================================================================================

		close : function( e, d ) {

			var self    = this;
			var current = self.current;

			var effect, duration;
			var $what, opacity, start, end;

			var done = function() {
				self.cleanUp( e );
			};

			if ( self.isClosing ) {
				return false;
			}

			self.isClosing = true;

			// If beforeClose callback prevents closing, make sure content is centered
			if ( self.trigger( 'beforeClose', e ) === false ) {
				self.isClosing = false;

				requestAFrame(function() {
					self.update();
				});

				return false;
			}

			// Remove all events
			// If there are multiple instances, they will be set again by "activate" method
			self.removeEvents();

			if ( current.timouts ) {
				clearTimeout( current.timouts );
			}

			$what    = current.$content;
			effect   = current.opts.animationEffect;
			duration = $.isNumeric( d ) ? d : ( effect ? current.opts.animationDuration : 0 );

			// Remove other slides
			current.$slide.off( transitionEnd ).removeClass( 'fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated' );

			current.$slide.siblings().trigger( 'onReset' ).remove();

			// Trigger animations
			if ( duration ) {
				self.$refs.container.removeClass( 'fancybox-is-open' ).addClass( 'fancybox-is-closing' );
			}

			// Clean up
			self.hideLoading( current );

			self.hideControls();

			self.updateCursor();

			// Check if possible to zoom-out
			if ( effect === 'zoom' && !( e !== true && $what && duration && current.type === 'image' && !current.hasError && ( end = self.getThumbPos( current ) ) ) ) {
				effect = 'fade';
			}

			if ( effect === 'zoom' ) {
				$.fancybox.stop( $what );

				start = $.fancybox.getTranslate( $what );

				start.width  = start.width  * start.scaleX;
				start.height = start.height * start.scaleY;

				// Check if we need to animate opacity
				opacity = current.opts.zoomOpacity;

				if ( opacity == 'auto' ) {
					opacity = Math.abs( current.width / current.height - end.width / end.height ) > 0.1;
				}

				if ( opacity ) {
					end.opacity = 0;
				}

				start.scaleX = start.width  / end.width;
				start.scaleY = start.height / end.height;

				start.width  = end.width;
				start.height = end.height;

				$.fancybox.setTranslate( current.$content, start );

				$.fancybox.animate( current.$content, end, duration, done );

				return true;
			}

			if ( effect && duration ) {

				// If skip animation
				if ( e === true ) {
					setTimeout( done, duration );

				} else {
					$.fancybox.animate( current.$slide.removeClass( 'fancybox-slide--current' ), 'fancybox-animated fancybox-slide--previous fancybox-fx-' + effect, duration, done );
				}

			} else {
				done();
			}

			return true;
		},


		// Final adjustments after removing the instance
		// =============================================

		cleanUp : function( e ) {
			var self = this,
				instance;

			self.current.$slide.trigger( 'onReset' );

			self.$refs.container.empty().remove();

			self.trigger( 'afterClose', e );

			// Place back focus
			if ( self.$lastFocus && !!!self.current.focusBack ) {
				self.$lastFocus.focus();
			}

			self.current = null;

			// Check if there are other instances
			instance = $.fancybox.getInstance();

			if ( instance ) {
				instance.activate();

			} else {

				$W.scrollTop( self.scrollTop ).scrollLeft( self.scrollLeft );

				$( 'html' ).removeClass( 'fancybox-enabled' );

				$( '#fancybox-style-noscroll' ).remove();
			}

		},


		// Call callback and trigger an event
		// ==================================

		trigger : function( name, slide ) {
			var args  = Array.prototype.slice.call(arguments, 1),
				self  = this,
				obj   = slide && slide.opts ? slide : self.current,
				rez;

			if ( obj ) {
				args.unshift( obj );

			} else {
				obj = self;
			}

			args.unshift( self );

			if ( $.isFunction( obj.opts[ name ] ) ) {
				rez = obj.opts[ name ].apply( obj, args );
			}

			if ( rez === false ) {
				return rez;
			}

			if ( name === 'afterClose' ) {
				$D.trigger( name + '.fb', args );

			} else {
				self.$refs.container.trigger( name + '.fb', args );
			}

		},


		// Update infobar values, navigation button states and reveal caption
		// ==================================================================

		updateControls : function ( force ) {

			var self = this;

			var current  = self.current;
			var index    = current.index;
			var opts     = current.opts;
			var caption  = opts.caption;
			var $caption = self.$refs.caption;

			// Recalculate content dimensions
			current.$slide.trigger( 'refresh' );

			self.$caption = caption && caption.length ? $caption.html( caption ) : null;

			if ( !self.isHiddenControls ) {
				self.showControls();
			}

			// Update info and navigation elements
			$('[data-fancybox-count]').html( self.group.length );
			$('[data-fancybox-index]').html( index + 1 );

			$('[data-fancybox-prev]').prop('disabled', ( !opts.loop && index <= 0 ) );
			$('[data-fancybox-next]').prop('disabled', ( !opts.loop && index >= self.group.length - 1 ) );

		},

		// Hide toolbar and caption
		// ========================

		hideControls : function () {

			this.isHiddenControls = true;

			this.$refs.container.removeClass('fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav');

		},

		showControls : function() {

			var self = this;
			var opts = self.current ? self.current.opts : self.opts;
			var $container = self.$refs.container;

			self.isHiddenControls   = false;
			self.idleSecondsCounter = 0;

			$container
				.toggleClass('fancybox-show-toolbar', !!( opts.toolbar && opts.buttons ) )
				.toggleClass('fancybox-show-infobar', !!( opts.infobar && self.group.length > 1 ) )
				.toggleClass('fancybox-show-nav',     !!( opts.arrows && self.group.length > 1 ) )
				.toggleClass('fancybox-is-modal',     !!opts.modal );

			if ( self.$caption ) {
				$container.addClass( 'fancybox-show-caption ');

			} else {
				$container.removeClass( 'fancybox-show-caption' );
			}

		},


		// Toggle toolbar and caption
		// ==========================

		toggleControls : function() {

			if ( this.isHiddenControls ) {
				this.showControls();

			} else {
				this.hideControls();
			}

		},


	});


	$.fancybox = {

		version  : "3.1.20",
		defaults : defaults,


		// Get current instance and execute a command.
		//
		// Examples of usage:
		//
		//   $instance = $.fancybox.getInstance();
		//   $.fancybox.getInstance().jumpTo( 1 );
		//   $.fancybox.getInstance( 'jumpTo', 1 );
		//   $.fancybox.getInstance( function() {
		//       console.info( this.currIndex );
		//   });
		// ======================================================

		getInstance : function ( command ) {
			var instance = $('.fancybox-container:not(".fancybox-is-closing"):first').data( 'FancyBox' );
			var args     = Array.prototype.slice.call(arguments, 1);

			if ( instance instanceof FancyBox ) {

				if ( $.type( command ) === 'string' ) {
					instance[ command ].apply( instance, args );

				} else if ( $.type( command ) === 'function' ) {
					command.apply( instance, args );

				}

				return instance;
			}

			return false;

		},


		// Create new instance
		// ===================

		open : function ( items, opts, index ) {
			return new FancyBox( items, opts, index );
		},


		// Close current or all instances
		// ==============================

		close : function ( all ) {
			var instance = this.getInstance();

			if ( instance ) {
				instance.close();

				// Try to find and close next instance

				if ( all === true ) {
					this.close();
				}
			}

		},

		// Close instances and unbind all events
		// ==============================

		destroy : function() {

			this.close( true );

			$D.off( 'click.fb-start' );

		},


		// Try to detect mobile devices
		// ============================

		isMobile : document.createTouch !== undefined && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),


		// Detect if 'translate3d' support is available
		// ============================================

		use3d : (function() {
			var div = document.createElement('div');

			return window.getComputedStyle && window.getComputedStyle( div ).getPropertyValue('transform') && !(document.documentMode && document.documentMode < 11);
		}()),


		// Helper function to get current visual state of an element
		// returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
		// =====================================================================

		getTranslate : function( $el ) {
			var matrix;

			if ( !$el || !$el.length ) {
				return false;
			}

			matrix  = $el.eq( 0 ).css('transform');

			if ( matrix && matrix.indexOf( 'matrix' ) !== -1 ) {
				matrix = matrix.split('(')[1];
				matrix = matrix.split(')')[0];
				matrix = matrix.split(',');
			} else {
				matrix = [];
			}

			if ( matrix.length ) {

				// If IE
				if ( matrix.length > 10 ) {
					matrix = [ matrix[13], matrix[12], matrix[0], matrix[5] ];

				} else {
					matrix = [ matrix[5], matrix[4], matrix[0], matrix[3]];
				}

				matrix = matrix.map(parseFloat);

			} else {
				matrix = [ 0, 0, 1, 1 ];

				var transRegex = /\.*translate\((.*)px,(.*)px\)/i;
				var transRez = transRegex.exec( $el.eq( 0 ).attr('style') );

				if ( transRez ) {
					matrix[ 0 ] = parseFloat( transRez[2] );
					matrix[ 1 ] = parseFloat( transRez[1] );
				}
			}

			return {
				top     : matrix[ 0 ],
				left    : matrix[ 1 ],
				scaleX  : matrix[ 2 ],
				scaleY  : matrix[ 3 ],
				opacity : parseFloat( $el.css('opacity') ),
				width   : $el.width(),
				height  : $el.height()
			};

		},


		// Shortcut for setting "translate3d" properties for element
		// Can set be used to set opacity, too
		// ========================================================

		setTranslate : function( $el, props ) {
			var str  = '';
			var css  = {};

			if ( !$el || !props ) {
				return;
			}

			if ( props.left !== undefined || props.top !== undefined ) {
				str = ( props.left === undefined ? $el.position().left : props.left )  + 'px, ' + ( props.top === undefined ? $el.position().top : props.top ) + 'px';

				if ( this.use3d ) {
					str = 'translate3d(' + str + ', 0px)';

				} else {
					str = 'translate(' + str + ')';
				}
			}

			if ( props.scaleX !== undefined && props.scaleY !== undefined ) {
				str = (str.length ? str + ' ' : '') + 'scale(' + props.scaleX + ', ' + props.scaleY + ')';
			}

			if ( str.length ) {
				css.transform = str;
			}

			if ( props.opacity !== undefined ) {
				css.opacity = props.opacity;
			}

			if ( props.width !== undefined ) {
				css.width = props.width;
			}

			if ( props.height !== undefined ) {
				css.height = props.height;
			}

			return $el.css( css );
		},


		// Simple CSS transition handler
		// =============================

		animate : function ( $el, to, duration, callback, leaveAnimationName ) {
			var event = transitionEnd || 'transitionend';

			if ( $.isFunction( duration ) ) {
				callback = duration;
				duration = null;
			}

			if ( !$.isPlainObject( to ) ) {
				$el.removeAttr('style');
			}

			$el.on( event, function(e) {

				// Skip events from child elements and z-index change
				if ( e && e.originalEvent && ( !$el.is( e.originalEvent.target ) || e.originalEvent.propertyName == 'z-index' ) ) {
					return;
				}

				$el.off( event );

				if ( $.isPlainObject( to ) ) {

					if ( to.scaleX !== undefined && to.scaleY !== undefined ) {
						$el.css( 'transition-duration', '0ms' );

						to.width  = $el.width()  * to.scaleX;
						to.height = $el.height() * to.scaleY;

						to.scaleX = 1;
						to.scaleY = 1;

						$.fancybox.setTranslate( $el, to );
					}

				} else if ( leaveAnimationName !== true ) {
					$el.removeClass( to );
				}

				if ( $.isFunction( callback ) ) {
					callback( e );
				}

			});

			if ( $.isNumeric( duration ) ) {
				$el.css( 'transition-duration', duration + 'ms' );
			}

			if ( $.isPlainObject( to ) ) {
				$.fancybox.setTranslate( $el, to );

			} else {
				$el.addClass( to );
			}

			$el.data("timer", setTimeout(function() {
				$el.trigger( 'transitionend' );
			}, duration + 16));

		},

		stop : function( $el ) {
			clearTimeout( $el.data("timer") );

			$el.off( transitionEnd );
		}

	};


	// Default click handler for "fancyboxed" links
	// ============================================

	function _run( e ) {
		var target	= e.currentTarget,
			opts	= e.data ? e.data.options : {},
			items	= e.data ? e.data.items : [],
			value	= $(target).attr( 'data-fancybox' ) || '',
			index	= 0;

		e.preventDefault();
		e.stopPropagation();

		// Get all related items and find index for clicked one
		if ( value ) {
			items = items.length ? items.filter( '[data-fancybox="' + value + '"]' ) : $( '[data-fancybox="' + value + '"]' );
			index = items.index( target );

			// Sometimes current item can not be found
			// (for example, when slider clones items)
			if ( index < 0 ) {
				index = 0;
			}

		} else {
			items = [ target ];
		}

		$.fancybox.open( items, opts, index );
	}


	// Create a jQuery plugin
	// ======================

	$.fn.fancybox = function (options) {
		var selector;

		options  = options || {};
		selector = options.selector || false;

		if ( selector ) {

			$( 'body' ).off( 'click.fb-start', selector ).on( 'click.fb-start', selector, {
				items   : $( selector ),
				options : options
			}, _run );

		} else {

			this.off( 'click.fb-start' ).on( 'click.fb-start', {
				items   : this,
				options : options
			}, _run);

		}

		return this;
	};


	// Self initializing plugin
	// ========================

	$D.on( 'click.fb-start', '[data-fancybox]', _run );

}( window, document, window.jQuery ));

// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
;(function ($) {

	'use strict';

	// Formats matching url to final form

	var format = function (url, rez, params) {
		if ( !url ) {
			return;
		}

		params = params || '';

		if ( $.type(params) === "object" ) {
			params = $.param(params, true);
		}

		$.each(rez, function (key, value) {
			url = url.replace('$' + key, value || '');
		});

		if (params.length) {
			url += (url.indexOf('?') > 0 ? '&' : '?') + params;
		}

		return url;
	};

	// Object containing properties for each media type

	var defaults = {
		youtube : {
			matcher : /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
			params  : {
				autoplay : 1,
				autohide : 1,
				fs  : 1,
				rel : 0,
				hd  : 1,
				wmode : 'transparent',
				enablejsapi : 1,
				html5 : 1
			},
			paramPlace : 8,
			type  : 'iframe',
			url   : '//www.youtube.com/embed/$4',
			thumb : '//img.youtube.com/vi/$4/hqdefault.jpg'
		},

		vimeo : {
			matcher : /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
			params  : {
				autoplay : 1,
				hd : 1,
				show_title    : 1,
				show_byline   : 1,
				show_portrait : 0,
				fullscreen    : 1,
				api : 1
			},
			paramPlace : 3,
			type : 'iframe',
			url : '//player.vimeo.com/video/$2'
		},

		metacafe : {
			matcher : /metacafe.com\/watch\/(\d+)\/(.*)?/,
			type    : 'iframe',
			url     : '//www.metacafe.com/embed/$1/?ap=1'
		},

		dailymotion : {
			matcher : /dailymotion.com\/video\/(.*)\/?(.*)/,
			params : {
				additionalInfos : 0,
				autoStart : 1
			},
			type : 'iframe',
			url  : '//www.dailymotion.com/embed/video/$1'
		},

		vine : {
			matcher : /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
			type    : 'iframe',
			url     : '//vine.co/v/$1/embed/simple'
		},

		instagram : {
			matcher : /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
			type    : 'image',
			url     : '//$1/p/$2/media/?size=l'
		},

		// Examples:
		// http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
		// http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
		// https://www.google.lv/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
		google_maps : {
			matcher : /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
			type    : 'iframe',
			url     : function (rez) {
				return '//maps.google.' + rez[2] + '/?ll=' + ( rez[9] ? rez[9] + '&z=' + Math.floor(  rez[10]  ) + ( rez[12] ? rez[12].replace(/^\//, "&") : '' )  : rez[12] ) + '&output=' + ( rez[12] && rez[12].indexOf('layer=c') > 0 ? 'svembed' : 'embed' );
			}
		}
	};

	$(document).on('onInit.fb', function (e, instance) {

		$.each(instance.group, function( i, item ) {

			var url	 = item.src || '',
				type = false,
				media,
				thumb,
				rez,
				params,
				urlParams,
				o,
				provider;

			// Skip items that already have content type
			if ( item.type ) {
				return;
			}

			media = $.extend( true, {}, defaults, item.opts.media );

			// Look for any matching media type
			$.each(media, function ( n, el ) {
				rez = url.match(el.matcher);
				o   = {};
				provider = n;

				if (!rez) {
					return;
				}

				type = el.type;

				if ( el.paramPlace && rez[ el.paramPlace ] ) {
					urlParams = rez[ el.paramPlace ];

					if ( urlParams[ 0 ] == '?' ) {
						urlParams = urlParams.substring(1);
					}

					urlParams = urlParams.split('&');

					for ( var m = 0; m < urlParams.length; ++m ) {
						var p = urlParams[ m ].split('=', 2);

						if ( p.length == 2 ) {
							o[ p[0] ] = decodeURIComponent( p[1].replace(/\+/g, " ") );
						}
					}
				}

				params = $.extend( true, {}, el.params, item.opts[ n ], o );

				url   = $.type(el.url) === "function" ? el.url.call(this, rez, params, item) : format(el.url, rez, params);
				thumb = $.type(el.thumb) === "function" ? el.thumb.call(this, rez, params, item) : format(el.thumb, rez);

				if ( provider === 'vimeo' ) {
					url = url.replace('&%23', '#');
				}

				return false;
			});

			// If it is found, then change content type and update the url

			if ( type ) {
				item.src  = url;
				item.type = type;

				if ( !item.opts.thumb && !( item.opts.$thumb && item.opts.$thumb.length ) ) {
					item.opts.thumb = thumb;
				}

				if ( type === 'iframe' ) {
					$.extend(true, item.opts, {
						iframe : {
							preload : false,
							attr : {
								scrolling : "no"
							}
						}
					});

					item.contentProvider = provider;

					item.opts.slideClass += ' fancybox-slide--' + ( provider == 'google_maps' ? 'map' : 'video' );
				}

			} else {

				// If no content type is found, then set it to `image` as fallback
				item.type = 'image';
			}

		});

	});

}(window.jQuery));

// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
;(function (window, document, $) {
	'use strict';

	var requestAFrame = (function () {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			// if all else fails, use setTimeout
			function (callback) {
				return window.setTimeout(callback, 1000 / 60);
			};
	})();


	var cancelAFrame = (function () {
		return window.cancelAnimationFrame ||
			window.webkitCancelAnimationFrame ||
			window.mozCancelAnimationFrame ||
			window.oCancelAnimationFrame ||
			function (id) {
				window.clearTimeout(id);
			};
	})();


	var pointers = function( e ) {
		var result = [];

		e = e.originalEvent || e || window.e;
		e = e.touches && e.touches.length ? e.touches : ( e.changedTouches && e.changedTouches.length ? e.changedTouches : [ e ] );

		for ( var key in e ) {

			if ( e[ key ].pageX ) {
				result.push( { x : e[ key ].pageX, y : e[ key ].pageY } );

			} else if ( e[ key ].clientX ) {
				result.push( { x : e[ key ].clientX, y : e[ key ].clientY } );
			}
		}

		return result;
	};

	var distance = function( point2, point1, what ) {
		if ( !point1 || !point2 ) {
			return 0;
		}

		if ( what === 'x' ) {
			return point2.x - point1.x;

		} else if ( what === 'y' ) {
			return point2.y - point1.y;
		}

		return Math.sqrt( Math.pow( point2.x - point1.x, 2 ) + Math.pow( point2.y - point1.y, 2 ) );
	};

	var isClickable = function( $el ) {
		if ( $el.is('a,button,input,select,textarea') || $.isFunction( $el.get(0).onclick ) ) {
			return true;
		}

		// Check for attributes like data-fancybox-next or data-fancybox-close
		for ( var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++ ) {
			if ( atts[i].nodeName.substr(0, 14) === 'data-fancybox-' ) {
				return true;
			}
		}

		return false;
	};

	var hasScrollbars = function( el ) {
		var overflowY = window.getComputedStyle( el )['overflow-y'];
		var overflowX = window.getComputedStyle( el )['overflow-x'];

		var vertical   = (overflowY === 'scroll' || overflowY === 'auto') && el.scrollHeight > el.clientHeight;
		var horizontal = (overflowX === 'scroll' || overflowX === 'auto') && el.scrollWidth > el.clientWidth;

		return vertical || horizontal;
	};

	var isScrollable = function ( $el ) {
		var rez = false;

		while ( true ) {
			rez	= hasScrollbars( $el.get(0) );

			if ( rez ) {
				break;
			}

			$el = $el.parent();

			if ( !$el.length || $el.hasClass( 'fancybox-stage' ) || $el.is( 'body' ) ) {
				break;
			}
		}

		return rez;
	};


	var Guestures = function ( instance ) {
		var self = this;

		self.instance = instance;

		self.$bg        = instance.$refs.bg;
		self.$stage     = instance.$refs.stage;
		self.$container = instance.$refs.container;

		self.destroy();

		self.$container.on( 'touchstart.fb.touch mousedown.fb.touch', $.proxy(self, 'ontouchstart') );
	};

	Guestures.prototype.destroy = function() {
		this.$container.off( '.fb.touch' );
	};

	Guestures.prototype.ontouchstart = function( e ) {
		var self = this;

		var $target  = $( e.target );
		var instance = self.instance;
		var current  = instance.current;
		var $content = current.$content;

		var isTouchDevice = ( e.type == 'touchstart' );

		// Do not respond to both events
		if ( isTouchDevice ) {
			self.$container.off( 'mousedown.fb.touch' );
		}

		// Ignore clicks while zooming or closing
		if ( !current || self.instance.isAnimating || self.instance.isClosing ) {
			e.stopPropagation();
			e.preventDefault();

			return;
		}

		// Ignore right click
		if ( e.originalEvent && e.originalEvent.button == 2 ) {
			return;
		}

		// Ignore taping on links, buttons, input elements
		if ( !$target.length || isClickable( $target ) || isClickable( $target.parent() ) ) {
			return;
		}

		// Ignore clicks on the scrollbar
		if ( e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left ) {
			return;
		}

		self.startPoints = pointers( e );

		// Prevent zooming if already swiping
		if ( !self.startPoints || ( self.startPoints.length > 1 && instance.isSliding ) ) {
			return;
		}

		self.$target  = $target;
		self.$content = $content;
		self.canTap   = true;

		$(document).off( '.fb.touch' );

		$(document).on( isTouchDevice ? 'touchend.fb.touch touchcancel.fb.touch' : 'mouseup.fb.touch mouseleave.fb.touch',  $.proxy(self, "ontouchend"));
		$(document).on( isTouchDevice ? 'touchmove.fb.touch' : 'mousemove.fb.touch',  $.proxy(self, "ontouchmove"));

		e.stopPropagation();

		if ( !(instance.current.opts.touch || instance.canPan() ) || !( $target.is( self.$stage ) || self.$stage.find( $target ).length ) ) {

			// Prevent ghosting
			if ( $target.is('img') ) {
				e.preventDefault();
			}

			return;
		}

		if ( !( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) ) {
			e.preventDefault();
		}

		self.canvasWidth  = Math.round( current.$slide[0].clientWidth );
		self.canvasHeight = Math.round( current.$slide[0].clientHeight );

		self.startTime = new Date().getTime();
		self.distanceX = self.distanceY = self.distance = 0;

		self.isPanning = false;
		self.isSwiping = false;
		self.isZooming = false;

		self.sliderStartPos  = self.sliderLastPos || { top: 0, left: 0 };
		self.contentStartPos = $.fancybox.getTranslate( self.$content );
		self.contentLastPos  = null;

		if ( self.startPoints.length === 1 && !self.isZooming ) {
			self.canTap = !instance.isSliding;

			if ( current.type === 'image' && ( self.contentStartPos.width > self.canvasWidth + 1 || self.contentStartPos.height > self.canvasHeight + 1 ) ) {

				$.fancybox.stop( self.$content );

				self.$content.css( 'transition-duration', '0ms' );

				self.isPanning = true;

			} else {

				self.isSwiping = true;
			}

			self.$container.addClass('fancybox-controls--isGrabbing');
		}

		if ( self.startPoints.length === 2 && !instance.isAnimating && !current.hasError && current.type === 'image' && ( current.isLoaded || current.$ghost ) ) {
			self.isZooming = true;

			self.isSwiping = false;
			self.isPanning = false;

			$.fancybox.stop( self.$content );

			self.$content.css( 'transition-duration', '0ms' );

			self.centerPointStartX = ( ( self.startPoints[0].x + self.startPoints[1].x ) * 0.5 ) - $(window).scrollLeft();
			self.centerPointStartY = ( ( self.startPoints[0].y + self.startPoints[1].y ) * 0.5 ) - $(window).scrollTop();

			self.percentageOfImageAtPinchPointX = ( self.centerPointStartX - self.contentStartPos.left ) / self.contentStartPos.width;
			self.percentageOfImageAtPinchPointY = ( self.centerPointStartY - self.contentStartPos.top  ) / self.contentStartPos.height;

			self.startDistanceBetweenFingers = distance( self.startPoints[0], self.startPoints[1] );
		}

	};

	Guestures.prototype.ontouchmove = function( e ) {

		var self = this;

		self.newPoints = pointers( e );

		if ( $.fancybox.isMobile && ( isScrollable( self.$target ) || isScrollable( self.$target.parent() ) ) ) {
			e.stopPropagation();

			self.canTap = false;

			return;
		}

		if ( !( self.instance.current.opts.touch || self.instance.canPan() ) || !self.newPoints || !self.newPoints.length ) {
			return;
		}

		self.distanceX = distance( self.newPoints[0], self.startPoints[0], 'x' );
		self.distanceY = distance( self.newPoints[0], self.startPoints[0], 'y' );

		self.distance = distance( self.newPoints[0], self.startPoints[0] );

		// Skip false ontouchmove events (Chrome)
		if ( self.distance > 0 ) {

			if ( !( self.$target.is( self.$stage ) || self.$stage.find( self.$target ).length ) ) {
				return;
			}

			e.stopPropagation();
			e.preventDefault();

			if ( self.isSwiping ) {
				self.onSwipe();

			} else if ( self.isPanning ) {
				self.onPan();

			} else if ( self.isZooming ) {
				self.onZoom();
			}

		}

	};

	Guestures.prototype.onSwipe = function() {

		var self = this;

		var swiping = self.isSwiping;
		var left    = self.sliderStartPos.left || 0;
		var angle;

		if ( swiping === true ) {

			if ( Math.abs( self.distance ) > 10 )  {

				self.canTap = false;

				if ( self.instance.group.length < 2 && self.instance.opts.touch.vertical ) {
					self.isSwiping  = 'y';

				} else if ( self.instance.isSliding || self.instance.opts.touch.vertical === false || ( self.instance.opts.touch.vertical === 'auto' && $( window ).width() > 800 ) ) {
					self.isSwiping  = 'x';

				} else {
					angle = Math.abs( Math.atan2( self.distanceY, self.distanceX ) * 180 / Math.PI );

					self.isSwiping = ( angle > 45 && angle < 135 ) ? 'y' : 'x';
				}

				self.instance.isSliding = self.isSwiping;

				// Reset points to avoid jumping, because we dropped first swipes to calculate the angle
				self.startPoints = self.newPoints;

				$.each(self.instance.slides, function( index, slide ) {
					$.fancybox.stop( slide.$slide );

					slide.$slide.css( 'transition-duration', '0ms' );

					slide.inTransition = false;

					if ( slide.pos === self.instance.current.pos ) {
						self.sliderStartPos.left = $.fancybox.getTranslate( slide.$slide ).left;
					}
				});

				//self.instance.current.isMoved = true;

				// Stop slideshow
				if ( self.instance.SlideShow && self.instance.SlideShow.isActive ) {
					self.instance.SlideShow.stop();
				}
			}

		} else {

			if ( swiping == 'x' ) {

				// Sticky edges
				if ( self.distanceX > 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === 0 && !self.instance.current.opts.loop ) ) ) {
					left = left + Math.pow( self.distanceX, 0.8 );

				} else if ( self.distanceX < 0 && ( self.instance.group.length < 2 || ( self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop ) ) ) {
					left = left - Math.pow( -self.distanceX, 0.8 );

				} else {
					left = left + self.distanceX;
				}

			}

			self.sliderLastPos = {
				top  : swiping == 'x' ? 0 : self.sliderStartPos.top + self.distanceY,
				left : left
			};

			if ( self.requestId ) {
				cancelAFrame( self.requestId );

				self.requestId = null;
			}

			self.requestId = requestAFrame(function() {

				if ( self.sliderLastPos ) {
					$.each(self.instance.slides, function( index, slide ) {
						var pos = slide.pos - self.instance.currPos;

						$.fancybox.setTranslate( slide.$slide, {
							top  : self.sliderLastPos.top,
							left : self.sliderLastPos.left + ( pos * self.canvasWidth ) + ( pos * slide.opts.gutter )
						});
					});

					self.$container.addClass( 'fancybox-is-sliding' );
				}

			});

		}

	};

	Guestures.prototype.onPan = function() {

		var self = this;

		var newOffsetX, newOffsetY, newPos;

		self.canTap = false;

		if ( self.contentStartPos.width > self.canvasWidth ) {
			newOffsetX = self.contentStartPos.left + self.distanceX;

		} else {
			newOffsetX = self.contentStartPos.left;
		}

		newOffsetY = self.contentStartPos.top + self.distanceY;

		newPos = self.limitMovement( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

		newPos.scaleX = self.contentStartPos.scaleX;
		newPos.scaleY = self.contentStartPos.scaleY;

		self.contentLastPos = newPos;

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate( self.$content, self.contentLastPos );
		});
	};

	// Make panning sticky to the edges
	Guestures.prototype.limitMovement = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

		var self = this;

		var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY;

		var canvasWidth  = self.canvasWidth;
		var canvasHeight = self.canvasHeight;

		var currentOffsetX = self.contentStartPos.left;
		var currentOffsetY = self.contentStartPos.top;

		var distanceX = self.distanceX;
		var distanceY = self.distanceY;

		// Slow down proportionally to traveled distance

		minTranslateX = Math.max(0, canvasWidth  * 0.5 - newWidth  * 0.5 );
		minTranslateY = Math.max(0, canvasHeight * 0.5 - newHeight * 0.5 );

		maxTranslateX = Math.min( canvasWidth  - newWidth,  canvasWidth  * 0.5 - newWidth  * 0.5 );
		maxTranslateY = Math.min( canvasHeight - newHeight, canvasHeight * 0.5 - newHeight * 0.5 );

		if ( newWidth > canvasWidth ) {

			//   ->
			if ( distanceX > 0 && newOffsetX > minTranslateX ) {
				newOffsetX = minTranslateX - 1 + Math.pow( -minTranslateX + currentOffsetX + distanceX, 0.8 ) || 0;
			}

			//    <-
			if ( distanceX  < 0 && newOffsetX < maxTranslateX ) {
				newOffsetX = maxTranslateX + 1 - Math.pow( maxTranslateX - currentOffsetX - distanceX, 0.8 ) || 0;
			}

		}

		if ( newHeight > canvasHeight ) {

			//   \/
			if ( distanceY > 0 && newOffsetY > minTranslateY ) {
				newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8 ) || 0;
			}

			//   /\
			if ( distanceY < 0 && newOffsetY < maxTranslateY ) {
				newOffsetY = maxTranslateY + 1 - Math.pow ( maxTranslateY - currentOffsetY - distanceY, 0.8 ) || 0;
			}

		}

		return {
			top  : newOffsetY,
			left : newOffsetX
		};

	};


	Guestures.prototype.limitPosition = function( newOffsetX, newOffsetY, newWidth, newHeight ) {

		var self = this;

		var canvasWidth  = self.canvasWidth;
		var canvasHeight = self.canvasHeight;

		if ( newWidth > canvasWidth ) {
			newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
			newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;

		} else {

			// Center horizontally
			newOffsetX = Math.max( 0, canvasWidth / 2 - newWidth / 2 );

		}

		if ( newHeight > canvasHeight ) {
			newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
			newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;

		} else {

			// Center vertically
			newOffsetY = Math.max( 0, canvasHeight / 2 - newHeight / 2 );

		}

		return {
			top  : newOffsetY,
			left : newOffsetX
		};

	};

	Guestures.prototype.onZoom = function() {

		var self = this;

		// Calculate current distance between points to get pinch ratio and new width and height

		var currentWidth  = self.contentStartPos.width;
		var currentHeight = self.contentStartPos.height;

		var currentOffsetX = self.contentStartPos.left;
		var currentOffsetY = self.contentStartPos.top;

		var endDistanceBetweenFingers = distance( self.newPoints[0], self.newPoints[1] );

		var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;

		var newWidth  = Math.floor( currentWidth  * pinchRatio );
		var newHeight = Math.floor( currentHeight * pinchRatio );

		// This is the translation due to pinch-zooming
		var translateFromZoomingX = (currentWidth  - newWidth)  * self.percentageOfImageAtPinchPointX;
		var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

		//Point between the two touches

		var centerPointEndX = ((self.newPoints[0].x + self.newPoints[1].x) / 2) - $(window).scrollLeft();
		var centerPointEndY = ((self.newPoints[0].y + self.newPoints[1].y) / 2) - $(window).scrollTop();

		// And this is the translation due to translation of the centerpoint
		// between the two fingers

		var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
		var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

		// The new offset is the old/current one plus the total translation

		var newOffsetX = currentOffsetX + ( translateFromZoomingX + translateFromTranslatingX );
		var newOffsetY = currentOffsetY + ( translateFromZoomingY + translateFromTranslatingY );

		var newPos = {
			top    : newOffsetY,
			left   : newOffsetX,
			scaleX : self.contentStartPos.scaleX * pinchRatio,
			scaleY : self.contentStartPos.scaleY * pinchRatio
		};

		self.canTap = false;

		self.newWidth  = newWidth;
		self.newHeight = newHeight;

		self.contentLastPos = newPos;

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.requestId = requestAFrame(function() {
			$.fancybox.setTranslate( self.$content, self.contentLastPos );
		});

	};

	Guestures.prototype.ontouchend = function( e ) {

		var self = this;
		var dMs  = Math.max( (new Date().getTime() ) - self.startTime, 1);

		var swiping = self.isSwiping;
		var panning = self.isPanning;
		var zooming = self.isZooming;

		self.endPoints = pointers( e );

		self.$container.removeClass( 'fancybox-controls--isGrabbing' );

		$(document).off( '.fb.touch' );

		if ( self.requestId ) {
			cancelAFrame( self.requestId );

			self.requestId = null;
		}

		self.isSwiping = false;
		self.isPanning = false;
		self.isZooming = false;

		if ( self.canTap )  {
			return self.onTap( e );
		}

		self.speed = 366;

		// Speed in px/ms
		self.velocityX = self.distanceX / dMs * 0.5;
		self.velocityY = self.distanceY / dMs * 0.5;

		self.speedX = Math.max( self.speed * 0.5, Math.min( self.speed * 1.5, ( 1 / Math.abs( self.velocityX ) ) * self.speed ) );

		if ( panning ) {
			self.endPanning();

		} else if ( zooming ) {
			self.endZooming();

		} else {
			self.endSwiping( swiping );
		}

		return;
	};

	Guestures.prototype.endSwiping = function( swiping ) {

		var self = this;
		var ret = false;

		self.instance.isSliding = false;
		self.sliderLastPos      = null;

		// Close if swiped vertically / navigate if horizontally
		if ( swiping == 'y' && Math.abs( self.distanceY ) > 50 ) {

			// Continue vertical movement
			$.fancybox.animate( self.instance.current.$slide, {
				top     : self.sliderStartPos.top + self.distanceY + ( self.velocityY * 150 ),
				opacity : 0
			}, 150 );

			ret = self.instance.close( true, 300 );

		} else if ( swiping == 'x' && self.distanceX > 50 && self.instance.group.length > 1 ) {
			ret = self.instance.previous( self.speedX );

		} else if ( swiping == 'x' && self.distanceX < -50  && self.instance.group.length > 1 ) {
			ret = self.instance.next( self.speedX );
		}

		if ( ret === false && ( swiping == 'x' || swiping == 'y' ) ) {
			self.instance.jumpTo( self.instance.current.index, 150 );
		}

		self.$container.removeClass( 'fancybox-is-sliding' );

	};

	// Limit panning from edges
	// ========================

	Guestures.prototype.endPanning = function() {

		var self = this;
		var newOffsetX, newOffsetY, newPos;

		if ( !self.contentLastPos ) {
			return;
		}

		if ( self.instance.current.opts.touch.momentum === false ) {
			newOffsetX = self.contentLastPos.left;
			newOffsetY = self.contentLastPos.top;

		} else {

			// Continue movement
			newOffsetX = self.contentLastPos.left + ( self.velocityX * self.speed );
			newOffsetY = self.contentLastPos.top  + ( self.velocityY * self.speed );
		}

		newPos = self.limitPosition( newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height );

		newPos.width  = self.contentStartPos.width;
		newPos.height = self.contentStartPos.height;

		$.fancybox.animate( self.$content, newPos, 330 );
	};


	Guestures.prototype.endZooming = function() {

		var self = this;

		var current = self.instance.current;

		var newOffsetX, newOffsetY, newPos, reset;

		var newWidth  = self.newWidth;
		var newHeight = self.newHeight;

		if ( !self.contentLastPos ) {
			return;
		}

		newOffsetX = self.contentLastPos.left;
		newOffsetY = self.contentLastPos.top;

		reset = {
			top    : newOffsetY,
			left   : newOffsetX,
			width  : newWidth,
			height : newHeight,
			scaleX : 1,
			scaleY : 1
		};

		// Reset scalex/scaleY values; this helps for perfomance and does not break animation
		$.fancybox.setTranslate( self.$content, reset );

		if ( newWidth < self.canvasWidth && newHeight < self.canvasHeight ) {
			self.instance.scaleToFit( 150 );

		} else if ( newWidth > current.width || newHeight > current.height ) {
			self.instance.scaleToActual( self.centerPointStartX, self.centerPointStartY, 150 );

		} else {

			newPos = self.limitPosition( newOffsetX, newOffsetY, newWidth, newHeight );

			// Switch from scale() to width/height or animation will not work correctly
			$.fancybox.setTranslate( self.content, $.fancybox.getTranslate( self.$content ) );

			$.fancybox.animate( self.$content, newPos, 150 );
		}

	};

	Guestures.prototype.onTap = function(e) {
		var self    = this;
		var $target = $( e.target );

		var instance = self.instance;
		var current  = instance.current;

		var endPoints = ( e && pointers( e ) ) || self.startPoints;

		var tapX = endPoints[0] ? endPoints[0].x - self.$stage.offset().left : 0;
		var tapY = endPoints[0] ? endPoints[0].y - self.$stage.offset().top  : 0;

		var where;

		var process = function ( prefix ) {

			var action = current.opts[ prefix ];

			if ( $.isFunction( action ) ) {
				action = action.apply( instance, [ current, e ] );
			}

			if ( !action) {
				return;
			}

			switch ( action ) {

				case "close" :

					instance.close( self.startEvent );

					break;

				case "toggleControls" :

					instance.toggleControls( true );

					break;

				case "next" :

					instance.next();

					break;

				case "nextOrClose" :

					if ( instance.group.length > 1 ) {
						instance.next();

					} else {
						instance.close( self.startEvent );
					}

					break;

				case "zoom" :

					if ( current.type == 'image' && ( current.isLoaded || current.$ghost ) ) {

						if ( instance.canPan() ) {
							instance.scaleToFit();

						} else if ( instance.isScaledDown() ) {
							instance.scaleToActual( tapX, tapY );

						} else if ( instance.group.length < 2 ) {
							instance.close( self.startEvent );
						}
					}

					break;
			}

		};

		// Ignore right click
		if ( e.originalEvent && e.originalEvent.button == 2 ) {
			return;
		}

		// Skip if current slide is not in the center
		if ( instance.isSliding ) {
			return;
		}

		// Skip if clicked on the scrollbar
		if ( tapX > $target[0].clientWidth + $target.offset().left ) {
			return;
		}

		// Check where is clicked
		if ( $target.is( '.fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container' ) ) {
			where = 'Outside';

		} else if ( $target.is( '.fancybox-slide' ) ) {
			where = 'Slide';

		} else if  ( instance.current.$content && instance.current.$content.has( e.target ).length ) {
			where = 'Content';

		} else {
			return;
		}

		// Check if this is a double tap
		if ( self.tapped ) {

			// Stop previously created single tap
			clearTimeout( self.tapped );
			self.tapped = null;

			// Skip if distance between taps is too big
			if ( Math.abs( tapX - self.tapX ) > 50 || Math.abs( tapY - self.tapY ) > 50 || instance.isSliding ) {
				return this;
			}

			// OK, now we assume that this is a double-tap
			process( 'dblclick' + where );

		} else {

			// Single tap will be processed if user has not clicked second time within 300ms
			// or there is no need to wait for double-tap
			self.tapX = tapX;
			self.tapY = tapY;

			if ( current.opts[ 'dblclick' + where ] && current.opts[ 'dblclick' + where ] !== current.opts[ 'click' + where ] ) {
				self.tapped = setTimeout(function() {
					self.tapped = null;

					process( 'click' + where );

				}, 300);

			} else {
				process( 'click' + where );
			}

		}

		return this;
	};

	$(document).on('onActivate.fb', function (e, instance) {
		if ( instance && !instance.Guestures ) {
			instance.Guestures = new Guestures( instance );
		}
	});

	$(document).on('beforeClose.fb', function (e, instance) {
		if ( instance && instance.Guestures ) {
			instance.Guestures.destroy();
		}
	});


}(window, document, window.jQuery));

// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	var SlideShow = function( instance ) {
		this.instance = instance;
		this.init();
	};

	$.extend( SlideShow.prototype, {
		timer    : null,
		isActive : false,
		$button  : null,
		speed    : 3000,

		init : function() {
			var self = this;

			self.$button = self.instance.$refs.toolbar.find('[data-fancybox-play]').on('click', function() {
				self.toggle();
			});

			if ( self.instance.group.length < 2 || !self.instance.group[ self.instance.currIndex ].opts.slideShow ) {
				self.$button.hide();
			}
		},

		set : function() {
			var self = this;

			// Check if reached last element
			if ( self.instance && self.instance.current && (self.instance.current.opts.loop || self.instance.currIndex < self.instance.group.length - 1 )) {
				self.timer = setTimeout(function() {
					self.instance.next();

				}, self.instance.current.opts.slideShow.speed || self.speed);

			} else {
				self.stop();
				self.instance.idleSecondsCounter = 0;
				self.instance.showControls();
			}

		},

		clear : function() {
			var self = this;

			clearTimeout( self.timer );

			self.timer = null;
		},

		start : function() {
			var self = this;
			var current = self.instance.current;

			if ( self.instance && current && ( current.opts.loop || current.index < self.instance.group.length - 1 )) {

				self.isActive = true;

				self.$button
					.attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_STOP )
					.addClass( 'fancybox-button--pause' );

				if ( current.isComplete ) {
					self.set();
				}
			}
		},

		stop : function() {
			var self = this;
			var current = self.instance.current;

			self.clear();

			self.$button
				.attr( 'title', current.opts.i18n[ current.opts.lang ].PLAY_START )
				.removeClass( 'fancybox-button--pause' );

			self.isActive = false;
		},

		toggle : function() {
			var self = this;

			if ( self.isActive ) {
				self.stop();

			} else {
				self.start();
			}
		}

	});

	$(document).on({
		'onInit.fb' : function(e, instance) {
			if ( instance && !instance.SlideShow ) {
				instance.SlideShow = new SlideShow( instance );
			}
		},

		'beforeShow.fb' : function(e, instance, current, firstRun) {
			var SlideShow = instance && instance.SlideShow;

			if ( firstRun ) {

				if ( SlideShow && current.opts.slideShow.autoStart ) {
					SlideShow.start();
				}

			} else if ( SlideShow && SlideShow.isActive )  {
				SlideShow.clear();
			}
		},

		'afterShow.fb' : function(e, instance, current) {
			var SlideShow = instance && instance.SlideShow;

			if ( SlideShow && SlideShow.isActive ) {
				SlideShow.set();
			}
		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
			var SlideShow = instance && instance.SlideShow;

			// "P" or Spacebar
			if ( SlideShow && current.opts.slideShow && ( keycode === 80 || keycode === 32 ) && !$(document.activeElement).is( 'button,a,input' ) ) {
				keypress.preventDefault();

				SlideShow.toggle();
			}
		},

		'beforeClose.fb onDeactivate.fb' : function(e, instance) {
			var SlideShow = instance && instance.SlideShow;

			if ( SlideShow ) {
				SlideShow.stop();
			}
		}
	});

	// Page Visibility API to pause slideshow when window is not active
	$(document).on("visibilitychange", function() {
		var instance  = $.fancybox.getInstance();
		var SlideShow = instance && instance.SlideShow;

		if ( SlideShow && SlideShow.isActive ) {
			if ( document.hidden ) {
				SlideShow.clear();

			} else {
				SlideShow.set();
			}
		}
	});

}(document, window.jQuery));

// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	// Collection of methods supported by user browser
	var fn = (function () {

		var fnMap = [
			[
				'requestFullscreen',
				'exitFullscreen',
				'fullscreenElement',
				'fullscreenEnabled',
				'fullscreenchange',
				'fullscreenerror'
			],
			// new WebKit
			[
				'webkitRequestFullscreen',
				'webkitExitFullscreen',
				'webkitFullscreenElement',
				'webkitFullscreenEnabled',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			// old WebKit (Safari 5.1)
			[
				'webkitRequestFullScreen',
				'webkitCancelFullScreen',
				'webkitCurrentFullScreenElement',
				'webkitCancelFullScreen',
				'webkitfullscreenchange',
				'webkitfullscreenerror'

			],
			[
				'mozRequestFullScreen',
				'mozCancelFullScreen',
				'mozFullScreenElement',
				'mozFullScreenEnabled',
				'mozfullscreenchange',
				'mozfullscreenerror'
			],
			[
				'msRequestFullscreen',
				'msExitFullscreen',
				'msFullscreenElement',
				'msFullscreenEnabled',
				'MSFullscreenChange',
				'MSFullscreenError'
			]
		];

		var val;
		var ret = {};
		var i, j;

		for ( i = 0; i < fnMap.length; i++ ) {
			val = fnMap[ i ];

			if ( val && val[ 1 ] in document ) {
				for ( j = 0; j < val.length; j++ ) {
					ret[ fnMap[ 0 ][ j ] ] = val[ j ];
				}

				return ret;
			}
		}

		return false;
	})();

	// If browser does not have Full Screen API, then simply unset default button template and stop
	if ( !fn ) {
		$.fancybox.defaults.btnTpl.fullScreen = false;

		return;
	}

	var FullScreen = {
		request : function ( elem ) {

			elem = elem || document.documentElement;

			elem[ fn.requestFullscreen ]( elem.ALLOW_KEYBOARD_INPUT );

		},
		exit : function () {

			document[ fn.exitFullscreen ]();

		},
		toggle : function ( elem ) {

			elem = elem || document.documentElement;

			if ( this.isFullscreen() ) {
				this.exit();

			} else {
				this.request( elem );
			}

		},
		isFullscreen : function()  {

			return Boolean( document[ fn.fullscreenElement ] );

		},
		enabled : function()  {

			return Boolean( document[ fn.fullscreenEnabled ] );

		}
	};

	$(document).on({
		'onInit.fb' : function(e, instance) {
			var $container;

			var $button = instance.$refs.toolbar.find('[data-fancybox-fullscreen]');

			if ( instance && !instance.FullScreen && instance.group[ instance.currIndex ].opts.fullScreen ) {
				$container = instance.$refs.container;

				$container.on('click.fb-fullscreen', '[data-fancybox-fullscreen]', function(e) {

					e.stopPropagation();
					e.preventDefault();

					FullScreen.toggle( $container[ 0 ] );

				});

				if ( instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true ) {
					FullScreen.request( $container[ 0 ] );
				}

				// Expose API
				instance.FullScreen = FullScreen;

			} else {
				$button.hide();
			}

		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {

			// "P" or Spacebar
			if ( instance && instance.FullScreen && keycode === 70 ) {
				keypress.preventDefault();

				instance.FullScreen.toggle( instance.$refs.container[ 0 ] );
			}

		},

		'beforeClose.fb' : function( instance ) {
			if ( instance && instance.FullScreen ) {
				FullScreen.exit();
			}
		}
	});

	$(document).on(fn.fullscreenchange, function() {
		var instance = $.fancybox.getInstance();

		// If image is zooming, then force to stop and reposition properly
		if ( instance.current && instance.current.type === 'image' && instance.isAnimating ) {
			instance.current.$content.css( 'transition', 'none' );

			instance.isAnimating = false;

			instance.update( true, true, 0 );
		}

	});

}(document, window.jQuery));

// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
;(function (document, $) {
	'use strict';

	var FancyThumbs = function( instance ) {
		this.instance = instance;
		this.init();
	};

	$.extend( FancyThumbs.prototype, {

		$button		: null,
		$grid		: null,
		$list		: null,
		isVisible	: false,

		init : function() {
			var self = this;

			var first  = self.instance.group[0],
				second = self.instance.group[1];

			self.$button = self.instance.$refs.toolbar.find( '[data-fancybox-thumbs]' );

			if ( self.instance.group.length > 1 && self.instance.group[ self.instance.currIndex ].opts.thumbs && (
					( first.type == 'image'  || first.opts.thumb  || first.opts.$thumb ) &&
					( second.type == 'image' || second.opts.thumb || second.opts.$thumb )
				)) {

				self.$button.on('click', function() {
					self.toggle();
				});

				self.isActive = true;

			} else {
				self.$button.hide();

				self.isActive = false;
			}

		},

		create : function() {
			var instance = this.instance,
				list,
				src;

			this.$grid = $('<div class="fancybox-thumbs"></div>').appendTo( instance.$refs.container );

			list = '<ul>';

			$.each(instance.group, function( i, item ) {

				src = item.opts.thumb || ( item.opts.$thumb ? item.opts.$thumb.attr('src') : null );

				if ( !src && item.type === 'image' ) {
					src = item.src;
				}

				if ( src && src.length ) {
					list += '<li data-index="' + i + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + src + '" /></li>';
				}

			});

			list += '</ul>';

			this.$list = $( list ).appendTo( this.$grid ).on('click', 'li', function() {
				instance.jumpTo( $(this).data('index') );
			});

			this.$list.find('img').hide().one('load', function() {

				var $parent		= $(this).parent().removeClass('fancybox-thumbs-loading'),
					thumbWidth	= $parent.outerWidth(),
					thumbHeight	= $parent.outerHeight(),
					width,
					height,
					widthRatio,
					heightRatio;

				width  = this.naturalWidth	|| this.width;
				height = this.naturalHeight	|| this.height;

				//Calculate thumbnail width/height and center it

				widthRatio  = width  / thumbWidth;
				heightRatio = height / thumbHeight;

				if (widthRatio >= 1 && heightRatio >= 1) {
					if (widthRatio > heightRatio) {
						width  = width / heightRatio;
						height = thumbHeight;

					} else {
						width  = thumbWidth;
						height = height / widthRatio;
					}
				}

				$(this).css({
					width         : Math.floor(width),
					height        : Math.floor(height),
					'margin-top'  : Math.min( 0, Math.floor(thumbHeight * 0.3 - height * 0.3 ) ),
					'margin-left' : Math.min( 0, Math.floor(thumbWidth  * 0.5 - width  * 0.5 ) )
				}).show();

			})
				.each(function() {
					this.src = $( this ).data( 'src' );
				});

		},

		focus : function() {

			if ( this.instance.current ) {
				this.$list
					.children()
					.removeClass('fancybox-thumbs-active')
					.filter('[data-index="' + this.instance.current.index  + '"]')
					.addClass('fancybox-thumbs-active')
					.focus();
			}

		},

		close : function() {
			this.$grid.hide();
		},

		update : function() {

			this.instance.$refs.container.toggleClass( 'fancybox-show-thumbs', this.isVisible );

			if ( this.isVisible ) {

				if ( !this.$grid ) {
					this.create();
				}

				this.instance.trigger( 'onThumbsShow' );

				this.focus();

			} else if ( this.$grid ) {
				this.instance.trigger( 'onThumbsHide' );
			}

			// Update content position
			this.instance.update();

		},

		hide : function() {
			this.isVisible = false;
			this.update();
		},

		show : function() {
			this.isVisible = true;
			this.update();
		},

		toggle : function() {
			this.isVisible = !this.isVisible;
			this.update();
		}

	});

	$(document).on({

		'onInit.fb' : function(e, instance) {
			if ( instance && !instance.Thumbs ) {
				instance.Thumbs = new FancyThumbs( instance );
			}
		},

		'beforeShow.fb' : function(e, instance, item, firstRun) {
			var Thumbs = instance && instance.Thumbs;

			if ( !Thumbs || !Thumbs.isActive ) {
				return;
			}

			if ( item.modal ) {
				Thumbs.$button.hide();

				Thumbs.hide();

				return;
			}

			if ( firstRun && instance.opts.thumbs.autoStart === true ) {
				Thumbs.show();
			}

			if ( Thumbs.isVisible ) {
				Thumbs.focus();
			}
		},

		'afterKeydown.fb' : function(e, instance, current, keypress, keycode) {
			var Thumbs = instance && instance.Thumbs;

			// "G"
			if ( Thumbs && Thumbs.isActive && keycode === 71 ) {
				keypress.preventDefault();

				Thumbs.toggle();
			}
		},

		'beforeClose.fb' : function( e, instance ) {
			var Thumbs = instance && instance.Thumbs;

			if ( Thumbs && Thumbs.isVisible && instance.opts.thumbs.hideOnClose !== false ) {
				Thumbs.close();
			}
		}

	});

}(document, window.jQuery));

// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
;(function (document, window, $) {
	'use strict';

	// Simple $.escapeSelector polyfill (for jQuery prior v3)
	if ( !$.escapeSelector ) {
		$.escapeSelector = function( sel ) {
			var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
			var fcssescape = function( ch, asCodePoint ) {
				if ( asCodePoint ) {
					// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
					if ( ch === "\0" ) {
						return "\uFFFD";
					}

					// Control characters and (dependent upon position) numbers get escaped as code points
					return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
				}

				// Other potentially-special ASCII characters get backslash-escaped
				return "\\" + ch;
			};

			return ( sel + "" ).replace( rcssescape, fcssescape );
		};
	}

	// Variable containing last hash value set by fancyBox
	// It will be used to determine if fancyBox needs to close after hash change is detected
	var currentHash = null;

	// Throtlling the history change
	var timerID = null;

	// Get info about gallery name and current index from url
	function parseUrl() {
		var hash    = window.location.hash.substr( 1 );
		var rez     = hash.split( '-' );
		var index   = rez.length > 1 && /^\+?\d+$/.test( rez[ rez.length - 1 ] ) ? parseInt( rez.pop( -1 ), 10 ) || 1 : 1;
		var gallery = rez.join( '-' );

		// Index is starting from 1
		if ( index < 1 ) {
			index = 1;
		}

		return {
			hash    : hash,
			index   : index,
			gallery : gallery
		};
	}

	// Trigger click evnt on links to open new fancyBox instance
	function triggerFromUrl( url ) {
		var $el;

		if ( url.gallery !== '' ) {

			// If we can find element matching 'data-fancybox' atribute, then trigger click event for that ..
			$el = $( "[data-fancybox='" + $.escapeSelector( url.gallery ) + "']" ).eq( url.index - 1 );

			if ( $el.length ) {
				$el.trigger( 'click' );

			} else {

				// .. if not, try finding element by ID
				$( "#" + $.escapeSelector( url.gallery ) + "" ).trigger( 'click' );

			}

		}
	}

	// Get gallery name from current instance
	function getGallery( instance ) {
		var opts;

		if ( !instance ) {
			return false;
		}

		opts = instance.current ? instance.current.opts : instance.opts;

		return opts.$orig ? opts.$orig.data( 'fancybox' ) : ( opts.hash || '' );
	}

	// Star when DOM becomes ready
	$(function() {

		// Small delay is used to allow other scripts to process "dom ready" event
		setTimeout(function() {

			// Check if this module is not disabled
			if ( $.fancybox.defaults.hash === false ) {
				return;
			}

			// Update hash when opening/closing fancyBox
			$(document).on({
				'onInit.fb' : function( e, instance ) {
					var url, gallery;

					if ( instance.group[ instance.currIndex ].opts.hash === false ) {
						return;
					}

					url     = parseUrl();
					gallery = getGallery( instance );

					// Make sure gallery start index matches index from hash
					if ( gallery && url.gallery && gallery == url.gallery ) {
						instance.currIndex = url.index - 1;
					}

				},

				'beforeShow.fb' : function( e, instance, current, firstRun ) {
					var gallery;

					if ( current.opts.hash === false ) {
						return;
					}

					gallery = getGallery( instance );

					// Update window hash
					if ( gallery && gallery !== '' ) {

						if ( window.location.hash.indexOf( gallery ) < 0 ) {
							instance.opts.origHash = window.location.hash;
						}

						currentHash = gallery + ( instance.group.length > 1 ? '-' + ( current.index + 1 ) : '' );

						if ( 'replaceState' in window.history ) {
							if ( timerID ) {
								clearTimeout( timerID );
							}

							timerID = setTimeout(function() {
								window.history[ firstRun ? 'pushState' : 'replaceState' ]( {} , document.title, window.location.pathname + window.location.search + '#' +  currentHash );

								timerID = null;

							}, 300);

						} else {
							window.location.hash = currentHash;
						}

					}

				},

				'beforeClose.fb' : function( e, instance, current ) {
					var gallery, origHash;

					if ( timerID ) {
						clearTimeout( timerID );
					}

					if ( current.opts.hash === false ) {
						return;
					}

					gallery  = getGallery( instance );
					origHash = instance && instance.opts.origHash ? instance.opts.origHash : '';

					// Remove hash from location bar
					if ( gallery && gallery !== '' ) {

						if ( 'replaceState' in history ) {
							window.history.replaceState( {} , document.title, window.location.pathname + window.location.search + origHash );

						} else {
							window.location.hash = origHash;

							// Keep original scroll position
							$( window ).scrollTop( instance.scrollTop ).scrollLeft( instance.scrollLeft );
						}
					}

					currentHash = null;
				}
			});

			// Check if need to close after url has changed
			$(window).on('hashchange.fb', function() {
				var url = parseUrl();

				if ( $.fancybox.getInstance() ) {
					if ( currentHash && currentHash !== url.gallery + '-' + url.index && !( url.index === 1 && currentHash == url.gallery ) ) {
						currentHash = null;

						$.fancybox.close();
					}

				} else if ( url.gallery !== '' ) {
					triggerFromUrl( url );
				}
			});

			// If navigating away from current page
			$(window).one('unload.fb popstate.fb', function() {
				$.fancybox.getInstance( 'close', true, 0 );
			});

			// Check current hash and trigger click event on matching element to start fancyBox, if needed
			triggerFromUrl( parseUrl() );

		}, 50);

	});


}(document, window, window.jQuery));
/*jshint browser:true */
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/

;(function( $ ){

  'use strict';

  $.fn.fitVids = function( options ) {
    var settings = {
      customSelector: null,
      ignore: null
    };

    if(!document.getElementById('fit-vids-style')) {
      // appendStyles: https://github.com/toddmotto/fluidvids/blob/master/dist/fluidvids.js
      var head = document.head || document.getElementsByTagName('head')[0];
      var css = '.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';
      var div = document.createElement("div");
      div.innerHTML = '<p>x</p><style id="fit-vids-style">' + css + '</style>';
      head.appendChild(div.childNodes[1]);
    }

    if ( options ) {
      $.extend( settings, options );
    }

    return this.each(function(){
      var selectors = [
        'iframe[src*="player.vimeo.com"]',
        'iframe[src*="youtube.com"]',
        'iframe[src*="youtube-nocookie.com"]',
        'iframe[src*="kickstarter.com"][src*="video.html"]',
        'object',
        'embed'
      ];

      if (settings.customSelector) {
        selectors.push(settings.customSelector);
      }

      var ignoreList = '.fitvidsignore';

      if(settings.ignore) {
        ignoreList = ignoreList + ', ' + settings.ignore;
      }

      var $allVideos = $(this).find(selectors.join(','));
      $allVideos = $allVideos.not('object object'); // SwfObj conflict patch
      $allVideos = $allVideos.not(ignoreList); // Disable FitVids on this video.

      $allVideos.each(function(count){
        var $this = $(this);
        if($this.parents(ignoreList).length > 0) {
          return; // Disable FitVids on this video.
        }
        if (this.tagName.toLowerCase() === 'embed' && $this.parent('object').length || $this.parent('.fluid-width-video-wrapper').length) { return; }
        if ((!$this.css('height') && !$this.css('width')) && (isNaN($this.attr('height')) || isNaN($this.attr('width'))))
        {
          $this.attr('height', 9);
          $this.attr('width', 16);
        }
        var height = ( this.tagName.toLowerCase() === 'object' || ($this.attr('height') && !isNaN(parseInt($this.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Slideout=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
	'use strict';

	/**
	 * Module dependencies
	 */
	var decouple = require('decouple');
	var Emitter = require('emitter');

	/**
	 * Privates
	 */
	var scrollTimeout;
	var scrolling = false;
	var doc = window.document;
	var html = doc.documentElement;
	var msPointerSupported = window.navigator.msPointerEnabled;
	var touch = {
		'start': msPointerSupported ? 'MSPointerDown' : 'touchstart',
		'move': msPointerSupported ? 'MSPointerMove' : 'touchmove',
		'end': msPointerSupported ? 'MSPointerUp' : 'touchend'
	};
	var prefix = (function prefix() {
		var regex = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/;
		var styleDeclaration = doc.getElementsByTagName('script')[0].style;
		for (var prop in styleDeclaration) {
			if (regex.test(prop)) {
				return '-' + prop.match(regex)[0].toLowerCase() + '-';
			}
		}
		// Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
		// However (prop in style) returns the correct value, so we'll have to test for
		// the precence of a specific property
		if ('WebkitOpacity' in styleDeclaration) { return '-webkit-'; }
		if ('KhtmlOpacity' in styleDeclaration) { return '-khtml-'; }
		return '';
	}());
	function extend(destination, from) {
		for (var prop in from) {
			if (from[prop]) {
				destination[prop] = from[prop];
			}
		}
		return destination;
	}
	function inherits(child, uber) {
		child.prototype = extend(child.prototype || {}, uber.prototype);
	}
	function hasIgnoredElements(el) {
		while (el.parentNode) {
			if (el.getAttribute('data-slideout-ignore') !== null) {
				return el;
			}
			el = el.parentNode;
		}
		return null;
	}

	/**
	 * Slideout constructor
	 */
	function Slideout(options) {
		options = options || {};

		// Sets default values
		this._startOffsetX = 0;
		this._currentOffsetX = 0;
		this._opening = false;
		this._moved = false;
		this._opened = false;
		this._preventOpen = false;

		// Sets panel
		this.panel = options.panel;
		this.menu = options.menu;

		// Sets options
		this._touch = options.touch === undefined ? true : options.touch && true;
		this._side = options.side || 'left';
		this._easing = options.fx || options.easing || 'ease';
		this._duration = parseInt(options.duration, 10) || 300;
		this._tolerance = parseInt(options.tolerance, 10) || 70;
		this._padding = this._translateTo = parseInt(options.padding, 10) || 256;
		this._orientation = this._side === 'right' ? -1 : 1;
		this._translateTo *= this._orientation;

		// Sets  classnames
		if (!this.panel.classList.contains('slideout-panel')) {
			this.panel.classList.add('slideout-panel');
		}
		if (!this.panel.classList.contains('slideout-panel-' + this._side)) {
			this.panel.classList.add('slideout-panel-' + this._side);
		}
		if (!this.menu.classList.contains('slideout-menu')) {
			this.menu.classList.add('slideout-menu');
		}
		if (!this.menu.classList.contains('slideout-menu-' + this._side)) {
			this.menu.classList.add('slideout-menu-' + this._side);
		}

		// Init touch events
		if (this._touch) {
			this._initTouchEvents();
		}
	}

	/**
	 * Inherits from Emitter
	 */
	inherits(Slideout, Emitter);

	/**
	 * Opens the slideout menu.
	 */
	Slideout.prototype.open = function() {
		var self = this;
		this.emit('beforeopen');
		if (!html.classList.contains('slideout-open')) {
			html.classList.add('slideout-open');
		}
		this._setTransition();
		this._translateXTo(this._translateTo);
		this._opened = true;
		setTimeout(function() {
			self.panel.style.transition = self.panel.style['-webkit-transition'] = '';
			self.emit('open');
		}, this._duration + 50);
		return this;
	};

	/**
	 * Closes slideout menu.
	 */
	Slideout.prototype.close = function() {
		var self = this;
		if (!this.isOpen() && !this._opening) {
			return this;
		}
		this.emit('beforeclose');
		this._setTransition();
		this._translateXTo(0);
		this._opened = false;
		setTimeout(function() {
			html.classList.remove('slideout-open');
			self.panel.style.transition = self.panel.style['-webkit-transition'] = self.panel.style[prefix + 'transform'] = self.panel.style.transform = '';
			self.emit('close');
		}, this._duration + 50);
		return this;
	};

	/**
	 * Toggles (open/close) slideout menu.
	 */
	Slideout.prototype.toggle = function() {
		return this.isOpen() ? this.close() : this.open();
	};

	/**
	 * Returns true if the slideout is currently open, and false if it is closed.
	 */
	Slideout.prototype.isOpen = function() {
		return this._opened;
	};

	/**
	 * Translates panel and updates currentOffset with a given X point
	 */
	Slideout.prototype._translateXTo = function(translateX) {
		this._currentOffsetX = translateX;
		this.panel.style[prefix + 'transform'] = this.panel.style.transform = 'translateX(' + translateX + 'px)';
		return this;
	};

	/**
	 * Set transition properties
	 */
	Slideout.prototype._setTransition = function() {
		this.panel.style[prefix + 'transition'] = this.panel.style.transition = prefix + 'transform ' + this._duration + 'ms ' + this._easing;
		return this;
	};

	/**
	 * Initializes touch event
	 */
	Slideout.prototype._initTouchEvents = function() {
		var self = this;

		/**
		 * Decouple scroll event
		 */
		this._onScrollFn = decouple(doc, 'scroll', function() {
			if (!self._moved) {
				clearTimeout(scrollTimeout);
				scrolling = true;
				scrollTimeout = setTimeout(function() {
					scrolling = false;
				}, 250);
			}
		});

		/**
		 * Prevents touchmove event if slideout is moving
		 */
		this._preventMove = function(eve) {
			if (self._moved) {
				eve.preventDefault();
			}
		};

		doc.addEventListener(touch.move, this._preventMove);

		/**
		 * Resets values on touchstart
		 */
		this._resetTouchFn = function(eve) {
			if (typeof eve.touches === 'undefined') {
				return;
			}

			self._moved = false;
			self._opening = false;
			self._startOffsetX = eve.touches[0].pageX;
			self._preventOpen = (!self._touch || (!self.isOpen() && self.menu.clientWidth !== 0));
		};

		this.panel.addEventListener(touch.start, this._resetTouchFn);

		/**
		 * Resets values on touchcancel
		 */
		this._onTouchCancelFn = function() {
			self._moved = false;
			self._opening = false;
		};

		this.panel.addEventListener('touchcancel', this._onTouchCancelFn);

		/**
		 * Toggles slideout on touchend
		 */
		this._onTouchEndFn = function() {
			if (self._moved) {
				self.emit('translateend');
				(self._opening && Math.abs(self._currentOffsetX) > self._tolerance) ? self.open() : self.close();
			}
			self._moved = false;
		};

		this.panel.addEventListener(touch.end, this._onTouchEndFn);

		/**
		 * Translates panel on touchmove
		 */
		this._onTouchMoveFn = function(eve) {
			if (
				scrolling ||
				self._preventOpen ||
				typeof eve.touches === 'undefined' ||
				hasIgnoredElements(eve.target)
			) {
				return;
			}

			var dif_x = eve.touches[0].clientX - self._startOffsetX;
			var translateX = self._currentOffsetX = dif_x;

			if (Math.abs(translateX) > self._padding) {
				return;
			}

			if (Math.abs(dif_x) > 20) {

				self._opening = true;

				var oriented_dif_x = dif_x * self._orientation;

				if (self._opened && oriented_dif_x > 0 || !self._opened && oriented_dif_x < 0) {
					return;
				}

				if (!self._moved) {
					self.emit('translatestart');
				}

				if (oriented_dif_x <= 0) {
					translateX = dif_x + self._padding * self._orientation;
					self._opening = false;
				}

				if (!(self._moved && html.classList.contains('slideout-open'))) {
					html.classList.add('slideout-open');
				}

				self.panel.style[prefix + 'transform'] = self.panel.style.transform = 'translateX(' + translateX + 'px)';
				self.emit('translate', translateX);
				self._moved = true;
			}

		};

		this.panel.addEventListener(touch.move, this._onTouchMoveFn);

		return this;
	};

	/**
	 * Enable opening the slideout via touch events.
	 */
	Slideout.prototype.enableTouch = function() {
		this._touch = true;
		return this;
	};

	/**
	 * Disable opening the slideout via touch events.
	 */
	Slideout.prototype.disableTouch = function() {
		this._touch = false;
		return this;
	};

	/**
	 * Destroy an instance of slideout.
	 */
	Slideout.prototype.destroy = function() {
		// Close before clean
		this.close();

		// Remove event listeners
		doc.removeEventListener(touch.move, this._preventMove);
		this.panel.removeEventListener(touch.start, this._resetTouchFn);
		this.panel.removeEventListener('touchcancel', this._onTouchCancelFn);
		this.panel.removeEventListener(touch.end, this._onTouchEndFn);
		this.panel.removeEventListener(touch.move, this._onTouchMoveFn);
		doc.removeEventListener('scroll', this._onScrollFn);

		// Remove methods
		this.open = this.close = function() {};

		// Return the instance so it can be easily dereferenced
		return this;
	};

	/**
	 * Expose Slideout
	 */
	module.exports = Slideout;

},{"decouple":2,"emitter":3}],2:[function(require,module,exports){
	'use strict';

	var requestAnimFrame = (function() {
		return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			function (callback) {
				window.setTimeout(callback, 1000 / 60);
			};
	}());

	function decouple(node, event, fn) {
		var eve,
			tracking = false;

		function captureEvent(e) {
			eve = e;
			track();
		}

		function track() {
			if (!tracking) {
				requestAnimFrame(update);
				tracking = true;
			}
		}

		function update() {
			fn.call(node, eve);
			tracking = false;
		}

		node.addEventListener(event, captureEvent, false);

		return captureEvent;
	}

	/**
	 * Expose decouple
	 */
	module.exports = decouple;

},{}],3:[function(require,module,exports){
	"use strict";

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	exports.__esModule = true;
	/**
	 * Creates a new instance of Emitter.
	 * @class
	 * @returns {Object} Returns a new instance of Emitter.
	 * @example
	 * // Creates a new instance of Emitter.
	 * var Emitter = require('emitter');
	 *
	 * var emitter = new Emitter();
	 */

	var Emitter = (function () {
		function Emitter() {
			_classCallCheck(this, Emitter);
		}

		/**
		 * Adds a listener to the collection for the specified event.
		 * @memberof! Emitter.prototype
		 * @function
		 * @param {String} event - The event name.
		 * @param {Function} listener - A listener function to add.
		 * @returns {Object} Returns an instance of Emitter.
		 * @example
		 * // Add an event listener to "foo" event.
		 * emitter.on('foo', listener);
		 */

		Emitter.prototype.on = function on(event, listener) {
			// Use the current collection or create it.
			this._eventCollection = this._eventCollection || {};

			// Use the current collection of an event or create it.
			this._eventCollection[event] = this._eventCollection[event] || [];

			// Appends the listener into the collection of the given event
			this._eventCollection[event].push(listener);

			return this;
		};

		/**
		 * Adds a listener to the collection for the specified event that will be called only once.
		 * @memberof! Emitter.prototype
		 * @function
		 * @param {String} event - The event name.
		 * @param {Function} listener - A listener function to add.
		 * @returns {Object} Returns an instance of Emitter.
		 * @example
		 * // Will add an event handler to "foo" event once.
		 * emitter.once('foo', listener);
		 */

		Emitter.prototype.once = function once(event, listener) {
			var self = this;

			function fn() {
				self.off(event, fn);
				listener.apply(this, arguments);
			}

			fn.listener = listener;

			this.on(event, fn);

			return this;
		};

		/**
		 * Removes a listener from the collection for the specified event.
		 * @memberof! Emitter.prototype
		 * @function
		 * @param {String} event - The event name.
		 * @param {Function} listener - A listener function to remove.
		 * @returns {Object} Returns an instance of Emitter.
		 * @example
		 * // Remove a given listener.
		 * emitter.off('foo', listener);
		 */

		Emitter.prototype.off = function off(event, listener) {

			var listeners = undefined;

			// Defines listeners value.
			if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
				return this;
			}

			listeners.forEach(function (fn, i) {
				if (fn === listener || fn.listener === listener) {
					// Removes the given listener.
					listeners.splice(i, 1);
				}
			});

			// Removes an empty event collection.
			if (listeners.length === 0) {
				delete this._eventCollection[event];
			}

			return this;
		};

		/**
		 * Execute each item in the listener collection in order with the specified data.
		 * @memberof! Emitter.prototype
		 * @function
		 * @param {String} event - The name of the event you want to emit.
		 * @param {...Object} data - Data to pass to the listeners.
		 * @returns {Object} Returns an instance of Emitter.
		 * @example
		 * // Emits the "foo" event with 'param1' and 'param2' as arguments.
		 * emitter.emit('foo', 'param1', 'param2');
		 */

		Emitter.prototype.emit = function emit(event) {
			var _this = this;

			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			var listeners = undefined;

			// Defines listeners value.
			if (!this._eventCollection || !(listeners = this._eventCollection[event])) {
				return this;
			}

			// Clone listeners
			listeners = listeners.slice(0);

			listeners.forEach(function (fn) {
				return fn.apply(_this, args);
			});

			return this;
		};

		return Emitter;
	})();

	/**
	 * Exports Emitter
	 */
	exports["default"] = Emitter;
	module.exports = exports["default"];
},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9kZWNvdXBsZS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9lbWl0dGVyL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXNcbiAqL1xudmFyIGRlY291cGxlID0gcmVxdWlyZSgnZGVjb3VwbGUnKTtcbnZhciBFbWl0dGVyID0gcmVxdWlyZSgnZW1pdHRlcicpO1xuXG4vKipcbiAqIFByaXZhdGVzXG4gKi9cbnZhciBzY3JvbGxUaW1lb3V0O1xudmFyIHNjcm9sbGluZyA9IGZhbHNlO1xudmFyIGRvYyA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbnZhciBtc1BvaW50ZXJTdXBwb3J0ZWQgPSB3aW5kb3cubmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQ7XG52YXIgdG91Y2ggPSB7XG4gICdzdGFydCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJEb3duJyA6ICd0b3VjaHN0YXJ0JyxcbiAgJ21vdmUnOiBtc1BvaW50ZXJTdXBwb3J0ZWQgPyAnTVNQb2ludGVyTW92ZScgOiAndG91Y2htb3ZlJyxcbiAgJ2VuZCc6IG1zUG9pbnRlclN1cHBvcnRlZCA/ICdNU1BvaW50ZXJVcCcgOiAndG91Y2hlbmQnXG59O1xudmFyIHByZWZpeCA9IChmdW5jdGlvbiBwcmVmaXgoKSB7XG4gIHZhciByZWdleCA9IC9eKFdlYmtpdHxLaHRtbHxNb3p8bXN8TykoPz1bQS1aXSkvO1xuICB2YXIgc3R5bGVEZWNsYXJhdGlvbiA9IGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF0uc3R5bGU7XG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGVEZWNsYXJhdGlvbikge1xuICAgIGlmIChyZWdleC50ZXN0KHByb3ApKSB7XG4gICAgICByZXR1cm4gJy0nICsgcHJvcC5tYXRjaChyZWdleClbMF0udG9Mb3dlckNhc2UoKSArICctJztcbiAgICB9XG4gIH1cbiAgLy8gTm90aGluZyBmb3VuZCBzbyBmYXI/IFdlYmtpdCBkb2VzIG5vdCBlbnVtZXJhdGUgb3ZlciB0aGUgQ1NTIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdC5cbiAgLy8gSG93ZXZlciAocHJvcCBpbiBzdHlsZSkgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZSwgc28gd2UnbGwgaGF2ZSB0byB0ZXN0IGZvclxuICAvLyB0aGUgcHJlY2VuY2Ugb2YgYSBzcGVjaWZpYyBwcm9wZXJ0eVxuICBpZiAoJ1dlYmtpdE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICctd2Via2l0LSc7IH1cbiAgaWYgKCdLaHRtbE9wYWNpdHknIGluIHN0eWxlRGVjbGFyYXRpb24pIHsgcmV0dXJuICcta2h0bWwtJzsgfVxuICByZXR1cm4gJyc7XG59KCkpO1xuZnVuY3Rpb24gZXh0ZW5kKGRlc3RpbmF0aW9uLCBmcm9tKSB7XG4gIGZvciAodmFyIHByb3AgaW4gZnJvbSkge1xuICAgIGlmIChmcm9tW3Byb3BdKSB7XG4gICAgICBkZXN0aW5hdGlvbltwcm9wXSA9IGZyb21bcHJvcF07XG4gICAgfVxuICB9XG4gIHJldHVybiBkZXN0aW5hdGlvbjtcbn1cbmZ1bmN0aW9uIGluaGVyaXRzKGNoaWxkLCB1YmVyKSB7XG4gIGNoaWxkLnByb3RvdHlwZSA9IGV4dGVuZChjaGlsZC5wcm90b3R5cGUgfHwge30sIHViZXIucHJvdG90eXBlKTtcbn1cbmZ1bmN0aW9uIGhhc0lnbm9yZWRFbGVtZW50cyhlbCkge1xuICB3aGlsZSAoZWwucGFyZW50Tm9kZSkge1xuICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGVvdXQtaWdub3JlJykgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbDtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIFNsaWRlb3V0IGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFNsaWRlb3V0KG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgLy8gU2V0cyBkZWZhdWx0IHZhbHVlc1xuICB0aGlzLl9zdGFydE9mZnNldFggPSAwO1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IDA7XG4gIHRoaXMuX29wZW5pbmcgPSBmYWxzZTtcbiAgdGhpcy5fbW92ZWQgPSBmYWxzZTtcbiAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XG4gIHRoaXMuX3ByZXZlbnRPcGVuID0gZmFsc2U7XG5cbiAgLy8gU2V0cyBwYW5lbFxuICB0aGlzLnBhbmVsID0gb3B0aW9ucy5wYW5lbDtcbiAgdGhpcy5tZW51ID0gb3B0aW9ucy5tZW51O1xuXG4gIC8vIFNldHMgb3B0aW9uc1xuICB0aGlzLl90b3VjaCA9IG9wdGlvbnMudG91Y2ggPT09IHVuZGVmaW5lZCA/IHRydWUgOiBvcHRpb25zLnRvdWNoICYmIHRydWU7XG4gIHRoaXMuX3NpZGUgPSBvcHRpb25zLnNpZGUgfHwgJ2xlZnQnO1xuICB0aGlzLl9lYXNpbmcgPSBvcHRpb25zLmZ4IHx8wqBvcHRpb25zLmVhc2luZyB8fCAnZWFzZSc7XG4gIHRoaXMuX2R1cmF0aW9uID0gcGFyc2VJbnQob3B0aW9ucy5kdXJhdGlvbiwgMTApIHx8IDMwMDtcbiAgdGhpcy5fdG9sZXJhbmNlID0gcGFyc2VJbnQob3B0aW9ucy50b2xlcmFuY2UsIDEwKSB8fCA3MDtcbiAgdGhpcy5fcGFkZGluZyA9IHRoaXMuX3RyYW5zbGF0ZVRvID0gcGFyc2VJbnQob3B0aW9ucy5wYWRkaW5nLCAxMCkgfHwgMjU2O1xuICB0aGlzLl9vcmllbnRhdGlvbiA9IHRoaXMuX3NpZGUgPT09ICdyaWdodCcgPyAtMSA6IDE7XG4gIHRoaXMuX3RyYW5zbGF0ZVRvICo9IHRoaXMuX29yaWVudGF0aW9uO1xuXG4gIC8vIFNldHMgIGNsYXNzbmFtZXNcbiAgaWYgKCF0aGlzLnBhbmVsLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtcGFuZWwnKSkge1xuICAgIHRoaXMucGFuZWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtcGFuZWwnKTtcbiAgfVxuICBpZiAoIXRoaXMucGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1wYW5lbC0nICsgdGhpcy5fc2lkZSkpIHtcbiAgICB0aGlzLnBhbmVsLmNsYXNzTGlzdC5hZGQoJ3NsaWRlb3V0LXBhbmVsLScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuICBpZiAoIXRoaXMubWVudS5jbGFzc0xpc3QuY29udGFpbnMoJ3NsaWRlb3V0LW1lbnUnKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51Jyk7XG4gIH1cbiAgaWYgKCF0aGlzLm1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKSkge1xuICAgIHRoaXMubWVudS5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1tZW51LScgKyB0aGlzLl9zaWRlKTtcbiAgfVxuXG4gIC8vIEluaXQgdG91Y2ggZXZlbnRzXG4gIGlmICh0aGlzLl90b3VjaCkge1xuICAgIHRoaXMuX2luaXRUb3VjaEV2ZW50cygpO1xuICB9XG59XG5cbi8qKlxuICogSW5oZXJpdHMgZnJvbSBFbWl0dGVyXG4gKi9cbmluaGVyaXRzKFNsaWRlb3V0LCBFbWl0dGVyKTtcblxuLyoqXG4gKiBPcGVucyB0aGUgc2xpZGVvdXQgbWVudS5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLmVtaXQoJ2JlZm9yZW9wZW4nKTtcbiAgaWYgKCFodG1sLmNsYXNzTGlzdC5jb250YWlucygnc2xpZGVvdXQtb3BlbicpKSB7XG4gICAgaHRtbC5jbGFzc0xpc3QuYWRkKCdzbGlkZW91dC1vcGVuJyk7XG4gIH1cbiAgdGhpcy5fc2V0VHJhbnNpdGlvbigpO1xuICB0aGlzLl90cmFuc2xhdGVYVG8odGhpcy5fdHJhbnNsYXRlVG8pO1xuICB0aGlzLl9vcGVuZWQgPSB0cnVlO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNlbGYucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHNlbGYucGFuZWwuc3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbiddID0gJyc7XG4gICAgc2VsZi5lbWl0KCdvcGVuJyk7XG4gIH0sIHRoaXMuX2R1cmF0aW9uICsgNTApO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQ2xvc2VzIHNsaWRlb3V0IG1lbnUuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICghdGhpcy5pc09wZW4oKSAmJiAhdGhpcy5fb3BlbmluZykge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHRoaXMuZW1pdCgnYmVmb3JlY2xvc2UnKTtcbiAgdGhpcy5fc2V0VHJhbnNpdGlvbigpO1xuICB0aGlzLl90cmFuc2xhdGVYVG8oMCk7XG4gIHRoaXMuX29wZW5lZCA9IGZhbHNlO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVvdXQtb3BlbicpO1xuICAgIHNlbGYucGFuZWwuc3R5bGUudHJhbnNpdGlvbiA9IHNlbGYucGFuZWwuc3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbiddID0gc2VsZi5wYW5lbC5zdHlsZVtwcmVmaXggKyAndHJhbnNmb3JtJ10gPSBzZWxmLnBhbmVsLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xuICAgIHNlbGYuZW1pdCgnY2xvc2UnKTtcbiAgfSwgdGhpcy5fZHVyYXRpb24gKyA1MCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBUb2dnbGVzIChvcGVuL2Nsb3NlKSBzbGlkZW91dCBtZW51LlxuICovXG5TbGlkZW91dC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmlzT3BlbigpID8gdGhpcy5jbG9zZSgpIDogdGhpcy5vcGVuKCk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc2xpZGVvdXQgaXMgY3VycmVudGx5IG9wZW4sIGFuZCBmYWxzZSBpZiBpdCBpcyBjbG9zZWQuXG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5pc09wZW4gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX29wZW5lZDtcbn07XG5cbi8qKlxuICogVHJhbnNsYXRlcyBwYW5lbCBhbmQgdXBkYXRlcyBjdXJyZW50T2Zmc2V0IHdpdGggYSBnaXZlbiBYIHBvaW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5fdHJhbnNsYXRlWFRvID0gZnVuY3Rpb24odHJhbnNsYXRlWCkge1xuICB0aGlzLl9jdXJyZW50T2Zmc2V0WCA9IHRyYW5zbGF0ZVg7XG4gIHRoaXMucGFuZWwuc3R5bGVbcHJlZml4ICsgJ3RyYW5zZm9ybSddID0gdGhpcy5wYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNsYXRlWCArICdweCknO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRyYW5zaXRpb24gcHJvcGVydGllc1xuICovXG5TbGlkZW91dC5wcm90b3R5cGUuX3NldFRyYW5zaXRpb24gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wYW5lbC5zdHlsZVtwcmVmaXggKyAndHJhbnNpdGlvbiddID0gdGhpcy5wYW5lbC5zdHlsZS50cmFuc2l0aW9uID0gcHJlZml4ICsgJ3RyYW5zZm9ybSAnICsgdGhpcy5fZHVyYXRpb24gKyAnbXMgJyArIHRoaXMuX2Vhc2luZztcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRvdWNoIGV2ZW50XG4gKi9cblNsaWRlb3V0LnByb3RvdHlwZS5faW5pdFRvdWNoRXZlbnRzID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRGVjb3VwbGUgc2Nyb2xsIGV2ZW50XG4gICAqL1xuICB0aGlzLl9vblNjcm9sbEZuID0gZGVjb3VwbGUoZG9jLCAnc2Nyb2xsJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFzZWxmLl9tb3ZlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNjcm9sbFRpbWVvdXQpO1xuICAgICAgc2Nyb2xsaW5nID0gdHJ1ZTtcbiAgICAgIHNjcm9sbFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBzY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgIH0sIDI1MCk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogUHJldmVudHMgdG91Y2htb3ZlIGV2ZW50IGlmIHNsaWRlb3V0IGlzIG1vdmluZ1xuICAgKi9cbiAgdGhpcy5fcHJldmVudE1vdmUgPSBmdW5jdGlvbihldmUpIHtcbiAgICBpZiAoc2VsZi5fbW92ZWQpIHtcbiAgICAgIGV2ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfTtcblxuICBkb2MuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5tb3ZlLCB0aGlzLl9wcmV2ZW50TW92ZSk7XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB2YWx1ZXMgb24gdG91Y2hzdGFydFxuICAgKi9cbiAgdGhpcy5fcmVzZXRUb3VjaEZuID0gZnVuY3Rpb24oZXZlKSB7XG4gICAgaWYgKHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLl9tb3ZlZCA9IGZhbHNlO1xuICAgIHNlbGYuX29wZW5pbmcgPSBmYWxzZTtcbiAgICBzZWxmLl9zdGFydE9mZnNldFggPSBldmUudG91Y2hlc1swXS5wYWdlWDtcbiAgICBzZWxmLl9wcmV2ZW50T3BlbiA9ICghc2VsZi5fdG91Y2ggfHwgKCFzZWxmLmlzT3BlbigpICYmIHNlbGYubWVudS5jbGllbnRXaWR0aCAhPT0gMCkpO1xuICB9O1xuXG4gIHRoaXMucGFuZWwuYWRkRXZlbnRMaXN0ZW5lcih0b3VjaC5zdGFydCwgdGhpcy5fcmVzZXRUb3VjaEZuKTtcblxuICAvKipcbiAgICogUmVzZXRzIHZhbHVlcyBvbiB0b3VjaGNhbmNlbFxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaENhbmNlbEZuID0gZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIHRoaXMuX29uVG91Y2hDYW5jZWxGbik7XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgc2xpZGVvdXQgb24gdG91Y2hlbmRcbiAgICovXG4gIHRoaXMuX29uVG91Y2hFbmRGbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChzZWxmLl9tb3ZlZCkge1xuICAgICAgc2VsZi5lbWl0KCd0cmFuc2xhdGVlbmQnKTtcbiAgICAgIChzZWxmLl9vcGVuaW5nICYmIE1hdGguYWJzKHNlbGYuX2N1cnJlbnRPZmZzZXRYKSA+IHNlbGYuX3RvbGVyYW5jZSkgPyBzZWxmLm9wZW4oKSA6IHNlbGYuY2xvc2UoKTtcbiAgICB9XG4gICAgc2VsZi5fbW92ZWQgPSBmYWxzZTtcbiAgfTtcblxuICB0aGlzLnBhbmVsLmFkZEV2ZW50TGlzdGVuZXIodG91Y2guZW5kLCB0aGlzLl9vblRvdWNoRW5kRm4pO1xuXG4gIC8qKlxuICAgKiBUcmFuc2xhdGVzIHBhbmVsIG9uIHRvdWNobW92ZVxuICAgKi9cbiAgdGhpcy5fb25Ub3VjaE1vdmVGbiA9IGZ1bmN0aW9uKGV2ZSkge1xuICAgIGlmIChcbiAgICAgIHNjcm9sbGluZyB8fFxuICAgICAgc2VsZi5fcHJldmVudE9wZW4gfHxcbiAgICAgIHR5cGVvZiBldmUudG91Y2hlcyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIGhhc0lnbm9yZWRFbGVtZW50cyhldmUudGFyZ2V0KVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkaWZfeCA9IGV2ZS50b3VjaGVzWzBdLmNsaWVudFggLSBzZWxmLl9zdGFydE9mZnNldFg7XG4gICAgdmFyIHRyYW5zbGF0ZVggPSBzZWxmLl9jdXJyZW50T2Zmc2V0WCA9IGRpZl94O1xuXG4gICAgaWYgKE1hdGguYWJzKHRyYW5zbGF0ZVgpID4gc2VsZi5fcGFkZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChNYXRoLmFicyhkaWZfeCkgPiAyMCkge1xuXG4gICAgICBzZWxmLl9vcGVuaW5nID0gdHJ1ZTtcblxuICAgICAgdmFyIG9yaWVudGVkX2RpZl94ID0gZGlmX3ggKiBzZWxmLl9vcmllbnRhdGlvbjtcblxuICAgICAgaWYgKHNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA+IDAgfHwgIXNlbGYuX29wZW5lZCAmJiBvcmllbnRlZF9kaWZfeCA8IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuX21vdmVkKSB7XG4gICAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlc3RhcnQnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9yaWVudGVkX2RpZl94IDw9IDApIHtcbiAgICAgICAgdHJhbnNsYXRlWCA9IGRpZl94ICsgc2VsZi5fcGFkZGluZyAqIHNlbGYuX29yaWVudGF0aW9uO1xuICAgICAgICBzZWxmLl9vcGVuaW5nID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICghKHNlbGYuX21vdmVkICYmIGh0bWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzbGlkZW91dC1vcGVuJykpKSB7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZCgnc2xpZGVvdXQtb3BlbicpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnBhbmVsLnN0eWxlW3ByZWZpeCArICd0cmFuc2Zvcm0nXSA9IHNlbGYucGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zbGF0ZVggKyAncHgpJztcbiAgICAgIHNlbGYuZW1pdCgndHJhbnNsYXRlJywgdHJhbnNsYXRlWCk7XG4gICAgICBzZWxmLl9tb3ZlZCA9IHRydWU7XG4gICAgfVxuXG4gIH07XG5cbiAgdGhpcy5wYW5lbC5hZGRFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbmFibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmVuYWJsZVRvdWNoID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX3RvdWNoID0gdHJ1ZTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIERpc2FibGUgb3BlbmluZyB0aGUgc2xpZGVvdXQgdmlhIHRvdWNoIGV2ZW50cy5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRpc2FibGVUb3VjaCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLl90b3VjaCA9IGZhbHNlO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRGVzdHJveSBhbiBpbnN0YW5jZSBvZiBzbGlkZW91dC5cbiAqL1xuU2xpZGVvdXQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgLy8gQ2xvc2UgYmVmb3JlIGNsZWFuXG4gIHRoaXMuY2xvc2UoKTtcblxuICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXJzXG4gIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX3ByZXZlbnRNb3ZlKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLnN0YXJ0LCB0aGlzLl9yZXNldFRvdWNoRm4pO1xuICB0aGlzLnBhbmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoY2FuY2VsJywgdGhpcy5fb25Ub3VjaENhbmNlbEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLmVuZCwgdGhpcy5fb25Ub3VjaEVuZEZuKTtcbiAgdGhpcy5wYW5lbC5yZW1vdmVFdmVudExpc3RlbmVyKHRvdWNoLm1vdmUsIHRoaXMuX29uVG91Y2hNb3ZlRm4pO1xuICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fb25TY3JvbGxGbik7XG5cbiAgLy8gUmVtb3ZlIG1ldGhvZHNcbiAgdGhpcy5vcGVuID0gdGhpcy5jbG9zZSA9IGZ1bmN0aW9uKCkge307XG5cbiAgLy8gUmV0dXJuIHRoZSBpbnN0YW5jZSBzbyBpdCBjYW4gYmUgZWFzaWx5IGRlcmVmZXJlbmNlZFxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRXhwb3NlIFNsaWRlb3V0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVvdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1ZXN0QW5pbUZyYW1lID0gKGZ1bmN0aW9uKCkge1xuICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApO1xuICAgIH07XG59KCkpO1xuXG5mdW5jdGlvbiBkZWNvdXBsZShub2RlLCBldmVudCwgZm4pIHtcbiAgdmFyIGV2ZSxcbiAgICAgIHRyYWNraW5nID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gY2FwdHVyZUV2ZW50KGUpIHtcbiAgICBldmUgPSBlO1xuICAgIHRyYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFjaygpIHtcbiAgICBpZiAoIXRyYWNraW5nKSB7XG4gICAgICByZXF1ZXN0QW5pbUZyYW1lKHVwZGF0ZSk7XG4gICAgICB0cmFja2luZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlKCkge1xuICAgIGZuLmNhbGwobm9kZSwgZXZlKTtcbiAgICB0cmFja2luZyA9IGZhbHNlO1xuICB9XG5cbiAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYXB0dXJlRXZlbnQsIGZhbHNlKTtcblxuICByZXR1cm4gY2FwdHVyZUV2ZW50O1xufVxuXG4vKipcbiAqIEV4cG9zZSBkZWNvdXBsZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGRlY291cGxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogQGNsYXNzXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGEgbmV3IGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlcyBhIG5ldyBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICogdmFyIEVtaXR0ZXIgPSByZXF1aXJlKCdlbWl0dGVyJyk7XG4gKlxuICogdmFyIGVtaXR0ZXIgPSBuZXcgRW1pdHRlcigpO1xuICovXG5cbnZhciBFbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRW1pdHRlcigpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgRW1pdHRlcik7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50LlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgdG8gXCJmb29cIiBldmVudC5cbiAgICogZW1pdHRlci5vbignZm9vJywgbGlzdGVuZXIpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIC8vIFVzZSB0aGUgY3VycmVudCBjb2xsZWN0aW9uIG9yIGNyZWF0ZSBpdC5cbiAgICB0aGlzLl9ldmVudENvbGxlY3Rpb24gPSB0aGlzLl9ldmVudENvbGxlY3Rpb24gfHwge307XG5cbiAgICAvLyBVc2UgdGhlIGN1cnJlbnQgY29sbGVjdGlvbiBvZiBhbiBldmVudCBvciBjcmVhdGUgaXQuXG4gICAgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XSA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0gfHwgW107XG5cbiAgICAvLyBBcHBlbmRzIHRoZSBsaXN0ZW5lciBpbnRvIHRoZSBjb2xsZWN0aW9uIG9mIHRoZSBnaXZlbiBldmVudFxuICAgIHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0ucHVzaChsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogQWRkcyBhIGxpc3RlbmVyIHRvIHRoZSBjb2xsZWN0aW9uIGZvciB0aGUgc3BlY2lmaWVkIGV2ZW50IHRoYXQgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLlxuICAgKiBAbWVtYmVyb2YhIEVtaXR0ZXIucHJvdG90eXBlXG4gICAqIEBmdW5jdGlvblxuICAgKiBAcGFyYW0ge1N0cmluZ30gZXZlbnQgLSBUaGUgZXZlbnQgbmFtZS5cbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgLSBBIGxpc3RlbmVyIGZ1bmN0aW9uIHRvIGFkZC5cbiAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBpbnN0YW5jZSBvZiBFbWl0dGVyLlxuICAgKiBAZXhhbXBsZVxuICAgKiAvLyBXaWxsIGFkZCBhbiBldmVudCBoYW5kbGVyIHRvIFwiZm9vXCIgZXZlbnQgb25jZS5cbiAgICogZW1pdHRlci5vbmNlKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbiBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGZuKCkge1xuICAgICAgc2VsZi5vZmYoZXZlbnQsIGZuKTtcbiAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgZm4ubGlzdGVuZXIgPSBsaXN0ZW5lcjtcblxuICAgIHRoaXMub24oZXZlbnQsIGZuKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgbGlzdGVuZXIgZnJvbSB0aGUgY29sbGVjdGlvbiBmb3IgdGhlIHNwZWNpZmllZCBldmVudC5cbiAgICogQG1lbWJlcm9mISBFbWl0dGVyLnByb3RvdHlwZVxuICAgKiBAZnVuY3Rpb25cbiAgICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50IC0gVGhlIGV2ZW50IG5hbWUuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIC0gQSBsaXN0ZW5lciBmdW5jdGlvbiB0byByZW1vdmUuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYW4gaW5zdGFuY2Ugb2YgRW1pdHRlci5cbiAgICogQGV4YW1wbGVcbiAgICogLy8gUmVtb3ZlIGEgZ2l2ZW4gbGlzdGVuZXIuXG4gICAqIGVtaXR0ZXIub2ZmKCdmb28nLCBsaXN0ZW5lcik7XG4gICAqL1xuXG4gIEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIG9mZihldmVudCwgbGlzdGVuZXIpIHtcblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4sIGkpIHtcbiAgICAgIGlmIChmbiA9PT0gbGlzdGVuZXIgfHwgZm4ubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIFJlbW92ZXMgdGhlIGdpdmVuIGxpc3RlbmVyLlxuICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gUmVtb3ZlcyBhbiBlbXB0eSBldmVudCBjb2xsZWN0aW9uLlxuICAgIGlmIChsaXN0ZW5lcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBkZWxldGUgdGhpcy5fZXZlbnRDb2xsZWN0aW9uW2V2ZW50XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvKipcbiAgICogRXhlY3V0ZSBlYWNoIGl0ZW0gaW4gdGhlIGxpc3RlbmVyIGNvbGxlY3Rpb24gaW4gb3JkZXIgd2l0aCB0aGUgc3BlY2lmaWVkIGRhdGEuXG4gICAqIEBtZW1iZXJvZiEgRW1pdHRlci5wcm90b3R5cGVcbiAgICogQGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7U3RyaW5nfSBldmVudCAtIFRoZSBuYW1lIG9mIHRoZSBldmVudCB5b3Ugd2FudCB0byBlbWl0LlxuICAgKiBAcGFyYW0gey4uLk9iamVjdH0gZGF0YSAtIERhdGEgdG8gcGFzcyB0byB0aGUgbGlzdGVuZXJzLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGFuIGluc3RhbmNlIG9mIEVtaXR0ZXIuXG4gICAqIEBleGFtcGxlXG4gICAqIC8vIEVtaXRzIHRoZSBcImZvb1wiIGV2ZW50IHdpdGggJ3BhcmFtMScgYW5kICdwYXJhbTInIGFzIGFyZ3VtZW50cy5cbiAgICogZW1pdHRlci5lbWl0KCdmb28nLCAncGFyYW0xJywgJ3BhcmFtMicpO1xuICAgKi9cblxuICBFbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24gZW1pdChldmVudCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciBsaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBEZWZpbmVzIGxpc3RlbmVycyB2YWx1ZS5cbiAgICBpZiAoIXRoaXMuX2V2ZW50Q29sbGVjdGlvbiB8fCAhKGxpc3RlbmVycyA9IHRoaXMuX2V2ZW50Q29sbGVjdGlvbltldmVudF0pKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvLyBDbG9uZSBsaXN0ZW5lcnNcbiAgICBsaXN0ZW5lcnMgPSBsaXN0ZW5lcnMuc2xpY2UoMCk7XG5cbiAgICBsaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIHJldHVybiBmbi5hcHBseShfdGhpcywgYXJncyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICByZXR1cm4gRW1pdHRlcjtcbn0pKCk7XG5cbi8qKlxuICogRXhwb3J0cyBFbWl0dGVyXG4gKi9cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07Il19


;(function($){
	$(document).ready(function(){

		$('body').addClass('js');



		/********************************************
		 * 		Bootstrap
		 ********************************************/
		// tooltips
		// $('a[data-toggle="tooltip"]').tooltip();



		/********************************************
		 * 		slideout.js navigation menu
		 ********************************************/
		var slideout = new Slideout({
			'panel': document.getElementById('playground'),
			'menu': document.getElementById('navmob'),
			'padding': 256,
			'tolerance': 70
		});
		// Toggle button
		$('.js-slideout-toggle').on('click', function() {
			slideout.open();
		});

		function close(eve) {
			eve.preventDefault();
			slideout.close();
		}
		slideout
			.on('beforeopen', function() {
				this.panel.classList.add('panel-open');
			})
			.on('open', function() {
				this.panel.addEventListener('click', close);
			})
			.on('beforeclose', function() {
				this.panel.classList.remove('panel-open');
				this.panel.removeEventListener('click', close);
			});



		/********************************************
		 * 		when items become links
		 ********************************************/
		// ex 1: <div data-link="http://www.redpik.net">...</div>
		// ex 2: <div data-link="http://www.redpik.net" data-blank="1">...</div>
		$('[data-link]').on('click', function() {
			var url = $(this).data('link');
			var blank = $(this).data('blank');
			if (blank)
				window.open(url);
			else {
				window.location = url;
			}
			return false;
		});
		// propagation problem?
		$('[data-link] a').on('click', function(e) {
			e.stopPropagation();
		});



		/********************************************
		 * 		rel attribute for galleries
		 ********************************************/
		$('.gallery').each(function() {
			var $_gal = $(this);
			var idgal = $_gal.attr('id');
			$('a', $_gal).attr('rel', idgal);
		});



		/********************************************
		 * 		Popin images with fancybox
		 ********************************************/
		$('.fancybox, a[href$=".jpg"], a[href$=".jpeg"], a[href$=".png"], a[href$=".gif"]').fancybox({

		});



		/********************************************
		 * 		fitvids.js
		 ********************************************/
		$(".entry-content").fitVids();
		$(".entry-content").fitVids({ customSelector: "iframe[src*='dailymotion.com']"});

	});
})(window.jQuery);
