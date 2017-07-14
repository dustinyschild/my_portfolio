'use strict';

$(document).ready(function(){
  Project.prototype.navHandler();
  Project.prototype.toHtml();
  navClick();
});

var projects = [];

function Project(rawDataObj){
  for (var key in rawDataObj){
    this[key] = rawDataObj[key];
  }
}
projectsData.forEach(function(thisProject){
  projects.push(new Project(thisProject));
});

Project.prototype.navHandler = function(){
  $('.hamburger-nav').on('click', 'li.tab', function(item){
    console.log(this);
    $('section').hide();
    console.log($('section'));
    var activeTab = $(this).data('content');
    var sectionId = '#' + activeTab;
    $(sectionId).fadeIn();

  });
  $('.hamburger-nav .tab:first').click();
};

Project.prototype.toHtml = function() {
  var source = $('#template-project').html();
  var template = Handlebars.compile(source);
  console.log(this);
  return template(this);
};

function navClick(){
  $('.hamburger-nav').on('click', 'i', function(){
    $('.hamburger-nav').toggleClass('unclicked').toggleClass('clicked');
    console.log($('.hamburger-nav'));
  });
};
