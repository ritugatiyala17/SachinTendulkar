define([
		'backbone',
		'users/models/battingPositionModel'
	], function(Backbone,battingPositionModel){
		var battingPositionCollection= Backbone.Collection.extend({
			model: battingPositionModel,
			url: 'data/batting_position_Collection.json'
		});
		return battingPositionCollection;
	});