class Admin < ApplicationRecord
  has_many :books
  has_many :users, through: :books
  has_many :readers, through: :books
end
