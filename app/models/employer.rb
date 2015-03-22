class Employer < ActiveRecord::Base
  belongs_to :location
  belongs_to :user


  def get
  	employer = Employer.find_by(id: self.id)

  	employer
  end

  def post
  	self.save
  end

  def put (id_employer, name, location, description, web, phone, user) 
  	employer = Employer.find_by(id: id_employer)
  	if !name.nil?
  		employer.name = name
  	end
  	if !location.nil?
  		employer.location = location
  	end
  	if !description.nil?
  		employer.description = description
  	end
  	if !web.nil?
  		employer.web = web
  	end
  	if !phone.nil?
  		employer.phone = phone
  	end
  	if employer.save
      return true
    end

    false
  end

  def delete #brisanje po user id
  	if self.destroy
      return true
    end

    false
  end

end
