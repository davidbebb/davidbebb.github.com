var klaw = require('klaw-sync');
var fs = require('fs-extra');


module.exports = function (postsDirectory){

  var files = klaw(postsDirectory, {nodir: true});
  var posts = [];
  files.forEach(function (f){
    if (f.path.match(/.json$/)){
      posts.push(fs.readJsonSync(f.path, {throws: false}));
    }
  });
  //TODO add support for a 'publish t/f flag'

  return posts.sort(function (a,b){
    return b.date - a.date;
  });
}
