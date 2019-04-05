Rails.application.routes.draw do
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'
  resources :companies, only: [:index, :create, :show]
  post '/users', to: 'users#create'
  get '/companies/:ticker/financials', to: 'companies#return_fins'
end

