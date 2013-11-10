require 'spec_helper'

describe TagTask do
  it { should validate_presence_of :tag_id }
  it { should validate_presence_of :task_id }

  it { should belong_to :tag }
  it { should belong_to :task }
end
