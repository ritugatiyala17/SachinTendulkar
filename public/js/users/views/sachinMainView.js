define([
   'jquery',
   'underscore',
   'backbone',
   'users/views/sachinBattingView'
],function($,_,Backbone,sachinBattingView){
    var UserView=Backbone.View.extend({
        initialize:function(){
            var self=this;
             
            (new sachinBattingView).initialize();
            self.render();
             
          },
           render:function(){
               console.log('We are inside the render function :D');
               // this.$el.html(this.Temp({collection:this.usercoll.toJSON()}));
             }
     });
    return UserView;
});