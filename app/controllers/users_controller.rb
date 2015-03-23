class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def create
    @user = User.new(user_params)
 
    respond_to do |format|
      if @user.save
        format.json { render json: @user, status: :created, location: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
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
    params.require(:user).permit(:username, :email, :role, :active)
  end

  def set_user 
    @user = User.find(params[:id])
  end	

end
