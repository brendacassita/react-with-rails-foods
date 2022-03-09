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


  get 'drinks',         to: 'drinks#index'    # let res =  await axios.get('api/drinks')
  get 'drinks/:id',     to: 'drinks#show'     # let res =  await axios.get('api/drinks/1')
  post 'drinks',        to: 'drinks#create'   # let res =  await axios.post('api/drinks', {name: drink here})
  put 'drinks/:id',     to: 'drinks#update'   # let res =  await axios.put('api/drinks', {id: 1, name: updated})
  delete 'drinks/:id',  to: 'drinks#destroy'  # let res =  await axios.delete('api/drinks/1')
  end
end




# resources :foods