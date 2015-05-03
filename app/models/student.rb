class Student < ActiveRecord::Base
  
  belongs_to :location
  belongs_to :user
  
  has_many :registrations

  def create_student(name, surname, email, password, password_confirmation)
    
    u = User.find_by(email: email)
    if !u.nil?
      status = "Korisnik već postoji"
      return false, status
    else
      user = User.new
      user.email = email
      user.password = password
      user.password_confirmation = password_confirmation
      if user.save
        student = Student.new
        student.name = name
        student.surname = surname
        student.user_id = user.id
        if student.save
          status = "ok"
          return user, status
        end
      end
    end
  end


  def get(id_student)
  	student = Student.find_by(id: id_student)

  	self
  end

  def post
  	self.save
  end

  def put (id_student, name, surname, location, university, faculty, cv, user) 
  	student = Student.find_by(id: id_student)
  	if !name.nil?
  		student.name = name
  	end
  	if !surname.nil?
  		student.surname = surname
  	end
  	if !university.nil?
  		student.university = university
  	end
  	if !faculty.nil?
  		student.faculty = faculty
  	end
  	if student.save
      return true
    end

    false
  end

  def delete (id_student) #brisanje po user id
  	student = Student.find_by(id: id_student)
  	if student.destroy
      return true
    end

    false
  end
  
end
