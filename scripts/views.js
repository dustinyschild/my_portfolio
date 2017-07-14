'use strict';

var viewObject = {};

$(document).ready(function(){
  viewObject.navHandler();
});

viewObject.navHandler = function(){
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
