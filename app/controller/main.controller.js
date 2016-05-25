
exports.main={

  index : function(req , res){
      res.render('index',{
        title : 'Index'
      });
  } ,

  register : function(req , res){

    res.render('pages/register' , {
      title : 'Register'
    });

  }



}
