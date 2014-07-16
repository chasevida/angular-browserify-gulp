
var express             = require('express'),
    errorHandler        = require('express-error-handler'),
    bodyParser          = require('body-parser'),
    methodOverride      = require('method-override'),
    morgan              = require('morgan'),
    http                = require('http'),
    path                = require('path'),
    pkg                 = require(path.join(__dirname, '../', 'package.json')),
    config              = require(path.join(__dirname, '../config', 'server.config.json'))
    ;


/*
 * ------------------------------------------------
 * Create App and configure
 */

var app     = express(),
    port    = process.env.PORT || 8080,
    env     = process.env.NODE_ENV || 'development',
    server
    ;


/*
 * ------------------------------------------------
 * View engine
 */

app.set('view engine', 'jade');
app.set('views', path.join( __dirname, '../', 'views' ));

/*
 * ------------------------------------------------
 * General middleware
 */

app.set('port', process.env.PORT || port );
app.set('pkg', pkg);

app.use(morgan({ format: 'dev' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, '../', 'public' )));



/*
 * ------------------------------------------------
 * Basic Auth
 * ************************************************
 * NB: Remove this to go live
 */
//app.use( express.basicAuth( 'username', 'password' ) );



/*
 * ------------------------------------------------
 * Configure by environment
 */

if ('development' == env) {
    app.locals.pretty = true;
    app.use( errorHandler({ server: server }) );
    app.set('config', config.development);
    app.use('/vendor', express.static(path.join(__dirname, '../', 'client/vendor')) );
    app.use('/templates', express.static(path.join(__dirname, '../', 'templates')) );
} else {
    app.set('config', config.production);
}




/*
 * ------------------------------------------------
 * Routes
 */
require(path.join(__dirname, 'routes' ))(app);



/*
 * ------------------------------------------------
 * Create Server
 */
server = http.createServer(app).listen(app.get('port'), function(){
    console.log( 'Express server listening on port ' + app.get('port') );
    console.log( 'Node Environment: ' + app.get('env') );
});

process.on('SIGINT', function() {
    console.warn( 'Express server listening on port ' + app.get('port') + ' exiting');
    process.exit(0);
});


