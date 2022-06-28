Rails.application.routes.draw do
  namespace :api do
  resources :bookings
  resources :kids
  resources :babysitters
  resources :users
  end

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  delete "/users/:id", to: "users#destroy"
  
end
