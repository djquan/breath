class RootController < ApplicationController
  def root
    if current_user
      render :root
    else
      redirect_to root_url
    end
  end
end
