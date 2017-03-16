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
			}
			render: function(a){
				this.result= a.map(function(x){return [((new Date(x['date'])).getFullYear()), parseInt(x['batting_score'])]});
				console.log(this.result);
				this.$el.highcharts({
					plotOptions: {
					    series: {
					      pointStart: 1980
					    }
					},
          series: [{
          	lineWidth: 2,
        		dashStyle: 'Solid',
        		color: '#ff0000',
            data: this.result
          }]
				});
			}
		});
		return sachinBattingView;
});