Rails.application.routes.draw do
  devise_for :users
 
  authenticated do
    root 'main#index', as: :authenticated_root
  end

  root 'main#index'
  get '*path', to: 'main#index'

  resources :customers, only: [:create, :update, :destroy]
  resources :documents, only: [:create, :update, :destroy]
end
