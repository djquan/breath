require 'spec_helper'

describe TeamList do
  it { should validate_presence_of :team_id }
  it { should validate_presence_of :user_id }

  it { should belong_to :user }
  it { should belong_to :team }
end
