define([
		'backbone',
		'users/models/openerComparisonModel'
	], function(Backbone,openerComparisonModel){
		var openerComparisonCollection= Backbone.Collection.extend({
			model: openerComparisonModel,
			url: 'data/opener_average_Collection.json'
		});
		return openerComparisonCollection;
	});