define([
		'backbone',
		'users/models/odiStatsModel'
	], function(Backbone,odiStatsModel){
		var odiStatsCollection= Backbone.Collection.extend({
			model: odiStatsModel,
			url: 'data/odi_stats_Collection.json'
		});
		return odiStatsCollection;
	});