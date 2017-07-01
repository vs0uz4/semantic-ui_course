/*******************************
            My Gulpfile
*******************************/

var
  gulp         = require('gulp'),

  // require tasks as dependencies
  watch        = require('./semantic/tasks/watch'),
  
  build        = require('./semantic/tasks/build')
  buildJS      = require('./semantic/tasks/build/javascript'),
  buildCSS     = require('./semantic/tasks/build/css'),
  buildAssets  = require('./semantic/tasks/build/assets'),

  clean        = require('./semantic/tasks/clean'),
  version      = require('./semantic/tasks/version')
;

/*******************************
             Tasks
*******************************/

gulp.task('watch-ui', 'Watch UI for Semantic UI', watch);
gulp.task('build-ui', 'Build UI for Semantic UI', build);

gulp.task('build-js-ui', 'Build Javascript UI for Semantic UI', buildJS);
gulp.task('build-css-ui', 'Build Stylecheets UI for Semantic UI', buildCSS);
gulp.task('build-assets-ui', 'Build Assets UI for Semantic UI', buildAssets);
gulp.task('clean-ui', 'Clean UI for Semantic UI', clean);
gulp.task('version-ui', 'Version UI for Semantic UI', version);
