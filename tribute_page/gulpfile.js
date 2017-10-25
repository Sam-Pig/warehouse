var gulp = require('gulp'),
    sass=require('gulp-ruby-sass'),
    livereload=require('gulp-livereload'),
    autoprefixer=require('gulp-autoprefixer'),
    cleancss=require('gulp-clean-css'),
    uglify=require('gulp-uglify'),
    pump=require('pump');
    imagemin=require('gulp-imagemin');

gulp.task('css',function(){
    sass('src/*.scss')
    .on('error', sass.logError)
    .pipe(autoprefixer({
        browsers:['last 2 version'],
        cascade:false
    })) 
    .pipe(cleancss())
    .pipe(gulp.dest('dist'))
    .pipe(livereload())
});

gulp.task('compress',function(){
    gulp.src('src/*.js')
	.pipe(uglify())
    .pipe(gulp.dest('dist'))
    .pipe(livereload());
});

gulp.task('image',()=>
    gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
    .pipe(livereload())
);

gulp.task('default',function(){
    gulp.start('css','compress','image');
});

gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('src/*.scss',['css']);
    gulp.watch('src/*.js',['compress']);
    gulp.watch('src/images/*',['iamge']);
    
});



    