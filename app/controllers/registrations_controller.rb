class RegistrationsController < ApplicationController
  
  def index
    @registrations = Registration.all
  end

  def show
    render json: @registration
  end

  def new
    @registration = Registration.new
  end

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

  def update
    respond_to do |format|
      if @registration.update(registration_params)
        format.json { render :show, status: :ok, location: @registration }
      else
        format.json { render json: @registration.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @registration.destroy
    respond_to do |format|
      format.json { head :no_content, status: :deleted }
    end
  end

  before_action :set_current_user, :authenticate_request, only: [:make_registration, :get_my_jobs]

  def make_registration
    
    job = params[:job_id]
    active = params[:active]
    
    student = @current_user
    
    @registration = Registration.new
    @registration.job_id = job
    @registration.student_id = student.id
    @registration.active = active

    if @registration.save!
      status = "0K"
    else
      status = "NOT OK"
    end 
    render json: { status: status }
  end

  def get_all_students
    job_id = params[:id]
    @all_registrations = Registration.where(job_id: job_id).all
    @students = []
    @all_registrations.each do |registration|
      s = Student.find(registration.student_id)
      @students << s
    end

    render json: { students: @students, number: @students.length }
  end

   def get_my_jobs
    
    if params["role"] == "1"
      @all_jobs = Job.where(company_id: Company.find_by(user_id: current_user.id).id).all
      @jobs = @all_jobs.select('companies.name as company_name, jobs.name as name, jobs.duration, jobs.id, locations.city, jobs.created_at, companies.logo')
          .joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id')
          .joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id')
      return render json: { jobs: @jobs, number: @jobs.length }
    elsif params["role"] == "0"
      @all_registrations = Registration.where(student_id: Student.find_by(user_id: current_user.id).id).all

      @jobs = []
      @all_registrations.each do |registration|
        @all_jobs = Job.select('companies.name as company_name, jobs.name as name, jobs.duration, jobs.id, locations.city, registrations.created_at, companies.logo')
          .joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id')
          .joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id')
          .joins('LEFT OUTER JOIN registrations ON registrations.job_id = jobs.id')
        j = @all_jobs.find_by(id: registration.job_id)
        @jobs << j
      end
      return render json: { jobs: @jobs, number: @jobs.length }
    end
  end

  def get_registrations_time
    q = Registration.all.order("DATE_TRUNC('month', created_at)").group("DATE_TRUNC('month', created_at)").count
    registration_hash_array = q.collect{|registration| {:created => registration[0].to_date.to_s, :amount => registration[1]}}
    g = registration_hash_array.group_by {|v| Date.parse(v[:created][0,7] + '-01') }.sort
    h = Hash[g]
    range = Date.new(params[:fromR_y].to_f,params[:fromR_m].to_f)..Date.new(params[:toR_y].to_f,params[:toR_m].to_f)
    return render json: range.to_a.map {|d| Date.new(d.year,d.month,1)}.uniq.map {|d| h[d] && h[d].reduce(0) {|sum,h| sum + h[:amount]} || 0 }
    
  end


  private
    def registration_params
      params.require(:registration).permit(:job_id, :student_id, :time, :active)
    end
end
