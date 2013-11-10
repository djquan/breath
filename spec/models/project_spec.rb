require 'spec_helper'

describe Project do
  it { should validate_presence_of :name }
  it { should validate_presence_of :owner_id }
  it { should belong_to :owner }
  it { should belong_to :team }
  it { should have_many :tasks }
end
