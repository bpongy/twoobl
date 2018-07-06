
'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat');

var jsFiles = [
	'assets/js/plugins/*.js',

	'assets/js/bootstrap/alert',
	'assets/js/bootstrap/button',
	'assets/js/bootstrap/carousel',
	'assets/js/bootstrap/collapse',
	'assets/js/bootstrap/dropdown',
	'assets/js/bootstrap/modal',
	'assets/js/bootstrap/popover',
	'assets/js/bootstrap/scrollspy',
	'assets/js/bootstrap/tab',
	'assets/js/bootstrap/tooltip',

	'assets/js/main.js'
];

var cssDest = 'assets/css';
var scssFiles = 'assets/scss/**/*.scss';



gulp.task('sass', function () {
	return gulp
		.src(scssFiles)
		.pipe(sourcemaps.init())
		.pipe(sass({style: 'expanded'}).on('error', sass.logError))
		.pipe(sourcemaps.write(''))
		.pipe(gulp.dest(cssDest));
});



gulp.task('scripts', function () {
	return gulp
		.src(jsFiles)
		.pipe(concat('scripts.js'))
		.pipe(gulp.dest('assets/js'));
});



gulp.task('default', function () {
	gulp.watch(scssFiles, ['sass']);
	gulp.watch(jsFiles, ['scripts']);
});
