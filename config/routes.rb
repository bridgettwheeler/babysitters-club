Rails.application.routes.draw do
  namespace :api do
  resources :bookings
  resources :kids
  resources :babysitters
  resources :users
  end
  
end
