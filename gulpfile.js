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
	filter = require('gulp-filter'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	minifyHTML = require('gulp-minify-html'),
	rimrafD = require('rimraf'),
	rimraf = require('gulp-rimraf'),
	igonre = require('gulp-ignore'),
	uglify = require('gulp-uglify'),
	replace = require('gulp-replace');

	gulp.task('cleandist',function(cb){
		rimrafD('./dist',cb);
	})
	
	gulp.task('cleanassets',function(cb){
		rimrafD('./src/main/resources/static/assets',cb);
	})
	
	gulp.task('cleanassetsapp',function(cb){
		rimrafD('./src/main/resources/static/assets/app',cb);
	})
	
	gulp.task('cleanminify',function(cb){
		rimrafD('./minify',cb);
	})
	
	gulp.task('cleanall',['cleandist','cleanassets'],function(){
		
	})
	
	gulp.task('minifyAppCss',function(){
		return gulp.src('src/main/resources/static/css/app.css')
					.pipe(concat('app.min.css'))
					.pipe(minifyCss())
					.pipe(gulp.dest('dist/assets/css'));
	});
	
	gulp.task('minifyVendorCss',function(){
		return gulp.src('src/main/resources/static/js/bower_components/bootstrap/dist/css/bootstrap.css')
					.pipe(concat('vendor.min.css'))
					.pipe(minifyCss())
					.pipe(gulp.dest('dist/assets/css'));
	});
	
	gulp.task('uglifyVendorJs',function(){
		return gulp.src(config.vendorjs)
					.pipe(concat('vendor.min.js'))
					.pipe(uglify())
					.pipe(gulp.dest('dist/assets/js'));
	});
		
	gulp.task('uglifyAppJs',function(){
		return gulp.src(config.appjs)
					.pipe(concat('site.min.js'))
					.pipe(uglify())
					.pipe(gulp.dest('dist/assets/js'));
	})
	
gulp.task('revisioning',['uglifyVendorJs','uglifyAppJs','minifyAppCss','minifyVendorCss'],function(){
		
		return gulp.src(['dist/**/*.js','dist/**/*.css'])
					.pipe(rev())
					.pipe(gulp.dest('./src/main/resources/static'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('./src/main/resources/static/assets'));
	});


gulp.task("revreplace", ["cleanall","revisioning"], function(){
	  var manifest = require("./src/main/resources/static/assets/rev-manifest.json");
	  var stream = gulp.src("src/main/resources/templates/**/*.html");

	  Object.keys(manifest).reduce(function(stream, key){ 
	    return stream.pipe(replace(key, manifest[key]));
	  }, stream).pipe(gulp.dest('./src/main/resources/templates'));

	});

gulp.task('minifyHtml',['revreplace'], function(){
	gulp.start('cleanassetsapp');
	return gulp.src('./src/main/resources/static/assets/index.html')
				.pipe(minifyHTML({
						empty: true,
						spare: true
					}))
				.pipe(gulp.dest('src/main/resources/templates/app'));
})

