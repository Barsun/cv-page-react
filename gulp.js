var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var webpackStream = require("webpack-stream");
var WebpackDevServer = require("webpack-dev-server");
var through = require("through");
var del = require('del');
var zip = require('gulp-zip');
var runSequence = require('run-sequence');
var bump = require('gulp-bump');
var git = require('gulp-git');
var semver = require('semver');
var fs = require('fs');
var release = require('gulp-github-release');
var debug = require('gulp-debug');


var buildConfig = require('./config/build.config');
var WebpackConfig = require('webpack-config').default;
var webpackConfigDev = new WebpackConfig().extend('./config/webpack-dev.config');
var webpackConfigProd = new WebpackConfig().extend('./config/webpack-production.config');

gulp.task('travis-build', function () {

    runSequence('clean', 'production-build', 'copy-assets', 'compress');

});


gulp.task('travis-release', function () {

    gulp.src('./dist.zip')

        .pipe(release({

            token: '83d8c3f8902c1443ce9f3d07478cef66c5860e29',                     // or you can set an env var called GITHUB_TOKEN instead

            repo: 'cv-page-react',            // if missing, it will be extracted from manifest (the repository.url field)

            manifest: require('./package.json') // package.json from which default values will be extracted if they're missing

        }));

});


gulp.task("production-build", function () {

    return through()

        .pipe(webpackStream(webpackConfigProd, webpack))

        .pipe(gulp.dest(buildConfig.destination));

});


gulp.task("dev", function (callback) {

    // Start a webpack-dev-server

    var compiler = webpack(webpackConfigDev);


    new WebpackDevServer(compiler, {

        // server and middleware options

    }).listen(8080, "localhost", function (err) {

        if (err) throw new gutil.PluginError("webpack-dev-server", err);

        // Server listening

        gutil.log("[webpack-dev-server]", "http://localhost:8081/webpack-dev-server/index.html");


        // keep the server alive or continue?

        // callback();

    });

});


gulp.task('clean', function () {

    return del([buildConfig.destination, './dist.zip']);

});


gulp.task('copy-assets', function () {

    return gulp.src('./assets/**/*')

        .pipe(debug({title: 'copy-assets:'}))

        .pipe(gulp.dest(buildConfig.destinationAssets));

});


gulp.task('compress', function () {

    return gulp.src('./dist/**/*')

        .pipe(debug({title: 'compress:'}))

        .pipe(zip('dist.zip'))

        .pipe(gulp.dest('./'));

});


gulp.task('bump-minor', function () {

    // reget package

    var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

    // increment version

    var newVer = semver.inc(pkg.version, 'minor');


    bumpVersion(newVer);

});

gulp.task('bump-patch', function () {

    // reget package

    var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

    // increment version

    var newVer = semver.inc(pkg.version, 'patch');


    bumpVersion(newVer);

});

gulp.task('bump-prerelease', function () {

    // reget package

    var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

    // increment version

    var newVer = semver.inc(pkg.version, 'prerelease');


    bumpVersion(newVer);

});


function bumpVersion(version) {

    gulp.src('./package.json')

        .pipe(bump({version: version}))

        .pipe(gulp.dest('./'))

        .pipe(git.commit('Package.json bumped to version ' + version));

}