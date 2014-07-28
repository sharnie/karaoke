class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :configure_permitted_parameters, if: :devise_controller?

  helper_method :yt_client

  def yt_client
    @yt_client ||= YouTubeIt::Client.new(:dev_key => ENV['YOUTUBE_DEVELOPER_KEY'])
  end

  # Overwriting the sign_out redirect path method
  def after_sign_out_path_for resource_or_scope
    new_user_session_path
  end

private
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up)        << [:full_name]
    devise_parameter_sanitizer.for(:account_update) << [:full_name]
  end
end
