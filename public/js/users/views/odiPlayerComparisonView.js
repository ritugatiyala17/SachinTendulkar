define([
		'jquery',
		'underscore',
		'backbone',
		'users/collections/odiPlayerComparisonCollection',
		'text!users/templates/odiStatsTemplate.html',
		'users/views/sachinBattingView'
	], function($,_,Backbone,odiPlayerComparisonCollection,odiStatsTemplate,sachinBattingView){
		var odiPlayerComparisonView= Backbone.View.extend({
			Temp: _.template(odiStatsTemplate),
			initialize: function(){
				var self=this;
				this.OdiPlayerComparisonCollection= new odiPlayerComparisonCollection();
				this.OdiPlayerComparisonCollection.fetch({
					success: function(){
						console.log("success");
						(new sachinBattingView).render(self.OdiPlayerComparisonCollection.toJSON());
						self.render();
					}
				})
			},
			render: function(){
				console.log("Inside render of sachinOdiRunsView");
			}
		});
		return odiPlayerComparisonView;
	});