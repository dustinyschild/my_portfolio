'use strict';

$(document).ready(function(){
  Project.prototype.navHandler();
  Project.prototype.toHtml();
});

var projects = [];

function Project(rawDataObj){
  for (var key in rawDataObj){
    this[key] = rawDataObj[key];
  }
}
rawData.forEach(function(thisProject){
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
  return template(this);
};
