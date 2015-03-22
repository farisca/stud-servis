class Job < ActiveRecord::Base
  belongs_to :category
  belongs_to :company
  belongs_to :location
  
  has_many:registrations
end
