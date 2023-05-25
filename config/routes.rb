Rails.application.routes.draw do
  resources :books, only: [:index, :show, :create, :destroy]
  resources :author_books
  resources :readers
  resources :admins, only: [:index, :show]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index

end
