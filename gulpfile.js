var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


//Exemple d'une tâche
// gulp.task('task-name', function() {
//
//     //Chemin du fichier source par rapport a gulpfiles
//     return gulp.src('source-files')
//         .pipe(nomDuPplugin())
//         .pipe(gulp.dest('FichierDestination'))
// });


//Tache Saas
gulp.task('sass', function () {

    return gulp.src('app/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/sass'))
        .pipe(browserSync.reload({
            stream: true
        }))

});

//Tache Auto prefixer
gulp.task('autoprefixer', function () {
    return gulp.src('app/sass/style.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});


//Tache crée le server BrowserSync
gulp.task('browserSync', function () {
    browserSync({
        server: {
            baseDir: 'app/'
        }
    })
});


//J'automatise dès le rafraichissement dès la modification d'un fichier
gulp.task('watch', ['browserSync', 'sass', 'autoprefixer'], function () {

    gulp.watch('app/sass/**/*.scss', ['sass']).on('change', function (event) {
        console.log('le fichier ' + event.path + ' a ete modifie');
    });
    gulp.watch('dist/style.css', ['autoprefixer']).on('change', function (event) {
        console.log('le fichier ' + event.path + ' a ete autoprefixer');
    });
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/partials/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
