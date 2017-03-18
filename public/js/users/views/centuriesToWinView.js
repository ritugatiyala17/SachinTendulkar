define([
	'jquery',
	'underscore',
	'backbone',
	'highcharts',
	'users/collections/odiStatsCollection',
	'text!users/templates/centuriesToWinTemplate.html'
	],function($,_,Backbone,highcharts,odiStatsCollection,centuriesToWinTemplate){
		var centuriesToWinView= Backbone.View.extend({
			Temp: _.template(centuriesToWinTemplate),
			el: '#graph7',
			initialize: function(){
				var self= this;
				this.OdiStatsCollection= new odiStatsCollection();
				this.OdiStatsCollection.fetch({
					success: function(){
						self.render();
					}
				})
			},
			render: function(){
				var self=this;

				var winCount=0,lostCount=0;
				self.OdiStatsCollection.toJSON().map(function(x){
					return ((x['batting_score']>99 && x['match_result']=='won') ? (winCount++) : winCount);
				});
				self.OdiStatsCollection.toJSON().map(function(x){
					return ((x['batting_score']>99 && x['match_result']=='lost') ? (lostCount++) : lostCount);
				});

				this.$el.html(this.Temp());

				this.$('#graph7').highcharts({
					chart:{
						type: 'pie'
					},
					tooltip: {
						pointFormat: '{series.name}:{point.percentage:.1f}'
					},
					title: {
						text: 'Centuries leading to Wins in Percentage'
					},
          series: [{
          	name: 'Match Result',
            data: [
            	{ name: 'Win Percentage', y: (winCount/(winCount+lostCount))*100 },
            	{ name: 'Lost Percentage', y: (lostCount/(winCount+lostCount))*100 }
            ]
          }]
				});
			}
		});
		return centuriesToWinView;
});