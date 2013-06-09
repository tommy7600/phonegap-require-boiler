// Filename: App.js

define([
  'jquery', 
  'underscore', 
  'backbone',
  'router',
], function($, _, Backbone, AppRouter){
 
  var initialize = function() {
    AppRouter.initialize();
     console.log('ztot');
  };

  return { 
    initialize: initialize
  };
});