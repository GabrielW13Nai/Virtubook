class Reader < ApplicationRecord
  has_many :reader_books
  has_many :books, through: :reader_books
end
