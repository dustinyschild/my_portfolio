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
    return template(project);
  };

  Project.loadAll = function(rawData) {
    Project.all = rawData.map(project => {
      return new Project(project);
    });
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
        rawData = localStorage.data;
      } else {
        $.getJSON('data/rawData.json',function(data,message,xhr){
          rawData = data;
          console.log(rawData);
          localStorage.setItem('data', JSON.stringify(data));
          localStorage.setItem('eTag', xhr.getResponseHeader('ETag'));
        });
      }
    })
    .then(() => {
      Project.loadAll(JSON.parse(localStorage.data));
      Project.all.forEach(function(project){
        $('#projects').append(Project.toHtml(project));
      });
    });
  }

  Project.initProjectPage = function(){
    Project.fetchAll();
  }
  module.Project = Project;
})(app);
