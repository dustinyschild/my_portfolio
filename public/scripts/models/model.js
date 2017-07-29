'use strict';
var app = app || {};

((module) => {
  Project.all = [];

  function Project(object) {
    this.name = object.name;
    this.img = object.img;
    this.repoUrl = object.repoUrl;
    this.url = object.url;
    this.contributors = object.contributors;
  }

  Project.toHtml = function(project) {
    var template = Handlebars.compile($('#template-project').html());
    console.log('handlebars template: ',template(project), project);
    return template(project);
  };

  Project.loadAll = function(rawData) {
    rawData.forEach(project => {
      Project.all.push(new Project(project));
    });
    console.log('projects in Project.all ',Project.all);
  }

  var rawData;
  Project.fetchAll = function(){
    if (localStorage.data){
      rawData = localStorage.data;
      console.log(rawData);
      Project.loadAll(JSON.parse(rawData));
    } else {
      console.log('initializing localStorage');
      $.getJSON('data/rawData.json').then(
        (data) => {
          rawData = JSON.stringify(data);
          localStorage.setItem('data', rawData);
          Project.loadAll(rawData);
        });
    }
    console.log('data ', rawData);
  }

  Project.initProjectPage = function(){
    Project.fetchAll();
    Project.all.forEach(function(project){
      console.log(project)
      $('#projects').append(Project.toHtml(project));
    });
  }

  module.Project = Project;
})(app);
