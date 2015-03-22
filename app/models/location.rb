class Location < ActiveRecord::Base
    has_many:students
    has_many:companies
    has_many:registrations
end
