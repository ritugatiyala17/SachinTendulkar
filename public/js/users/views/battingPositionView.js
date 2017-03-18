define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/battingPositionCollection',
	'users/views/openerComparisonView',
	'users/views/conversionRateView',
   'text!users/templates/openerComparisonTemplate.html'
	],function($,_,Backbone,highcharts,battingPositionCollection,openerComparisonView,conversionRateView,openerComparisonTemplate){
		var battingPositionView= Backbone.View.extend({
			Temp: _.template(openerComparisonTemplate),
			el: '#graph4',
			initialize: function(){
				var self= this;
				this.BattingPositionCollection= new battingPositionCollection();
				this.BattingPositionCollection.fetch({
					success: function(){
						self.OpenerComparisonView=new openerComparisonView({});
						self.ConversionRateView=new conversionRateView({});
						self.render();
					}
				})
			},
			render: function(){
				this.$el.html(this.Temp());
				var self=this;
				this.result= (this.BattingPositionCollection.toJSON()).map(function(x){return [x['Batting Position'],x['Total Runs']]});
				this.$('#graph4').highcharts({
					chart:{
						type: 'column'
					},
					title: {
						text: "Sachin's performance at various batting positions"
					},
          series: [{
            data: self.result
          }]
				});
				this.OpenerComparisonView.setElement(this.$('#graph5')).render();
				this.ConversionRateView.setElement(this.$('#graph6')).render();
			}
		});
		return battingPositionView;
});