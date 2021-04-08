class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :gamename
      t.string :studio
      t.text :description
      t.string :genre
      t.boolean :coop
      t.boolean :multi
      t.boolean :single
      t.string :esrb
      t.date :releasedate
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
