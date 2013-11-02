Breath::Application.routes.draw do
  get "app", to: "root#root"
  resources :users
  resource :session, only: [:create, :destroy]
  root to: "sessions#new"
end
