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

  def add_company
    @co = Company.new
    
    is_added = @co.create_company(params["name"], params["street"], params["email"], params["city"], params["password"], params["password_confirmation"])
    
    if is_added == nil
      return render json: { error: is_added }
    else 
      SignUpNotifier.registrated(is_added).deliver

      return render json: { error: "OK" }
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
    @company.save
    render json: { status: "OK"}
    
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
