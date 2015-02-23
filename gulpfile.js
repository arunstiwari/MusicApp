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
	uglify = require('gulp-uglify');

	gulp.task('cleandist',function(cb){
		rimrafD('./dist',cb);
	})
	
	gulp.task('cleanrev',function(cb){
		rimrafD('./rev',cb);
	})
	
	gulp.task('cleanminify',function(cb){
		rimrafD('./minify',cb);
	})
	
	gulp.task('createVendorCss',function(){
		return gulp.src('src/main/resources/static/js/bower_components/bootstrap/dist/css/bootstrap.css')
					.pipe(concat('bootstrap.css'))
					.pipe(minifyCss())
					.pipe(gulp.dest('dist/css'))
					.pipe(rev())
					.pipe(gulp.dest('rev/css/vendor'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('rev/css/vendor'));
	});
	
	gulp.task('createAppCss',function(){
		return gulp.src('src/main/resources/static/css/app.css')
					.pipe(concat('app.css'))
					.pipe(minifyCss())
					.pipe(gulp.dest('dist/css'))
					.pipe(rev())
					.pipe(gulp.dest('rev/css/app'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('rev/css/app'));
	});
	
	gulp.task('createVendorJs',function(){
		
		return gulp.src(config.vendorjs)
					.pipe(concat('vendor.min.js'))
					.pipe(uglify())
					.pipe(gulp.dest('dist/js'))
					.pipe(rev())
					.pipe(gulp.dest('rev/js/vendor'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('rev/js/vendor'));
	});
	
gulp.task('createAppJs',function(){
		
		return gulp.src(config.appjs)
					.pipe(concat('site.min.js'))
					.pipe(uglify())
					.pipe(gulp.dest('dist/js'))
					.pipe(rev())
					.pipe(gulp.dest('rev/js/app'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('rev/js/app'));
	});

	gulp.task('css',function(){
		return gulp.src('src/main/resources/static/css/*.css')
					.pipe(rev())
					.pipe(gulp.dest('dist/css'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('rev/css'));
	});
	
	gulp.task('scripts', function(){
		return gulp.src('src/main/resources/static/js/**/*.js')
					.pipe(rev())
					.pipe(gulp.dest('dist/js'))
					.pipe(rev.manifest())
					.pipe(gulp.dest('rev/js'));
	});
	
	gulp.task('rev1',['css','scripts'],function(){
		return gulp.src(['rev/**/*.json','src/main/resources/templates/**/*.html'])
					.pipe(revCollector({
						replaceReved: true,
						dirReplacements: {
							'css':'/dist/css',
							'js': '/dist/js/',
							'bootstrap.css': '/dist/css'
						}
					}))
					/*.pipe(minifyHTML({
						empty: true,
						spare: true
					}))*/
					.pipe(gulp.dest('rev'));
	})

	
	gulp.task('rev',['createVendorCss','createAppCss','createVendorJs','createAppJs'],function(){
		return gulp.src(['rev/**/*.json','src/main/resources/templates/**/*.html'])
					.pipe(revCollector({
						replaceReved: true,
						dirReplacements: {
							'css':'dist/css',
							'js': 'dist/js'
						}
					}))
					/*.pipe(minifyHTML({
						empty: true,
						spare: true
					}))*/
					.pipe(gulp.dest('rev'));
	})

