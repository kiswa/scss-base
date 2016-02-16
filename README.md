# scss-base

`scss-base` is a selection of styles that provide a clean default look for SCSS projects. The fonts used are [Droid Sans](https://www.google.com/fonts/specimen/Droid+Sans) and [Droid Sans Mono](https://www.google.com/fonts/specimen/Droid+Sans+Mono).

This also uses [Normalize.css](http://necolas.github.io/normalize.css/) as a base style 'reset' (via [node.normalize.scss](https://www.npmjs.com/package/node.normalize.scss)). Because of this, you will not need a separate style reset/normalizer. `scss-base` also includes the standard [`box-sizing: border-box;` reset](http://www.paulirish.com/2012/box-sizing-border-box-ftw/).

## Demo

You can see a demo page with all the styles provided by `scss-base` at https://kiswa.github.io/scss-base

## Usage

Simply run `npm install scss-base --save-dev` to include `scss-base` in your project and save it in your `package.json`.

Import `scss-base` in your SCSS to use the provided styles.

```scss
//@import 'your-override-variables';
@import 'scss-base';
```

If you use [Gulp](http://gulpjs.com/) and [`gulp-sass`](https://www.npmjs.com/package/gulp-sass), your SCSS task looks something like this:

```javascript
var sass = require('gulp-sass'),
    scss_base = 'node_modules/scss-base/src';

gulp.task('scss', function() {
    return gulp.src('/path/to/your/main.scss')
        .pipe(sass({
            precision: 10,
            includePaths: [ scss_base ]
        })
        //.pipe(do other stuff - concat, minify, etc.)
        .pipe(gulp.dest('/path/to/ouput/css/'));
});
```

### Customization

`scss-base` has a few variables to set the colors and fonts it uses. If you override these before including `scss-base` in your SCSS, the output changes to match your choices. The following variables are set by `scss-base`:

```scss
$color-background: #fefefe !default;
$color-text: #333 !default;
$color-mark: #f3f315 !default; /* Highlighter yellow */

$color-border: #aaa !default;
$color-table-row: lighten($color-text, 75%) !default;

$color-primary: #7fd4ff !default; /* The blue in the demo */
$color-secondary: #86deb7 !default; /* The green in the demo */

$font-url: 'https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Droid+Sans+Mono' !default;
$font-name: 'Droid Sans' !default;
$font-name-mono: 'Droid Sans Mono' !default;

$white: #fff;
```
