class AddTablesToReviews < ActiveRecord::Migration[6.1]
  def change
    
    add_column :reviews, :body, :text
    add_column :reviews, :image, :string
    add_column :reviews, :game_play, :string
    add_column :reviews, :visual, :string
    add_column :reviews, :soundtrack, :string

  end
end
