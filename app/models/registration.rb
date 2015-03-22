class Registration < ActiveRecord::Base
  belongs_to :job
  belongs_to :student
  has_many:locations
  
  def getAll()
      registrations=Registration.all
      
      registrations
  end
  
  
end
