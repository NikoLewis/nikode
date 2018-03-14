Rails.application.routes.draw do
  # resources provide routes for your controllers
  resources :events
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get 'isLoggedIn', :to => 'users#is_logged_in'
  post 'users/login', :to => 'users#login'
end
