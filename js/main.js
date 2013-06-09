requirejs.config({
    paths: {
        'jquery': 'libs/jquery-1.9.1.min',
        'underscore': 'libs/underscore-min',
        'backbone': 'libs/backbone-min',
        'text': 'libs/text',
        'pageslider': 'libs/pageslider',
        // RequireJS plugin
        'domReady':'libs/require/domReady',
        'router': 'routers/AppRouter'       
    },
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'underscore': {
            exports: '_'
        }
    }
});

require([
  'App'
  ], function(App) {
    App.initialize();
  }
);

/*
require([
    'jquery',
    'backbone',
    'domReady',
    'router',
    'app'
], function(app, domReady, $, Backbone) {

    console.log(domReady);


    domReady(function () {
        console.log(app);
        app.router = new app.routers.AppRouter();
        app.utils.templates.load(["HomeView", "EmployeeView", "EmployeeListItemView", "ReportsView", "MapView", "LoginView", "TestView"],
            function () {
                app.router = new app.routers.AppRouter();
                Backbone.history.start();
            });
        console.log(app);
    });

});


*/