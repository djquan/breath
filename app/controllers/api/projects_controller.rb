class Api::ProjectsController < ApplicationController
  def index
    render json: current_user.projects
  end

  def create
    project = Project.new(project_params)
    project.owner_id = current_user.id
    project.save
    render json: project
  end


  private
  def project_params
    params.require(:project).permit(:name, :team_id)
  end
end
