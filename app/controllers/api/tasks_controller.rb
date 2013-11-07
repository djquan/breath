class Api::TasksController < ApplicationController
  def create
    task = Task.new(task_params)
    task.creator_id = current_user.id
    task.save
    render json: task
  end

  def show
    @task = Task.find(params[:id])
    @assigned_users = @task.assigned_users
    @subtasks = @task.subtasks
    render 'api/tasks/show'
  end

  def update
    task = Task.find(params[:id])
    if (current_user == task.creator) || (task.assigned_users.include?(current_user))
      if task.update_attributes(task_params)
        render json: task
      else
        render task.errors.full_messages, status: :unprocessable_entity
      end
    else
      render json: "You are not the creator"
    end
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy
    render json: task
  end

  def assign_user
    task = Task.find(params[:task_id])
    user = User.find(params[:user])
    task.assigned_users << user
    render json: user
  end

  private
  def task_params
    params.require(:task).permit(:name, :description, :due, 
                                 :completed, :project_id, :parent_id)
  end
end
