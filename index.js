var ejs = require('ejs');
var fs = require('fs-extra');
var moment = require('moment');

var index = fs.readFileSync('./templates/index.ejs', 'utf8');

var globals = {
  author: 'David Bebb',
  title: 'Caffeine to code'
}


var data = {
  header:{
    title: globals.title + ' by ' + globals.author,
  },
  sidebar:{
    title: globals.title,
    copyright: ['2015 -', new Date().getFullYear(), globals.author].join(' '),
    pages:[
      {
        title: 'Thoughts',
        href: './index.html'
      },
      {
        title: 'Projects',
        href: './projects.html'
      // },
      // {
      //   title: 'About Me',
      //   href: './about.html'
      }
    ],
    recent: 0 //or an array of links
  }
}

var postsData = {
  pagination:{
    numberOfPages:1,
    currentPage:1
  },
  posts:[
    {
      date:'20170206',
      tags:[],
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
      tags:[],
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

var createPage = function (template, data, name){
  var page = ejs.render(template, data, {filename:'./templates/index'});
  fs.outputFile(name +'.html', page, function (err) {
     if (err) {
       console.log(name, err);
     } else {
       console.log('Wrote ' + name);
     }
  });
}

function extend(obj, src) {
  for (var key in src) {
    if (src.hasOwnProperty(key)) {
      obj[key] = src[key];
    }
  }
  return obj;
}


var indexData = JSON.parse(JSON.stringify(data));
var indexData = extend (indexData, postsData);
indexData.sidebar.pages.find(function (ele){
  if (ele.title == 'Thoughts') {
    ele.class = 'current';
  }
});


var projectsData = JSON.parse(JSON.stringify(data));
var projectsData = extend (projectsData, {});
projectsData.sidebar.pages.find(function (ele){
  if (ele.title == 'Projects') {
    ele.class = 'current';
  }
});

var aboutData = JSON.parse(JSON.stringify(data));
var aboutData = extend (aboutData, {
  about:{}
});
aboutData.sidebar.pages.find(function (ele){
  if (ele.title == 'About Me') {
    ele.class = 'current';
  }
});

var pages = [
  {
    template: index,
    data: indexData,
    name: 'index'
  },
  {
    template: index,
    data: aboutData,
    name: 'about'
  },
  {
    template: index,
    data: projectsData,
    name: 'projects'
  }
]


for (p of pages){
  p.data.lib = {
      moment:moment
    },
  createPage(p.template, p.data, p.name);
}
