class Company < ActiveRecord::Base
  belongs_to :user
  belongs_to :location

   def create_company(name, street, city, password, password_confirmation)
    
    user = User.new
    user.email = email
    user.password = password
    user.password_confirmation = password_confirmation
    if user.save
    	location = Location.new
    	location.street = street
    	location.city = city
    	if location.save
	      student = Student.new
	      student.name = name
	      student.surname = surname
	      student.user_id = user.id
	      if student.save
	        return true
	      else 
	        return false
	      end
	  end
    end
  end

end
