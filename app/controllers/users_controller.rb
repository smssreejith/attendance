class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  def login
  end

  def sign_in
    user = User.where(:mobile => params[:mobile], :password => params[:password]).first

    if user.blank?
      render "login"
    else
      session[:logged_in] = true
      session[:user] = user.id
      redirect_to root_url
    end
  end
end
