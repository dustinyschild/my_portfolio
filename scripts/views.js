'use strict';

$(document).ready(function(){
  navHandler();
  tabHandler();
  Project.prototype.toHtml();
  socialNavClick();
});

var projects = [];

projectsData.forEach(function(thisProject){
  projects.push(new Project(thisProject));
});

function tabHandler(){
  $('.hamburger-nav ul').on('click', 'li.tab', function(item){
    console.log(this);
    $('section').hide();
    console.log($('section'));
    var activeTab = $(this).data('content');
    var sectionId = '#' + activeTab;
    $(sectionId).fadeIn();

  });
  $('.hamburger-nav .tab:first').click();
};

function navHandler(){
  $('.hamburger-nav').on('click', 'i', function(){
    $('.hamburger-nav').toggleClass('unclicked').toggleClass('clicked');
  });
};

function socialNavClick(){
  $('.social-nav').on('click', 'i', function(){
    $('.social-nav').toggleClass('clicked').toggleClass('unclicked');
    console.log('clicked');
  });
};
