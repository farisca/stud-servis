class UsersController < ApplicationController
  
  def new
  	@user = User.new
  end

  def create
  	@user = User.new(user_params)
  	@user.post
  end

  def show
  	@user = User.find(params[:id])
  end

  def update
  	is_updated = @user.put(user_params)
  	render json: { error: is_updated }
  end

  def destroy
  	is_deleted = @user.delete(@user.id)
  	render json: { error: is_deleted } 
  end

  private
    def user_params
      params.require(:user).permit(:user_id, :username, :email, :role, :active)
    end

end
