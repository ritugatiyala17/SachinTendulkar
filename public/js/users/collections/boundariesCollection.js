define([
		'backbone',
		'users/models/boundariesModel'
	], function(Backbone,boundariesModel){
		var boundariesCollection= Backbone.Collection.extend({
			model: boundariesModel,
			url: 'data/boundaries_Collection.json'
		});
		return boundariesCollection;
	});