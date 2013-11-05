Breath::Application.routes.draw do
  get "app", to: "root#root"
  resources :users
  resource :session, only: [:create, :destroy]

  namespace "api", defaults: { format: :json } do 
    resources :projects, only: [:index, :show, :create, :destroy, :update]
    resources :tasks, only: [:index, :show, :create, :destroy, :update]
    resources :teams, only: [:create, :destroy]
  end

  root to: "sessions#new"
end
