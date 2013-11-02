require 'bcrypt'

class User < ActiveRecord::Base
  validates :name, :password_digest, :email, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :name, :email, uniqueness: true

  attr_reader :password
  after_initialize :ensure_session_token
  
  has_many :projects, foreign_key: :owner_id

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end
  
  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  class << self
    def generate_session_token
      SecureRandom::urlsafe_base64(16)
    end

    def find_by_credentials(username, password)
      user = User.find_by_name(username)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end
end
