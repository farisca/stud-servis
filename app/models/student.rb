class Student < ActiveRecord::Base
  belongs_to :location
  belongs_to :user
  
  has_many :registrations

  def get(id_student)
  	student = Student.find_by(id: id_student)

  	student
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
