Rails.application.routes.draw do
  resources :reader_books
  resources :books, only: [:index, :show, :create, :destroy]
  resources :readers


  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index

end
