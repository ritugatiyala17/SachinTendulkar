define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/openerComparisonCollection'
	],function($,_,Backbone,highcharts,openerComparisonCollection){
		var openerAverageView= Backbone.View.extend({
			el: '#graph5',
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
						text: 'Best Openers in ODI'
					},
					xAxis: {
						categories: self.OpenerComparisonCollection.toJSON().map(function(x){return [x['player_name']]})
					},
          series: [{
          	name: 'Average',
            data: self.OpenerComparisonCollection.toJSON().map(function(x){return [x['average']]})
          },{
          	name: 'Strike rate',
          	data: self.OpenerComparisonCollection.toJSON().map(function(x){return [x['strike_rate']]})
          }]
				});
			}
		});
		return openerAverageView;
});