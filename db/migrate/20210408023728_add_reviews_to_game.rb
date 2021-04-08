class AddReviewsToGame < ActiveRecord::Migration[6.1]
  def change
    add_reference :games, :reviews, null: false, foreign_key: true
  end
end
