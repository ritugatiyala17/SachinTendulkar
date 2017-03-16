requirejs.config({
    paths: {
        'text': 'vendor/text',
        'css':'vendor/require-css',
        'jquery': 'vendor/jquery-3.1.1.min',
        'underscore':'vendor/underscore.min',
        'backbone':'vendor/backbone-min',
        'highcharts':'vendor/highcharts'
    },
    shim: {
        'backbone':{
                  deps:['underscore','jquery'],
                  exports:'Backbone'
             },
         'underscore':{
                  exports:''
             },
         'text':{
                  deps:['underscore']
                 
             }
    }
});

require([
    'app','css!./../styles/main.css'
], function(App) {
    App.initialize();
});
