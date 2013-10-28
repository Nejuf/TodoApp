window.TD = {

	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

	initialize: function($rootEl, tasksData){
		console.log("JS Client Code Runs!");
		console.log(tasks);

		var tasks = new TD.Collections.Tasks(tasksData);
		// var tasksListView = new TD.Views.TasksListView({
		// 	collection: tasks
		// });

		// $rootEl.html(tasksListView.render().$el);

		new TD.Routers.TasksRouter($rootEl, tasks);
		Backbone.history.start();
	}

};