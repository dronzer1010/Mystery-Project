//User model
var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

//Create new Schema for User

var UserSchema = new Schema({
    firstname : {
      type : String ,
      required : true ,
      trim : true
    } ,

    lastname : {
      type : String,
      default : ""
    } ,

    username : {
      type : String ,
      required : true ,
      unique : true ,
      trim : true ,
      validate : [
        function(username){
          return username.length >=6
        },
        'Username length should be greater than or equals to 6.'
      ]
    } ,

    email : {
      type : String ,
      required : true ,
      unique : true ,
      match : /.+\@.+\..+/

    } ,


      password : {
      type : String ,
      required : true ,
      trim : true ,
      validate : [
        function(password){
          return password.length >=6
        },
        'Password length should be greater than or equals to 6.'
      ]
    } ,

    created : {
      type : Date ,
      default : Date.now
    } ,

    activated : {
      type : Boolean ,
      default : false
    }

});


mongoose.model('User' , UserSchema);
