define([
		'backbone',
		'users/models/worldcupModel'
	], function(Backbone,worldcupModel){
		var worldcupCollection= Backbone.Collection.extend({
			model: worldcupModel,
			url: 'data/worldcup_Collection.json'
		});
		return worldcupCollection;
	});