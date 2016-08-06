require('./css/style.css');
// require('!!script!jquery/dist/jquery.min.js');
// window.jQuery = window.$ =  require('jquery/dist/jquery.min');

require('./node_modules/bootstrap/dist/css/bootstrap.min.css');

require('./node_modules/angular/angular.min.js');
require('./public/js/controller/main.js');

var otherComponent = require("./js/content.js");

document.write("It Works");
document.write(otherComponent);
document.write("hello");
