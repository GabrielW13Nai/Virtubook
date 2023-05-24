class AuthorBook < ApplicationRecord
  belongs_to :reader
  belongs_to :admin
  belongs_to :book
end
