class EmployersController < ApplicationController
  
  def new
  	@employer = Employer.new
  end

  def create
  	@employer = Employer.new(employer_params)
  	@employer.post
  end

  def show
  	@employer = Employer.find(params[:id])
  end

  def update
  	is_updated = @employer.put(employer_params)
  	render json: { error: is_updated }
  end

  def destroy
  	is_deleted = @employer.delete(@employer.id)
  	render json: { error: is_deleted } 
  end

  private
    def employer_params
      params.require(:employer).permit(:employer_id, :name, :location, :description, :web, :phone, :user)
    end

end
