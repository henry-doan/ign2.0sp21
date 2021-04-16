class RemoveReviewsFromGames < ActiveRecord::Migration[6.1]
  def change
    remove_reference :games, :reviews, null: false, foreign_key: true
  end
end
