const { src, dest, watch } = require('gulp')
const livereload = require('gulp-livereload')
const scss = require('gulp-sass')(require('sass'));
const express = require('express')
const app = express()

function compileStyles () {
    return src('./src/style.scss')
        .pipe(scss())
        .pipe(dest('./public/dist/styles/'))
        .pipe(livereload())
}

function startServer () {
    app.use(express.static('public'))

    app.listen(3000, function () {
        console.log('server is running')
    })
}

exports.reload = function () {
    livereload.listen()

    watch('./src/*.scss', compileStyles)

    startServer()
}