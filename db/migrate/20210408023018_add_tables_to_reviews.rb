class AddTablesToReviews < ActiveRecord::Migration[6.1]
  def change
    
    add_column :reviews, :body, :text
    add_column :reviews, :image, :string
    add_column :reviews, :game_play, :integer
    add_column :reviews, :visual, :integer
    add_column :reviews, :soundtrack, :integer

  end
end
