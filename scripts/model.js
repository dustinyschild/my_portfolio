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

rawData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

function fetchAll(){
  if (localStorage.data){
    Project.loadAll(JSON.parse(localStorage.data));
  } else {
    var rawData = $.getJSON('data/hackerIpsum.json', function(data){
      localStorage.data('data', JSON.stringify(data));
      Project.loadAll(data);
    });
  }
  return rawData;
}
