const gulp = require('gulp');
const babel = require('gulp-babel');
const css = require('gulp-css');

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

//exports.start= (cb) => { console.log('teste'); cb();};
exports.build= gulp.parallel(buildhtml,buildcss,buildjs);
