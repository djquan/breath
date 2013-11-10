require 'spec_helper'

describe Assignment do
  it { should validate_presence_of :user_id }
  it { should validate_presence_of :task_id }
  
  it { should belong_to :user }
  it { should belong_to :task }
end
