class Drink < ApplicationRecord
  validates :name, uniqueness: true
end
