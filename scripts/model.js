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
  var template = Handlebars.compile($('#template-project').text());
  //maybe something goes here...Idk...
  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    projects.push(new Project(ele));
  })
}

var rawData;
Project.fetchAll = function() {

  if (localStorage.rawData) {

    console.log('localStorage data found');
    rawData = JSON.parse(localStorage.getItem('rawData'));
    Project.loadAll(rawData);
    // You need to do Something.initIndexPage();

  } else {

    console.log("Local storage data not found");
    $.getJSON('data/rawData.json').done(function(data){
      rawData = data;
      console.log(rawData);
      localStorage.setItem('rawData', JSON.stringify(rawData));
      Proejct.loadAll(rawData);
      // You need to do Something.initIndexPage();
    })
    .fail(function(){
      console.log('getJSON failed');
    });
  }
}