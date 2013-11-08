class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :tag_tasks
  has_many :tasks, through: :tag_tasks
end
