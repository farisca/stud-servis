class SessionsController < ApplicationController
	skip_before_action :verify_authenticity_token
  def new
  end

  def add_session
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
    	log_in user
    	return render json: { error: "OK" }
    else
    	return render json: { error: "NOT OK" }
    end
  end

  def delete_session
  	log_out
  	return render json: { error: "OK" }
  end

  def destroy
    
  end

end
