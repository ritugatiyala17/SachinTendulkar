define([
    'jquery',
    'underscore',
    'backbone',
    'text!users/templates/homeTemplate.html'
], function($, _, Backbone,homeTemplate) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            '/': 'showHome',
            'worldcup':'worldcupPerformance',
            'opener':'opener',
            'win':'winPercentage',
            'odi':'odiPerformance',
            '*actions': 'showHome'
        }
    });

    var initialize = function() {
        $("#view").html(homeTemplate);
        var appRouter = new AppRouter();
        
        appRouter.on('route:showHome',function(){
          require([
            'users/views/mainView'
            ],function(mainView){
              var MainView= new mainView({el:'#main-view'});
            });
        });

        appRouter.on('route:odiPerformance',function(){
          require([
            'users/views/sachinMainView'
            ],function(sachinMainView){
              var SachinMainView= new sachinMainView({el:'#main-view'});
            });
        });

        appRouter.on('route:worldcupPerformance',function(){
          require([
            'users/views/worldcupView'
            ],function(worldcupView){
              var WorldcupView= new worldcupView({el:'#main-view'});
            });
        });

        appRouter.on('route:opener',function(){
          require([
            'users/views/battingPositionView'
            ],function(battingPositionView){
              var BattingPositionView= new battingPositionView({el:'#main-view'});
            });
        });

        appRouter.on('route:winPercentage',function(){
          require([
            'users/views/centuriesToWinView'
            ],function(centuriesToWinView){
              var CenturiesToWinView= new centuriesToWinView({el:'#main-view'});
            });
        });

        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
