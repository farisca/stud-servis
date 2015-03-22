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

  def put (id_student, name, surname, university, faculty) 
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
  	student.save
  end

  def delete (id_student) #brisanje po user id
  	student = Student.find_by(id: id_student)
  	student.destroy
  end
  
end
