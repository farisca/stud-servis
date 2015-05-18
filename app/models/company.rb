class Company < ActiveRecord::Base
  belongs_to :user
  belongs_to :location

   def create_company(name, street, email, city, password, password_confirmation)
    
    user = User.new
    
    user.email = email
    user.password = password
    user.password_confirmation = password_confirmation
    user.role=1; #Company role is one
    user.banned=false;
    if user.save
      
    	location = Location.new
    	
    	location.city = city
    	if location.save
	      student = Company.new
	      student.name = name
	      student.user_id = user.id
	      if student.save
          
	        return user
	      else 
	        return nil
	      end
	  end
    end
  end

end
