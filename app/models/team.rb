class Team < ActiveRecord::Base
  validates :name, presence: true
  has_many :team_lists
  has_many :users, through: :team_lists
  has_many :projects
end
