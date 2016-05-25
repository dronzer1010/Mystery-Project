//Instantiate User model
var User = require('mongoose').model('User');

exports.main = {
  create : function(req , res , next){

    var user = new User(req.body);
    user.save(function(err){
      if(err){
        return next(err);
      }else{
        res.json(user);
      }
    });

  } ,

  demo : function(req , res){
    res.send("found it");
  }

}
