class Task < ActiveRecord::Base
  validates :name, :creator_id, presence: true

  belongs_to :creator, class_name: "User"
  belongs_to :project
  has_many :comments
  has_many :assignments
  has_many :assigned_users, through: :assignments, source: :user
end
