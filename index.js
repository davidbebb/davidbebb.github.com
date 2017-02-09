var ejs = require('ejs');
var fs = require('fs-extra');
var moment = require('moment');

var index = fs.readFileSync('./templates/index.ejs', 'utf8');

var author = 'David Bebb';
var title = 'Caffine to code'
var data = {
  lib:{
    moment:moment
  },
  header:{
    title: title + ' by ' + author,
  },
  sidebar:{
    title: title,
    copyright: ['2015 -', new Date().getFullYear(), author].join(' '),
    pages:[
      {
        title: 'Thoughts',
        href: '#',
        class: 'current'
      },
      {
        title: 'Projects',
        href: './projects.html'
      },
      {
        title: 'About Me',
        href: './about.html'
      }
    ],
    recent: 0 //or an array of links
  },
  pagination:{
    numberOfPages:1,
    currentPage:1
  },
  posts:[
    {
      date:'20170206',
      header:{
        title:'First Post',
        subheader: 'This is still my first post.',
        teaser:'This is the space for click bait',
      },
      image:{
          src: './images/pic02.jpg',
          alt: 'A pretty picture'
      },
      body:[
        'This is paragraph one',
        'and <strong>this</strong> is pragraph 2.'
      ]
    },
    {
      date: '20170228',
      header:{
        title:'Second  Post',
        subheader: 'This is still my first post really.',
        teaser:'This is the space for click bait'
      },
      body:[
        'Look mom, no picture!',
        'and <strong>this</strong> is pragraph 2. <- and I still can\'t spell paragraph'
      ]
    }

  ]
}

var index = ejs.render(index, data, {filename:'./templates/index'});

fs.outputFile('index.html', index, function (err) {
 if (err) {console.log(err);}
});


var about = ejs.render(index, data, {filename:'./templates/index'});

fs.outputFile('about.html', about, function (err) {
 if (err) {console.log(err);}
});


var projects = ejs.render(index, data, {filename:'./templates/index'});

fs.outputFile('projects.html', projects, function (err) {
 if (err) {console.log(err);}
});
