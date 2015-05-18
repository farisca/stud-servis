class AuthController < ApplicationController
	skip_before_action :authenticate_request # this will be implemented later
	def authenticate
		user = User.find_by(email: params[:username]) 
    	if user && user.authenticate(params[:password]) && user.active == 1 && user.banned == false
    		student = Student.find_by(user_id: user.id)
    		company = Company.find_by(user_id: user.id)
    		if student
				return render json: { auth_token: user.generate_auth_token, tip: 'student' }
			end
			if company
				render json: { auth_token: user.generate_auth_token, tip: 'company' }
			else
				render json: { auth_token: user.generate_auth_token }
			end
		else
			if user && user.banned == true
				render json: { error: "banned" }, status: :unauthorized
			else
				render json: { error: params[:username] }, status: :unauthorized
			end
		  	#render json: { error: 'Invalid username or password' }, status: :unauthorized
		end
	end

	before_action :set_current_user, :authenticate_request, only: [:confirm_registration]
	def confirm_registration
		current_user.active = 1
		current_user.save
		return render json: { status: current_user}
	end
end
