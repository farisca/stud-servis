class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]


  def show
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
    respond_to do |format|
      if @user.update(user_params)
        format.json { render :show, status: :ok, location: @user }
      else
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @user.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def login
  end

  def registracija
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :role, :active)
  end

  def set_user 
    @user = User.find(params[:id])
  end	

end
