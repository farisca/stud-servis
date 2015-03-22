class Registration < ActiveRecord::Base
  belongs_to :job
  belongs_to :student
  has_many:locations
  
  #Validation of fields
  validates :description, length: { maximum: 200 }
  #validates :duration, 1 or 0
  
  def getAll()
      registrations=Registration.all
      
      registrations
  end
  
  def delete (id_reg) #brisanje po registation id
  	registation = Registration.find_by(id: id_reg)
  	registation.destroy
  end
  
  def post
  	self.save
  end
  
  def get(id_reg)
  	registation = Registration.find_by(id: id_reg)

  	registation
  end
  
  
  
end
