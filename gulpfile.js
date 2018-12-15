const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-css');
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();

//// 1. Copy the index.html as is
function buildhtml() {  
    return gulp.src('src/html/index.html')
        .pipe(gulp.dest('app/'));
};

// // 2. Compile CSS file and move them to the app folder
function buildcss() {
    return gulp.src(['src/css/*.css','node_modules/bootstrap/dist/*.min.css'])
        .pipe(css())
        .pipe(gulp.dest('app/'));
};

// // 3. Compile JS files and move them to the app folder
function buildjs()  {
    return gulp.src(['main.js', 'src/scripts/*.js','node_modules/jquery/dist/jquery.min.js'])
         .pipe(babel())
         .pipe(gulp.dest('app/'));
};

// // 4. Compile SASS files and move them to the app folder
function buildsass(){
    return gulp.src(['src/sass/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('app/'))
    .pipe(gulp.dest('UIMockup/build'))
    .pipe(browserSync.stream());
}

// // 5. Copy image files and move them to the app folder

function buildimages(){
   return gulp.src(['src/images/*'])
    .pipe(gulp.dest('app/'))
    .pipe(gulp.dest('UIMockup/build'))
    .pipe(browserSync.stream());
}

// use to develop ui
function serve(){
    browserSync.init({
        server: {baseDir:'./UIMockup',
                index:'uimock.html'},
        browser: 'chrome'}
    );

    gulp.watch('src/sass/*.scss',function(){
        buildsass();
        buildimages();
        browserSync.reload();
    });
    gulp.watch('UIMockup/uimock.html',function(){
        browserSync.reload();
    });
}

//exports.start= (cb) => { console.log('teste'); cb();};
exports.serve = serve; 
exports.buildsass = buildsass;
exports.buildimages= buildimages;
exports.build= gulp.parallel(buildhtml,buildcss,buildjs);
