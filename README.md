# Rainier
Rainier is a lightweight Sass framework for building the responsive web. It's modular and comes with basic styles (grid, typography, buttons, etc.) but it's built to be extended and modified. It has typography based on relative units and it isn't bloated with clunky JavaScript components you'll never use.

You can see demos of Rainier's styles and components [here](http://ryanmadden.net/rainier).

## What's Included
- Minified production files [`dist/`](dist/)
  - [`rainier.min.css`](dist/rainier.min.css)
  - [`rainier.min.js`](dist/rainier.min.js)
- Source files [`src/`](src/)
  - Sass files [`src/sass/`](src/sass/)
  - JS files [`src/js/`](src/js/)
- Gulp build file [`Gulpfile.js`](Gulpfile.js)
- NPM dependencies [`package.json`](package.json)

## Installation
Simply include `rainier.min.css` and `rainier.min.js` in your HTML or template.

`<link rel="stylesheet" type="text/css" href="rainier.min.css">`

`<script src="rainier.js"></script>`

## Development
Rainier is built to be modified and extended. To get started with modifying it for your project:
- Download the latest release
- Move `rainier/` into to your project
- Navigate to the `rainier/` directory
- If you haven't installed Gulp, run `npm install --global gulp-cli`
- Run `npm install` to install Rainier's dependencies
- Run `gulp` to begin watching the Sass and JS files for changes

The gulp task watches the `src/` directory for changes. When you modify Rainier's files, unminified development versions of `rainier.css` and `rainier.js` will be built to the `dev/` directory. 

When you're ready to create a minified production version of Rainier, run `gulp build` from the `rainier/` directory and minified versions of your code will be placed in the `src/` directory.

## Credits
- normalize.css v3.0.3 | MIT License | [github.com/necolas/normalize.css](http://github.com/necolas/normalize.css)

## License
Rainier is released under the MIT License

Copyright (c) Ryan Madden

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.