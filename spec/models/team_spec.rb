require 'spec_helper'

describe Team do
  it { should validate_presence_of :name }
  it { should have_many :team_lists }
  it { should have_many :users }
  it { should have_many :projects }
end
