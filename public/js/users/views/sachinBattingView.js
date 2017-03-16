define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts'
	],function($,_,Backbone,highcharts){
		var sachinBattingView= Backbone.View.extend({
			el: '#con',
			render: function(a){
				this.result= a.map(function(x){return [((new Date(x['date'])).getFullYear()), parseInt(x['batting_score'])]});
				console.log(this.result);
				this.$el.highcharts({
					plotOptions: {
					    series: {
					        pointStart: 1985
					    }
					},
          series: [{
              data: this.result
          }]
				});
			}
		});
		return sachinBattingView;
});