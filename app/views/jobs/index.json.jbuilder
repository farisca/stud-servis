json.array!(@jobs) do |job|
  json.extract! job, :id, :category_id, :company_id, :description, :location_id, :published, :duration
  json.url job_url(job, format: :json)
end
