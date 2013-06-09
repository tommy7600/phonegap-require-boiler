// Filename: routes/AppRouter.js

define([
  'jquery',
  'underscore',
  'backbone',
  'views/HomeView',
], function($, _, Backbone, HomeView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'home': 'showHome',
      'login': 'login',
      // Default route
      '*actions': 'default'
    }
  });
  
  var initialize = function(){
    console.log('Router initialized');

    var appRouter = new AppRouter;
    
    appRouter.on('route:showHome', function(){
      var homeView = new HomeView();
      homeView.render();
    });

    appRouter.on('route:login', function(){
      var homeView = new LoginView();
      homeView.render();
    });

    appRouter.on('route:default', function (actions) { 
      console.log('def route' + actions);    
      var homeView = new HomeView();
      homeView.render();
    });

    Backbone.history.start({ pushState: true});
  };

  return { 
    initialize: initialize
  };
});



/*
define(['backbone'], function(Backbone) {
    //console.log(app);
    var AppRouter = Backbone.Router.extend({

        routes: {
            "":                         "home",
            "employees/:id":            "employeeDetails",
            "employees/:id/reports":    "reports",
            "employees/:id/map":        "map",
            "test":                     "test",
            'login':                    "login"
        },

        initialize: function () {
            app.slider = new PageSlider($('body'));
            //console.log(app);
        },

        home: function () {
            // Since the home view never changes, we instantiate it and render it only once
            if (!app.homeView) {
                app.homeView = new app.views.HomeView();
                app.homeView.render();
            } else {
                console.log('reusing home view');
                app.homeView.delegateEvents(); // delegate events when the view is recycled
            }
            
            app.slider.slidePage(app.homeView.$el);
        },

        employeeDetails: function (id) {
            var employee = new app.models.Employee({id: id});
            employee.fetch({
                success: function (data) {
                    // Note that we could also 'recycle' the same instance of EmployeeFullView
                    // instead of creating new instances
                    app.slider.slidePage(new app.views.EmployeeView({model: data}).render().$el);
                }
            });
        },

        reports: function (id) {
            var employee = new app.models.Employee({id: id});
            employee.fetch({
                success: function (data) {
                    // Note that we could also 'recycle' the same instance of EmployeeFullView
                    // instead of creating new instances
                    app.slider.slidePage(new app.views.ReportsView({model: data}).render().$el);
                }
            });
        },

        map: function (id) {
            app.slider.slidePage(new app.views.MapView().render().$el);
        },

        test: function () {
            app.testView = new app.views.TestView();
            app.testView.render();
            app.slider.slidePageFrom(new app.views.TestView().render().$el, 'page-right');
        },    

        login: function () {

            app.loginView = new app.views.LoginView();
            app.loginView.render();
            console.log('id');
            app.slider.slidePageFrom(new app.views.LoginView().render().$el, 'page-right');
        } 

    });

});

*/










