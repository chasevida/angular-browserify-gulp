#Angular, Browserify & Gulp

This is a just a sandbox where I'm playing with some libs n' frameworks. At this early stage it simply has [Express.js](http://expressjs.com/), [Angular](https://angularjs.org/), [Browserify](http://browserify.org/) and [Gulp](http://gulpjs.com/) playing nicely. I realise there are tons of these sort of seed projects out there but this drop in the water is cause I just wanted to get familiar with certain libraries in a style I enjoy.


### Installation
Clone the repository to get started. Global dependencies include, Node, Bower, Karma and maybe something else I've forgotten.

	$ git clone git://github.com/chasevida/angular-browserify-gulp
	$ cd angular-browserify-gulp
	$ npm install
	$ bower install
	$ gulp

The last command will run the required build tasks and launch the application an appropriate port vai [BrowserSync](http://www.browsersync.io/)

### Stack - JavaScript

* 	[Node.js](http://nodejs.org/)
* 	[Gulp](http://gulpjs.com/)
*	[Express.js](http://expressjs.com/)
*	[Browserify](http://browserify.org/)
*	[Angular](https://angularjs.org/)
*	[Karma](https://karma-runner.github.io)
*	[Stylus](http://learnboost.github.io/stylus/)
*	[Axis Css](http://roots.cx/axis/)
*	[BrowserSync](http://www.browsersync.io/)

### Gulp Tasks
If your not familiar with [Gulp](http://gulpjs.com/) check it out as this project makes heavy use of it. All gulp tasks can be found at the bottom of the `gulpfile.js`. Some of the main tasks are as follows:

	$ gulp					- runs the app and watches for changes on http://localhost:8080
	$ gulp build			- builds a dist version in the public directory
	
	$ gulp clean 			- a temperamental method to clean the public directory
	
	$ gulp test				- runs all test files
	$ gulp e2e  			- runs all tests via webdriver/selenium etc

Gulp is an awkward word to type, I suggest making an abbreviated alias.

### Angular - Templates
This repo uses `$templateCache` to load in client side templates. These are generated via `$ gulp templates` and compiled into a module in the `build` directory. This can then be included in the angular app. This allows templates to be developed in html, jade or some other templating language.

### Tests - Karma, Jasmine, Mocha & Chai
The front-end unit tests are kept in relation to their module directory structure similar to Google's recent [best practice document](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub). It varies a little in that I personally prefer the module pattern as used in ZF2 so it's a mish mash of both.

Karma is set-up to run both Jasmine and Mocha, the only change required is in the test files and the gulp tasks where the config file will need to be changed to `karma.jasmine.config.js`. I pesronally enjoy using Mocha & Chai.

### Tests - Protractor
Install all npm packages and then run `$ ./node_modules/protractor/bin/webdriver-manager update` to install Selenium and the Chrome driver locally. Again I've used Mocha and Chai for these and there are specific instructions on how to integrate these with [Protractor](https://github.com/angular/protractor), check out [this repo](https://github.com/angular/protractor/blob/master/docs/using-mocha.md) for more specifics. 

I've set-up a gulp task to run these tests as opposed to calling a cumbersome command via terminal. Make sure you have an instance of the site running before running `$ gulp e2e`

### Working with the project
The default gulp task sets up a development server on port 8080 and watches for source code changes in the `client` and `views` directories. Changes to `client/js` javascript files are copied to the public directory verbatim.

The gulp build tasks runs the javascript code from `client/js` via the uglify optimiser. All output code is placed in the `public/js` folder.

JS linting is performed when you first fire up gulp. I've not included it with every file change as it was slowing down gulp process. You could easily add a new task/sequence for test driven development that watches for linting. Apart from that it will lint when you build so you can at least catch issues there.

Please note the `public` and `build` directories are periodically cleaned during gulp tasks. DO NOT put source code or artwork in this directory as it will be permanently overwritten/deleted.

### Project layout
* 	`build` project files generated for build/compile tasks. 
 	* 	all content in this directory should be generated via gulp tasks.
 	* 	content in here is permanently destroyed periodically.
*	`client` contains the client side source code and tests (.js, .styl, .jpg, .png, .gif, .html, .jade)
	*   `img` all public images.
	* 	`js` all front end js source.
	* 	`styles` all Stylus files.
	* 	`vendor` all bower components.
*	`public` is the web root directory where files are served over http.
	* 	all content in this directory should be generated via gulp tasks.
	* 	content in here is permanently destroyed periodically.
*	`server` contains code to generate the node/express development server.
*	`test` contains all server side and e2e tests.
*	`views` contains server side templates that are served as html.


### Thanks
*	Thanks [Will Ogden](https://github.com/willogden), whose [angular-acorn](https://github.com/willogden/angular-acorn) repo helped me resolve browserify/karma integration.
*	Thanks [Dan Tello](https://github.com/greypants), who wrote a great article on [working with Gulp](http://viget.com/extend/gulp-browserify-starter-faq). I've taken his setup and just modified it to my taste.
* 	Thanks [Ben Daley](https://github.com/at0g), whose [Marionette boilerplate](https://github.com/at0g/bens-boilerplate)  inspired me down this path.
