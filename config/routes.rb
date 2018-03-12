Rails.application.routes.draw do
  devise_for :users

  authenticated do
    root 'main#index', as: :authenticated_root
  end

  root 'main#index'
  get '/customers', to: 'main#index'
  get '/documents', to: 'main#index'

  namespace :api do
    resources :customers, only: [:create, :update, :destroy, :index]
    resources :documents, only: [:create, :update, :destroy, :index]
  end
end
