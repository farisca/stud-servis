class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  skip_before_action :verify_authenticity_token

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

  def check_user

    @email = params["email"]
    @user = User.find_by(email: @email)
    if @user.nil?
      return render json: { error: "NOT OK" }
    else
      sifra = (0...8).map { (65 + rand(26)).chr }.join
      @user.password = sifra
      @user.password_confirmation = sifra
      @user.save()
      SignUpNotifier.password_change(@user, sifra).deliver
      return render json: { error: "OK" }
    end
  end

  def password_change 
    @email = params["email"]
    @stari = params["stari_password"]
    @novi = params["novi_password"]
    @potvrda = params["password_confirmation"]
    
    user = User.find_by(email: @email)
    user.password = @novi
    user.password_confirmation = @potvrda
    if user.save()
      return render json: { error: "OK" }
    else
      return render json: { error: "NOT OK" }
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

