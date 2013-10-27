window.TD = {

	Models: {},
	Collections: {},
	Views: {},
	Routers: {},

	initialize: function($rootEl, tasks){
		console.log("JS Client Code Runs!");
		console.log(tasks);

		// var tasksListView = new TD.Views.TasksListView({
		// 	collection: tasks
		// });

		// $rootEl.html(tasksListView.render().$el);

		new TD.Routers.TasksRouter($rootEl, tasks);
		Backbone.history.start();
	}

};