class SessionsController < ApplicationController
  def new
    if current_user
      redirect_to app_url
    else
      @user = User.new
      render :new
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:name],
                                     params[:user][:password])
    if @user
      login_user!(@user)
      redirect_to app_url
    else
      flash.now[:errors] = ["Incorrect username or password"]
      @user = User.new
      render :new
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:session_token] = nil
    redirect_to new_session_url
  end
end
