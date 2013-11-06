class Assignment < ActiveRecord::Base
  validates :user_id, :task_id, presence: true
  belongs_to :user
  belongs_to :task
end
