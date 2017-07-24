'use strict';

Project.all = [];

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
  return template(this);
};


projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});

Project.loadAll = function(rawData) {

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
    console.log(Project.all);
  });
};

function fetchAll(){
  if (localStorage.data){
    Project.loadAll(JSON.parse(localStorage.data));
    console.log('localStorage exists.');
  } else {
  $.getJSON('data/hackerIpsum.json', function(data){
    localStorage.data('data', JSON.stringify(data));
    Project.loadAll(localStorage.data);
  });
  }
}
