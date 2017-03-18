define([
   'jquery',
   'underscore',
   'backbone',
   'text!users/templates/mainTemplate.html'
],function($,_,Backbone,mainTemplate){
    var mainView=Backbone.View.extend({
        Temp: _.template(mainTemplate),
        initialize:function(){
            this.render();
          },
        render: function(){
          this.$el.html(this.Temp());
        }  
     });
    return mainView;
});