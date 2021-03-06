class Job < ActiveRecord::Base
  belongs_to :category
  belongs_to :company
  belongs_to :location
  
  has_many:registrations
  
  def create_job(name,category_name, company_name, description, city, duration)
    
    c=Category.find_by(name: category_name);
    com=Company.find_by(name: company_name);
    loc=Location.find_by(city: city);
    
    job=Job.new
    job.name=name;
    job.category_id=c.id;
    job.company_id=com.id;
    job.location_id=loc.id;
    job.duration=duration;
    
    if job.save
       status = "Oglas je uspjesno spasen!"
      return true, status
    else
       status = "Oglas nije spasen!"
      return false, status
    end
    
  end
end
