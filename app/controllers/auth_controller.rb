class AuthController < ApplicationController
	skip_before_action :authenticate_request # this will be implemented later
	def authenticate
		user = User.find_by(email: params[:username])
    	if user && user.authenticate(params[:password])
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
			render json: { error: params[:username] }, status: :unauthorized
		  	#render json: { error: 'Invalid username or password' }, status: :unauthorized
		end
	end

	before_action :set_current_user, :authenticate_request, only: [:confirm_registration]
	def confirm_registration
		return render json: { status: 'OK'}
	end
end
