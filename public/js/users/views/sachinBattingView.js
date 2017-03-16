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
						self.collection= self.OdiPlayerComparisonCollection.toJSON();
						self.render();
					}
				})
			},
			render: function(){
				var that=this;
				this.$el.highcharts({
					chart:{
						type: 'column'
					},
					title: {
						text: 'Comparison between some of the best batsmen in ODI'
					},
					xAxis: {
						categories: that.collection.map(function(x){return [x['player_name']]})
					},
          series: [{
          	name: 'Average',
            data: that.collection.map(function(x){return [x['average']]})
          },{
          	name: 'Strike rate',
          	data: that.collection.map(function(x){return [x['strike_rate']]})
          },{
          	name: 'Wickets',
          	data: that.collection.map(function(x){return [x['wickets']]})
          },{
          	name: 'Highest Score',
          	data: that.collection.map(function(x){return [x['highest_score']]})
          }]
				});
			}
		});
		return sachinBattingView;
});