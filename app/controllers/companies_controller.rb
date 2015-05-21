class CompaniesController < ApplicationController
  before_action :set_company, only: [:edit, :destroy]
  before_action :set_current_user, :authenticate_request, only: [:show, :find_company, :update]

  def show
    @company = Company.find_by(user_id: current_user.id)
    render json: @company
  end

  def find_company
    @company = Company.find_by(user_id: current_user.id)
    render json: @company
  end
  
  def getAllCompanies
   render json: Company.all
  end
  # POST /companies
  # POST /companies.json

  def get_all_companies 
    @companies = Company.all
    
    array = []
 
    @companies.each do |company|
      @element = Hash.new
      @element["id"] = company.user.id
      @element["name"] = company.name
      @element["location"] = company.location.city
      @element["description"] = company.description
      @element["web"] = company.web
      @element["phone"] = company.phone
      @element["email"] = company.user.email
      @element["bann"] = company.user.banned
      @element["promoted"] = company.promoted
      array.push(@element)
    end

    render json: {companies: array}
  end

  def promote_company
    @company = Company.find_by(user_id: params[:company_id])
    @company.promoted = !@company.promoted
    @company.save
    return render json: {status: @company}
  end

  def bann_company
    id_company = params[:id_company]
    @user = User.find_by(id: id_company)
    @user.banned = 't'
    @user.save
    status = @user.banned

    render json: {status: status, user: @user.id}
  end

  def unbann_company
    id_company = params[:id_company]
    @user = User.find_by(id: id_company)
    @user.banned = 'f'
    @user.save
    status = @user.banned

    render json: {status: status, user: @user.id}
  end

  def add_company
    u = User.find_by(email: params[:email])
    if !u.nil?
      status = "Korisnik već postoji"
      return render json: { status: "user_exists" }
    else
      user = User.new
      user.email = params[:email]
      user.password = params[:password]
      user.password_confirmation = params[:password_confirmation]
      user.role=1; #Company role is one
      user.banned=false;
      if user.save
        location = Location.find_by(city: params[:city])
        company = Company.new
        company.location = location
        company.name = params[:name]
        company.promoted = false
        company.user_id = user.id
        if company.save
          SignUpNotifier.registrated(user).deliver
          return render json: { status: "ok" }
        else 
          return render json: { status: "error" }
        end
      end
    end

  end

  def update
    @company = Company.find_by(user_id: current_user.id)
    @company.name = params["name"]
    
    @location = Location.find_by(id: params["location"])
    @company.location = @location
    @company.description = params["description"]
    @company.web = params["web"]
    @company.phone = params["phone"]
    fajl = params["file"]
    if !fajl.nil?
      upload = params["file"]
      name =  @company.id.to_s + params["file"].original_filename
      directory = "public/data"
      # create the file path
      path = File.join(directory, name)
      # write the file
      File.open(path, "wb") { |f| f.write(upload.read) }

      @company.logo = name
    end
    @company.save
    render json: { status: "OK"}
    
  end

  def download_logo
    send_file "#{Rails.root}/public/data/" + params["filename"], type: 'image/png', disposition: 'inline' 
  end

  # DELETE /companies/1
  # DELETE /companies/1.json
  def destroy
    @company.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_company
      @company = Company.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def company_params
      params.require(:company).permit(:user_id, :name, :location_id, :description, :web, :phone)
    end
end
