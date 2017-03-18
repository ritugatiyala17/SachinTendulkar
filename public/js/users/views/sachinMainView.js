define([
   'jquery',
   'underscore',
   'backbone',
   'users/views/odiPlayerComparisonView',
   'text!users/templates/odiStatsTemplate.html',
  'users/views/sachinVsRichardsView'
],function($,_,Backbone,odiPlayerComparisonView,odiStatsTemplate,sachinVsRichardsView){
    var sachinMainView=Backbone.View.extend({
        Temp: _.template(odiStatsTemplate),
        initialize:function(){
            var self=this;
            this.OdiPlayerComparisonView= new odiPlayerComparisonView({});
            this.SachinVsRichardsView= new sachinVsRichardsView({});
            this.render();
          },
        render: function(){
          this.$el.html(this.Temp());
          this.OdiPlayerComparisonView.setElement(this.$('#graph1')).render();
          this.SachinVsRichardsView.setElement(this.$('#graph2')).render();
          return this;
        }  
     });
    return sachinMainView;
});