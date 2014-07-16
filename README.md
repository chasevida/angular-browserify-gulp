#Angular, Browserify & Gulp

This is a just a sandbox where I'm playing with some libs n' frameworks. At this early stage it simply has [Express.js](http://expressjs.com/), [Angular](https://angularjs.org/), [Browserify](http://browserify.org/) and [Gulp](http://gulpjs.com/) playing nicely. I realise there are tons of these sort of seed projects out there but this drop in the water is cause I just wanted to get familiar with certain libraries in a style I enjoy.


### Installation
The recommended way to get a working copy of this project is to clone the repository.

	$ git clone git://github.com/chasevida/angular-browserify-gulp
	$ cd angular-browserify-gulp
	$ npm install
	$ gulp

The last command will run all the required build tasks and run the application on [http://localhost:8080](http://localhost:8080)

### Stack - JavaScript

* 	[Node.js](http://nodejs.org/)
* 	[Gulp](http://gulpjs.com/)
*	[Express.js](http://expressjs.com/)
*	[Browserify](http://browserify.org/)
*	[Angular](https://angularjs.org/)
*	[Karma](https://karma-runner.github.io)

### Gulp Tasks
If your not familiar with [Gulp](http://gulpjs.com/) check it out as this project makes heavy use of it. All gulp tasks can be found at the bottom of the `gulpfile.js`. Some of the main tasks are as follows:

	$ gulp					- runs the app and watches for changes on http://localhost:8080
	$ gulp build			- builds a dist version in the public directory
	$ gulp build:run 		- builds a dist version and runs the server
	
	$ gulp clean 			- a temperamental method to clean the public directory
	
	$ gulp test				- runs all test files
	$ gulp e2e  			- runs all tests via webdriver/selenium etc
	
This gulp setup is taken from a cool [gulp starter](https://github.com/ArnaudRinquin/gulp-starter) by Dan Tello who wrote a great article on [working with Gulp](http://viget.com/extend/gulp-browserify-starter-faq). I've just modified it to my taste.

Gulp is an awkward word to type, I suggest making an abbreviated alias.

### Working with the project
The default gulp task sets up a development server on port 8080 and watches for source code changes in the `client` and `views` directories. Changes to `client/js` javascript files are linted and then copied to the public directory verbatim.

The gulp build tasks runs the javascript code from `client/js` via the uglify optimiser. All output code is placed in the `public/js` folder.

Please note the `public` directories are periodically cleaned during gulp tasks. DO NOT put source code or artwork in this directory as it will be permanently overwritten/deleted.

### Project layout
*	`client` contains the client source code (.js, .styl, .jpg, .png, .gif, .html)
*	`public` is the web root directory where files are served over http. All content in this directory should be generated via the grunt build scripts.
*	`server` contains code to generate the nodejs/express development server.
*	`test` contains all source code tests
*	`views` contains the handlebar templates that are served as html



