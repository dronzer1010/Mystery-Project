//User controller
var userController = require('../../controller/user.controller');


module.exports = function(app){

  app.route('/api/user').post(userController.main.create);

}
