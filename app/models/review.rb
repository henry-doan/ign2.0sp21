class Review < ApplicationRecord
  belongs_to :user
  has_many :games, through: :users
end
