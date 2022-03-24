Rails.application.routes.draw do
  
  resources :tweets
  resources :subscriptions
  resources :comments
  resources :likes
  resources :tweetthreads
  resources :users, only: [:index, :show, :create]
  # resources :sessions

  get "/comments/tweetthread/:id", to: "comments#showForThread"

  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  post "/signup", to: "users#create"
  get "/authorized_user", to: "users#show"

  get "/subscribed_threads/:id", to: "tweetthreads#subscribed_threads"
  # destroy "/logout", to: "sessions#logout"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
