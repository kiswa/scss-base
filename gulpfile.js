var gulp = require('gulp'),
    del = require('del'),

    concat = require('gulp-concat'),
    scssLint = require('gulp-scss-lint'),
    sass = require('gulp-sass'),
    cssPrefixer = require('gulp-autoprefixer'),
    cleanCss = require('gulp-clean-css'),

    src = 'src/',
    dist = 'dist/',
    paths = {
        html: src + '**/*.html',
        scss: src + '**/*.scss',
        scssMain: src + 'scss-base.scss'
    };

gulp.task('clean', function() {
    del(dist);
});

gulp.task('lintScss', function() {
    return gulp.src(paths.scss)
        .pipe(scssLint({ config: 'lint.yml' }));
});

gulp.task('scss', function() {
    return gulp.src(paths.scssMain)
        .pipe(sass({ precision: 10 }).on('error', sass.logError))
        .pipe(cssPrefixer())
        .pipe(concat('scss-base.css'))
        .pipe(cleanCss({ inline: false }))
        .pipe(gulp.dest(dist + 'css/'));
});

gulp.task('html', function() {
    return gulp.src(paths.html)
        .pipe(gulp.dest(dist));
});

gulp.task('watch', function() {
    var watchScss = gulp.watch(paths.scss, gulp.series('lintScss', 'scss')),
        watchHtml = gulp.watch(paths.html, gulp.series('html')),

        onChanged = function(event) {
            console.log('File ' + event + ' was changed. Running tasks...');
        };

    watchScss.on('change', onChanged);
    watchHtml.on('change', onChanged);
});

gulp.task('default', gulp.series('lintScss', 'scss', 'html'));
