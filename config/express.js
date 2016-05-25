/*Configuration file for customized express server*/

var express = require('express') ,
    crypto = require('crypto') ,
    morgan = require('morgan'),
    path   = require('path') ,
    bodyParser= require('body-parser'),
    passport = require('passport');


module.exports = function(){
  var app = express();
  app.use(morgan('combined'));

  app.use(bodyParser.urlencoded({
    extended :  true
  }));

  app.use(bodyParser.json());
  //set view engine as ejs
  app.set('view engine', 'ejs');
  //set views folder for retreiving templates .
  app.set('views' , path.join(__dirname , '../app/views'));
  app.use(express.static(path.join(__dirname , '../public')));

  return app;

}
