Rails.application.routes.draw do

  get '/change_locale/:locale', to: 'languages#change_locale', as: :change_locale

  resources :jobs do
    get "getAllJobs", on: :collection
    post "add_job", on: :collection
    get "get_job", on: :collection
    get "get_ordered_jobs", on: :collection
  end

  resources :companies do
    get "getAllCompanies", on: :collection
    post "add_company", on: :collection
    get "find_company", on: :collection
    post "update", on: :collection
    get "download_logo", on: :collection
    get "get_all_companies", on: :collection
    get "bann_company", on: :collection
    get "unbann_company", on: :collection
  end

  resources :sessions do
    post "add_session", on: :collection
    get "delete_session", on: :collection
  end

  resources :notifications do
    get "get_new_notifications", on: :collection
    get "mark_viewed", on: :collection
    get "get_all_notifications", on: :collection
    post "new_notification", on: :collection
  end

  resources :categories do
    get "getAllCategories", on: :collection
    post "add_category", on: :collection
  end

  resources :locations do
    get "getAllLocations", on: :collection
    post "add_location", on: :collection
  end

  resources :registrations do
    get "make_registration", on: :collection
    get "get_all_students", on: :collection
    get "get_my_jobs", on: :collection
  end

  resources :users do
    post "check_user", on: :collection
    post "password_change", on: :collection
    get "get_user", on: :collection
    get "get_role", on: :collection
    get "get_signedupusers", on: :collection
  end

  resources :students do
    get "download_cv", on: :collection
    post "update", on: :collection
    post "add_student", on: :collection
    get "cv_exists", on: :collection
    get "get_all_students", on: :collection
    get "bann_student", on: :collection
    get "unbann_student", on: :collection
  end

  post 'auth' => 'auth#authenticate'
  get 'auth' => 'auth#confirm_registration'
  root 'application#index'
  get '*path' => 'application#index'
  get 'public/data'
end
