Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


namespace :api do
  get 'foods',          to:'foods#index'     # returns all foods
  get 'foods/:id',      to:'foods#show'      # return 1 food from db match id:
  post 'foods',         to: 'foods#create'
  put 'foods/:id',      to: 'foods#update'
  delete 'foods/:id',   to: 'foods#destroy'
  end
end