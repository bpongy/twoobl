
'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	pleeease = require('gulp-pleeease'),
	mqpacker = require('css-mqpacker');

var jsFiles = [
	// 'assets/js/bootstrap/affix.js',
	// 'assets/js/bootstrap/alert.js',
	// 'assets/js/bootstrap/button.js',
	// 'assets/js/bootstrap/carousel.js',
	// 'assets/js/bootstrap/collapse.js',
	// 'assets/js/bootstrap/dropdown.js',
	// 'assets/js/bootstrap/tab.js',
	// 'assets/js/bootstrap/transition.js',
	// 'assets/js/bootstrap/scrollspy.js',
	// 'assets/js/bootstrap/modal.js',
	// 'assets/js/bootstrap/tooltip.js',
	// 'assets/js/bootstrap/popover.js',
	'assets/js/plugins/*.js',
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



gulp.task('build', function () {
	gulp.src('assets/css/base.css')
		.pipe(pleeease({
			out: 'base.min.css'
		}))
		.pipe(gulp.dest(cssDest));
	gulp.src(jsFiles)
		.pipe(concat('scripts.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('assets/js'));
});
