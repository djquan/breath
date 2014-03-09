class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def show
    @current = User.where(id: current_user.id).includes({ tasks: [:comments, :tags]}, { projects: {:tasks => [:comments, :tags]} } , { assigned_tasks:  [:comments, :tags] }, { teams: { projects: { tasks: [:comments, :tags] }}}).first
    render 'users/show' 
  end

  def index
    @users = User.all
    render 'users/index'
  end
  
  def create
    @user = User.new(user_params)

    if @user.save
      login_user!(@user)
      redirect_to app_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
