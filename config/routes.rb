Rails.application.routes.draw do
  
  resources :matches, only: [:create, :index]
  resources :messages
  resources :photos
  resources :users, only: [:index, :show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"
  post "/signup", to: "users#create"
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get '/dist/output.css', to: redirect('/src/styles/index.css')
end
