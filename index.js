var ejs = require('ejs');
var fs = require('fs-extra');

var index = fs.readFileSync('./templates/index.ejs', 'utf8');

var author = 'David Bebb';
var title = 'Caffine to code'
var data = {
  header:{
    title: title + ' | ' + author,
  },
  sidebar:{
    title: title,
    copyright: ['2015 -', new Date().getFullYear(), author].join(' '),
    pages:[
      {
        title: 'Posts',
        href: '#',
        class: 'current'
      },
      {
        title: 'About Me',
        href: '#'
      },
      {
        title: 'Projects',
        href: '#'
      }
    ],
    recent: []
  },
  pagination:{
    numberOfPages:1,
    currentPage:1
  }
}

var html = ejs.render(index, data, {filename:'./templates/index'});

fs.outputFile('index.html', html, function (err) {
 console.log(err) // => null
});
