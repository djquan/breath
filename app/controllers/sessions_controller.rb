class SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
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

  end
end
