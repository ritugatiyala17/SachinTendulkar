define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/odiPlayerComparisonCollection'
	],function($,_,Backbone,highcharts,odiPlayerComparisonCollection){
		var odiPlayerComparisonView= Backbone.View.extend({
			el: '#graph2',
			initialize: function(){
				var self= this;
				this.OdiPlayerComparisonCollection= new odiPlayerComparisonCollection();
				this.OdiPlayerComparisonCollection.fetch({
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
						text: 'Highest run scorers'
					},
					xAxis: {
						categories: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['player_name']]})
					},
	        series: [{
	        	name: 'Runs Scored',
	          data: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['runs']]})
	        }]
			});
			}
		});
		return odiPlayerComparisonView;
});