'use strict';

var viewObject = {};

$(document).ready(function(){
  viewObject.navHandler();
});

viewObject.navHandler = function(){
  $('.hamburger-nav').on('click', 'li.tab', function(item){
    console.log(this);
  });
};
