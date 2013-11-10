require 'spec_helper'

describe User do
  it { should validate_uniqueness_of(:name) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:email) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:password_digest) }

  it { should ensure_length_of(:password).is_at_least(6) }

  it { should have_many :team_lists }
  it { should have_many :projects }
  it { should have_many :teams }
  it { should have_many :comments }
  it { should have_many :assignments }
  it { should have_many :assigned_tasks }
  it { should have_many :tasks }

  let(:bob) { User.create(name: "Bob", email: "b@b.c", password: "123456") }

  describe "password and password_digest relationship" do
    it "should not have matching password and password_digest" do
      expect(bob.password_digest).not_to eql "123456"
    end

    it "should respond with true to a correct password guess" do
      expect(bob.is_password?("123456")).to be true
    end

    it "should respond with false to a incorrect password guess" do
      expect(bob.is_password?("13456")).to be false
    end
  end

  describe ":find_by_credentials" do
    it "should find a user by credentials" do
      bob = User.create(name: "Bob", email: "b@b.c", password: "123456") 
      expect(User.find_by_credentials("Bob", "123456")).to eq bob
    end
  end

  describe "#reset_session_token!" do
    it "should reset a session_token" do
      session1 = bob.session_token
      bob.reset_session_token!
      expect(bob.session_token).to eq session1

      # it should reset the session token normally.  see comments in User#reset_session_token
    end
  end
end
