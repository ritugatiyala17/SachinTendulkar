define([
		'jquery',
		'underscore',
		'backbone',
		'users/collections/odiStatsCollection',
		'text!users/templates/odiStatsTemplate.html',
		'users/views/sachinBattingView'
	], function($,_,Backbone,odiStatsCollection,odiStatsTemplate,sachinBattingView){
		var odiStatsView= Backbone.View.extend({
			Temp: _.template(odiStatsTemplate),
			initialize: function(){
				var self=this;
				this.OdiStatsCollection= new odiStatsCollection();
				this.OdiStatsCollection.fetch({
					success: function(){
						console.log("success");
						(new sachinBattingView).render(self.OdiStatsCollection.toJSON());
						self.render();
					}
				})
			},
			render: function(){
				console.log("Inside render of sachinOdiRunsView");
			}
		});
		return odiStatsView;
	});