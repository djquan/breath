module SessionsHelper
  def login_user!(user)
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def require_signed_in_goal
    user =  if params[:user_id]
              User.find(params[:user_id])
            else
              Goal.find(params[:id] || params[:goal_id]).user
            end

    redirect_to new_session_url unless current_user == user
  end
end
