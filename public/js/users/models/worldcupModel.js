define([
		'backbone'
	], function(Backbone){
		var worldcupModel= Backbone.Model.extend({
			defaults: {
				player_name:"Sachin Tendulkar",
        runs: 0,
        average: 0,
        strike_rate: 0
			},
			url: 'data/worldcup_Model.json'
		});
		return worldcupModel;
	});