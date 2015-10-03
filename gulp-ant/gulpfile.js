var gulp = require('gulp'),
    uglify = require('uglify-js'),
    header = require('gulp-header'),
    livereload = require('gulp-livereload'),
    gutil = require('gulp-load-utils')(['env']);

if(gutil.env.dir){
    var tomcatDir = gutil.env.dir;
    console.log(tomcatDir)
} else {
    // Developers: set your tomcat directory here to use gulp watch from the cli
    var tomcatDir = '/Applications/liferay-developer-studio/liferay-portal-6.2-ee-sp10/tomcat-7.0.42/webapps/theme'

    if(tomcatDir === ''){
        console.log('___Please edit the gulpfile.js and set your working tomcat directory when running outside of the Ant build___');
        process.exit(1);
    }
}

var paths = {
	themeSource: 'src/js/**',
	themeServer: tomcatDir,
	partialsSource: 'src/css/**/_*.scss',
	entryPointSource: 'src/css/custom.css',
	entryPointFolderServer: tomcatDir + '/css/'
};

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(paths.themeSource, ['copyThemeFiles']);
    gulp.watch(paths.partialsSource, ['updateEntryPointCSS']);
    gulp.watch('src/js/**/*.js', ['compress']);
});

gulp.task('compress', function() {
    console.log(tomcatDir);
    gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest( tomcatDir + '/js/'))
        .pipe(gulp.dest('js'));
});

gulp.task('updateEntryPointCSS', function() {
	gulp.src(paths.entryPointSource)
		.pipe(header('/* Updated: ' + Date.now() + ' */\n'))
		.pipe(gulp.dest(paths.entryPointFolderServer))
		.pipe(livereload());
});


gulp.task('default', ['watch']);
gulp.task('deploy', ['compress']); // Ant task passes in deployment directory, if using gulp directly, set tomcatDir above.
