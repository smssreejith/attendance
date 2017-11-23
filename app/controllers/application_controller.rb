class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def authenticate_user
    redirect_to users_login_url unless session[:logged_in]
  end

  def current_user
    User.find_by_id(session[:user])
  end

end
