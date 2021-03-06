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

  before_action :set_current_user, :authenticate_request, only: [:password_change]

  def password_change 
    @email = params["email"]
    @stari = params["stari_password"]
    @novi = params["novi_password"]
    @potvrda = params["password_confirmation"]

    user = @current_user
    trenutni = user.authenticate(@stari)

    if trenutni != false
      user.password = @novi
      user.password_confirmation = @potvrda
      if user.save()
        return render json: { error: "OK" }
      else
        return render json: { error: "NOT OK" }
      end
    else
      return render json: { error: "Pogresna stara sifra" }
    end

  end

  before_action :set_current_user, :authenticate_request, only: [:get_user, :get_role]

  def get_user

    id = @current_user.id
    student = Student.find_by(user_id: id)
    kompanija = Company.find_by(user_id: id)
    raise
    if !student.nil?
      status = "student"
    elsif !kompanija.nil?
      status = "kompanija"
    end

    return render json: { rola: status }
  end

  def get_role
    role= @current_user.role
    return render json: { rola: role }
  end

  def get_signedupusers
    q = User.all.order("DATE_TRUNC('month', created_at)").group("DATE_TRUNC('month', created_at)").count
    user_hash_array = q.collect{|user| {:created => user[0].to_date.to_s, :amount => user[1]}}
    g = user_hash_array.group_by {|v| Date.parse(v[:created][0,7] + '-01') }.sort
    h = Hash[g]
    range = Date.new(params[:from_y].to_f,params[:from_m].to_f)..Date.new(params[:to_y].to_f,params[:to_m].to_f)
    return render json: range.to_a.map {|d| Date.new(d.year,d.month,1)}.uniq.map {|d| h[d] && h[d].reduce(0) {|sum,h| sum + h[:amount]} || 0 }
    
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
    #@user = User.find(params[:id])
  end	

end

