TD.Views.TasksListView = Backbone.View.extend({

	events: {
		"click li.task": "showTask"
	},

	render: function(){
		var that= this;

		// var ul = #("<ul></ul>");
		// _(that.collection.models).each(function(task){
		// 		ul.append(
		// 			$("<li></li>").text(task.get("title"))
		// 		);
		// });
	var renderedContent = JST["tasks/list"]({
		tasks: that.collection
	});

		// that.$el.html(ul);
		that.$el.html(renderedContent);
		return that;
	},

	showTask: function(event){
		console.log(
			"You clicked task #" + 
				$(event.currentTarget).attr("data-id")
		);
	}

});