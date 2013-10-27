TD.Views.TasksListView = Backbone.View.extend({
	render: function(){
		var that= this;

		var ul = #("<ul></ul>");
		_(that.collection.models).each(function(task){
				ul.append(
					$("<li></li>").text(task.get("title"))
				);
		});

		that.$el.html(ul);
		return that;
	}
});