Breath::Application.routes.draw do
  get "root/root"

  root to: "root#root"
end
