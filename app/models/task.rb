class Task < ActiveRecord::Base
  validates :name, :creator_id, presence: true

  belongs_to :creator, class_name: "User"
  belongs_to :project
end
