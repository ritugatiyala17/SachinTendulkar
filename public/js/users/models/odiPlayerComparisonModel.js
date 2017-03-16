define([
		'backbone'
	], function(Backbone){
		var odiPlayerComparisonModel= Backbone.Model.extend({
			defaults: {
				player_name:"Sachin Tendulkar",
        runs: 0,
        highest_score: 0,
        average: 0,
        strike_rate: 0,
        centuries: 0,
        fifties: 0,
        wickets: 0
			},
			url: 'data/odi_player_comparison_Model.json'
		});
		return odiPlayerComparisonModel;
	});