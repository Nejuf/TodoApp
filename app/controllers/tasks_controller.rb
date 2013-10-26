class TasksController < ApplicationController
  def create
  	Task.create(task_params)
  end

  def index
  end

  private
  def task_params
  	params.require(:task).permit(:title);
	end
end
