'use strict';

function Project(object) {
  this.name = object.name;
  this.img = object.img;
  this.repoUrl = object.repoUrl;
  this.url = object.url;
  this.contributors = object.contributors;
}

var projects = [];

projectsData.forEach(function(projectObject){
  console.log(projectObject);
  projects.push(new Project(projectObject));
  console.log(projects);
});

var $projects = $('.projectscontainer');
projects.forEach(function(object){
  $projects.append('<h2>' + object.name + '</h2>',
  '<img src="' + object.img + '"/>',
  '<a href="' + object.url + '">See Project Here</a>',
  '<a href="' + object.repoUrl + '">See Repository Here</a>'
  );
});
