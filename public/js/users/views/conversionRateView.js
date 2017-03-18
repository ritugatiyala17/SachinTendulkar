define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/openerComparisonCollection'
	],function($,_,Backbone,highcharts,openerComparisonCollection){
		var conversionRateView= Backbone.View.extend({
			el: '#graph6',
			initialize: function(){
				var self= this;
				this.OpenerComparisonCollection= new openerComparisonCollection();
				this.OpenerComparisonCollection.fetch({
					success: function(){
						self.render();
					}
				})
			},
			render: function(){
				var self=this;
				this.$el.highcharts({
					chart:{
						type: 'column'
					},
					title: {
						text: 'Ratio of Fifties to Hundreds'
					},
					xAxis: {
						categories: self.OpenerComparisonCollection.toJSON().map(function(x){return [x['player_name']]})
					},
          series: [{
          	name: 'Ration of Fifties to Hundreds',
          	data: self.OpenerComparisonCollection.toJSON().map(function(x){return [x['fifties']/x['centuries']]})
          }]
				});
			}
		});
		return conversionRateView;
});