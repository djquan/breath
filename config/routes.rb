Breath::Application.routes.draw do
  get "app", to: "root#root"
  resources :users
  resource :session, only: [:create, :destroy]

  namespace "api", defaults: { format: :json } do 
    resources :projects, only: [:index, :show, :create, :destroy, :update]

    resources :tasks, only: [:index, :show, :create, :destroy, :update] do
      post "assign_user", to: "tasks#assign_user"
      post "add_tag", to: "tags#add_tag"
      post "upload-file", to: "attachments#upload_file"
    end
    resources :teams, only: [:create, :destroy]
    resources :comments, only: [:create, :destroy]
    post "teams/add_user", to: "teams#add_user"
    post "teams/leave_team", to: "teams#leave_team"
  end

  root to: "sessions#new"
end
