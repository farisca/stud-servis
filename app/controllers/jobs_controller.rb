class JobsController < ApplicationController
  before_action :set_current_user, :authenticate_request
  before_action :set_job, only: [:show, :edit, :update, :destroy]

  # GET /jobs
  # GET /jobs.json
  def getAllJobs
   render json: Job.all
  end

  # GET /jobs/1
  # GET /jobs/1.json
  def show
    render json: @job
  end

  # POST /jobs
  # POST /jobs.json
  def add_job
    @job = Job.new

    is_added, status = @job.create_job(params["category_name"], params["company_name"], params["description"], params["city"], params["duration"]);
    
    if is_added == false
      return render json: { error: "Greska pri kreiranju oglasa!" } 
    else 
      return render json: { error: "OK" }
    end
  end

  # PATCH/PUT /jobs/1
  # PATCH/PUT /jobs/1.json
  def update
    respond_to do |format|
      if @job.update(job_params)
        format.json { render :show, status: :ok, location: @job }
      else
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /jobs/1
  # DELETE /jobs/1.json
  def destroy
    @job.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  def get_job
    job = Job.find(params["id"])
    category = job.category.name
    company = job.company.name
    description = job.description
    location = job.location.city
    duration = job.duration
    id = job.id
    render json: { category: category, company: company, description: description, location: location, duration: duration, id: id}  
  end

  def get_ordered_jobs
    @jobs =  Job.select('companies.name as company_name, jobs.name as name, jobs.finish_at, jobs.id, locations.city').joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id').joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id').limit(params["count"])
    #@jobs = Job.all
    render json: {jobs: @jobs, number: @jobs.length}
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_job
      @job = Job.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def job_params
      params.require(:job).permit(:category_id, :company_id, :description, :location_id, :duration)
    end
end
