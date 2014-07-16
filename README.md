#Angular, Browserify & Gulp

This is a just a sandbox where I'm playing with some libs n' frameworks. At this early stage it simply has [Express.js](http://expressjs.com/), [Angular](https://angularjs.org/), [Browserify](http://browserify.org/) and [Gulp](http://gulpjs.com/) playing nicely. I realise there are tons of these sort of seed projects out there but this drop in the water is cause I just wanted to get familiar with certain libraries in a style I enjoy.


### Installation
Clone the repository to get started. Global dependencies include, Node, Bower, Karma and maybe something else I've forgotten.

	$ git clone git://github.com/chasevida/angular-browserify-gulp
	$ cd angular-browserify-gulp
	$ npm install
	& bower install
	$ gulp

The last command will run the required build tasks and application on [http://localhost:8080](http://localhost:8080)

### Stack - JavaScript

* 	[Node.js](http://nodejs.org/)
* 	[Gulp](http://gulpjs.com/)
*	[Express.js](http://expressjs.com/)
*	[Browserify](http://browserify.org/)
*	[Angular](https://angularjs.org/)
*	[Karma](https://karma-runner.github.io)
*	[Stylus](http://learnboost.github.io/stylus/)
*	[Axis Css](http://roots.cx/axis/)

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

### Tests - Karma, Jasmine, Mocha & Chai
The front-end unit tests are kept in relation to their module directory structure similar to Google's recent [best practice document](https://docs.google.com/a/chasevida.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub). It varies a little in that I personally prefer the module pattern as used in ZF2 so it's a mish mash of both.

Karma is set-up to run both Jasmine and Mocha, the only change required is in the test files and the gulp tasks where the config file will need to be changed to `karma.jasmine.config.js`. I pesronally enjoy using Mocha & Chai.

### Tests - Protractor
Install all npm packages and then run `./node_modules/protractor/bin/webdriver-manager update` to install Selenium and the Chrome driver locally. Again I've used Mocha and Chai for these and there are specific instructions on how to integrate these with [Protractor](https://github.com/angular/protractor), check out [this repo](https://github.com/angular/protractor/blob/master/docs/using-mocha.md) for more specifics. 

I've set-up a gulp task to run these tests as opposed to calling a cumbersome command via terminal. Make sure you have an instance of the site running before running `$ gulp e2e`

### Working with the project
The default gulp task sets up a development server on port 8080 and watches for source code changes in the `client` and `views` directories. Changes to `client/js` javascript files are copied to the public directory verbatim.

The gulp build tasks runs the javascript code from `client/js` via the uglify optimiser. All output code is placed in the `public/js` folder.

JS linking is performed when you first fire up gulp. I've not included it with every file change as it was slowing down gulp process. You could easily add a new task/sequence for test driven development that watches for linting. Apart from that it will lint when you build so you can at least catch issues there.

Please note the `public` and `build` directories are periodically cleaned during gulp tasks. DO NOT put source code or artwork in this directory as it will be permanently overwritten/deleted.

### Project layout
*	`client` contains the client source code (.js, .styl, .jpg, .png, .gif, .html)
*	`public` is the web root directory where files are served over http. All content in this directory should be generated via the grunt build scripts.
*	`server` contains code to generate the nodejs/express development server.
*	`test` contains all source code tests
*	`views` contains the handlebar templates that are served as html



