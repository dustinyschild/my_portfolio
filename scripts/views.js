'use strict';

var viewObject = {};

$(document).ready(function(){
  viewObject.navHandler();
});

viewObject.navHandler = function(){
  var navTabs = $('.hamburger-nav.tab');
  console.log(navTabs);
};
