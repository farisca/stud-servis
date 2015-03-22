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
  
  
end
