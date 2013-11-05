class Api::TeamsController < ApplicationController
  def create
    team = current_user.teams.create(team_params)
    render json: team
  end

  def add_user
    user = User.find(params[:user_id])
    user.teams << Team.find(params[:team_id])
    render json: user
  end

  private 
  def team_params
    params.require(:team).permit(:name)
  end
end
