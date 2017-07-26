'use strict';
var app = app || {};

page('/', app.aboutController.init);
page('/skills', app.skillsController.init);
page('/projects', app.projectsController.init);

page();
