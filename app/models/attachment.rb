class Attachment < ActiveRecord::Base
  validates :task_id, presence: true
  belongs_to :task
  has_attached_file :task_attachment

  validates :task_attachment, attachment_presence: true
  validates_attachment_size :task_attachment, less_than: 2.megabytes
end
