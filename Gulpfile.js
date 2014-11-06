'use strict';

var gulp            = require('gulp'),
    cssInlineImages = require('./index.js');

gulp.task('default', function () {
    gulp.src('test/input/screen.css')
        .pipe(cssInlineImages({
            webRoot: 'test/input'
        }))
        .pipe(gulp.dest('test/output'));
});
