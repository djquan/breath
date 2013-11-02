class User < ActiveRecord::Base
  validates :name, :password_digest, :email, :session_token, presence: true
  attr_reader :password
  after_initialize :ensure_session_token

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
  end

  class << self
    def generate_session_token
      SecureRandom::urlsafe_base64(16)
    end

    def self.find_by_credentials(username, password)
      user = User.find_by_username(username)
      return nil unless user
      user.is_password?(password) ? user : nil
    end
  end

  private
  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
