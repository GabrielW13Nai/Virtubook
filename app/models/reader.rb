class Reader < ApplicationRecord
  has_many :books
  has_many :admins, through: :books
  has_many :author_books
end
