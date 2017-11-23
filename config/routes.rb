Rails.application.routes.draw do
  get 'users/login'

  post 'sign_in' => "users#sign_in"
  post 'details' => "welcome#details"
  get "manager" => "welcome#manager"

  root 'welcome#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
