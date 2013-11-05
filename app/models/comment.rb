class Comment < ActiveRecord::Base
  validates :body, :commenter_id, :task_id, presence: true

  belongs_to :task
  belongs_to :commenter, class_name: "User", foreign_key: :commenter_id
end
