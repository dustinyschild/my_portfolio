'use strict';

var app = app || {};

(module => {
  const aboutController = {};

  aboutController.init = () => {
    $('.tab-content').hide();
    $('#aboutme').fadeIn();
  }

  module.aboutController = aboutController;
})(app);
