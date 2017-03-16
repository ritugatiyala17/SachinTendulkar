define([
		'backbone'
	], function(Backbone){
		var odiStatsModel= Backbone.Model.extend({
			defaults: {
				batting_score:0,
        wickets:0,
        runs_conceded: 0,
        catches:0,
        stumps:0,
        opposition:'',
        ground:'',
        date:'12/18/1989',
        match_result:'',
        result_margin:'',
        toss:'',
        batting_innings:''
			},
			url: 'data/odi_stats_Model.json'
		});
		return odiStatsModel;
	});