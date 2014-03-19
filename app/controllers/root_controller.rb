class RootController < ApplicationController
  def root
    if current_user
      respond_to do |format|
        format.json { render :json => { successful: true } } 
        format.html { render :root } 
      end
    else
      redirect_to root_url
    end
  end
end
