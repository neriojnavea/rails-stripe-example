Rails.application.routes.draw do
  devise_for :users
 
  authenticated do
    root 'main#index', as: :authenticated_root 
  end

  root 'main#index'
  get '*path', to: 'main#index'

  resources :charges, only: [:create]
end
