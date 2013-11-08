class TagTask < ActiveRecord::Base
  validates :tag_id, :task_id, presence: true
  validates :tag_id, uniqueness: { scope: :task_id }

  belongs_to :tag
  belongs_to :task
end
