class Project < ActiveRecord::Base
  validates :name, :owner_id, presence: true
  belongs_to :owner, class_name: "User", foreign_key: :owner_id
end
