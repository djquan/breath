Breath::Application.routes.draw do
  get "app", to: "root#root"
  resources :users
  resource :session, only: [:create, :destroy]

  namespace "api", defaults: { format: :json } do 
    resources :projects, only: [:create, :destroy, :update]
  end

  root to: "sessions#new"
end
