class Team < ActiveRecord::Base
  has_many :team_lists
  has_many :users, through: :team_lists
  has_many :projects
end
