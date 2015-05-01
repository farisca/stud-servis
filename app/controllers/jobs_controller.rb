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
