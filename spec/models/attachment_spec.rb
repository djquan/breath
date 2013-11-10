require 'spec_helper'

describe Attachment do
  it { should validate_presence_of :task_id }
  it { should validate_presence_of :task_attachment }

  it { should belong_to :task }
end
