Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  namespace :api do
  get 'foods',          to:'foods#index'      # returns all foods 
  get 'foods/:id',      to:'foods#show'       # return 1 food from db match id:
  post 'foods',         to: 'foods#create'    # client send in params{food:{name,price}} create food
  put 'foods/:id',      to: 'foods#update'    # client send in params{food:{name,price}} update food by id
  delete 'foods/:id',   to: 'foods#destroy'   # deletes by id
  end
end




# resources :foods