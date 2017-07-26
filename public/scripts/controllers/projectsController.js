'use strict';

var app = app || {};

(module => {
  const projectController = {};

  projectController.init = () => {
    $('.tab-content').hide();
    $('#projects').fadeIn();
  }

  module.projectController = projectsController;
})(app);
