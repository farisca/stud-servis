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
  end

  resources :sessions do
    post "add_session", on: :collection
    get "delete_session", on: :collection
  end

  resources :categories do
    get "getAllCategories", on: :collection
  end

  resources :locations do
    get "getAllLocations", on: :collection
  end

  resources :registrations do
    get "make_registration", on: :collection
    get "get_all_students", on: :collection
  end

  resources :users do
    post "check_user", on: :collection
    post "password_change", on: :collection
    get "get_user", on: :collection
  end

  resources :students do
    get "download_cv", on: :collection
    post "update", on: :collection
    post "add_student", on: :collection

  end

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'
  post 'auth' => 'auth#authenticate'
  get 'auth' => 'auth#confirm_registration'

#  get 'confirm' => 'auth#confirm_registration'
  root 'application#index'
  get '*path' => 'application#index'
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
