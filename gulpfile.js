// filepath: c:\Users\eddi_\TCM\gulpfile.js
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');

// Tarea para minificar archivos JavaScript
gulp.task('minify-js', function () {
  return gulp.src(['js/*.js', '!js/*.min.js']) // Excluir archivos minificados
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('js')); // Carpeta de destino para los archivos minificados
});

// Tarea para minificar archivos CSS
gulp.task('minify-css', function () {
  return gulp.src(['*.css', '!*.min.css']) // Excluir archivos minificados
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('.')); // Carpeta de destino para los archivos minificados
});

// Tarea por defecto para observar cambios y minificar automáticamente
gulp.task('default', function () {
  gulp.watch(['js/*.js', '!js/*.min.js'], gulp.series('minify-js')); // Excluir archivos minificados
  gulp.watch(['*.css', '!*.min.css'], gulp.series('minify-css')); // Excluir archivos minificados
});