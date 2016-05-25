/*Main server*/
var mongoose=require('./config/mongoose'),
    express = require('./config/express'),

    app = express(), // Instance of express server.
    db=mongoose();


require('./app/routes')(app);
require('./app/routes/api/user.route.js')(app);
//404 & 500 error handling

app.use(function(req , res , next){
  res.status(404);
  res.send({error : "Page Not Found"});
  return ;
});


app.use(function(err , req ,res ,next){
  res.status(err.status || 500);
  res.send({
    error : "Internal Server Error"
});

  return;
});
//Start server and listen at particular port.

var server=app.listen(8080 , function(){
  console.log("Server started listening at port 8080");
});


module.exports=app;
