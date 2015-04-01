module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		concat : {
			options : {
				separator : ';'
			},
			jsfiles : {
				src : [
					'assets/js/bootstrap/affix.js',
					'assets/js/bootstrap/alert.js',
					'assets/js/bootstrap/button.js',
					//'assets/js/bootstrap/carousel.js',
					'assets/js/bootstrap/collapse.js',
					'assets/js/bootstrap/dropdown.js',
					'assets/js/bootstrap/tab.js',
					'assets/js/bootstrap/transition.js',
					//'assets/js/bootstrap/scrollspy.js',
					'assets/js/bootstrap/modal.js',
					'assets/js/bootstrap/tooltip.js',
					'assets/js/bootstrap/popover.js',
					'assets/js/plugins/*.js',
					'assets/js/main.js'
				],
				dest : 'assets/js/scripts.js'
			}
		},
		uglify : {
			custom: {
				options : {
					banner : '/*! <%= pkg.name %> */\n',
					mangle: false
				},
				files: {
					'assets/js/scripts.min.js' : ['<%= concat.jsfiles.dest %>']
				}
			}
		},
		compass : {
			compile: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			css: {
				files: ['assets/scss/*.scss', 'assets/scss/*/*.scss'],
				tasks: ['compass']
			},
			js: {
				files: ['<%= concat.jsfiles.src %>'],
				tasks: ['concat']
			}
		},
		pleeease: {
			custom: {
				options: {
					config: '.pleeeaserc'
				},
				files: {
					'assets/css/base.min.css': 'assets/css/base.css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-pleeease');

	grunt.registerTask('default', [
		'concat',
		'watch'
	]);

	grunt.registerTask('build', [
		'concat',
		'uglify',
		'pleeease'
	]);

};
