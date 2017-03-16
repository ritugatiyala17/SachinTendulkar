define([
		'backbone'
	], function(Backbone){
		var boundariesModel= Backbone.Model.extend({
			defaults: {
				Opposition:'',
        'Total 4s': 0,
        'Total 6s': 0
			},
			url: 'data/boundaries_Model.json'
		});
		return boundariesModel;
	});