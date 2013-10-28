TD.Views.NewTaskView = Backbone.View.extend({
	events: {
		"click button.submit": "submit"
	},

	render: function(){
		var that = this;

		var renderedContent = JST["tasks/new"]();
		that.$el.html(renderedContent);
		return that;		
	},

	submit: function(event){
		var that = this;

		var formData = $("form").has(event.currentTarget).serializeJSON();
		
		var task = new TD.Models.Task(formData.task);

		that.collection.add(task);
		Backbone.history.navigate("#/");
	}

});