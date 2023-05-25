class Book < ApplicationRecord
  has_many :reader_book
  has_many :readers, through: :reader_book
end
