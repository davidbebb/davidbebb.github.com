var fs = require('fs-extra');
var moment = require('moment');

var buildPosts = require('./lib/buildPosts');
var createPage = require('./lib/createPage');
var buildData = require('./lib/buildData')


var index = fs.readFileSync('./templates/index.ejs', 'utf8');
var postsDirectory = './posts';

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
      // {
      //   title: 'Projects',
      //   href: './projects.html'
      {
        title: 'CV',
        href: './about.html'
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
  posts:buildPosts(postsDirectory)
}

var indexData =  buildData(data, postsData, 'Thoughts');
var projectsData = buildData(data, {}, 'Projects');
var about = buildData(data, {about:[]}, 'CV')
var pages = [
  {
    template: index,
    data: indexData,
    name: 'index'
  },
  {
    template: index,
    data: projectsData,
    name: 'projects'
  },
  {
    template: index,
    data: about,
    name: 'about'
  }
]

pages.forEach(function (p){
  console.log(p.data);
  p.data.lib = {
    moment:moment
  },
  createPage(p.template, p.data, p.name);
});
