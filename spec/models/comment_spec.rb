require 'spec_helper'

describe Comment do
  it { should validate_presence_of :body }
  it { should validate_presence_of :commenter_id }
  it { should validate_presence_of :task_id }

  it { should belong_to :task }
  it { should belong_to :commenter }
end
