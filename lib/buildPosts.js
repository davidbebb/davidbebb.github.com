var klaw = require('klaw-sync');
var fs = require('fs-extra');


module.exports = function (postsDirectory){

  var files = klaw(postsDirectory, {nodir: true});
  var posts = [];
  files.forEach(function (f){
    posts.push(fs.readJsonSync(f.path, {throws: false}));
  });

  return posts.sort(function (a,b){
    return b.date - a.date;
  });
}
