json.array!(@companies) do |company|
  json.extract! company, :id, :user_id, :name, :location_id, :description, :web, :phone
  json.url company_url(company, format: :json)
end
