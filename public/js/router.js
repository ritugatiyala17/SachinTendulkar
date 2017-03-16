define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone,navbar,input) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            'home': 'showHome',
            'users':'showUser',
            'test':'test',
            '*actions': 'showHome'
        }
    });

    var initialize = function() {
        $("#view").html(navbar);
        app_router = new AppRouter();
        
        app_router.on('route:test',function(){
              console.log('Yo, we are inside the test :D');

          require([
            'users/views/sachinOdiRunsView'
            ],function(Test){
              var test= new Test({el:'#main-view'});
            });

        });
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
