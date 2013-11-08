class TagTask < ActiveRecord::Base
  validates :tag_id, :task_id, presence: true

  belongs_to :tag
  belongs_to :task
end
