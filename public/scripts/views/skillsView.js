'use strict';

var app = app || {};

(module => {
  const skillsController = {};

  skillsController.init = () => {
    $('.tab-content').hide();
    $('#skills').fadeIn();
  }

  module.skillsController = skillsController;
})(app);
