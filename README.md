# scss-base

`scss-base` is a selection of styles that provide a clean default look for SCSS projects. The fonts used are [Droid Sans](https://www.google.com/fonts/specimen/Droid+Sans) and [Droid Sans Mono](https://www.google.com/fonts/specimen/Droid+Sans+Mono). This also uses [Normalize.css](http://necolas.github.io/normalize.css/) as a base style 'reset'.

## Demo

You can see a demo page with all the styles provided by `scss-base` at https://kiswa.github.io/scss-base

## Usage

Simply run `npm install scss-base --save-dev` to include `scss-base` in your project and save it in your `package.json`.

Import `scss-base` in your SCSS to use the provided styles. If you use [Gulp](http://gulpjs.com/) and [`gulp-ruby-sass`](https://www.npmjs.com/package/gulp-ruby-sass), your SCSS task would look something like this:

```javascript
var sass = require('gulp-ruby-sass');

gulp.task('scss', function() {
    return sass('/path/to/your/main.scss', {
            precision: 10,
            loadPath: [ 'node_modules/scss-base/src/main.scss' ]
        })
        //.pipe(do other stuff - concat, minify, etc.)
        .pipe(gulp.dest('/path/to/ouput/css/'));
});
```

### Customization

`scss-base` has a few variables to set the colors and fonts it uses. If you override these after including `scss-base` in your SCSS, the output changes to match your choices. The following variables are available:

```scss
$color-background: #fefefe !default;
$color-text: #333 !default;
$color-mark: #f3f315 !default; /* Highlighter yellow */

$color-border: #aaa !default;
$color-table-row: lighten($color-text, 75%) !default;

$color-primary: #7fd4ff !default; /* The blue in the demo */
$color-secondary: #86deb7 !default; /* The green in the demo */

$font-url: 'https://fonts.googleapis.com/css?family=Droid+Sans:400,700|Droid+Sans+Mono';
$font-name: 'Droid Sans';
$font-name-mono: 'Droid Sans Mono';

$white: #fff;
```