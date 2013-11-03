class Api::TasksController < ApplicationController
  def create
    task = Task.new(task_params)
    task.creator_id = current_user.id
    task.save
    render json: task
  end

  private
  def task_params
    params.require(:task).permit(:name, :description, :due, 
                                 :project_id, :parent_id)
  end
end
