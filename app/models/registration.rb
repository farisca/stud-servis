class Registration < ActiveRecord::Base
  belongs_to :job
  belongs_to :student
end
