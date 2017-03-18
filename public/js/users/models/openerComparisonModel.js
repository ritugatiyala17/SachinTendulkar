define([
		'backbone'
	], function(Backbone){
		var openerComparisonModel= Backbone.Model.extend({
			defaults: {
				player_name:"Sachin Tendulkar",
        runs: 0,
        average: 0,
        strike_rate: 0,
        centuries: 0,
        fifties: 0
			},
			url: 'data/opener_average_Model.json'
		});
		return openerComparisonModel;
	});