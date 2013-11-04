class TeamList < ActiveRecord::Base
  validates :team_id, :user_id, presence: true
  validates :user_id, uniqueness: { scope: :team_id }

  belongs_to :user
  belongs_to :team
end
