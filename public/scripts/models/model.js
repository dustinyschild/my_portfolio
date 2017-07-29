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
      console.log('passed in project',project);
      Project.all.push(new Project(project));
    });
    console.log('projects in Project.all ',Project.all);
  }

  var rawData = [];
  Project.fetchAll = function(){
    var eTag;
    $.ajax({
      type: 'HEAD',
      url: 'data/rawData.json',
      dataType: 'json',
      complete: function(xhr) {
        eTag = xhr.getResponseHeader('ETag');
      }
    })
    .then(() => {
      if (localStorage.eTag && localStorage.eTag === eTag){
        console.log('eTag matches');
        rawData = localStorage.data;
        console.log(rawData);
      } else {
        $.getJSON('data/rawData.json',function(data,message,xhr){
          rawData = data;
          console.log(data);
          localStorage.setItem('data', JSON.stringify(data));
          localStorage.setItem('eTag', xhr.getResponseHeader('ETag'));
        });
      }
    })
    .then(() => {
      console.log('rawData',rawData,'localStorage',localStorage)
      Project.loadAll(JSON.parse(localStorage.data));
      console.log('projects loaded ', Project.all.length)
      Project.all.forEach(function(project){
        console.log(project)
        $('#projects').append(Project.toHtml(project));
      });
    });
  }

  Project.initProjectPage = function(){
    console.log('initializing page');
    Project.fetchAll();
  }
  module.Project = Project;
})(app);
