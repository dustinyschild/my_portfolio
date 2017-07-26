'use strict';

var projects = [];

function Project(object) {
  this.name = object.name;
  this.img = object.img;
  this.repoUrl = object.repoUrl;
  this.url = object.url;
  this.contributors = object.contributors;
}

Project.prototype.toHtml = function() {
  var source = $('#template-project').text();
  var template = Handlebars.compile(source);
  console.log('handlebars template: ',this);
  return template(this);
};

projectsData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
