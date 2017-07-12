'use strict';

function Project(name, img, url, repoUrl, contributors){
  this.name = projectsData.name;
  this.img = projectsData.img;
  this.url = projectsData.url;
  this.repoUrl = projectsData.repoUrl;
  this.contributors = projectsData.contributors;
}

var projects = [];

projectsData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
  console.log(projects);
});

var $projects = $('.projectscontainer');
projects.forEach(function(projects){
  $($projects).append('<h2>' + projects.name + '</h2>',
  '<a href="' + projects.url + '">See Project Here</a>',
  '<a href="' + projects.repoUrl + '">See Repository Here</a>'
);
});
//projects.forEach(function(projects){
  //$projects.append('<h2>' + this.name + '</h2>');
  //console.log($projects);
//});
