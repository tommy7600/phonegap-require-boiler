// Filename: views/HomeView.js

define([
  'jquery',
  'underscore',
  'backbone',
 // 'models/App',
 // 'collections/Apps',
  'text!../../tpl/HomeView.html'
//], function($, _, Backbone, App, Apps, homeTemplate){
], function($, _, Backbone, homeTemplate){    

  var HomeView = Backbone.View.extend({
    el: $("#replace-me"),
    render: function(){
      console.log('HomeView rendered');
      //console.log(homeTemplate);
      this.$el.html(homeTemplate);

      // var apps = new Apps();
      // var appListView = new AppListView({ collection: apps}); 
      // appListView.render();
    }
  });

  return HomeView;
});





/*app.views.HomeView = Backbone.View.extend({

    initialize: function () {
        this.searchResults = new app.models.EmployeeCollection();
        this.searchresultsView = new app.views.EmployeeListView({model: this.searchResults});
    },

    render: function () {
        this.$el.html(this.template());
        $('.scroller', this.el).append(this.searchresultsView.render().el);
        return this;
    },

    events: {
        "keyup .search-key":    "search",
        "keypress .search-key": "onkeypress"
    },

    search: function (event) {
        var key = $('.search-key').val();
        this.searchResults.fetch({reset: true, data: {name: key}});
    },

    onkeypress: function (event) {
        if (event.keyCode === 13) { // enter key pressed
            event.preventDefault();
        }
    }

});
*/