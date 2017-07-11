'use strict';

function Project(name, url, repoUrl){
  this.name = name;
  this.url = url;
  this.repoUrl = repoUrl;
}

var projects = [
  new Project('Hotel Project', 'https://dustinyschild.github.io/hotel-final-project/', 'https://github.com/dustinyschild/hotel-final-project'),
  new Project('About Me', 'https://dustinyschild.github.io/about_me/', 'https://github.com/dustinyschild/about_me'),
  new Project('Cookie Stand', 'https://dustinyschild.github.io/cookie-stand/', 'https://github.com/dustinyschild/cookie-stand')
];
