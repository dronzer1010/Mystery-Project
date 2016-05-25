//Main controller
var mainController = require('../controller/main.controller');

module.exports = function(app){

    app.route('/').get(mainController.main.index);
    app.route('/register').get(mainController.main.register);
};
