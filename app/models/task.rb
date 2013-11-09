class Task < ActiveRecord::Base
  validates :name, :creator_id, presence: true

  belongs_to :creator, class_name: "User"
  belongs_to :project
  has_many :comments
  has_many :assignments
  has_many :assigned_users, through: :assignments, source: :user

  belongs_to :parent, class_name: "Task"
  has_many :subtasks, class_name: "Task", foreign_key: :parent_id

  has_many :tag_tasks
  has_many :tags, through: :tag_tasks

  has_many :attachments
end
