class Task < ActiveRecord::Base
  validates :description, :name, :creator_id, presence: true

  belongs_to :creator, class_name: "User"
  belongs_to :project
end
