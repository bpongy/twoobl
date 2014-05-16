'use strict';
module.exports = function(grunt) {

	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		concat : {
			options : {
				separator : ';'
			},
			bootstrap : {
				src : [
					'assets/js/bootstrap/affix.js',
					'assets/js/bootstrap/alert.js',
					'assets/js/bootstrap/button.js',
					'assets/js/bootstrap/carousel.js',
					'assets/js/bootstrap/collapse.js',
					'assets/js/bootstrap/dropdown.js',
					'assets/js/bootstrap/tab.js',
					'assets/js/bootstrap/transition.js',
					'assets/js/bootstrap/scrollspy.js',
					'assets/js/bootstrap/modal.js',
					'assets/js/bootstrap/tooltip.js',
					'assets/js/bootstrap/popover.js'
				],
				dest : 'assets/js/bootstrap.js'
			},
			plugins : {
				src : ['assets/js/plugins/*.js'],
				dest : 'assets/js/plugins.js'
			}
		},
		uglify : {
			twoobl_main : {
				options : {
					banner : '/*! <%= pkg.name %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n',
					mangle: false
				},
				files: {
					'assets/js/main.min.js' : ['<%= concat.bootstrap.dest %>', '<%= concat.plugins.dest %>', 'assets/js/main.js']
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
		watch : {
			css: {
				files: 'assets/scss/*.scss',
				tasks: ['compass']
			},
			js: {
				files: ['<%= concat.bootstrap.dest %>', '<%= concat.plugins.dest %>', 'assets/js/main.js'],
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};
