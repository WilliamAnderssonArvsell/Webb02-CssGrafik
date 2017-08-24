const gulp = require('gulp');
const sass = require('gulp-sass');

// Logs Message
gulp.task('message', function(){
    return console.log('Gulp fungerar');
})

// Copy all HTML - files
gulp.task('copyhtml', function(){
    gulp.src('src/*.html')
        .pipe(gulp.dest('build'));
})

// Compile sass
gulp.task('sass', function(){
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
})

// Standardkörning
gulp.task('default', ['copyhtml', 'sass'])

// Gulp Watch
gulp.task('watch', function(){
    gulp.watch('src/*.html', ['copyhtml']);
    gulp.watch('src/sass/*.scss', ['sass']);
})

