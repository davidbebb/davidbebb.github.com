var fs = require('fs-extra');
var ejs = require('ejs');


module.exports = function (template, data, name){
  var page = ejs.render(template, data, {filename:'./templates/index'});
  fs.outputFile(name +'.html', page, function (err) {
     if (err) {
       console.log(name, err);
     } else {
       console.log('Wrote ' + name);
     }
  });
}
