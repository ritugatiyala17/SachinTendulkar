define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/worldcupCollection',
   'text!users/templates/worldcupTemplate.html'
	],function($,_,Backbone,highcharts,worldcupCollection,worldcupTemplate){
		var worldcupView= Backbone.View.extend({
			Temp: _.template(worldcupTemplate),
			initialize: function(){
				var self= this;
				this.WorldcupCollection= new worldcupCollection();
				this.WorldcupCollection.fetch({
					success: function(){
						self.render();
					}
				})
			},
			render: function(){
				var self=this;
				this.$el.html(this.Temp());
				this.$('#graph3').highcharts({
					chart:{
						type: 'column'
					},
					title: {
						text: 'Worldcup Performance of best players'
					},
					xAxis: {
						categories: self.WorldcupCollection.toJSON().map(function(x){return [x['player_name']]})
					},
          series: [{
          	name: 'Average',
            data: self.WorldcupCollection.toJSON().map(function(x){return [x['average']]})
          },{
          	name: 'Strike rate',
          	data: self.WorldcupCollection.toJSON().map(function(x){return [x['strike_rate']]})
          }]
				});
			}
		});
		return worldcupView;
});