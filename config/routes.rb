Rails.application.routes.draw do
  resources :author_books
  resources :books, [:index, :show]
  resources :readers
  resources :admins, only: [:index, :show]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index

  resources :books, only: [:index, :show]
end
