Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api do
      resources :games do
        resources :reviews
    end
    get 'search', to: 'games#search'
    
    resources :users do
      resources :games do
        resources :reviews
      end
      
    end
  end
  get '*other', to: 'static#index'
end
