class AddGameToReview2 < ActiveRecord::Migration[6.1]
  def change
    add_reference :reviews, :game, null: false, foreign_key: true
  end
end
