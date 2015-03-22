class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  before_action :set_user


  protect_from_forgery with: :exception
  def hello
    render text: "hello, world!"
  end
  def helloTajma
    render text: "hello, world from Tajma!"
  end

  def set_user 
  	@user = User.find(params[:id])
  end
end
