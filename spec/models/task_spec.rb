require 'spec_helper'

describe Task do
  it { should validate_presence_of :name }
  it { should validate_presence_of :creator_id }

  it { should belong_to :creator }
  it { should belong_to :project }
  it { should belong_to :parent }

  it { should have_many :comments }
  it { should have_many :assignments }
  it { should have_many :assigned_users }
  it { should have_many :subtasks }
  it { should have_many :tag_tasks }
  it { should have_many :tags }
  it { should have_many :attachments}
end
