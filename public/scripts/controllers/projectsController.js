'use strict';

var app = app || {};

(module => {
  const projectsController = {};

  projectsController.init = () => {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }

  module.projectsController = projectsController;
})(app);
