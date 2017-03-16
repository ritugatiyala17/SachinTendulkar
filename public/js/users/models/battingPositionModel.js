define([
		'backbone'
	], function(Backbone){
		var battingPositionModel= Backbone.Model.extend({
			defaults: {
				'Total Runs':0,
        'Batting Position': 1
			},
			url: 'data/batting_position_Model.json'
		});
		return battingPositionModel;
	});