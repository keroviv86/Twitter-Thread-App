Rails.application.routes.draw do
  
  resources :user_join_films
  resources :films
  # resources :users, only: [:index, :show, :create]
  # resources :sessions

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"
  # destroy "/logout", to: "sessions#logout"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
