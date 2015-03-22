json.array!(@registrations) do |registration|
  json.extract! registration, :id, :job_id, :student_id, :time, :active
  json.url registration_url(registration, format: :json)
end
