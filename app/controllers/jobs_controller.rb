class JobsController < ApplicationController
  before_action :set_current_user, :authenticate_request

  ##################################################################################################################
  # MOSTLY GETTERS AND SETTERS
  ##################################################################################################################
  # Dohvati sve poslove
  # TODO: Preimenovati u get_all_jobs, u skladu s naming konvencijom
  def getAllJobs
   render json: Job.all
  end

  def add_job
    @job = Job.new

    is_added, status = @job.create_job(params["name"],params["category_name"], params["company_name"], params["description"], params["city"], params["duration"]);
    
    if is_added == false
      return render json: { error: "Greska pri kreiranju oglasa!" } 
    else 
      return render json: { error: "OK" }
    end
  end

  # Da li se koristi?
  def update
    respond_to do |format|
      if @job.update(job_params)
        format.json { render :show, status: :ok, location: @job }
      else
        format.json { render json: @job.errors, status: :unprocessable_entity }
      end
    end
  end

  def update_job
    job_id = params[:job_id]
    job = Job.find_by(id: job_id)

    job.location_id = params[:location]
    job.category_id = params[:category]
    job.description = params[:description]
    job.duration = 'azra'
    #job.duration = params[:duration]

    if job.save!
      status = 'ok'
    else
      status = 'not'
    end
    render json: { status: status, company: job.company.name, category: job.category.name, location: job.location.city, description: job.description, duration: job.duration }
  end 

  # Ooo, da li se ovo koristi!?
  def destroy
    @job.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  # Dohvaca oglas na osnovu proslijedjenog id-ja
  def get_job
    job = Job.find(params["id"])
    category = job.category.name
    company = job.company.name
    description = job.description
    location = job.location.city
    duration = job.duration
    id = job.id
    user_id = job.company.user_id
    c_id = job.category_id
    l_id = job.location_id
    render json: { category: category, company: company, description: description, location: location, duration: duration, id: id, company_user_id: user_id, logo: "#{Rails.root}/" + job.company.logo.to_s, l_id: l_id, c_id: c_id}  
  end

  # Dohvaca posljednjih 9 oglasa
  def get_ordered_jobs
    @jobs =  Job.select('companies.name as company_name, jobs.name as name, jobs.duration, jobs.id, companies.promoted as promoted, locations.city, companies.logo as logo').joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id').joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id').limit(params["count"]).order("companies.promoted DESC, jobs.created_at DESC")
    @jobs.each do |job|
      job.logo = job.logo.to_s
    end
    render json: {jobs: @jobs, number: @jobs.length}
  end

  # Pretraga oglasa na osnovu kljucne rijeci
  def get_jobs_search
    @jobs =  Job.select('companies.name as company_name, jobs.name as name, jobs.duration, jobs.id, jobs.description, companies.promoted as promoted, locations.city, companies.logo as logo').joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id').joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id').limit(params["count"]).order("companies.promoted DESC, jobs.created_at DESC")
    filtered_jobs = []
    @jobs.each do |job|
      job.logo = job.logo.to_s
      if job.name.to_str.downcase.include?(params[:word]) or (!job.description.nil? and job.description.to_str.downcase.include?(params[:word]))
        filtered_jobs.push(job)
      end
    end
    render json: {jobs: filtered_jobs, number: filtered_jobs.length}
  end

  # Filtriranje oglasa na osnovu lokacije ili kategorije
  def get_jobs_location_category_search
    if !params[:location_id].nil?    
      @jobs =  Job.select('companies.name as company_name, companies.location_id, jobs.name as name, jobs.category_id, jobs.duration, jobs.id, jobs.description, companies.promoted as promoted, locations.city, companies.logo as logo').joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id').joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id').where(location_id: params["location_id"]).order("companies.promoted DESC, jobs.created_at DESC")
    else
      @jobs =  Job.select('companies.name as company_name, companies.location_id, jobs.name as name, jobs.category_id, jobs.duration, jobs.id, jobs.description, companies.promoted as promoted, locations.city, companies.logo as logo').joins('LEFT OUTER JOIN companies ON companies.id = jobs.company_id').joins('LEFT OUTER JOIN locations ON locations.id = jobs.location_id').order("companies.promoted DESC, jobs.created_at DESC")
    end
    if !params[:category_id].nil?
      @jobs = @jobs.where(category_id: params[:category_id]).all
    end
    return render json: {jobs: @jobs, number: @jobs.length}
  end


  ##################################################################################################################
  # STATISTICS
  ##################################################################################################################
  # Vraca broj poslova po lokacijama
  def get_jobs_per_locations
    @locations = Location.all
    
    array = []
 
    @locations.each do |location|
      @element = Hash.new
      @element["location"] = location.city
      @element["number"] = Job.where(location_id: location.id).all.length
      array.push(@element)
    end

    return render json: {data: array}
  end

  # Vraca broj poslova po kategorijama
  def get_jobs_per_categories
    @categories = Category.all
    
    array = []
 
    @categories.each do |category|
      @element = Hash.new
      @element["category"] = category.name
      @element["number"] = Job.where(category_id: category.id).all.length
      array.push(@element)
    end

    return render json: {data: array}
  end
 
  # Vraca broj poslova po kompanijama
  def get_jobs_per_companies
    @companies = Company.all
    
    array = []
 
    @companies.each do |company|
      @element = Hash.new
      @element["company"] = company.name
      @element["number"] = Job.where(company_id: company.id).all.length
      array.push(@element)
    end

    return render json: {data: array}
  end

  ##################################################################################################################
  # PRIVATE
  ##################################################################################################################
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
