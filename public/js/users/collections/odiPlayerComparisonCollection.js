define([
		'backbone',
		'users/models/odiPlayerComparisonModel'
	], function(Backbone,odiPlayerComparisonModel){
		var odiPlayerComparisonCollection= Backbone.Collection.extend({
			model: odiPlayerComparisonModel,
			url: 'data/odi_player_comparison_Collection.json'
		});
		return odiPlayerComparisonCollection;
	});