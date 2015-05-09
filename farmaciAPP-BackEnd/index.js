'use strict';

var http = require('http');
var express = require('express');
var kraken = require('kraken-js');
var mongoose = require('mongoose');
var logger = require('./lib/logger');

var options, app;

/*
 * Create and configure application. Also exports application instance for use by tests.
 * See https://github.com/krakenjs/kraken-js#options for additional configuration options.
 */
options = {
    onconfig: function (config, next) {

        mongoose.connect('mongodb://localhost:27017/farmacias');
        
        var database = mongoose.connection;

        database.on('error', function(error){
            logger.error(error);
        });
        database.once('open', function callback(){
          logger.info('db connection open');  
        });
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));

app.on('start', function () {
    logger.info('Application ready to serve requests.');
    logger.info('Environment: %s', app.kraken.get('env:env'));
});

if(!module.parent){
    var server = http.createServer(app);
    var ipaddress = "127.0.0.1";
    var port = 8000;
    logger.info('ipaddress: ' + ipaddress);
    logger.info('port: ' + port);
    server.listen( port, ipaddress, function() {
        logger.info((new Date()) + ' Server is listening...');
    });
}