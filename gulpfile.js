'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const { parallel } = require('gulp');
sass.compiler = require('node-sass');

const styles = () => {
	return gulp.src('./assets/src/scss/style.scss')
		.pipe(sass())
		.pipe(cleanCss())
		.pipe(gulp.dest('./assets/dist/css'));
};

const scripts = () => {
	return gulp.src( './assets/src/js/index.js' )
		.pipe(concat({ path: 'main.js', stat: { mode: 0o666 }}))
		.pipe(gulp.dest('./assets/dist/js'));
}

const watchCSS = () => gulp.watch('./assets/src/**/*.scss', styles);
const watchJS = () => gulp.watch('./assets/src/js/*.js', scripts);

exports.watch = parallel(watchCSS, watchJS);
exports.build = parallel(styles, scripts);
