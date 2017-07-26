'use strict';

var app = app || {};

(module => {
  const skillsController = {};

  skillsController.init = () => {
    console.log('skills tab');
    $('.tab-content').hide();
    $('#skills').fadeIn();
  }

  module.skillsController = skillsController;
})(app);
