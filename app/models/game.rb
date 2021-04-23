class Game < ApplicationRecord
  belongs_to :user
  has_many :reviews, dependent: :destroy

  def self.search(search)
    if search.length >= 3
      Game.where('gamename ILIKE ?', "%#{search}%" )
        .or(Game.where('description ILIKE ?', "%#{search}%")
        .or (Game.where('genre ILIKE ?', "%#{search}%")))
    end
  end
end


