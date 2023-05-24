class Book < ApplicationRecord
  belongs_to :reader
  belongs_to :admin

  has_many :author_books
end
