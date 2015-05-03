class RegistrationsController < ApplicationController
  #before_action :set_registration, only: [:show, :edit, :update, :destroy]

  # GET /registrations
  # GET /registrations.json
  def index
    @registrations = Registration.all
  end

  # GET /registrations/1
  # GET /registrations/1.json
  def show
    #@registration = Registration.find(params[:id])
    render json: @registration
  end

  # GET /registrations/new
  def new
    @registration = Registration.new
  end

  # GET /registrations/1/edit
  def edit
  end

  # POST /registrations
  # POST /registrations.json
  def create
    @registration = Registration.new(registration_params)

    respond_to do |format|
      if @registration.save
        format.json { render :show, status: :created, location: @registration }
      else
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /registrations/1
  # PATCH/PUT /registrations/1.json
  def update
    respond_to do |format|
      if @registration.update(registration_params)
        format.json { render :show, status: :ok, location: @registration }
      else
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /registrations/1
  # DELETE /registrations/1.json
  def destroy
    @registration.destroy
    respond_to do |format|
      format.json { head :no_content, status: :deleted }
    end
  end

  def make_registration
    job = params[:job_id]
    active = params[:active]
    
    student = @current_user
    
    @registration = Registration.new
    @registration.job_id = job
    #@registration.student_id = student.id
    @registration.active = active
    if @registration.save!
      status = "0K"
    else
      status = "NOT OK"
    end 
    render json: { status: status }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    #def set_registration
      #@registration = Registration.find(params[:id])
    #end

    # Never trust parameters from the scary internet, only allow the white list through.
    def registration_params
      params.require(:registration).permit(:job_id, :student_id, :time, :active)
    end
end
