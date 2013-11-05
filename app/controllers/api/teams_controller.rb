class Api::TeamsController < ApplicationController
  def create
    team = current_user.teams.create(team_params)
    render json: team
  end

  private 
  def team_params
    params.require(:team).permit(:name)
  end
end
