define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/odiPlayerComparisonCollection'
	],function($,_,Backbone,highcharts,odiPlayerComparisonCollection){
		var sachinBattingView= Backbone.View.extend({
			el: '#con',
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
						text: 'Comparison between some of the best batsmen in ODI'
					},
					xAxis: {
						categories: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['player_name']]})
					},
          series: [{
          	name: 'Average',
            data: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['average']]})
          },{
          	name: 'Strike rate',
          	data: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['strike_rate']]})
          },{
          	name: 'Wickets',
          	data: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['wickets']]})
          },{
          	name: 'Highest Score',
          	data: self.OdiPlayerComparisonCollection.toJSON().map(function(x){return [x['highest_score']]})
          }]
				});
			}
		});
		return sachinBattingView;
});