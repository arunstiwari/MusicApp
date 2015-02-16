/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
	config = require('./gulp.config.json'),
	concat = require('gulp-concat'),
	bytediff = require('gulp-bytediff'),
	minifyCss = require('gulp-minify-css'),
	inject = require('gulp-inject'),
	path = require('path'),
	filter = require('gulp-filter');

gulp.task('vendorcss', function(){
	return gulp
	.src(config.paths.vendorcss)
	.pipe(concat('vendor.min.css'))
	.pipe(bytediff.start())
	.pipe(minifyCss())
	.pipe(bytediff.stop(bytediffFormatter))
	.pipe(gulp.dest(config.paths.destination));
});

gulp.task('rev-and-inject',['vendorcss'],function(){
	var indexPath = path.join(config.paths.source, 'index.html');
	
	var localInject = function(pathGlob, name) {
		var options = {
		ignorePath: config.paths.destination,
		read: false,
		addPrefix: config.paths.buildPrefix
		};
		if (name) {
		options.name = name;
		}
		
		return inject(gulp.src(pathGlob),options);
	};
	
	return gulp
			.src([].concat(indexPath))
			.pipe(localInject(path.join(config.paths.destination,'vendor.min.css'),'inject-vendor'))
			.pipe(gulp.dest(config.paths.distribution))
});

gulp.task('default',function(){
	gulp.start('rev-and-inject');
});

function bytediffFormatter(data) {
	var formatPercent = function(num, precision) {
		return (num * 100).toFixed(precision);
	};
    var difference = (data.savings > 0) ? ' smaller.' : ' larger.';
    
    return data.fileName + ' went from ' +
        (data.startSize / 1000).toFixed(2) + ' kB to ' + (data.endSize / 1000).toFixed(2) + ' kB' +
        ' and is ' + formatPercent(1 - data.percent, 2) + '%' + difference;
}

