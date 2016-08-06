require("./css/style.css");

// $script("https://cdnjs.cloudflare.com/ajax/libs/tether/1.3.3/js/tether.min.js");
// $script("https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.0/jquery.min.js");

require('./node_modules/angular/angular.min.js');
require('./public/js/controller/main.js');

var otherComponent = require("./js/content.js");

document.write("It Works");
document.write(otherComponent);
document.write("hello");
