'use strict';

$(document).ready(function(){
  Project.fetchAll();
  Project.toHtml();
  navHandler();
  navClick();
  //socialNavClick();
});

function navHandler(){
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

function navClick(){
  $('.hamburger-nav').on('click', 'i', function(){
    $('.hamburger-nav').toggleClass('unclicked').toggleClass('clicked');
    console.log($('.hamburger-nav'));
  });
};

function socialNavClick(){
  $('.social-nav').on('click', 'i', function(){
    $('.social').toggleClass('clicked').toggleClass('unclicked');
    console.log('.social');
  });
};
